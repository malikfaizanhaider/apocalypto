import { registerStyles, css, unsafeCSS } from '@vaadin/vaadin-themable-mixin/register-styles.js';
import '@vaadin/vaadin-tabs';
const genericTabStyles = css `
    :host {
        --lumo-primary-text-color: var(--i2c-blue-800);
        --lumo-primary-color: var(--i2c-blue-800);
    }
`;
const squareTabStyles = css `
    :host([theme~="i2c-default"]) {
        --lumo-primary-text-color: var(--i2c-blue-500);
        --lumo-primary-color: var(--i2c-blue-500);
        background-color: #ffffff;
    }
`;
registerStyles('vaadin-tabs', [unsafeCSS(squareTabStyles), unsafeCSS(genericTabStyles)]);
//# sourceMappingURL=tabs.js.map