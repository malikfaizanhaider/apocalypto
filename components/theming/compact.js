import './sizing.js';
import './spacing.js';
import '@polymer/polymer/lib/elements/custom-style.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<custom-style>
  <style>
    /* Browsers that fall back to the polyfill require plain html selector */
    html {
      
      --i2c-size-xl: 3rem;
      --i2c-size-l: 2.5rem;
      --i2c-size-m: 2rem;
      --i2c-size-s: 1.75rem;
      --i2c-size-xs: 1.5rem;
      --i2c-font-size: 1rem;
      --i2c-font-size-xxxl: 1.75rem;
      --i2c-font-size-xxl: 1.375rem;
      --i2c-font-size-xl: 1.125rem;
      --i2c-font-size-l: 1rem;
      --i2c-font-size-m: 0.875rem;
      --i2c-font-size-s: 0.8125rem;
      --i2c-font-size-xs: 0.75rem;
      --i2c-font-size-xxs: 0.6875rem;
      --i2c-line-height-m: 1.4;
      --i2c-line-height-s: 1.2;
      --i2c-line-height-xs: 1.1;
      --i2c-space-xl: 1.875rem;
      --i2c-space-l: 1.25rem;
      --i2c-space-m: 0.625rem;
      --i2c-space-s: 0.3125rem;
      --i2c-space-xs: 0.1875rem;
      
    }

    /* Need to use a separete and stronger selector for other browsers where
    the imports added later would otherwise override the property values */
    html:not(div) {
      --i2c-size-xl: 3rem;
      --i2c-size-l: 2.5rem;
      --i2c-size-m: 2rem;
      --i2c-size-s: 1.75rem;
      --i2c-size-xs: 1.5rem;
      --i2c-font-size: 1rem;
      --i2c-font-size-xxxl: 1.75rem;
      --i2c-font-size-xxl: 1.375rem;
      --i2c-font-size-xl: 1.125rem;
      --i2c-font-size-l: 1rem;
      --i2c-font-size-m: 0.875rem;
      --i2c-font-size-s: 0.8125rem;
      --i2c-font-size-xs: 0.75rem;
      --i2c-font-size-xxs: 0.6875rem;
      --i2c-line-height-m: 1.4;
      --i2c-line-height-s: 1.2;
      --i2c-line-height-xs: 1.1;
      --i2c-space-xl: 1.875rem;
      --i2c-space-l: 1.25rem;
      --i2c-space-m: 0.625rem;
      --i2c-space-s: 0.3125rem;
      --i2c-space-xs: 0.1875rem;
    }
  </style>
</custom-style>`;

document.head.appendChild($_documentContainer.content);
