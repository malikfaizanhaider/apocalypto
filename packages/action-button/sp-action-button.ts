import { ActionButton } from './src/ActionButton.js';

customElements.define('cm-action-button', ActionButton);

declare global {
    interface HTMLElementTagNameMap {
        'cm-action-button': ActionButton;
    }
}
