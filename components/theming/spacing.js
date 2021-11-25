import '@polymer/polymer/lib/elements/custom-style.js';
import { html } from "@polymer/polymer/lib/utils/html-tag";
const template = html `
<custom-style>
  <style is="custom-style">
    html {
        
       /*--Custom Style--*/
        /* Square */
      --i2c-space-xs: 0.25rem;
      --i2c-space-s: 0.5rem;
      --i2c-space-m: 1rem;
      --i2c-space-l: 1.5rem;
      --i2c-space-xl: 2.5rem;

      /* Wide */
      --i2c-space-wide-xs: calc(var(--i2c-space-xs) / 2) var(--i2c-space-xs);
      --i2c-space-wide-s: calc(var(--i2c-space-s) / 2) var(--i2c-space-s);
      --i2c-space-wide-m: calc(var(--i2c-space-m) / 2) var(--i2c-space-m);
      --i2c-space-wide-l: calc(var(--i2c-space-l) / 2) var(--i2c-space-l);
      --i2c-space-wide-xl: calc(var(--i2c-space-xl) / 2) var(--i2c-space-xl);

      /* Tall */
      --i2c-space-tall-xs: var(--i2c-space-xs) calc(var(--i2c-space-xs) / 2);
      --i2c-space-tall-s: var(--i2c-space-s) calc(var(--i2c-space-s) / 2);
      --i2c-space-tall-m: var(--i2c-space-m) calc(var(--i2c-space-m) / 2);
      --i2c-space-tall-l: var(--i2c-space-l) calc(var(--i2c-space-l) / 2);
      --i2c-space-tall-xl: var(--i2c-space-xl) calc(var(--i2c-space-xl) / 2);

    }
  </style>
</custom-style>
`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);
//# sourceMappingURL=spacing.js.map