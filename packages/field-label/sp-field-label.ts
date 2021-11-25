import { FieldLabel } from './src/FieldLabel.js';

customElements.define('cm-field-label', FieldLabel);

declare global {
    interface HTMLElementTagNameMap {
        'cm-field-label': FieldLabel;
    }
}
