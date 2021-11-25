import { registerStyles, css, unsafeCSS } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-rich-text-editor/vaadin-rich-text-editor.js';
import '@vaadin/vaadin-rich-text-editor/theme/lumo/vaadin-rich-text-editor.js';
const genericTextEditorStyles = css `

`;
const CMTextEditorStyles = css `
  :host([theme~="i2c-default"]) {
    --lumo-primary-text-color: var(--i2c-blue-500);
    --lumo-primary-color: var(--i2c-blue-500);
    background-color: #ffffff;
  }

  :host([theme~="i2c-default"]) [part~='toolbar'] {
    background-color: var(--i2c-blue-A100);
  }

  :host([theme~="i2c-default"]) [part~='toolbar'] {
    background-color: var(--i2c-blue-A100);
  }

  :host([theme~="i2c-default"]) [part~='toolbar-group'] {
    border: 1px solid var(--i2c-contrast-10pct);
    border-radius: var(--lumo-border-radius);
  }

  :host([theme~="i2c-default"]) [part~='toolbar-button'] {
    margin: 0;
    border-radius:0;
    border-right: 1px solid var(--i2c-contrast-10pct);
  }
  :host([theme~="i2c-default"]) [part~='toolbar-button']:last-child {
    border: none;
  }
`;
registerStyles('vaadin-rich-text-editor', [unsafeCSS(CMTextEditorStyles), unsafeCSS(genericTextEditorStyles)]);
//# sourceMappingURL=text-editor.js.map