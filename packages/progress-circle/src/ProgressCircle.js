/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
import { __decorate } from "tslib";
import { html, SpectrumElement, property, ifDefined, } from '@spectrum-web-components/base';
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