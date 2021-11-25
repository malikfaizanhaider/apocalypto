import { __decorate } from "tslib";
import { html, SpectrumElement, property, SizedMixin, } from '../../base/src/index';
import '@spectrum-web-components/icons-ui/icons/sp-icon-asterisk100.js';
import asteriskIconStyles from '@spectrum-web-components/icon/src/spectrum-icon-asterisk.css.js';
import styles from './field-label.css.js';
/**
 * @element sp-field-label
 */
export class FieldLabel extends SizedMixin(SpectrumElement) {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.id = '';
        this.for = '';
        this.required = false;
    }
    static get styles() {
        return [styles, asteriskIconStyles];
    }
    handleClick() {
        if (!this.target || this.disabled)
            return;
        this.target.focus();
        const parent = this.getRootNode();
        const target = this.target;
        const targetParent = target.getRootNode();
        const targetHost = targetParent.host;
        if (targetParent === parent && target.forceFocusVisible) {
            target.forceFocusVisible();
        }
        else if (targetHost && targetHost.forceFocusVisible) {
            targetHost.forceFocusVisible();
        }
    }
    async manageFor() {
        if (!this.for) {
            return;
        }
        const parent = this.getRootNode();
        const target = parent.querySelector(`#${this.for}`);
        if (!target) {
            return;
        }
        if (typeof target.updateComplete !== 'undefined') {
            await target.updateComplete;
        }
        this.target = target.focusElement || target;
        if (this.target) {
            const targetParent = this.target.getRootNode();
            if (targetParent === parent) {
                this.target.setAttribute('aria-labelledby', this.id);
            }
            else {
                this.target.setAttribute('aria-label', (this.textContent || /* c8 ignore next */ '').trim());
            }
        }
        return Promise.resolve();
    }
    render() {
        return html `
            <label>
                <slot></slot>
                ${this.required
            ? html `
                          <sp-icon-asterisk100
                              class="requiredIcon spectrum-UIIcon-Asterisk100"
                          ></sp-icon-asterisk100>
                      `
            : html ``}
            </label>
        `;
    }
    firstUpdated(changes) {
        super.firstUpdated(changes);
        if (!this.hasAttribute('id')) {
            this.setAttribute('id', `${this.tagName.toLowerCase()}-${FieldLabel.instanceCount++}`);
        }
        this.addEventListener('click', this.handleClick);
    }
    updated(changes) {
        super.updated(changes);
        if (changes.has('for') || changes.has('id')) {
            this.manageFor();
        }
    }
}
/**
 * @private
 */
FieldLabel.instanceCount = 0;
__decorate([
    property({ type: Boolean, reflect: true })
], FieldLabel.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], FieldLabel.prototype, "id", void 0);
__decorate([
    property({ type: String })
], FieldLabel.prototype, "for", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], FieldLabel.prototype, "required", void 0);
__decorate([
    property({ type: String, reflect: true, attribute: 'side-aligned' })
], FieldLabel.prototype, "sideAligned", void 0);
//# sourceMappingURL=FieldLabel.js.map