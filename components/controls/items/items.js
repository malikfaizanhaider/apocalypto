import { registerStyles, css, unsafeCSS } from '@vaadin/vaadin-themable-mixin/register-styles.js';
// Import the non-themed component
import '@vaadin/vaadin-item/vaadin-item.js';
// Optional: reuse Lumo styles for button
import '@vaadin/vaadin-item/theme/lumo/vaadin-item.js';
const genericItemStyles = css `
:host {

}
`;
const CMItemStyles = css `
  :host {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    font-family: var(--lumo-font-family);
    font-size: var(--i2c-font-size-xs);
    line-height: var(--lumo-line-height-xs);
    padding: 0.5em 1em;
    min-height: var(--lumo-size-m);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }

  /* Checkmark */
  :host([tabindex])::before {
    display: none;
    content: var(--lumo-icons-checkmark);
    font-family: lumo-icons;
    font-size: var(--lumo-icon-size-m);
    line-height: 1;
    font-weight: normal;
    width: 1em;
    height: 1em;
    margin: 0;
    color: var(--i2c-blue-A100);
    flex: none;
    opacity: 0;
    transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), opacity 0.1s;
  }
`;
registerStyles('vaadin-item', [unsafeCSS(genericItemStyles), unsafeCSS(CMItemStyles)]);
//# sourceMappingURL=items.js.map