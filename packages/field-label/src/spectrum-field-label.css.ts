import { css } from '../../base/src/index';

const styles = css`
    :host([size=s]) {
        --cm-fieldlabel-text-font-weight: var(--cm-fieldlabel-s-text-font-weight, var(--cm-alias-body-text-font-weight));
        --cm-fieldlabel-text-line-height: var(--cm-fieldlabel-s-text-line-height, var(--cm-alias-component-text-line-height));
        --cm-fieldlabel-text-size: var(--cm-fieldlabel-s-text-size, var(--cm-global-dimension-font-size-75));
        --cm-fieldlabel-asterisk-gap: var(--cm-fieldlabel-s-asterisk-gap, var(--cm-global-dimension-size-25));
        --cm-fieldlabel-asterisk-margin-y: var(--cm-fieldlabel-s-asterisk-margin-y, var(--cm-global-dimension-size-50));
        --cm-fieldlabel-padding-top: var(--cm-fieldlabel-s-padding-top, var(--cm-global-dimension-size-50));
        --cm-fieldlabel-padding-bottom: var(--cm-fieldlabel-s-padding-bottom, var(--cm-global-dimension-size-65))
    }

    :host([size=m]) {
        --cm-fieldlabel-text-font-weight: var(--cm-fieldlabel-m-text-font-weight, var(--cm-alias-body-text-font-weight));
        --cm-fieldlabel-text-line-height: var(--cm-fieldlabel-m-text-line-height, var(--cm-alias-component-text-line-height));
        --cm-fieldlabel-text-size: var(--cm-fieldlabel-m-text-size, var(--cm-global-dimension-font-size-75));
        --cm-fieldlabel-asterisk-gap: var(--cm-fieldlabel-m-asterisk-gap, var(--cm-global-dimension-size-25));
        --cm-fieldlabel-asterisk-margin-y: var(--cm-fieldlabel-m-asterisk-margin-y, var(--cm-global-dimension-size-50));
        --cm-fieldlabel-padding-top: var(--cm-fieldlabel-m-padding-top, var(--cm-global-dimension-size-50));
        --cm-fieldlabel-padding-bottom: var(--cm-fieldlabel-m-padding-bottom, var(--cm-global-dimension-size-65))
    }

    :host([size=l]) {
        --cm-fieldlabel-text-font-weight: var(--cm-fieldlabel-l-text-font-weight, var(--cm-alias-body-text-font-weight));
        --cm-fieldlabel-text-line-height: var(--cm-fieldlabel-l-text-line-height, var(--cm-alias-component-text-line-height));
        --cm-fieldlabel-text-size: var(--cm-fieldlabel-l-text-size, var(--cm-global-dimension-font-size-100));
        --cm-fieldlabel-asterisk-gap: var(--cm-fieldlabel-l-asterisk-gap, var(--cm-global-dimension-size-25));
        --cm-fieldlabel-asterisk-margin-y: var(--cm-fieldlabel-l-asterisk-margin-y, var(--cm-global-dimension-size-50));
        --cm-fieldlabel-padding-top: var(--cm-fieldlabel-l-padding-top, var(--cm-global-dimension-size-75));
        --cm-fieldlabel-padding-bottom: var(--cm-fieldlabel-l-padding-bottom, var(--cm-global-dimension-size-115))
    }

    :host([size=xl]) {
        --cm-fieldlabel-text-font-weight: var(--cm-fieldlabel-xl-text-font-weight, var(--cm-alias-body-text-font-weight));
        --cm-fieldlabel-text-line-height: var(--cm-fieldlabel-xl-text-line-height, var(--cm-alias-component-text-line-height));
        --cm-fieldlabel-text-size: var(--cm-fieldlabel-xl-text-size, var(--cm-global-dimension-font-size-200));
        --cm-fieldlabel-asterisk-gap: var(--cm-fieldlabel-xl-asterisk-gap, var(--cm-global-dimension-size-25));
        --cm-fieldlabel-asterisk-margin-y: var(--cm-fieldlabel-xl-asterisk-margin-y, var(--cm-global-dimension-size-50));
        --cm-fieldlabel-padding-top: var(--cm-fieldlabel-xl-padding-top, var(--cm-global-dimension-size-115));
        --cm-fieldlabel-padding-bottom: var(--cm-fieldlabel-xl-padding-bottom, var(--cm-global-dimension-size-130))
    }

    :host {
        display: block;
        box-sizing: border-box;
        padding-top: var(--cm-fieldlabel-padding-top);
        padding-bottom: var(--cm-fieldlabel-padding-bottom);
        padding-left: 0;
        padding-right: 0;
        font-size: var(--cm-fieldlabel-text-size);
        font-weight: var(--cm-fieldlabel-text-font-weight);
        line-height: 1;
        vertical-align: top;
        -webkit-font-smoothing: subpixel-antialiased;
        -moz-osx-font-smoothing: auto;
        font-smoothing: subpixel-antialiased
    }

    :host([dir=ltr]) .requiredIcon {
        margin-left: var(--cm-fieldlabel-asterisk-gap);
        margin-right: 0
    }

    :host([dir=rtl]) .requiredIcon {
        margin-right: var(--cm-fieldlabel-asterisk-gap);
        margin-left: 0
    }

    .requiredIcon {
        margin-top: var(--cm-fieldlabel-asterisk-margin-y);
        margin-bottom: 0
    }

    :host([dir=ltr][side-aligned=start]) {
        padding-left: 0;
        padding-right: var(--cm-fieldlabel-side-m-padding-right, var(--cm-global-dimension-size-150))
    }

    :host([dir=rtl][side-aligned=start]) {
        padding-right: 0;
        padding-left: var(--cm-fieldlabel-side-m-padding-right, var(--cm-global-dimension-size-150))
    }

    :host([side-aligned=start]) {
        display: inline-block;
        padding-top: var(--cm-fieldlabel-side-m-padding-top, var(--cm-global-dimension-size-100));
        padding-bottom: 0
    }

    :host([dir=ltr][side-aligned=start]) .requiredIcon {
        margin-left: var(--cm-fieldlabel-asterisk-gap);
        margin-right: 0
    }

    :host([dir=rtl][side-aligned=start]) .requiredIcon {
        margin-right: var(--cm-fieldlabel-asterisk-gap);
        margin-left: 0
    }

    :host([side-aligned=start]) .requiredIcon {
        margin-top: var(--cm-fieldlabel-side-m-asterisk-margin-y, var(--cm-global-dimension-size-50));
        margin-bottom: 0
    }

    :host([dir=ltr][side-aligned=end]) {
        text-align: right
    }

    :host([dir=rtl][side-aligned=end]) {
        text-align: left
    }

    :host([dir=ltr][side-aligned=end]) {
        padding-left: 0;
        padding-right: var(--cm-fieldlabel-side-m-padding-right, var(--cm-global-dimension-size-150))
    }

    :host([dir=rtl][side-aligned=end]) {
        padding-right: 0;
        padding-left: var(--cm-fieldlabel-side-m-padding-right, var(--cm-global-dimension-size-150))
    }

    :host([side-aligned=end]) {
        display: inline-block;
        padding-top: var(--cm-fieldlabel-side-m-padding-top, var(--cm-global-dimension-size-100));
        padding-bottom: 0
    }

    :host {
        color: var(--cm-fieldlabel-m-text-color, var(--cm-alias-label-text-color))
    }

    :host([disabled]) {
        color: var(--cm-fieldlabel-m-text-color-disabled, var(--cm-alias-text-color-disabled))
    }

    :host([disabled]) .requiredIcon {
        color: var(--cm-fieldlabel-m-asterisk-color-disabled, var(--cm-alias-text-color-disabled))
    }

    .requiredIcon {
        color: var(--cm-fieldlabel-m-asterisk-color, var(--cm-global-color-gray-600))
    }
`;
export default styles;