/**
 @license
 Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at
 http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
 http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
 found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
 part of the polymer project is also subject to an additional IP rights grant
 found at http://polymer.github.io/PATENTS.txt
 */
/* Taken from
 * https://www.google.com/design/spec/style/color.html#color-ui-color-application
 */
import '@polymer/polymer/polymer-legacy.js';
import './color.js';
import './typography.js';
import './style.js';
import './sizing.js';
import './spacing.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
const template = html `
  <custom-style>
    <style is='custom-style'>
      html {

        /**--Core Variable--**/
        --cm-lable-font-color: red;
        --cm-lable-font-weight: green;
        --cm-lable-font-hover: red;
        --cm-field-bg-color: #fff;
        --cm-field-bg-hover: #fff;
        --cm-field-border-color: yellow;
        --cm-field-border-hover: yellow;
        --cm-field-radius: 8px;

        /*
         * You can use these generic variables in your elements for easy theming.
         * For example, if all your elements use \`--primary-text-color\` as its main
         * color, then switching from a light to a dark theme is just a matter of
         * changing the value of \`--primary-text-color\` in your application.
         */
        --primary-text-color: var(--light-theme-text-color);
        --primary-background-color: var(--light-theme-background-color);
        --secondary-text-color: var(--light-theme-secondary-color);
        --disabled-text-color: var(--light-theme-disabled-color);
        --divider-color: var(--light-theme-divider-color);
        --error-color: var(--i2c-pomegranate-500);

        /*
         * Primary and accent colors. Also see color.js for more colors.
         */
        --primary-color: var(--i2c-blue-500);
        --light-primary-color: var(--i2c-blue-100);
        --dark-primary-color: var(--i2c-blue-700);

        --accent-color: var(--i2c-orange-A200);
        --light-accent-color: var(--i2c-orange-A100);
        --dark-accent-color: var(--i2c-orange-A400);


        /*
         * Material Design Light background theme
         */
        --light-theme-background-color: #ffffff;
        --light-theme-base-color: #000000;
        --light-theme-text-color: var(--i2c-dark-500);
        --light-theme-secondary-color: #999999; /* for secondary text and icons */
        --light-theme-disabled-color: #9b9b9b; /* disabled/hint text */
        --light-theme-divider-color: #dbdbdb;

        /*
         * Material Design Dark background theme
         */
        --dark-theme-background-color: var(--i2c-dark-500);
        --dark-theme-base-color: #ffffff;
        --dark-theme-text-color: #ffffff;
        --dark-theme-secondary-color: #bcbcbc; /* for secondary text and icons */
        --dark-theme-disabled-color: #646464; /* disabled/hint text */
        --dark-theme-divider-color: #3c3c3c;

        /*
         * Deprecated values because of their confusing names.
         */
        --text-primary-color: var(--dark-theme-text-color);
        --default-primary-color: var(--primary-color);

        --input-container-input-font: 14px;
        --input-border-width: 1px;
        --floating-input-line-height: 30px;

        --outline-input-container-input-radius: 4px;
        --outline-input-line-height: 36px;
        --outline-input-width: 100%;
        --outline-input-container-input-padding: 0 12px;
        --outline-input-container-label-padding: 0 0 10px;
        --outline-input-container-label-font: var(--input-container-input-font);
          
      }
    </style>
  </custom-style>`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);
//# sourceMappingURL=default-theme.js.map