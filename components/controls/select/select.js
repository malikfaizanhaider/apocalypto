import { registerStyles, css, unsafeCSS } from '@vaadin/vaadin-themable-mixin/register-styles.js';

// Import the non-themed component
import '@vaadin/vaadin-select/src/vaadin-select.js';

// Optional: reuse Lumo styles for button
import '@vaadin/vaadin-select/theme/lumo/vaadin-select.js';
import '@vaadin/vaadin-select/src/vaadin-select-overlay.js';

const genericSelectStyles = css`

`;

const CMSelectStyles = css`
  vaadin-select-overlay {
    background-color: red;
  }
`;

registerStyles('vaadin-select', [unsafeCSS(genericSelectStyles), unsafeCSS(CMSelectStyles)]);
