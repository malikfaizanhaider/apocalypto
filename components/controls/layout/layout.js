import { registerStyles, css, unsafeCSS } from '@vaadin/vaadin-themable-mixin/register-styles.js';
// Import the non-themed component
import '@vaadin/vaadin-app-layout/src/vaadin-app-layout.js';
import '@vaadin/vaadin-app-layout/theme/lumo/vaadin-app-layout.js';
// Optional: reuse Lumo styles for button
import '@vaadin/vaadin-app-layout/vaadin-drawer-toggle.js';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout.js';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout.js';
const genericLStyles = css `
:host {
  text-transform: initial;
  font-weight: 400;
}
`;
const CMLStyles = css `
    
    #drawer {
        background-color: #ffffff;
    }
`;
registerStyles('vaadin-app-layout', [unsafeCSS(genericLStyles), unsafeCSS(CMLStyles)]);
//# sourceMappingURL=layout.js.map