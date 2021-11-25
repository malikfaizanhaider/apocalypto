/* Copyright 2021 i2c Inc. All rights reserved. */
import { __decorate } from "tslib";
import { html, property } from '../../base/src/index';
import { StyledButton } from './StyledButton.js';
import buttonStyles from './clear-button.css.js';
export class ClearButton extends StyledButton {
    constructor() {
        super(...arguments);
        /**
         * The visual variant to apply to this button.
         */
        this.variant = '';
    }
    static get styles() {
        return [...super.styles, buttonStyles];
    }
    get buttonContent() {
        return [
            html `
                <iron-icon  id="button" slot='icon' icon="vaadin:close-big" class='icon close'></iron-icon>
            `
        ];
    }
}
__decorate([
    property({ reflect: true })
], ClearButton.prototype, "variant", void 0);
//# sourceMappingURL=ClearButton.js.map