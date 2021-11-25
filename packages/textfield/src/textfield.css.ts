import { css } from '../../base/src/index';

const styles = css`
    :host {
        --cm-textfield-border-size: var(
            --cm-textfield-m-border-size,
            var(--cm-alias-border-size-thin)
        );
        --cm-textfield-text-line-height: var(
            --cm-textfield-m-text-line-height,
            var(--cm-alias-component-text-line-height)
        );
        --cm-textfield-text-size: var(
            --cm-textfield-m-text-size,
            var(--cm-alias-item-text-size-m)
        );
        --cm-textfield-height: var(
            --cm-textfield-m-height,
            var(--cm-alias-item-height-m)
        );
        --cm-textfield-padding-left: var(
            --cm-textfield-m-padding-left,
            var(--cm-alias-item-padding-m)
        );
        --cm-textfield-padding-right: var(
            --cm-textfield-m-padding-right,
            var(--cm-alias-item-padding-m)
        );
        --cm-textfield-min-width: var(
            --cm-textfield-m-min-width,
            var(--cm-global-dimension-size-600)
        );
        --cm-textfield-success-icon-height: var(
            --cm-textfield-m-success-icon-height,
            var(--cm-alias-ui-icon-checkmark-size-100)
        );
        --cm-textfield-success-icon-width: var(
            --cm-textfield-m-success-icon-width,
            var(--cm-alias-ui-icon-checkmark-size-100)
        );
        --cm-textfield-success-icon-margin-left: var(
            --cm-textfield-m-success-icon-margin-left,
            var(--cm-global-dimension-size-150)
        );
        --cm-textfield-error-icon-height: var(
            --cm-textfield-m-error-icon-height,
            var(--cm-alias-ui-icon-alert-size-100)
        );
        --cm-textfield-error-icon-width: var(
            --cm-textfield-m-error-icon-width,
            var(--cm-alias-ui-icon-alert-size-100)
        );
        --cm-textfield-error-icon-margin-left: var(
            --cm-textfield-m-error-icon-margin-left,
            var(--cm-global-dimension-size-150)
        );
        --cm-textfield-placeholder-text-font-style: var(
            --cm-textfield-m-placeholder-text-font-style,
            var(--cm-global-font-style-italic)
        );
        --cm-textfield-placeholder-text-font-weight: var(
            --cm-textfield-m-placeholder-text-font-weight,
            var(--cm-global-font-weight-regular)
        );
        --cm-textfield-border-radius: var(
            --cm-textfield-m-border-radius,
            var(--cm-alias-border-radius-regular)
        );
        --cm-textfield-quiet-border-size: var(
            --cm-textfield-quiet-m-border-size,
            var(--cm-alias-border-size-thin)
        );
        --cm-textfield-quiet-padding-left: var(
            --cm-textfield-quiet-m-padding-left,
            0
        );
        --cm-textfield-quiet-padding-right: var(
            --cm-textfield-quiet-m-padding-right,
            0
        );
        --cm-textfield-quiet-success-icon-margin-left: var(
            --cm-textfield-quiet-m-success-icon-margin-left,
            var(--cm-global-dimension-size-150)
        );
        --cm-textfield-quiet-error-icon-margin-left: var(
            --cm-textfield-quiet-m-error-icon-margin-left,
            var(--cm-global-dimension-size-150)
        );
        --cm-textfield-quiet-border-radius: var(
            --cm-textfield-quiet-m-border-radius,
            0px
        );
        --cm-textarea-text-padding-top: var(
            --cm-textarea-m-text-padding-top,
            var(--cm-alias-item-text-padding-top-m)
        );
        --cm-textarea-text-padding-bottom: var(
            --cm-textarea-m-text-padding-bottom,
            var(--cm-alias-item-text-padding-bottom-m)
        );
        --cm-textarea-height: var(
            --cm-textarea-m-height,
            var(--cm-alias-item-height-m)
        );
        --cm-textarea-padding-left: var(
            --cm-textarea-m-padding-left,
            var(--cm-alias-item-padding-m)
        );
        --cm-textarea-padding-right: var(
            --cm-textarea-m-padding-right,
            var(--cm-alias-item-padding-m)
        );
        --cm-textfield-padding-top: 3px;
        --cm-textfield-padding-bottom: 5px;
        --cm-textfield-text-font-family: var(
            --cm-alias-body-text-font-family,
            var(--cm-global-font-family-base)
        );
        --cm-textfield-icon-gap: var(--cm-global-dimension-size-65);
        --cm-textfield-quiet-icon-gap: var(--cm-global-dimension-size-75);
        --cm-textarea-min-height: var(--cm-textarea-height);
        --cm-textarea-height-adjusted: auto;
        --cm-textarea-padding-top: var(--cm-textarea-text-padding-top);
        --cm-textarea-padding-bottom: var(--cm-textarea-text-padding-bottom);
        display: inline-flex;
        position: relative;
        min-width: var(--cm-textfield-min-width);
        width: var(
            --cm-alias-single-line-width,
            var(--cm-global-dimension-size-2400)
        );
    }

    :host([quiet][multiline]) .input {
        height: var(--cm-textfield-height);
        min-height: var(--cm-textfield-height);
    }

    .input {
        box-sizing: border-box;
        border: 1.2px var(--cm-fields-border-bg) solid;
        border-radius: var(--i2c-border-radius);
        padding: var(--cm-textfield-padding-top)
            var(--cm-textfield-padding-right) var(--cm-textfield-padding-bottom)
            calc(var(--cm-textfield-padding-left) - 1px);
        text-indent: 0;
        width: 100%;
        height: var(--cm-textfield-height);
        vertical-align: top;
        margin: 0;
        overflow: visible;
        font-family: var(--i2c-font-family);
        font-size: var(--i2c-font-size-xs);
        line-height: var(--cm-textfield-text-line-height);
        text-overflow: ellipsis;
        transition: border-color var(--cm-global-animation-duration-100, 0.13s)
                ease-in-out,
            box-shadow var(--cm-global-animation-duration-100, 0.13s)
                ease-in-out;
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: textfield;
    }

    .input::placeholder {
        font-weight: var(--cm-textfield-placeholder-text-font-weight);
        // font-style: var(--cm-textfield-placeholder-text-font-style);
        transition: color var(--cm-global-animation-duration-100, 0.13s)
            ease-in-out;
        opacity: 1;
    }

    .input:lang(ja)::placeholder,
    .input:lang(ko)::placeholder,
    .input:lang(zh)::placeholder {
        font-style: normal;
    }

    .input:hover::placeholder {
        font-weight: var(--cm-textfield-placeholder-text-font-weight);
    }

    .input:disabled {
        resize: none;
        opacity: 1;
    }

    .input:disabled::placeholder {
        font-weight: var(--cm-textfield-placeholder-text-font-weight);
    }

    .input::-ms-clear {
        width: 0;
        height: 0;
    }

    .input::-webkit-inner-spin-button,
    .input::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    .input:-moz-ui-invalid {
        box-shadow: none;
    }

    :host([dir='ltr'][valid]) .input {
        padding-right: calc(
            var(--cm-textfield-padding-right) +
                var(--cm-icon-checkmark-medium-width) +
                var(--cm-textfield-success-icon-margin-left)
        );
        border-color: var(
            --cm-semantic-positive-color-icon,
            var(--cm-global-color-green-600)
        );
    }

    :host([dir='rtl'][valid]) .input {
        padding-left: calc(
            var(--cm-textfield-padding-right) +
                var(--cm-icon-checkmark-medium-width) +
                var(--cm-textfield-success-icon-margin-left)
        );
    }

    :host([dir='ltr'][invalid]) .input {
        padding-right: calc(
            var(--cm-textfield-padding-right) +
                var(
                    --cm-icon-alert-medium-width,
                    var(--cm-global-dimension-size-225)
                ) + var(--cm-textfield-error-icon-margin-left)
        );
    }

    :host([dir='rtl'][invalid]) .input {
        padding-left: calc(
            var(--cm-textfield-padding-right) +
                var(
                    --cm-icon-alert-medium-width,
                    var(--cm-global-dimension-size-225)
                ) + var(--cm-textfield-error-icon-margin-left)
        );
    }

    :host([multiline]) .input {
        height: var(--cm-textarea-height-adjusted);
        min-height: var(--cm-textarea-min-height);
        padding: var(--cm-textarea-padding-top) var(--cm-textarea-padding-right)
            var(--cm-textarea-padding-bottom)
            calc(var(--cm-textarea-padding-left) - 1px);
        overflow: auto;
    }

    :host([dir='ltr'][quiet]) .input {
        padding-left: var(--cm-textfield-quiet-padding-left);
    }

    :host([dir='rtl'][quiet]) .input {
        padding-right: var(--cm-textfield-quiet-padding-left);
    }

    :host([dir='ltr'][quiet]) .input {
        padding-right: var(--cm-textfield-quiet-padding-right);
    }

    :host([dir='rtl'][quiet]) .input {
        padding-left: var(--cm-textfield-quiet-padding-right);
    }

    :host([quiet]) .input {
        border-radius: var(--cm-textfield-quiet-border-radius);
        border-top-width: 0;
        border-bottom-width: var(--cm-textfield-quiet-border-size);
        border-left-width: 0;
        border-right-width: 0;
        resize: none;
        overflow-y: hidden;
    }

    :host([dir='ltr'][invalid][quiet]) .input {
        padding-right: calc(
            var(
                    --cm-icon-alert-medium-width,
                    var(--cm-global-dimension-size-225)
                ) + var(--cm-textfield-quiet-error-icon-margin-left)
        );
    }

    :host([dir='rtl'][invalid][quiet]) .input {
        padding-left: calc(
            var(
                    --cm-icon-alert-medium-width,
                    var(--cm-global-dimension-size-225)
                ) + var(--cm-textfield-quiet-error-icon-margin-left)
        );
    }

    :host([dir='ltr'][valid][quiet]) .input {
        padding-right: calc(
            var(--cm-icon-checkmark-medium-width) +
                var(--cm-textfield-quiet-success-icon-margin-left)
        );
    }

    :host([dir='rtl'][valid][quiet]) .input {
        padding-left: calc(
            var(--cm-icon-checkmark-medium-width) +
                var(--cm-textfield-quiet-success-icon-margin-left)
        );
    }

    :host([valid]) .input {
        border-color: var(
            --cm-textfield-m-border-color-error,
            var(--cm-semantic-negative-color-default)
        );
        box-shadow: none;
    }

    :host([focused][valid]) .input,
    :host([valid]) .input.focus-visible,
    :host([valid]) .input.focus-visible {
        border-color: var(
            --cm-textfield-m-border-color-error,
            var(--cm-global-color-green-500)
        );
        box-shadow: 0 0 0 2px
            var(
                --cm-textfield-m-border-color-error-key-focus,
                var(--cm-global-color-green-100)
            );
    }

    :host([focused][valid]) .input,
    :host([valid]) .input.focus-visible,
    :host([valid]) .input:focus-visible {
        border-color: var(
            --cm-textfield-m-border-color-error-key-focus,
            var(--cm-global-color-green-500)
        );
        box-shadow: 0 0 0 2px
            var(
                --cm-textfield-m-border-color-error-key-focus,
                var(--cm-global-color-green-1 00)
            );
    }

    .icon {
        position: absolute;
        pointer-events: all;
    }

    :host([dir='ltr'][quiet]) .icon {
        padding-right: 0;
    }

    :host([dir='rtl'][quiet]) .icon {
        padding-left: 0;
    }

    :host([dir='ltr'][invalid]) .icon {
        right: var(--cm-textfield-error-icon-margin-left);
    }

    :host([dir='rtl'][invalid]) .icon {
        left: var(--cm-textfield-error-icon-margin-left);
    }

    :host([invalid]) .icon {
        width: var(--cm-textfield-error-icon-width);
        height: var(--cm-textfield-error-icon-height);
        bottom: calc(
            var(--cm-textfield-height) / 2 -
                var(--cm-textfield-error-icon-height) / 2
        );
    }

    :host([dir='ltr'][quiet][invalid]) .icon {
        right: 0;
    }

    :host([dir='rtl'][quiet][invalid]) .icon {
        left: 0;
    }

    :host([dir='ltr'][valid]) .icon {
        right: var(--cm-textfield-success-icon-margin-left);
    }

    :host([dir='rtl'][valid]) .icon {
        left: var(--cm-textfield-success-icon-margin-left);
    }

    :host([valid]) .icon {
        width: var(--cm-textfield-success-icon-width);
        height: var(--cm-textfield-success-icon-height);
        bottom: calc(
            var(--cm-textfield-height) / 2 -
                var(--cm-textfield-success-icon-height) / 2
        );
    }

    :host([dir='ltr'][quiet][valid]) .icon {
        right: 0;
    }

    :host([dir='rtl'][quiet][valid]) .icon {
        left: 0;
    }

    :host([dir='ltr']) .icon-workflow {
        left: var(--cm-textfield-error-icon-margin-left);
    }

    :host([dir='rtl']) .icon-workflow {
        right: var(--cm-textfield-error-icon-margin-left);
    }

    .icon-workflow {
        display: block;
        position: absolute;
        height: var(
            --cm-alias-workflow-icon-size-m,
            var(--cm-global-dimension-size-225)
        );
        width: var(
            --cm-alias-workflow-icon-size-m,
            var(--cm-global-dimension-size-225)
        );
        top: calc(
            var(--cm-textfield-height) / 2 -
                var(
                    --cm-alias-workflow-icon-size-m,
                    var(--cm-global-dimension-size-225)
                ) / 2
        );
    }

    :host([dir='ltr'][quiet]) .icon-workflow {
        left: 0;
    }

    :host([dir='rtl'][quiet]) .icon-workflow {
        right: 0;
    }

    :host([dir='ltr'][quiet]) .icon-workflow ~ .input {
        padding-left: calc(
            var(
                    --cm-alias-workflow-icon-size-m,
                    var(--cm-global-dimension-size-225)
                ) + var(--cm-textfield-quiet-icon-gap)
        );
    }

    :host([dir='rtl'][quiet]) .icon-workflow ~ .input {
        padding-right: calc(
            var(
                    --cm-alias-workflow-icon-size-m,
                    var(--cm-global-dimension-size-225)
                ) + var(--cm-textfield-quiet-icon-gap)
        );
    }

    :host([dir='ltr']) .icon-workflow + .input {
        padding-left: calc(
            var(--cm-textfield-error-icon-margin-left) +
                var(
                    --cm-alias-workflow-icon-size-m,
                    var(--cm-global-dimension-size-225)
                ) + var(--cm-textfield-icon-gap)
        );
    }

    :host([dir='rtl']) .icon-workflow + .input {
        padding-right: calc(
            var(--cm-textfield-error-icon-margin-left) +
                var(
                    --cm-alias-workflow-icon-size-m,
                    var(--cm-global-dimension-size-225)
                ) + var(--cm-textfield-icon-gap)
        );
    }

    :host([multiline]) .icon-workflow ~ .input {
        height: var(--cm-textfield-height);
        min-height: var(--cm-textfield-height);
    }

    :host {
        --cm-textfield-m-validation-icon-color-valid: var(
            --cm-semantic-positive-color-icon,
            var(--cm-global-color-green-600)
        );
    }

    :host(:hover) .input {
        border-color: var(
            --cm-textfield-m-border-color-hover,
            var(--cm-alias-border-color-hover)
        );
        box-shadow: none;
    }

    /* :host(:hover) .input {
        border-color: var(--cm-textfield-m-border-color-hover, var(--cm-alias-border-color-hover));
        box-shadow: none
    }*/

    :host(:hover) .input::placeholder {
        color: var(
            --cm-textfield-m-placeholder-text-color-hover,
            var(--cm-alias-placeholder-text-color-hover)
        );
    }

    :host(:hover) .icon-workflow {
        color: var(
            --cm-textfield-m-icon-color-hover,
            var(--cm-global-color-gray-1500)
        );
    }

    :host(:active) .input {
        border-color: var(
            --cm-textfield-m-border-color-down,
            var(--cm-alias-border-color-mouse-focus)
        );
    }

    :host(:active) .icon-workflow {
        color: var(
            --cm-textfield-m-icon-color-down,
            var(--cm-global-color-gray-1500)
        );
    }

    :host([valid]) .icon {
        color: var(
            --cm-textfield-m-validation-icon-color-valid,
            var(--cm-global-color-green-400)
        );
    }

    :host([invalid]) .icon {
        color: var(
            --cm-textfield-m-validation-icon-color-error,
            var(--cm-semantic-negative-color-icon)
        );
    }

    :host([invalid]:hover) .input {
        border-color: var(
            --cm-textfield-m-border-color-error-hover,
            var(--cm-semantic-negative-color-state-hover)
        );
    }

    :host([disabled]) .icon {
        color: var(
            --cm-textfield-m-validation-icon-color-disabled,
            var(--cm-global-color-gray-500)
        );
    }

    :host([disabled]) .icon-workflow {
        color: var(
            --cm-textfield-m-icon-color-disabled,
            var(--cm-global-color-gray-500)
        );
    }

    .icon-workflow {
        color: var(--cm-textfield-m-icon-color, var(--cm-alias-icon-color));
    }

    .input {
        background-color: var(
            --cm-textfield-m-background-color,
            var(--cm-global-color-gray-50)
        );
        border-color: var(
            --cm-textfield-m-border-color,
            var(--cm-alias-border-color)
        );
        color: var(--cm-textfield-m-text-color, var(--cm-alias-text-color));
    }

    .input::placeholder {
        color: var(--cm-global-color-gray-1500);
    }

    .input:focus,
    :host([focused]) .input {
        border-color: var(
            --cm-textfield-m-border-color-down,
            var(--cm-alias-border-color-mouse-focus)
        );
    }

    .input.focus-visible,
    .input.focus-visible,
    :host([focused]) .input {
        border-color: var(
            --cm-textfield-m-border-color-key-focus,
            var(--cm-alias-border-color-focus)
        );
        box-shadow: 0 0 0 1px
            var(
                --cm-textfield-m-border-color-key-focus,
                var(--cm-alias-border-color-focus)
            );
    }

    .input.focus-visible,
    .input:focus-visible,
    :host([focused]) .input {
        border-color: var(
            --cm-textfield-m-border-color-key-focus,
            var(--cm-alias-border-color-focus)
        );
        box-shadow: none;
    }

    :host([invalid]) .input {
        border-color: var(
            --cm-textfield-m-border-color-error,
            var(--cm-semantic-negative-color-default)
        );
        box-shadow: none;
    }

    :host([focused][invalid]) .input,
    :host([invalid]) .input.focus-visible,
    :host([invalid]) .input.focus-visible {
        border-color: var(
            --cm-textfield-m-border-color-error,
            var(--cm-global-color-red-500)
        );
        box-shadow: 0 0 0 2px
            var(
                --cm-textfield-m-border-color-error-key-focus,
                var(--cm-global-color-red-200)
            );
    }

    :host([focused][invalid]) .input,
    :host([invalid]) .input.focus-visible,
    :host([invalid]) .input:focus-visible {
        border-color: var(
            --cm-textfield-m-border-color-error-key-focus,
            var(--cm-global-color-red-500)
        );
        box-shadow: 0 0 0 2px
            var(
                --cm-textfield-m-border-color-error-key-focus,
                var(--cm-global-color-red-200)
            );
    }

    .input :disabled,
    :host([disabled]) .input,
    :host([disabled]:hover) .input {
        background-color: var(
            --cm-textfield-m-background-color-disabled,
            var(--cm-global-color-gray-200)
        );
        border-color: var(
            --cm-textfield-m-border-color-disabled,
            var(--cm-alias-border-color-transparent)
        );
        color: var(
            --cm-textfield-m-text-color-disabled,
            var(--cm-alias-text-color-disabled)
        );
        -webkit-text-fill-color: var(
            --cm-textfield-m-text-color-disabled,
            var(--cm-alias-text-color-disabled)
        );
    }

    .input :disabled::placeholder,
    :host([disabled]) .input::placeholder,
    :host([disabled]:hover) .input::placeholder {
        color: var(
            --cm-textfield-m-placeholder-text-color-disabled,
            var(--cm-alias-text-color-disabled)
        );
    }

    :host([quiet]) .input {
        background-color: var(
            --cm-textfield-quiet-m-background-color,
            var(--cm-alias-background-color-transparent)
        );
        border-color: var(
            --cm-textfield-quiet-m-border-color,
            var(--cm-alias-border-color)
        );
    }

    :host([focused][quiet]) .input,
    :host([quiet]) .input:focus {
        border-color: var(
            --cm-textfield-quiet-m-border-color-mouse-focus,
            var(--cm-alias-border-color-mouse-focus)
        );
    }

    :host([focused][quiet]) .input,
    :host([quiet]) .input.focus-visible,
    :host([quiet]) .input.focus-visible {
        border-color: var(
            --cm-textfield-m-border-color-key-focus,
            var(--cm-alias-border-color-focus)
        );
        box-shadow: 0 1px 0
            var(
                --cm-textfield-m-border-color-key-focus,
                var(--cm-alias-border-color-focus)
            );
    }

    :host([focused][quiet]) .input,
    :host([quiet]) .input.focus-visible,
    :host([quiet]) .input:focus-visible {
        border-color: var(
            --cm-textfield-m-border-color-key-focus,
            var(--cm-alias-border-color-focus)
        );
        box-shadow: 0 1px 0
            var(
                --cm-textfield-m-border-color-key-focus,
                var(--cm-alias-border-color-focus)
            );
    }

    :host([invalid][quiet]) .input {
        border-color: var(
            --cm-textfield-quiet-m-border-color-error,
            var(--cm-semantic-negative-color-default)
        );
    }

    :host([focused][invalid][quiet]) .input,
    :host([invalid][quiet]) .input:focus {
        border-color: var(
            --cm-textfield-quiet-m-border-color-error-mouse-focus,
            var(--cm-semantic-negative-color-state-hover)
        );
    }

    :host([focused][invalid][quiet]) .input,
    :host([invalid][quiet]) .input.focus-visible,
    :host([invalid][quiet]) .input.focus-visible {
        border-color: var(
            --cm-textfield-quiet-m-border-color-error-key-focus,
            var(--cm-alias-border-color-focus)
        );
        box-shadow: 0 1px 0
            var(
                --cm-textfield-quiet-m-border-color-error-key-focus,
                var(--cm-alias-border-color-focus)
            );
    }

    :host([focused][invalid][quiet]) .input,
    :host([invalid][quiet]) .input.focus-visible,
    :host([invalid][quiet]) .input:focus-visible {
        border-color: var(
            --cm-textfield-quiet-m-border-color-error-key-focus,
            var(--cm-alias-border-color-focus)
        );
        box-shadow: 0 1px 0
            var(
                --cm-textfield-quiet-m-border-color-error-key-focus,
                var(--cm-alias-border-color-focus)
            );
    }

    :host([disabled][quiet]) .input,
    :host([disabled][quiet]:hover) .input,
    :host([quiet]) .input :disabled {
        background-color: var(
            --cm-textfield-quiet-m-background-color-disabled,
            var(--cm-alias-background-color-transparent)
        );
        border-color: var(
            --cm-textfield-quiet-m-border-color-disabled,
            var(--cm-alias-border-color-mid)
        );
    }

    :host([grows]) #input {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        resize: none;
    }

    :host([grows]) #sizer {
        box-sizing: border-box;
        border: var(
                --cm-textfield-border-size,
                var(--cm-alias-border-size-thin)
            )
            solid;
        border-radius: var(
            --cm-textfield-border-radius,
            var(--cm-alias-border-radius-regular)
        );
        padding: 3px
            var(--cm-textfield-padding-x, var(--cm-global-dimension-size-150))
            5px
            calc(
                var(
                        --cm-textfield-padding-x,
                        var(--cm-global-dimension-size-150)
                    ) - 1px
            );
        text-indent: 0;
        width: 100%;
        vertical-align: top;
        margin: 0;
        font-family: var(
            --cm-alias-body-text-font-family,
            var(--cm-global-font-family-base)
        );
        font-size: var(
            --cm-textfield-text-size,
            var(--cm-alias-font-size-default)
        );
        line-height: var(
            --cm-textfield-text-line-height,
            var(--cm-alias-body-text-line-height)
        );
    }

    :host([grows][quiet]) #sizer {
        padding-left: var(--cm-textfield-quiet-padding-x, 0);
        padding-right: var(--cm-textfield-quiet-padding-x, 0);
        border-right-width: 0;
        border-left-width: 0;
    }
`;
export default styles;
