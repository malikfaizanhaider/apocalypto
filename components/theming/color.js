import '@polymer/polymer/polymer-legacy.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
const template = html `
<custom-style>
  <style is="custom-style">
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


          /* opacity for dark text on a light background */
          --dark-divider-opacity: 0.12;
          --dark-disabled-opacity: 0.38; /* or hint text or icon */
          --dark-secondary-opacity: 0.54;
          --dark-primary-opacity: 0.87;

          /* opacity for light text on a dark background */
          --light-divider-opacity: 0.12;
          --light-disabled-opacity: 0.3; /* or hint text or icon */
          --light-secondary-opacity: 0.7;
          --light-primary-opacity: 1.0;

          /*i2c Dark color scheme = primary*/
          --i2c-dark-50: #e4e4e4;
          --i2c-dark-100: #bcbbbc;
          --i2c-dark-200: #908e8f;
          --i2c-dark-300: #636162;
          --i2c-dark-400: #413f40;
          --i2c-dark-500: #201d1e;
          --i2c-dark-600: #1c1a1a;
          --i2c-dark-700: #181516;
          --i2c-dark-800: #131112;
          --i2c-dark-900: #0b0a0a;
          --i2c-dark-A100: #ff5252;
          --i2c-dark-A200: #ff1f1f;
          --i2c-dark-A400: #eb0000;
          --i2c-dark-A700: #d20000;
          /*i2c Dark color scheme = primary end*/

          /*i2c blue color scheme = primary */
          --i2c-blue-50: #e9f6fc;
          --i2c-blue-100: #c8e7f8;
          --i2c-blue-200: #a3d8f3;
          --i2c-blue-300: #7ec8ee;
          --i2c-blue-400: #62bcea;
          --i2c-blue-500: #46b0e6;
          --i2c-blue-600: #3fa9e3;
          --i2c-blue-700: #37a0df;
          --i2c-blue-800: #2f97db;
          --i2c-blue-900: #2087d5;
          --i2c-blue-A100: #ffffff;
          --i2c-blue-A200: #daeeff;
          --i2c-blue-A400: #a7d7ff;
          --i2c-blue-A700: #8dcbff;
          /*i2c blue color scheme = primary end*/

          /*i2c Orange color scheme = primary*/
          --i2c-orange-50: #fdf3e5;
          --i2c-orange-100: #fae0bf;
          --i2c-orange-200: #f7cc94;
          --i2c-orange-300: #f4b769;
          --i2c-orange-400: #f1a749;
          --i2c-orange-500: #ef9829;
          --i2c-orange-600: #ed9024;
          --i2c-orange-700: #eb851f;
          --i2c-orange-800: #e87b19;
          --i2c-orange-900: #e46a0f;
          --i2c-orange-A100: #ffffff;
          --i2c-orange-A200: #ffeadd;
          --i2c-orange-A400: #ffcbaa;
          --i2c-orange-A700: #ffbb90;
          /*i2c Orange color scheme = primary end*/

          /*i2c Old Brick color scheme = primary*/
          --i2c-old-brick-50: #f1e4e5;
          --i2c-old-brick-100: #dcbcbd;
          --i2c-old-brick-200: #c48f92;
          --i2c-old-brick-300: #ac6266;
          --i2c-old-brick-400: #9b4145;
          --i2c-old-brick-500: #891f24;
          --i2c-old-brick-600: #811b20;
          --i2c-old-brick-700: #76171b;
          --i2c-old-brick-800: #6c1216;
          --i2c-old-brick-900: #590a0d;
          --i2c-old-brick-A100: #ff8d90;
          --i2c-old-brick-A200: #ff5a5f;
          --i2c-old-brick-A400: #ff272d;
          --i2c-old-brick-A700: #ff0e14;
          /*i2c Old Brick color scheme = primary end*/

          /*i2c Green color scheme = secondary*/
          --i2c-green-50: #e1f7e9;
          --i2c-green-100: #b3ecc9;
          --i2c-green-200: #81e0a5;
          --i2c-green-300: #4fd380;
          --i2c-green-400: #29c965;
          --i2c-green-500: #03c04a;
          --i2c-green-600: #03ba43;
          --i2c-green-700: #02b23a;
          --i2c-green-800: #02aa32;
          --i2c-green-900: #019c22;
          --i2c-green-A100: #c7ffcf;
          --i2c-green-A200: #94ffa4;
          --i2c-green-A400: #61ff78;
          --i2c-green-A700: #47ff62;
          /*i2c Green color scheme = secondary end*/

          /*i2c pomegranate color scheme = secondary*/
          --i2c-pomegranate-50: #fde9e5;
          --i2c-pomegranate-100: #fac8bd;
          --i2c-pomegranate-200: #f7a391;
          --i2c-pomegranate-300: #f37e65;
          --i2c-pomegranate-400: #f16344;
          --i2c-pomegranate-500: #ee4723;
          --i2c-pomegranate-600: #ec401f;
          --i2c-pomegranate-700: #e9371a;
          --i2c-pomegranate-800: #e72f15;
          --i2c-pomegranate-900: #e2200c;
          --i2c-pomegranate-A100: #ffffff;
          --i2c-pomegranate-A200: #ffdcda;
          --i2c-pomegranate-A400: #ffada7;
          --i2c-pomegranate-A700: #ff958d;
          /*i2c pomegranate color scheme = secondary end*/

          /*i2c manatee color scheme = secondary*/
          --i2c-manatee-50: #f1f2f5;
          --i2c-manatee-100: #dddee6;
          --i2c-manatee-200: #c7c8d5;
          --i2c-manatee-300: #b0b1c4;
          --i2c-manatee-400: #9fa1b7;
          --i2c-manatee-500: #8e90aa;
          --i2c-manatee-600: #8688a3;
          --i2c-manatee-700: #7b7d99;
          --i2c-manatee-800: #717390;
          --i2c-manatee-900: #5f617f;
          --i2c-manatee-A100: #f0f1ff;
          --i2c-manatee-A200: #bdc1fe;
          --i2c-manatee-A400: #8a91ff;
          --i2c-manatee-A700: #7079ff;
          /*i2c manatee color scheme = secondary end*/

          /*i2c athens-gray color scheme = secondary*/
          --i2c-athens-gray-50: #fcfcfd;
          --i2c-athens-gray-100: #f8f8fa;
          --i2c-athens-gray-200: #f4f4f7;
          --i2c-athens-gray-300: #efeff3;
          --i2c-athens-gray-400: #ebebf1;
          --i2c-athens-gray-500: #e8e8ee;
          --i2c-athens-gray-600: #e5e5ec;
          --i2c-athens-gray-700: #e2e2e9;
          --i2c-athens-gray-800: #dedee7;
          --i2c-athens-gray-900: #d8d8e2;
          --i2c-athens-gray-1000: #D8DDE4;
          --i2c-athens-gray-A100: #ffffff;
          --i2c-athens-gray-A200: #ffffff;
          --i2c-athens-gray-A400: #ffffff;
          --i2c-athens-gray-A700: #ffffff;
          /*i2c athens-gray color scheme = secondary end*/

          /*i2c Grey color scheme */
          --i2c-grey-50: #e7e7e7;
          --i2c-grey-100: #c2c2c2;
          --i2c-grey-200: #999999;
          --i2c-grey-300: #707070;
          --i2c-grey-400: #525252;
          --i2c-grey-500: #333333;
          --i2c-grey-600: #2e2e2e;
          --i2c-grey-700: #272727;
          --i2c-grey-800: #202020;
          --i2c-grey-900: #141414;
          --i2c-grey-1000: #aaaaaa;
          --i2c-grey-1100: #888888;
          --i2c-grey-1200: #6f6f6f;
          --i2c-grey-1300: #555555;
          --i2c-grey-1400: #444444;
          --i2c-grey-1500: #cccccc;
          --i2c-grey-1600: #f7f7f7;
          --i2c-grey-1700: #dddddd;
          --i2c-grey-1800: #dfe6ee;
          --i2c-grey-A100: #ef6e6e;
          --i2c-grey-A200: #ea4040;
          --i2c-grey-A400: #f60000;
          --i2c-grey-A700: #dd0000;
          /*i2c Grey color scheme end*/

          /*i2c font background color scheme */
          --i2c-bg-1600: var(--i2c-grey-1600);
          /*i2c font background color scheme end*/

          /*i2c font color scheme */
          --i2c-font-200: var(--i2c-grey-500);
          --i2c-font-400: var(--i2c-grey-400);
          --i2c-font-500: var(--i2c-grey-500);
          --i2c-font-700: var(--i2c-grey-700);
          --i2c-font-1100: var(--i2c-grey-1100);
          --i2c-font-1200: var(--i2c-grey-1200);
          --i2c-font-1300: var(--i2c-grey-1300);
          --i2c-font-1400: var(--i2c-grey-1400);
          --i2c-font-1500: var(--i2c-grey-1500);
          --i2c-font-1800: var(--i2c-grey-1800);
          /*i2c font color scheme end*/

          /*i2c border color scheme */
          --i2c-border-200: var(--i2c-grey-200);
          --i2c-border-1500: var(--i2c-grey-1500);
          --i2c-border-1700: var(--i2c-grey-1700);
          /*i2c border color scheme */

          /* Text */
          --i2c-body-text-color: var(--i2c-grey-900);

          /* Fields*/
          --cm-field-primary-color: var(--i2c-blue-500);
          --cm-fields-lable-color: var(--i2c-grey-1300);
          --cm-fields-lable-focused-color: var(--i2c-blue-500);
          --cm-field-bg: #ffffff;
          --cm-field-fg: var(--i2c-grey-500);
          --cm-fields-border-bg: var(--i2c-grey-1500);

          /* Fields Disabled*/
          --cm-fields-disabled-bg: #F9F9F9;
          --cm-fields-disabled-border: #DFE3E9;

          /* Fields Error*/
          --cm-fields-error-text: #EE4723;


          --cm-fields-focused: var(--i2c-blue-500);
          --cm-filed-underline-bg: var(--cm-fields-border-bg);
          --cm-filed-underline-touched-bg: var(--i2c-blue-500);


          /*--------------------------------------Only for demo-----------------------------------------------*/
          --mdc-theme-primary: var(--i2c-blue-500);
          --mdc-select-fill-color: #ffffff;
          --mdc-select-label-ink-color: rgba(0, 0, 0, 0.75);
          --mdc-select-dropdown-icon-color: var(--i2c-blue-500);

          --mdc-select-idle-line-color: var(--i2c-blue-100);
          --mdc-select-hover-line-color: var(--i2c-blue-500);

          --mdc-select-outlined-idle-border-color: var(--i2c-blue-100);
          --mdc-select-outlined-hover-border-color: var(--i2c-blue-500);

          /* inherits the styles of mwc-menu internally */
          --mdc-menu-item-height: 30px;
          --mdc-theme-surface: #ffffff;

          /* inherits the styles of mwc-list internally */
          --mdc-list-vertical-padding: 0px;
          --mdc-list-side-padding: 30px;


          /* Base (background) */
          --i2c-base-color: #f3f5f7;


          /*---Buttons---*/

          /* Tint */
          --i2c-tint-5pct: hsla(0, 0%, 100%, 0.3);
          --i2c-tint-10pct: hsla(0, 0%, 100%, 0.37);
          --i2c-tint-20pct: hsla(0, 0%, 100%, 0.44);
          --i2c-tint-30pct: hsla(0, 0%, 100%, 0.5);
          --i2c-tint-40pct: hsla(0, 0%, 100%, 0.57);
          --i2c-tint-50pct: hsla(0, 0%, 100%, 0.64);
          --i2c-tint-60pct: hsla(0, 0%, 100%, 0.7);
          --i2c-tint-70pct: hsla(0, 0%, 100%, 0.77);
          --i2c-tint-80pct: hsla(0, 0%, 100%, 0.84);
          --i2c-tint-90pct: hsla(0, 0%, 100%, 0.9);
          --i2c-tint: #FFF;

          /* Shade */
          --i2c-shade-5pct: hsla(214, 61%, 25%, 0.05);
          --i2c-shade-10pct: hsla(214, 57%, 24%, 0.1);
          --i2c-shade-20pct: hsla(214, 53%, 23%, 0.16);
          --i2c-shade-30pct: hsla(214, 50%, 22%, 0.26);
          --i2c-shade-40pct: hsla(214, 47%, 21%, 0.38);
          --i2c-shade-50pct: hsla(214, 45%, 20%, 0.5);
          --i2c-shade-60pct: hsla(214, 43%, 19%, 0.61);
          --i2c-shade-70pct: hsla(214, 42%, 18%, 0.72);
          --i2c-shade-80pct: hsla(214, 41%, 17%, 0.83);
          --i2c-shade-90pct: hsla(214, 40%, 16%, 0.94);
          --i2c-shade: hsl(214, 35%, 15%);

          /* Contrast */
          --i2c-contrast-5pct: var(--i2c-shade-5pct);
          --i2c-contrast-10pct: var(--i2c-shade-10pct);
          --i2c-contrast-20pct: var(--i2c-shade-20pct);
          --i2c-contrast-30pct: var(--i2c-shade-30pct);
          --i2c-contrast-40pct: var(--i2c-shade-40pct);
          --i2c-contrast-50pct: var(--i2c-shade-50pct);
          --i2c-contrast-60pct: var(--i2c-shade-60pct);
          --i2c-contrast-70pct: var(--i2c-shade-70pct);
          --i2c-contrast-80pct: var(--i2c-shade-80pct);
          --i2c-contrast-90pct: var(--i2c-shade-90pct);
          --i2c-contrast: var(--i2c-shade);

          /* Text */
          --i2c-header-text-color: var(--i2c-contrast);
          /*--i2c-body-text-color: var(--i2c-contrast-90pct);*/
          --i2c-secondary-text-color: var(--i2c-contrast-70pct);
          --i2c-tertiary-text-color: var(--i2c-contrast-50pct);
          --i2c-disabled-text-color: var(--i2c-contrast-30pct);


          /* Primary */
          --i2c-primary-color: var(--i2c-blue-500);
          --i2c-primary-color-50pct: var(--i2c-blue-200);
          --i2c-primary-color-10pct: var(--i2c-blue-50);
          --i2c-primary-text-color: var(--i2c-primary-color);
          --i2c-primary-contrast-color: #FFF;

          /* Error */
          --i2c-error-color: hsl(3, 100%, 61%);
          --i2c-error-color-50pct: hsla(3, 100%, 60%, 0.5);
          --i2c-error-color-10pct: hsla(3, 100%, 60%, 0.1);
          --i2c-error-text-color: hsl(3, 92%, 53%);
          --i2c-error-contrast-color: #FFF;

          /* Success */
          --i2c-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */
          --i2c-success-color-50pct: hsla(145, 76%, 44%, 0.55);
          --i2c-success-color-10pct: hsla(145, 76%, 44%, 0.12);
          --i2c-success-text-color: hsl(145, 100%, 32%);
          --i2c-success-contrast-color: #FFF;

          /* Highlight */
          --i2c-highlight-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */
          --i2c-highlight-color-50pct: hsla(145, 76%, 44%, 0.55);
          --i2c-highlight-color-10pct: hsla(145, 76%, 44%, 0.12);
          --i2c-highlight-text-color: hsl(145, 100%, 32%);
          --i2c-highlight-contrast-color: #FFF;
      }

    [theme~="dark"] {
        /* Base (background) */
        --i2c-base-color: hsl(214, 35%, 21%);

        /* Tint */
        --i2c-tint-5pct: hsla(214, 65%, 85%, 0.06);
        --i2c-tint-10pct: hsla(214, 60%, 80%, 0.14);
        --i2c-tint-20pct: hsla(214, 64%, 82%, 0.23);
        --i2c-tint-30pct: hsla(214, 69%, 84%, 0.32);
        --i2c-tint-40pct: hsla(214, 73%, 86%, 0.41);
        --i2c-tint-50pct: hsla(214, 78%, 88%, 0.5);
        --i2c-tint-60pct: hsla(214, 82%, 90%, 0.6);
        --i2c-tint-70pct: hsla(214, 87%, 92%, 0.7);
        --i2c-tint-80pct: hsla(214, 91%, 94%, 0.8);
        --i2c-tint-90pct: hsla(214, 96%, 96%, 0.9);
        --i2c-tint: hsl(214, 100%, 98%);

        /* Shade */
        --i2c-shade-5pct: hsla(214, 0%, 0%, 0.07);
        --i2c-shade-10pct: hsla(214, 4%, 2%, 0.15);
        --i2c-shade-20pct: hsla(214, 8%, 4%, 0.23);
        --i2c-shade-30pct: hsla(214, 12%, 6%, 0.32);
        --i2c-shade-40pct: hsla(214, 16%, 8%, 0.41);
        --i2c-shade-50pct: hsla(214, 20%, 10%, 0.5);
        --i2c-shade-60pct: hsla(214, 24%, 12%, 0.6);
        --i2c-shade-70pct: hsla(214, 28%, 13%, 0.7);
        --i2c-shade-80pct: hsla(214, 32%, 13%, 0.8);
        --i2c-shade-90pct: hsla(214, 33%, 13%, 0.9);
        --i2c-shade: hsl(214, 33%, 13%);

        /* Contrast */
        --i2c-contrast-5pct: var(--i2c-tint-5pct);
        --i2c-contrast-10pct: var(--i2c-tint-10pct);
        --i2c-contrast-20pct: var(--i2c-tint-20pct);
        --i2c-contrast-30pct: var(--i2c-tint-30pct);
        --i2c-contrast-40pct: var(--i2c-tint-40pct);
        --i2c-contrast-50pct: var(--i2c-tint-50pct);
        --i2c-contrast-60pct: var(--i2c-tint-60pct);
        --i2c-contrast-70pct: var(--i2c-tint-70pct);
        --i2c-contrast-80pct: var(--i2c-tint-80pct);
        --i2c-contrast-90pct: var(--i2c-tint-90pct);
        --i2c-contrast: var(--i2c-tint);

        /* Text */
        --i2c-header-text-color: var(--i2c-contrast);
        --i2c-body-text-color: var(--i2c-contrast-90pct);
        --i2c-secondary-text-color: var(--i2c-contrast-70pct);
        --i2c-tertiary-text-color: var(--i2c-contrast-50pct);
        --i2c-disabled-text-color: var(--i2c-contrast-30pct);

        /* Primary */
        --i2c-primary-color: hsl(214, 86%, 55%);
        --i2c-primary-color-50pct: hsla(214, 86%, 55%, 0.5);
        --i2c-primary-color-10pct: hsla(214, 90%, 63%, 0.1);
        --i2c-primary-text-color: hsl(214, 100%, 70%);
        --i2c-primary-contrast-color: #FFF;

        /* Error */
        --i2c-error-color: hsl(3, 90%, 63%);
        --i2c-error-color-50pct: hsla(3, 90%, 63%, 0.5);
        --i2c-error-color-10pct: hsla(3, 90%, 63%, 0.1);
        --i2c-error-text-color: hsl(3, 100%, 67%);

        /* Success */
        --i2c-success-color: hsl(145, 65%, 42%);
        --i2c-success-color-50pct: hsla(145, 65%, 42%, 0.5);
        --i2c-success-color-10pct: hsla(145, 65%, 42%, 0.1);
        --i2c-success-text-color: hsl(145, 85%, 47%);
    }

    html {
        color: var(--i2c-body-text-color);
        background-color: var(--i2c-base-color);
    }
    
    [theme~="dark"] {
        color: var(--i2c-body-text-color);
        background-color: var(--i2c-base-color);
    }
      
  </style>
</custom-style>
`;
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);
//# sourceMappingURL=color.js.map
