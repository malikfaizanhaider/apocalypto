import { Dialog } from './src/Dialog.js';

customElements.define('cm-dialog', Dialog);

declare global {
    interface HTMLElementTagNameMap {
        'cm-dialog': Dialog;
    }
}
