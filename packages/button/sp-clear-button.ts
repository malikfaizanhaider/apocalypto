
import { ClearButton } from './src/ClearButton.js';

customElements.define('cm-clear-button', ClearButton);

declare global {
    interface HTMLElementTagNameMap {
        'cm-clear-button': ClearButton;
    }
}
