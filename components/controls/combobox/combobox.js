import { registerStyles, css, unsafeCSS } from '@vaadin/vaadin-themable-mixin/register-styles.js';
// Import the non-themed component
import '@vaadin/vaadin-combo-box/src/vaadin-combo-box.js';
import '@vaadin/vaadin-combo-box/src/vaadin-combo-box-light.js';
// Optional: reuse Lumo styles for button
import '@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box.js';
const genericComboBoxStyles = css `
  :host {
    color: var(--cm-field-fg);
    font-size: var(--i2c-font-size-s);
    font-family: var(--i2c-font-family);
    margin-bottom: var(--i2c-space-m);
  }



  /** Error Message **/
  :host([invalid]) [part$="button"] {
    color: var(--cm-fields-error-text);
  }

  :host([invalid]) [part="label"] {
    color: var(--cm-fields-error-text);
  }

  :host([invalid]) [part="input-field"]::after {
    background-color: var(--cm-fields-error-text);
  }

  [part="error-message"] {
    font-size: var(--i2c-font-size-xxs);
    color: var(--cm-fields-error-text);
  }

  [part="label"] {
    color: var(--cm-fields-lable-color);
  }

  [part="input-field"]::before, [part="input-field"]::after {
    background-color: var(--i2c-grey-1500);
  }
  [part="input-field"]::after {
    background-color: var(--cm-field-primary-color);
  }
`;
const CMComboBoxStyles = css `

`;
registerStyles('vaadin-combo-box', [unsafeCSS(genericComboBoxStyles), unsafeCSS(CMComboBoxStyles)]);
//# sourceMappingURL=combobox.js.map