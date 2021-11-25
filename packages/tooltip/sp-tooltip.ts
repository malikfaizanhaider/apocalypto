import { Tooltip } from './src/Tooltip.js';

customElements.define('cm-tooltip', Tooltip);

declare global {
    interface HTMLElementTagNameMap {
        'cm-tooltip': Tooltip;
    }
}
