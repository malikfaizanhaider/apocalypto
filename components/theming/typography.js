import '@polymer/polymer/lib/elements/custom-style.js';
import '@polymer/polymer/lib/elements/dom-module.js';
import { html } from "@polymer/polymer/lib/utils/html-tag";
const template = html `
  <custom-style>
    <style is="custom-style">
      html {


      /* Custom Font families */
      --i2c-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

      /* Font sizes */
      --i2c-font-size-xxs: .5rem;
      --i2c-font-size-xs: .8125rem;
      --i2c-font-size-s: .875rem;
      --i2c-font-size-m: 1rem;
      --i2c-font-size-l: 1.125rem;
      --i2c-font-size-xl: 1.375rem;
      --i2c-font-size-xxl: 1.75rem;
      --i2c-font-size-xxxl: 2.5rem;

      /* Line heights */
      --i2c-line-height-xs: 1.25;
      --i2c-line-height-s: 1.375;
      --i2c-line-height-m: 1.625;

    }
  </style>
</custom-style>
  <dom-module id="lumo-typography">
  <template>
    <style>
      html {
        font-family: var(--i2c-font-family);
        font-size: var(--i2c-font-size, var(--i2c-font-size-m));
        line-height: var(--i2c-line-height-m);
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */
      :host {
        font-family: var(--i2c-font-family);
        font-size: var(--i2c-font-size, var(--i2c-font-size-m));
        line-height: var(--i2c-line-height-m);
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      small,
      [theme~="font-size-s"] {
        font-size: var(--i2c-font-size-s);
        line-height: var(--i2c-line-height-s);
      }

      [theme~="font-size-xs"] {
        font-size: var(--i2c-font-size-xs);
        line-height: var(--i2c-line-height-xs);
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: 600;
        line-height: var(--i2c-line-height-xs);
        margin-top: 1.25em;
      }

      h1 {
        font-size: var(--i2c-font-size-xxxl);
        margin-bottom: 0.75em;
      }

      h2 {
        font-size: var(--i2c-font-size-xxl);
        margin-bottom: 0.5em;
      }

      h3 {
        font-size: var(--i2c-font-size-xl);
        margin-bottom: 0.5em;
      }

      h4 {
        font-size: var(--i2c-font-size-l);
        margin-bottom: 0.5em;
      }

      h5 {
        font-size: var(--i2c-font-size-m);
        margin-bottom: 0.25em;
      }

      h6 {
        font-size: var(--i2c-font-size-xs);
        margin-bottom: 0;
        text-transform: uppercase;
        letter-spacing: 0.03em;
      }

      p,
      blockquote {
        margin-top: 0.5em;
        margin-bottom: 0.75em;
      }

      a {
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      hr {
        display: block;
        align-self: stretch;
        height: 1px;
        border: 0;
        padding: 0;
        margin: var(--i2c-space-s) calc(var(--i2c-border-radius-m) / 2);
        background-color: var(--i2c-contrast-10pct);
      }

      blockquote {
        border-left: 2px solid var(--i2c-contrast-30pct);
      }

      b,
      strong {
        font-weight: 600;
      }

      /* RTL specific styles */

      blockquote[dir="rtl"] {
        border-left: none;
        border-right: 2px solid var(--i2c-contrast-30pct);
      }

    </style>
  </template>
</dom-module>`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);
//# sourceMappingURL=typography.js.map