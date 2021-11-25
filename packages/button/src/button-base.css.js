/* Copyright 2021 i2c Inc. All rights reserved. */
import { css } from '../../base/src/index';
const styles = css `
    :host {
        --cm-button-line-height: 1.3;
        position: relative;
        box-sizing: border-box;
        align-items: center;
        justify-content: center;
        overflow: visible;
        margin: 0;
        border-style: solid;
        text-transform: none;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-appearance: button;
        transition: background var(--cm-global-animation-duration-100, 0.13s)
                ease-out,
            border-color var(--cm-global-animation-duration-100, 0.13s) ease-out,
            color var(--cm-global-animation-duration-100, 0.13s) ease-out,
            box-shadow var(--cm-global-animation-duration-100, 0.13s) ease-out;
        text-decoration: none;
        font-family: var(
            --cm-alias-body-text-font-family,
            var(--cm-global-font-family-base)
        );
        line-height: var(--cm-button-line-height);
        user-select: none;
        -webkit-user-select: none;
        cursor: pointer;
    }

    :host(:focus) {
        outline: none;
    }

    :host(::-moz-focus-inner) {
        border: 0;
        border-style: none;
        padding: 0;
        margin-top: -2px;
        margin-bottom: -2px;
    }

    :host(:disabled) {
        cursor: default;
    }

    :host:after {
        border-radius: 3px;
        content: '';
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        margin: calc(
            var(
                    --cm-alias-focus-ring-gap,
                    var(--cm-global-dimension-static-size-50)
                ) * -1
        );
        transition: opacity var(--cm-global-animation-duration-100, 0.13s)
                ease-out,
            margin var(--cm-global-animation-duration-100, 0.13s) ease-out;
    }

    :host(.focus-visible):after,
    :host(.focus-visible):after {
        margin: calc(
            var(
                    --cm-alias-focus-ring-gap,
                    var(--cm-global-dimension-static-size-50)
                ) * -1
        );
    }

    :host(.focus-visible):after,
    :host(:focus-visible):after {
        margin: calc(
            var(
                    --cm-alias-focus-ring-gap,
                    var(--cm-global-dimension-static-size-50)
                ) * -1
        );
    }

    :host {
        display: inline-flex;
        vertical-align: top;
    }

    :host([dir]) {
        -webkit-appearance: none;
    }

    :host([disabled]) {
        pointer-events: none;
        cursor: auto;
    }

    #button {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    :host:after {
        pointer-events: none;
    }

    slot[name='icon']::slotted(:not(sp-icon)) {
        display: inline-block;
        width: var(--i2c-icon-size-m);
        height: var(--i2c-icon-size-m);
        margin-left: 0;
        margin-right: 0;
        padding: 0.22em 0;
        box-sizing: border-box !important;
    }
`;
export default styles;
//# sourceMappingURL=button-base.css.js.map