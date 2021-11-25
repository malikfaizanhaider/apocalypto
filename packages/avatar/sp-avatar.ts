import { Avatar } from './src/Avatar.js';

customElements.define('cm-avatar', Avatar);

declare global {
    interface HTMLElementTagNameMap {
        'cm-avatar': Avatar;
    }
}
