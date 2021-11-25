import {
    html,
    SpectrumElement,
    CSSResultArray,
    TemplateResult,
    property,
} from '../../base/src/index';

import styles from './button-group.css.js';

/**
 * @element sp-button-group
 */
export class ButtonGroup extends SpectrumElement {
    public static get styles(): CSSResultArray {
        return [styles];
    }

    @property({ type: Boolean, reflect: true })
    public vertical = false;

    protected render(): TemplateResult {
        return html` <slot></slot> `;
    }
}
