import { ButtonGroup } from './src/ButtonGroup.js';

customElements.define('cm-button-group', ButtonGroup);

declare global {
    interface HTMLElementTagNameMap {
        'cm-button-group': ButtonGroup;
    }
}
