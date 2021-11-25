/* Copyright 2021 i2c Inc. All rights reserved. */
import { css } from '../../base/src/index';
const styles = css `
    :host {
        --cm-buttongroup-button-gap-reset: 0;
        display: flex
    }

    ::slotted(*) {
        flex-shrink: 0
    }

    :host([dir=ltr]) ::slotted(:not(:first-of-type)) {
        margin-left: var(--cm-buttongroup-button-gap-x, var(--cm-global-dimension-static-size-200))
    }

    :host([dir=rtl]) ::slotted(:not(:first-of-type)) {
        margin-right: var(--cm-buttongroup-button-gap-x, var(--cm-global-dimension-static-size-200))
    }

    :host([vertical]) {
        display: inline-flex;
        flex-direction: column
    }

    :host([dir=ltr][vertical]) ::slotted(:not(:first-of-type)) {
        margin-left: var(--cm-buttongroup-button-gap-reset)
    }

    :host([dir=rtl][vertical]) ::slotted(:not(:first-of-type)) {
        margin-right: var(--cm-buttongroup-button-gap-reset)
    }

    :host([vertical]) ::slotted(:not(:first-of-type)) {
        margin-top: var(--cm-buttongroup-button-gap-y, var(--cm-global-dimension-static-size-200))
    }
`;
export default styles;
//# sourceMappingURL=spectrum-button-group.css.js.map