import { __decorate } from "tslib";
import { html, ifDefined, property, SpectrumElement, } from '../../base/src/index';
import { reparentChildren } from '../../shared/src/index';
import styles from './active-overlay.css.js';
import { applyMaxSize, createPopper, maxSize } from './popper.js';
const stateMachine = {
    initial: 'idle',
    states: {
        idle: {
            on: {
                active: 'active',
            },
        },
        active: {
            on: {
                visible: 'visible',
                hiding: 'hiding',
                idle: 'idle',
            },
        },
        visible: {
            on: {
                hiding: 'hiding',
                idle: 'idle',
            },
        },
        hiding: {
            on: {
                dispose: 'dispose',
            },
        },
        dispose: {
            on: {
                disposed: 'disposed',
            },
        },
        disposed: {
            on: {},
        },
    },
};
const stateTransition = (state, event) => {
    if (!state)
        return stateMachine.initial;
    /* c8 ignore next */
    if (!event)
        return state;
    return stateMachine.states[state].on[event] || state;
};
export class ActiveOverlay extends SpectrumElement {
    constructor() {
        super();
        this._state = stateTransition();
        this.animating = false;
        this.tabbingAway = false;
        this.offset = 6;
        this.interaction = 'hover';
        this.positionAnimationFrame = 0;
        this.willNotifyClosed = false;
        this.handleInlineTriggerKeydown = (event) => {
            const { code, shiftKey } = event;
            /* c8 ignore next */
            if (code !== 'Tab')
                return;
            if (shiftKey) {
                this.tabbingAway = true;
                this.dispatchEvent(new Event('close'));
                return;
            }
            event.stopPropagation();
            event.preventDefault();
            this.focus();
        };
        this.stealOverlayContentPromise = Promise.resolve();
        this.stealOverlayContentPromise = new Promise(res => (this.stealOverlayContentResolver = res));
    }
    get state() {
        return this._state;
    }
    set state(state) {
        const nextState = stateTransition(this.state, state);
        if (nextState === this.state) {
            return;
        }
        this._state = nextState;
        if (this.state === 'active' ||
            this.state === 'visible' ||
            this.state === 'hiding') {
            this.setAttribute('state', this.state);
        }
        else {
            this.removeAttribute('state');
        }
    }
    focus() {
        const firstFocusable = this.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [focusable]');
        if (firstFocusable) {
            firstFocusable.focus();
            this.removeAttribute('tabindex');
            /* c8 ignore next 3 */
        }
        else {
            super.focus();
        }
    }
    get hasTheme() {
        return !!this.color || !!this.scale;
    }
    static get styles() {
        return [styles];
    }
    get hasModalRoot() {
        return !!this._modalRoot;
    }
    feature() {
        this.tabIndex = 0;
        const parentOverlay = this.trigger.closest('active-overlay');
        const parentIsModal = parentOverlay && parentOverlay.slot === 'open';
        // If an overlay it triggered from within a "modal" overlay, it needs to continue
        // to act like one to get treated correctly in regards to tab trapping.
        if (this.interaction === 'modal' || parentIsModal || this._modalRoot) {
            this.slot = 'open';
            // If this isn't a modal root, walk up the overlays to the next modal root
            // and "feature" each on of the intervening overlays.
            if (this._modalRoot) {
                parentOverlay === null || parentOverlay === void 0 ? void 0 : parentOverlay.feature();
            }
        }
    }
    obscure(nextOverlayInteraction) {
        if (this.slot && nextOverlayInteraction === 'modal') {
            this.removeAttribute('slot');
            // Obscure upto and including the next modal root.
            if (this.interaction !== 'modal') {
                const parentOverlay = this.trigger.closest('active-overlay');
                this._modalRoot = parentOverlay === null || parentOverlay === void 0 ? void 0 : parentOverlay.obscure(nextOverlayInteraction);
                return this._modalRoot;
            }
            return this;
        }
        return undefined;
    }
    firstUpdated(changedProperties) {
        super.firstUpdated(changedProperties);
        /* c8 ignore next */
        if (!this.overlayContent)
            return;
        this.stealOverlayContent(this.overlayContent);
        /* c8 ignore next */
        if (!this.overlayContent || !this.trigger)
            return;
        if (this.placement && this.placement !== 'none') {
            this.popper = createPopper(this.trigger, this, {
                placement: this.placement,
                modifiers: [
                    maxSize,
                    applyMaxSize,
                    {
                        name: 'arrow',
                        options: {
                            element: this.overlayContentTip,
                        },
                    },
                    {
                        name: 'offset',
                        options: {
                            offset: [0, this.offset],
                        },
                    },
                ],
            });
        }
        this.state = 'active';
        document.addEventListener('sp-update-overlays', () => {
            this.updateOverlayPosition();
            this.state = 'visible';
        });
        this.feature();
        this.updateOverlayPosition()
            .then(() => this.applyContentAnimation('spOverlayFadeIn'))
            .then(() => {
            if (this.receivesFocus) {
                this.focus();
            }
        });
    }
    updateOverlayPopperPlacement() {
        /* c8 ignore next */
        if (!this.overlayContent)
            return;
        if (this.dataPopperPlacement) {
            // Copy this attribute to the actual overlay node so that it can use
            // the attribute for styling shadow DOM elements based on the side
            // that popper has chosen for it
            this.overlayContent.setAttribute('placement', this.dataPopperPlacement);
        }
        else if (this.originalPlacement) {
            this.overlayContent.setAttribute('placement', this.originalPlacement);
        }
        else {
            this.overlayContent.removeAttribute('placement');
        }
    }
    updated(changedProperties) {
        if (changedProperties.has('dataPopperPlacement')) {
            this.updateOverlayPopperPlacement();
        }
    }
    open(openDetail) {
        this.extractDetail(openDetail);
    }
    extractDetail(detail) {
        this.overlayContent = detail.content;
        this.overlayContentTip = detail.contentTip;
        this.trigger = detail.trigger;
        this.placement = detail.placement;
        this.offset = detail.offset;
        this.interaction = detail.interaction;
        this.color = detail.theme.color;
        this.scale = detail.theme.scale;
        this.receivesFocus = detail.receivesFocus;
    }
    dispose() {
        /* c8 ignore next */
        if (this.state !== 'dispose')
            return;
        /* c8 ignore next 4 */
        if (this.timeout) {
            clearTimeout(this.timeout);
            delete this.timeout;
        }
        if (this.popper) {
            this.popper.destroy();
            this.popper = undefined;
        }
        this.trigger.removeEventListener('keydown', this.handleInlineTriggerKeydown);
        this.returnOverlayContent();
        this.state = 'disposed';
        if (this.willNotifyClosed) {
            this.overlayContent.dispatchEvent(new Event('sp-overlay-closed'));
            this.willNotifyClosed = false;
        }
    }
    stealOverlayContent(element) {
        this.originalPlacement = element.getAttribute('placement');
        this.restoreContent = reparentChildren([element], this, el => {
            const slotName = el.slot;
            el.removeAttribute('slot');
            return el => {
                el.slot = slotName;
            };
        });
        this.stealOverlayContentResolver();
    }
    returnOverlayContent() {
        /* c8 ignore next */
        if (!this.restoreContent)
            return;
        const [element] = this.restoreContent();
        this.restoreContent = undefined;
        this.willNotifyClosed = true;
        if (this.originalPlacement) {
            element.setAttribute('placement', this.originalPlacement);
            delete this.originalPlacement;
        }
    }
    async updateOverlayPosition() {
        await (document.fonts ? document.fonts.ready : Promise.resolve());
        if (this.popper) {
            await this.popper.update();
        }
    }
    async hide(animated = true) {
        this.state = 'hiding';
        if (animated) {
            await this.applyContentAnimation('spOverlayFadeOut');
        }
        this.state = 'dispose';
    }
    schedulePositionUpdate() {
        // Edge needs a little time to update the DOM before computing the layout
        cancelAnimationFrame(this.positionAnimationFrame);
        this.positionAnimationFrame = requestAnimationFrame(() => this.updateOverlayPosition());
    }
    onSlotChange() {
        this.schedulePositionUpdate();
    }
    connectedCallback() {
        super.connectedCallback();
        this.schedulePositionUpdate();
    }
    applyContentAnimation(animation) {
        return new Promise((resolve) => {
            const contents = this.shadowRoot.querySelector('#contents');
            const doneHandler = (event) => {
                if (animation !== event.animationName)
                    return;
                contents.removeEventListener('animationend', doneHandler);
                contents.removeEventListener('animationcancel', doneHandler);
                this.animating = false;
                resolve(event.type === 'animationcancel');
            };
            contents.addEventListener('animationend', doneHandler);
            contents.addEventListener('animationcancel', doneHandler);
            contents.style.animationName = animation;
            this.animating = true;
        });
    }
    renderTheme(content) {
        const { color, scale } = this;
        return html `
            <cm-theme color="${ifDefined(color)}" scale="${ifDefined(scale)}">
                ${content}
            </cm-theme>
        `;
    }
    render() {
        const content = html `
            <div id="contents">
                <slot @slotchange="${this.onSlotChange}"></slot>
            </div>
        `;
        return this.hasTheme ? this.renderTheme(content) : content;
    }
    static create(details) {
        const overlay = new ActiveOverlay();
        if (details.content) {
            overlay.open(details);
        }
        return overlay;
    }
    async _getUpdateComplete() {
        await super._getUpdateComplete();
        await this.stealOverlayContentPromise;
    }
}
__decorate([
    property()
], ActiveOverlay.prototype, "_state", void 0);
__decorate([
    property({ reflect: true, type: Boolean })
], ActiveOverlay.prototype, "animating", void 0);
__decorate([
    property({ reflect: true })
], ActiveOverlay.prototype, "placement", void 0);
__decorate([
    property({ attribute: false })
], ActiveOverlay.prototype, "color", void 0);
__decorate([
    property({ attribute: false })
], ActiveOverlay.prototype, "receivesFocus", void 0);
__decorate([
    property({ attribute: false })
], ActiveOverlay.prototype, "scale", void 0);
__decorate([
    property({ attribute: 'data-popper-placement' })
], ActiveOverlay.prototype, "dataPopperPlacement", void 0);
//# sourceMappingURL=ActiveOverlay.js.map