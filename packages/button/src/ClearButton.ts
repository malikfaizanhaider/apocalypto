/* Copyright 2021 i2c Inc. All rights reserved. */

import {
    CSSResultArray,
    TemplateResult,
    html,
    property
} from '../../base/src/index';
import { StyledButton } from './StyledButton.js';
import buttonStyles from './clear-button.css.js';

export class ClearButton extends StyledButton {
    public static get styles(): CSSResultArray {
        return [...super.styles, buttonStyles];
    }

    /**
     * The visual variant to apply to this button.
     */
    @property({ reflect: true })
    public variant: 'overBackground' | '' = '';

    protected get buttonContent(): TemplateResult[] {
        return [
            html`
                <iron-icon  id="button" slot='icon' icon="vaadin:close-big" class='icon close'></iron-icon>
            `
        ];
    }
}
