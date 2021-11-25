
import { Button } from './src/Button.js';

customElements.define('cm-button', Button);

declare global {
    interface HTMLElementTagNameMap {
        'cm-button': Button;
    }
}
