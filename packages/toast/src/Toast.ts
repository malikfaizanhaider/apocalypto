import {
    html,
    CSSResultArray,
    TemplateResult,
    SpectrumElement,
    property,
    PropertyValues,
} from '../../base/src/index';

import '../../button/sp-clear-button.js';

import toastStyles from './toast.css.js';

export const toastVariants: ToastVariants[] = [
    'negative',
    'positive',
    'info',
    'error',
    'warning',
];

export type ToastVariants =
    | 'negative'
    | 'positive'
    | 'info'
    | 'error'
    | 'warning'
    | '';

/**
 * @slot - The toast content
 */

export class Toast extends SpectrumElement {
    public static get styles(): CSSResultArray {
        return [toastStyles];
    }

    @property({ type: Boolean, reflect: true })
    public open = false;

    @property({ type: Number })
    public set timeout(timeout: number | null) {
        const hasTimeout = typeof timeout !== null && (timeout as number) > 0;
        const newTimeout = hasTimeout
            ? Math.max(6000, timeout as number)
            : null;
        const oldValue = this.timeout;
        if (newTimeout && this.countdownStart) {
            this.countdownStart = performance.now();
        }
        this._timeout = newTimeout;
        this.requestUpdate('timeout', oldValue);
    }

    public get timeout(): number | null {
        return this._timeout;
    }

    public _timeout: number | null = null;

    /**
     * The variant applies specific styling when set to `negative`, `positive`, `info`, `error`, or `warning`.
     * `variant` attribute is removed when not matching one of the above.
     *
     * @param {String} variant
     */
    @property({ type: String })
    public set variant(variant: ToastVariants) {
        if (variant === this.variant) {
            return;
        }
        const oldValue = this.variant;
        if (toastVariants.includes(variant)) {
            this.setAttribute('variant', variant);
            this._variant = variant;
        } else {
            this.removeAttribute('variant');
            this._variant = '';
        }
        this.requestUpdate('variant', oldValue);
    }

    public get variant(): ToastVariants {
        return this._variant;
    }

    private _variant: ToastVariants = '';

    private renderIcon(variant: string): TemplateResult {
        switch (variant) {
            case 'info':
                return html`
                    <iron-icon
                        icon="vaadin:info-circle"
                        label="info"
                        class="type"
                    ></iron-icon>
                `;
            case 'negative':
            case 'error': // deprecated
            case 'warning': // deprecated
                return html`
                    <iron-icon
                        icon="vaadin:warning"
                        label="Error"
                        class="type"
                    ></iron-icon>
                `;
            case 'positive':
            case 'success': // deprecated
                return html`
                    <iron-icon
                        icon="vaadin:check-circle-o"
                        label="Success"
                        class="type"
                    ></iron-icon>
                `;
            default:
                return html``;
        }
    }

    private countdownStart = 0;
    private nextCount = -1;

    private doCountdown = (time: number): void => {
        if (!this.countdownStart) {
            this.countdownStart = performance.now();
        }
        if (time - this.countdownStart > (this._timeout as number)) {
            this.open = false;
            this.countdownStart = 0;
        } else {
            this.countdown();
        }
    };

    private countdown = (): void => {
        cancelAnimationFrame(this.nextCount);
        this.nextCount = requestAnimationFrame(this.doCountdown);
    };

    private holdCountdown = (): void => {
        this.stopCountdown();
        this.addEventListener('focusout', this.resumeCountdown);
    };

    private resumeCountdown = (): void => {
        this.removeEventListener('focusout', this.holdCountdown);
        this.countdown();
    };

    private startCountdown(): void {
        this.countdown();
        this.addEventListener('focusin', this.holdCountdown);
    }

    private stopCountdown(): void {
        cancelAnimationFrame(this.nextCount);
        this.countdownStart = 0;
    }

    public close(): void {
        this.open = false;
    }

    protected render(): TemplateResult {
        return html`
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

    protected updated(changes: PropertyValues): void {
        super.updated(changes);
        if (changes.has('open')) {
            if (this.open) {
                if (this.timeout) {
                    this.startCountdown();
                }
            } else {
                if (this.timeout) {
                    this.stopCountdown();
                }
                const applyDefault = this.dispatchEvent(
                    new CustomEvent('close', {
                        composed: true,
                        bubbles: true,
                        cancelable: true,
                    })
                );
                if (!applyDefault) {
                    this.open = true;
                }
            }
        }
        if (changes.has('timeout')) {
            if (this.timeout !== null && this.open) {
                this.startCountdown();
            } else {
                this.stopCountdown();
            }
        }
    }
}
