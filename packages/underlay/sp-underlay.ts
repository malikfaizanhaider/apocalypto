/* Copyright 2021 i2c Inc. All rights reserved. */
import { Underlay } from './src/Underlay.js';

customElements.define('sp-underlay', Underlay);

declare global {
    interface HTMLElementTagNameMap {
        'sp-underlay': Underlay;
    }
}
