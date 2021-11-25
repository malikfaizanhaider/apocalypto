/* Copyright 2021 i2c Inc. All rights reserved. */
import { Popover } from './src/Popover.js';

customElements.define('cm-popover', Popover);

declare global {
    interface HTMLElementTagNameMap {
        'cm-popover': Popover;
    }
}
