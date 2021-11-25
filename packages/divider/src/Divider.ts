import {
    html,
    SpectrumElement,
    CSSResultArray,
    TemplateResult,
    property,
    SizedMixin,
    PropertyValues,
} from '../../base/src/index';

import styles from './divider.css.js';

/**
 * @element sp-divider
 */
export class Divider extends SizedMixin(SpectrumElement, {
    validSizes: ['s', 'm', 'l'],
}) {
    public static styles: CSSResultArray = [styles];

    @property({ type: Boolean, reflect: true })
    public vertical = false;

    protected render(): TemplateResult {
        return html``;
    }

    protected firstUpdated(changed: PropertyValues<this>): void {
        super.firstUpdated(changed);
        this.setAttribute('role', 'separator');
    }

    protected updated(changed: PropertyValues<this>): void {
        super.updated(changed);
        if (changed.has('vertical')) {
            if (this.vertical) {
                this.setAttribute('aria-orientation', 'vertical');
            } else {
                this.removeAttribute('aria-orientation');
            }
        }
    }
}
