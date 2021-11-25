import { __decorate } from "tslib";
import { html, SpectrumElement, property, } from '../../base/src/index';
import '../../button/sp-clear-button.js';
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
                    <iron-icon
                        icon="vaadin:info-circle"
                        label="info"
                        class="type"
                    ></iron-icon>
                `;
            case 'negative':
            case 'error': // deprecated
            case 'warning': // deprecated
                return html `
                    <iron-icon
                        icon="vaadin:warning"
                        label="Error"
                        class="type"
                    ></iron-icon>
                `;
            case 'positive':
            case 'success': // deprecated
                return html `
                    <iron-icon
                        icon="vaadin:check-circle-o"
                        label="Success"
                        class="type"
                    ></iron-icon>
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
                <cm-clear-button
                    label="Close"
                    variant="overBackground"
                    @click=${this.close}
                ></cm-clear-button>
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