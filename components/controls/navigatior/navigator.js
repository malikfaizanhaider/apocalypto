import { registerStyles, css, unsafeCSS } from '@vaadin/vaadin-themable-mixin/register-styles.js';
// Import the non-themed component
import '@vaadin/vaadin-menu-bar/vaadin-menu-bar.js';
// Optional: reuse Lumo styles for button
import '@vaadin/vaadin-menu-bar/theme/lumo/vaadin-menu-bar.js';
const genericNavStyles = css ``;
const CMNavStyles = css `
  :host([theme~="i2c-default"]) {
    --lumo-primary-text-color: var(--i2c-blue-500);
    --lumo-primary-color: var(--i2c-blue-500);
    background-color: transparent;
  }

  :host([theme~="i2c-default"]) vaadin-menu-bar-button {
    background: transparent;
    font-size: var(--i2c-font-size-s);
    font-weight: normal;
    color: var(--cm-fields-lable-color);
    border-radius: 4px;
  }

  :host([theme~="i2c-default"]) vaadin-menu-bar-button:hover {
    background-color: var(--i2c-orange-50);
    color: var(--i2c-orange-500);
  }

  :host([theme~="i2c-default"]) [part="overflow-button"] {
    font-size: var(--i2c-font-size-xxxl);
  }

  :host([theme~="i2c-default"][part='overflow-button']) ::slotted(*) {
    background: red;
  }
`;
registerStyles('vaadin-menu-bar', [unsafeCSS(genericNavStyles), unsafeCSS(CMNavStyles)]);
//# sourceMappingURL=navigator.js.map