/* Copyright 2021 i2c Inc. All rights reserved. */
import { ActiveOverlay } from './ActiveOverlay.js';
import { OverlayTimer } from './overlay-timer.js';
import '../active-overlay.js';
function isLeftClick(event) {
    return event.button === 0;
}
function hasModifier(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
export class OverlayStack {
    constructor() {
        this.overlays = [];
        this.preventMouseRootClose = false;
        this.root = document.body;
        this.handlingResize = false;
        this.overlayTimer = new OverlayTimer();
        this.canTabTrap = true;
        this.trappingInited = false;
        this.handleMouseCapture = (event) => {
            const topOverlay = this.topOverlay;
            if (!event.target ||
                !topOverlay ||
                !topOverlay.overlayContent ||
                hasModifier(event) ||
                !isLeftClick(event)) {
                this.preventMouseRootClose = true;
                return;
            }
            if (event.target instanceof Node) {
                const path = event.composedPath();
                if (path.indexOf(topOverlay.overlayContent) >= 0) {
                    this.preventMouseRootClose = true;
                    return;
                }
                this.preventMouseRootClose = false;
            }
        };
        /**
         * A "longpress" occurs before the "click" that creates it has occured.
         * In that way the first click will still be part of the "longpress" and
         * not part of closing the overlay.
         */
        this._doesNotCloseOnFirstClick = false;
        this.handleMouse = (event) => {
            if (this._doesNotCloseOnFirstClick) {
                this._doesNotCloseOnFirstClick = false;
                return;
            }
            if (this.preventMouseRootClose || event.defaultPrevented) {
                return;
            }
            this.closeTopOverlay();
        };
        this.handleKeyUp = (event) => {
            if (event.code === 'Escape') {
                const overlay = this.topOverlay;
                this.closeTopOverlay();
                overlay && overlay.trigger.focus();
            }
        };
        this.handleResize = () => {
            if (this.handlingResize)
                return;
            this.handlingResize = true;
            requestAnimationFrame(async () => {
                const promises = this.overlays.map(overlay => overlay.updateOverlayPosition());
                await Promise.all(promises);
                this.handlingResize = false;
            });
        };
        this.addEventListeners();
    }
    initTabTrapping() {
        /* c8 ignore next 4 */
        if (this.document.body.shadowRoot) {
            this.canTabTrap = false;
            return;
        }
        this.document.body.attachShadow({ mode: 'open' });
        /* c8 ignore next 3 */
        if (!this.document.body.shadowRoot) {
            return;
        }
        const root = this.document.body.shadowRoot;
        root.innerHTML = `
            <div id="actual"><slot></slot></div>
            <style>
            #actual {
                position: relative;
                height: calc(100% - var(--swc-body-margins-block, 0px));
                z-index: 0;
                min-height: calc(100vh - var(--swc-body-margins-block, 0px));
            }
            #holder {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-flow: column;
                height: 100%;
                width: 100%;
                top: 0;
                left: 0;
                position: fixed;
            }
            #holder[hidden] {
                display: none !important;
            }
            #actual[tabindex="-1"] {
                pointer-events: none;  /* just in case? */
            }
            </style>
            <div id="holder" hidden><slot name="open"></slot></div>
        `;
        this.tabTrapper = root.querySelector('#actual');
        this.overlayHolder = root.querySelector('#holder');
        this.tabTrapper.attachShadow({ mode: 'open' });
        if (this.tabTrapper.shadowRoot) {
            this.tabTrapper.shadowRoot.innerHTML = '<slot></slot>';
        }
    }
    startTabTrapping() {
        if (!this.trappingInited) {
            this.initTabTrapping();
            this.trappingInited = true;
        }
        /* c8 ignore next 3 */
        if (!this.canTabTrap) {
            return;
        }
        this.tabTrapper.tabIndex = -1;
        this.tabTrapper.setAttribute('aria-hidden', 'true');
        this.overlayHolder.hidden = false;
        requestAnimationFrame(() => {
            const bodyStyles = getComputedStyle(document.body);
            this.tabTrapper.style.setProperty('--swc-body-margins-inline', `calc(${bodyStyles.marginLeft} + ${bodyStyles.marginRight})`);
            this.tabTrapper.style.setProperty('--swc-body-margins-block', `calc(${bodyStyles.marginTop} + ${bodyStyles.marginBottom})`);
        });
    }
    stopTabTrapping() {
        /* c8 ignore next 3 */
        if (!this.canTabTrap || !this.trappingInited) {
            return;
        }
        this.tabTrapper.removeAttribute('tabindex');
        this.tabTrapper.removeAttribute('aria-hidden');
        this.overlayHolder.hidden = true;
    }
    get document() {
        return this.root.ownerDocument /* c8 ignore next */ || document;
    }
    get topOverlay() {
        return this.overlays.slice(-1)[0];
    }
    findOverlayForContent(overlayContent) {
        for (const item of this.overlays) {
            if (overlayContent === item.overlayContent) {
                return item;
            }
        }
        return undefined;
    }
    addEventListeners() {
        this.document.addEventListener('click', this.handleMouseCapture, true);
        this.document.addEventListener('click', this.handleMouse);
        this.document.addEventListener('keyup', this.handleKeyUp);
        window.addEventListener('resize', this.handleResize);
    }
    isClickOverlayActiveForTrigger(trigger) {
        return this.overlays.some(item => trigger === item.trigger && item.interaction === 'click');
    }
    async openOverlay(details) {
        if (this.findOverlayForContent(details.content)) {
            return false;
        }
        if (details.notImmediatelyClosable) {
            this._doesNotCloseOnFirstClick = true;
        }
        if (details.interaction === 'modal') {
            this.startTabTrapping();
        }
        const contentWithLifecycle = details.content;
        if (contentWithLifecycle.overlayWillOpenCallback) {
            const { trigger } = details;
            contentWithLifecycle.overlayWillOpenCallback({ trigger });
        }
        if (details.delayed) {
            const cancelledPromise = this.overlayTimer.openTimer(details.content);
            const promises = [cancelledPromise];
            if (details.abortPromise) {
                promises.push(details.abortPromise);
            }
            const cancelled = await Promise.race(promises);
            if (cancelled) {
                if (contentWithLifecycle.overlayOpenCancelledCallback) {
                    const { trigger } = details;
                    contentWithLifecycle.overlayOpenCancelledCallback({
                        trigger,
                    });
                }
                return cancelled;
            }
        }
        if (details.interaction === 'click') {
            this.closeAllHoverOverlays();
        }
        else if (details.interaction === 'hover' &&
            this.isClickOverlayActiveForTrigger(details.trigger)) {
            // Don't show a hover popover if the click popover is already active
            return true;
        }
        const activeOverlay = ActiveOverlay.create(details);
        if (this.overlays.length) {
            const topOverlay = this.overlays[this.overlays.length - 1];
            topOverlay.obscure(activeOverlay.interaction);
        }
        document.body.appendChild(activeOverlay);
        /**
         * The following work to make the new overlay the "top" of the stack
         * has to happen AFTER the current call stack completes in case there
         * is work there in to remove the previous "top" overlay.
         */
        return new Promise(res => requestAnimationFrame(res)).then(async () => {
            this.overlays.push(activeOverlay);
            await activeOverlay.updateComplete;
            this.addOverlayEventListeners(activeOverlay);
            if (typeof contentWithLifecycle.open !== 'undefined') {
                contentWithLifecycle.open = true;
            }
            if (contentWithLifecycle.overlayOpenCallback) {
                const { trigger } = activeOverlay;
                contentWithLifecycle.overlayOpenCallback({ trigger });
            }
            if (details.receivesFocus === 'auto') {
                activeOverlay.focus();
            }
            details.trigger.dispatchEvent(new CustomEvent('sp-opened', {
                bubbles: true,
                composed: true,
                cancelable: true,
                detail: {
                    interaction: details.interaction,
                },
            }));
            return false;
        });
    }
    addOverlayEventListeners(activeOverlay) {
        activeOverlay.addEventListener('close', () => {
            this.hideAndCloseOverlay(activeOverlay);
        });
        switch (activeOverlay.interaction) {
            case 'replace':
                this.addReplaceOverlayEventListeners(activeOverlay);
                break;
            case 'inline':
                this.addInlineOverlayEventListeners(activeOverlay);
                break;
        }
    }
    addReplaceOverlayEventListeners(activeOverlay) {
        activeOverlay.addEventListener('keydown', (event) => {
            const { code } = event;
            /* c8 ignore next */
            if (code !== 'Tab')
                return;
            event.stopPropagation();
            this.closeOverlay(activeOverlay.overlayContent);
            activeOverlay.tabbingAway = true;
            activeOverlay.trigger.focus();
            activeOverlay.trigger.dispatchEvent(new KeyboardEvent('keydown', event));
        });
    }
    addInlineOverlayEventListeners(activeOverlay) {
        activeOverlay.trigger.addEventListener('keydown', activeOverlay.handleInlineTriggerKeydown);
        activeOverlay.addEventListener('keydown', (event) => {
            const { code, shiftKey } = event;
            /* c8 ignore next */
            if (code !== 'Tab')
                return;
            activeOverlay.tabbingAway = true;
            if (shiftKey) {
                const returnFocusElement = document.createElement('span');
                returnFocusElement.tabIndex = -1;
                if (activeOverlay.trigger.hasAttribute('slot')) {
                    returnFocusElement.slot = activeOverlay.trigger.slot;
                }
                activeOverlay.trigger.insertAdjacentElement('afterend', returnFocusElement);
                returnFocusElement.focus();
                returnFocusElement.remove();
                return;
            }
            event.stopPropagation();
            this.closeOverlay(activeOverlay.overlayContent);
            activeOverlay.trigger.focus();
        });
    }
    closeOverlay(content) {
        this.overlayTimer.close(content);
        requestAnimationFrame(() => {
            const overlay = this.findOverlayForContent(content);
            this.hideAndCloseOverlay(overlay);
        });
    }
    closeAllHoverOverlays() {
        for (const overlay of this.overlays) {
            if (overlay.interaction === 'hover') {
                this.hideAndCloseOverlay(overlay, false);
            }
        }
    }
    async hideAndCloseOverlay(overlay, animated) {
        if (overlay) {
            await overlay.hide(animated);
            const contentWithLifecycle = overlay.overlayContent;
            if (typeof contentWithLifecycle.open !== 'undefined') {
                contentWithLifecycle.open = false;
            }
            if (contentWithLifecycle.overlayCloseCallback) {
                const { trigger } = overlay;
                contentWithLifecycle.overlayCloseCallback({ trigger });
            }
            if (overlay.state != 'dispose')
                return;
            const index = this.overlays.indexOf(overlay);
            if (index >= 0) {
                this.overlays.splice(index, 1);
            }
            if (this.overlays.length) {
                const topOverlay = this.overlays[this.overlays.length - 1];
                topOverlay.feature();
                if (topOverlay.interaction === 'modal' ||
                    topOverlay.hasModalRoot) {
                    topOverlay.focus();
                }
                else {
                    this.stopTabTrapping();
                }
            }
            else {
                this.stopTabTrapping();
                if (overlay.interaction === 'modal' ||
                    ((overlay.interaction === 'replace' ||
                        overlay.interaction === 'inline') &&
                        !overlay.tabbingAway)) {
                    const overlayRoot = overlay.overlayContent.getRootNode();
                    const overlayContentActiveElement = overlayRoot.activeElement;
                    const triggerRoot = overlay.trigger.getRootNode();
                    const triggerActiveElement = triggerRoot.activeElement;
                    if (overlay.overlayContent.contains(overlayContentActiveElement) ||
                        overlay.trigger
                            .getRootNode()
                            .contains(triggerActiveElement) ||
                        (triggerRoot.host &&
                            triggerRoot.host === triggerActiveElement)) {
                        overlay.trigger.focus();
                    }
                }
                overlay.tabbingAway = false;
            }
            overlay.remove();
            overlay.dispose();
            overlay.trigger.dispatchEvent(new CustomEvent('sp-closed', {
                bubbles: true,
                composed: true,
                cancelable: true,
                detail: {
                    interaction: overlay.interaction,
                },
            }));
        }
    }
    closeTopOverlay() {
        return this.hideAndCloseOverlay(this.topOverlay);
    }
}
//# sourceMappingURL=overlay-stack.js.map