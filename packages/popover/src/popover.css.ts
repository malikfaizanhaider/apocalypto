/* Copyright 2021 i2c Inc. All rights reserved. */
import { css } from '../../base/src/index';

const styles = css`
    :host {
        --cm-overlay-animation-distance: var(--cm-picker-m-popover-offset-y, var(--cm-global-dimension-size-75));
        visibility: hidden;
        opacity: 0;
        transition: transform var(--cm-global-animation-duration-100, .13s) ease-in-out, opacity var(--cm-global-animation-duration-100, .13s) ease-in-out, visibility 0ms linear var(--cm-global-animation-duration-100, .13s);
        pointer-events: none;
        background-color: red;
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
        --cm-popover-target-offset: 13px;
        --cm-popover-dialog-padding: 1rem;
        --cm-popover-dialog-min-width: 500px;
        --cm-popover-min-width: var(--cm-global-dimension-size-400);
        --cm-popover-min-height: var(--cm-global-dimension-size-400);
        display: inline-flex;
        flex-direction: column;
        min-width: var(--cm-popover-min-width, var(--cm-global-dimension-size-400));
        min-height: var(--cm-popover-min-height, var(--cm-global-dimension-size-400));
        border-style: solid;
        border-width: var(--cm-popover-border-size, var(--cm-alias-border-size-thin));
        border-radius: var(--cm-popover-border-radius, var(--cm-alias-border-radius-regular));
        outline: none;
        box-sizing: border-box
    }

    #tip, :host {
        position: absolute
    }

    #tip {
        -webkit-transform: translate(0)
    }

    #tip .triangle {
        stroke-linecap: square;
        stroke-linejoin: miter;
        stroke-width: var(--cm-popover-border-size, var(--cm-alias-border-size-thin))
    }

    :host([dialog]) {
        min-width: var(--cm-popover-dialog-min-width);
        padding: var(--cm-popover-dialog-padding)
    }

    :host([placement*=left][tip]) {
        margin-right: var(--cm-popover-target-offset)
    }

    :host([placement*=left]) #tip {
        left: 100%
    }

    :host([placement*=right][tip]) {
        margin-left: var(--cm-popover-target-offset)
    }

    :host([placement*=right]) #tip {
        right: 100%;
        transform: scaleX(-1)
    }

    :host([placement*=left]) #tip, :host([placement*=right]) #tip {
        top: 50%;
        margin-top: calc(var(--cm-global-dimension-size-150) * -1)
    }

    :host([placement*=bottom][tip]) {
        margin-top: var(--cm-popover-target-offset)
    }

    :host([placement*=bottom]) #tip {
        bottom: 100%;
        transform: scaleY(-1)
    }

    :host([placement*=top][tip]) {
        margin-bottom: var(--cm-popover-target-offset)
    }

    :host([placement*=top]) #tip {
        top: 100%
    }

    :host([placement*=bottom]) #tip, :host([placement*=top]) #tip {
        left: 50%;
        margin-left: calc(var(--cm-global-dimension-size-150) * -1)
    }

    :host {
        background-color: var(--cm-popover-background-color, var(--cm-global-color-gray-50));
        border-color: transparent;
        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
        will-change: filter;
        -webkit-clip-path: inset(-30px -30px);
        clip-path: inset(-30px -30px)
    }

    #tip .triangle {
        fill: var(--cm-popover-background-color, var(--cm-global-color-gray-50));
        stroke: var(--cm-popover-border-color, var(--cm-alias-border-color-dark))
    }

    :host {
        --sp-popover-tip-size: 24px
    }

    :host([placement*=bottom]), :host([placement*=top]) {
        max-height: calc(100% - var(--cm-overlay-animation-distance))
    }

    :host([placement*=left]), :host([placement*=right]) {
        max-width: calc(100% - var(--cm-overlay-animation-distance))
    }

    ::slotted(*) {
        overscroll-behavior: contain
    }

    .tip {
        width: var(--sp-popover-tip-size);
        height: calc(var(--sp-popover-tip-size) / 2);
        position: absolute;
        left: 0
    }

    :host([placement*=bottom]) #tip, :host([placement*=right]) #tip {
        transform: none
    }

    :host([placement*=top]) .tip {
        top: 100%
    }

    :host([placement*=bottom]) .tip {
        bottom: 100%;
        transform: scaleY(-1)
    }

    :host([placement*=left]) .tip {
        transform-origin: 100% 0;
        transform: rotate(-90deg) translateY(-200%)
    }

    :host([placement*=right]) .tip {
        transform-origin: 0 0;
        transform: rotate(90deg)
    }
`;
export default styles;