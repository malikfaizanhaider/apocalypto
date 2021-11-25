/* Copyright 2021 i2c Inc. All rights reserved. */
import { __decorate } from "tslib";
import { html, SpectrumElement, property, ifDefined, } from '../../base/src/index';
import progressCircleStyles from './progress-circle.css.js';
/**
 * @element sp-progress-circle
 */
export class ProgressCircle extends SpectrumElement {
    constructor() {
        super(...arguments);
        this.indeterminate = false;
        this.label = '';
        this.overBackground = false;
        this.progress = 0;
        this.size = '';
    }
    static get styles() {
        return [progressCircleStyles];
    }
    makeRotation(rotation) {
        return this.indeterminate
            ? undefined
            : `transform: rotate(${rotation}deg);`;
    }
    render() {
        const styles = [
            this.makeRotation(-180 + (180 / 50) * Math.min(this.progress, 50)),
            this.makeRotation(-180 + (180 / 50) * Math.max(this.progress - 50, 0)),
        ];
        const masks = ['Mask1', 'Mask2'];
        return html `
            <div class="track"></div>
            <div class="fills">
                ${masks.map((mask, index) => html `
                        <div class="fill${mask}">
                            <div
                                class="fillSub${mask}"
                                style=${ifDefined(styles[index])}
                            >
                                <div class="fill"></div>
                            </div>
                        </div>
                    `)}
            </div>
        `;
    }
    firstUpdated(changes) {
        super.firstUpdated(changes);
        if (!this.hasAttribute('role')) {
            this.setAttribute('role', 'progressbar');
        }
    }
    updated(changes) {
        super.updated(changes);
        if (!this.indeterminate && changes.has('progress')) {
            this.setAttribute('aria-valuenow', '' + this.progress);
        }
        else if (this.hasAttribute('aria-valuenow')) {
            this.removeAttribute('aria-valuenow');
        }
        if (this.label && changes.has('label')) {
            this.setAttribute('aria-label', this.label);
        }
    }
}
__decorate([
    property({ type: Boolean, reflect: true })
], ProgressCircle.prototype, "indeterminate", void 0);
__decorate([
    property({ type: String })
], ProgressCircle.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'over-background' })
], ProgressCircle.prototype, "overBackground", void 0);
__decorate([
    property({ type: Number })
], ProgressCircle.prototype, "progress", void 0);
__decorate([
    property({ type: String, reflect: true })
], ProgressCircle.prototype, "size", void 0);
//# sourceMappingURL=ProgressCircle.js.map