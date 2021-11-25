import { registerStyles, css, unsafeCSS } from '@vaadin/vaadin-themable-mixin/register-styles.js';
const genericListStyles = css `
:host {

}
`;
const CMListStyles = css `
  [part='items'] ::slotted(vaadin-item:hover:not([disabled])) {
    color: var(--i2c-blue-500);
    background-color: var(--lumo-primary-color-10pct);
  }

  [part='items'] ::slotted(vaadin-item:hover[selected]:not([disabled])),
  [part='items'] ::slotted(vaadin-item[selected]:not([disabled])){
    color: var(--i2c-blue-A100);
    background-color: var(--i2c-blue-500);
  }

    [part='items'] ::slotted(vaadin-item)::before {
       opacity: 0;
    }

`;
registerStyles('vaadin-list-box', [unsafeCSS(genericListStyles), unsafeCSS(CMListStyles)]);
//# sourceMappingURL=list.js.map