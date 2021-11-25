/* Copyright 2021 i2c Inc. All rights reserved. */

import { CSSResultArray } from '../../base/src/index';
import { ButtonBase } from './ButtonBase.js';
import buttonStyles from './button-base.css.js';

export class StyledButton extends ButtonBase {
    public static get styles(): CSSResultArray {
        return [buttonStyles];
    }
}
