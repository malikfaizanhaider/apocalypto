/* Copyright 2021 i2c Inc. All rights reserved. */
import { css } from '../../base/src/index';
const styles = css `
    :host, :root {
        --cm-global-color-status: Verified;
        --cm-global-color-version: 5.1;
        --cm-global-color-celery-400: #3da74e;
        --cm-global-color-celery-500: #44b556;
        --cm-global-color-celery-600: #4bc35f;
        --cm-global-color-celery-700: #51d267;
        --cm-global-color-chartreuse-400: #7cc33f;
        --cm-global-color-chartreuse-500: #85d044;
        --cm-global-color-chartreuse-600: #8ede49;
        --cm-global-color-chartreuse-700: #9bec54;
        --cm-global-color-yellow-400: #d2b200;
        --cm-global-color-yellow-500: #dfbf00;
        --cm-global-color-yellow-600: #edcc00;
        --cm-global-color-yellow-700: #fad900;
        --cm-global-color-magenta-400: #ca2996;
        --cm-global-color-magenta-500: #d83790;
        --cm-global-color-magenta-600: #e2499d;
        --cm-global-color-magenta-700: #ec5aaa;
        --cm-global-color-fuchsia-400: #b130bd;
        --cm-global-color-fuchsia-500: #c038cc;
        --cm-global-color-fuchsia-600: #cf3edc;
        --cm-global-color-fuchsia-700: #d951e5;
        --cm-global-color-purple-400: #864ccc;
        --cm-global-color-purple-500: #9256d9;
        --cm-global-color-purple-600: #9d64e1;
        --cm-global-color-purple-700: #a873df;
        --cm-global-color-indigo-400: #5c5ce0;
        --cm-global-color-indigo-500: #6767ec;
        --cm-global-color-indigo-600: #7575f1;
        --cm-global-color-indigo-700: #8282f6;
        --cm-global-color-seafoam-400: #16878c;
        --cm-global-color-seafoam-500: #1b959a;
        --cm-global-color-seafoam-600: #20a3a8;
        --cm-global-color-seafoam-700: #23b2b8;
        --cm-global-color-red-400: #d7373f;
        --cm-global-color-red-500: #e34850;
        --cm-global-color-red-600: #ec5b62;
        --cm-global-color-red-700: #f76d74;
        --cm-global-color-orange-400: #da7b11;
        --cm-global-color-orange-500: #e68619;
        --cm-global-color-orange-600: #f29423;
        --cm-global-color-orange-700: #f9a43f;
        --cm-global-color-green-400: #268e6c;
        --cm-global-color-green-500: #2d9d78;
        --cm-global-color-green-600: #33ab84;
        --cm-global-color-green-700: #39b990;
        --cm-global-color-blue-400: var(--i2c-blue-500);
        --cm-global-color-blue-500: #2680eb;
        --cm-global-color-blue-600: #378ef0;
        --cm-global-color-blue-700: #4b9cf5;
        --cm-global-color-gray-50: #080808;
        --cm-global-color-gray-75: #1a1a1a;
        --cm-global-color-gray-100: #1e1e1e;
        --cm-global-color-gray-200: #2c2c2c;
        --cm-global-color-gray-300: #393939;
        --cm-global-color-gray-400: #494949;
        --cm-global-color-gray-500: #5c5c5c;
        --cm-global-color-gray-600: #7c7c7c;
        --cm-global-color-gray-700: #a2a2a2;
        --cm-global-color-gray-800: #c8c8c8;
        --cm-global-color-gray-900: #efefef;
        --cm-alias-background-color-primary: var(--cm-global-color-gray-100);
        --cm-alias-background-color-secondary: var(--cm-global-color-gray-75);
        --cm-alias-background-color-tertiary: var(--cm-global-color-gray-50);
        --cm-alias-background-color-modal-overlay: rgba(0, 0, 0, 0.6);
        --cm-alias-dropshadow-color: rgba(0, 0, 0, 0.8);
        --cm-alias-background-color-hover-overlay: hsla(0, 0%, 93.7%, 0.08);
        --cm-alias-highlight-hover: hsla(0, 0%, 93.7%, 0.08);
        --cm-alias-highlight-active: hsla(0, 0%, 93.7%, 0.15);
        --cm-alias-highlight-selected: rgba(38, 128, 235, 0.2);
        --cm-alias-highlight-selected-hover: rgba(38, 128, 235, 0.3);
        --cm-alias-text-highlight-color: rgba(38, 128, 235, 0.3);
        --cm-alias-background-color-quickactions: rgba(30, 30, 30, 0.9);
        --cm-alias-border-color-selected: var(--cm-global-color-blue-600);
        --cm-alias-radial-reaction-color-default: hsla(0, 0%, 78.4%, 0.6);
        --cm-alias-pasteboard-background-color: var(--cm-global-color-gray-50);
        --cm-alias-appframe-border-color: var(--cm-global-color-gray-50);
        --cm-alias-appframe-separator-color: var(--cm-global-color-gray-50);
        --cm-colorarea-border-color: hsla(0, 0%, 93.7%, 0.1);
        --cm-colorarea-border-color-hover: hsla(0, 0%, 93.7%, 0.1);
        --cm-colorarea-border-color-down: hsla(0, 0%, 93.7%, 0.1);
        --cm-colorarea-border-color-key-focus: hsla(0, 0%, 93.7%, 0.1);
        --cm-colorslider-border-color: hsla(0, 0%, 93.7%, 0.1);
        --cm-colorslider-border-color-hover: hsla(0, 0%, 93.7%, 0.1);
        --cm-colorslider-border-color-down: hsla(0, 0%, 93.7%, 0.1);
        --cm-colorslider-border-color-key-focus: hsla(0, 0%, 93.7%, 0.1);
        --cm-colorslider-vertical-border-color: hsla(0, 0%, 93.7%, 0.1);
        --cm-colorslider-vertical-border-color-hover: hsla(0, 0%, 93.7%, 0.1);
        --cm-colorslider-vertical-border-color-down: hsla(0, 0%, 93.7%, 0.1);
        --cm-colorslider-vertical-border-color-key-focus: hsla(0, 0%, 93.7%, 0.1);
        --cm-colorwheel-border-color: hsla(0, 0%, 93.7%, 0.1);
        --cm-colorwheel-border-color-hover: hsla(0, 0%, 93.7%, 0.1);
        --cm-colorwheel-border-color-down: hsla(0, 0%, 93.7%, 0.1);
        --cm-colorwheel-border-color-key-focus: hsla(0, 0%, 93.7%, 0.1);
        --cm-miller-column-item-background-color-selected: rgba(38, 128, 235, 0.1);
        --cm-miller-column-item-background-color-selected-hover: rgba(38, 128, 235, 0.2);
        --cm-well-background-color: hsla(0, 0%, 78.4%, 0.02);
        --cm-well-border-color: hsla(0, 0%, 93.7%, 0.05)
    }
`;
export default styles;
//# sourceMappingURL=theme-darkest.css.js.map