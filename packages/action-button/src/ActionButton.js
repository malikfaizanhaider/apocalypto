import { __decorate } from "tslib";
import { html, property, SizedMixin } from '../../base/src/index';
import { ButtonBase } from '../../button/src/index';
import buttonStyles from './action-button.css.js';
import cornerTriangleStyles from '@spectrum-web-components/icon/src/spectrum-icon-corner-triangle.css.js';
import '@spectrum-web-components/icons-ui/icons/sp-icon-corner-triangle300.js';
const holdAffordanceClass = {
    s: 'spectrum-UIIcon-CornerTriangle75',
    m: 'spectrum-UIIcon-CornerTriangle100',
    l: 'spectrum-UIIcon-CornerTriangle200',
    xl: 'spectrum-UIIcon-CornerTriangle300'
};
const LONGPRESS_DURATION = 300;
let LONGPRESS_TIMEOUT;
/**
 * @element sp-card
 *
 * @fires change - Announces a change in the `selected` property of an action button
 * @fires longpress - Synthesizes a "longpress" interaction that signifies a
 * `pointerdown` event that is >=300ms or a keyboard event wher code is `Space` or code is `ArrowDown`
 * while `altKey===true`.
 */
export class ActionButton extends SizedMixin(ButtonBase) {
    constructor() {
        super();
        this.emphasized = false;
        this.holdAffordance = false;
        this.quiet = false;
        this.selected = false;
        this.toggles = false;
        this._value = '';
        this.onClick = () => {
            if (!this.toggles) {
                return;
            }
            this.selected = !this.selected;
            const applyDefault = this.dispatchEvent(new Event('change', {
                cancelable: true
            }));
            if (!applyDefault) {
                this.selected = !this.selected;
            }
        };
        this.addEventListener('click', this.onClick);
        this.addEventListener('pointerdown', this.onPointerdown);
    }
    static get styles() {
        return [buttonStyles, cornerTriangleStyles];
    }
    get value() {
        return this._value || this.itemText;
    }
    set value(value) {
        if (value === this._value) {
            return;
        }
        this._value = value || '';
        if (this._value) {
            this.setAttribute('value', this._value);
        }
        else {
            this.removeAttribute('value');
        }
    }
    /**
     * @private
     */
    get itemText() {
        return (this.textContent || /* c8 ignore next */ '').trim();
    }
    onPointerdown() {
        this.addEventListener('pointerup', this.onPointerup);
        this.addEventListener('pointercancel', this.onPointerup);
        LONGPRESS_TIMEOUT = setTimeout(() => {
            this.dispatchEvent(new CustomEvent('longpress', {
                bubbles: true,
                composed: true,
                detail: {
                    source: 'pointer'
                }
            }));
        }, LONGPRESS_DURATION);
    }
    onPointerup() {
        clearTimeout(LONGPRESS_TIMEOUT);
        this.removeEventListener('pointerup', this.onPointerup);
        this.removeEventListener('pointercancel', this.onPointerup);
    }
    /**
     * @private
     */
    handleKeydown(event) {
        if (!this.holdAffordance) {
            return super.handleKeydown(event);
        }
        const { code, altKey } = event;
        if (code === 'Space' || (altKey && code === 'ArrowDown')) {
            event.preventDefault();
            if (code === 'ArrowDown') {
                event.stopPropagation();
                event.stopImmediatePropagation();
            }
            this.addEventListener('keyup', this.handleKeyup);
            this.active = true;
        }
    }
    handleKeyup(event) {
        if (!this.holdAffordance) {
            return super.handleKeyup(event);
        }
        const { code, altKey } = event;
        if (code === 'Space' || (altKey && code === 'ArrowDown')) {
            event.stopPropagation();
            this.dispatchEvent(new CustomEvent('longpress', {
                bubbles: true,
                composed: true,
                detail: {
                    source: 'keyboard'
                }
            }));
            this.active = false;
        }
    }
    get buttonContent() {
        const buttonContent = super.buttonContent;
        if (this.holdAffordance) {
            buttonContent.unshift(html `
                <sp-icon-corner-triangle300
                    id='hold-affordance'
                    class='${holdAffordanceClass[this.size]}'
                ></sp-icon-corner-triangle300>
            `);
        }
        return buttonContent;
    }
    updated(changes) {
        super.updated(changes);
        if (this.toggles && changes.has('selected')) {
            this.focusElement.setAttribute('aria-pressed', this.selected ? 'true' : 'false');
        }
    }
}
__decorate([
    property({ type: Boolean, reflect: true })
], ActionButton.prototype, "emphasized", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'hold-affordance' })
], ActionButton.prototype, "holdAffordance", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], ActionButton.prototype, "quiet", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], ActionButton.prototype, "selected", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], ActionButton.prototype, "toggles", void 0);
__decorate([
    property({ type: String })
], ActionButton.prototype, "value", null);
//# sourceMappingURL=ActionButton.js.map