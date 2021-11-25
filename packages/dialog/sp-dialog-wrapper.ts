import { DialogWrapper } from './src/DialogWrapper.js';

customElements.define('cm-dialog-wrapper', DialogWrapper);

declare global {
    interface HTMLElementTagNameMap {
        'cm-dialog-wrapper': DialogWrapper;
    }
}
