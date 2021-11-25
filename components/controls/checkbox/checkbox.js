import { registerStyles, css, unsafeCSS } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-checkbox/vaadin-checkbox.js';
import '@vaadin/vaadin-checkbox/theme/material/vaadin-checkbox';
const genericCheckboxStyles = css `

  :host {
    font-family: var(--i2c-font-family);
  }

  :host label {
    align-items: center;
  }

  [part="label"]:not([empty]) {
    margin: 0.3125rem 0.875em 0.1875em 0.375em;
    font-size: var(--i2c-font-size-xs);
  }

  [part="checkbox"] {
    box-shadow: inset 0 0 0 2px var(--i2c-contrast-20pct);
  }
  :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
    box-shadow: inset 0 0 0 2px var(--i2c-blue-500);
  }
`;
const CMCheckboxStyles = css `

  :host(.cm-checkbox) [part="checkbox"] {
    width: calc(1em + 2px);
    height: calc(1em + 2px);
    margin: 0.1875em;
    position: relative;
    border-radius: var(--i2c-border-radius-s);
    background-color: var(--i2c-contrast-20pct);
    transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
    pointer-events: none;
    line-height: 1.2;
    box-shadow: none;
  }

  :host(.cm-checkbox) label {
    display: flex;
    align-items: center;
  }

  :host(.cm-checkbox[theme~="custom-checkbox"]) {
    border: 1px solid var(--i2c-contrast-20pct);
    border-radius: 4px;
    position: relative;
    background-color: #F9F9F9;
    overflow: hidden;
    min-width: 261px;
  }

  :host(.cm-checkbox[theme~="custom-checkbox"][invalid]) {
    border-color: var(--cm-fields-error-text);
  }

  :host(.cm-checkbox[theme~="custom-checkbox"][highlight]) {
    border-color:  var(--i2c-orange-500);
    background-color: var(--i2c-orange-50);
  }
  :host(.cm-checkbox[theme~="custom-checkbox"][highlight]) [part="label"]:not([empty]) {
    background-color: var(--i2c-orange-50);
  }

  :host(.cm-checkbox[theme~="custom-checkbox"]:last-child) {
    margin-bottom: 0;
  }

  :host(.cm-checkbox[theme~="custom-checkbox"][focused]) {
    border-color: var(--i2c-blue-500);
  }

  :host(.cm-checkbox[checked]) [part="checkbox"] {
    border-color: var(--i2c-green-500);
  }

  :host(.cm-checkbox[focused]) [part="checkbox"] {
    border-color: var(--i2c-green-500);
  }

  :host(.cm-checkbox[theme~="custom-checkbox"]) [part="label"]:not([empty]) {
    padding: var(--i2c-font-size-xl) var(--i2c-font-size-xl) var(--i2c-font-size-xl) var(--i2c-font-size-xs);
    background-color: #ffffff;
    margin: 0;
    border-left: 1px solid #EEEEEE;
    width: 100%;
  }

  :host(.cm-checkbox[theme~="custom-checkbox"]) [part="checkbox"] {
    margin: 0 var(--i2c-font-size-xs);

  }

  :host(.cm-checkbox) {
    display: inline-block;
    font-family: var(--i2c-font-family);
  }

  :host(.cm-checkbox[hidden]) {
    display: none !important;
  }

  label {
    display: inline-flex;
    align-items: baseline;
    outline: none;
  }

  :host(.cm-checkbox) [part="checkbox"] {
    position: relative;
    display: inline-block;
    flex: none;
  }

  input[type="checkbox"] {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: inherit;
    margin: 0;
  }

  :host(.cm-checkbox[disabled]) {
    -webkit-tap-highlight-color: transparent;
  }

  :host(.cm-checkbox) {
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: default;
    outline: none;
  }

  :host(.cm-checkbox) [part="label"]:not([empty]) {
    margin: 0.1875em 0.875em 0.1875em 0.375em;
    font-size: var(--i2c-font-size-xs);
  }

  :host(.cm-checkbox) [part="checkbox"] {
    width: calc(1em + 2px);
    height: calc(1em + 2px);
    margin: 0.1875em;
    position: relative;
    border-radius: 100px;
    background-color: #ffffff;
    transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
    pointer-events: none;
    line-height: 1.2;
    border: 1px solid #CCCCCC;
  }

  :host(.cm-checkbox[indeterminate]) [part="checkbox"], :host(.cm-checkbox[checked]) [part="checkbox"] {
    background-color: var(--i2c-green-500);
  }

  :host(.cm-checkbox) [part="checkbox"]::before {
    content: "\\2003";
  }

  :host(.cm-checkbox) [part="checkbox"]::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border: 0 solid var(--i2c-primary-contrast-color);
    border-width: 0.1875em 0 0 0.1875em;
    box-sizing: border-box;
    transform-origin: 0 0;
    position: absolute;
    top: 0.8125em;
    left: 0.5em;
    transform: scale(0.55) rotate(-135deg);
    opacity: 0;
  }

  :host(.cm-checkbox[checked]) [part="checkbox"]::after {
    opacity: 1;
    width: 0.625em;
    height: 1.0625em;
  }

  :host(.cm-checkbox[indeterminate]) [part="checkbox"]::after {
    transform: none;
    opacity: 1;
    top: 45%;
    height: 10%;
    left: 22%;
    right: 22%;
    width: auto;
    border: 0;
    background-color: var(--i2c-primary-contrast-color);
    transition: opacity 0.25s;
  }

  :host(.cm-checkbox[focus-ring]) [part="checkbox"] {
    box-shadow: 0 0 0 3px var(--i2c-primary-color-50pct);
  }

  :host(.cm-checkbox[disabled]) {
    pointer-events: none;
    color: var(--i2c-disabled-text-color);
  }

  :host(.cm-checkbox[disabled]) [part="label"] ::slotted(*) {
    color: inherit;
  }

  :host(.cm-checkbox[disabled]) [part="checkbox"] {
    background-color: var(--i2c-grey-200);
    border-color: var(--i2c-grey-200);
    box-shadow: none !important;
  }

  :host(.cm-checkbox[disabled]) [part="checkbox"]::after {
    border-color: #ffffff;
  }

  :host(.cm-checkbox[indeterminate][disabled]) [part="checkbox"]::after {
    background-color: var(--i2c-contrast-30pct);
  }

  :host(.cm-checkbox[dir="rtl"]) [part="label"]:not([empty]) {
    margin: 0.1875em 0.375em 0.1875em 0.875em;
  }

  :host(.cm-checkbox:hover) [part="checkbox"]::after {
    transition: width 0.1s, height 0.25s;
  }

  :host(.cm-checkbox) [part="checkbox"]::before {
    color: transparent;
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: inherit;
    transform: scale(1.4);
    opacity: 0;
    transition: transform 0.1s, opacity 0.8s;
  }

  :host(.cm-checkbox:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
    background-color: #ffffff;
    border-color: var(--i2c-green-500);
    box-shadow: none;
  }

  @media (pointer: coarse) {
    :host(.cm-checkbox:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
      background-color: var(--i2c-contrast-20pct);
    }

  }

  :host(.cm-checkbox[active]) [part="checkbox"] {
    transform: scale(0.9);
    transition-duration: 0.05s;
  }

  :host(.cm-checkbox[active][checked]) [part="checkbox"] {
    transform: scale(1.1);
  }

  :host(.cm-checkbox[active]:not([checked])) [part="checkbox"]::before {
    transition-duration: 0.01s, 0.01s;
    transform: scale(0);
    opacity: 0.4;
  }

  ::-ms-backdrop, [part="checkbox"] {
    line-height: 1;
  }


`;
registerStyles('vaadin-checkbox', [unsafeCSS(CMCheckboxStyles), unsafeCSS(genericCheckboxStyles)]);
//# sourceMappingURL=checkbox.js.map