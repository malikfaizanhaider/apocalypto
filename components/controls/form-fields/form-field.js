import { registerStyles, css, unsafeCSS } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-text-field/theme/material/vaadin-text-field.js';
import '@vaadin/vaadin-text-field/src/vaadin-password-field.js';
import '@vaadin/vaadin-text-field/src/vaadin-email-field.js';
import '@vaadin/vaadin-text-field/src/vaadin-number-field.js';
import '@vaadin/vaadin-text-field/src/vaadin-integer-field.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-area.js';
import '@vaadin/vaadin-text-field/theme/material/vaadin-text-area.js';
import '@vaadin/vaadin-select/src/vaadin-select.js';
import '@vaadin/vaadin-select/theme/lumo/vaadin-select.js';
import '@vaadin/vaadin-date-picker/vaadin-date-picker.js';
import '@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker.js';
import '@vaadin/vaadin-time-picker/vaadin-time-picker.js';
import '@vaadin/vaadin-time-picker/theme/lumo/vaadin-time-picker.js';
import '@vaadin/vaadin-combo-box/vaadin-combo-box.js';
import '@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box.js';
const genericInputStyles = css `

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
    display: none;
  }

  :host([invalid]) [part='input-field'] {
    background-color: transparent;
  }

  [part="error-message"] {
    font-size: var(--i2c-font-size-xs);
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
const squareInputStyles = css `

  :host(.square-input-style) {
    display: inline-flex;
    outline: none;
  }

  /*:host(vaadin-select-text-field)  [part="input-field"] {
    background-color: red;
  }*/

  :host(.square-input-style)::before {
    content: "\\2003";
    width: 0;
    display: inline-block;
  }

  :host(.square-input-style[hidden]) {
    display: none !important;
  }

  :host(.square-input-style) .vaadin-text-field-container,
  :host(.square-input-style) .vaadin-text-area-container {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-text-field-default-width, 12em);
  }

  :host(.square-input-style) [part="label"]:empty {
    display: none;
  }

  :host(.square-input-style) [part="input-field"] {
    display: flex;
    align-items: center;
    flex: auto;
  }

  :host(.square-input-style) .vaadin-text-field-container [part="input-field"] {
    flex-grow: 0;
  }

  :host(.square-input-style) [part="value"],
  :host(.square-input-style) [part="input-field"] ::slotted(input),
  :host(.square-input-style) [part="input-field"] ::slotted(textarea) {
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    font-size: 1em;
    line-height: normal;
    color: inherit;
    background-color: transparent;

    box-shadow: none;
  }

  :host(.square-input-style) [part="input-field"] ::slotted(*) {
    flex: none;
  }

  :host(.square-input-style) [part="value"],
  :host(.square-input-style) [part="input-field"] ::slotted(input),
  :host(.square-input-style) [part="input-field"] ::slotted(textarea),
  :host(.square-input-style) [part="input-field"] ::slotted([part="value"]) {
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  :host(.square-input-style) [part="input-field"] ::slotted(textarea) {
    resize: none;
  }

  :host(.square-input-style) [part="value"]::-ms-clear,
  :host(.square-input-style) [part="input-field"] ::slotted(input)::-ms-clear {
    display: none;
  }

  :host(.square-input-style) [part="clear-button"] {
    cursor: default;
  }

  :host(.square-input-style) [part="clear-button"]::before {
    content: "✕";
  }

  :host(.square-input-style) [part="label"] {
    align-self: flex-start;
    color: var(--cm-fields-lable-color);
    font-weight: 400;
    font-size: var(--i2c-font-size-xs);
    margin-left: calc(var(--i2c-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-bottom: var(--i2c-space-s);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    width: auto;
    box-sizing: border-box;

    top: 0;
    height: auto;
    margin-bottom: 0;
    transform-origin: left;
    transform: none;
  }

  :host(.square-input-style[has-label]:not([has-value]):not([focused]):not([invalid]):not([theme~="always-float-label"])) [part="label"] {
    transform: none;
    width: auto;
  }

  :host(.square-input-style[has-label])::before {
    margin-top: calc(var(--i2c-font-size-s) * 1.5);
  }

  :host(.square-input-style[has-label]) {
    padding-top: 0;
  }

  :host(.square-input-style[required]) [part="label"] {
    padding-right: 1em;
  }

  :host(.square-input-style) [part="label"]::after {
    content: var(--lumo-required-field-indicator, "•");
    transition: opacity 0.2s;
    opacity: 0;
    color: var(--i2c-blue-500);
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host(.square-input-style[required]:not([has-value])) [part="label"]::after {
    opacity: 1;
  }

  :host(.square-input-style[invalid]) [part="label"]::after {
    color: var(--cm-fields-error-text);
  }

  :host(.square-input-style) [part="error-message"] {
    margin-left: calc(var(--i2c-border-radius-m) / 4);
    font-size: var(--i2c-font-size-xs);
    line-height: var(--i2c-line-height-xs);
    color: var(--cm-fields-error-text);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host(.square-input-style[invalid]) [part$="button"] {
    color: var(--cm-fields-error-text);
    cursor: pointer;
  }

  :host(.square-input-style) [part="error-message"]:not(:empty)::before,
  :host(.square-input-style) [part="error-message"]:not(:empty)::after {
    content: "";
    display: block;
    height: 0.4em;
  }

  :host(.square-input-style:not([invalid])) [part="error-message"] {
    max-height: 0;
    overflow: hidden;
  }

  :host(.square-input-style[dir="rtl"]) [part="label"] {
    margin-left: 0;
    margin-right: calc(var(--i2c-border-radius-m) / 4);
  }

  :host(.square-input-style[required][dir="rtl"]) [part="label"] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host(.square-input-style[dir="rtl"]) [part="label"]::after {
    right: auto;
    left: 0;
  }

  :host(.square-input-style[dir="rtl"]) [part="error-message"] {
    margin-left: 0;
    margin-right: calc(var(--i2c-border-radius-m) / 4);
  }

  :host(.square-input-style) [part$="button"] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--i2c-icon-size-m);
    text-align: center;
    color: var(--i2c-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  :host(.square-input-style:not([readonly])) [part$="button"]:hover {
    color: var(--i2c-contrast-90pct);
  }

  :host(.square-input-style[disabled]) [part$="button"], :host([readonly]) [part$="button"] {
    color: var(--i2c-contrast-20pct);
  }

  :host(.square-input-style) [part$="button"]::before {
    font-family: "lumo-icons";
    display: block;
  }

  :host(.square-input-style) {
    --i2c-text-field-size: var(--i2c-size-m);
    color: var(--cm-field-fg);
    font-size: var(--i2c-font-size-s);
    font-family: var(--i2c-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    margin: 0 0 var(--i2c-space-m) 0;
    padding: 0;
  }

  :host(.square-input-style):last-child {
    margin: 0 0 0 0;
  }

  :host(.square-input-style)::before {
    height: var(--i2c-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host(.square-input-style[focused]:not([readonly])) [part="label"] {
    color: var(--cm-fields-lable-focused-color);
  }

  :host(.square-input-style[focused]:not([readonly])) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--cm-fields-focused);
  }

  :host(.square-input-style[has-helper]) [part="helper-text"]::before {
    content: "";
    display: block;
    height: 0.4em;
  }

  :host(.square-input-style) [part="helper-text"],
  :host(.square-input-style) [part="helper-text"] ::slotted(*) {
    display: block;
    color: var(--i2c-secondary-text-color);
    font-size: var(--i2c-font-size-xs);
    line-height: var(--i2c-line-height-xs);
    margin-left: calc(var(--i2c-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(.square-input-style) [part="value"],
  :host(.square-input-style) [part="input-field"] ::slotted(input),
  :host(.square-input-style) [part="input-field"] ::slotted(textarea),
  :host(.square-input-style) [part="input-field"] ::slotted([part="value"]) {
    cursor: inherit;
    min-height: var(--i2c-text-field-size);
    padding: 0 0.25em;
    --_i2c-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
    -webkit-mask-image: var(--_i2c-text-field-overflow-mask-image);
  }

  :host(.square-input-style) [part="value"]:focus,
  :host(.square-input-style[focused]) [part="input-field"] ::slotted(input),
  :host(.square-input-style[focused]) [part="input-field"] ::slotted(textarea) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(.square-input-style) [part="value"],
    :host(.square-input-style) [part="input-field"] ::slotted(input),
    :host(.square-input-style) [part="input-field"] ::slotted(textarea),
    :host(.square-input-style) [part="input-field"] ::slotted([part="value"]) {
      mask-image: var(--_i2c-text-field-overflow-mask-image);
    }

  }

  :host(.square-input-style) [part="value"]::-webkit-input-placeholder {
    color: inherit;
    transition: opacity 0.175s 0.05s;
    opacity: 0.5;
  }

  :host(.square-input-style) [part="value"]:-ms-input-placeholder {
    color: inherit;
    opacity: 0.5;
  }

  :host(.square-input-style) [part="value"]::-moz-placeholder {
    color: inherit;
    transition: opacity 0.175s 0.05s;
    opacity: 0.5;
  }

  :host(.square-input-style) [part="value"]::placeholder {
    color: inherit;
    transition: opacity 0.175s 0.1s;
    opacity: 0.5;
  }

  :host(.square-input-style) [part="input-field"] {
    border-radius: var(--i2c-border-radius);
    background-color: var(--cm-field-bg);
    padding: 0 calc(0.375em + var(--i2c-border-radius) / 4 - 1px);
    font-weight: 400;
    line-height: 1;
    position: relative;
    cursor: text;
    box-sizing: border-box;
    height: inherit;
    box-shadow: inset 0 0 0 1px var(--cm-fields-border-bg);
    box-sizing: border-box;
  }

  :host(.square-input-style) [part="input-field"]::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    pointer-events: none;
    background-color: var(--i2c-contrast-50pct);
    opacity: 0;
    transition: transform 0.15s, opacity 0.2s;
    transform-origin: 100% 0;
    height: auto;
    transform: none;
    display: none;
  }

  :host(.square-input-style) [part="input-field"]::before {
    content: '';
    height: auto;
    display: none;
  }

  :host(.square-input-style:hover:not([readonly]):not([focused])) [part="label"],
  :host(.square-input-style:hover:not([readonly])) [part="helper-text"],
  :host(.square-input-style:hover:not([readonly])) [part="helper-text"] ::slotted(*) {
    color: var(--i2c-body-text-color);
  }

  :host(.square-input-style:hover:not([readonly]):not([focused])) [part="input-field"]::after {
    opacity: 0.1;
  }

  @media (pointer: coarse) {
    :host(.square-input-style:hover:not([readonly]):not([focused])) [part="label"] {
      color: var(--i2c-secondary-text-color);
    }

    :host(.square-input-style:hover:not([readonly]):not([focused])) [part="input-field"]::after {
      opacity: 0;
    }

    :host(.square-input-style:active:not([readonly]):not([focused])) [part="input-field"]::after {
      opacity: 0.2;
    }

  }

  :host(.square-input-style[focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  :host(.square-input-style[focus-ring]) [part="input-field"] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host(.square-input-style[readonly]) [part="value"]::-webkit-input-placeholder, :host([disabled]) [part="value"]::-webkit-input-placeholder {
    opacity: 0;
  }

  :host(.square-input-style[readonly]) [part="value"]:-ms-input-placeholder, :host([disabled]) [part="value"]:-ms-input-placeholder {
    opacity: 0;
  }

  :host(.square-input-style[readonly]) [part="value"]::-moz-placeholder, :host([disabled]) [part="value"]::-moz-placeholder {
    opacity: 0;
  }

  :host(.square-input-style[readonly]) [part="value"]::placeholder, :host([disabled]) [part="value"]::placeholder {
    opacity: 0;
  }

  :host(.square-input-style[readonly]) [part="input-field"] {
    color: var(--i2c-secondary-text-color);
    background-color: transparent;
    cursor: default;
    box-shadow: none;
  }

  :host(.square-input-style[readonly]) [part="input-field"]::after {
    background-color: transparent;
    opacity: 1;
    border: 1px dashed var(--i2c-contrast-30pct);
  }

  :host(.square-input-style[disabled]) {
    pointer-events: none;
  }

  :host(.square-input-style[disabled]) [part="input-field"] {
    background-color: var(--cm-fields-disabled-bg);
    box-shadow: inset 0 0 0 1px var(--cm-fields-disabled-border);
  }

  :host(.square-input-style[disabled]) [part="label"],
  :host(.square-input-style[disabled]) [part="helper-text"],
  :host(.square-input-style[disabled]) [part="value"],
  :host(.square-input-style[disabled]) [part="input-field"] ::slotted(*) {
    color: var(--i2c-disabled-text-color);
    -webkit-text-fill-color: var(--i2c-disabled-text-color);
  }


  :host(.square-input-style[invalid]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--cm-fields-error-text);
  }

  :host(.square-input-style[focused][invalid]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--cm-fields-error-text);
  }

  :host(.square-input-style[focused][invalid]) [part="label"]  {
    color: var(--cm-fields-error-text);
  }

  :host(.square-input-style[invalid]) [part="input-field"]::after {
    box-shadow: inset 0 0 0 1px var(--cm-fields-error-text);
  }

  :host(.square-input-style[invalid][focus-ring]) [part="input-field"] {
    box-shadow: 0 0 0 2px var(--i2c-error-color-50pct);
  }

  :host(.square-input-style[highlight]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--i2c-orange-500);
    background-color: var(--i2c-orange-50);
  }

  :host(.square-input-style[focused][highlight]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--i2c-orange-500);
  }

  :host(.square-input-style[focused][highlight]) [part="label"]  {
    color: var(--i2c-orange-500);
  }

  :host(.square-input-style[highlight][focus-ring]) [part="input-field"] {
    box-shadow: 0 0 0 2px var(--i2c-orange-500);
  }

  :host(.square-input-style[input-prevented]) [part="input-field"] {
    color: var(--i2c-error-text-color);
  }

  :host(.square-input-style[theme~="small"]) {
    font-size: var(--i2c-font-size-s);
    --i2c-text-field-size: var(--i2c-size-s);
  }

  :host(.square-input-style[theme~="small"][has-label]) [part="label"] {
    font-size: var(--i2c-font-size-xs);
  }

  :host(.square-input-style[theme~="small"][has-label]) [part="error-message"] {
    font-size: var(--i2c-font-size-xs);
  }

  :host(.square-input-style[theme~="align-left"]) [part="value"] {
    text-align: left;
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(.square-input-style[theme~="align-center"]) [part="value"] {
    text-align: center;
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(.square-input-style[theme~="align-right"]) [part="value"] {
    text-align: right;
    --_i2c-text-field-overflow-mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(.square-input-style[theme~="align-right"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
    }

  }

  @-moz-document url-prefix() {
    :host(.square-input-style[theme~="align-left"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
    }

  }

  :host(.square-input-style[has-helper][theme~="helper-above-field"]) [part="helper-text"]::before {
    display: none;
  }

  :host(.square-input-style[has-helper][theme~="helper-above-field"]) [part="helper-text"]::after {
    content: "";
    display: block;
    height: 0.4em;
  }

  :host(.square-input-style[has-helper][theme~="helper-above-field"]) [part="label"] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host(.square-input-style[has-helper][theme~="helper-above-field"]) [part="helper-text"] {
    order: 1;
  }

  :host(.square-input-style[has-helper][theme~="helper-above-field"]) [part="input-field"] {
    order: 2;
  }

  :host(.square-input-style[has-helper][theme~="helper-above-field"]) [part="error-message"] {
    order: 3;
  }

  :host(.square-input-style) [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
    color: var(--i2c-secondary-text-color);
    font-weight: 400;
  }

  :host(.square-input-style) [part="input-field"] ::slotted(iron-icon) {
    color: var(--i2c-contrast-60pct);
    width: var(--i2c-icon-size-m);
    height: var(--i2c-icon-size-m);
  }

  :host(.square-input-style) [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  :host(.square-input-style) [part="clear-button"]::before {
    content: var(--lumo-icons-cross);
  }

  :host(.square-input-style[dir="rtl"]) [part="input-field"]::after {
    transform-origin: 0% 0;
  }

  :host(.square-input-style[dir="rtl"]) [part="value"],
  :host(.square-input-style[dir="rtl"]) [part="input-field"] ::slotted(input),
  :host(.square-input-style[dir="rtl"]) [part="input-field"] ::slotted(textarea) {
    --_i2c-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
  }

  :host(.square-input-style[dir="rtl"]) [part="value"]:focus,
  :host(.square-input-style[focused][dir="rtl"]) [part="input-field"] ::slotted(input),
  :host(.square-input-style[focused][dir="rtl"]) [part="input-field"] ::slotted(textarea) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(.square-input-style[dir="rtl"]) [part="value"],
    :host(.square-input-style[dir="rtl"]) [part="input-field"] ::slotted(input),
    :host(.square-input-style[dir="rtl"]) [part="input-field"] ::slotted(textarea),
    :host(.square-input-style[dir="rtl"]) [part="input-field"] ::slotted([part="value"]) {
      mask-image: var(--_i2c-text-field-overflow-mask-image);
    }

  }

  :host(.square-input-style[theme~="align-left"][dir="rtl"]) [part="value"] {
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(.square-input-style[theme~="align-center"][dir="rtl"]) [part="value"] {
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(.square-input-style[theme~="align-right"][dir="rtl"]) [part="value"] {
    --_i2c-text-field-overflow-mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(.square-input-style[theme~="align-right"][dir="rtl"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
    }

  }

  @-moz-document url-prefix() {
    :host(.square-input-style[theme~="align-left"][dir="rtl"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
    }

  }

  :host(.square-input-style .custom-style) [part="input-field"] {
    border: 1px solid #ccc;
    background-color: #fff;
  }

  :host(.square-input-style[focused].custom-style) [part="input-field"] {
    border-color: #aaa;
  }


  /**--Password Field Style--**/
  :host(.square-input-style) [part="reveal-button"]::before {
    content: var(--lumo-icons-eye);
  }

  :host(.square-input-style[password-visible]) [part="reveal-button"]::before {
    content: var(--lumo-icons-eye-disabled);
  }

  /* Make it easy to hide the button across the whole app */
  :host(.square-input-style) [part="reveal-button"] {
    display: var(--lumo-password-field-reveal-button-display, block);
  }

  /* FIXME: ShadyCSS workaround for slotted input in Edge */
  :host(.square-input-style) [part="input-field"] ::slotted(input)::-ms-reveal {
    display: none;
  }

  /*--select--*/
  :host(vaadin-select-text-field) {
    display: inline-flex;
    outline: none;
  }

  /*:host(vaadin-select-text-field) [part="input-field"] {
    background-color: red;
  }*/

  :host(vaadin-select-text-field)::before {
    content: "\\2003";
    width: 0;
    display: inline-block;
  }

  :host(vaadin-select-text-field[hidden]) {
    display: none !important;
  }

  :host(vaadin-select-text-field) .vaadin-text-field-container,
  :host(vaadin-select-text-field) .vaadin-text-area-container {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-text-field-default-width, 12em);
  }

  :host(vaadin-select-text-field) [part="label"]:empty {
    display: none;
  }

  :host(vaadin-select-text-field) [part="input-field"] {
    display: flex;
    align-items: center;
    flex: auto;
  }

  :host(vaadin-select-text-field) .vaadin-text-field-container [part="input-field"] {
    flex-grow: 0;
  }

  :host(vaadin-select-text-field) [part="value"],
  :host(vaadin-select-text-field) [part="input-field"] ::slotted(input),
  :host(vaadin-select-text-field) [part="input-field"] ::slotted(textarea) {
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    font-size: 1em;
    line-height: normal;
    color: inherit;
    background-color: transparent;

    box-shadow: none;
  }

  :host(vaadin-select-text-field) [part="input-field"] ::slotted(*) {
    flex: none;
  }

  :host(vaadin-select-text-field) [part="value"],
  :host(vaadin-select-text-field) [part="input-field"] ::slotted(input),
  :host(vaadin-select-text-field) [part="input-field"] ::slotted(textarea),
  :host(vaadin-select-text-field) [part="input-field"] ::slotted([part="value"]) {
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  :host(vaadin-select-text-field) [part="input-field"] ::slotted(textarea) {
    resize: none;
  }

  :host(vaadin-select-text-field) [part="value"]::-ms-clear,
  :host(vaadin-select-text-field) [part="input-field"] ::slotted(input)::-ms-clear {
    display: none;
  }

  :host(vaadin-select-text-field) [part="clear-button"] {
    cursor: default;
  }

  :host(vaadin-select-text-field) [part="clear-button"]::before {
    content: "✕";
  }

  :host(vaadin-select-text-field) [part="label"] {
    align-self: flex-start;
    color: var(--cm-fields-lable-color);
    font-weight: 400;
    font-size: var(--i2c-font-size-xs);
    margin-left: calc(var(--i2c-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-bottom: var(--i2c-space-s);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    width: auto;
    box-sizing: border-box;

    top: 0;
    height: auto;
    margin-bottom: 0;
    transform-origin: left;
    transform: none;
  }

  :host(vaadin-select-text-field[has-label]:not([has-value]):not([focused]):not([invalid]):not([theme~="always-float-label"])) [part="label"] {
    transform: none;
    width: auto;
  }

  :host(vaadin-select-text-field[has-label])::before {
    margin-top: calc(var(--i2c-font-size-s) * 1.5);
  }

  :host(vaadin-select-text-field[has-label]) {
    padding-top: 0;
  }

  :host(vaadin-select-text-field[required]) [part="label"] {
    padding-right: 1em;
  }

  :host(vaadin-select-text-field) [part="label"]::after {
    content: var(--lumo-required-field-indicator, "•");
    transition: opacity 0.2s;
    opacity: 0;
    color: var(--i2c-blue-500);
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host(vaadin-select-text-field[required]:not([has-value])) [part="label"]::after {
    opacity: 1;
  }

  :host(vaadin-select-text-field[invalid]) [part="label"]::after {
    color: var(--cm-fields-error-text);
  }

  :host(vaadin-select-text-field) [part="error-message"] {
    margin-left: calc(var(--i2c-border-radius-m) / 4);
    font-size: var(--i2c-font-size-xs);
    line-height: var(--i2c-line-height-xs);
    color: var(--cm-fields-error-text);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host(vaadin-select-text-field[invalid]) [part$="button"] {
    color: var(--cm-fields-error-text);
    cursor: pointer;
  }

  :host(vaadin-select-text-field) [part="error-message"]:not(:empty)::before,
  :host(vaadin-select-text-field) [part="error-message"]:not(:empty)::after {
    content: "";
    display: block;
    height: 0.4em;
  }

  :host(vaadin-select-text-field:not([invalid])) [part="error-message"] {
    max-height: 0;
    overflow: hidden;
  }

  :host(vaadin-select-text-field[dir="rtl"]) [part="label"] {
    margin-left: 0;
    margin-right: calc(var(--i2c-border-radius-m) / 4);
  }

  :host(vaadin-select-text-field[required][dir="rtl"]) [part="label"] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host(vaadin-select-text-field[dir="rtl"]) [part="label"]::after {
    right: auto;
    left: 0;
  }

  :host(vaadin-select-text-field[dir="rtl"]) [part="error-message"] {
    margin-left: 0;
    margin-right: calc(var(--i2c-border-radius-m) / 4);
  }

  :host(vaadin-select-text-field) [part$="button"] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--i2c-icon-size-m);
    text-align: center;
    color: var(--i2c-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  :host(vaadin-select-text-field:not([readonly])) [part$="button"]:hover {
    color: var(--i2c-contrast-90pct);
  }

  :host(vaadin-select-text-field[disabled]) [part$="button"], :host([readonly]) [part$="button"] {
    color: var(--i2c-contrast-20pct);
  }

  :host(vaadin-select-text-field) [part$="button"]::before {
    font-family: "lumo-icons";
    display: block;
  }

  :host(vaadin-select-text-field) {
    --i2c-text-field-size: var(--i2c-size-m);
    color: var(--cm-field-fg);
    font-size: var(--i2c-font-size-s);
    font-family: var(--i2c-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    margin: 0 0 var(--i2c-space-m) 0;
    padding: 0;
  }

  :host(vaadin-select-text-field):last-child {
    margin: 0 0 0 0;
  }

  :host(vaadin-select-text-field)::before {
    height: var(--i2c-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host(vaadin-select-text-field[focused]:not([readonly])) [part="label"] {
    color: var(--cm-fields-lable-focused-color);
  }

  :host(vaadin-select-text-field[focused]:not([readonly])) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--cm-fields-focused);
  }

  :host(vaadin-select-text-field[has-helper]) [part="helper-text"]::before {
    content: "";
    display: block;
    height: 0.4em;
  }

  :host(vaadin-select-text-field) [part="helper-text"],
  :host(vaadin-select-text-field) [part="helper-text"] ::slotted(*) {
    display: block;
    color: var(--i2c-secondary-text-color);
    font-size: var(--i2c-font-size-xs);
    line-height: var(--i2c-line-height-xs);
    margin-left: calc(var(--i2c-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(vaadin-select-text-field) [part="value"],
  :host(vaadin-select-text-field) [part="input-field"] ::slotted(input),
  :host(vaadin-select-text-field) [part="input-field"] ::slotted(textarea),
  :host(vaadin-select-text-field) [part="input-field"] ::slotted([part="value"]) {
    cursor: inherit;
    min-height: var(--i2c-text-field-size);
    padding: 0 0.25em;
    --_i2c-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
    -webkit-mask-image: var(--_i2c-text-field-overflow-mask-image);
  }

  :host(vaadin-select-text-field) [part="value"]:focus,
  :host(vaadin-select-text-field[focused]) [part="input-field"] ::slotted(input),
  :host(vaadin-select-text-field[focused]) [part="input-field"] ::slotted(textarea) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(vaadin-select-text-field) [part="value"],
    :host(vaadin-select-text-field) [part="input-field"] ::slotted(input),
    :host(vaadin-select-text-field) [part="input-field"] ::slotted(textarea),
    :host(vaadin-select-text-field) [part="input-field"] ::slotted([part="value"]) {
      mask-image: var(--_i2c-text-field-overflow-mask-image);
    }

  }

  :host(vaadin-select-text-field) [part="value"]::-webkit-input-placeholder {
    color: inherit;
    transition: opacity 0.175s 0.05s;
    opacity: 0.5;
  }

  :host(vaadin-select-text-field) [part="value"]:-ms-input-placeholder {
    color: inherit;
    opacity: 0.5;
  }

  :host(vaadin-select-text-field) [part="value"]::-moz-placeholder {
    color: inherit;
    transition: opacity 0.175s 0.05s;
    opacity: 0.5;
  }

  :host(vaadin-select-text-field) [part="value"]::placeholder {
    color: inherit;
    transition: opacity 0.175s 0.1s;
    opacity: 0.5;
  }

  :host(vaadin-select-text-field) [part="input-field"] {
    border-radius: var(--i2c-border-radius);
    background-color: var(--cm-field-bg);
    padding: 0 calc(0.375em + var(--i2c-border-radius) / 4 - 1px);
    font-weight: 400;
    line-height: 1;
    position: relative;
    cursor: text;
    box-sizing: border-box;
    height: inherit;
    box-shadow: inset 0 0 0 1px var(--cm-fields-border-bg);
    box-sizing: border-box;
  }

  :host(vaadin-select-text-field) [part="input-field"]::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    pointer-events: none;
    background-color: transparent;
    opacity: 0;
    transition: transform 0.15s, opacity 0.2s;
    transform-origin: 100% 0;
    height: auto;
    transform: none;
  }

  :host(vaadin-select-text-field) [part="input-field"]::before {
    content: '';
    height: auto;
    display: none;
  }

  :host(vaadin-select-text-field:hover:not([readonly]):not([focused])) [part="label"],
  :host(vaadin-select-text-field:hover:not([readonly])) [part="helper-text"],
  :host(vaadin-select-text-field:hover:not([readonly])) [part="helper-text"] ::slotted(*) {
    color: var(--i2c-body-text-color);
  }

  :host(vaadin-select-text-field:hover:not([readonly]):not([focused])) [part="input-field"]::after {
    opacity: 0.1;
  }

  @media (pointer: coarse) {
    :host(vaadin-select-text-field:hover:not([readonly]):not([focused])) [part="label"] {
      color: var(--i2c-secondary-text-color);
    }

    :host(vaadin-select-text-field:hover:not([readonly]):not([focused])) [part="input-field"]::after {
      opacity: 0;
    }

    :host(vaadin-select-text-field:active:not([readonly]):not([focused])) [part="input-field"]::after {
      opacity: 0.2;
    }

  }

  :host(vaadin-select-text-field[focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  :host(vaadin-select-text-field[focus-ring]) [part="input-field"] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host(vaadin-select-text-field[readonly]) [part="value"]::-webkit-input-placeholder, :host([disabled]) [part="value"]::-webkit-input-placeholder {
    opacity: 0;
  }

  :host(vaadin-select-text-field[readonly]) [part="value"]:-ms-input-placeholder, :host([disabled]) [part="value"]:-ms-input-placeholder {
    opacity: 0;
  }

  :host(vaadin-select-text-field[readonly]) [part="value"]::-moz-placeholder, :host([disabled]) [part="value"]::-moz-placeholder {
    opacity: 0;
  }

  :host(vaadin-select-text-field[readonly]) [part="value"]::placeholder, :host([disabled]) [part="value"]::placeholder {
    opacity: 0;
  }

  :host(vaadin-select-text-field[readonly]) [part="input-field"] {
    color: var(--i2c-secondary-text-color);
    background-color: transparent;
    cursor: default;
    box-shadow: none;
  }

  :host(vaadin-select-text-field[readonly]) [part="input-field"]::after {
    background-color: transparent;
    opacity: 1;
    border: 1px dashed var(--i2c-contrast-30pct);
  }

  :host(.vaadin-select-text-field[disabled]) {
    pointer-events: none;
  }

  :host(vaadin-select-text-field[disabled]) [part="input-field"] {
    background-color: var(--cm-fields-disabled-bg);
    box-shadow: inset 0 0 0 1px var(--cm-fields-disabled-border);
  }

  :host(vaadin-select-text-field[disabled]) [part="label"],
  :host(vaadin-select-text-field[disabled]) [part="helper-text"],
  :host(vaadin-select-text-field[disabled]) [part="value"],
  :host(vaadin-select-text-field[disabled]) [part="input-field"] ::slotted(*) {
    color: var(--i2c-disabled-text-color);
    -webkit-text-fill-color: var(--i2c-disabled-text-color);
  }


  :host(vaadin-select-text-field[invalid]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--cm-fields-error-text);
  }

  :host(vaadin-select-text-field[focused][invalid]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--cm-fields-error-text);
  }

  :host(vaadin-select-text-field[focused][invalid]) [part="label"] {
    color: var(--cm-fields-error-text);
  }

  :host(vaadin-select-text-field[invalid]) [part="input-field"]::after {
    box-shadow: inset 0 0 0 1px var(--cm-fields-error-text);
  }

  :host(vaadin-select-text-field[invalid][focus-ring]) [part="input-field"] {
    box-shadow: 0 0 0 2px var(--i2c-error-color-50pct);
  }

  :host(vaadin-select-text-field[highlight]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--i2c-orange-500);
    background-color: var(--i2c-orange-50);
  }

  :host(vaadin-select-text-field[focused][highlight]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--i2c-orange-500);
  }

  :host(vaadin-select-text-field[focused][highlight]) [part="label"] {
    color: var(--i2c-orange-500);
  }

  :host(vaadin-select-text-field[highlight][focus-ring]) [part="input-field"] {
    box-shadow: 0 0 0 2px var(--i2c-orange-500);
  }

  :host(vaadin-select-text-field[input-prevented]) [part="input-field"] {
    color: var(--i2c-error-text-color);
  }

  :host(vaadin-select-text-field[theme~="small"]) {
    font-size: var(--i2c-font-size-s);
    --i2c-text-field-size: var(--i2c-size-s);
  }

  :host(vaadin-select-text-field[theme~="small"][has-label]) [part="label"] {
    font-size: var(--i2c-font-size-xs);
  }

  :host(vaadin-select-text-field[theme~="small"][has-label]) [part="error-message"] {
    font-size: var(--i2c-font-size-xs);
  }

  :host(vaadin-select-text-field[theme~="align-left"]) [part="value"] {
    text-align: left;
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(vaadin-select-text-field[theme~="align-center"]) [part="value"] {
    text-align: center;
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(vaadin-select-text-field[theme~="align-right"]) [part="value"] {
    text-align: right;
    --_i2c-text-field-overflow-mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(vaadin-select-text-field[theme~="align-right"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
    }

  }

  @-moz-document url-prefix() {
    :host(vaadin-select-text-field[theme~="align-left"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
    }

  }

  :host(vaadin-select-text-field[has-helper][theme~="helper-above-field"]) [part="helper-text"]::before {
    display: none;
  }

  :host(vaadin-select-text-field[has-helper][theme~="helper-above-field"]) [part="helper-text"]::after {
    content: "";
    display: block;
    height: 0.4em;
  }

  :host(vaadin-select-text-field[has-helper][theme~="helper-above-field"]) [part="label"] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host(vaadin-select-text-field[has-helper][theme~="helper-above-field"]) [part="helper-text"] {
    order: 1;
  }

  :host(vaadin-select-text-field[has-helper][theme~="helper-above-field"]) [part="input-field"] {
    order: 2;
  }

  :host(vaadin-select-text-field[has-helper][theme~="helper-above-field"]) [part="error-message"] {
    order: 3;
  }

  :host(vaadin-select-text-field) [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
    color: var(--i2c-secondary-text-color);
    font-weight: 400;
  }

  :host(vaadin-select-text-field) [part="input-field"] ::slotted(iron-icon) {
    color: var(--i2c-contrast-60pct);
    width: var(--i2c-icon-size-m);
    height: var(--i2c-icon-size-m);
  }

  :host(vaadin-select-text-field) [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  :host(vaadin-select-text-field) [part="clear-button"]::before {
    content: var(--lumo-icons-cross);
  }

  :host(vaadin-select-text-field[dir="rtl"]) [part="input-field"]::after {
    transform-origin: 0% 0;
  }

  :host(vaadin-select-text-field[dir="rtl"]) [part="value"],
  :host(vaadin-select-text-field[dir="rtl"]) [part="input-field"] ::slotted(input),
  :host(vaadin-select-text-field[dir="rtl"]) [part="input-field"] ::slotted(textarea) {
    --_i2c-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
  }

  :host(vaadin-select-text-field[dir="rtl"]) [part="value"]:focus,
  :host(vaadin-select-text-field[focused][dir="rtl"]) [part="input-field"] ::slotted(input),
  :host(vaadin-select-text-field[focused][dir="rtl"]) [part="input-field"] ::slotted(textarea) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(vaadin-select-text-field[dir="rtl"]) [part="value"],
    :host(vaadin-select-text-field[dir="rtl"]) [part="input-field"] ::slotted(input),
    :host(vaadin-select-text-field[dir="rtl"]) [part="input-field"] ::slotted(textarea),
    :host(vaadin-select-text-field[dir="rtl"]) [part="input-field"] ::slotted([part="value"]) {
      mask-image: var(--_i2c-text-field-overflow-mask-image);
    }

  }

  :host(vaadin-select-text-field[theme~="align-left"][dir="rtl"]) [part="value"] {
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(vaadin-select-text-field[theme~="align-center"][dir="rtl"]) [part="value"] {
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(vaadin-select-text-field[theme~="align-right"][dir="rtl"]) [part="value"] {
    --_i2c-text-field-overflow-mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(vaadin-select-text-field[theme~="align-right"][dir="rtl"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
    }

  }

  @-moz-document url-prefix() {
    :host(vaadin-select-text-field[theme~="align-left"][dir="rtl"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
    }

  }

  :host(vaadin-select-text-field .custom-style) [part="input-field"] {
    border: 1px solid #ccc;
    background-color: #fff;
  }

  :host(vaadin-select-text-field[focused].custom-style) [part="input-field"] {
    border-color: #aaa;
  }

  /*--DatePicker--*/

  :host(vaadin-date-picker-text-field) {
    display: inline-flex;
    outline: none;
  }

  /*:host(vaadin-date-picker-text-field) [part="input-field"] {
    background-color: red;
  }*/

  :host(vaadin-date-picker-text-field)::before {
    content: "\\2003";
    width: 0;
    display: inline-block;
  }

  :host(vaadin-date-picker-text-field[hidden]) {
    display: none !important;
  }

  :host(vaadin-date-picker-text-field) .vaadin-text-field-container,
  :host(vaadin-date-picker-text-field) .vaadin-text-area-container {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-text-field-default-width, 12em);
  }

  :host(vaadin-date-picker-text-field) [part="label"]:empty {
    display: none;
  }

  :host(vaadin-date-picker-text-field) [part="input-field"] {
    display: flex;
    align-items: center;
    flex: auto;
  }

  :host(vaadin-date-picker-text-field) .vaadin-text-field-container [part="input-field"] {
    flex-grow: 0;
  }

  :host(vaadin-date-picker-text-field) [part="value"],
  :host(vaadin-date-picker-text-field) [part="input-field"] ::slotted(input),
  :host(vaadin-date-picker-text-field) [part="input-field"] ::slotted(textarea) {
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    font-size: 1em;
    line-height: normal;
    color: inherit;
    background-color: transparent;

    box-shadow: none;
  }

  :host(vaadin-date-picker-text-field) [part="input-field"] ::slotted(*) {
    flex: none;
  }

  :host(vaadin-date-picker-text-field) [part="value"],
  :host(vaadin-date-picker-text-field) [part="input-field"] ::slotted(input),
  :host(vaadin-date-picker-text-field) [part="input-field"] ::slotted(textarea),
  :host(vaadin-date-picker-text-field) [part="input-field"] ::slotted([part="value"]) {
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  :host(vaadin-date-picker-text-field) [part="input-field"] ::slotted(textarea) {
    resize: none;
  }

  :host(vaadin-date-picker-text-field) [part="value"]::-ms-clear,
  :host(vaadin-date-picker-text-field) [part="input-field"] ::slotted(input)::-ms-clear {
    display: none;
  }

  :host(vaadin-date-picker-text-field) [part="clear-button"] {
    cursor: default;
  }

  :host(vaadin-date-picker-text-field) [part="clear-button"]::before {
    content: "✕";
  }

  :host(vaadin-date-picker-text-field) [part="label"] {
    align-self: flex-start;
    color: var(--cm-fields-lable-color);
    font-weight: 400;
    font-size: var(--i2c-font-size-xs);
    margin-left: calc(var(--i2c-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-bottom: var(--i2c-space-s);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    width: auto;
    box-sizing: border-box;

    top: 0;
    height: auto;
    margin-bottom: 0;
    transform-origin: left;
    transform: none;
  }

  :host(vaadin-date-picker-text-field[has-label]:not([has-value]):not([focused]):not([invalid]):not([theme~="always-float-label"])) [part="label"] {
    transform: none;
    width: auto;
  }

  :host(vaadin-date-picker-text-field[has-label])::before {
    margin-top: calc(var(--i2c-font-size-s) * 1.5);
  }

  :host(vaadin-date-picker-text-field[has-label]) {
    padding-top: 0;
  }

  :host(vaadin-date-picker-text-field[required]) [part="label"] {
    padding-right: 1em;
  }

  :host(vaadin-date-picker-text-field) [part="label"]::after {
    content: var(--lumo-required-field-indicator, "•");
    transition: opacity 0.2s;
    opacity: 0;
    color: var(--i2c-blue-500);
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host(vaadin-date-picker-text-field[required]:not([has-value])) [part="label"]::after {
    opacity: 1;
  }

  :host(vaadin-date-picker-text-field[invalid]) [part="label"]::after {
    color: var(--cm-fields-error-text);
  }

  :host(vaadin-date-picker-text-field) [part="error-message"] {
    margin-left: calc(var(--i2c-border-radius-m) / 4);
    font-size: var(--i2c-font-size-xs);
    line-height: var(--i2c-line-height-xs);
    color: var(--cm-fields-error-text);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host(vaadin-date-picker-text-field[invalid]) [part$="button"] {
    color: var(--cm-fields-error-text);
    cursor: pointer;
  }

  :host(vaadin-date-picker-text-field) [part="error-message"]:not(:empty)::before,
  :host(vaadin-date-picker-text-field) [part="error-message"]:not(:empty)::after {
    content: "";
    display: block;
    height: 0.4em;
  }

  :host(vaadin-date-picker-text-field:not([invalid])) [part="error-message"] {
    max-height: 0;
    overflow: hidden;
  }

  :host(vaadin-date-picker-text-field[dir="rtl"]) [part="label"] {
    margin-left: 0;
    margin-right: calc(var(--i2c-border-radius-m) / 4);
  }

  :host(vaadin-date-picker-text-field[required][dir="rtl"]) [part="label"] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host(vaadin-date-picker-text-field[dir="rtl"]) [part="label"]::after {
    right: auto;
    left: 0;
  }

  :host(vaadin-date-picker-text-field[dir="rtl"]) [part="error-message"] {
    margin-left: 0;
    margin-right: calc(var(--i2c-border-radius-m) / 4);
  }

  :host(vaadin-date-picker-text-field) [part$="button"] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--i2c-icon-size-m);
    text-align: center;
    color: var(--i2c-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  :host(vaadin-date-picker-text-field:not([readonly])) [part$="button"]:hover {
    color: var(--i2c-contrast-90pct);
  }

  :host(vaadin-date-picker-text-field[disabled]) [part$="button"], :host([readonly]) [part$="button"] {
    color: var(--i2c-contrast-20pct);
  }

  :host(vaadin-date-picker-text-field) [part$="button"]::before {
    font-family: "lumo-icons";
    display: block;
  }

  :host(vaadin-date-picker-text-field) {
    --i2c-text-field-size: var(--i2c-size-m);
    color: var(--cm-field-fg);
    font-size: var(--i2c-font-size-s);
    font-family: var(--i2c-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    margin: 0 0 var(--i2c-space-m) 0;
    padding: 0;
  }

  :host(vaadin-date-picker-text-field):last-child {
    margin: 0 0 0 0;
  }

  :host(vaadin-date-picker-text-field)::before {
    height: var(--i2c-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host(vaadin-date-picker-text-field[focused]:not([readonly])) [part="label"] {
    color: var(--cm-fields-lable-focused-color);
  }

  :host(vaadin-date-picker-text-field[focused]:not([readonly])) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--cm-fields-focused);
  }

  :host(vaadin-date-picker-text-field[has-helper]) [part="helper-text"]::before {
    content: "";
    display: block;
    height: 0.4em;
  }

  :host(vaadin-date-picker-text-field) [part="helper-text"],
  :host(vaadin-date-picker-text-field) [part="helper-text"] ::slotted(*) {
    display: block;
    color: var(--i2c-secondary-text-color);
    font-size: var(--i2c-font-size-xs);
    line-height: var(--i2c-line-height-xs);
    margin-left: calc(var(--i2c-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(vaadin-date-picker-text-field) [part="value"],
  :host(vaadin-date-picker-text-field) [part="input-field"] ::slotted(input),
  :host(vaadin-date-picker-text-field) [part="input-field"] ::slotted(textarea),
  :host(vaadin-date-picker-text-field) [part="input-field"] ::slotted([part="value"]) {
    cursor: inherit;
    min-height: var(--i2c-text-field-size);
    padding: 0 0.25em;
    --_i2c-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
    -webkit-mask-image: var(--_i2c-text-field-overflow-mask-image);
  }

  :host(vaadin-date-picker-text-field) [part="value"]:focus,
  :host(vaadin-date-picker-text-field[focused]) [part="input-field"] ::slotted(input),
  :host(vaadin-date-picker-text-field[focused]) [part="input-field"] ::slotted(textarea) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(vaadin-date-picker-text-field) [part="value"],
    :host(vaadin-date-picker-text-field) [part="input-field"] ::slotted(input),
    :host(vaadin-date-picker-text-field) [part="input-field"] ::slotted(textarea),
    :host(vaadin-date-picker-text-field) [part="input-field"] ::slotted([part="value"]) {
      mask-image: var(--_i2c-text-field-overflow-mask-image);
    }

  }

  :host(vaadin-date-picker-text-field) [part="value"]::-webkit-input-placeholder {
    color: inherit;
    transition: opacity 0.175s 0.05s;
    opacity: 0.5;
  }

  :host(vaadin-date-picker-text-field) [part="value"]:-ms-input-placeholder {
    color: inherit;
    opacity: 0.5;
  }

  :host(vaadin-date-picker-text-field) [part="value"]::-moz-placeholder {
    color: inherit;
    transition: opacity 0.175s 0.05s;
    opacity: 0.5;
  }

  :host(vaadin-date-picker-text-field) [part="value"]::placeholder {
    color: inherit;
    transition: opacity 0.175s 0.1s;
    opacity: 0.5;
  }

  :host(vaadin-date-picker-text-field) [part="input-field"] {
    border-radius: var(--i2c-border-radius);
    background-color: var(--cm-field-bg);
    padding: 0 calc(0.375em + var(--i2c-border-radius) / 4 - 1px);
    font-weight: 400;
    line-height: 1;
    position: relative;
    cursor: text;
    box-sizing: border-box;
    height: inherit;
    box-shadow: inset 0 0 0 1px var(--cm-fields-border-bg);
    box-sizing: border-box;
  }

  :host(vaadin-date-picker-text-field) [part="input-field"]::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    pointer-events: none;
    background-color: transparent;
    opacity: 0;
    transition: transform 0.15s, opacity 0.2s;
    transform-origin: 100% 0;
    height: auto;
    transform: none;
  }

  :host(vaadin-date-picker-text-field) [part="input-field"]::before {
    content: '';
    height: auto;
    display: none;
  }

  :host(vaadin-date-picker-text-field:hover:not([readonly]):not([focused])) [part="label"],
  :host(vaadin-date-picker-text-field:hover:not([readonly])) [part="helper-text"],
  :host(vaadin-date-picker-text-field:hover:not([readonly])) [part="helper-text"] ::slotted(*) {
    color: var(--i2c-body-text-color);
  }

  :host(vaadin-date-picker-text-field:hover:not([readonly]):not([focused])) [part="input-field"]::after {
    opacity: 0.1;
  }

  @media (pointer: coarse) {
    :host(vaadin-date-picker-text-field:hover:not([readonly]):not([focused])) [part="label"] {
      color: var(--i2c-secondary-text-color);
    }

    :host(vaadin-date-picker-text-field:hover:not([readonly]):not([focused])) [part="input-field"]::after {
      opacity: 0;
    }

    :host(vaadin-date-picker-text-field:active:not([readonly]):not([focused])) [part="input-field"]::after {
      opacity: 0.2;
    }

  }

  :host(vaadin-date-picker-text-field[focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  :host(vaadin-date-picker-text-field[focus-ring]) [part="input-field"] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host(vaadin-date-picker-text-field[readonly]) [part="value"]::-webkit-input-placeholder, :host([disabled]) [part="value"]::-webkit-input-placeholder {
    opacity: 0;
  }

  :host(vaadin-date-picker-text-field[readonly]) [part="value"]:-ms-input-placeholder, :host([disabled]) [part="value"]:-ms-input-placeholder {
    opacity: 0;
  }

  :host(vaadin-date-picker-text-field[readonly]) [part="value"]::-moz-placeholder, :host([disabled]) [part="value"]::-moz-placeholder {
    opacity: 0;
  }

  :host(vaadin-date-picker-text-field[readonly]) [part="value"]::placeholder, :host([disabled]) [part="value"]::placeholder {
    opacity: 0;
  }

  :host(vaadin-date-picker-text-field[readonly]) [part="input-field"] {
    color: var(--i2c-secondary-text-color);
    background-color: transparent;
    cursor: default;
    box-shadow: none;
  }

  :host(vaadin-date-picker-text-field[readonly]) [part="input-field"]::after {
    background-color: transparent;
    opacity: 1;
    border: 1px dashed var(--i2c-contrast-30pct);
  }

  :host(.vaadin-date-picker-text-field[disabled]) {
    pointer-events: none;
  }

  :host(vaadin-date-picker-text-field[disabled]) [part="input-field"] {
    background-color: var(--cm-fields-disabled-bg);
    box-shadow: inset 0 0 0 1px var(--cm-fields-disabled-border);
  }

  :host(vaadin-date-picker-text-field[disabled]) [part="label"],
  :host(vaadin-date-picker-text-field[disabled]) [part="helper-text"],
  :host(vaadin-date-picker-text-field[disabled]) [part="value"],
  :host(vaadin-date-picker-text-field[disabled]) [part="input-field"] ::slotted(*) {
    color: var(--i2c-disabled-text-color);
    -webkit-text-fill-color: var(--i2c-disabled-text-color);
  }


  :host(vaadin-date-picker-text-field[invalid]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--cm-fields-error-text);
  }

  :host(vaadin-date-picker-text-field[focused][invalid]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--cm-fields-error-text);
  }

  :host(vaadin-date-picker-text-field[focused][invalid]) [part="label"] {
    color: var(--cm-fields-error-text);
  }

  :host(vaadin-date-picker-text-field[invalid]) [part="input-field"]::after {
    box-shadow: inset 0 0 0 1px var(--cm-fields-error-text);
  }

  :host(vaadin-date-picker-text-field[invalid][focus-ring]) [part="input-field"] {
    box-shadow: 0 0 0 2px var(--i2c-error-color-50pct);
  }

  :host(vaadin-date-picker-text-field[highlight]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--i2c-orange-500);
    background-color: var(--i2c-orange-50);
  }

  :host(vaadin-date-picker-text-field[focused][highlight]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--i2c-orange-500);
  }

  :host(vaadin-date-picker-text-field[focused][highlight]) [part="label"] {
    color: var(--i2c-orange-500);
  }

  :host(vaadin-date-picker-text-field[highlight][focus-ring]) [part="input-field"] {
    box-shadow: 0 0 0 2px var(--i2c-orange-500);
  }

  :host(vaadin-date-picker-text-field[input-prevented]) [part="input-field"] {
    color: var(--i2c-error-text-color);
  }

  :host(vaadin-date-picker-text-field[theme~="small"]) {
    font-size: var(--i2c-font-size-s);
    --i2c-text-field-size: var(--i2c-size-s);
  }

  :host(vaadin-date-picker-text-field[theme~="small"][has-label]) [part="label"] {
    font-size: var(--i2c-font-size-xs);
  }

  :host(vaadin-date-picker-text-field[theme~="small"][has-label]) [part="error-message"] {
    font-size: var(--i2c-font-size-xs);
  }

  :host(vaadin-date-picker-text-field[theme~="align-left"]) [part="value"] {
    text-align: left;
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(vaadin-date-picker-text-field[theme~="align-center"]) [part="value"] {
    text-align: center;
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(vaadin-date-picker-text-field[theme~="align-right"]) [part="value"] {
    text-align: right;
    --_i2c-text-field-overflow-mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(vaadin-date-picker-text-field[theme~="align-right"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
    }

  }

  @-moz-document url-prefix() {
    :host(vaadin-date-picker-text-field[theme~="align-left"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
    }

  }

  :host(vaadin-date-picker-text-field[has-helper][theme~="helper-above-field"]) [part="helper-text"]::before {
    display: none;
  }

  :host(vaadin-date-picker-text-field[has-helper][theme~="helper-above-field"]) [part="helper-text"]::after {
    content: "";
    display: block;
    height: 0.4em;
  }

  :host(vaadin-date-picker-text-field[has-helper][theme~="helper-above-field"]) [part="label"] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host(vaadin-date-picker-text-field[has-helper][theme~="helper-above-field"]) [part="helper-text"] {
    order: 1;
  }

  :host(vaadin-date-picker-text-field[has-helper][theme~="helper-above-field"]) [part="input-field"] {
    order: 2;
  }

  :host(vaadin-date-picker-text-field[has-helper][theme~="helper-above-field"]) [part="error-message"] {
    order: 3;
  }

  :host(vaadin-date-picker-text-field) [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
    color: var(--i2c-secondary-text-color);
    font-weight: 400;
  }

  :host(vaadin-date-picker-text-field) [part="input-field"] ::slotted(iron-icon) {
    color: var(--i2c-contrast-60pct);
    width: var(--i2c-icon-size-m);
    height: var(--i2c-icon-size-m);
  }

  :host(vaadin-date-picker-text-field) [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  :host(vaadin-date-picker-text-field) [part="clear-button"]::before {
    content: var(--lumo-icons-cross);
  }

  :host(vaadin-date-picker-text-field[dir="rtl"]) [part="input-field"]::after {
    transform-origin: 0% 0;
  }

  :host(vaadin-date-picker-text-field[dir="rtl"]) [part="value"],
  :host(vaadin-date-picker-text-field[dir="rtl"]) [part="input-field"] ::slotted(input),
  :host(vaadin-date-picker-text-field[dir="rtl"]) [part="input-field"] ::slotted(textarea) {
    --_i2c-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
  }

  :host(vaadin-date-picker-text-field[dir="rtl"]) [part="value"]:focus,
  :host(vaadin-date-picker-text-field[focused][dir="rtl"]) [part="input-field"] ::slotted(input),
  :host(vaadin-date-picker-text-field[focused][dir="rtl"]) [part="input-field"] ::slotted(textarea) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(vaadin-date-picker-text-field[dir="rtl"]) [part="value"],
    :host(vaadin-date-picker-text-field[dir="rtl"]) [part="input-field"] ::slotted(input),
    :host(vaadin-date-picker-text-field[dir="rtl"]) [part="input-field"] ::slotted(textarea),
    :host(vaadin-date-picker-text-field[dir="rtl"]) [part="input-field"] ::slotted([part="value"]) {
      mask-image: var(--_i2c-text-field-overflow-mask-image);
    }

  }

  :host(vaadin-date-picker-text-field[theme~="align-left"][dir="rtl"]) [part="value"] {
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(vaadin-date-picker-text-field[theme~="align-center"][dir="rtl"]) [part="value"] {
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(vaadin-date-picker-text-field[theme~="align-right"][dir="rtl"]) [part="value"] {
    --_i2c-text-field-overflow-mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(vaadin-date-picker-text-field[theme~="align-right"][dir="rtl"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
    }

  }

  @-moz-document url-prefix() {
    :host(vaadin-date-picker-text-field[theme~="align-left"][dir="rtl"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
    }

  }

  :host(vaadin-date-picker-text-field .custom-style) [part="input-field"] {
    border: 1px solid #ccc;
    background-color: #fff;
  }

  :host(vaadin-date-picker-text-field[focused].custom-style) [part="input-field"] {
    border-color: #aaa;
  }

  :host(vaadin-time-picker-text-field) {
    display: inline-flex;
    outline: none;
  }

  /*:host(vaadin-time-picker-text-field) [part="input-field"] {
    background-color: red;
  }*/

  :host(vaadin-time-picker-text-field)::before {
    content: "\\2003";
    width: 0;
    display: inline-block;
  }

  :host(vaadin-time-picker-text-field[hidden]) {
    display: none !important;
  }

  :host(vaadin-time-picker-text-field) .vaadin-text-field-container,
  :host(vaadin-time-picker-text-field) .vaadin-text-area-container {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-text-field-default-width, 12em);
  }

  :host(vaadin-time-picker-text-field) [part="label"]:empty {
    display: none;
  }

  :host(vaadin-time-picker-text-field) [part="input-field"] {
    display: flex;
    align-items: center;
    flex: auto;
  }

  :host(vaadin-time-picker-text-field) .vaadin-text-field-container [part="input-field"] {
    flex-grow: 0;
  }

  :host(vaadin-time-picker-text-field) [part="value"],
  :host(vaadin-time-picker-text-field) [part="input-field"] ::slotted(input),
  :host(vaadin-time-picker-text-field) [part="input-field"] ::slotted(textarea) {
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    font-size: 1em;
    line-height: normal;
    color: inherit;
    background-color: transparent;

    box-shadow: none;
  }

  :host(vaadin-time-picker-text-field) [part="input-field"] ::slotted(*) {
    flex: none;
  }

  :host(vaadin-time-picker-text-field) [part="value"],
  :host(vaadin-time-picker-text-field) [part="input-field"] ::slotted(input),
  :host(vaadin-time-picker-text-field) [part="input-field"] ::slotted(textarea),
  :host(vaadin-time-picker-text-field) [part="input-field"] ::slotted([part="value"]) {
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  :host(vaadin-time-picker-text-field) [part="input-field"] ::slotted(textarea) {
    resize: none;
  }

  :host(vaadin-time-picker-text-field) [part="value"]::-ms-clear,
  :host(vaadin-time-picker-text-field) [part="input-field"] ::slotted(input)::-ms-clear {
    display: none;
  }

  :host(vaadin-time-picker-text-field) [part="clear-button"] {
    cursor: default;
  }

  :host(vaadin-time-picker-text-field) [part="clear-button"]::before {
    content: "✕";
  }

  :host(vaadin-time-picker-text-field) [part="label"] {
    align-self: flex-start;
    color: var(--cm-fields-lable-color);
    font-weight: 400;
    font-size: var(--i2c-font-size-xs);
    margin-left: calc(var(--i2c-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-bottom: var(--i2c-space-s);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    width: auto;
    box-sizing: border-box;

    top: 0;
    height: auto;
    margin-bottom: 0;
    transform-origin: left;
    transform: none;
  }

  :host(vaadin-time-picker-text-field[has-label]:not([has-value]):not([focused]):not([invalid]):not([theme~="always-float-label"])) [part="label"] {
    transform: none;
    width: auto;
  }

  :host(vaadin-time-picker-text-field[has-label])::before {
    margin-top: calc(var(--i2c-font-size-s) * 1.5);
  }

  :host(vaadin-time-picker-text-field[has-label]) {
    padding-top: 0;
  }

  :host(vaadin-time-picker-text-field[required]) [part="label"] {
    padding-right: 1em;
  }

  :host(vaadin-time-picker-text-field) [part="label"]::after {
    content: var(--lumo-required-field-indicator, "•");
    transition: opacity 0.2s;
    opacity: 0;
    color: var(--i2c-blue-500);
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host(vaadin-time-picker-text-field[required]:not([has-value])) [part="label"]::after {
    opacity: 1;
  }

  :host(vaadin-time-picker-text-field[invalid]) [part="label"]::after {
    color: var(--cm-fields-error-text);
  }

  :host(vaadin-time-picker-text-field) [part="error-message"] {
    margin-left: calc(var(--i2c-border-radius-m) / 4);
    font-size: var(--i2c-font-size-xs);
    line-height: var(--i2c-line-height-xs);
    color: var(--cm-fields-error-text);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host(vaadin-time-picker-text-field[invalid]) [part$="button"] {
    color: var(--cm-fields-error-text);
    cursor: pointer;
  }

  :host(vaadin-time-picker-text-field) [part="error-message"]:not(:empty)::before,
  :host(vaadin-time-picker-text-field) [part="error-message"]:not(:empty)::after {
    content: "";
    display: block;
    height: 0.4em;
  }

  :host(vaadin-time-picker-text-field:not([invalid])) [part="error-message"] {
    max-height: 0;
    overflow: hidden;
  }

  :host(vaadin-time-picker-text-field[dir="rtl"]) [part="label"] {
    margin-left: 0;
    margin-right: calc(var(--i2c-border-radius-m) / 4);
  }

  :host(vaadin-time-picker-text-field[required][dir="rtl"]) [part="label"] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host(vaadin-time-picker-text-field[dir="rtl"]) [part="label"]::after {
    right: auto;
    left: 0;
  }

  :host(vaadin-time-picker-text-field[dir="rtl"]) [part="error-message"] {
    margin-left: 0;
    margin-right: calc(var(--i2c-border-radius-m) / 4);
  }

  :host(vaadin-time-picker-text-field) [part$="button"] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--i2c-icon-size-m);
    text-align: center;
    color: var(--i2c-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  :host(vaadin-time-picker-text-field:not([readonly])) [part$="button"]:hover {
    color: var(--i2c-contrast-90pct);
  }

  :host(vaadin-time-picker-text-field[disabled]) [part$="button"], :host([readonly]) [part$="button"] {
    color: var(--i2c-contrast-20pct);
  }

  :host(vaadin-time-picker-text-field) [part$="button"]::before {
    font-family: "lumo-icons";
    display: block;
  }

  :host(vaadin-time-picker-text-field) {
    --i2c-text-field-size: var(--i2c-size-m);
    color: var(--cm-field-fg);
    font-size: var(--i2c-font-size-s);
    font-family: var(--i2c-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    margin: 0 0 var(--i2c-space-m) 0;
    padding: 0;
  }

  :host(vaadin-time-picker-text-field):last-child {
    margin: 0 0 0 0;
  }

  :host(vaadin-time-picker-text-field)::before {
    height: var(--i2c-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host(vaadin-time-picker-text-field[focused]:not([readonly])) [part="label"] {
    color: var(--cm-fields-lable-focused-color);
  }

  :host(vaadin-time-picker-text-field[focused]:not([readonly])) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--cm-fields-focused);
  }

  :host(vaadin-time-picker-text-field[has-helper]) [part="helper-text"]::before {
    content: "";
    display: block;
    height: 0.4em;
  }

  :host(vaadin-time-picker-text-field) [part="helper-text"],
  :host(vaadin-time-picker-text-field) [part="helper-text"] ::slotted(*) {
    display: block;
    color: var(--i2c-secondary-text-color);
    font-size: var(--i2c-font-size-xs);
    line-height: var(--i2c-line-height-xs);
    margin-left: calc(var(--i2c-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(vaadin-time-picker-text-field) [part="value"],
  :host(vaadin-time-picker-text-field) [part="input-field"] ::slotted(input),
  :host(vaadin-time-picker-text-field) [part="input-field"] ::slotted(textarea),
  :host(vaadin-time-picker-text-field) [part="input-field"] ::slotted([part="value"]) {
    cursor: inherit;
    min-height: var(--i2c-text-field-size);
    padding: 0 0.25em;
    --_i2c-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
    -webkit-mask-image: var(--_i2c-text-field-overflow-mask-image);
  }

  :host(vaadin-time-picker-text-field) [part="value"]:focus,
  :host(vaadin-time-picker-text-field[focused]) [part="input-field"] ::slotted(input),
  :host(vaadin-time-picker-text-field[focused]) [part="input-field"] ::slotted(textarea) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(vaadin-time-picker-text-field) [part="value"],
    :host(vaadin-time-picker-text-field) [part="input-field"] ::slotted(input),
    :host(vaadin-time-picker-text-field) [part="input-field"] ::slotted(textarea),
    :host(vaadin-time-picker-text-field) [part="input-field"] ::slotted([part="value"]) {
      mask-image: var(--_i2c-text-field-overflow-mask-image);
    }

  }

  :host(vaadin-time-picker-text-field) [part="value"]::-webkit-input-placeholder {
    color: inherit;
    transition: opacity 0.175s 0.05s;
    opacity: 0.5;
  }

  :host(vaadin-time-picker-text-field) [part="value"]:-ms-input-placeholder {
    color: inherit;
    opacity: 0.5;
  }

  :host(vaadin-time-picker-text-field) [part="value"]::-moz-placeholder {
    color: inherit;
    transition: opacity 0.175s 0.05s;
    opacity: 0.5;
  }

  :host(vaadin-time-picker-text-field) [part="value"]::placeholder {
    color: inherit;
    transition: opacity 0.175s 0.1s;
    opacity: 0.5;
  }

  :host(vaadin-time-picker-text-field) [part="input-field"] {
    border-radius: var(--i2c-border-radius);
    background-color: var(--cm-field-bg);
    padding: 0 calc(0.375em + var(--i2c-border-radius) / 4 - 1px);
    font-weight: 400;
    line-height: 1;
    position: relative;
    cursor: text;
    box-sizing: border-box;
    height: inherit;
    box-shadow: inset 0 0 0 1px var(--cm-fields-border-bg);
    box-sizing: border-box;
  }

  :host(vaadin-time-picker-text-field) [part="input-field"]::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    pointer-events: none;
    background-color: transparent;
    opacity: 0;
    transition: transform 0.15s, opacity 0.2s;
    transform-origin: 100% 0;
    height: auto;
    transform: none;
  }

  :host(vaadin-time-picker-text-field) [part="input-field"]::before {
    content: '';
    height: auto;
    display: none;
  }

  :host(vaadin-time-picker-text-field:hover:not([readonly]):not([focused])) [part="label"],
  :host(vaadin-time-picker-text-field:hover:not([readonly])) [part="helper-text"],
  :host(vaadin-time-picker-text-field:hover:not([readonly])) [part="helper-text"] ::slotted(*) {
    color: var(--i2c-body-text-color);
  }

  :host(vaadin-time-picker-text-field:hover:not([readonly]):not([focused])) [part="input-field"]::after {
    opacity: 0.1;
  }

  @media (pointer: coarse) {
    :host(vaadin-time-picker-text-field:hover:not([readonly]):not([focused])) [part="label"] {
      color: var(--i2c-secondary-text-color);
    }

    :host(vaadin-time-picker-text-field:hover:not([readonly]):not([focused])) [part="input-field"]::after {
      opacity: 0;
    }

    :host(vaadin-time-picker-text-field:active:not([readonly]):not([focused])) [part="input-field"]::after {
      opacity: 0.2;
    }

  }

  :host(vaadin-time-picker-text-field[focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  :host(vaadin-time-picker-text-field[focus-ring]) [part="input-field"] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host(vaadin-time-picker-text-field[readonly]) [part="value"]::-webkit-input-placeholder, :host([disabled]) [part="value"]::-webkit-input-placeholder {
    opacity: 0;
  }

  :host(vaadin-time-picker-text-field[readonly]) [part="value"]:-ms-input-placeholder, :host([disabled]) [part="value"]:-ms-input-placeholder {
    opacity: 0;
  }

  :host(vaadin-time-picker-text-field[readonly]) [part="value"]::-moz-placeholder, :host([disabled]) [part="value"]::-moz-placeholder {
    opacity: 0;
  }

  :host(vaadin-time-picker-text-field[readonly]) [part="value"]::placeholder, :host([disabled]) [part="value"]::placeholder {
    opacity: 0;
  }

  :host(vaadin-time-picker-text-field[readonly]) [part="input-field"] {
    color: var(--i2c-secondary-text-color);
    background-color: transparent;
    cursor: default;
    box-shadow: none;
  }

  :host(vaadin-time-picker-text-field[readonly]) [part="input-field"]::after {
    background-color: transparent;
    opacity: 1;
    border: 1px dashed var(--i2c-contrast-30pct);
  }

  :host(.vaadin-time-picker-text-field[disabled]) {
    pointer-events: none;
  }

  :host(vaadin-time-picker-text-field[disabled]) [part="input-field"] {
    background-color: var(--cm-fields-disabled-bg);
    box-shadow: inset 0 0 0 1px var(--cm-fields-disabled-border);
  }

  :host(vaadin-time-picker-text-field[disabled]) [part="label"],
  :host(vaadin-time-picker-text-field[disabled]) [part="helper-text"],
  :host(vaadin-time-picker-text-field[disabled]) [part="value"],
  :host(vaadin-time-picker-text-field[disabled]) [part="input-field"] ::slotted(*) {
    color: var(--i2c-disabled-text-color);
    -webkit-text-fill-color: var(--i2c-disabled-text-color);
  }


  :host(vaadin-time-picker-text-field[invalid]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--cm-fields-error-text);
  }

  :host(vaadin-time-picker-text-field[focused][invalid]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--cm-fields-error-text);
  }

  :host(vaadin-time-picker-text-field[focused][invalid]) [part="label"] {
    color: var(--cm-fields-error-text);
  }

  :host(vaadin-time-picker-text-field[invalid]) [part="input-field"]::after {
    box-shadow: inset 0 0 0 1px var(--cm-fields-error-text);
  }

  :host(vaadin-time-picker-text-field[invalid][focus-ring]) [part="input-field"] {
    box-shadow: 0 0 0 2px var(--i2c-error-color-50pct);
  }

  :host(vaadin-time-picker-text-field[highlight]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--i2c-orange-500);
    background-color: var(--i2c-orange-50);
  }

  :host(vaadin-time-picker-text-field[focused][highlight]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--i2c-orange-500);
  }

  :host(vaadin-time-picker-text-field[focused][highlight]) [part="label"] {
    color: var(--i2c-orange-500);
  }

  :host(vaadin-time-picker-text-field[highlight][focus-ring]) [part="input-field"] {
    box-shadow: 0 0 0 2px var(--i2c-orange-500);
  }

  :host(vaadin-time-picker-text-field[input-prevented]) [part="input-field"] {
    color: var(--i2c-error-text-color);
  }

  :host(vaadin-time-picker-text-field[theme~="small"]) {
    font-size: var(--i2c-font-size-s);
    --i2c-text-field-size: var(--i2c-size-s);
  }

  :host(vaadin-time-picker-text-field[theme~="small"][has-label]) [part="label"] {
    font-size: var(--i2c-font-size-xs);
  }

  :host(vaadin-time-picker-text-field[theme~="small"][has-label]) [part="error-message"] {
    font-size: var(--i2c-font-size-xs);
  }

  :host(vaadin-time-picker-text-field[theme~="align-left"]) [part="value"] {
    text-align: left;
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(vaadin-time-picker-text-field[theme~="align-center"]) [part="value"] {
    text-align: center;
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(vaadin-time-picker-text-field[theme~="align-right"]) [part="value"] {
    text-align: right;
    --_i2c-text-field-overflow-mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(vaadin-time-picker-text-field[theme~="align-right"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
    }

  }

  @-moz-document url-prefix() {
    :host(vaadin-time-picker-text-field[theme~="align-left"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
    }

  }

  :host(vaadin-time-picker-text-field[has-helper][theme~="helper-above-field"]) [part="helper-text"]::before {
    display: none;
  }

  :host(vaadin-time-picker-text-field[has-helper][theme~="helper-above-field"]) [part="helper-text"]::after {
    content: "";
    display: block;
    height: 0.4em;
  }

  :host(vaadin-time-picker-text-field[has-helper][theme~="helper-above-field"]) [part="label"] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host(vaadin-time-picker-text-field[has-helper][theme~="helper-above-field"]) [part="helper-text"] {
    order: 1;
  }

  :host(vaadin-time-picker-text-field[has-helper][theme~="helper-above-field"]) [part="input-field"] {
    order: 2;
  }

  :host(vaadin-time-picker-text-field[has-helper][theme~="helper-above-field"]) [part="error-message"] {
    order: 3;
  }

  :host(vaadin-time-picker-text-field) [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
    color: var(--i2c-secondary-text-color);
    font-weight: 400;
  }

  :host(vaadin-time-picker-text-field) [part="input-field"] ::slotted(iron-icon) {
    color: var(--i2c-contrast-60pct);
    width: var(--i2c-icon-size-m);
    height: var(--i2c-icon-size-m);
  }

  :host(vaadin-time-picker-text-field) [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  :host(vaadin-time-picker-text-field) [part="clear-button"]::before {
    content: var(--lumo-icons-cross);
  }

  :host(vaadin-time-picker-text-field[dir="rtl"]) [part="input-field"]::after {
    transform-origin: 0% 0;
  }

  :host(vaadin-time-picker-text-field[dir="rtl"]) [part="value"],
  :host(vaadin-time-picker-text-field[dir="rtl"]) [part="input-field"] ::slotted(input),
  :host(vaadin-time-picker-text-field[dir="rtl"]) [part="input-field"] ::slotted(textarea) {
    --_i2c-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
  }

  :host(vaadin-time-picker-text-field[dir="rtl"]) [part="value"]:focus,
  :host(vaadin-time-picker-text-field[focused][dir="rtl"]) [part="input-field"] ::slotted(input),
  :host(vaadin-time-picker-text-field[focused][dir="rtl"]) [part="input-field"] ::slotted(textarea) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(vaadin-time-picker-text-field[dir="rtl"]) [part="value"],
    :host(vaadin-time-picker-text-field[dir="rtl"]) [part="input-field"] ::slotted(input),
    :host(vaadin-time-picker-text-field[dir="rtl"]) [part="input-field"] ::slotted(textarea),
    :host(vaadin-time-picker-text-field[dir="rtl"]) [part="input-field"] ::slotted([part="value"]) {
      mask-image: var(--_i2c-text-field-overflow-mask-image);
    }

  }

  :host(vaadin-time-picker-text-field[theme~="align-left"][dir="rtl"]) [part="value"] {
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(vaadin-time-picker-text-field[theme~="align-center"][dir="rtl"]) [part="value"] {
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(vaadin-time-picker-text-field[theme~="align-right"][dir="rtl"]) [part="value"] {
    --_i2c-text-field-overflow-mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(vaadin-time-picker-text-field[theme~="align-right"][dir="rtl"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
    }

  }

  @-moz-document url-prefix() {
    :host(vaadin-time-picker-text-field[theme~="align-left"][dir="rtl"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
    }

  }

  :host(vaadin-time-picker-text-field .custom-style) [part="input-field"] {
    border: 1px solid #ccc;
    background-color: #fff;
  }

  :host(vaadin-time-picker-text-field[focused].custom-style) [part="input-field"] {
    border-color: #aaa;
  }

  :host(vaadin-time-picker-text-field[invalid]) [part='input-field']::after,
  :host(vaadin-date-picker-text-field[invalid]) [part='input-field']::after{
    background-color: #ffffff;
    transform: none;
  }

  :host(vaadin-text-field) {
    display: inline-flex;
    outline: none;
  }

  /*:host(vaadin-text-field) [part="input-field"] {
    background-color: red;
  }*/

  :host(vaadin-text-field)::before {
    content: "\\2003";
    width: 0;
    display: inline-block;
  }

  :host(vaadin-text-field[hidden]) {
    display: none !important;
  }

  :host(vaadin-text-field) .vaadin-text-field-container,
  :host(vaadin-text-field) .vaadin-text-area-container {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-text-field-default-width, 12em);
  }

  :host(vaadin-text-field) [part="label"]:empty {
    display: none;
  }

  :host(vaadin-text-field) [part="input-field"] {
    display: flex;
    align-items: center;
    flex: auto;
  }

  :host(vaadin-text-field) .vaadin-text-field-container [part="input-field"] {
    flex-grow: 0;
  }

  :host(vaadin-text-field) [part="value"],
  :host(vaadin-text-field) [part="input-field"] ::slotted(input),
  :host(vaadin-text-field) [part="input-field"] ::slotted(textarea) {
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    font-size: 1em;
    line-height: normal;
    color: inherit;
    background-color: transparent;

    box-shadow: none;
  }

  :host(vaadin-text-field) [part="input-field"] ::slotted(*) {
    flex: none;
  }

  :host(vaadin-text-field) [part="value"],
  :host(vaadin-text-field) [part="input-field"] ::slotted(input),
  :host(vaadin-text-field) [part="input-field"] ::slotted(textarea),
  :host(vaadin-text-field) [part="input-field"] ::slotted([part="value"]) {
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  :host(vaadin-text-field) [part="input-field"] ::slotted(textarea) {
    resize: none;
  }

  :host(vaadin-text-field) [part="value"]::-ms-clear,
  :host(vaadin-text-field) [part="input-field"] ::slotted(input)::-ms-clear {
    display: none;
  }

  :host(vaadin-text-field) [part="clear-button"] {
    cursor: default;
  }

  :host(vaadin-text-field) [part="clear-button"]::before {
    content: "✕";
  }

  :host(vaadin-text-field) [part="label"] {
    align-self: flex-start;
    color: var(--cm-fields-lable-color);
    font-weight: 400;
    font-size: var(--i2c-font-size-xs);
    margin-left: calc(var(--i2c-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-bottom: var(--i2c-space-s);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    width: auto;
    box-sizing: border-box;

    top: 0;
    height: auto;
    margin-bottom: 0;
    transform-origin: left;
    transform: none;
  }

  :host(vaadin-text-field[has-label]:not([has-value]):not([focused]):not([invalid]):not([theme~="always-float-label"])) [part="label"] {
    transform: none;
    width: auto;
  }

  :host(vaadin-text-field[has-label])::before {
    margin-top: calc(var(--i2c-font-size-s) * 1.5);
  }

  :host(vaadin-text-field[has-label]) {
    padding-top: 0;
  }

  :host(vaadin-text-field[required]) [part="label"] {
    padding-right: 1em;
  }

  :host(vaadin-text-field) [part="label"]::after {
    content: var(--lumo-required-field-indicator, "•");
    transition: opacity 0.2s;
    opacity: 0;
    color: var(--i2c-blue-500);
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host(vaadin-text-field[required]:not([has-value])) [part="label"]::after {
    opacity: 1;
  }

  :host(vaadin-text-field[invalid]) [part="label"]::after {
    color: var(--cm-fields-error-text);
  }

  :host(vaadin-text-field) [part="error-message"] {
    margin-left: calc(var(--i2c-border-radius-m) / 4);
    font-size: var(--i2c-font-size-xs);
    line-height: var(--i2c-line-height-xs);
    color: var(--cm-fields-error-text);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host(vaadin-text-field[invalid]) [part$="button"] {
    color: var(--cm-fields-error-text);
    cursor: pointer;
  }

  :host(vaadin-text-field) [part="error-message"]:not(:empty)::before,
  :host(vaadin-text-field) [part="error-message"]:not(:empty)::after {
    content: "";
    display: block;
    height: 0.4em;
  }

  :host(vaadin-text-field:not([invalid])) [part="error-message"] {
    max-height: 0;
    overflow: hidden;
  }

  :host(vaadin-text-field[dir="rtl"]) [part="label"] {
    margin-left: 0;
    margin-right: calc(var(--i2c-border-radius-m) / 4);
  }

  :host(vaadin-text-field[required][dir="rtl"]) [part="label"] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host(vaadin-text-field[dir="rtl"]) [part="label"]::after {
    right: auto;
    left: 0;
  }

  :host(vaadin-text-field[dir="rtl"]) [part="error-message"] {
    margin-left: 0;
    margin-right: calc(var(--i2c-border-radius-m) / 4);
  }

  :host(vaadin-text-field) [part$="button"] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--i2c-icon-size-m);
    text-align: center;
    color: var(--i2c-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  :host(vaadin-text-field:not([readonly])) [part$="button"]:hover {
    color: var(--i2c-contrast-90pct);
  }

  :host(vaadin-text-field[disabled]) [part$="button"], :host([readonly]) [part$="button"] {
    color: var(--i2c-contrast-20pct);
  }

  :host(vaadin-text-field) [part$="button"]::before {
    font-family: "lumo-icons";
    display: block;
  }

  :host(vaadin-text-field) {
    --i2c-text-field-size: var(--i2c-size-m);
    color: var(--cm-field-fg);
    font-size: var(--i2c-font-size-s);
    font-family: var(--i2c-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    margin: 0 0 var(--i2c-space-m) 0;
    padding: 0;
  }

  :host(vaadin-text-field):last-child {
    margin: 0 0 0 0;
  }

  :host(vaadin-text-field)::before {
    height: var(--i2c-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host(vaadin-text-field[focused]:not([readonly])) [part="label"] {
    color: var(--cm-fields-lable-focused-color);
  }

  :host(vaadin-text-field[focused]:not([readonly])) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--cm-fields-focused);
  }

  :host(vaadin-text-field[has-helper]) [part="helper-text"]::before {
    content: "";
    display: block;
    height: 0.4em;
  }

  :host(vaadin-text-field) [part="helper-text"],
  :host(vaadin-text-field) [part="helper-text"] ::slotted(*) {
    display: block;
    color: var(--i2c-secondary-text-color);
    font-size: var(--i2c-font-size-xs);
    line-height: var(--i2c-line-height-xs);
    margin-left: calc(var(--i2c-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(vaadin-text-field) [part="value"],
  :host(vaadin-text-field) [part="input-field"] ::slotted(input),
  :host(vaadin-text-field) [part="input-field"] ::slotted(textarea),
  :host(vaadin-text-field) [part="input-field"] ::slotted([part="value"]) {
    cursor: inherit;
    min-height: var(--i2c-text-field-size);
    padding: 0 0.25em;
    --_i2c-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
    -webkit-mask-image: var(--_i2c-text-field-overflow-mask-image);
  }

  :host(vaadin-text-field) [part="value"]:focus,
  :host(vaadin-text-field[focused]) [part="input-field"] ::slotted(input),
  :host(vaadin-text-field[focused]) [part="input-field"] ::slotted(textarea) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(vaadin-text-field) [part="value"],
    :host(vaadin-text-field) [part="input-field"] ::slotted(input),
    :host(vaadin-text-field) [part="input-field"] ::slotted(textarea),
    :host(vaadin-text-field) [part="input-field"] ::slotted([part="value"]) {
      mask-image: var(--_i2c-text-field-overflow-mask-image);
    }

  }

  :host(vaadin-text-field) [part="value"]::-webkit-input-placeholder {
    color: inherit;
    transition: opacity 0.175s 0.05s;
    opacity: 0.5;
  }

  :host(vaadin-text-field) [part="value"]:-ms-input-placeholder {
    color: inherit;
    opacity: 0.5;
  }

  :host(vaadin-text-field) [part="value"]::-moz-placeholder {
    color: inherit;
    transition: opacity 0.175s 0.05s;
    opacity: 0.5;
  }

  :host(vaadin-text-field) [part="value"]::placeholder {
    color: inherit;
    transition: opacity 0.175s 0.1s;
    opacity: 0.5;
  }

  :host(vaadin-text-field) [part="input-field"] {
    border-radius: var(--i2c-border-radius);
    background-color: var(--cm-field-bg);
    padding: 0 calc(0.375em + var(--i2c-border-radius) / 4 - 1px);
    font-weight: 400;
    line-height: 1;
    position: relative;
    cursor: text;
    box-sizing: border-box;
    height: inherit;
    box-shadow: inset 0 0 0 1px var(--cm-fields-border-bg);
    box-sizing: border-box;
  }

  :host(vaadin-text-field) [part="input-field"]::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    pointer-events: none;
    background-color: var(--i2c-contrast-50pct);
    opacity: 0;
    transition: transform 0.15s, opacity 0.2s;
    transform-origin: 100% 0;
    height: auto;
    transform: none;
    display: none;
  }

  :host(vaadin-text-field) [part="input-field"]::before {
    content: '';
    height: auto;
    display: none;
  }

  :host(vaadin-text-field:hover:not([readonly]):not([focused])) [part="label"],
  :host(vaadin-text-field:hover:not([readonly])) [part="helper-text"],
  :host(vaadin-text-field:hover:not([readonly])) [part="helper-text"] ::slotted(*) {
    color: var(--i2c-body-text-color);
  }

  :host(vaadin-text-field:hover:not([readonly]):not([focused])) [part="input-field"]::after {
    opacity: 0.1;
  }

  @media (pointer: coarse) {
    :host(vaadin-text-field:hover:not([readonly]):not([focused])) [part="label"] {
      color: var(--i2c-secondary-text-color);
    }

    :host(vaadin-text-field:hover:not([readonly]):not([focused])) [part="input-field"]::after {
      opacity: 0;
    }

    :host(vaadin-text-field:active:not([readonly]):not([focused])) [part="input-field"]::after {
      opacity: 0.2;
    }

  }

  :host(vaadin-text-field[focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  :host(vaadin-text-field[focus-ring]) [part="input-field"] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host(vaadin-text-field[readonly]) [part="value"]::-webkit-input-placeholder, :host([disabled]) [part="value"]::-webkit-input-placeholder {
    opacity: 0;
  }

  :host(vaadin-text-field[readonly]) [part="value"]:-ms-input-placeholder, :host([disabled]) [part="value"]:-ms-input-placeholder {
    opacity: 0;
  }

  :host(vaadin-text-field[readonly]) [part="value"]::-moz-placeholder, :host([disabled]) [part="value"]::-moz-placeholder {
    opacity: 0;
  }

  :host(vaadin-text-field[readonly]) [part="value"]::placeholder, :host([disabled]) [part="value"]::placeholder {
    opacity: 0;
  }

  :host(vaadin-text-field[readonly]) [part="input-field"] {
    color: var(--i2c-secondary-text-color);
    background-color: transparent;
    cursor: default;
    box-shadow: none;
  }

  :host(vaadin-text-field[readonly]) [part="input-field"]::after {
    background-color: transparent;
    opacity: 1;
    border: 1px dashed var(--i2c-contrast-30pct);
  }

  :host(.vaadin-text-field[disabled]) {
    pointer-events: none;
  }

  :host(vaadin-text-field[disabled]) [part="input-field"] {
    background-color: var(--cm-fields-disabled-bg);
    box-shadow: inset 0 0 0 1px var(--cm-fields-disabled-border);
  }

  :host(vaadin-text-field[disabled]) [part="label"],
  :host(vaadin-text-field[disabled]) [part="helper-text"],
  :host(vaadin-text-field[disabled]) [part="value"],
  :host(vaadin-text-field[disabled]) [part="input-field"] ::slotted(*) {
    color: var(--i2c-disabled-text-color);
    -webkit-text-fill-color: var(--i2c-disabled-text-color);
  }


  :host(vaadin-text-field[invalid]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--cm-fields-error-text);
  }

  :host(vaadin-text-field[focused][invalid]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--cm-fields-error-text);
  }

  :host(vaadin-text-field[focused][invalid]) [part="label"] {
    color: var(--cm-fields-error-text);
  }

  :host(vaadin-text-field[invalid]) [part="input-field"]::after {
    box-shadow: inset 0 0 0 1px var(--cm-fields-error-text);
  }

  :host(vaadin-text-field[invalid][focus-ring]) [part="input-field"] {
    box-shadow: 0 0 0 2px var(--i2c-error-color-50pct);
  }

  :host(vaadin-text-field[highlight]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--i2c-orange-500);
    background-color: var(--i2c-orange-50);
  }

  :host(vaadin-text-field[focused][highlight]) [part="input-field"] {
    box-shadow: inset 0 0 0 1px var(--i2c-orange-500);
  }

  :host(vaadin-text-field[focused][highlight]) [part="label"] {
    color: var(--i2c-orange-500);
  }

  :host(vaadin-text-field[highlight][focus-ring]) [part="input-field"] {
    box-shadow: 0 0 0 2px var(--i2c-orange-500);
  }

  :host(vaadin-text-field[input-prevented]) [part="input-field"] {
    color: var(--i2c-error-text-color);
  }

  :host(vaadin-text-field[theme~="small"]) {
    font-size: var(--i2c-font-size-s);
    --i2c-text-field-size: var(--i2c-size-s);
  }

  :host(vaadin-text-field[theme~="small"][has-label]) [part="label"] {
    font-size: var(--i2c-font-size-xs);
  }

  :host(vaadin-text-field[theme~="small"][has-label]) [part="error-message"] {
    font-size: var(--i2c-font-size-xs);
  }

  :host(vaadin-text-field[theme~="align-left"]) [part="value"] {
    text-align: left;
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(vaadin-text-field[theme~="align-center"]) [part="value"] {
    text-align: center;
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(vaadin-text-field[theme~="align-right"]) [part="value"] {
    text-align: right;
    --_i2c-text-field-overflow-mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(vaadin-text-field[theme~="align-right"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
    }

  }

  @-moz-document url-prefix() {
    :host(vaadin-text-field[theme~="align-left"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
    }

  }

  :host(vaadin-text-field[has-helper][theme~="helper-above-field"]) [part="helper-text"]::before {
    display: none;
  }

  :host(vaadin-text-field[has-helper][theme~="helper-above-field"]) [part="helper-text"]::after {
    content: "";
    display: block;
    height: 0.4em;
  }

  :host(vaadin-text-field[has-helper][theme~="helper-above-field"]) [part="label"] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host(vaadin-text-field[has-helper][theme~="helper-above-field"]) [part="helper-text"] {
    order: 1;
  }

  :host(vaadin-text-field[has-helper][theme~="helper-above-field"]) [part="input-field"] {
    order: 2;
  }

  :host(vaadin-text-field[has-helper][theme~="helper-above-field"]) [part="error-message"] {
    order: 3;
  }

  :host(vaadin-text-field) [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
    color: var(--i2c-secondary-text-color);
    font-weight: 400;
  }

  :host(vaadin-text-field) [part="input-field"] ::slotted(iron-icon) {
    color: var(--i2c-contrast-60pct);
    width: var(--i2c-icon-size-m);
    height: var(--i2c-icon-size-m);
  }

  :host(vaadin-text-field) [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  :host(vaadin-text-field) [part="clear-button"]::before {
    content: var(--lumo-icons-cross);
  }

  :host(vaadin-text-field[dir="rtl"]) [part="input-field"]::after {
    transform-origin: 0% 0;
  }

  :host(vaadin-text-field[dir="rtl"]) [part="value"],
  :host(vaadin-text-field[dir="rtl"]) [part="input-field"] ::slotted(input),
  :host(vaadin-text-field[dir="rtl"]) [part="input-field"] ::slotted(textarea) {
    --_i2c-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
  }

  :host(vaadin-text-field[dir="rtl"]) [part="value"]:focus,
  :host(vaadin-text-field[focused][dir="rtl"]) [part="input-field"] ::slotted(input),
  :host(vaadin-text-field[focused][dir="rtl"]) [part="input-field"] ::slotted(textarea) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(vaadin-text-field[dir="rtl"]) [part="value"],
    :host(vaadin-text-field[dir="rtl"]) [part="input-field"] ::slotted(input),
    :host(vaadin-text-field[dir="rtl"]) [part="input-field"] ::slotted(textarea),
    :host(vaadin-text-field[dir="rtl"]) [part="input-field"] ::slotted([part="value"]) {
      mask-image: var(--_i2c-text-field-overflow-mask-image);
    }

  }

  :host(vaadin-text-field[theme~="align-left"][dir="rtl"]) [part="value"] {
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(vaadin-text-field[theme~="align-center"][dir="rtl"]) [part="value"] {
    --_i2c-text-field-overflow-mask-image: none;
  }

  :host(vaadin-text-field[theme~="align-right"][dir="rtl"]) [part="value"] {
    --_i2c-text-field-overflow-mask-image: none;
  }

  @-moz-document url-prefix() {
    :host(vaadin-text-field[theme~="align-right"][dir="rtl"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
    }

  }

  @-moz-document url-prefix() {
    :host(vaadin-text-field[theme~="align-left"][dir="rtl"]) [part="value"] {
      --_i2c-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
    }

  }

  :host(vaadin-text-field .custom-style) [part="input-field"] {
    border: 1px solid #ccc;
    background-color: #fff;
  }

  :host(vaadin-text-field[focused].custom-style) [part="input-field"] {
    border-color: #aaa;
  }


  [part='date'][selected]::before {
    background-color: red;
  }

`;
registerStyles('vaadin-text-field', [unsafeCSS(squareInputStyles), unsafeCSS(genericInputStyles)]);
//# sourceMappingURL=form-field.js.map