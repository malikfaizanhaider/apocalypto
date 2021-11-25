import { css } from '../../base/src/index';

const styles = css`
    :host {
        --cm-toast-icon-padding-y: var(--cm-global-dimension-size-85);
        --cm-toast-neutral-content-padding-top: var(
            --cm-global-dimension-size-65
        );
        --cm-toast-content-padding-bottom: var(--cm-global-dimension-size-65);
        --cm-toast-button-margin-right: var(--cm-global-dimension-size-130);
    }

    :host([dir='ltr']) {
        padding-right: var(
            --cm-toast-neutral-padding-right,
            var(--cm-global-dimension-size-100)
        );
    }

    :host([dir='rtl']) {
        padding-left: var(
            --cm-toast-neutral-padding-right,
            var(--cm-global-dimension-size-100)
        );
    }

    :host([dir='ltr']) {
        padding-left: var(
            --cm-toast-neutral-padding-left,
            var(--cm-global-dimension-size-200)
        );
    }

    :host([dir='rtl']) {
        padding-right: var(
            --cm-toast-neutral-padding-left,
            var(--cm-global-dimension-size-200)
        );
    }

    :host {
        box-sizing: border-box;
        display: inline-flex;
        flex-direction: row;
        align-items: stretch;
        border-radius: var(
            --cm-toast-neutral-border-radius,
            var(--cm-global-dimension-static-size-50)
        );
        padding-top: var(
            --cm-toast-neutral-padding-y,
            var(--cm-global-dimension-size-100)
        );
        padding-bottom: var(
            --cm-toast-neutral-padding-y,
            var(--cm-global-dimension-size-100)
        );
        font-size: var(
            --cm-toast-neutral-text-size,
            var(--cm-alias-font-size-default)
        );
        font-weight: var(
            --cm-toast-neutral-text-font-weight,
            var(--cm-global-font-weight-regular)
        );
        -webkit-font-smoothing: antialiased;
    }

    :host([dir='ltr']) .type {
        margin-right: var(
            --cm-toast-neutral-icon-padding-right,
            var(--cm-global-dimension-size-150)
        );
    }

    :host([dir='rtl']) .type {
        margin-left: var(
            --cm-toast-neutral-icon-padding-right,
            var(--cm-global-dimension-size-150)
        );
    }

    :host([dir='ltr']) .type {
        margin-left: 0;
    }

    :host([dir='rtl']) .type {
        margin-right: 0;
    }

    .type {
        flex-shrink: 0;
        flex-grow: 0;
        margin-top: var(--cm-toast-icon-padding-y);
        margin-bottom: var(--cm-toast-icon-padding-y);
    }

    :host([dir='ltr']) .content {
        padding-right: var(
            --cm-toast-neutral-content-padding-right,
            var(--cm-global-dimension-size-200)
        );
    }

    :host([dir='rtl']) .content {
        padding-left: var(
            --cm-toast-neutral-content-padding-right,
            var(--cm-global-dimension-size-200)
        );
    }

    :host([dir='ltr']) .content {
        padding-left: 0;
    }

    :host([dir='rtl']) .content {
        padding-right: 0;
    }

    :host([dir='ltr']) .content {
        text-align: left;
    }

    :host([dir='rtl']) .content {
        text-align: right;
    }

    .content {
        flex: 1 1 auto;
        display: inline-block;
        box-sizing: border-box;
        padding-top: var(
            --cm-toast-neutral-content-padding-top,
            var(--cm-global-dimension-size-65)
        );
        padding-bottom: var(--cm-toast-content-padding-bottom);
        font-size: var(
            --cm-toast-info-text-size,
            var(--cm-alias-font-size-default)
        );
        font-weight: var(
            --cm-toast-info-text-font-weight,
            var(--cm-global-font-weight-regular)
        );
        line-height: var(
            --cm-toast-info-text-line-height,
            var(--cm-alias-component-text-line-height)
        );
    }

    .buttons {
        display: flex;
        flex: 0 0 auto;
        align-items: flex-start;
    }

    :host([dir='ltr']) .buttons .spectrum-ClearButton + .spectrum-ClearButton,
    :host([dir='ltr'])
        .buttons
        .spectrum-ClearButton
        + ::slotted([slot='action']),
    :host([dir='ltr']) .buttons slot[name='action'] + .spectrum-ClearButton,
    :host([dir='ltr'])
        .buttons
        slot[name='action']
        + ::slotted([slot='action']) {
        margin-left: var(
            --cm-toast-neutral-button-gap-x,
            var(--cm-global-dimension-size-100)
        );
    }

    :host([dir='rtl']) .buttons .spectrum-ClearButton + .spectrum-ClearButton,
    :host([dir='rtl'])
        .buttons
        .spectrum-ClearButton
        + ::slotted([slot='action']),
    :host([dir='rtl']) .buttons slot[name='action'] + .spectrum-ClearButton,
    :host([dir='rtl'])
        .buttons
        slot[name='action']
        + ::slotted([slot='action']) {
        margin-right: var(
            --cm-toast-neutral-button-gap-x,
            var(--cm-global-dimension-size-100)
        );
    }

    .body {
        flex: 1 1 auto;
        align-self: center;
    }

    :host([dir='ltr']) .body ::slotted([slot='action']) {
        float: right;
    }

    :host([dir='rtl']) .body ::slotted([slot='action']) {
        float: left;
    }

    :host([dir='ltr']) .body ::slotted([slot='action']) {
        margin-right: var(--cm-toast-button-margin-right);
    }

    :host([dir='rtl']) .body ::slotted([slot='action']) {
        margin-left: var(--cm-toast-button-margin-right);
    }

    :host([dir='ltr']) .body + .buttons {
        padding-left: var(
            --cm-toast-neutral-padding-right,
            var(--cm-global-dimension-size-100)
        );
    }

    :host([dir='rtl']) .body + .buttons {
        padding-right: var(
            --cm-toast-neutral-padding-right,
            var(--cm-global-dimension-size-100)
        );
    }

    :host([dir='ltr']) .body + .buttons {
        border-left-width: 1px;
    }

    :host([dir='rtl']) .body + .buttons {
        border-right-width: 1px;
    }

    :host([dir='ltr']) .body + .buttons {
        border-left-style: solid;
    }

    :host([dir='rtl']) .body + .buttons {
        border-right-style: solid;
    }

    :host {
        background-color: var(
            --cm-toast-neutral-background-color,
            var(--cm-semantic-neutral-background-color-default)
        );
        color: var(
            --cm-toast-neutral-background-color,
            var(--cm-semantic-neutral-background-color-default)
        );
    }

    .content {
        color: var(
            --cm-toast-neutral-text-color,
            var(--cm-global-color-static-white)
        );
    }

    .type {
        color: #fff;
    }

    :host([dir='ltr']) .buttons {
        border-left-color: hsla(0, 0%, 100%, 0.2);
    }

    :host([dir='rtl']) .buttons {
        border-right-color: hsla(0, 0%, 100%, 0.2);
    }

    :host([variant='warning']) {
        background-color: var(
            --cm-toast-warning-background-color,
            var(--cm-global-color-static-orange-700)
        );
    }

    :host([variant='warning']),
    :host([variant='warning']) .closeButton.focus-visible:not(:active),
    :host([variant='warning']) .closeButton.focus-visible:not(:active) {
        color: var(
            --cm-toast-warning-background-color,
            var(--cm-global-color-static-orange-700)
        );
    }

    :host([variant='warning'][theme~='outline']) {
        background-color: var(
            --cm-toast-warning-background-color,
            var(--cm-global-color-static-orange-50)
        );
        box-shadow: inset 0 0 0 1px
            var(
                --cm-toast-warning-background-color,
                var(--cm-global-color-static-orange-100)
            );
    }

    :host([variant='warning'][theme~='outline']) .type,
    :host([variant='warning'][theme~='outline']) .content,
    :host([variant='warning'][theme~='outline']) [variant='overBackground'] {
        color: var(
            --cm-toast-warning-background-color,
            var(--cm-global-color-static-orange-700)
        );
    }

    :host([variant='warning'][theme~='outline']),
    :host([variant='warning'][theme~='outline'])
        .closeButton.focus-visible:not(:active),
    :host([variant='warning'][theme~='outline'])
        .closeButton.focus-visible:not(:active) {
        color: var(
            --cm-toast-warning-background-color,
            var(--cm-global-color-static-orange-700)
        );
    }

    :host([variant='error']),
    :host([variant='negative']) {
        background-color: var(
            --cm-toast-negative-background-color,
            var(--cm-semantic-negative-color-background)
        );
    }

    :host([variant='error']),
    :host([variant='error']) .closeButton.focus-visible:not(:active),
    :host([variant='error']) .closeButton.focus-visible:not(:active),
    :host([variant='negative']),
    :host([variant='negative']) .closeButton.focus-visible:not(:active),
    :host([variant='negative']) .closeButton.focus-visible:not(:active) {
        color: var(
            --cm-toast-negative-background-color,
            var(--cm-semantic-negative-color-background)
        );
    }

    :host([variant='error']),
    :host([variant='error']) .closeButton.focus-visible:not(:active),
    :host([variant='error']) .closeButton:focus-visible:not(:active),
    :host([variant='negative']),
    :host([variant='negative']) .closeButton.focus-visible:not(:active),
    :host([variant='negative']) .closeButton:focus-visible:not(:active) {
        color: var(
            --cm-toast-negative-background-color,
            var(--cm-semantic-negative-color-background)
        );
    }

    :host([variant='negative'][theme~='outline']) {
        background-color: var(
            --cm-toast-warning-background-color,
            var(--cm-global-color-static-red-50)
        );
        box-shadow: inset 0 0 0 1px
            var(
                --cm-toast-warning-background-color,
                var(--cm-global-color-static-red-100)
            );
    }

    :host([variant='negative'][theme~='outline']) .type,
    :host([variant='negative'][theme~='outline']) .content,
    :host([variant='negative'][theme~='outline']) [variant='overBackground'] {
        color: var(
            --cm-toast-warning-background-color,
            var(--cm-global-color-static-red-900)
        );
    }

    :host([variant='info']) {
        background-color: var(
            --cm-toast-info-background-color,
            var(--cm-semantic-informative-color-background)
        );
    }

    :host([variant='info']),
    :host([variant='info']) .closeButton.focus-visible:not(:active),
    :host([variant='info']) .closeButton.focus-visible:not(:active) {
        color: var(
            --cm-toast-info-background-color,
            var(--cm-semantic-informative-color-background)
        );
    }

    :host([variant='info']),
    :host([variant='info']) .closeButton.focus-visible:not(:active),
    :host([variant='info']) .closeButton:focus-visible:not(:active) {
        color: var(
            --cm-toast-info-background-color,
            var(--cm-semantic-informative-color-background)
        );
    }

    :host([variant='info'][theme~='outline']) {
        background-color: var(--i2c-blue-50);
        box-shadow: inset 0 0 0 1px var(--i2c-blue-100);
    }

    :host([variant='info'][theme~='outline']) .type,
    :host([variant='info'][theme~='outline']) .content,
    :host([variant='info'][theme~='outline']) [variant='overBackground'] {
        color: var(--i2c-blue-500);
    }

    :host([variant='positive']),
    :host([variant='success']) {
        background-color: var(
            --cm-toast-positive-background-color,
            var(--cm-semantic-positive-color-background)
        );
    }

    :host([variant='positive'][theme~='outline']),
    :host([variant='success'][theme~='outline']) {
        background-color: var(
            --cm-toast-warning-background-color,
            var(--cm-global-color-static-green-50)
        );
        box-shadow: inset 0 0 0 1px
            var(
                --cm-toast-warning-background-color,
                var(--cm-global-color-static-green-100)
            );
    }

    :host([variant='positive'][theme~='outline']) .type,
    :host([variant='positive'][theme~='outline']) .content,
    :host([variant='positive'][theme~='outline']) [variant='overBackground'] {
        color: var(
            --cm-toast-warning-background-color,
            var(--cm-global-color-static-green-900)
        );
    }

    :host([variant='positive']),
    :host([variant='positive']) .closeButton.focus-visible:not(:active),
    :host([variant='positive']) .closeButton.focus-visible:not(:active),
    :host([variant='success']),
    :host([variant='success']) .closeButton.focus-visible:not(:active),
    :host([variant='success']) .closeButton.focus-visible:not(:active) {
        color: var(
            --cm-toast-positive-background-color,
            var(--cm-semantic-positive-color-background)
        );
    }

    :host([variant='positive']),
    :host([variant='positive']) .closeButton.focus-visible:not(:active),
    :host([variant='positive']) .closeButton:focus-visible:not(:active),
    :host([variant='success']),
    :host([variant='success']) .closeButton.focus-visible:not(:active),
    :host([variant='success']) .closeButton:focus-visible:not(:active) {
        color: var(
            --cm-toast-positive-background-color,
            var(--cm-semantic-positive-color-background)
        );
    }

    .content {
        line-height: 1.5;
    }

    :host(:not([open])) {
        display: none;
    }
`;
export default styles;
