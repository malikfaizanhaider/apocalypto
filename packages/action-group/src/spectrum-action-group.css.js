import { css } from '../../base/src/index';
const styles = css `
    :host {
        --cm-actiongroup-button-gap-reset: 0;
        --cm-actiongroup-quiet-compact-button-gap: var(
            --cm-global-dimension-size-25
        );
        display: flex;
        flex-wrap: wrap;
    }
    ::slotted(*) {
        flex-shrink: 0;
    }
    :host(:not([vertical]):not([compact])) {
        margin-top: calc(
            -1 * var(--cm-actiongroup-button-gap-y, var(--cm-global-dimension-size-100))
        );
    }
    :host(:not([vertical]):not([compact])) ::slotted(*) {
        flex-shrink: 0;
        margin-top: var(
            --cm-actiongroup-button-gap-y,
            var(--cm-global-dimension-size-100)
        );
    }
    :host([dir='ltr']:not([vertical]):not([compact]))
        ::slotted(:not(:last-child)) {
        margin-right: var(
            --cm-actiongroup-button-gap-x,
            var(--cm-global-dimension-size-100)
        );
    }
    :host([dir='rtl']:not([vertical]):not([compact]))
        ::slotted(:not(:last-child)) {
        margin-left: var(
            --cm-actiongroup-button-gap-x,
            var(--cm-global-dimension-size-100)
        );
    }
    :host([vertical]) {
        display: inline-flex;
        flex-direction: column;
    }
    :host([dir='ltr'][vertical]) ::slotted(:not(:first-child)) {
        margin-left: var(--cm-actiongroup-button-gap-reset);
    }
    :host([dir='rtl'][vertical]) ::slotted(:not(:first-child)) {
        margin-right: var(--cm-actiongroup-button-gap-reset);
    }
    :host([vertical]) ::slotted(:not(:first-child)) {
        margin-top: var(
            --cm-actiongroup-button-gap-y,
            var(--cm-global-dimension-size-100)
        );
    }
    :host([dir='ltr'][vertical][vertical]) {
        margin-left: var(--cm-actiongroup-button-gap-reset);
    }
    :host([dir='rtl'][vertical][vertical]) {
        margin-right: var(--cm-actiongroup-button-gap-reset);
    }
    :host([vertical][vertical]) {
        margin-top: var(
            --cm-actiongroup-button-gap-y,
            var(--cm-global-dimension-size-100)
        );
    }
    :host([dir='ltr'][compact][quiet]) ::slotted(:not(:first-child)) {
        margin-left: var(--cm-actiongroup-quiet-compact-button-gap);
    }
    :host([dir='rtl'][compact][quiet]) ::slotted(:not(:first-child)) {
        margin-right: var(--cm-actiongroup-quiet-compact-button-gap);
    }
    :host([compact][quiet]) ::slotted(:not(:first-child)) {
        margin-top: var(--cm-actiongroup-button-gap-reset);
    }
    :host([dir='ltr'][compact][quiet][vertical]) ::slotted(:not(:first-child)) {
        margin-left: var(--cm-actiongroup-button-gap-reset);
    }
    :host([dir='rtl'][compact][quiet][vertical]) ::slotted(:not(:first-child)) {
        margin-right: var(--cm-actiongroup-button-gap-reset);
    }
    :host([compact][quiet][vertical]) ::slotted(:not(:first-child)) {
        margin-top: var(--cm-actiongroup-quiet-compact-button-gap);
    }
    :host([compact]:not([quiet])) {
        flex-wrap: nowrap;
    }
    :host([compact]:not([quiet])) ::slotted(*) {
        position: relative;
        border-radius: 0;
        z-index: 0;
    }
    :host([dir='ltr'][compact]:not([quiet])) ::slotted(:first-child) {
        border-top-left-radius: var(
            --cm-actionbutton-m-border-radius,
            var(--cm-alias-border-radius-regular)
        );
    }
    :host([dir='rtl'][compact]:not([quiet])) ::slotted(:first-child) {
        border-top-right-radius: var(
            --cm-actionbutton-m-border-radius,
            var(--cm-alias-border-radius-regular)
        );
    }
    :host([dir='ltr'][compact]:not([quiet])) ::slotted(:first-child) {
        border-bottom-left-radius: var(
            --cm-actionbutton-m-border-radius,
            var(--cm-alias-border-radius-regular)
        );
    }
    :host([dir='rtl'][compact]:not([quiet])) ::slotted(:first-child) {
        border-bottom-right-radius: var(
            --cm-actionbutton-m-border-radius,
            var(--cm-alias-border-radius-regular)
        );
    }
    :host([dir='ltr'][compact]:not([quiet])) ::slotted(:first-child) {
        margin-right: calc(
            -1 * var(
                    --cm-actionbutton-m-border-size,
                    var(--cm-alias-border-size-thin)
                ) / 2
        );
    }
    :host([dir='rtl'][compact]:not([quiet])) ::slotted(:first-child) {
        margin-left: calc(
            -1 * var(
                    --cm-actionbutton-m-border-size,
                    var(--cm-alias-border-size-thin)
                ) / 2
        );
    }
    :host([dir='ltr'][compact]:not([quiet])) ::slotted(:last-child) {
        border-top-right-radius: var(
            --cm-actionbutton-m-border-radius,
            var(--cm-alias-border-radius-regular)
        );
    }
    :host([dir='rtl'][compact]:not([quiet])) ::slotted(:last-child) {
        border-top-left-radius: var(
            --cm-actionbutton-m-border-radius,
            var(--cm-alias-border-radius-regular)
        );
    }
    :host([dir='ltr'][compact]:not([quiet])) ::slotted(:last-child) {
        border-bottom-right-radius: var(
            --cm-actionbutton-m-border-radius,
            var(--cm-alias-border-radius-regular)
        );
    }
    :host([dir='rtl'][compact]:not([quiet])) ::slotted(:last-child) {
        border-bottom-left-radius: var(
            --cm-actionbutton-m-border-radius,
            var(--cm-alias-border-radius-regular)
        );
    }
    :host([dir='ltr'][compact]:not([quiet])) ::slotted(:last-child) {
        margin-left: calc(
            -1 * var(
                    --cm-actionbutton-m-border-size,
                    var(--cm-alias-border-size-thin)
                ) / 2
        );
    }
    :host([dir='rtl'][compact]:not([quiet])) ::slotted(:last-child) {
        margin-right: calc(
            -1 * var(
                    --cm-actionbutton-m-border-size,
                    var(--cm-alias-border-size-thin)
                ) / 2
        );
    }
    :host([dir='ltr'][compact]:not([quiet])) ::slotted(:last-child) {
        margin-right: 0;
    }
    :host([dir='rtl'][compact]:not([quiet])) ::slotted(:last-child) {
        margin-left: 0;
    }
    :host([compact]:not([quiet])) ::slotted([selected]) {
        z-index: 1;
    }
    :host([compact]:not([quiet])) ::slotted(:hover) {
        z-index: 2;
    }
    :host([compact]:not([quiet])) ::slotted(.focus-visible) {
        z-index: 3;
    }
    :host([compact]:not([quiet])) ::slotted(.focus-visible) {
        z-index: 3;
    }
    :host([compact]:not([quiet])) ::slotted(:focus-visible) {
        z-index: 3;
    }
    :host([dir='ltr'][compact]:not([quiet])) ::slotted(:not(:first-child)) {
        margin-left: calc(
            -1 * var(
                    --cm-actionbutton-m-border-size,
                    var(--cm-alias-border-size-thin)
                ) / 2
        );
    }
    :host([dir='rtl'][compact]:not([quiet])) ::slotted(:not(:first-child)) {
        margin-right: calc(
            -1 * var(
                    --cm-actionbutton-m-border-size,
                    var(--cm-alias-border-size-thin)
                ) / 2
        );
    }
    :host([dir='ltr'][compact]:not([quiet])) ::slotted(:not(:first-child)) {
        margin-right: calc(
            -1 * var(
                    --cm-actionbutton-m-border-size,
                    var(--cm-alias-border-size-thin)
                ) / 2
        );
    }
    :host([dir='rtl'][compact]:not([quiet])) ::slotted(:not(:first-child)) {
        margin-left: calc(
            -1 * var(
                    --cm-actionbutton-m-border-size,
                    var(--cm-alias-border-size-thin)
                ) / 2
        );
    }
    :host([compact][vertical]:not([quiet])) ::slotted(*) {
        border-radius: 0;
    }
    :host([compact][vertical]:not([quiet])) ::slotted(:not(:first-child)) {
        margin-top: calc(
            -1 * var(
                    --cm-actionbutton-m-border-size,
                    var(--cm-alias-border-size-thin)
                ) / 2
        );
        margin-bottom: calc(
            -1 * var(
                    --cm-actionbutton-m-border-size,
                    var(--cm-alias-border-size-thin)
                ) / 2
        );
    }
    :host([dir='ltr'][compact][vertical]:not([quiet])) ::slotted(:first-child) {
        border-top-left-radius: var(
            --cm-actionbutton-m-border-radius,
            var(--cm-alias-border-radius-regular)
        );
    }
    :host([dir='rtl'][compact][vertical]:not([quiet])) ::slotted(:first-child) {
        border-top-right-radius: var(
            --cm-actionbutton-m-border-radius,
            var(--cm-alias-border-radius-regular)
        );
    }
    :host([dir='ltr'][compact][vertical]:not([quiet])) ::slotted(:first-child) {
        border-top-right-radius: var(
            --cm-actionbutton-m-border-radius,
            var(--cm-alias-border-radius-regular)
        );
    }
    :host([dir='rtl'][compact][vertical]:not([quiet])) ::slotted(:first-child) {
        border-top-left-radius: var(
            --cm-actionbutton-m-border-radius,
            var(--cm-alias-border-radius-regular)
        );
    }
    :host([compact][vertical]:not([quiet])) ::slotted(:first-child) {
        border-radius: 0;
        margin-bottom: calc(
            -1 * var(
                    --cm-actionbutton-m-border-size,
                    var(--cm-alias-border-size-thin)
                ) / 2
        );
    }
    :host([dir='ltr'][compact][vertical]:not([quiet])) ::slotted(:last-child) {
        border-bottom-left-radius: var(
            --cm-actionbutton-m-border-radius,
            var(--cm-alias-border-radius-regular)
        );
    }
    :host([dir='rtl'][compact][vertical]:not([quiet])) ::slotted(:last-child) {
        border-bottom-right-radius: var(
            --cm-actionbutton-m-border-radius,
            var(--cm-alias-border-radius-regular)
        );
    }
    :host([dir='ltr'][compact][vertical]:not([quiet])) ::slotted(:last-child) {
        border-bottom-right-radius: var(
            --cm-actionbutton-m-border-radius,
            var(--cm-alias-border-radius-regular)
        );
    }
    :host([dir='rtl'][compact][vertical]:not([quiet])) ::slotted(:last-child) {
        border-bottom-left-radius: var(
            --cm-actionbutton-m-border-radius,
            var(--cm-alias-border-radius-regular)
        );
    }
    :host([compact][vertical]:not([quiet])) ::slotted(:last-child) {
        border-radius: 0;
        margin-top: calc(
            -1 * var(
                    --cm-actionbutton-m-border-size,
                    var(--cm-alias-border-size-thin)
                ) / 2
        );
        margin-bottom: 0;
    }
    :host([justified]) ::slotted(*) {
        flex: 1;
    }
`;
export default styles;
//# sourceMappingURL=spectrum-action-group.css.js.map