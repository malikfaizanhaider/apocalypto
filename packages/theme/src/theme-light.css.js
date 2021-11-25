/* Copyright 2021 i2c Inc. All rights reserved. */
import { css } from 'lit-element';
const styles = css `
    :host,
    :root {
        --cm-global-color-status: Verified;
        --cm-global-color-version: 5.1;
        --cm-global-color-celery-400: #44b556;
        --cm-global-color-celery-500: #3da74e;
        --cm-global-color-celery-600: #379947;
        --cm-global-color-celery-700: #318b40;
        --cm-global-color-chartreuse-400: #85d044;
        --cm-global-color-chartreuse-500: #7cc33f;
        --cm-global-color-chartreuse-600: #73b53a;
        --cm-global-color-chartreuse-700: #6aa834;
        --cm-global-color-yellow-400: #dfbf00;
        --cm-global-color-yellow-500: #d2b200;
        --cm-global-color-yellow-600: #c4a600;
        --cm-global-color-yellow-700: #b79900;
        --cm-global-color-magenta-400: #d83790;
        --cm-global-color-magenta-500: #ce2783;
        --cm-global-color-magenta-600: #bc1c74;
        --cm-global-color-magenta-700: #ae0e66;
        --cm-global-color-fuchsia-400: #c038cc;
        --cm-global-color-fuchsia-500: #b130bd;
        --cm-global-color-fuchsia-600: #a228ad;
        --cm-global-color-fuchsia-700: #93219e;
        --cm-global-color-purple-400: #9256d9;
        --cm-global-color-purple-500: #864ccc;
        --cm-global-color-purple-600: #7a42bf;
        --cm-global-color-purple-700: #6f38b1;
        --cm-global-color-indigo-400: #6767ec;
        --cm-global-color-indigo-500: #5c5ce0;
        --cm-global-color-indigo-600: #5151d3;
        --cm-global-color-indigo-700: #4646c6;
        --cm-global-color-seafoam-400: #1b959a;
        --cm-global-color-seafoam-500: #16878c;
        --cm-global-color-seafoam-600: #0f797d;
        --cm-global-color-seafoam-700: #096c6f;
        --cm-global-color-red-50: #fde9e5;
        --cm-global-color-red-100: #fac8bd;
        --cm-global-color-red-200: #f7a391;
        --cm-global-color-red-300: #f37e65;
        --cm-global-color-red-400: #f16344;
        --cm-global-color-red-500: #ee4723;
        --cm-global-color-red-600: #ec401f;
        --cm-global-color-red-700: #e9371a;
        --cm-global-color-red-800: #e72f15;
        --cm-global-color-red-900: #e2200c;
        --cm-global-color-red-A100: #ffffff;
        --cm-global-color-red-A200: #ffdcda;
        --cm-global-color-red-A400: #ffada7;
        --cm-global-color-red-A700: #ff958d;
        --cm-global-color-orange-50: #fdf3e5;
        --cm-global-color-orange-100: #fae0bf;
        --cm-global-color-orange-200: #f7cc94;
        --cm-global-color-orange-300: #f4b769;
        --cm-global-color-orange-400: #f1a749;
        --cm-global-color-orange-500: #ef9829;
        --cm-global-color-orange-600: #ed9024;
        --cm-global-color-orange-700: #eb851f;
        --cm-global-color-orange-800: #e87b19;
        --cm-global-color-orange-900: #e46a0f;
        --cm-global-color-orange-A100: #ffffff;
        --cm-global-color-orange-A200: #ffeadd;
        --cm-global-color-orange-A400: #ffcbaa;
        --cm-global-color-orange-A700: #ffbb90;
        --cm-global-color-green-50: #e1f7e9;
        --cm-global-color-green-100: #b3ecc9;
        --cm-global-color-green-200: #81e0a5;
        --cm-global-color-green-300: #4fd380;
        --cm-global-color-green-400: #29c965;
        --cm-global-color-green-500: #03c04a;
        --cm-global-color-green-600: #03ba43;
        --cm-global-color-green-700: #02b23a;
        --cm-global-color-green-800: #02aa32;
        --cm-global-color-green-900: #019c22;
        --cm-global-color-green-A100: #c7ffcf;
        --cm-global-color-green-A200: #94ffa4;
        --cm-global-color-green-A400: #61ff78;
        --cm-global-color-green-A700: #47ff62;
        --cm-global-color-blue-50: #e9f6fc;
        --cm-global-color-blue-100: #c8e7f8;
        --cm-global-color-blue-200: #a3d8f3;
        --cm-global-color-blue-300: #7ec8ee;
        --cm-global-color-blue-400: #62bcea;
        --cm-global-color-blue-500: #46b0e6;
        --cm-global-color-blue-600: #3fa9e3;
        --cm-global-color-blue-700: #37a0df;
        --cm-global-color-blue-800: #2f97db;
        --cm-global-color-blue-900: #2087d5;
        --cm-global-color-blue-A100: #ffffff;
        --cm-global-color-blue-A200: #daeeff;
        --cm-global-color-blue-A400: #a7d7ff;
        --cm-global-color-blue-A700: #8dcbff;

        --cm-global-color-gray-50: #ffffff;
        --cm-global-color-gray-75: #fafafa;
        --cm-global-color-gray-100: #f5f5f5;
        --cm-global-color-gray-200: #eaeaea;
        --cm-global-color-gray-300: #e1e1e1;
        --cm-global-color-gray-400: #cacaca;
        --cm-global-color-gray-500: #b3b3b3;
        --cm-global-color-gray-600: #8e8e8e;
        --cm-global-color-gray-700: #6e6e6e;
        --cm-global-color-gray-800: #4b4b4b;
        --cm-global-color-gray-900: #2c2c2c;
        --cm-global-color-gray-1500: #cccccc;
        --cm-global-color-gray-A100: #999999;
        --cm-global-color-gray-A200: #dddddd;
        --cm-global-color-gray-A300: #f7f7f7;

        --cm-alias-background-color-primary: var(--cm-global-color-gray-50);
        --cm-alias-background-color-secondary: var(--cm-global-color-gray-100);
        --cm-alias-background-color-tertiary: var(--cm-global-color-gray-300);
        --cm-alias-background-color-modal-overlay: rgba(0, 0, 0, 0.4);
        --cm-alias-dropshadow-color: rgba(0, 0, 0, 0.15);
        --cm-alias-background-color-hover-overlay: rgba(44, 44, 44, 0.04);
        --cm-alias-highlight-hover: rgba(44, 44, 44, 0.06);
        --cm-alias-highlight-active: rgba(44, 44, 44, 0.1);
        --cm-alias-highlight-selected: rgba(20, 115, 230, 0.1);
        --cm-alias-highlight-selected-hover: rgba(20, 115, 230, 0.2);
        --cm-alias-text-highlight-color: rgba(20, 115, 230, 0.2);
        --cm-alias-background-color-quickactions: hsla(0, 0%, 96.1%, 0.9);
        --cm-alias-border-color-selected: var(--cm-global-color-blue-500);
        --cm-alias-radial-reaction-color-default: rgba(75, 75, 75, 0.6);
        --cm-alias-pasteboard-background-color: var(--cm-global-color-gray-300);
        --cm-alias-appframe-border-color: var(--cm-global-color-gray-300);
        --cm-alias-appframe-separator-color: var(--cm-global-color-gray-300);
        --cm-colorarea-border-color: rgba(44, 44, 44, 0.1);
        --cm-colorarea-border-color-hover: rgba(44, 44, 44, 0.1);
        --cm-colorarea-border-color-down: rgba(44, 44, 44, 0.1);
        --cm-colorarea-border-color-key-focus: rgba(44, 44, 44, 0.1);
        --cm-colorslider-border-color: rgba(44, 44, 44, 0.1);
        --cm-colorslider-border-color-hover: rgba(44, 44, 44, 0.1);
        --cm-colorslider-border-color-down: rgba(44, 44, 44, 0.1);
        --cm-colorslider-border-color-key-focus: rgba(44, 44, 44, 0.1);
        --cm-colorslider-vertical-border-color: rgba(44, 44, 44, 0.1);
        --cm-colorslider-vertical-border-color-hover: rgba(44, 44, 44, 0.1);
        --cm-colorslider-vertical-border-color-down: rgba(44, 44, 44, 0.1);
        --cm-colorslider-vertical-border-color-key-focus: rgba(44, 44, 44, 0.1);
        --cm-colorwheel-border-color: rgba(44, 44, 44, 0.1);
        --cm-colorwheel-border-color-hover: rgba(44, 44, 44, 0.1);
        --cm-colorwheel-border-color-down: rgba(44, 44, 44, 0.1);
        --cm-colorwheel-border-color-key-focus: rgba(44, 44, 44, 0.1);
        --cm-miller-column-item-background-color-selected: rgba(
            20,
            115,
            230,
            0.1
        );
        --cm-miller-column-item-background-color-selected-hover: rgba(
            20,
            115,
            230,
            0.2
        );
        --cm-well-background-color: rgba(75, 75, 75, 0.02);
        --cm-well-border-color: rgba(44, 44, 44, 0.05);
    }
`;
export default styles;
//# sourceMappingURL=theme-light.css.js.map