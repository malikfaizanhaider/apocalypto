import { css } from '../../base/src/index';
const styles = css `
    :host {
        width: var(--cm-avatar-size-50-width, var(--cm-alias-avatar-size-50));
        height: var(--cm-avatar-size-50-height, var(--cm-alias-avatar-size-50));
        border-radius: var(--cm-avatar-size-50-border-radius, 50%);
        border-style: none;
        -webkit-user-drag: none;
        -webkit-user-select: none;
        user-select: none;
        opacity: var(--cm-avatar-size-100-opacity, 1)
    }

    :host([disabled]) {
        opacity: var(--cm-avatar-size-100-opacity-disabled, .3)
    }

    :host {
        display: block;
        overflow: hidden
    }

    img {
        width: 100%;
        height: auto;
        vertical-align: top
    }
`;
export default styles;
//# sourceMappingURL=avatar.css.js.map