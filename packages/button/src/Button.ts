/* Copyright 2021 i2c Inc. All rights reserved. */

import { CSSResultArray, property, SizedMixin } from '../../base/src/index';

import { StyledButton } from './StyledButton.js';

import buttonStyles from './button.css.js';

export type ButtonVariants =
    | 'cta'
    | 'overBackground'
    | 'primary'
    | 'secondary'
    | 'negative'
    | 'highlight'
    | 'positive';

/**
 * A Spectrum button control.
 * @element sp-button
 */
export class Button extends SizedMixin(StyledButton) {
    public static get styles(): CSSResultArray {
        return [...super.styles, buttonStyles];
    }

    /**
     * The visual variant to apply to this button.
     */
    @property({ reflect: true })
    public variant: ButtonVariants = 'cta';

    /**
     * There is a warning in place for this control
     */
    @property({ type: Boolean, reflect: true })
    public warning = false;

    /**
     * Style this button to be less obvious
     */
    @property({ type: Boolean, reflect: true })
    public quiet = false;
}
