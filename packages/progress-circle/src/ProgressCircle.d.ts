import { SpectrumElement, CSSResultArray, TemplateResult, PropertyValues } from '@spectrum-web-components/base';
/**
 * @element sp-progress-circle
 */
export declare class ProgressCircle extends SpectrumElement {
    static get styles(): CSSResultArray;
    indeterminate: boolean;
    label: string;
    overBackground: boolean;
    progress: number;
    size: '' | 'small' | 'large';
    private makeRotation;
    protected render(): TemplateResult;
    protected firstUpdated(changes: PropertyValues): void;
    protected updated(changes: PropertyValues): void;
}
