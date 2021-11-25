import { css } from '../../base/src/index';
const styles = css `
    @keyframes spOverlayFadeIn {
        0% {
            opacity: 0;
            transform: var(--sp-overlay-from)
        }
        to {
            opacity: 1;
            transform: translate(0)
        }
    }
    @keyframes spOverlayFadeOut {
        0% {
            opacity: 1;
            transform: translate(0)
        }
        to {
            opacity: 0;
            transform: var(--sp-overlay-from)
        }
    }

    :host {
        z-index: 1000;
        position: absolute;
        display: inline-block;
        pointer-events: none;
        top: 0;
        left: 0
    }

    :host(:focus) {
        outline: none
    }

    #contents, cm-theme {
        height: 100%
    }

    #contents {
        display: inline-block;
        pointer-events: none;
        animation-duration: var(--cm-global-animation-duration-200, .16s);
        animation-timing-function: var(--cm-global-animation-ease-out, ease-out);
        opacity: 1;
        visibility: visible
    }

    :host([data-popper-placement*=top]) #contents {
        --sp-overlay-from: translateY(var(--cm-global-dimension-size-75))
    }

    :host([data-popper-placement*=right]) #contents {
        --sp-overlay-from: translateX(calc(-1 * var(--cm-global-dimension-size-75)))
    }

    :host([data-popper-placement*=bottom]) #contents {
        --sp-overlay-from: translateY(calc(-1 * var(--cm-global-dimension-size-75)))
    }

    :host([data-popper-placement*=left]) #contents {
        --sp-overlay-from: translateX(var(--cm-global-dimension-size-75))
    }

    :host([animating]) ::slotted(*) {
        pointer-events: none
    }

    :host(:not([animating])) ::slotted(*) {
        pointer-events: auto
    }

    #contents ::slotted(*) {
        position: relative
    }
`;
export default styles;
//# sourceMappingURL=active-overlay.css.js.map