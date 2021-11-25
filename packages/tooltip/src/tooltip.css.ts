import { css } from '../../base/src/index';

const styles = css`
    :host {
        --cm-overlay-animation-distance: var(--cm-picker-m-popover-offset-y, var(--cm-global-dimension-size-75));
        visibility: hidden;
        opacity: 0;
        transition: transform var(--cm-global-animation-duration-100, .13s) ease-in-out, opacity var(--cm-global-animation-duration-100, .13s) ease-in-out, visibility 0ms linear var(--cm-global-animation-duration-100, .13s);
        pointer-events: none
    }

    :host([open]) {
        visibility: visible;
        opacity: 1;
        transition-delay: 0ms;
        pointer-events: auto
    }

    :host([placement*=bottom][open]) {
        transform: translateY(var(--cm-overlay-animation-distance))
    }

    :host([placement*=top][open]) {
        transform: translateY(calc(-1 * var(--cm-overlay-animation-distance)))
    }

    :host([placement*=right][open]) {
        transform: translateX(var(--cm-overlay-animation-distance))
    }

    :host([placement*=left][open]) {
        transform: translateX(calc(-1 * var(--cm-overlay-animation-distance)))
    }

    :host {
        --cm-tooltip-target-offset: 3px;
        --cm-tooltip-tip-width: var(--cm-tooltip-tip-height, var(--cm-global-dimension-size-50));
        position: relative;
        left: 0;
        top: 0;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        box-sizing: border-box;
        vertical-align: top;
        width: auto;
        padding: var(--cm-tooltip-padding-top, var(--cm-global-dimension-size-50)) var(--cm-tooltip-padding-x, var(--cm-global-dimension-size-125));
        border-radius: var(--cm-tooltip-border-radius, var(--cm-global-dimension-size-50));
        min-height: var(--cm-tooltip-min-height, var(--cm-global-dimension-size-300));
        max-width: var(--cm-tooltip-max-width, var(--cm-global-dimension-size-2000));
        font-size: var(--cm-tooltip-text-size, var(--cm-global-dimension-font-size-75));
        font-weight: var(--cm-tooltip-text-font-weight, var(--cm-global-font-weight-regular));
        line-height: var(--cm-tooltip-text-line-height, var(--cm-alias-component-text-line-height));
        word-break: break-word;
        -webkit-font-smoothing: antialiased;
        cursor: default;
        -webkit-user-select: none;
        user-select: none
    }

    p {
        margin: 0
    }

    #tip {
        position: absolute;
        height: 0;
        width: 0;
        border-top-width: var(--cm-tooltip-tip-width, var(--cm-global-dimension-size-100));
        border-top-style: solid;
        border-left: var(--cm-tooltip-tip-width, var(--cm-global-dimension-size-100)) solid transparent;
        border-right: var(--cm-tooltip-tip-width, var(--cm-global-dimension-size-100)) solid transparent;
        border-bottom: var(--cm-tooltip-tip-width, var(--cm-global-dimension-size-100)) solid transparent
    }

    :host([placement*=left]) #tip, :host([placement*=right]) #tip {
        top: 50%;
        margin-top: calc(-1 * var(--cm-tooltip-tip-width, var(--cm-global-dimension-size-100)))
    }

    :host([placement*=right]) {
        margin-left: var(--cm-tooltip-target-offset)
    }

    :host([placement*=right]) #tip {
        right: 100%;
        transform: rotate(90deg)
    }

    :host([placement*=left]) {
        margin-right: var(--cm-tooltip-target-offset)
    }

    :host([placement*=left]) #tip {
        left: 100%;
        transform: rotate(-90deg)
    }

    :host([placement*=top]) {
        margin-bottom: var(--cm-tooltip-target-offset)
    }

    :host([placement*=top]) #tip {
        top: 100%
    }

    :host([placement*=bottom]) {
        margin-top: var(--cm-tooltip-target-offset)
    }

    :host([placement*=bottom]) #tip {
        bottom: 100%;
        transform: rotate(-180deg)
    }

    :host([placement*=bottom]) #tip, :host([placement*=top]) #tip {
        left: 50%;
        margin-left: calc(-1 * var(--cm-tooltip-tip-width, var(--cm-global-dimension-size-100)))
    }

    :host([dir=ltr]) ::slotted([slot=icon]) {
        margin-left: calc(var(--cm-tooltip-icon-margin-x,
        var(--cm-global-dimension-size-100)) - var(--cm-tooltip-padding-x,
        var(--cm-global-dimension-size-125)))
    }

    :host([dir=rtl]) ::slotted([slot=icon]) {
        margin-right: calc(var(--cm-tooltip-icon-margin-x,
        var(--cm-global-dimension-size-100)) - var(--cm-tooltip-padding-x,
        var(--cm-global-dimension-size-125)))
    }

    :host([dir=ltr]) ::slotted([slot=icon]) {
        margin-right: var(--cm-tooltip-icon-margin-x, var(--cm-global-dimension-size-100))
    }

    :host([dir=rtl]) ::slotted([slot=icon]) {
        margin-left: var(--cm-tooltip-icon-margin-x, var(--cm-global-dimension-size-100))
    }

    ::slotted([slot=icon]) {
        width: var(--cm-tooltip-icon-size, var(--cm-global-dimension-size-175));
        height: var(--cm-tooltip-icon-size, var(--cm-global-dimension-size-175));
        align-self: flex-start;
        flex-shrink: 0;
        margin-top: 1px
    }

    #label {
        line-height: var(--cm-tooltip-text-line-height, var(--cm-alias-component-text-line-height))
    }

    :host {
        background-color: var(--cm-tooltip-background-color, var(--cm-global-color-static-gray-300));
        color: var(--cm-tooltip-text-color, var(--cm-global-color-static-white))
    }

    #tip {
        border-top-color: var(--cm-tooltip-background-color, var(--cm-global-color-static-gray-300))
    }

    .spectrum-Tooltip--error, :host([variant=negative]) {
        background-color: var(--cm-tooltip-negative-background-color, var(--cm-global-color-static-red-700))
    }

    .spectrum-Tooltip--error #tip, :host([variant=negative]) #tip {
        border-top-color: var(--cm-tooltip-negative-background-color, var(--cm-global-color-static-red-700))
    }

    .spectrum-Tooltip--help, :host([variant=info]) {
        background-color: var(--cm-tooltip-info-background-color, var(--cm-global-color-static-blue-700))
    }

    .spectrum-Tooltip--help #tip, :host([variant=info]) #tip {
        border-top-color: var(--cm-tooltip-info-background-color, var(--cm-global-color-static-blue-700))
    }

    .spectrum-Tooltip--success, :host([variant=positive]) {
        background-color: var(--cm-tooltip-positive-background-color, var(--cm-global-color-static-green-700))
    }

    .spectrum-Tooltip--success #tip, :host([variant=positive]) #tip {
        border-top-color: var(--cm-tooltip-positive-background-color, var(--cm-global-color-static-green-700))
    }

    #tip {
        border: none
    }

    :host([placement*=bottom]) #tip, :host([placement*=left]) #tip, :host([placement*=right]) #tip {
        transform: none
    }

    #tip:after {
        content: "";
        position: absolute;
        left: 0;
        width: 0;
        height: 0;
        border-top-color: transparent;
        border: var(--cm-tooltip-tip-height, var(--cm-global-dimension-size-50)) solid transparent;
        border-top: var(--cm-tooltip-tip-height, var(--cm-global-dimension-size-50)) solid var(--cm-tooltip-background-color, var(--cm-global-color-static-gray-300))
    }

    :host([placement*=bottom]) #tip:after {
        bottom: 100%;
        transform: scaleY(-1)
    }

    :host([placement*=left]) #tip:after {
        left: 100%;
        transform: rotate(-90deg)
    }

    :host([placement*=right]) #tip:after {
        right: 100%;
        left: auto;
        transform: rotate(90deg)
    }

    :host([variant=negative]) #tip:after {
        border-top-color: var(--cm-tooltip-negative-background-color, var(--cm-global-color-static-red-700))
    }

    :host([variant=info]) #tip:after {
        border-top-color: var(--cm-tooltip-info-background-color, var(--cm-global-color-static-blue-700))
    }

    :host([variant=positive]) #tip:after {
        border-top-color: var(--cm-tooltip-positive-background-color, var(--cm-global-color-static-green-700))
    }
`;
export default styles;