import { css } from '../../base/src/index';

const styles = css`
    :host {
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

    :host {
        --cm-dialog-confirm-background-entry-animation-delay: 0ms;
        --cm-dialog-confirm-background-exit-animation-ease: cubic-bezier(0.5, 0, 1, 1);
        --cm-dialog-confirm-background-entry-animation-ease: cubic-bezier(0, 0, 0.4, 1);
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        overflow: hidden;
        transition: opacity var(--cm-dialog-confirm-background-exit-animation-duration, var(--cm-global-animation-duration-300)) var(--cm-dialog-confirm-background-exit-animation-ease, var(--cm-global-animation-linear)) var(--cm-dialog-confirm-background-exit-animation-delay, var(--cm-global-animation-duration-200)), visibility 0ms linear calc(var(--cm-dialog-confirm-background-exit-animation-delay,
        var(--cm-global-animation-duration-200)) + var(--cm-dialog-confirm-background-exit-animation-duration,
        var(--cm-global-animation-duration-300)))
    }

    :host([open]) {
        transition: opacity var(--cm-dialog-confirm-background-entry-animation-duration, var(--cm-global-animation-duration-600)) var(--cm-dialog-confirm-background-entry-animation-ease, var(--cm-global-animation-linear)) var(--cm-dialog-confirm-background-entry-animation-delay, 0ms)
    }

    :host {
        background: var(--cm-dialog-confirm-overlay-background-color, var(--cm-alias-background-color-modal-overlay))
    }
`;
export default styles;