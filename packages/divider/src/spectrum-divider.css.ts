import { css } from '../../base/src/index';

const styles = css`
    :host([size=s]) {
        --cm-divider-height: var(--cm-divider-s-height, var(--cm-global-dimension-size-10));
        --cm-divider-vertical-width: var(--cm-divider-s-vertical-width, var(--cm-global-dimension-size-10))
    }

    :host([size=m]) {
        --cm-divider-height: var(--cm-divider-m-height, var(--cm-global-dimension-size-25));
        --cm-divider-vertical-width: var(--cm-divider-m-vertical-width, var(--cm-global-dimension-size-25))
    }

    :host([size=l]) {
        --cm-divider-height: var(--cm-divider-l-height, var(--cm-global-dimension-size-50));
        --cm-divider-vertical-width: var(--cm-divider-l-vertical-width, var(--cm-global-dimension-size-50))
    }

    :host {
        --cm-divider-vertical-height: 100%;
        width: 100%;
        height: var(--cm-divider-height);
        overflow: visible;
        border: none;
        border-width: var(--cm-divider-height);
        border-radius: var(--cm-divider-height)
    }

    :host([vertical]) {
        height: var(--cm-divider-vertical-height);
        width: var(--cm-divider-vertical-width)
    }

    :host {
        --cm-divider-l-background-color: var(--cm-global-color-gray-800);
        --cm-divider-m-background-color: var(--cm-global-color-gray-300);
        --cm-divider-s-background-color: var(--cm-global-color-gray-300)
    }

    :host([size=l]) {
        background-color: var(--cm-divider-l-background-color, var(--cm-global-color-gray-800))
    }

    :host([size=m]) {
        background-color: var(--cm-divider-m-background-color, var(--cm-global-color-gray-300))
    }

    :host([size=s]) {
        background-color: var(--cm-divider-s-background-color, var(--cm-global-color-gray-300))
    }
`;
export default styles;