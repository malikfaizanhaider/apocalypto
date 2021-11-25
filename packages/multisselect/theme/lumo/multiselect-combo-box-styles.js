import '@vaadin/vaadin-lumo-styles/font-icons.js';
import '@vaadin/vaadin-lumo-styles/mixins/required-field.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
const $_documentContainer = // eslint-disable-line camelcase
 html `
  <dom-module id="lumo-multiselect-combo-box" theme-for="multiselect-combo-box">
    <template>
      <style include="lumo-required-field">

        :host {
          outline: none;
          --i2c-text-field-size: var(--i2c-size-m);
          color: var(--i2c-body-text-color);
          font-size: var(--i2c-font-size-m);
          font-family: var(--i2c-font-family);
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          -webkit-tap-highlight-color: transparent;
          padding: var(--i2c-space-xs) 0;
        }

        :host::before {
          content: "\\2003";
          width: 0;
          box-sizing: border-box;
          display: inline-flex;
          align-items: center;
        }

        :host([focused]:not([readonly]):not([disabled])) [part="label"] {
          color: var(--i2c-primary-text-color);
        }

        :host(:hover:not([readonly]):not([focused]):not([disabled])) [part="label"] {
          color: var(--i2c-body-text-color);
        }

        :host([disabled]) [part="label"] {
          color: var(--i2c-disabled-text-color);
          -webkit-text-fill-color: var(--i2c-disabled-text-color);
        }

        [part="label"] {
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

        [part="input-field"] {
            border-radius: var(--i2c-border-radius);
            background-color: var(--cm-field-bg);
            padding: 0 calc(0.250em + var(--i2c-border-radius) / 4 - 1px);
            font-weight: 400;
            line-height: 1;
            position: relative;
            cursor: text;
            box-sizing: border-box;
            height: inherit;
            box-shadow: inset 0 0 0 1px var(--cm-fields-border-bg);
            box-sizing: border-box;
        }

        :host(:hover:not([readonly]):not([focused]):not([disabled])) [part="input-field"]::after {
          opacity: 0.1;
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
          background-color: var(--i2c-contrast-50pct);
          opacity: 0;
          transition: transform 0.15s, opacity 0.2s;
          transform-origin: 100% 0;
        }

        :host([invalid]) [part="input-field"] {
          background-color: var(--i2c-error-color-10pct);
        }

        /* Trigger when not focusing using the keyboard */
        :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
          transform: scaleX(0);
          transition-duration: 0.2s, 1s;
        }

        [part="readonly-container"]:not([hidden]) {
          display: inline-flex;
          align-items: center;
          color: var(--i2c-secondary-text-color);
          border: 1px dashed var(--i2c-contrast-30pct);
          border-radius: var(--i2c-border-radius);
          padding: 0 calc(0.375em + var(--i2c-border-radius) / 4 - 1px);
          font-weight: 500;
          min-height: var(--i2c-text-field-size);
          cursor: default;
        }
      </style>
    </template>
  </dom-module>

  <dom-module id="lumo-combo-box-item-theme" theme-for="vaadin-combo-box-item">
    <template>
      <style>
        [part="content"] {
          font-size: var(--i2c-font-size-s);
        }
      </style>
    </template>
  <dom-module>

  <dom-module id="lumo-input-field-theme" theme-for="vaadin-text-field">
    <template>
      <style>
        :host(.multiselect) [part="input-field"],
        :host(.multiselect) [part="input-field"]::after {
          background-color: transparent !important;
          box-shadow: none;
        }

        :host(.multiselect[compact-mode]) [part="input-field"] {
          cursor: default;
        }

        :host(.multiselect[compact-mode]) [part="input-field"]::after {
          border: none;
        }

        :host(.multiselect[compact-mode]) [part="input-field"] [part="value"] {
          visibility: hidden;
        }
      </style>
    </template>
  </dom-module>
`;
document.head.appendChild($_documentContainer.content);
//# sourceMappingURL=multiselect-combo-box-styles.js.map