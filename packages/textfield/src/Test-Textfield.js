/*
Copyright 2020 i2c Inc. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import { __decorate } from "tslib";
import { html, property, query, nothing, ifDefined, live, } from '@spectrum-web-components/base';
import { Focusable } from '@spectrum-web-components/shared/src/focusable.js';
import '@spectrum-web-components/icons-ui/icons/sp-icon-checkmark100.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-alert.js';
import textfieldStyles from './textfield.css.js';
import checkmarkStyles from '@spectrum-web-components/icon/src/spectrum-icon-checkmark.css.js';
export class TextfieldBase extends Focusable {
    constructor() {
        super(...arguments);
        this.allowedKeys = '';
        this.focused = false;
        this.invalid = false;
        this.label = '';
        this.placeholder = '';
        this.grows = false;
        this.maxlength = -1;
        this.minlength = -1;
        this.multiline = false;
        this.readonly = false;
        this.valid = false;
        this._value = '';
        this.quiet = false;
        this.required = false;
    }
    static get styles() {
        return [textfieldStyles, checkmarkStyles];
    }
    set value(value) {
        if (value === this.value) {
            return;
        }
        const oldValue = this._value;
        this._value = value;
        this.requestUpdate('value', oldValue);
    }
    get value() {
        return this._value;
    }
    get focusElement() {
        return this.inputElement;
    }
    onInput() {
        if (this.allowedKeys && this.inputElement.value) {
            const regExp = new RegExp(`^[${this.allowedKeys}]*$`, 'u');
            if (!regExp.test(this.inputElement.value)) {
                const selectionStart = this.inputElement
                    .selectionStart;
                const nextSelectStart = selectionStart - 1;
                this.inputElement.value = this.value.toString();
                this.inputElement.setSelectionRange(nextSelectStart, nextSelectStart);
                return;
            }
        }
        this.value = this.inputElement.value;
        const selectionStart = this.inputElement.selectionStart;
        this.updateComplete.then(() => {
            this.inputElement.setSelectionRange(selectionStart, selectionStart);
        });
    }
    onChange() {
        this.dispatchEvent(new Event('change', {
            bubbles: true,
            composed: true,
        }));
    }
    onFocus() {
        this.focused = true;
    }
    onBlur() {
        this.focused = false;
    }
    renderStateIcons() {
        if (this.invalid) {
            return html `
                <sp-icon-alert id="invalid" class="icon"></sp-icon-alert>
            `;
        }
        else if (this.valid) {
            return html `
                <sp-icon-checkmark100
                    id="valid"
                    class="icon spectrum-UIIcon-Checkmark100"
                ></sp-icon-checkmark100>
            `;
        }
        return nothing;
    }
    get displayValue() {
        return this.value.toString();
    }
    select() {
        this.inputElement.select();
    }
    get renderMultiline() {
        return html `
            ${this.grows && !this.quiet
            ? html `
                      <div id="sizer">${this.value}</div>
                  `
            : nothing}
            <!-- @ts-ignore -->
            <textarea
                aria-label=${this.label || this.placeholder}
                aria-invalid=${ifDefined(this.invalid || undefined)}
                class="input"
                maxlength=${ifDefined(this.maxlength > -1 ? this.maxlength : undefined)}
                minlength=${ifDefined(this.minlength > -1 ? this.minlength : undefined)}
                pattern=${ifDefined(this.pattern)}
                placeholder=${this.placeholder}
                .value=${this.displayValue}
                @change=${this.onChange}
                @input=${this.onInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${ifDefined(this.autocomplete)}
            ></textarea>
        `;
    }
    get renderInput() {
        return html `
            <!-- @ts-ignore -->
            <input
                type="text"
                aria-label=${this.label || this.placeholder}
                aria-invalid=${ifDefined(this.invalid || undefined)}
                class="input"
                maxlength=${ifDefined(this.maxlength > -1 ? this.maxlength : undefined)}
                minlength=${ifDefined(this.minlength > -1 ? this.minlength : undefined)}
                pattern=${ifDefined(this.pattern)}
                placeholder=${this.placeholder}
                .value=${live(this.displayValue)}
                @change=${this.onChange}
                @input=${this.onInput}
                @focus=${this.onFocus}
                @blur=${this.onBlur}
                ?disabled=${this.disabled}
                ?required=${this.required}
                ?readonly=${this.readonly}
                autocomplete=${ifDefined(this.autocomplete)}
            />
        `;
    }
    render() {
        return html `
            ${this.renderStateIcons()}
            ${this.multiline ? this.renderMultiline : this.renderInput}
        `;
    }
    updated(changedProperties) {
        if (changedProperties.has('value') ||
            (changedProperties.has('required') && this.required)) {
            this.checkValidity();
        }
    }
    checkValidity() {
        let validity = this.inputElement.checkValidity();
        if (this.required || (this.value && this.pattern)) {
            if ((this.disabled || this.multiline) && this.pattern) {
                const regex = new RegExp(`^${this.pattern}$`, 'u');
                validity = regex.test(this.value.toString());
            }
            if (typeof this.minlength !== 'undefined') {
                validity =
                    validity && this.value.toString().length > this.minlength;
            }
            this.valid = validity;
            this.invalid = !validity;
        }
        return validity;
    }
}
__decorate([
    property({ attribute: 'allowed-keys' })
], TextfieldBase.prototype, "allowedKeys", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], TextfieldBase.prototype, "focused", void 0);
__decorate([
    query('.input')
], TextfieldBase.prototype, "inputElement", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], TextfieldBase.prototype, "invalid", void 0);
__decorate([
    property()
], TextfieldBase.prototype, "label", void 0);
__decorate([
    property()
], TextfieldBase.prototype, "placeholder", void 0);
__decorate([
    property()
], TextfieldBase.prototype, "pattern", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], TextfieldBase.prototype, "grows", void 0);
__decorate([
    property({ type: Number })
], TextfieldBase.prototype, "maxlength", void 0);
__decorate([
    property({ type: Number })
], TextfieldBase.prototype, "minlength", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], TextfieldBase.prototype, "multiline", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], TextfieldBase.prototype, "readonly", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], TextfieldBase.prototype, "valid", void 0);
__decorate([
    property({ type: String })
], TextfieldBase.prototype, "value", null);
__decorate([
    property({ type: Boolean, reflect: true })
], TextfieldBase.prototype, "quiet", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], TextfieldBase.prototype, "required", void 0);
__decorate([
    property({ type: String, reflect: true })
], TextfieldBase.prototype, "autocomplete", void 0);
export class Textfield extends TextfieldBase {
    constructor() {
        super(...arguments);
        this._value = '';
    }
    set value(value) {
        if (value === this.value) {
            return;
        }
        const oldValue = this._value;
        this._value = value;
        this.requestUpdate('value', oldValue);
    }
    get value() {
        return this._value;
    }
}
__decorate([
    property({ type: String })
], Textfield.prototype, "value", null);
//# sourceMappingURL=Test-Textfield.js.map
