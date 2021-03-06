/* Copyright 2021 i2c Inc. All rights reserved. */
import { __decorate } from "tslib";
import { property, html, query, } from '../../base/src/index';
import { LikeAnchor } from '../../shared/src/like-anchor.js';
import { Focusable } from '../../shared/src/focusable.js';
import { ObserveSlotText, ObserveSlotPresence } from '../../shared/src/index';
export class ButtonBase extends LikeAnchor(ObserveSlotText(ObserveSlotPresence(Focusable, '[slot="icon"]'))) {
    constructor() {
        super();
        this.active = false;
        this.type = 'button';
        this.proxyFocus = this.proxyFocus.bind(this);
        this.addEventListener('click', this.handleClickCapture, {
            capture: true,
        });
    }
    get hasIcon() {
        return this.slotContentIsPresent;
    }
    get hasLabel() {
        return this.slotHasContent;
    }
    get focusElement() {
        return this;
    }
    get buttonContent() {
        const content = [
            html `
                <div id="label" ?hidden="${!this.hasLabel}">
                    <slot
                        id="slot"
                        @slotchange="${this.manageTextObservedSlot}"
                    ></slot>
                </div>
            `,
        ];
        if (this.hasIcon) {
            content.unshift(html `
                <slot
                    class="icon"
                    name="icon"
                    ?icon-only="${!this.hasLabel}"
                ></slot>
            `);
        }
        return content;
    }
    click() {
        if (this.disabled) {
            return;
        }
        if (this.shouldProxyClick()) {
            return;
        }
        super.click();
    }
    handleClickCapture(event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
            event.stopPropagation();
            return false;
        }
    }
    proxyFocus() {
        this.focus();
    }
    shouldProxyClick() {
        let handled = false;
        if (this.anchorElement) {
            this.anchorElement.click();
            handled = true;
        }
        else if (this.type !== 'button') {
            const proxy = document.createElement('button');
            proxy.type = this.type;
            this.insertAdjacentElement('afterend', proxy);
            proxy.click();
            proxy.remove();
            handled = true;
        }
        return handled;
    }
    renderAnchor() {
        return html `
            ${this.buttonContent}
            ${super.renderAnchor({
            id: 'button',
            ariaHidden: true,
            className: 'button anchor hidden',
        })}
        `;
    }
    renderButton() {
        return html ` ${this.buttonContent} `;
    }
    render() {
        return this.href && this.href.length > 0
            ? this.renderAnchor()
            : this.renderButton();
    }
    handleKeydown(event) {
        const { code } = event;
        switch (code) {
            case 'Space':
                event.preventDefault();
                if (typeof this.href === 'undefined') {
                    this.addEventListener('keyup', this.handleKeyup);
                    this.active = true;
                }
                break;
            default:
                break;
        }
    }
    handleKeypress(event) {
        const { code } = event;
        switch (code) {
            case 'Enter':
                this.click();
                break;
            default:
                break;
        }
    }
    handleKeyup(event) {
        const { code } = event;
        switch (code) {
            case 'Space':
                this.removeEventListener('keyup', this.handleKeyup);
                this.active = false;
                this.click();
                break;
            default:
                break;
        }
    }
    handleRemoveActive() {
        this.active = false;
    }
    handlePointerdown() {
        this.active = true;
    }
    manageAnchor() {
        if (this.href && this.href.length > 0) {
            this.removeAttribute('role');
            this.removeEventListener('click', this.shouldProxyClick);
        }
        else if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'button');
            this.addEventListener('click', this.shouldProxyClick);
        }
    }
    firstUpdated(changed) {
        super.firstUpdated(changed);
        if (!this.hasAttribute('tabindex')) {
            this.tabIndex = 0;
        }
        this.manageAnchor();
        this.addEventListener('keydown', this.handleKeydown);
        this.addEventListener('keypress', this.handleKeypress);
        this.addEventListener('pointerdown', this.handlePointerdown);
    }
    updated(changed) {
        super.updated(changed);
        if (changed.has('href')) {
            this.manageAnchor();
        }
        if (changed.has('label')) {
            this.setAttribute('aria-label', this.label || '');
        }
        if (changed.has('active')) {
            if (this.active) {
                this.addEventListener('focusout', this.handleRemoveActive);
                this.addEventListener('pointerup', this.handleRemoveActive);
                this.addEventListener('pointerleave', this.handleRemoveActive);
            }
            else {
                this.removeEventListener('focusout', this.handleRemoveActive);
                this.removeEventListener('pointerup', this.handleRemoveActive);
                this.removeEventListener('pointerleave', this.handleRemoveActive);
            }
        }
        if (this.anchorElement) {
            this.anchorElement.addEventListener('focus', this.proxyFocus);
            this.anchorElement.tabIndex = -1;
        }
    }
}
__decorate([
    property({ type: Boolean, reflect: true })
], ButtonBase.prototype, "active", void 0);
__decorate([
    property({ type: String })
], ButtonBase.prototype, "type", void 0);
__decorate([
    query('.anchor')
], ButtonBase.prototype, "anchorElement", void 0);
//# sourceMappingURL=ButtonBase.js.map