import { CSSResultArray, TemplateResult, PropertyValues, nothing } from '@spectrum-web-components/base';
import { Focusable } from '@spectrum-web-components/shared/src/focusable.js';
import '@spectrum-web-components/icons-ui/icons/sp-icon-checkmark100.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-alert.js';
export declare class TextfieldBase extends Focusable {
    static get styles(): CSSResultArray;
    allowedKeys: string;
    focused: boolean;
    protected inputElement: HTMLInputElement | HTMLTextAreaElement;
    invalid: boolean;
    label: string;
    placeholder: string;
    pattern?: string;
    grows: boolean;
    maxlength: number;
    minlength: number;
    multiline: boolean;
    readonly: boolean;
    valid: boolean;
    set value(value: string | number);
    get value(): string | number;
    protected _value: string | number;
    quiet: boolean;
    required: boolean;
    autocomplete?: HTMLInputElement['autocomplete'] | HTMLTextAreaElement['autocomplete'];
    get focusElement(): HTMLInputElement | HTMLTextAreaElement;
    protected onInput(): void;
    protected onChange(): void;
    protected onFocus(): void;
    protected onBlur(): void;
    protected renderStateIcons(): TemplateResult | typeof nothing;
    protected get displayValue(): string;
    private get renderMultiline();
    private get renderInput();
    protected render(): TemplateResult;
    protected updated(changedProperties: PropertyValues): void;
    checkValidity(): boolean;
}
export declare class Textfield extends TextfieldBase {
    set value(value: string);
    get value(): string;
    protected _value: string;
}
