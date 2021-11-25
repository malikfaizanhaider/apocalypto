/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import { __decorate } from "tslib";
import { html, SpectrumElement, property, } from '@spectrum-web-components/base';
import '@spectrum-web-components/button/sp-clear-button.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-alert.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-info.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-checkmark-circle.js';
import toastStyles from './toast.css.js';
export const toastVariants = [
    'negative',
    'positive',
    'info',
    'error',
    'warning',
];
/**
 * @slot - The toast content
 */
export class Toast extends SpectrumElement {
    constructor() {
        super(...arguments);
        this.open = false;
        this._timeout = null;
        this._variant = '';
        this.countdownStart = 0;
        this.nextCount = -1;
        this.doCountdown = (time) => {
            if (!this.countdownStart) {
                this.countdownStart = performance.now();
            }
            if (time - this.countdownStart > this._timeout) {
                this.open = false;
                this.countdownStart = 0;
            }
            else {
                this.countdown();
            }
        };
        this.countdown = () => {
            cancelAnimationFrame(this.nextCount);
            this.nextCount = requestAnimationFrame(this.doCountdown);
        };
        this.holdCountdown = () => {
            this.stopCountdown();
            this.addEventListener('focusout', this.resumeCountdown);
        };
        this.resumeCountdown = () => {
            this.removeEventListener('focusout', this.holdCountdown);
            this.countdown();
        };
    }
    static get styles() {
        return [toastStyles];
    }
    set timeout(timeout) {
        const hasTimeout = typeof timeout !== null && timeout > 0;
        const newTimeout = hasTimeout
            ? Math.max(6000, timeout)
            : null;
        const oldValue = this.timeout;
        if (newTimeout && this.countdownStart) {
            this.countdownStart = performance.now();
        }
        this._timeout = newTimeout;
        this.requestUpdate('timeout', oldValue);
    }
    get timeout() {
        return this._timeout;
    }
    /**
     * The variant applies specific styling when set to `negative`, `positive`, `info`, `error`, or `warning`.
     * `variant` attribute is removed when not matching one of the above.
     *
     * @param {String} variant
     */
    set variant(variant) {
        if (variant === this.variant) {
            return;
        }
        const oldValue = this.variant;
        if (toastVariants.includes(variant)) {
            this.setAttribute('variant', variant);
            this._variant = variant;
        }
        else {
            this.removeAttribute('variant');
            this._variant = '';
        }
        this.requestUpdate('variant', oldValue);
    }
    get variant() {
        return this._variant;
    }
    renderIcon(variant) {
        switch (variant) {
            case 'info':
                return html `
                    <sp-icon-info
                        label="Information"
                        class="type"
                    ></sp-icon-info>
                `;
            case 'negative':
            case 'error': // deprecated
            case 'warning': // deprecated
                return html `
                    <sp-icon-alert label="Error" class="type"></sp-icon-alert>
                `;
            case 'positive':
            case 'success': // deprecated
                return html `
                    <sp-icon-checkmark-circle
                        label="Success"
                        class="type"
                    ></sp-icon-checkmark-circle>
                `;
            default:
                return html ``;
        }
    }
    startCountdown() {
        this.countdown();
        this.addEventListener('focusin', this.holdCountdown);
    }
    stopCountdown() {
        cancelAnimationFrame(this.nextCount);
        this.countdownStart = 0;
    }
    close() {
        this.open = false;
    }
    render() {
        return html `
            ${this.renderIcon(this.variant)}
            <div class="body" role="alert">
                <div class="content">
                    <slot></slot>
                </div>
                <slot name="action"></slot>
            </div>
            <div class="buttons">
                <sp-clear-button
                    label="Close"
                    variant="overBackground"
                    @click=${this.close}
                ></sp-clear-button>
            </div>
        `;
    }
    updated(changes) {
        super.updated(changes);
        if (changes.has('open')) {
            if (this.open) {
                if (this.timeout) {
                    this.startCountdown();
                }
            }
            else {
                if (this.timeout) {
                    this.stopCountdown();
                }
                const applyDefault = this.dispatchEvent(new CustomEvent('close', {
                    composed: true,
                    bubbles: true,
                    cancelable: true,
                }));
                if (!applyDefault) {
                    this.open = true;
                }
            }
        }
        if (changes.has('timeout')) {
            if (this.timeout !== null && this.open) {
                this.startCountdown();
            }
            else {
                this.stopCountdown();
            }
        }
    }
}
__decorate([
    property({ type: Boolean, reflect: true })
], Toast.prototype, "open", void 0);
__decorate([
    property({ type: Number })
], Toast.prototype, "timeout", null);
__decorate([
    property({ type: String })
], Toast.prototype, "variant", null);
//# sourceMappingURL=Toast.js.map