import { Toast } from './src/Toast.js';

customElements.define('cm-toast', Toast);

declare global {
    interface HTMLElementTagNameMap {
        'cm-toast': Toast;
    }
}
