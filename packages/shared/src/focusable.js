/* Copyright 2021 i2c Inc. All rights reserved. */
import { __decorate } from "tslib";
import { SpectrumElement, property, } from '../../base/src/index.js';
import { FocusVisiblePolyfillMixin } from './focus-visible.js';
/**
 * Focusable base class handles tabindex setting into shadowed elements automatically.
 */
export class Focusable extends FocusVisiblePolyfillMixin(SpectrumElement) {
    constructor() {
        super(...arguments);
        /**
         * Disable this control. It will not receive focus or events
         */
        this.disabled = false;
        /**
         * When this control is rendered, focus it automatically
         * @private
         */
        this.autofocus = false;
        this._tabIndex = 0;
        this.manipulatingTabindex = false;
    }
    /**
     * The tab index to apply to this control. See general documentation about
     * the tabindex HTML property
     *
     * @private
     */
    get tabIndex() {
        if (this.focusElement === this) {
            const tabindex = this.hasAttribute('tabindex')
                ? Number(this.getAttribute('tabindex'))
                : NaN;
            return !isNaN(tabindex) ? tabindex : -1;
        }
        const tabIndexAttribute = parseFloat(this.hasAttribute('tabindex')
            ? this.getAttribute('tabindex') || '0'
            : '0');
        // When `disabled` tabindex is -1.
        // When host tabindex -1, use that as the cache.
        if (this.disabled || tabIndexAttribute < 0) {
            return -1;
        }
        // When `focusElement` isn't available yet,
        // use host tabindex as the cache.
        if (!this.focusElement) {
            return tabIndexAttribute;
        }
        // All other times, use the tabindex of `focusElement`
        // as the cache for this value.
        return this.focusElement.tabIndex;
    }
    set tabIndex(tabIndex) {
        // Flipping `manipulatingTabindex` to true before a change
        // allows for that change NOT to effect the cached value of tabindex
        if (this.manipulatingTabindex) {
            this.manipulatingTabindex = false;
            return;
        }
        if (this.focusElement === this) {
            if (tabIndex !== this.tabIndex) {
                this._tabIndex = tabIndex;
                const tabindex = this.disabled ? '-1' : '' + tabIndex;
                this.setAttribute('tabindex', tabindex);
            }
            return;
        }
        if (tabIndex === -1) {
            this.addEventListener('pointerdown', this.onPointerdownManagementOfTabIndex);
        }
        else {
            // All code paths are about to address the host tabindex without side effect.
            this.manipulatingTabindex = true;
            this.removeEventListener('pointerdown', this.onPointerdownManagementOfTabIndex);
        }
        if (tabIndex === -1 || this.disabled) {
            // Do not cange the tabindex of `focusElement` as it is the "old" value cache.
            // Make element NOT focusable.
            this.setAttribute('tabindex', '-1');
            this.removeAttribute('focusable');
            if (tabIndex !== -1) {
                // Cache all NON-`-1` values on the `focusElement`.
                this.manageFocusElementTabindex(tabIndex);
            }
            return;
        }
        this.setAttribute('focusable', '');
        if (this.hasAttribute('tabindex')) {
            this.removeAttribute('tabindex');
        }
        else {
            // You can't remove an attribute that isn't there,
            // manually end the `manipulatingTabindex` guard.
            this.manipulatingTabindex = false;
        }
        this.manageFocusElementTabindex(tabIndex);
    }
    onPointerdownManagementOfTabIndex() {
        if (this.tabIndex === -1) {
            this.tabIndex = 0;
            this.focus({ preventScroll: true });
        }
    }
    async manageFocusElementTabindex(tabIndex) {
        if (!this.focusElement) {
            // allow setting these values to be async when needed.
            await this.updateComplete;
        }
        if (tabIndex === null) {
            this.focusElement.removeAttribute('tabindex');
        }
        else {
            this.focusElement.tabIndex = tabIndex;
        }
    }
    /**
     * @private
     */
    get focusElement() {
        throw new Error('Must implement focusElement getter!');
    }
    focus(options) {
        if (this.disabled || !this.focusElement) {
            return;
        }
        if (this.focusElement !== this) {
            this.focusElement.focus(options);
        }
        else {
            HTMLElement.prototype.focus.apply(this, [options]);
        }
    }
    blur() {
        if (this.focusElement !== this) {
            this.focusElement.blur();
        }
        else {
            HTMLElement.prototype.blur.apply(this);
        }
    }
    click() {
        if (this.disabled) {
            return;
        }
        if (this.focusElement !== this) {
            this.focusElement.click();
        }
        else {
            HTMLElement.prototype.click.apply(this);
        }
    }
    manageAutoFocus() {
        if (this.autofocus) {
            /**
             * Trick :focus-visible polyfill into thinking keyboard based focus
             *
             * @private
             **/
            this.dispatchEvent(new KeyboardEvent('keydown', {
                code: 'Tab',
            }));
            this.focusElement.focus();
        }
    }
    firstUpdated(changes) {
        super.firstUpdated(changes);
        this.manageAutoFocus();
        if (!this.hasAttribute('tabindex') ||
            this.getAttribute('tabindex') !== '-1') {
            this.setAttribute('focusable', '');
        }
    }
    update(changedProperties) {
        if (changedProperties.has('disabled')) {
            this.handleDisabledChanged(this.disabled, changedProperties.get('disabled'));
        }
        super.update(changedProperties);
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has('disabled') && this.disabled) {
            this.blur();
        }
    }
    async handleDisabledChanged(disabled, oldDisabled) {
        const canSetDisabled = () => this.focusElement !== this &&
            typeof this.focusElement.disabled !== 'undefined';
        if (disabled) {
            this.manipulatingTabindex = true;
            this.setAttribute('tabindex', '-1');
            await this.updateComplete;
            if (canSetDisabled()) {
                this.focusElement.disabled = true;
            }
            else {
                this.setAttribute('aria-disabled', 'true');
            }
        }
        else if (oldDisabled) {
            this.manipulatingTabindex = true;
            if (this.focusElement === this) {
                this.setAttribute('tabindex', '' + this._tabIndex);
            }
            else {
                this.removeAttribute('tabindex');
            }
            await this.updateComplete;
            if (canSetDisabled()) {
                this.focusElement.disabled = false;
            }
            else {
                this.removeAttribute('aria-disabled');
            }
        }
    }
}
__decorate([
    property({ type: Boolean, reflect: true })
], Focusable.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean })
], Focusable.prototype, "autofocus", void 0);
__decorate([
    property({ type: Number })
], Focusable.prototype, "tabIndex", null);
//# sourceMappingURL=focusable.js.map