import { CSSResultArray, TemplateResult, SpectrumElement, PropertyValues } from '@spectrum-web-components/base';
import '@spectrum-web-components/button/sp-clear-button.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-alert.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-info.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-checkmark-circle.js';
export declare const toastVariants: ToastVariants[];
export declare type ToastVariants = 'negative' | 'positive' | 'info' | 'error' | 'warning' | '';
/**
 * @slot - The toast content
 */
export declare class Toast extends SpectrumElement {
    static get styles(): CSSResultArray;
    open: boolean;
    set timeout(timeout: number | null);
    get timeout(): number | null;
    _timeout: number | null;
    /**
     * The variant applies specific styling when set to `negative`, `positive`, `info`, `error`, or `warning`.
     * `variant` attribute is removed when not matching one of the above.
     *
     * @param {String} variant
     */
    set variant(variant: ToastVariants);
    get variant(): ToastVariants;
    private _variant;
    private renderIcon;
    private countdownStart;
    private nextCount;
    private doCountdown;
    private countdown;
    private holdCountdown;
    private resumeCountdown;
    private startCountdown;
    private stopCountdown;
    close(): void;
    protected render(): TemplateResult;
    protected updated(changes: PropertyValues): void;
}
