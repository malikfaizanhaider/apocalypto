/* Copyright 2021 i2c Inc. All rights reserved. */
import { __decorate } from "tslib";
import { property, SizedMixin } from '../../base/src/index';
import { StyledButton } from './StyledButton.js';
import buttonStyles from './button.css.js';
/**
 * A Spectrum button control.
 * @element sp-button
 */
export class Button extends SizedMixin(StyledButton) {
    constructor() {
        super(...arguments);
        /**
         * The visual variant to apply to this button.
         */
        this.variant = 'cta';
        /**
         * There is a warning in place for this control
         */
        this.warning = false;
        /**
         * Style this button to be less obvious
         */
        this.quiet = false;
    }
    static get styles() {
        return [...super.styles, buttonStyles];
    }
}
__decorate([
    property({ reflect: true })
], Button.prototype, "variant", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Button.prototype, "warning", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Button.prototype, "quiet", void 0);
//# sourceMappingURL=Button.js.map