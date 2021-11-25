import { ProgressCircle } from './src/ProgressCircle.js';

customElements.define('cm-progress-circle', ProgressCircle);

declare global {
    interface HTMLElementTagNameMap {
        'cm-progress-circle': ProgressCircle;
    }
}
