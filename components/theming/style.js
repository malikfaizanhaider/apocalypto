import '@polymer/polymer/lib/elements/custom-style.js';
import { html } from "@polymer/polymer/lib/utils/html-tag";
const template = html `
<custom-style>
  <style is="custom-style">
    html {
        
      /*--Custom Style--*/

      /* Border radius */
      --i2c-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
      --i2c-border-radius-m: var(--i2c-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
      --i2c-border-radius-l: 0.5em; /* Dialog, notification, etc */
      --i2c-border-radius: 0.25em; /* Deprecated */

      /* Shadow */
      --i2c-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
      --i2c-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
      --i2c-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
      --i2c-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
      --i2c-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

      /* Clickable element cursor */
      --i2c-clickable-cursor: default;
    }
  </style>
</custom-style>
`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);
//# sourceMappingURL=style.js.map