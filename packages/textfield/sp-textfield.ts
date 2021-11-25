import { Textfield } from './src/Textfield.js';

customElements.define('cm-textfield', Textfield);

declare global {
    interface HTMLElementTagNameMap {
        'cm-textfield': Textfield;
    }
}