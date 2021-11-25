/* Copyright 2021 i2c Inc. All rights reserved. */
import { Theme } from './src/Theme.js';

customElements.define('cm-theme', Theme);

declare global {
    interface HTMLElementTagNameMap {
        'cm-theme': Theme;
    }
}
