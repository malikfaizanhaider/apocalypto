import { css } from '../../base/src/index';

const styles = css`
    :host {
        --cm-dialog-fullscreen-header-text-size: 28px;
        --cm-dialog-confirm-small-width: 400px;
        --cm-dialog-confirm-medium-width: 480px;
        --cm-dialog-confirm-large-width: 640px;
        --cm-dialog-error-width: var(--cm-dialog-confirm-medium-width);
        --cm-dialog-confirm-hero-height: var(--cm-global-dimension-size-1600);
        --cm-dialog-confirm-description-padding: var(--cm-global-dimension-size-25);
        --cm-dialog-confirm-description-margin: calc(var(--cm-global-dimension-size-25) * -1);
        --cm-dialog-confirm-footer-padding-top: var(--cm-global-dimension-static-size-500, 40px);
        --cm-dialog-confirm-gap-size: var(--cm-global-dimension-size-200);
        --cm-dialog-confirm-buttongroup-padding-top: var(--cm-global-dimension-static-size-500, 40px);
        --cm-dialog-confirm-close-button-size: var(--cm-global-dimension-size-400);
        --cm-dialog-confirm-close-button-padding: calc(26px - var(--cm-global-dimension-size-175));
        --cm-dialog-confirm-divider-height: var(--cm-global-dimension-static-size-25, 2px);
        display: flex;
        box-sizing: border-box;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        min-width: var(--cm-dialog-confirm-min-width, var(--cm-global-dimension-static-size-3600));
        max-width: 100%;
        max-height: inherit;
        outline: none
    }

    :host([size=small]) {
        width: var(--cm-dialog-confirm-small-width)
    }

    :host([size=medium]) {
        width: var(--cm-dialog-confirm-medium-width)
    }

    :host([size=large]) {
        width: var(--cm-dialog-confirm-large-width)
    }

    ::slotted([slot=hero]) {
        grid-area: hero;
        height: var(--cm-dialog-confirm-hero-height);
        border-top-left-radius: var(--cm-dialog-confirm-border-radius, var(--cm-global-dimension-size-50));
        border-top-right-radius: var(--cm-dialog-confirm-border-radius, var(--cm-global-dimension-size-50));
        background-size: cover;
        background-position: 50%;
        overflow: hidden
    }

    .grid {
        display: grid;
        grid-template-columns:var(--cm-dialog-confirm-padding) auto 1fr auto minmax(0, auto) var(--cm-dialog-confirm-padding);
        grid-template-rows:auto var(--cm-dialog-confirm-padding) auto auto 1fr auto var(--cm-dialog-confirm-padding);
        grid-template-areas:"hero hero    hero    hero        hero        hero" ".    .       .       .           .           ." ".    heading header  header      typeIcon    ." ".    divider divider divider     divider     ." ".    content content content     content     ." ".    footer  footer  buttonGroup buttonGroup ." ".    .       .       .           .           .";
        width: 100%
    }
    
/*    .grid {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }*/

    :host([dir=ltr]) ::slotted([slot=heading]) {
        padding-right: var(--cm-dialog-confirm-gap-size)
    }

    :host([dir=rtl]) ::slotted([slot=heading]) {
        padding-left: var(--cm-dialog-confirm-gap-size)
    }

    ::slotted([slot=heading]) {
        grid-area: heading;
        margin: 0;
        font-size: var(--cm-dialog-confirm-title-text-size);
        font-weight: var(--cm-dialog-confirm-title-text-font-weight, var(--cm-global-font-weight-bold));
        line-height: var(--cm-dialog-confirm-title-text-line-height, var(--cm-alias-heading-text-line-height));
        outline: none
    }

    :host([dir=ltr]) .no-header::slotted([slot=heading]) {
        padding-right: 0
    }

    :host([dir=rtl]) .no-header::slotted([slot=heading]) {
        padding-left: 0
    }

    .no-header::slotted([slot=heading]) {
        grid-area: heading-start /heading-start/header-end/header-end
    }

    .header {
        grid-area: header;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        box-sizing: border-box;
        outline: none
    }

    .type-icon {
        grid-area: typeIcon
    }

    .divider {
        grid-area: divider;
        width: 100%;
        margin-top: var(--cm-dialog-confirm-divider-margin-top, var(--cm-global-dimension-static-size-150));
        margin-bottom: var(--cm-dialog-confirm-divider-margin-bottom, var(--cm-global-dimension-static-size-200))
    }

    :host([no-divider]) .divider {
        display: none
    }

    :host([no-divider]) ::slotted([slot=heading]) {
        padding-bottom: calc(var(--cm-dialog-confirm-divider-margin-top,
        var(--cm-global-dimension-static-size-150)) + var(--cm-dialog-confirm-divider-margin-bottom,
        var(--cm-global-dimension-static-size-200)) + var(--cm-dialog-confirm-divider-height))
    }

    .content {
        grid-area: content;
        box-sizing: border-box;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
        outline: none;
        font-size: var(--cm-dialog-confirm-description-text-size);
        font-weight: var(--cm-dialog-confirm-description-text-font-weight, var(--cm-global-font-weight-regular));
        line-height: var(--cm-dialog-confirm-description-text-line-height, var(--cm-alias-component-text-line-height));
        padding: 0 var(--cm-dialog-confirm-description-padding);
        margin: 0 var(--cm-dialog-confirm-description-margin)
    }

    .footer {
        grid-area: footer;
        padding-top: var(--cm-dialog-confirm-footer-padding-top);
        display: flex;
        flex-wrap: wrap;
        outline: none
    }

    .footer > .button + .button, .footer > ::slotted(*) {
        margin-bottom: 0
    }

    :host([dir=ltr]) .buttonGroup {
        padding-left: var(--cm-dialog-confirm-gap-size)
    }

    :host([dir=rtl]) .buttonGroup {
        padding-right: var(--cm-dialog-confirm-gap-size)
    }

    .buttonGroup {
        grid-area: buttonGroup;
        padding-top: var(--cm-dialog-confirm-buttongroup-padding-top);
        display: flex;
        justify-content: flex-end
    }

    .buttonGroup.buttonGroup--noFooter {
        grid-area: footer-start /footer-start/buttonGroup-end/buttonGroup-end
    }

    :host([dismissable]) .grid {
        grid-template-columns:var(--cm-dialog-confirm-padding) auto 1fr auto minmax(0, auto) minmax(0, var(--cm-dialog-confirm-close-button-size)) var(--cm-dialog-confirm-padding);
        grid-template-rows:auto var(--cm-dialog-confirm-padding) auto auto 1fr auto var(--cm-dialog-confirm-padding);
        grid-template-areas:"hero hero    hero    hero        hero        hero        hero" ".    .       .       .           .           closeButton closeButton" ".    heading header  header      typeIcon    closeButton closeButton" ".    divider divider divider     divider     divider     ." ".    content content content     content     content     ." ".    footer  footer  buttonGroup buttonGroup buttonGroup ." ".    .       .       .           .           .           ."
    }

    :host([dismissable]) .grid .buttonGroup {
        display: none
    }

    :host([dismissable]) .grid .footer {
        grid-area: footer /footer/buttonGroup/buttonGroup
    }

    :host([dir=ltr]) .close-button {
        margin-right: var(--cm-dialog-confirm-close-button-padding)
    }

    :host([dir=rtl]) .close-button {
        margin-left: var(--cm-dialog-confirm-close-button-padding)
    }

    .close-button {
        grid-area: closeButton;
        align-self: start;
        justify-self: end;
        margin-top: var(--cm-dialog-confirm-close-button-padding);
        opacity: 0.3;
    }

    :host([error]) {
        width: var(--cm-dialog-error-width, 90%)
    }

    :host([mode=fullscreen]) {
        width: 100%;
        height: 100%
    }

    :host([mode=fullscreenTakeover]) {
        width: 100%;
        height: 100%;
        border-radius: 0
    }

    :host([mode=fullscreen]) ::slotted([slot=heading]), :host([mode=fullscreenTakeover]) ::slotted([slot=heading]) {
        font-size: var(--cm-dialog-fullscreen-header-text-size)
    }

    @media screen and (max-inline-size: 700px) {
        .grid {
            grid-template-columns:var(--cm-dialog-confirm-padding) auto 1fr auto minmax(0, auto) var(--cm-dialog-confirm-padding);
            grid-template-areas:"hero hero    hero    hero        hero        hero" ".    .       .       .           .           ." ".    heading heading heading     typeIcon    ." ".    header  header  header      header      ." ".    divider divider divider     divider     ." ".    content content content     content     ." ".    footer  footer  buttonGroup buttonGroup ." ".    .       .       .           .           ."
        }

        .grid, :host([dismissable]) .grid {
            grid-template-rows:auto var(--cm-dialog-confirm-padding) auto auto auto 1fr auto var(--cm-dialog-confirm-padding)
        }

        :host([dismissable]) .grid {
            grid-template-columns:var(--cm-dialog-confirm-padding) auto 1fr auto minmax(0, auto) minmax(0, var(--cm-dialog-confirm-close-button-size)) var(--cm-dialog-confirm-padding);
            grid-template-areas:"hero hero    hero    hero        hero        hero        hero" ".    .       .       .           .           closeButton closeButton" ".    heading heading heading     typeIcon    closeButton closeButton" ".    header  header  header      header      header      ." ".    divider divider divider     divider     divider     ." ".    content content content     content     content     ." ".    footer  footer  buttonGroup buttonGroup buttonGroup ." ".    .       .       .           .           .           ."
        }

        .header {
            justify-content: flex-start
        }

        :host([mode=fullscreen]) .grid, :host([mode=fullscreenTakeover]) .grid {
            display: grid;
            grid-template-columns:var(--cm-dialog-confirm-padding) 1fr var(--cm-dialog-confirm-padding);
            grid-template-rows:var(--cm-dialog-confirm-padding) auto auto auto 1fr auto var(--cm-dialog-confirm-padding);
            grid-template-areas:".    .            ." ".    heading      ." ".    header       ." ".    divider      ." ".    content      ." ".    buttonGroup  ." ".    .            ."
        }

        :host([mode=fullscreen]) .buttonGroup, :host([mode=fullscreenTakeover]) .buttonGroup {
            padding-top: var(--cm-dialog-confirm-buttongroup-padding-top)
        }

        :host([mode=fullscreen]) ::slotted([slot=heading]), :host([mode=fullscreenTakeover]) ::slotted([slot=heading]) {
            font-size: var(--cm-dialog-confirm-title-text-size)
        }
    }
    @media (forced-colors: active) {
        :host {
            border: solid
        }
    }

    ::slotted([slot=heading]) {
        color: var(--cm-dialog-confirm-title-text-color, var(--cm-global-color-gray-900))
    }

    .content {
        color: var(--cm-dialog-confirm-description-text-color, var(--cm-global-color-gray-800))
    }

    .type-icon {
        color: var(--cm-dialog-confirm-icon-color, var(--cm-global-color-gray-900))
    }

    :host([error]) .type-icon {
        color: var(--cm-dialog-error-icon-color, var(--cm-semantic-negative-color-icon))
    }

    .content {
        overflow: hidden
    }

    .content[tabindex] {
        overflow: auto
    }

    ::slotted(img[slot=hero]) {
        width: 100%;
        height: auto
    }

    :host([mode=fullscreen]), :host([mode=fullscreenTakeover]) {
        max-height: none;
        max-width: none
    }

    :host([mode=fullscreen]) .grid, :host([mode=fullscreenTakeover]) .grid {
        display: grid;
        grid-template-columns:var(--cm-dialog-confirm-padding) 1fr auto auto var(--cm-dialog-confirm-padding);
        grid-template-rows:var(--cm-dialog-confirm-padding) auto auto 1fr var(--cm-dialog-confirm-padding);
        grid-template-areas:".    .       .       .            ." ".    heading header  buttonGroup  ." ".    divider divider divider      ." ".    content content content      ." ".    .       .       .            ."
    }

    :host([mode=fullscreen]) ::slotted([slot=heading]), :host([mode=fullscreenTakeover]) ::slotted([slot=heading]) {
        font-size: 28px
    }

    :host([mode=fullscreen]) .content, :host([mode=fullscreenTakeover]) .content {
        max-height: none
    }

    :host([mode=fullscreen]) .buttonGroup, :host([mode=fullscreen]) .footer, :host([mode=fullscreenTakeover]) .buttonGroup, :host([mode=fullscreenTakeover]) .footer {
        padding-top: 0
    }

    :host([mode=fullscreen]) .footer, :host([mode=fullscreenTakeover]) .footer {
        display: none
    }

    :host([mode=fullscreen]) .buttonGroup, :host([mode=fullscreenTakeover]) .buttonGroup {
        grid-area: buttonGroup;
        align-self: start
    }
`;
export default styles;