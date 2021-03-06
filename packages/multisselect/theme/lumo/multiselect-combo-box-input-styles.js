import '@vaadin/vaadin-lumo-styles/typography.js';
import '@vaadin/vaadin-lumo-styles/style.js';
import '@vaadin/vaadin-lumo-styles/mixins/field-button.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
const $_documentContainer = // eslint-disable-line camelcase
 html `
  <dom-module id="lumo-multiselect-combo-box-input" theme-for="multiselect-combo-box-input">
    <template>
      <style include="lumo-field-button">
        :host {
          display: flex;
          border-radius: var(--lumo-border-radius);
          border-color: var(--lumo-contrast-10pct);
          outline: none;
        }

        [part="toggle-button"]::before {
            content: var(--lumo-icons-search) !important;
        }

        :host([disabled]) [part="token-label"],
        :host([disabled]) [part="token-remove-button"],
        :host([disabled]) [part="compact-mode-label"] {
          color: var(--lumo-disabled-text-color);
          -webkit-text-fill-color: var(--lumo-disabled-text-color);
          pointer-events: none;
        }

        [part="input-field"] {
          flex: 1 1;
          min-width: auto;
          padding: 0;
        }

        [part="compact-mode-label"] {
          display: flex;
          flex-grow: 1;
          align-items: center;
          margin: var(--lumo-space-xs);
          padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
          color: var(--lumo-body-text-color);
          font-weight: 500;
          cursor: default;
        }

        [part="tokens"] {
          display: flex;
          flex-wrap: wrap;
          flex-grow: 1;
          width: 100%;
          min-width: 0;
        }

        [part="token"] {
          display: flex;
          align-items: center;
          padding-left: var(--i2c-space-s);
          margin: var(--i2c-space-xs) var(--i2c-space-xs) var(--i2c-space-xs) 0;
          border-radius: var(--lumo-border-radius);
            background-color: #F8F4F4;
          cursor: default;
          white-space: nowrap;
          height: calc(var(--lumo-size-m) - 2 * var(--lumo-space-xs));
          box-sizing: border-box;
          min-width: 0;
        }

        [part="token"] + [part="token"] {
          margin-left: 0;
        }

        [part="token-label"] {
          display: flex;
          align-items: center;
          font-size: var(--i2c-font-size-xs);
          color: var(--i2c-body-text-color);
          font-weight: 400;
          overflow: hidden;
        }

        [part="token-remove-button"] {
          font-size: var(--lumo-icon-size-s);
          padding-right: var(--lumo-space-xs);
        }

        [part="token-remove-button"]::before {
          content: var(--lumo-icons-cross);
        }

        [part="clear-button"]::before {
          content: var(--lumo-icons-cross);
        }

        [part="toggle-button"]::before {
          content: var(--lumo-icons-dropdown);
        }

        :host(:not([has-value])) [part="clear-button"] {
          display: none;
        }
      </style>
    </template>
  </dom-module>
`;
document.head.appendChild($_documentContainer.content);
//# sourceMappingURL=multiselect-combo-box-input-styles.js.map