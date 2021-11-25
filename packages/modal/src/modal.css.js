import { css } from '../../base/src/index';
const styles = css `
    :host {
        position: fixed;
        left: 0;
        top: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        height: -webkit-fill-available;
        height: fill-available;
        visibility: hidden;
        pointer-events: none;
        z-index: 2;
        transition: visibility 0ms linear var(--cm-global-animation-duration-100, .13s)
    }

    :host([open]) {
        visibility: visible
    }

    @media only screen and (max-device-height: 350px), only screen and (max-device-width: 400px) {
        :host([responsive]) {
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            border-radius: 0;
            margin-top: 0
        }
    }

    .modal {
        visibility: hidden;
        opacity: 0;
        transition: transform var(--cm-global-animation-duration-100, .13s) ease-in-out, opacity var(--cm-global-animation-duration-100, .13s) ease-in-out, visibility 0ms linear var(--cm-global-animation-duration-100, .13s);
        pointer-events: none
    }

    :host([open]) .modal {
        visibility: visible;
        opacity: 1;
        transition-delay: 0ms;
        pointer-events: auto
    }

    :host {
        --cm-dialog-confirm-exit-animation-delay: 0ms;
        --cm-dialog-fullscreen-margin: 32px;
        --cm-dialog-max-height: 90vh
    }

    .modal {
        transform: translateY(var(--cm-dialog-confirm-entry-animation-distance, var(--cm-global-dimension-size-250)));
        z-index: 2;
        max-height: var(--cm-dialog-max-height);
        border-radius: var(--cm-dialog-confirm-border-radius, var(--cm-global-dimension-size-50));
        overflow: hidden;
        outline: none;
        pointer-events: auto;
        transition: opacity var(--cm-dialog-confirm-exit-animation-duration, var(--cm-global-animation-duration-100)) cubic-bezier(.5, 0, 1, 1) var(--cm-dialog-confirm-exit-animation-delay, 0ms), visibility 0ms linear calc(var(--cm-dialog-confirm-exit-animation-delay, 0ms) + var(--cm-dialog-confirm-exit-animation-duration,
        var(--cm-global-animation-duration-100))), transform 0ms linear calc(var(--cm-dialog-confirm-exit-animation-delay, 0ms) + var(--cm-dialog-confirm-exit-animation-duration,
        var(--cm-global-animation-duration-100)))
    }

    :host([open]) .modal {
        transition: transform var(--cm-dialog-confirm-entry-animation-duration, var(--cm-global-animation-duration-500)) cubic-bezier(0, 0, .4, 1) var(--cm-dialog-confirm-entry-animation-delay, var(--cm-global-animation-duration-200)), opacity var(--cm-dialog-confirm-entry-animation-duration, var(--cm-global-animation-duration-500)) cubic-bezier(0, 0, .4, 1) var(--cm-dialog-confirm-entry-animation-delay, var(--cm-global-animation-duration-200));
        transform: translateY(0)
    }

    @media only screen and (max-device-height: 350px), only screen and (max-device-width: 400px) {
        :host([responsive]) .modal {
            width: 100%;
            height: 100%;
            max-width: 100%;
            max-height: 100%;
            border-radius: 0
        }
    }

    .fullscreen {
        left: var(--cm-dialog-fullscreen-margin);
        top: var(--cm-dialog-fullscreen-margin);
        right: var(--cm-dialog-fullscreen-margin);
        bottom: var(--cm-dialog-fullscreen-margin)
    }

    .fullscreen, .fullscreenTakeover {
        position: fixed;
        max-width: none;
        max-height: none
    }

    .fullscreenTakeover {
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        box-sizing: border-box;
        border: none;
        border-radius: 0
    }

    .fullscreenTakeover, :host([open]) .fullscreenTakeover {
        transform: none
    }

    .modal {
        background: var(--cm-dialog-confirm-background-color, var(--cm-alias-background-color-default))
    }

    :host {
        width: calc(100vw - var(--swc-body-margins-inline, 0 * 1px));
        height: calc(100vh - var(--swc-body-margins-block, 0 * 1px))
    }
`;
export default styles;
//# sourceMappingURL=modal.css.js.map