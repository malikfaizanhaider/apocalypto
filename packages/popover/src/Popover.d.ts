import { CSSResultArray, SpectrumElement, TemplateResult } from '@spectrum-web-components/base';
import { OverlayDisplayQueryDetail, Placement } from '@spectrum-web-components/overlay';
/**
 * @attr {Boolean} open - The open state of the popover
 * @attr {Boolean} dialog - Adds some padding to the popover
 */
export declare class Popover extends SpectrumElement {
    static get styles(): CSSResultArray;
    open: boolean;
    /**
     * @type {"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | "none"}
     * @attr
     */
    placement: Placement;
    tip: boolean;
    protected renderTip(): TemplateResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    onOverlayQuery(event: CustomEvent<OverlayDisplayQueryDetail>): void;
    protected render(): TemplateResult;
}
