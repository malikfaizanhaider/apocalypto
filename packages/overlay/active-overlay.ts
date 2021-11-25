import { ActiveOverlay } from './src/ActiveOverlay.js';

customElements.define('active-overlay', ActiveOverlay);

declare global {
    interface HTMLElementTagNameMap {
        'active-overlay': ActiveOverlay;
    }
}
