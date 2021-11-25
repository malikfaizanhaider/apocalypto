import { registerStyles, css, unsafeCSS } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';
const genericRadioStyles = css `

  :host {
    color: var(--i2c-body-text-color);
  }
  
  :host([checked]) [part="radio"] {
    background-color: var(--i2c-blue-500);
  }

  :host([checked]) [part="label"] {

  }

  // Disabled States
  :host([disabled]) {

  }

  :host([disabled]) [part="radio"] {
    background-color: var(--i2c-dark-50);
  }

  :host([disabled]) [part="radio"]::after {

  }

`;
const squareRadioStyles = css `
  :host(.square-radio-style) [part="radio"] {

  }

  :host(.square-radio-style) [part="label"] {

  }

  // ::before & ::after Style
  :host(.square-radio-style[checked]) [part="radio"] {
    background-color: var(--i2c-blue-500);
  }

  :host(.square-radio-style:not([checked]):not([disabled])) [part="radio"] {

  }

  :host(.square-radio-style) [part="radio"]::before {

  }

  :host(.square-radio-style) [part="radio"]::after {
    border-width: 6px;
  }

  :host(.square-radio-style[checked]) [part="radio"]::after {

  }

  // Disabled States
  :host(.square-radio-style[disabled]) {

  }
`;
const switcherRadioStyles = css `

  :host(.switcher-radio-style) {
    padding: 1rem;
    width: 100%;
    border: 1px solid var(--lumo-contrast-20pct);
    border-radius: 4px;
    margin-bottom: 1rem;
    position: relative;
  }

  :host(.switcher-radio-style):last-child {
    margin-bottom: 0;
  }

  :host(.switcher-radio-style[checked]) {
    border-color: var(--i2c-blue-500);
    background-color: var(--i2c-blue-50);
  }


  :host(.switcher-radio-style) [part="radio"] {
  }

  :host(.switcher-radio-style) [part="label"] {

  }

  // ::before & ::after Style
  :host(.switcher-radio-style[checked]) [part="radio"] {

  }

  :host(.switcher-radio-style:not([checked]):not([disabled])) [part="radio"] {

  }

  :host(.switcher-radio-style) [part="radio"]::before {

  }

  :host(.switcher-radio-style) [part="radio"]::after {

  }

  :host(.switcher-radio-style[checked]) [part="radio"]::after {

  }

  // Disabled States
  :host(.switcher-radio-style[disabled]) {

  }
`;
registerStyles('vaadin-radio-button', [unsafeCSS(genericRadioStyles), unsafeCSS(squareRadioStyles), unsafeCSS(switcherRadioStyles)]);
//# sourceMappingURL=radio-button.js.map