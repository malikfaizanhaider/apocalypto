import { registerStyles, css, unsafeCSS } from '@vaadin/vaadin-themable-mixin/register-styles.js';

// default_theme
const textarea_default = css``;

// tenant_theme
const textarea_square = css`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: "\\2003";
    width: 0;
    display: inline-block;
  }

  :host([hidden]) {
    display: none !important;
  }

  .vaadin-text-field-container, .vaadin-text-area-container {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-text-field-default-width, 12em);
  }

  [part="label"]:empty {
    display: none;
  }

  [part="input-field"] {
    display: flex;
    align-items: center;
    flex: auto;
  }

  .vaadin-text-field-container [part="input-field"] {
    flex-grow: 0;
  }

  [part="value"], [part="input-field"] ::slotted(input), [part="input-field"] ::slotted(textarea) {
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

  [part="input-field"] ::slotted(*) {
    flex: none;
  }

  [part="value"], [part="input-field"] ::slotted(input), [part="input-field"] ::slotted(textarea), [part="input-field"] ::slotted([part="value"]) {
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  [part="input-field"] ::slotted(textarea) {
    resize: none;
  }

  [part="value"]::-ms-clear, [part="input-field"] ::slotted(input)::-ms-clear {
    display: none;
  }

  [part="clear-button"] {
    cursor: default;
  }

  [part="clear-button"]::before {
    content: "✕";
  }

  .vaadin-text-area-container {
    flex: auto;
    max-height: inherit;
    min-height: inherit;
  }

  [part="label"], [part="helper-text"], [part="error-message"] {
    flex: none;
  }

  [part="input-field"] {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  [part="value"] {
    resize: none;
  }

  [part="value"], [part="input-field"] ::slotted(*) {
    align-self: flex-start;
  }

  @keyframes vaadin-text-area-appear {
    to {
      opacity: 1;
    }

  }

  :host {
    animation: 1ms vaadin-text-area-appear;
  }

  [part="label"] {
    align-self: flex-start;
    color: var(--lumo-secondary-text-color);
    font-weight: 500;
    font-size: var(--lumo-font-size-s);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-bottom: 0.5em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([required]) [part="label"] {
    padding-right: 1em;
  }

  [part="label"]::after {
    content: var(--lumo-required-field-indicator, "•");
    transition: opacity 0.2s;
    opacity: 0;
    color: var(--lumo-primary-text-color);
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([required]:not([has-value])) [part="label"]::after {
    opacity: 1;
  }

  :host([invalid]) [part="label"]::after {
    color: var(--lumo-error-text-color);
  }

  [part="error-message"] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    color: var(--lumo-error-text-color);
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  [part="error-message"]:not(:empty)::before, [part="error-message"]:not(:empty)::after {
    content: "";
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part="error-message"] {
    max-height: 0;
    overflow: hidden;
  }

  :host([dir="rtl"]) [part="label"] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([required][dir="rtl"]) [part="label"] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir="rtl"]) [part="label"]::after {
    right: auto;
    left: 0;
  }

  :host([dir="rtl"]) [part="error-message"] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  [part$="button"] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  :host(:not([readonly])) [part$="button"]:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$="button"], :host([readonly]) [part$="button"] {
    color: var(--lumo-contrast-20pct);
  }

  [part$="button"]::before {
    font-family: "lumo-icons";
    display: block;
  }

  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--lumo-body-text-color);
    font-size: var(--lumo-font-size-m);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
  }

  :host::before {
    height: var(--lumo-text-field-size);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]:not([readonly])) [part="label"] {
    color: var(--lumo-primary-text-color);
  }

  :host([has-helper]) [part="helper-text"]::before {
    content: "";
    display: block;
    height: 0.4em;
  }

  [part="helper-text"], [part="helper-text"] ::slotted(*) {
    display: block;
    color: var(--lumo-secondary-text-color);
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  [part="value"], [part="input-field"] ::slotted(input), [part="input-field"] ::slotted(textarea), [part="input-field"] ::slotted([part="value"]) {
    cursor: inherit;
    min-height: var(--lumo-text-field-size);
    padding: 0 0.25em;
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
    -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
  }

  [part="value"]:focus, :host([focused]) [part="input-field"] ::slotted(input), :host([focused]) [part="input-field"] ::slotted(textarea) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  @-moz-document url-prefix() {
    [part="value"], [part="input-field"] ::slotted(input), [part="input-field"] ::slotted(textarea), [part="input-field"] ::slotted([part="value"]) {
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

  }

  [part="value"]::-webkit-input-placeholder {
    color: inherit;
    transition: opacity 0.175s 0.05s;
    opacity: 0.5;
  }

  [part="value"]:-ms-input-placeholder {
    color: inherit;
    opacity: 0.5;
  }

  [part="value"]::-moz-placeholder {
    color: inherit;
    transition: opacity 0.175s 0.05s;
    opacity: 0.5;
  }

  [part="value"]::placeholder {
    color: inherit;
    transition: opacity 0.175s 0.1s;
    opacity: 0.5;
  }

  [part="input-field"] {
    border-radius: var(--lumo-border-radius);
    background-color: var(--lumo-contrast-10pct);
    padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: text;
    box-sizing: border-box;
  }

  [part="input-field"]::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    pointer-events: none;
    background-color: var(--lumo-contrast-50pct);
    opacity: 0;
    transition: transform 0.15s, opacity 0.2s;
    transform-origin: 100% 0;
  }

  :host(:hover:not([readonly]):not([focused])) [part="label"], :host(:hover:not([readonly])) [part="helper-text"], :host(:hover:not([readonly])) [part="helper-text"] ::slotted(*) {
    color: var(--lumo-body-text-color);
  }

  :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
    opacity: 0.1;
  }

  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part="label"] {
      color: var(--lumo-secondary-text-color);
    }

    :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
      opacity: 0.2;
    }

  }

  :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  :host([focus-ring]) [part="input-field"] {
    box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
  }

  :host([readonly]) [part="value"]::-webkit-input-placeholder, :host([disabled]) [part="value"]::-webkit-input-placeholder {
    opacity: 0;
  }

  :host([readonly]) [part="value"]:-ms-input-placeholder, :host([disabled]) [part="value"]:-ms-input-placeholder {
    opacity: 0;
  }

  :host([readonly]) [part="value"]::-moz-placeholder, :host([disabled]) [part="value"]::-moz-placeholder {
    opacity: 0;
  }

  :host([readonly]) [part="value"]::placeholder, :host([disabled]) [part="value"]::placeholder {
    opacity: 0;
  }

  :host([readonly]) [part="input-field"] {
    color: var(--lumo-secondary-text-color);
    background-color: transparent;
    cursor: default;
  }

  :host([readonly]) [part="input-field"]::after {
    background-color: transparent;
    opacity: 1;
    border: 1px dashed var(--lumo-contrast-30pct);
  }

  :host([disabled]) {
    pointer-events: none;
  }

  :host([disabled]) [part="input-field"] {
    background-color: var(--lumo-contrast-5pct);
  }

  :host([disabled]) [part="label"], :host([disabled]) [part="helper-text"], :host([disabled]) [part="value"], :host([disabled]) [part="input-field"] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([invalid]) [part="input-field"] {
    background-color: var(--lumo-error-color-10pct);
  }

  :host([invalid]) [part="input-field"]::after {
    background-color: var(--lumo-error-color-50pct);
  }

  :host([invalid][focus-ring]) [part="input-field"] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part="input-field"] {
    color: var(--lumo-error-text-color);
  }

  :host([theme~="small"]) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~="small"][has-label]) [part="label"] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~="small"][has-label]) [part="error-message"] {
    font-size: var(--lumo-font-size-xxs);
  }

  :host([theme~="align-left"]) [part="value"] {
    text-align: left;
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([theme~="align-center"]) [part="value"] {
    text-align: center;
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([theme~="align-right"]) [part="value"] {
    text-align: right;
    --_lumo-text-field-overflow-mask-image: none;
  }

  @-moz-document url-prefix() {
    :host([theme~="align-right"]) [part="value"] {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
    }

  }

  @-moz-document url-prefix() {
    :host([theme~="align-left"]) [part="value"] {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
    }

  }

  :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::before {
    display: none;
  }

  :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::after {
    content: "";
    display: block;
    height: 0.4em;
  }

  :host([has-helper][theme~="helper-above-field"]) [part="label"] {
    order: 0;
    padding-bottom: 0.4em;
  }

  :host([has-helper][theme~="helper-above-field"]) [part="helper-text"] {
    order: 1;
  }

  :host([has-helper][theme~="helper-above-field"]) [part="input-field"] {
    order: 2;
  }

  :host([has-helper][theme~="helper-above-field"]) [part="error-message"] {
    order: 3;
  }

  [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part="input-field"] ::slotted(iron-icon) {
    color: var(--lumo-contrast-60pct);
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part="clear-button"]::before {
    content: var(--lumo-icons-cross);
  }

  :host([dir="rtl"]) [part="input-field"]::after {
    transform-origin: 0% 0;
  }

  :host([dir="rtl"]) [part="value"], :host([dir="rtl"]) [part="input-field"] ::slotted(input), :host([dir="rtl"]) [part="input-field"] ::slotted(textarea) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
  }

  :host([dir="rtl"]) [part="value"]:focus, :host([focused][dir="rtl"]) [part="input-field"] ::slotted(input), :host([focused][dir="rtl"]) [part="input-field"] ::slotted(textarea) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  @-moz-document url-prefix() {
    :host([dir="rtl"]) [part="value"], :host([dir="rtl"]) [part="input-field"] ::slotted(input), :host([dir="rtl"]) [part="input-field"] ::slotted(textarea), :host([dir="rtl"]) [part="input-field"] ::slotted([part="value"]) {
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

  }

  :host([theme~="align-left"][dir="rtl"]) [part="value"] {
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([theme~="align-center"][dir="rtl"]) [part="value"] {
    --_lumo-text-field-overflow-mask-image: none;
  }

  :host([theme~="align-right"][dir="rtl"]) [part="value"] {
    --_lumo-text-field-overflow-mask-image: none;
  }

  @-moz-document url-prefix() {
    :host([theme~="align-right"][dir="rtl"]) [part="value"] {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
    }

  }

  @-moz-document url-prefix() {
    :host([theme~="align-left"][dir="rtl"]) [part="value"] {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
    }

  }

  [part="input-field"], [part="input-field"] ::slotted(textarea) {
    padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
    height: auto;
    box-sizing: border-box;
    transition: background-color 0.1s;
    line-height: var(--lumo-line-height-s);
  }

  :host(:not([readonly])) [part="input-field"]::after {
    display: none;
  }

  :host([readonly]) [part="input-field"] {
    border: 1px dashed var(--lumo-contrast-30pct);
  }

  :host([readonly]) [part="input-field"]::after {
    border: none;
  }

  :host(:hover:not([readonly]):not([focused])) [part="input-field"] {
    background-color: var(--lumo-contrast-20pct);
  }

  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part="input-field"] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host(:active:not([readonly]):not([focused])) [part="input-field"] {
      background-color: var(--lumo-contrast-20pct);
    }

  }

  [part="value"], [part="input-field"] ::slotted(textarea) {
    line-height: inherit;
    --_lumo-text-field-overflow-mask-image: none;
  }

  [part="input-field"] ::slotted(iron-icon) {
    margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
  }

  [part="input-field"] [part="value"], [part="input-field"] ::slotted(textarea) {
    white-space: pre-wrap;
    align-self: stretch;
  }

  :host(.custom-style) [part="input-field"] {
    border: 1px solid #ccc;
    background-color: #fff;
  }

  :host([focused].custom-style) [part="input-field"] {
    border-color: #aaa;
  }
`;

registerStyles('vaadin-text-area', [unsafeCSS(textarea_default), unsafeCSS(textarea_square)]);
