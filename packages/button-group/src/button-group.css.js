import { css } from '../../base/src/index';
const styles = css `
    :host {
        --cm-buttongroup-button-gap-reset: 0;
        display: flex;
    }

    ::slotted(*) {
        flex-shrink: 0;
    }

    :host([dir='ltr']) ::slotted(:not(:first-of-type)) {
        margin-left: var(
            --cm-buttongroup-button-gap-x,
            var(--cm-global-dimension-static-size-200)
        );
    }

    :host([dir='rtl']) ::slotted(:not(:first-of-type)) {
        margin-right: var(
            --cm-buttongroup-button-gap-x,
            var(--cm-global-dimension-static-size-200)
        );
    }

    :host([vertical]) {
        display: inline-flex;
        flex-direction: column;
    }

    :host([dir='ltr'][vertical]) ::slotted(:not(:first-of-type)) {
        margin-left: var(--cm-buttongroup-button-gap-reset);
    }

    :host([dir='rtl'][vertical]) ::slotted(:not(:first-of-type)) {
        margin-right: var(--cm-buttongroup-button-gap-reset);
    }

    :host([vertical]) ::slotted(:not(:first-of-type)) {
        margin-top: var(
            --cm-buttongroup-button-gap-y,
            var(--cm-global-dimension-static-size-200)
        );
    }

    :host([vertical]) ::slotted(cm-action-button) {
        --cm-actionbutton-label-flex-grow: 1;
    }

    :host([dir='ltr'][vertical]) ::slotted(cm-action-button) {
        --cm-actionbutton-label-text-align: left;
    }

    :host([dir='rtl'][vertical]) ::slotted(cm-action-button) {
        --cm-actionbutton-label-text-align: right;
    }
`;
export default styles;
//# sourceMappingURL=button-group.css.js.map