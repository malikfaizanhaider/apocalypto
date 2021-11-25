import { registerStyles, css, unsafeCSS } from '@vaadin/vaadin-themable-mixin/register-styles.js';
// Import the non-themed component
import '@vaadin/vaadin-details/src/vaadin-details.js';
// Optional: reuse Lumo styles for button
import '@vaadin/vaadin-details/theme/lumo/vaadin-details.js';
const genericDetailStyles = css `

`;
const CMDetailStyles = css `

    @media (hover: hover) {
        :host([theme~="i2c-menus"]:not([disabled])) [part="summary"]:hover,
        :host([theme~="i2c-menus"]:not([disabled])) [part="summary"]:hover [part="toggle"] {
            color: var(--i2c-blue-500) ;
        }
        
    :host([theme~="i2c-menus"]) [part="summary"] {
        font-size: var(--i2c-font-size-s);
        color: var(--i2c-dark-900);
        font-weight: 400;
    }

    :host([theme~="i2c-menus"]) [part="toggle"] {
        color: var(--i2c-dark-900);
    }
}

:host([theme~="i2c-menus"]) [part="content"] { {
    font-size: var(--i2c-font-size-s);
    color: var(--i2c-shade-90pct) !important
}

    a {
        text-decoration: none !important;
        color: var(--lumo-primary-text-color) !important;
    }
`;
registerStyles('vaadin-details', [unsafeCSS(genericDetailStyles), unsafeCSS(CMDetailStyles)]);
//# sourceMappingURL=details.js.map