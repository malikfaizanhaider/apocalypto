/* Copyright 2021 i2c Inc. All rights reserved. */
import { css } from '../../base/src/index';
const styles = css `
    :host {
        background-color: var(
            --cm-clearbutton-medium-background-color,
            var(--cm-alias-background-color-transparent)
        );
        color: var(
            --cm-clearbutton-medium-icon-color,
            var(--cm-alias-icon-color)
        );
    }

    :host(:hover) {
        background-color: var(
            --cm-clearbutton-medium-background-color-hover,
            var(--cm-alias-background-color-transparent)
        );
        color: var(
            --cm-clearbutton-medium-icon-color-hover,
            var(--cm-alias-icon-color-hover)
        );
    }

    :host([active]) {
        background-color: var(
            --cm-clearbutton-medium-background-color-down,
            var(--cm-alias-background-color-transparent)
        );
        color: var(
            --cm-clearbutton-medium-icon-color-down,
            var(--cm-alias-icon-color-down)
        );
    }

    :host(.focus-visible),
    :host(.focus-visible) {
        background-color: var(
            --cm-clearbutton-medium-background-color-key-focus,
            var(--cm-alias-background-color-transparent)
        );
        color: var(
            --cm-clearbutton-medium-icon-color-key-focus,
            var(--cm-alias-icon-color-focus)
        );
    }

    :host(.focus-visible),
    :host(:focus-visible) {
        background-color: var(
            --cm-clearbutton-medium-background-color-key-focus,
            var(--cm-alias-background-color-transparent)
        );
        color: var(
            --cm-clearbutton-medium-icon-color-key-focus,
            var(--cm-alias-icon-color-focus)
        );
    }

    :host(:disabled),
    :host([disabled]) {
        background-color: var(
            --cm-clearbutton-medium-background-color-disabled,
            var(--cm-alias-background-color-transparent)
        );
        color: var(
            --cm-clearbutton-medium-icon-color-disabled,
            var(--cm-alias-icon-color-disabled)
        );
    }

    :host {
        width: var(
            --cm-clearbutton-medium-width,
            var(--cm-alias-single-line-height)
        );
        height: var(
            --cm-clearbutton-medium-height,
            var(--cm-alias-single-line-height)
        );
        border-radius: 100%;
        padding: 0;
        margin: 0;
        border: none;
    }

    :host > .icon {
        margin: 0 auto;
    }

    :host > .icon.close {
        font-size: var(--i2c-icon-size-xs);
        position: relative !important;
        width: var(--i2c-icon-size-xs);
        height: var(--i2c-icon-size-xs);
        // color: var(--cm-global-color-gray-1500);
    }

    :host([variant='overBackground'].focus-visible):after,
    :host([variant='overBackground'].focus-visible):after {
        margin: calc(
            var(
                    --cm-alias-focus-ring-gap,
                    var(--cm-global-dimension-static-size-25)
                ) * -1
        );
    }

    :host([variant='overBackground'].focus-visible):after,
    :host([variant='overBackground']:focus-visible):after {
        margin: calc(
            var(
                    --cm-alias-focus-ring-gap,
                    var(--cm-global-dimension-static-size-25)
                ) * -1
        );
    }

    @media (-ms-high-contrast: none), screen and (-ms-high-contrast: active) {
        :host > .icon {
            margin: 0;
        }
    }

    :host([small]) {
        width: var(
            --cm-clearbutton-small-width,
            var(--cm-global-dimension-size-300)
        );
        height: var(
            --cm-clearbutton-small-height,
            var(--cm-global-dimension-size-300)
        );
    }

    :host([variant='overBackground']) {
        background-color: var(
            --cm-button-quiet-over-background-m-background-color,
            var(--cm-alias-background-color-transparent)
        );
        border-color: var(
            --cm-button-quiet-over-background-m-border-color,
            var(--cm-alias-border-color-transparent)
        );
        color: var(
            --cm-button-quiet-over-background-m-text-color,
            var(--cm-global-color-static-white)
        );
    }

    :host([variant='overBackground'].focus-visible),
    :host([variant='overBackground'].focus-visible),
    :host([variant='overBackground']:hover) {
        background-color: var(
            --cm-button-quiet-over-background-m-background-color-hover,
            hsla(0, 0%, 100%, 0.1)
        );
        border-color: var(
            --cm-button-quiet-over-background-m-border-color-hover,
            var(--cm-alias-border-color-transparent)
        );
        color: var(
            --cm-button-quiet-over-background-m-text-color-hover,
            var(--cm-global-color-static-white)
        );
    }

    :host([variant='overBackground'].focus-visible),
    :host([variant='overBackground']:focus-visible),
    :host([variant='overBackground']:hover) {
        background-color: var(
            --cm-button-quiet-over-background-m-background-color-hover,
            hsla(0, 0%, 100%, 0.1)
        );
        border-color: var(
            --cm-button-quiet-over-background-m-border-color-hover,
            var(--cm-alias-border-color-transparent)
        );
        color: var(
            --cm-button-quiet-over-background-m-text-color-hover,
            var(--cm-global-color-static-white)
        );
    }

    :host([variant='overBackground'].focus-visible),
    :host([variant='overBackground'].focus-visible) {
        box-shadow: none;
    }

    :host([variant='overBackground'].focus-visible),
    :host([variant='overBackground']:focus-visible) {
        box-shadow: none;
    }

    :host([variant='overBackground'].focus-visible):after,
    :host([variant='overBackground'].focus-visible):after {
        box-shadow: 0 0 0
            var(
                --cm-alias-focus-ring-size,
                var(--cm-global-dimension-static-size-25)
            )
            var(
                --cm-button-over-background-m-border-color-key-focus,
                var(--cm-global-color-static-white)
            );
    }

    :host([variant='overBackground'].focus-visible):after,
    :host([variant='overBackground']:focus-visible):after {
        box-shadow: 0 0 0
            var(
                --cm-alias-focus-ring-size,
                var(--cm-global-dimension-static-size-25)
            )
            var(
                --cm-button-over-background-m-border-color-key-focus,
                var(--cm-global-color-static-white)
            );
    }

    :host([variant='overBackground'][active]) {
        background-color: var(
            --cm-button-quiet-over-background-m-background-color-down,
            hsla(0, 0%, 100%, 0.2)
        );
        border-color: var(
            --cm-button-quiet-over-background-m-border-color-down,
            var(--cm-alias-border-color-transparent)
        );
        color: var(
            --cm-button-quiet-over-background-m-text-color-down,
            var(--cm-global-color-static-white)
        );
    }

    :host([variant='overBackground']:disabled),
    :host([variant='overBackground'][disabled]) {
        background-color: var(
            --cm-button-quiet-over-background-m-background-color-disabled,
            var(--cm-alias-background-color-transparent)
        );
        border-color: var(
            --cm-button-quiet-over-background-m-border-color-disabled,
            var(--cm-alias-border-color-transparent)
        );
        color: var(
            --cm-button-quiet-over-background-m-text-color-disabled,
            hsla(0, 0%, 100%, 0.15)
        );
    }
`;
export default styles;
//# sourceMappingURL=clear-button.css.js.map
