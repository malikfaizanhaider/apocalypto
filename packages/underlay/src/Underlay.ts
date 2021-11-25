import {
    html,
    SpectrumElement,
    CSSResultArray,
    TemplateResult,
    property,
} from '../../base/src/index';

import styles from './underlay.css.js';

/**
 * @element sp-underlay
 */
export class Underlay extends SpectrumElement {
    public static get styles(): CSSResultArray {
        return [styles];
    }

    @property({ type: Boolean })
    public open = false;

    protected render(): TemplateResult {
        return html``;
    }
}
