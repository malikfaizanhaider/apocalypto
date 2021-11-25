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
import { html, nothing, property, SpectrumElement, } from '@spectrum-web-components/base';
import popoverStyles from './popover.css.js';
/**
 * @attr {Boolean} open - The open state of the popover
 * @attr {Boolean} dialog - Adds some padding to the popover
 */
export class Popover extends SpectrumElement {
    constructor() {
        super(...arguments);
        this.open = false;
        /**
         * @type {"auto" | "auto-start" | "auto-end" | "top" | "bottom" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end" | "none"}
         * @attr
         */
        this.placement = 'none';
        this.tip = false;
    }
    static get styles() {
        return [popoverStyles];
    }
    renderTip() {
        return html `
            <div id="tip">
                <svg
                    xmlns="http://www.w3.org/svg/2000"
                    class="tip"
                    viewBox="0 0 24 12"
                >
                    <path
                        class="triangle"
                        d="M 0.7071067811865476 0 L 11.414213562373096 10.707106781186548 L 22.121320343559645 0"
                    ></path>
                </svg>
            </div>
        `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('sp-overlay-query', this.onOverlayQuery);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener('sp-overlay-query', this.onOverlayQuery);
    }
    onOverlayQuery(event) {
        /* c8 ignore next */
        if (!event.target)
            return;
        const target = event.target;
        /* c8 ignore next */
        if (target !== this)
            return;
        const tipElement = this.shadowRoot.querySelector('#tip');
        if (tipElement) {
            event.detail.overlayContentTipElement = tipElement;
        }
    }
    render() {
        return html `
            <slot></slot>
            ${this.tip ? this.renderTip() : nothing}
        `;
    }
}
__decorate([
    property({ type: Boolean, reflect: true })
], Popover.prototype, "open", void 0);
__decorate([
    property({ reflect: true })
], Popover.prototype, "placement", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Popover.prototype, "tip", void 0);
//# sourceMappingURL=Popover.js.map