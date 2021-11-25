import '@polymer/polymer/polymer-legacy.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
const template = html `
  <custom-style>
    <style is='custom-style'>
      html {
        --i2c-size-xxs: 1.25rem;
        --i2c-size-xs: 1.625rem;
        --i2c-size-s: 1.875rem;
        --i2c-size-m: 2.25rem;
        --i2c-size-l: 2.75rem;
        --i2c-size-xl: 3.5rem;

        /* Icons */
          --i2c-icon-size-xs: 0.90em;
        --i2c-icon-size-s: 1.25em;
        --i2c-icon-size-m: 1.5em;
        --i2c-icon-size-l: 2.25em;
        /* For backwards compatibility */
        --i2c-icon-size: var(--i2c-icon-size-m);

      }
    </style>
  </custom-style>
`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);
//# sourceMappingURL=sizing.js.map