import { css } from '../../base/src/index';
const styles = css `
    :host {
        --cm-button-line-height: 1.3;
        display: inline-flex;
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
        vertical-align: top;
        transition: background var(--cm-global-animation-duration-100, .13s) ease-out, border-color var(--cm-global-animation-duration-100, .13s) ease-out, color var(--cm-global-animation-duration-100, .13s) ease-out, box-shadow var(--cm-global-animation-duration-100, .13s) ease-out;
        text-decoration: none;
        font-family: var(--cm-alias-body-text-font-family, var(--cm-global-font-family-base));
        line-height: var(--cm-button-line-height);
        user-select: none;
        -webkit-user-select: none;
        cursor: pointer
    }

    :host(:focus) {
        outline: none
    }
    iron-icon {
        color: red;
    }
    :host(::-moz-focus-inner) {
        border: 0;
        border-style: none;
        padding: 0;
        margin-top: -2px;
        margin-bottom: -2px
    }

    :host(:disabled) {
        cursor: default
    }

    ::slotted([slot=icon]) {
        max-height: 100%;
        flex-shrink: 0
    }

    #label {
        align-self: center;
        justify-self: center;
        text-align: center
    }

    #label:empty {
        display: none
    }

    :host([size=s]) {
        --cm-actionbutton-quiet-border-size: var(--cm-actionbutton-s-quiet-border-size, var(--cm-alias-border-size-thin));
        --cm-actionbutton-quiet-border-radius: var(--cm-actionbutton-s-quiet-border-radius, var(--cm-alias-border-radius-regular));
        --cm-actionbutton-quiet-text-font-weight: var(--cm-actionbutton-s-quiet-text-font-weight, var(--cm-alias-body-text-font-weight));
        --cm-actionbutton-quiet-text-size: var(--cm-actionbutton-s-quiet-text-size, var(--cm-alias-item-text-size-s));
        --cm-actionbutton-border-size: var(--cm-actionbutton-s-border-size, var(--cm-alias-border-size-thin));
        --cm-actionbutton-border-radius: var(--cm-actionbutton-s-border-radius, var(--cm-alias-border-radius-regular));
        --cm-actionbutton-min-width: var(--cm-actionbutton-s-min-width, var(--cm-global-dimension-size-400));
        --cm-actionbutton-text-font-weight: var(--cm-actionbutton-s-text-font-weight, var(--cm-alias-body-text-font-weight));
        --cm-actionbutton-text-line-height: var(--cm-actionbutton-s-text-line-height, var(--cm-alias-component-text-line-height));
        --cm-actionbutton-text-size: var(--cm-actionbutton-s-text-size, var(--cm-alias-item-text-size-s));
        --cm-actionbutton-icon-gap: var(--cm-actionbutton-s-icon-gap, var(--cm-alias-item-workflow-icon-gap-s));
        --cm-actionbutton-height: var(--cm-actionbutton-s-height, var(--cm-alias-item-height-s));
        --cm-actionbutton-padding-left: var(--cm-actionbutton-s-padding-left, var(--cm-alias-item-workflow-padding-left-s));
        --cm-actionbutton-icononly-padding-left: var(--cm-actionbutton-s-icononly-padding-left, var(--cm-alias-item-icononly-padding-s));
        --cm-actionbutton-icononly-padding-right: var(--cm-actionbutton-s-icononly-padding-right, var(--cm-alias-item-icononly-padding-s));
        --cm-actionbutton-textonly-padding-left: var(--cm-actionbutton-s-textonly-padding-left, var(--cm-alias-item-padding-s));
        --cm-actionbutton-textonly-padding-right: var(--cm-actionbutton-s-textonly-padding-right, var(--cm-alias-item-padding-s));
        --cm-actionbutton-hold-icon-padding-bottom: var(--cm-global-dimension-size-25);
        --cm-actionbutton-hold-icon-padding-right: var(--cm-global-dimension-size-25)
    }

    :host([size=m]) {
        --cm-actionbutton-quiet-border-size: var(--cm-actionbutton-m-quiet-border-size, var(--cm-alias-border-size-thin));
        --cm-actionbutton-quiet-border-radius: var(--cm-actionbutton-m-quiet-border-radius, var(--cm-alias-border-radius-regular));
        --cm-actionbutton-quiet-text-font-weight: var(--cm-actionbutton-m-quiet-text-font-weight, var(--cm-alias-body-text-font-weight));
        --cm-actionbutton-quiet-text-size: var(--cm-actionbutton-m-quiet-text-size, var(--cm-alias-item-text-size-m));
        --cm-actionbutton-border-size: var(--cm-actionbutton-m-border-size, var(--cm-alias-border-size-thin));
        --cm-actionbutton-border-radius: var(--cm-actionbutton-m-border-radius, var(--cm-alias-border-radius-regular));
        --cm-actionbutton-min-width: var(--cm-actionbutton-m-min-width, var(--cm-global-dimension-size-400));
        --cm-actionbutton-text-font-weight: var(--cm-actionbutton-m-text-font-weight, var(--cm-alias-body-text-font-weight));
        --cm-actionbutton-text-line-height: var(--cm-actionbutton-m-text-line-height, var(--cm-alias-component-text-line-height));
        --cm-actionbutton-text-size: var(--cm-actionbutton-m-text-size, var(--cm-alias-item-text-size-m));
        --cm-actionbutton-height: var(--cm-actionbutton-m-height, var(--cm-alias-item-height-m));
        --cm-actionbutton-icon-gap: var(--cm-actionbutton-m-icon-gap, var(--cm-alias-item-workflow-icon-gap-m));
        --cm-actionbutton-padding-left: var(--cm-actionbutton-m-padding-left, var(--cm-alias-item-workflow-padding-left-m));
        --cm-actionbutton-icononly-padding-left: var(--cm-actionbutton-m-icononly-padding-left, var(--cm-alias-item-icononly-padding-m));
        --cm-actionbutton-icononly-padding-right: var(--cm-actionbutton-m-icononly-padding-right, var(--cm-alias-item-icononly-padding-m));
        --cm-actionbutton-textonly-padding-left: var(--cm-actionbutton-m-textonly-padding-left, var(--cm-alias-item-padding-m));
        --cm-actionbutton-textonly-padding-right: var(--cm-actionbutton-m-textonly-padding-right, var(--cm-alias-item-padding-m));
        --cm-actionbutton-hold-icon-padding-bottom: var(--cm-global-dimension-size-40);
        --cm-actionbutton-hold-icon-padding-right: var(--cm-global-dimension-size-40)
    }

    :host([size=l]) {
        --cm-actionbutton-quiet-border-size: var(--cm-actionbutton-l-quiet-border-size, var(--cm-alias-border-size-thin));
        --cm-actionbutton-quiet-border-radius: var(--cm-actionbutton-l-quiet-border-radius, var(--cm-alias-border-radius-regular));
        --cm-actionbutton-quiet-text-font-weight: var(--cm-actionbutton-l-quiet-text-font-weight, var(--cm-alias-body-text-font-weight));
        --cm-actionbutton-quiet-text-size: var(--cm-actionbutton-l-quiet-text-size, var(--cm-alias-item-text-size-l));
        --cm-actionbutton-border-size: var(--cm-actionbutton-l-border-size, var(--cm-alias-border-size-thin));
        --cm-actionbutton-border-radius: var(--cm-actionbutton-l-border-radius, var(--cm-alias-border-radius-regular));
        --cm-actionbutton-min-width: var(--cm-actionbutton-l-min-width, var(--cm-global-dimension-size-400));
        --cm-actionbutton-text-font-weight: var(--cm-actionbutton-l-text-font-weight, var(--cm-alias-body-text-font-weight));
        --cm-actionbutton-text-line-height: var(--cm-actionbutton-l-text-line-height, var(--cm-alias-component-text-line-height));
        --cm-actionbutton-text-size: var(--cm-actionbutton-l-text-size, var(--cm-alias-item-text-size-l));
        --cm-actionbutton-icon-gap: var(--cm-actionbutton-l-icon-gap, var(--cm-alias-item-workflow-icon-gap-l));
        --cm-actionbutton-height: var(--cm-actionbutton-l-height, var(--cm-alias-item-height-l));
        --cm-actionbutton-padding-left: var(--cm-actionbutton-l-padding-left, var(--cm-alias-item-workflow-padding-left-l));
        --cm-actionbutton-icononly-padding-left: var(--cm-actionbutton-l-icononly-padding-left, var(--cm-alias-item-icononly-padding-l));
        --cm-actionbutton-icononly-padding-right: var(--cm-actionbutton-l-icononly-padding-right, var(--cm-alias-item-icononly-padding-l));
        --cm-actionbutton-textonly-padding-left: var(--cm-actionbutton-l-textonly-padding-left, var(--cm-alias-item-padding-l));
        --cm-actionbutton-textonly-padding-right: var(--cm-actionbutton-l-textonly-padding-right, var(--cm-alias-item-padding-l));
        --cm-actionbutton-hold-icon-padding-bottom: var(--cm-global-dimension-size-50);
        --cm-actionbutton-hold-icon-padding-right: var(--cm-global-dimension-size-50)
    }

    :host([size=xl]) {
        --cm-actionbutton-quiet-border-size: var(--cm-actionbutton-xl-quiet-border-size, var(--cm-alias-border-size-thin));
        --cm-actionbutton-quiet-border-radius: var(--cm-actionbutton-xl-quiet-border-radius, var(--cm-alias-border-radius-regular));
        --cm-actionbutton-quiet-text-font-weight: var(--cm-actionbutton-xl-quiet-text-font-weight, var(--cm-alias-body-text-font-weight));
        --cm-actionbutton-quiet-text-size: var(--cm-actionbutton-xl-quiet-text-size, var(--cm-alias-item-text-size-xl));
        --cm-actionbutton-border-size: var(--cm-actionbutton-xl-border-size, var(--cm-alias-border-size-thin));
        --cm-actionbutton-border-radius: var(--cm-actionbutton-xl-border-radius, var(--cm-alias-border-radius-regular));
        --cm-actionbutton-min-width: var(--cm-actionbutton-xl-min-width, var(--cm-global-dimension-size-400));
        --cm-actionbutton-text-font-weight: var(--cm-actionbutton-xl-text-font-weight, var(--cm-alias-body-text-font-weight));
        --cm-actionbutton-text-line-height: var(--cm-actionbutton-xl-text-line-height, var(--cm-alias-component-text-line-height));
        --cm-actionbutton-icon-gap: var(--cm-actionbutton-xl-icon-gap, var(--cm-alias-item-workflow-icon-gap-l));
        --cm-actionbutton-text-size: var(--cm-actionbutton-xl-text-size, var(--cm-alias-item-text-size-xl));
        --cm-actionbutton-height: var(--cm-actionbutton-xl-height, var(--cm-alias-item-height-xl));
        --cm-actionbutton-padding-left: var(--cm-actionbutton-xl-padding-left, var(--cm-alias-item-workflow-padding-left-xl));
        --cm-actionbutton-icononly-padding-left: var(--cm-actionbutton-xl-icononly-padding-left, var(--cm-alias-item-icononly-padding-xl));
        --cm-actionbutton-icononly-padding-right: var(--cm-actionbutton-xl-icononly-padding-right, var(--cm-alias-item-icononly-padding-xl));
        --cm-actionbutton-textonly-padding-left: var(--cm-actionbutton-xl-textonly-padding-left, var(--cm-alias-item-padding-xl));
        --cm-actionbutton-textonly-padding-right: var(--cm-actionbutton-xl-textonly-padding-right, var(--cm-alias-item-padding-xl));
        --cm-actionbutton-hold-icon-padding-bottom: var(--cm-global-dimension-size-65);
        --cm-actionbutton-hold-icon-padding-right: var(--cm-global-dimension-size-65)
    }

    :host {
        --cm-actionbutton-padding-left-adjusted: calc(var(--cm-actionbutton-padding-left) - var(--cm-actionbutton-border-size));
        --cm-actionbutton-textonly-padding-left-adjusted: calc(var(--cm-actionbutton-textonly-padding-left) - var(--cm-actionbutton-border-size));
        --cm-actionbutton-textonly-padding-right-adjusted: calc(var(--cm-actionbutton-textonly-padding-right) - var(--cm-actionbutton-border-size));
        --cm-actionbutton-icononly-padding-left-adjusted: calc(var(--cm-actionbutton-icononly-padding-left) - var(--cm-actionbutton-border-size));
        --cm-actionbutton-icononly-padding-right-adjusted: calc(var(--cm-actionbutton-icononly-padding-right) - var(--cm-actionbutton-border-size))
    }

    :host([dir=ltr]) {
        padding-left: var(--cm-actionbutton-textonly-padding-left-adjusted);
        padding-right: var(--cm-actionbutton-textonly-padding-right-adjusted)
    }

    :host([dir=rtl]) {
        padding-right: var(--cm-actionbutton-textonly-padding-left-adjusted);
        padding-left: var(--cm-actionbutton-textonly-padding-right-adjusted)
    }

    :host {
        position: relative;
        height: var(--cm-actionbutton-height);
        min-width: var(--cm-actionbutton-min-width);
        border-width: var(--cm-actionbutton-border-size);
        border-radius: var(--cm-actionbutton-border-radius);
        font-size: var(--cm-actionbutton-text-size);
        font-weight: var(--cm-actionbutton-text-font-weight);
        line-height: var(--cm-actionbutton-text-line-height)
    }

    :host([dir=ltr]) ::slotted([slot=icon]) {
        margin-left: calc(-1 * (var(--cm-actionbutton-textonly-padding-left-adjusted) - var(--cm-actionbutton-padding-left-adjusted)))
    }

    :host([dir=rtl]) ::slotted([slot=icon]) {
        margin-right: calc(-1 * (var(--cm-actionbutton-textonly-padding-left-adjusted) - var(--cm-actionbutton-padding-left-adjusted)))
    }

    :host([dir=ltr]) slot[name=icon] + #label {
        padding-left: var(--cm-actionbutton-icon-gap)
    }

    :host([dir=rtl]) slot[name=icon] + #label {
        padding-right: var(--cm-actionbutton-icon-gap)
    }

    :host([dir=ltr]) slot[name=icon] + #label {
        padding-right: 0
    }

    :host([dir=rtl]) slot[name=icon] + #label {
        padding-left: 0
    }

    #hold-affordance + ::slotted([slot=icon]), :host([dir]) slot[icon-only]::slotted([slot=icon]), :host([dir]) slot[icon-only] sp-icon {
        margin-left: calc(-1 * (var(--cm-actionbutton-textonly-padding-left-adjusted) - var(--cm-actionbutton-icononly-padding-left-adjusted)));
        margin-right: calc(-1 * (var(--cm-actionbutton-textonly-padding-right-adjusted) - var(--cm-actionbutton-icononly-padding-right-adjusted)))
    }

    #label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis
    }

    :host([dir=ltr]) #hold-affordance {
        right: var(--cm-actionbutton-hold-icon-padding-right)
    }

    :host([dir=rtl]) #hold-affordance {
        left: var(--cm-actionbutton-hold-icon-padding-right);
        transform: matrix(-1, 0, 0, 1, 0, 0)
    }

    #hold-affordance {
        position: absolute;
        bottom: var(--cm-actionbutton-hold-icon-padding-bottom)
    }

    :host([quiet]) {
        border-width: var(--cm-actionbutton-quiet-border-size);
        border-radius: var(--cm-actionbutton-quiet-border-radius);
        font-size: var(--cm-actionbutton-quiet-text-size);
        font-weight: var(--cm-actionbutton-quiet-text-font-weight)
    }

    :host {
        --cm-actionbutton-m-quiet-border-size-key-focus: 1px;
        background-color: var(--cm-actionbutton-m-background-color, var(--cm-global-color-gray-75));
        border-color: var(--cm-actionbutton-m-border-color, var(--cm-alias-border-color));
        color: var(--cm-actionbutton-m-text-color, var(--cm-alias-text-color))
    }

    ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-icon-color, var(--cm-alias-icon-color))
    }

    #hold-affordance {
        color: var(--cm-actionbutton-m-hold-icon-color, var(--cm-alias-icon-color))
    }

    :host(:hover) {
        background-color: var(--cm-actionbutton-m-background-color-hover, var(--cm-global-color-gray-50));
        border-color: var(--cm-actionbutton-m-border-color-hover, var(--cm-alias-border-color-hover));
        color: var(--cm-actionbutton-m-text-color-hover, var(--cm-alias-text-color-hover))
    }

    :host(:hover) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-icon-color-hover, var(--cm-alias-icon-color-hover))
    }

    :host(:hover) #hold-affordance {
        color: var(--cm-actionbutton-m-hold-icon-color-hover, var(--cm-alias-icon-color-hover))
    }

    :host(.focus-visible), :host(.focus-visible) {
        background-color: var(--cm-actionbutton-m-background-color-key-focus, var(--cm-global-color-gray-50));
        box-shadow: 0 0 0 var(--cm-actionbutton-m-quiet-border-size-key-focus, var(--cm-alias-border-size-thick)) var(--cm-actionbutton-m-border-color-key-focus, var(--cm-alias-border-color-focus));
        color: var(--cm-actionbutton-m-text-color-key-focus, var(--cm-alias-text-color-hover))
    }

    :host(.focus-visible), :host(:focus-visible) {
        background-color: var(--cm-actionbutton-m-background-color-key-focus, var(--cm-global-color-gray-50));
        box-shadow: 0 0 0 var(--cm-actionbutton-m-quiet-border-size-key-focus, var(--cm-alias-border-size-thick)) var(--cm-actionbutton-m-border-color-key-focus, var(--cm-alias-border-color-focus));
        color: var(--cm-actionbutton-m-text-color-key-focus, var(--cm-alias-text-color-hover))
    }

    :host(.focus-visible), :host(.focus-visible[active]), :host(.focus-visible), :host(.focus-visible[active]) {
        border-color: var(--cm-actionbutton-m-border-color-key-focus, var(--cm-alias-border-color-focus))
    }

    :host(.focus-visible), :host(.focus-visible[active]), :host(:focus-visible), :host(:focus-visible[active]) {
        border-color: var(--cm-actionbutton-m-border-color-key-focus, var(--cm-alias-border-color-focus))
    }

    :host(.focus-visible) ::slotted([slot=icon]), :host(.focus-visible) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-icon-color-key-focus, var(--cm-alias-icon-color-focus))
    }

    :host(.focus-visible) ::slotted([slot=icon]), :host(:focus-visible) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-icon-color-key-focus, var(--cm-alias-icon-color-focus))
    }

    :host(.focus-visible) #hold-affordance, :host(.focus-visible) #hold-affordance {
        color: var(--cm-actionbutton-m-hold-icon-color-key-focus, var(--cm-alias-icon-color-hover))
    }

    :host(.focus-visible) #hold-affordance, :host(:focus-visible) #hold-affordance {
        color: var(--cm-actionbutton-m-hold-icon-color-key-focus, var(--cm-alias-icon-color-hover))
    }

    :host([active]) {
        background-color: var(--cm-actionbutton-m-background-color-down, var(--cm-global-color-gray-200));
        border-color: var(--cm-actionbutton-m-border-color-down, var(--cm-alias-border-color-down));
        color: var(--cm-actionbutton-m-text-color-down, var(--cm-alias-text-color-down))
    }

    :host([active]) #hold-affordance {
        color: var(--cm-actionbutton-m-hold-icon-color-down, var(--cm-alias-icon-color-down))
    }

    :host(:disabled), :host([disabled]) {
        background-color: var(--cm-actionbutton-m-background-color-disabled, var(--cm-global-color-gray-200));
        border-color: var(--cm-actionbutton-m-border-color-disabled, var(--cm-alias-border-color-disabled));
        color: var(--cm-actionbutton-m-text-color-disabled, var(--cm-alias-text-color-disabled))
    }

    :host(:disabled) ::slotted([slot=icon]), :host([disabled]) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-icon-color-disabled, var(--cm-alias-icon-color-disabled))
    }

    :host(:disabled) #hold-affordance, :host([disabled]) #hold-affordance {
        color: var(--cm-actionbutton-m-hold-icon-color-disabled, var(--cm-alias-icon-color-disabled))
    }

    :host([selected]) {
        background-color: var(--cm-actionbutton-m-background-color-selected, var(--cm-global-color-gray-200));
        border-color: var(--cm-actionbutton-m-border-color-selected, var(--cm-alias-border-color));
        color: var(--cm-actionbutton-m-text-color-selected, var(--cm-alias-text-color))
    }

    :host([selected]) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-icon-color-selected, var(--cm-alias-icon-color))
    }

    :host([selected].focus-visible), :host([selected].focus-visible) {
        background-color: var(--cm-actionbutton-m-background-color-selected-key-focus, var(--cm-global-color-gray-200));
        border-color: var(--cm-actionbutton-m-border-color-selected-key-focus, var(--cm-alias-border-color-focus));
        color: var(--cm-actionbutton-m-text-color-selected-key-focus, var(--cm-alias-text-color-hover))
    }

    :host([selected].focus-visible), :host([selected]:focus-visible) {
        background-color: var(--cm-actionbutton-m-background-color-selected-key-focus, var(--cm-global-color-gray-200));
        border-color: var(--cm-actionbutton-m-border-color-selected-key-focus, var(--cm-alias-border-color-focus));
        color: var(--cm-actionbutton-m-text-color-selected-key-focus, var(--cm-alias-text-color-hover))
    }

    :host([selected].focus-visible[active]), :host([selected].focus-visible[active]) {
        border-color: var(--cm-actionbutton-m-border-color-key-focus, var(--cm-alias-border-color-focus))
    }

    :host([selected].focus-visible[active]), :host([selected]:focus-visible[active]) {
        border-color: var(--cm-actionbutton-m-border-color-key-focus, var(--cm-alias-border-color-focus))
    }

    :host([selected].focus-visible) ::slotted([slot=icon]), :host([selected].focus-visible) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-icon-color-selected-key-focus, var(--cm-alias-icon-color-hover))
    }

    :host([selected].focus-visible) ::slotted([slot=icon]), :host([selected]:focus-visible) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-icon-color-selected-key-focus, var(--cm-alias-icon-color-hover))
    }

    :host([selected]:hover) {
        background-color: var(--cm-actionbutton-m-background-color-selected-hover, var(--cm-global-color-gray-200));
        border-color: var(--cm-actionbutton-m-border-color-selected-hover, var(--cm-alias-border-color-hover));
        color: var(--cm-actionbutton-m-text-color-selected-hover, var(--cm-alias-text-color-hover))
    }

    :host([selected]:hover) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-icon-color-selected-hover, var(--cm-alias-icon-color-hover))
    }

    :host([selected][active]) {
        background-color: var(--cm-actionbutton-m-background-color-selected-down, var(--cm-global-color-gray-200));
        border-color: var(--cm-actionbutton-m-border-color-selected-down, var(--cm-alias-border-color-down));
        color: var(--cm-actionbutton-m-text-color-selected-down, var(--cm-alias-text-color-down))
    }

    :host([selected][active]) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-icon-color-selected-down, var(--cm-alias-icon-color-down))
    }

    :host([selected]:disabled), :host([selected][disabled]) {
        background-color: var(--cm-actionbutton-m-background-color-selected-disabled, var(--cm-global-color-gray-200));
        border-color: var(--cm-actionbutton-m-border-color-selected-disabled, var(--cm-alias-border-color-disabled));
        color: var(--cm-actionbutton-m-text-color-selected-disabled, var(--cm-alias-text-color-disabled))
    }

    :host([selected]:disabled) ::slotted([slot=icon]), :host([selected][disabled]) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-icon-color-selected-disabled, var(--cm-alias-icon-color-disabled))
    }

    :host([emphasized]) {
        background-color: var(--cm-actionbutton-m-emphasized-background-color, var(--cm-global-color-gray-75));
        border-color: var(--cm-actionbutton-m-emphasized-border-color, var(--cm-alias-border-color));
        color: var(--cm-actionbutton-m-emphasized-text-color, var(--cm-alias-text-color))
    }

    :host([emphasized]) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-emphasized-icon-color, var(--cm-alias-icon-color))
    }

    :host([emphasized]) #hold-affordance {
        color: var(--cm-actionbutton-m-emphasized-hold-icon-color, var(--cm-alias-icon-color))
    }

    :host([emphasized][selected]) #hold-affordance {
        color: var(--cm-actionbutton-m-emphasized-hold-icon-color-selected, var(--cm-global-color-static-white))
    }

    :host([emphasized][selected]:hover) #hold-affordance {
        color: var(--cm-actionbutton-m-emphasized-text-color-selected-hover, var(--cm-global-color-static-white))
    }

    :host([emphasized]:hover) {
        background-color: var(--cm-actionbutton-m-emphasized-background-color-hover, var(--cm-global-color-gray-50));
        border-color: var(--cm-actionbutton-m-emphasized-border-color-hover, var(--cm-alias-border-color-hover));
        box-shadow: none;
        color: var(--cm-actionbutton-m-emphasized-text-color-hover, var(--cm-alias-text-color-hover))
    }

    :host([emphasized]:hover) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-emphasized-icon-color-hover, var(--cm-alias-icon-color-hover))
    }

    :host([emphasized]:hover) #hold-affordance {
        color: var(--cm-actionbutton-m-emphasized-hold-icon-color-hover, var(--cm-alias-icon-color-hover))
    }

    :host([emphasized].focus-visible), :host([emphasized].focus-visible) {
        background-color: var(--cm-actionbutton-m-emphasized-background-color-key-focus, var(--cm-global-color-gray-50));
        border-color: var(--cm-actionbutton-m-emphasized-border-color-key-focus, var(--cm-alias-border-color-hover));
        box-shadow: 0 0 0 var(--cm-actionbutton-m-quiet-border-size-key-focus, var(--cm-alias-border-size-thick)) var(--cm-actionbutton-m-border-color-key-focus, var(--cm-alias-border-color-focus));
        color: var(--cm-actionbutton-m-emphasized-text-color-key-focus, var(--cm-alias-text-color-hover))
    }

    :host([emphasized].focus-visible), :host([emphasized]:focus-visible) {
        background-color: var(--cm-actionbutton-m-emphasized-background-color-key-focus, var(--cm-global-color-gray-50));
        border-color: var(--cm-actionbutton-m-emphasized-border-color-key-focus, var(--cm-alias-border-color-hover));
        box-shadow: 0 0 0 var(--cm-actionbutton-m-quiet-border-size-key-focus, var(--cm-alias-border-size-thick)) var(--cm-actionbutton-m-border-color-key-focus, var(--cm-alias-border-color-focus));
        color: var(--cm-actionbutton-m-emphasized-text-color-key-focus, var(--cm-alias-text-color-hover))
    }

    :host([emphasized].focus-visible) ::slotted([slot=icon]), :host([emphasized].focus-visible) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-emphasized-icon-color-key-focus, var(--cm-alias-icon-color-focus))
    }

    :host([emphasized].focus-visible) ::slotted([slot=icon]), :host([emphasized]:focus-visible) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-emphasized-icon-color-key-focus, var(--cm-alias-icon-color-focus))
    }

    :host([emphasized].focus-visible) #hold-affordance, :host([emphasized].focus-visible) #hold-affordance {
        color: var(--cm-actionbutton-m-emphasized-hold-icon-color-key-focus, var(--cm-alias-icon-color-hover))
    }

    :host([emphasized].focus-visible) #hold-affordance, :host([emphasized]:focus-visible) #hold-affordance {
        color: var(--cm-actionbutton-m-emphasized-hold-icon-color-key-focus, var(--cm-alias-icon-color-hover))
    }

    :host([emphasized][active]) {
        background-color: var(--cm-actionbutton-m-emphasized-background-color-down, var(--cm-global-color-gray-200));
        border-color: var(--cm-actionbutton-m-emphasized-border-color-down, var(--cm-alias-border-color-down));
        box-shadow: none;
        color: var(--cm-actionbutton-m-emphasized-text-color-down, var(--cm-alias-text-color-down))
    }

    :host([emphasized][active]) #hold-affordance {
        color: var(--cm-actionbutton-m-emphasized-hold-icon-color-down, var(--cm-alias-icon-color-down))
    }

    :host([emphasized]:disabled), :host([emphasized][disabled]) {
        background-color: var(--cm-actionbutton-m-emphasized-background-color-disabled, var(--cm-global-color-gray-200));
        border-color: var(--cm-actionbutton-m-emphasized-border-color-disabled, var(--cm-alias-border-color-disabled));
        color: var(--cm-actionbutton-m-emphasized-text-color-disabled, var(--cm-alias-text-color-disabled))
    }

    :host([emphasized]:disabled) ::slotted([slot=icon]), :host([emphasized][disabled]) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-emphasized-icon-color-disabled, var(--cm-alias-icon-color-disabled))
    }

    :host([emphasized]:disabled) #hold-affordance, :host([emphasized][disabled]) #hold-affordance {
        color: var(--cm-actionbutton-m-emphasized-hold-icon-color-disabled, var(--cm-alias-icon-color-disabled))
    }

    :host([emphasized][quiet][selected]), :host([emphasized][selected]) {
        background-color: var(--cm-actionbutton-m-emphasized-background-color-selected, var(--cm-semantic-cta-color-background-default));
        border-color: var(--cm-actionbutton-m-emphasized-border-color-selected, var(--cm-semantic-cta-color-background-default));
        color: var(--cm-actionbutton-m-emphasized-text-color-selected, var(--cm-global-color-static-white))
    }

    :host([emphasized][quiet][selected]) ::slotted([slot=icon]), :host([emphasized][selected]) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-emphasized-icon-color-selected, var(--cm-global-color-static-white))
    }

    :host([emphasized][quiet][selected].focus-visible), :host([emphasized][quiet][selected].focus-visible), :host([emphasized][selected].focus-visible), :host([emphasized][selected].focus-visible) {
        background-color: var(--cm-actionbutton-m-emphasized-background-color-selected-key-focus, var(--cm-semantic-cta-color-background-key-focus));
        border-color: var(--cm-actionbutton-m-emphasized-border-color-selected-key-focus, var(--cm-semantic-cta-color-background-key-focus));
        color: var(--cm-actionbutton-m-emphasized-text-color-selected-key-focus, var(--cm-global-color-static-white))
    }

    :host([emphasized][quiet][selected].focus-visible), :host([emphasized][quiet][selected]:focus-visible), :host([emphasized][selected].focus-visible), :host([emphasized][selected]:focus-visible) {
        background-color: var(--cm-actionbutton-m-emphasized-background-color-selected-key-focus, var(--cm-semantic-cta-color-background-key-focus));
        border-color: var(--cm-actionbutton-m-emphasized-border-color-selected-key-focus, var(--cm-semantic-cta-color-background-key-focus));
        color: var(--cm-actionbutton-m-emphasized-text-color-selected-key-focus, var(--cm-global-color-static-white))
    }

    :host([emphasized][quiet][selected].focus-visible) ::slotted([slot=icon]), :host([emphasized][quiet][selected].focus-visible) ::slotted([slot=icon]), :host([emphasized][selected].focus-visible) ::slotted([slot=icon]), :host([emphasized][selected].focus-visible) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-emphasized-icon-color-selected-key-focus, var(--cm-global-color-static-white))
    }

    :host([emphasized][quiet][selected].focus-visible) ::slotted([slot=icon]), :host([emphasized][quiet][selected]:focus-visible) ::slotted([slot=icon]), :host([emphasized][selected].focus-visible) ::slotted([slot=icon]), :host([emphasized][selected]:focus-visible) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-emphasized-icon-color-selected-key-focus, var(--cm-global-color-static-white))
    }

    :host([emphasized][quiet][selected]:hover), :host([emphasized][selected]:hover) {
        background-color: var(--cm-actionbutton-m-emphasized-background-color-selected-hover, var(--cm-semantic-cta-color-background-hover));
        border-color: var(--cm-actionbutton-m-emphasized-border-color-selected-hover, var(--cm-semantic-cta-color-background-hover));
        color: var(--cm-actionbutton-m-emphasized-text-color-selected-hover, var(--cm-global-color-static-white))
    }

    :host([emphasized][quiet][selected]:hover) ::slotted([slot=icon]), :host([emphasized][selected]:hover) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-emphasized-icon-color-selected-hover, var(--cm-global-color-static-white))
    }

    :host([emphasized][quiet][selected][active]), :host([emphasized][selected][active]) {
        background-color: var(--cm-actionbutton-m-emphasized-background-color-selected-down, var(--cm-semantic-cta-color-background-down));
        border-color: var(--cm-actionbutton-m-emphasized-border-color-selected-down, var(--cm-semantic-cta-color-background-down));
        color: var(--cm-actionbutton-m-emphasized-text-color-selected-down, var(--cm-global-color-static-white))
    }

    :host([emphasized][quiet][selected][active]) ::slotted([slot=icon]), :host([emphasized][selected][active]) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-emphasized-icon-color-selected-down, var(--cm-global-color-static-white))
    }

    :host([emphasized][quiet][selected]:disabled), :host([emphasized][quiet][selected][disabled]), :host([emphasized][selected]:disabled), :host([emphasized][selected][disabled]) {
        background-color: var(--cm-actionbutton-m-emphasized-background-color-selected-disabled, var(--cm-global-color-gray-200));
        border-color: var(--cm-actionbutton-m-emphasized-border-color-selected-disabled, var(--cm-alias-border-color-disabled));
        color: var(--cm-actionbutton-m-emphasized-text-color-selected-disabled, var(--cm-alias-text-color-disabled))
    }

    :host([emphasized][quiet][selected]:disabled) ::slotted([slot=icon]), :host([emphasized][quiet][selected][disabled]) ::slotted([slot=icon]), :host([emphasized][selected]:disabled) ::slotted([slot=icon]), :host([emphasized][selected][disabled]) ::slotted([slot=icon]) {
        color: var(--cm-actionbutton-m-emphasized-icon-color-selected-disabled, var(--cm-alias-icon-color-disabled))
    }

    :host([quiet]) {
        background-color: var(--cm-actionbutton-m-quiet-background-color, var(--cm-alias-background-color-transparent));
        border-color: var(--cm-actionbutton-m-quiet-border-color, var(--cm-alias-border-color-transparent));
        color: var(--cm-actionbutton-m-quiet-text-color, var(--cm-alias-text-color))
    }

    :host([quiet]:hover) {
        background-color: var(--cm-actionbutton-m-quiet-background-color-hover, var(--cm-alias-background-color-transparent));
        border-color: var(--cm-actionbutton-m-quiet-border-color-hover, var(--cm-alias-border-color-transparent));
        color: var(--cm-actionbutton-m-quiet-text-color-hover, var(--cm-alias-text-color-hover))
    }

    :host([quiet].focus-visible), :host([quiet].focus-visible) {
        background-color: var(--cm-actionbutton-m-quiet-background-color-key-focus, var(--cm-alias-background-color-transparent));
        box-shadow: 0 0 0 var(--cm-actionbutton-m-quiet-border-size-key-focus, var(--cm-alias-border-size-thick)) var(--cm-actionbutton-m-quiet-border-color-key-focus, var(--cm-alias-border-color-focus));
        border-color: var(--cm-actionbutton-m-quiet-border-color-key-focus, var(--cm-alias-border-color-focus));
        color: var(--cm-actionbutton-m-quiet-text-color-key-focus, var(--cm-alias-text-color-hover))
    }

    :host([quiet].focus-visible), :host([quiet]:focus-visible) {
        background-color: var(--cm-actionbutton-m-quiet-background-color-key-focus, var(--cm-alias-background-color-transparent));
        box-shadow: 0 0 0 var(--cm-actionbutton-m-quiet-border-size-key-focus, var(--cm-alias-border-size-thick)) var(--cm-actionbutton-m-quiet-border-color-key-focus, var(--cm-alias-border-color-focus));
        border-color: var(--cm-actionbutton-m-quiet-border-color-key-focus, var(--cm-alias-border-color-focus));
        color: var(--cm-actionbutton-m-quiet-text-color-key-focus, var(--cm-alias-text-color-hover))
    }

    :host([quiet][active]) {
        background-color: var(--cm-actionbutton-m-quiet-background-color-down, var(--cm-global-color-gray-300));
        border-color: var(--cm-actionbutton-m-quiet-border-color-down, var(--cm-alias-border-color-transparent));
        color: var(--cm-actionbutton-m-quiet-text-color-down, var(--cm-alias-text-color-down))
    }

    :host([quiet]:disabled), :host([quiet][disabled]) {
        background-color: var(--cm-actionbutton-m-quiet-background-color-disabled, var(--cm-alias-background-color-transparent));
        border-color: var(--cm-actionbutton-m-quiet-border-color-disabled, var(--cm-alias-border-color-transparent));
        color: var(--cm-actionbutton-m-quiet-text-color-disabled, var(--cm-alias-text-color-disabled))
    }

    :host([quiet][selected]) {
        background-color: var(--cm-actionbutton-m-quiet-background-color-selected, var(--cm-global-color-gray-200));
        border-color: var(--cm-actionbutton-m-quiet-border-color-selected, var(--cm-alias-border-color-transparent));
        color: var(--cm-actionbutton-m-quiet-text-color-selected, var(--cm-alias-text-color))
    }

    :host([quiet][selected].focus-visible), :host([quiet][selected].focus-visible) {
        background-color: var(--cm-actionbutton-m-quiet-background-color-selected-key-focus, var(--cm-global-color-gray-200));
        border-color: var(--cm-actionbutton-m-quiet-border-color-selected-key-focus, var(--cm-alias-border-color-transparent));
        color: var(--cm-actionbutton-m-quiet-text-color-selected-key-focus, var(--cm-alias-text-color-hover))
    }

    :host([quiet][selected].focus-visible), :host([quiet][selected]:focus-visible) {
        background-color: var(--cm-actionbutton-m-quiet-background-color-selected-key-focus, var(--cm-global-color-gray-200));
        border-color: var(--cm-actionbutton-m-quiet-border-color-selected-key-focus, var(--cm-alias-border-color-transparent));
        color: var(--cm-actionbutton-m-quiet-text-color-selected-key-focus, var(--cm-alias-text-color-hover))
    }

    :host([quiet][selected]:hover) {
        background-color: var(--cm-actionbutton-m-quiet-background-color-selected-hover, var(--cm-global-color-gray-200));
        border-color: var(--cm-actionbutton-m-quiet-border-color-selected-hover, var(--cm-alias-border-color-transparent));
        color: var(--cm-actionbutton-m-quiet-text-color-selected-hover, var(--cm-alias-text-color-hover))
    }

    :host([quiet][selected][active]) {
        background-color: var(--cm-actionbutton-m-quiet-background-color-selected-down, var(--cm-global-color-gray-200));
        border-color: var(--cm-actionbutton-m-quiet-border-color-selected-down, var(--cm-alias-border-color-transparent));
        color: var(--cm-actionbutton-m-quiet-text-color-selected-down, var(--cm-alias-text-color-down))
    }

    :host([quiet][selected]:disabled), :host([quiet][selected][disabled]) {
        background-color: var(--cm-actionbutton-m-quiet-background-color-selected-disabled, var(--cm-global-color-gray-200));
        border-color: var(--cm-actionbutton-m-quiet-border-color-selected-disabled, var(--cm-alias-border-color-transparent));
        color: var(--cm-actionbutton-m-quiet-text-color-selected-disabled, var(--cm-alias-text-color-disabled))
    }

    @media (forced-colors: active) {
        :host {
            forced-color-adjust: none;
            --cm-actionbutton-m-background-color: ButtonFace;
            --cm-actionbutton-m-background-color-disabled: ButtonFace;
            --cm-actionbutton-m-background-color-down: ButtonFace;
            --cm-actionbutton-m-background-color-hover: ButtonFace;
            --cm-actionbutton-m-background-color-key-focus: ButtonFace;
            --cm-actionbutton-m-background-color-selected: Highlight;
            --cm-actionbutton-m-background-color-selected-disabled: ButtonFace;
            --cm-actionbutton-m-background-color-selected-down: Highlight;
            --cm-actionbutton-m-background-color-selected-hover: Highlight;
            --cm-actionbutton-m-background-color-selected-key-focus: Highlight;
            --cm-actionbutton-m-border-color: ButtonText;
            --cm-actionbutton-m-border-color-disabled: GrayText;
            --cm-actionbutton-m-border-color-down: Highlight;
            --cm-actionbutton-m-border-color-hover: Highlight;
            --cm-actionbutton-m-border-color-key-focus: ButtonText;
            --cm-actionbutton-m-border-color-selected: HighlightText;
            --cm-actionbutton-m-border-color-selected-disabled: GrayText;
            --cm-actionbutton-m-border-color-selected-down: HighlightText;
            --cm-actionbutton-m-border-color-selected-hover: HighlightText;
            --cm-actionbutton-m-border-color-selected-key-focus: ButtonText;
            --cm-actionbutton-m-emphasized-background-color: ButtonFace;
            --cm-actionbutton-m-emphasized-background-color-disabled: ButtonFace;
            --cm-actionbutton-m-emphasized-background-color-down: Highlight;
            --cm-actionbutton-m-emphasized-background-color-hover: Highlight;
            --cm-actionbutton-m-emphasized-background-color-key-focus: ButtonFace;
            --cm-actionbutton-m-emphasized-background-color-selected: Highlight;
            --cm-actionbutton-m-emphasized-background-color-selected-disabled: ButtonFace;
            --cm-actionbutton-m-emphasized-background-color-selected-down: Highlight;
            --cm-actionbutton-m-emphasized-background-color-selected-hover: Highlight;
            --cm-actionbutton-m-emphasized-background-color-selected-key-focus: Highlight;
            --cm-actionbutton-m-emphasized-border-color: ButtonText;
            --cm-actionbutton-m-emphasized-border-color-disabled: GrayText;
            --cm-actionbutton-m-emphasized-border-color-down: HighlightText;
            --cm-actionbutton-m-emphasized-border-color-hover: HighlightText;
            --cm-actionbutton-m-emphasized-border-color-key-focus: ButtonText;
            --cm-actionbutton-m-emphasized-border-color-selected: HighlightText;
            --cm-actionbutton-m-emphasized-border-color-selected-disabled: GrayText;
            --cm-actionbutton-m-emphasized-border-color-selected-down: HighlightText;
            --cm-actionbutton-m-emphasized-border-color-selected-hover: HighlightText;
            --cm-actionbutton-m-emphasized-border-color-selected-key-focus: ButtonText;
            --cm-actionbutton-m-emphasized-text-color: ButtonText;
            --cm-actionbutton-m-emphasized-text-color-disabled: GrayText;
            --cm-actionbutton-m-emphasized-text-color-down: HighlightText;
            --cm-actionbutton-m-emphasized-text-color-hover: HighlightText;
            --cm-actionbutton-m-emphasized-text-color-key-focus: ButtonText;
            --cm-actionbutton-m-emphasized-text-color-selected: HighlightText;
            --cm-actionbutton-m-emphasized-text-color-selected-disabled: GrayText;
            --cm-actionbutton-m-emphasized-text-color-selected-down: HighlightText;
            --cm-actionbutton-m-emphasized-text-color-selected-hover: HighlightText;
            --cm-actionbutton-m-emphasized-text-color-selected-key-focus: HighlightText;
            --cm-actionbutton-m-quiet-background-color: ButtonFace;
            --cm-actionbutton-m-quiet-background-color-disabled: ButtonFace;
            --cm-actionbutton-m-quiet-background-color-down: ButtonFace;
            --cm-actionbutton-m-quiet-background-color-hover: ButtonFace;
            --cm-actionbutton-m-quiet-background-color-key-focus: ButtonFace;
            --cm-actionbutton-m-quiet-background-color-selected: Highlight;
            --cm-actionbutton-m-quiet-background-color-selected-disabled: ButtonFace;
            --cm-actionbutton-m-quiet-background-color-selected-down: Highlight;
            --cm-actionbutton-m-quiet-background-color-selected-hover: Highlight;
            --cm-actionbutton-m-quiet-background-color-selected-key-focus: Highlight;
            --cm-actionbutton-m-quiet-border-color: ButtonFace;
            --cm-actionbutton-m-quiet-border-color-disabled: ButtonFace;
            --cm-actionbutton-m-quiet-border-color-down: Highlight;
            --cm-actionbutton-m-quiet-border-color-hover: Highlight;
            --cm-actionbutton-m-quiet-border-color-key-focus: ButtonText;
            --cm-actionbutton-m-quiet-border-color-selected: ButtonFace;
            --cm-actionbutton-m-quiet-border-color-selected-disabled: ButtonFace;
            --cm-actionbutton-m-quiet-border-color-selected-down: ButtonFace;
            --cm-actionbutton-m-quiet-border-color-selected-hover: ButtonFace;
            --cm-actionbutton-m-quiet-border-color-selected-key-focus: ButtonText;
            --cm-actionbutton-m-quiet-text-color: ButtonText;
            --cm-actionbutton-m-quiet-text-color-disabled: GrayText;
            --cm-actionbutton-m-quiet-text-color-down: ButtonText;
            --cm-actionbutton-m-quiet-text-color-hover: ButtonText;
            --cm-actionbutton-m-quiet-text-color-key-focus: ButtonText;
            --cm-actionbutton-m-quiet-text-color-selected: HighlightText;
            --cm-actionbutton-m-quiet-text-color-selected-disabled: GrayText;
            --cm-actionbutton-m-quiet-text-color-selected-down: HighlightText;
            --cm-actionbutton-m-quiet-text-color-selected-hover: HighlightText;
            --cm-actionbutton-m-quiet-text-color-selected-key-focus: HighlightText;
            --cm-actionbutton-m-text-color: ButtonText;
            --cm-actionbutton-m-text-color-disabled: GrayText;
            --cm-actionbutton-m-text-color-down: ButtonText;
            --cm-actionbutton-m-text-color-hover: ButtonText;
            --cm-actionbutton-m-text-color-key-focus: ButtonText;
            --cm-actionbutton-m-text-color-selected: HighlightText;
            --cm-actionbutton-m-text-color-selected-disabled: GrayText;
            --cm-actionbutton-m-text-color-selected-down: HighlightText;
            --cm-actionbutton-m-text-color-selected-hover: HighlightText;
            --cm-actionbutton-m-text-color-selected-key-focus: HighlightText;
            --cm-actionbutton-m-quiet-border-size-key-focus: 3px
        }

        :host([quiet][emphasized]:not(:disabled,[disabled]):hover) {
            background-color: var(--cm-actionbutton-m-emphasized-background-color-selected-hover, var(--cm-semantic-cta-color-background-hover));
            border-color: var(--cm-actionbutton-m-emphasized-border-color-selected-hover, var(--cm-semantic-cta-color-background-hover));
            color: var(--cm-actionbutton-m-emphasized-text-color-selected-hover, var(--cm-global-color-static-white))
        }

        :host([quiet][emphasized]:not(:disabled,[disabled])[active]) {
            background-color: var(--cm-actionbutton-m-emphasized-background-color-selected-down, var(--cm-semantic-cta-color-background-down));
            border-color: var(--cm-actionbutton-m-emphasized-border-color-selected-down, var(--cm-semantic-cta-color-background-down));
            color: var(--cm-actionbutton-m-emphasized-text-color-selected-down, var(--cm-global-color-static-white))
        }
    }
`;
export default styles;
//# sourceMappingURL=spectrum-action-button.css.js.map