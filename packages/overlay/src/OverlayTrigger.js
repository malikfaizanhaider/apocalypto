/* Copyright 2021 i2c Inc. All rights reserved. */
import { __decorate } from "tslib";
import { html, LitElement, property, } from '../../base/src/index';
import { openOverlay } from './loader.js';
import overlayTriggerStyles from './overlay-trigger.css.js';
/**
 * A overlay trigger component for displaying overlays relative to other content.
 * @element overlay-trigger
 *
 * @slot trigger - The content that will trigger the various overlays
 * @slot hover-content - The content that will be displayed on hover
 * @slot click-content - The content that will be displayed on click
 * @slot longpress-content - The content that will be displayed on click
 *
 * @fires sp-opened - Announces that the overlay has been opened
 * @fires sp-closed - Announces that the overlay has been closed
 */
export class OverlayTrigger extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * @type {"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | "none"}
         * @attr
         */
        this.placement = 'bottom';
        this.offset = 6;
        this.disabled = false;
        this.hoverOverlayReady = Promise.resolve();
        this.abortOverlay = () => {
            return;
        };
    }
    static get styles() {
        return [overlayTriggerStyles];
    }
    handleClose(event) {
        if ((event === null || event === void 0 ? void 0 : event.detail.interaction) !== this.open &&
            (event === null || event === void 0 ? void 0 : event.detail.interaction) !== this.type) {
            return;
        }
        this.removeAttribute('open');
    }
    render() {
        // Keyboard event availability documented in README.md
        /* eslint-disable lit-a11y/click-events-have-key-events */
        return html `
            <div
                id="trigger"
                @click="${this.onTrigger}"
                @longpress="${this.onTrigger}"
                @mouseenter="${this.onTrigger}"
                @mouseleave="${this.onTrigger}"
                @focusin="${this.onTrigger}"
                @focusout="${this.onTrigger}"
                @sp-closed="${this.handleClose}"
            >
                <slot
                    @slotchange="${this.onTargetSlotChange}"
                    name="trigger"
                ></slot>
            </div>
            <div id="overlay-content">
                <slot
                    @slotchange="${this.onClickSlotChange}"
                    name="click-content"
                ></slot>
                <slot
                    @slotchange="${this.onLongpressSlotChange}"
                    name="longpress-content"
                ></slot>
                <slot
                    @slotchange="${this.onHoverSlotChange}"
                    name="hover-content"
                ></slot>
            </div>
        `;
        /* eslint-enable lit-a11y/click-events-have-key-events */
    }
    updated(changes) {
        super.updated(changes);
        if (this.disabled &&
            this.closeClickOverlay &&
            changes.has('disabled')) {
            this.closeClickOverlay();
        }
        if (changes.has('open')) {
            this.manageOpen(changes.get('open'));
        }
    }
    manageOpen(previous) {
        switch (this.open) {
            case 'click':
                if (!this.closeClickOverlay) {
                    this.onTriggerClick();
                }
                break;
            case 'hover':
                if (!this.closeHoverOverlay) {
                    this.onTriggerMouseEnter();
                }
                break;
            case 'longpress':
                if (!this.closeLongpressOverlay) {
                    this.onTriggerLongpress();
                    this.onTriggerMouseLeave();
                }
                break;
            default:
                switch (previous) {
                    case 'click':
                        if (this.closeClickOverlay) {
                            this.closeClickOverlay();
                            delete this.closeClickOverlay;
                        }
                        break;
                    case 'longpress':
                        if (this.closeLongpressOverlay) {
                            this.closeLongpressOverlay();
                            delete this.closeLongpressOverlay;
                        }
                        break;
                    case 'hover':
                        this.onTriggerMouseLeave();
                        break;
                    default:
                        break;
                }
                break;
        }
    }
    get overlayOptions() {
        return {
            offset: this.offset,
            placement: this.placement,
            receivesFocus: this.type && this.type !== 'inline' ? 'auto' : undefined,
        };
    }
    onTrigger(event) {
        if (this.disabled) {
            return;
        }
        switch (event.type) {
            case 'mouseenter':
            case 'focusin':
                if (!this.open && this.hoverContent) {
                    this.open = 'hover';
                }
                return;
            case 'mouseleave':
            case 'focusout':
                if (this.open === 'hover') {
                    this.handleClose();
                }
                return;
            case 'click':
                if (this.clickContent) {
                    this.open = event.type;
                }
                else if (this.closeHoverOverlay) {
                    event.preventDefault();
                }
                return;
            case 'longpress':
                if (this.longpressContent) {
                    this._longpressEvent = event;
                    this.open = event.type;
                }
                return;
        }
    }
    prepareToFocusOverlayContent(overlayContent) {
        if (this.type !== 'modal') {
            return;
        }
        const firstFocusable = overlayContent.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [focusable]');
        if (!firstFocusable) {
            overlayContent.tabIndex = 0;
        }
    }
    async onTriggerClick() {
        if (!this.targetContent || !this.clickContent) {
            return;
        }
        const { targetContent, clickContent } = this;
        this.prepareToFocusOverlayContent(clickContent);
        this.closeClickOverlay = await OverlayTrigger.openOverlay(targetContent, this.type ? this.type : 'click', clickContent, this.overlayOptions);
    }
    async onTriggerLongpress() {
        var _a, _b;
        if (!this.targetContent || !this.longpressContent) {
            return;
        }
        const { targetContent, longpressContent } = this;
        this.prepareToFocusOverlayContent(longpressContent);
        const notImmediatelyClosable = ((_b = (_a = this._longpressEvent) === null || _a === void 0 ? void 0 : _a.detail) === null || _b === void 0 ? void 0 : _b.source) !== 'keyboard';
        this.closeLongpressOverlay = await OverlayTrigger.openOverlay(targetContent, this.type ? this.type : 'longpress', longpressContent, {
            ...this.overlayOptions,
            receivesFocus: 'auto',
            notImmediatelyClosable,
        });
        this._longpressEvent = undefined;
    }
    async onTriggerMouseEnter() {
        if (!this.targetContent || !this.hoverContent) {
            return;
        }
        let overlayReady = () => {
            return;
        };
        this.hoverOverlayReady = new Promise(res => {
            overlayReady = res;
        });
        const abortPromise = new Promise(res => {
            this.abortOverlay = res;
        });
        const { targetContent, hoverContent } = this;
        this.closeHoverOverlay = await OverlayTrigger.openOverlay(targetContent, 'hover', hoverContent, {
            abortPromise,
            ...this.overlayOptions,
        });
        overlayReady();
    }
    async onTriggerMouseLeave() {
        if (this.abortOverlay)
            this.abortOverlay(true);
        await this.hoverOverlayReady;
        if (this.closeHoverOverlay) {
            this.closeHoverOverlay();
            delete this.closeHoverOverlay;
        }
    }
    onClickSlotChange(event) {
        this.clickContent = this.extractSlotContentFromEvent(event);
        this.manageOpen();
    }
    onLongpressSlotChange(event) {
        this.longpressContent = this.extractSlotContentFromEvent(event);
        this.manageOpen();
    }
    onHoverSlotChange(event) {
        this.hoverContent = this.extractSlotContentFromEvent(event);
        this.manageOpen();
    }
    onTargetSlotChange(event) {
        this.targetContent = this.extractSlotContentFromEvent(event);
    }
    extractSlotContentFromEvent(event) {
        const slot = event.target;
        const nodes = slot.assignedNodes({ flatten: true });
        return nodes.find(node => node instanceof HTMLElement);
    }
    disconnectedCallback() {
        if (this.closeClickOverlay) {
            this.closeClickOverlay();
            delete this.closeClickOverlay;
        }
        if (this.closeHoverOverlay) {
            this.closeHoverOverlay();
            delete this.closeClickOverlay;
        }
        super.disconnectedCallback();
    }
}
OverlayTrigger.openOverlay = async (target, interaction, content, options) => {
    return await openOverlay(target, interaction, content, options);
};
__decorate([
    property({ reflect: true })
], OverlayTrigger.prototype, "placement", void 0);
__decorate([
    property()
], OverlayTrigger.prototype, "type", void 0);
__decorate([
    property({ type: Number, reflect: true })
], OverlayTrigger.prototype, "offset", void 0);
__decorate([
    property({ reflect: true })
], OverlayTrigger.prototype, "open", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], OverlayTrigger.prototype, "disabled", void 0);
//# sourceMappingURL=OverlayTrigger.js.map