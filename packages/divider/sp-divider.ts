import { Divider } from './src/Divider.js';

customElements.define('sp-divider', Divider);

declare global {
    interface HTMLElementTagNameMap {
        'sp-divider': Divider;
    }
}
