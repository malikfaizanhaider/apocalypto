import { registerStyles, css, unsafeCSS } from '@vaadin/vaadin-themable-mixin/register-styles.js';
const genericButtonStyles = css `
:host {
  text-transform: initial;
  font-weight: 400;
}
`;
const CMButtonStyles = css `
  :host(.cm-button) {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
  }

  :host(.cm-button[hidden]) {
    display: none !important;
  }

  :host(.cm-button) .vaadin-button-container::before {
    content: "\\2003";
    display: inline-block;
    width: 0;
  }

  :host(.cm-button) .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host(.cm-button) [part="prefix"], [part="suffix"] {
    flex: none;
  }

  :host(.cm-button) [part="label"] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  :host(.cm-button) #button {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: inherit;
  }

  :host(.cm-button) {
    --i2c-button-size: 2.3125rem;
    min-width: calc(var(--i2c-button-size) * 2);
    height: var(--i2c-button-size);
    padding: 0 calc(var(--i2c-button-size) / 3 + var(--i2c-border-radius) / 2);
    margin: 0;
    box-sizing: border-box;

    font-family: var(--i2c-font-family);
    font-size: var(--i2c-font-size-xs);
    font-weight: 400;
    color: var(--i2c-primary-text-color);
    background-color: var(--i2c-blue-50);
    border-radius: var(--i2c-border-radius);
    cursor: default;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host(.cm-button) [part="label"], [part="prefix"], [part="suffix"] {
    line-height: var(--i2c-line-height-xs);
  }

  :host(.cm-button) [part="label"] {
    padding: calc(var(--i2c-button-size) / 6) 0;
  }

  :host(.cm-button[theme~="xs-small"]) {
    font-size: var(--i2c-font-size-xs);
    --i2c-button-size: var(--i2c-size-xs);
  }

  :host(.cm-button[theme~="xxs-small"]) {
    font-size: var(--i2c-font-size-xxs);
    --i2c-button-size: var(--i2c-size-xxs);
  }

  :host(.cm-button[theme~="small"]) {
    font-size: var(--i2c-font-size-s);
    --i2c-button-size: var(--i2c-size-s);
  }

  :host(.cm-button[theme~="large"]) {
    font-size: var(--i2c-font-size-s);
    --i2c-button-size: var(--i2c-size-l);
  }

  :host(.cm-button[disabled][disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
    background-color: var(--i2c-contrast-5pct);
  }

  :host(.cm-button)::before, :host(.cm-button)::after {
    content: "";

    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
  }

  :host(.cm-button:hover)::before {
    opacity: 0.05;
  }

  @media (pointer: coarse) {
    :host(.cm-button:not([active]):hover)::before {
      opacity: 0;
    }

  }

  :host(.cm-button)::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host(.cm-button[active])::before {
    opacity: 0.1;
    transition-duration: 0s;
  }

  :host(.cm-button[active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  :host(.cm-button[focus-ring]) {
    box-shadow: 0 0 0 2px var(--i2c-primary-color-50pct);
  }

  :host(.cm-button[theme~="tertiary"]), :host(.cm-button[theme~="tertiary-inline"]) {
    background-color: transparent !important;
    transition: opacity 0.2s;
    min-width: 0;
  }

  :host(.cm-button[theme~="tertiary"])::before, :host(.cm-button[theme~="tertiary-inline"])::before {
    display: none;
  }

  :host(.cm-button[theme~="tertiary"]) {
    padding: 0 calc(var(--i2c-button-size) / 6);
  }

  @media (hover: hover) {
    :host(.cm-button[theme*="tertiary"]:not([active]):hover) {
      opacity: 0.8;
    }

  }

  :host(.cm-button[theme~="tertiary"][active]), :host(.cm-button[theme~="tertiary-inline"][active]) {
    opacity: 0.5;
    transition-duration: 0s;
  }

  :host(.cm-button[theme~="tertiary-inline"]) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host(.cm-button[theme~="tertiary-inline"]) [part="label"] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host(.cm-button[theme~="primary"]) {
    background-color: var(--i2c-primary-color);
    color: var(--i2c-primary-contrast-color);
    min-width: calc(var(--i2c-button-size) * 2.5);
  }

  :host(.cm-button[theme~="primary"][disabled]) {
    background-color: var(--i2c-primary-color-50pct);
    color: var(--i2c-primary-contrast-color);
  }

  :host(.cm-button[theme~="primary"]:hover)::before {
    opacity: 0.1;
  }

  :host(.cm-button[theme~="primary"][active])::before {
    background-color: var(--i2c-shade-20pct);
  }

  @media (pointer: coarse) {
    :host(.cm-button[theme~="primary"][active])::before {
      background-color: var(--i2c-shade-60pct);
    }

    :host(.cm-button[theme~="primary"]:not([active]):hover)::before {
      opacity: 0;
    }

  }

  :host(.cm-button[theme~="primary"][active])::after {
    opacity: 0.2;
  }

  :host(.cm-button[theme~="success"]) {
    color: var(--i2c-success-text-color);
    background-color: var(--i2c-success-color-10pct);
  }

  :host(.cm-button[theme~="success"][theme~="primary"]) {
    background-color: var(--i2c-success-color);
    color: var(--i2c-success-contrast-color);
  }

  :host(.cm-button[theme~="success"][theme~="primary"][disabled]) {
    background-color: var(--i2c-success-color-50pct);
  }

  :host(.cm-button[theme~="error"]) {
    color: var(--i2c-error-text-color);
    background-color: var(--i2c-error-color-10pct);
  }

  :host(.cm-button[theme~="error"][theme~="primary"]) {
    background-color: var(--i2c-error-color);
    color: var(--i2c-error-contrast-color);
  }

  :host(.cm-button[theme~="error"][theme~="primary"][disabled]) {
    background-color: var(--i2c-error-color-50pct);
  }

  :host(.cm-button[theme~="contrast"]) {
    color: var(--i2c-contrast);
    background-color: var(--i2c-contrast-5pct);
  }

  :host(.cm-button[theme~="contrast"][theme~="primary"]) {
    background-color: var(--i2c-contrast);
    color: var(--i2c-base-color);
  }

  :host(.cm-button[theme~="contrast"][theme~="primary"][disabled]) {
    background-color: var(--i2c-contrast-50pct);
  }

  /*--block--*/
  :host(.cm-button[theme~="block"]) {
    width: 100%;
  }

  /*--Rounded--*/
  :host([theme~="rounded"]) {
    border-radius: 100px;
  }

  /*--Highlight--*/
  :host(.cm-button[theme~="highlight"][theme~="primary"]) {
    background-color: var(--i2c-orange-500);
    color: var(--i2c-highlight-contrast-color);
  }

  :host(.cm-button[theme~="highlight"]) {
    background-color: var(--i2c-orange-50);
    color: var(--i2c-orange-500);
  }

  /*--outline--*/
  :host(.cm-button[theme~="primary"][theme~="outline"]) {
    border: 1px solid var(--i2c-blue-100);
    color: var(--i2c-blue-500);
    background-color: var(--i2c-blue-50);
  }

  :host(.cm-button[theme~="highlight"][theme~="outline"]) {
    border: 1px solid var(--i2c-orange-500);
    background-color: rgba(239,152,41,0.07);
    color: var(--i2c-orange-500);
  }

  :host(.cm-button[theme~="success"][theme~="outline"]) {
    border: 1px solid rgba(52,204,109,0.2);
    background-color: rgba(3,192,74,0.07);
    color: #34CC6D;
  }

  :host(.cm-button[theme~="error"][theme~="outline"]) {
    border: 1px solid rgba(227,87,69,0.2);
    background-color: rgba(227,87,69,0.07);
    color: #E35745;
  }

  :host(.cm-button[theme~="white"][theme~="outline"]) {
    background-color: #ffffff;
  }

  :host(.cm-button) [part] ::slotted(iron-icon) {
    display: inline-block;
    width: var(--i2c-icon-size-m);
    height: var(--i2c-icon-size-m);
    margin-left: 0;
    margin-right: 0;
  }

  :host(.cm-button) [part]::slotted(iron-icon[icon^="vaadin:"]) {
    box-sizing: border-box !important;
      margin: 0 !important;
      padding: 0 !important;
  }

  :host(.cm-button) [part="prefix"] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host(.cm-button) [part="suffix"] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

 :host(.cm-button[theme~="icon"]:not([theme~="tertiary-inline"])) {
    min-width: var(--i2c-button-size);
    padding-left: calc(var(--i2c-button-size) / 7);
    padding-right: calc(var(--i2c-button-size) / 7);
     
  }
    :host(.cm-button[theme~="icon"] [theme~="tertiary-inline xxs-small"]) [part] ::slotted(iron-icon) {
        padding: 0 !important;
        margin: 0 !important;
    }
    

  :host(.cm-button[theme~="icon"][theme~="outline"]:not([theme~="tertiary-inline"])) {
    border: 1px solid var(--i2c-grey-1700);
    color: var(--i2c-grey-200);
  }

  :host(.cm-button[theme~="icon"][theme~="primary"][theme~="outline"]:not([theme~="tertiary-inline"])) {
    border: 1px solid var(--i2c-blue-100);
    color: var(--i2c-blue-500);
    background-color: var(--i2c-blue-50);
  }

  :host(.cm-button[theme~="icon"][theme~="error"][theme~="outline"]:not([theme~="tertiary-inline"])) {
    border: 1px solid rgba(227,87,69,0.2);
    background-color: rgba(227,87,69,0.07);
    color: #E35745;
  }

  :host(.cm-button[theme~="icon"][theme~="success"][theme~="outline"]:not([theme~="tertiary-inline"])) {
    border: 1px solid rgba(52,204,109,0.2);
    background-color: rgba(3,192,74,0.07);
    color: #34CC6D;
  }

  :host(.cm-button[theme~="icon"][theme~="highlight"][theme~="outline"]:not([theme~="tertiary-inline"])) {
    border: 1px solid var(--i2c-orange-500);
    background-color: rgba(239,152,41,0.07);
    color: var(--i2c-orange-500);
  }

  :host(.cm-button[theme~="icon"]) [part="prefix"], :host(.cm-button[theme~="icon"]) [part="suffix"] {
    margin-left: 0;
    margin-right: 0;
  }

  :host(.cm-button[dir="rtl"]) [part="prefix"] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host(.cm-button[dir="rtl"]) [part="suffix"] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host(.cm-button[dir="rtl"][theme~="icon"]) [part="prefix"], :host(.cm-button[dir="rtl"][theme~="icon"]) [part="suffix"] {
    margin-left: 0;
    margin-right: 0;
  }
`;
registerStyles('vaadin-button', [unsafeCSS(genericButtonStyles), unsafeCSS(CMButtonStyles)]);
//# sourceMappingURL=buttons.js.map