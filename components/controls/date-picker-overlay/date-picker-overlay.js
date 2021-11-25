import { registerStyles, css, unsafeCSS } from '@vaadin/vaadin-themable-mixin/register-styles.js';

import '@vaadin/vaadin-date-picker/src/vaadin-date-picker.js';
import '@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker.js';
import '@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js'

const genericTextEditorStyles = css`

`;

const CMTextEditorStyles = css`
  [part='date'][focused]::before {
    background-color: red;
  }
`;

registerStyles('vaadin-date-picker', [unsafeCSS(CMTextEditorStyles), unsafeCSS(genericTextEditorStyles)]);
