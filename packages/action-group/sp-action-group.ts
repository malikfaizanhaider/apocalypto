import { ActionGroup } from './src/ActionGroup.js';

customElements.define('cm-action-group', ActionGroup);

declare global {
    interface HTMLElementTagNameMap {
        'cm-action-group': ActionGroup;
    }
}
