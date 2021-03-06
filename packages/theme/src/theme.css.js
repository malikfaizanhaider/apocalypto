/* Copyright 2021 i2c Inc. All rights reserved. */
import { css } from '../../base/src/index';
const styles = css `
    :host,
    :root {
        --cm-global-animation-duration-0: 0ms;
        --cm-global-animation-duration-100: 130ms;
        --cm-global-animation-duration-200: 160ms;
        --cm-global-animation-duration-300: 190ms;
        --cm-global-animation-duration-400: 220ms;
        --cm-global-animation-duration-500: 250ms;
        --cm-global-animation-duration-600: 300ms;
        --cm-global-animation-duration-700: 350ms;
        --cm-global-animation-duration-800: 400ms;
        --cm-global-animation-duration-900: 450ms;
        --cm-global-animation-duration-1000: 500ms;
        --cm-global-animation-duration-2000: 1000ms;
        --cm-global-animation-duration-4000: 2000ms;
        --cm-global-animation-ease-in-out: cubic-bezier(0.45, 0, 0.4, 1);
        --cm-global-animation-ease-in: cubic-bezier(0.5, 0, 1, 1);
        --cm-global-animation-ease-out: cubic-bezier(0, 0, 0.4, 1);
        --cm-global-animation-linear: cubic-bezier(0, 0, 1, 1);
        --cm-global-color-status: Verified;
        --cm-global-color-version: 5.1;
        --cm-global-color-static-black: #000;
        --cm-global-color-static-white: #fff;
        --cm-global-color-static-blue: #1473e6;
        --cm-global-color-static-gray-50: #e4e4e4;
        --cm-global-color-static-gray-75: #fff;
        --cm-global-color-static-gray-100: #bcbbbc;
        --cm-global-color-static-gray-200: #908e8f;
        --cm-global-color-static-gray-300: #636162;
        --cm-global-color-static-gray-400: #413f40;
        --cm-global-color-static-gray-500: #201d1e;
        --cm-global-color-static-gray-600: #1c1a1a;
        --cm-global-color-static-gray-700: #181516;
        --cm-global-color-static-gray-800: #131112;
        --cm-global-color-static-gray-900: #323232;
        --cm-global-color-static-blue-200: #a3d8f3;
        --cm-global-color-static-blue-300: #7ec8ee;
        --cm-global-color-static-blue-400: #62bcea;
        --cm-global-color-static-blue-500: #46b0e6;
        --cm-global-color-static-blue-600: #3fa9e3;
        --cm-global-color-static-blue-700: #37a0df;
        --cm-global-color-static-blue-800: #2f97db;
        --cm-global-color-static-red-50: #fde9e5;
        --cm-global-color-static-red-100: #fac8bd;
        --cm-global-color-static-red-200: #f7a391;
        --cm-global-color-static-red-300: #f37e65;
        --cm-global-color-static-red-400: #f16344;
        --cm-global-color-static-red-500: #ee4723;
        --cm-global-color-static-red-600: #ec401f;
        --cm-global-color-static-red-700: #e9371a;
        --cm-global-color-static-red-800: #e72f15;
        --cm-global-color-static-red-900: #e2200c;
        --cm-global-color-static-red-A100: #ffffff;
        --cm-global-color-static-red-A200: #ffdcda;
        --cm-global-color-static-red-A400: #ffada7;
        --cm-global-color-static-red-A700: #ff958d;
        --cm-global-color-static-orange-50: #fdf3e5;
        --cm-global-color-static-orange-100: #fae0bf;
        --cm-global-color-static-orange-200: #f7cc94;
        --cm-global-color-static-orange-300: #f4b769;
        --cm-global-color-static-orange-400: #f1a749;
        --cm-global-color-static-orange-500: #ef9829;
        --cm-global-color-static-orange-600: #ed9024;
        --cm-global-color-static-orange-700: #eb851f;
        --cm-global-color-static-orange-800: #e87b19;
        --cm-global-color-static-green-50: #e1f7e9;
        --cm-global-color-static-green-100: #b3ecc9;
        --cm-global-color-static-green-200: #81e0a5;
        --cm-global-color-static-green-300: #4fd380;
        --cm-global-color-static-green-400: #29c965;
        --cm-global-color-static-green-500: #03c04a;
        --cm-global-color-static-green-600: #03ba43;
        --cm-global-color-static-green-700: #02b23a;
        --cm-global-color-static-green-800: #02aa32;
        --cm-global-color-static-green-900: #019c22;
        --cm-global-color-static-celery-200: #58e06f;
        --cm-global-color-static-celery-300: #51d267;
        --cm-global-color-static-celery-400: #4bc35f;
        --cm-global-color-static-celery-500: #44b556;
        --cm-global-color-static-celery-600: #3da74e;
        --cm-global-color-static-celery-700: #379947;
        --cm-global-color-static-celery-800: #318b40;
        --cm-global-color-static-chartreuse-300: #9bec54;
        --cm-global-color-static-chartreuse-400: #8ede49;
        --cm-global-color-static-chartreuse-500: #85d044;
        --cm-global-color-static-chartreuse-600: #7cc33f;
        --cm-global-color-static-chartreuse-700: #73b53a;
        --cm-global-color-static-chartreuse-800: #6aa834;
        --cm-global-color-static-yellow-200: #ffe22e;
        --cm-global-color-static-yellow-300: #fad900;
        --cm-global-color-static-yellow-400: #edcc00;
        --cm-global-color-static-yellow-500: #dfbf00;
        --cm-global-color-static-yellow-600: #d2b200;
        --cm-global-color-static-yellow-700: #c4a600;
        --cm-global-color-static-yellow-800: #b79900;
        --cm-global-color-static-magenta-200: #f56bb7;
        --cm-global-color-static-magenta-300: #ec5aaa;
        --cm-global-color-static-magenta-400: #e2499d;
        --cm-global-color-static-magenta-500: #d83790;
        --cm-global-color-static-magenta-600: #ca2982;
        --cm-global-color-static-magenta-700: #bc1c74;
        --cm-global-color-static-magenta-800: #ae0e66;
        --cm-global-color-static-fuchsia-400: #cf3edc;
        --cm-global-color-static-fuchsia-500: #c038cc;
        --cm-global-color-static-fuchsia-600: #b130bd;
        --cm-global-color-static-fuchsia-700: #a228ad;
        --cm-global-color-static-fuchsia-800: #93219e;
        --cm-global-color-static-purple-400: #9d64e1;
        --cm-global-color-static-purple-500: #9256d9;
        --cm-global-color-static-purple-600: #864ccc;
        --cm-global-color-static-purple-700: #7a42bf;
        --cm-global-color-static-purple-800: #6f38b1;
        --cm-global-color-static-indigo-200: #9090fa;
        --cm-global-color-static-indigo-300: #8282f6;
        --cm-global-color-static-indigo-400: #7575f1;
        --cm-global-color-static-indigo-500: #6767ec;
        --cm-global-color-static-indigo-600: #5c5ce0;
        --cm-global-color-static-indigo-700: #5151d3;
        --cm-global-color-static-indigo-800: #4646c6;
        --cm-global-color-static-seafoam-200: #26c0c7;
        --cm-global-color-static-seafoam-300: #23b2b8;
        --cm-global-color-static-seafoam-400: #20a3a8;
        --cm-global-color-static-seafoam-500: #1b959a;
        --cm-global-color-static-seafoam-600: #16878c;
        --cm-global-color-static-seafoam-700: #0f797d;
        --cm-global-color-static-seafoam-800: #096c6f;
        --cm-global-color-opacity-100: 1;
        --cm-global-color-opacity-90: 0.9;
        --cm-global-color-opacity-80: 0.8;
        --cm-global-color-opacity-60: 0.6;
        --cm-global-color-opacity-50: 0.5;
        --cm-global-color-opacity-42: 0.42;
        --cm-global-color-opacity-40: 0.4;
        --cm-global-color-opacity-30: 0.3;
        --cm-global-color-opacity-25: 0.25;
        --cm-global-color-opacity-20: 0.2;
        --cm-global-color-opacity-15: 0.15;
        --cm-global-color-opacity-10: 0.1;
        --cm-global-color-opacity-8: 0.08;
        --cm-global-color-opacity-7: 0.07;
        --cm-global-color-opacity-6: 0.06;
        --cm-global-color-opacity-5: 0.05;
        --cm-global-color-opacity-4: 0.04;
        --cm-semantic-negative-color-background: var(
            --cm-global-color-static-red-700
        );
        --cm-semantic-negative-color-default: var(--cm-global-color-red-500);
        --cm-semantic-negative-color-state-hover: var(
            --cm-global-color-red-600
        );
        --cm-semantic-negative-color-dark: var(--cm-global-color-red-600);
        --cm-semantic-negative-color-border: var(--cm-global-color-red-400);
        --cm-semantic-negative-color-icon: var(--cm-global-color-red-600);
        --cm-semantic-negative-color-status: var(--cm-global-color-red-400);
        --cm-semantic-negative-color-text-large: var(--cm-global-color-red-500);
        --cm-semantic-negative-color-text-small: var(--cm-global-color-red-600);
        --cm-semantic-negative-color-state-down: var(--cm-global-color-red-700);
        --cm-semantic-negative-color-state-focus: var(
            --cm-global-color-red-400
        );
        --cm-semantic-negative-background-color-default: var(
            --cm-global-color-static-red-600
        );
        --cm-semantic-negative-background-color-hover: var(
            --cm-global-color-static-red-700
        );
        --cm-semantic-negative-background-color-down: var(
            --cm-global-color-static-red-800
        );
        --cm-semantic-negative-background-color-key-focus: var(
            --cm-global-color-static-red-700
        );
        --cm-semantic-notice-color-background: var(
            --cm-global-color-static-orange-700
        );
        --cm-semantic-notice-color-default: var(--cm-global-color-orange-500);
        --cm-semantic-notice-color-dark: var(--cm-global-color-orange-600);
        --cm-semantic-notice-color-border: var(--cm-global-color-orange-400);
        --cm-semantic-notice-color-icon: var(--cm-global-color-orange-600);
        --cm-semantic-notice-color-status: var(--cm-global-color-orange-400);
        --cm-semantic-notice-color-text-large: var(
            --cm-global-color-orange-500
        );
        --cm-semantic-notice-color-text-small: var(
            --cm-global-color-orange-600
        );
        --cm-semantic-notice-color-state-down: var(
            --cm-global-color-orange-700
        );
        --cm-semantic-notice-color-state-focus: var(
            --cm-global-color-orange-400
        );
        --cm-semantic-notice-background-color-default: var(
            --cm-global-color-static-orange-600
        );
        --cm-semantic-notice-background-color-hover: var(
            --cm-global-color-static-orange-700
        );
        --cm-semantic-notice-background-color-down: var(
            --cm-global-color-static-orange-800
        );
        --cm-semantic-notice-background-color-key-focus: var(
            --cm-global-color-static-orange-700
        );
        --cm-semantic-positive-color-background: var(
            --cm-global-color-static-green-700
        );
        --cm-semantic-positive-color-default: var(--cm-global-color-green-500);
        --cm-semantic-positive-color-dark: var(--cm-global-color-green-600);
        --cm-semantic-positive-color-border: var(--cm-global-color-green-400);
        --cm-semantic-positive-color-icon: var(--cm-global-color-green-600);
        --cm-semantic-positive-color-status: var(--cm-global-color-green-400);
        --cm-semantic-positive-color-text-large: var(
            --cm-global-color-green-500
        );
        --cm-semantic-positive-color-text-small: var(
            --cm-global-color-green-600
        );
        --cm-semantic-positive-color-state-down: var(
            --cm-global-color-green-700
        );
        --cm-semantic-positive-color-state-focus: var(
            --cm-global-color-green-400
        );
        --cm-semantic-positive-background-color-default: var(
            --cm-global-color-static-green-600
        );
        --cm-semantic-positive-background-color-hover: var(
            --cm-global-color-static-green-700
        );
        --cm-semantic-positive-background-color-down: var(
            --cm-global-color-static-green-800
        );
        --cm-semantic-positive-background-color-key-focus: var(
            --cm-global-color-static-green-700
        );
        --cm-semantic-informative-color-background: var(
            --cm-global-color-static-blue-700
        );
        --cm-semantic-informative-color-default: var(
            --cm-global-color-blue-500
        );
        --cm-semantic-informative-color-dark: var(--cm-global-color-blue-600);
        --cm-semantic-informative-color-border: var(--cm-global-color-blue-400);
        --cm-semantic-informative-color-icon: var(--cm-global-color-blue-600);
        --cm-semantic-informative-color-status: var(--cm-global-color-blue-400);
        --cm-semantic-informative-color-text-large: var(
            --cm-global-color-blue-500
        );
        --cm-semantic-informative-color-text-small: var(
            --cm-global-color-blue-600
        );
        --cm-semantic-informative-color-state-down: var(
            --cm-global-color-blue-700
        );
        --cm-semantic-informative-color-state-focus: var(
            --cm-global-color-blue-400
        );
        --cm-semantic-informative-background-color-default: var(
            --cm-global-color-static-blue-600
        );
        --cm-semantic-informative-background-color-hover: var(
            --cm-global-color-static-blue-700
        );
        --cm-semantic-informative-background-color-down: var(
            --cm-global-color-static-blue-800
        );
        --cm-semantic-informative-background-color-key-focus: var(
            --cm-global-color-static-blue-700
        );
        --cm-semantic-cta-color-background-default: var(
            --cm-global-color-static-blue-600
        );
        --cm-semantic-cta-color-background-hover: var(
            --cm-global-color-static-blue-700
        );
        --cm-semantic-cta-color-background-down: var(
            --cm-global-color-static-blue-800
        );
        --cm-semantic-cta-color-background-key-focus: var(
            --cm-global-color-static-blue-600
        );
        --cm-semantic-neutral-background-color-default: var(
            --cm-global-color-static-gray-300
        );
        --cm-semantic-neutral-background-color-hover: var(
            --cm-global-color-static-gray-800
        );
        --cm-semantic-neutral-background-color-down: var(
            --cm-global-color-static-gray-900
        );
        --cm-semantic-neutral-background-color-key-focus: var(
            --cm-global-color-static-gray-800
        );
        --cm-semantic-presence-color-1: var(--cm-global-color-static-red-500);
        --cm-semantic-presence-color-2: var(
            --cm-global-color-static-orange-400
        );
        --cm-semantic-presence-color-3: var(
            --cm-global-color-static-yellow-400
        );
        --cm-semantic-presence-color-4: #4bcca2;
        --cm-semantic-presence-color-5: #00c7ff;
        --cm-semantic-presence-color-6: #008cb8;
        --cm-semantic-presence-color-7: #7e4bf3;
        --cm-semantic-presence-color-8: var(
            --cm-global-color-static-fuchsia-600
        );
        --cm-global-dimension-static-size-0: 0px;
        --cm-global-dimension-static-size-10: 1px;
        --cm-global-dimension-static-size-25: 2px;
        --cm-global-dimension-static-size-40: 3px;
        --cm-global-dimension-static-size-50: 4px;
        --cm-global-dimension-static-size-65: 5px;
        --cm-global-dimension-static-size-75: 6px;
        --cm-global-dimension-static-size-85: 7px;
        --cm-global-dimension-static-size-100: 8px;
        --cm-global-dimension-static-size-115: 9px;
        --cm-global-dimension-static-size-125: 10px;
        --cm-global-dimension-static-size-130: 11px;
        --cm-global-dimension-static-size-150: 12px;
        --cm-global-dimension-static-size-160: 13px;
        --cm-global-dimension-static-size-175: 14px;
        --cm-global-dimension-static-size-200: 16px;
        --cm-global-dimension-static-size-225: 18px;
        --cm-global-dimension-static-size-250: 20px;
        --cm-global-dimension-static-size-275: 22px;
        --cm-global-dimension-static-size-300: 24px;
        --cm-global-dimension-static-size-325: 26px;
        --cm-global-dimension-static-size-400: 32px;
        --cm-global-dimension-static-size-450: 36px;
        --cm-global-dimension-static-size-500: 40px;
        --cm-global-dimension-static-size-550: 44px;
        --cm-global-dimension-static-size-600: 48px;
        --cm-global-dimension-static-size-700: 56px;
        --cm-global-dimension-static-size-800: 64px;
        --cm-global-dimension-static-size-900: 72px;
        --cm-global-dimension-static-size-1000: 80px;
        --cm-global-dimension-static-size-1200: 96px;
        --cm-global-dimension-static-size-1700: 136px;
        --cm-global-dimension-static-size-2400: 192px;
        --cm-global-dimension-static-size-2500: 200px;
        --cm-global-dimension-static-size-2600: 208px;
        --cm-global-dimension-static-size-2800: 224px;
        --cm-global-dimension-static-size-3200: 256px;
        --cm-global-dimension-static-size-3400: 272px;
        --cm-global-dimension-static-size-3500: 280px;
        --cm-global-dimension-static-size-3600: 288px;
        --cm-global-dimension-static-size-3800: 304px;
        --cm-global-dimension-static-size-4600: 368px;
        --cm-global-dimension-static-size-5000: 400px;
        --cm-global-dimension-static-size-6000: 480px;
        --cm-global-dimension-static-size-16000: 1280px;
        --cm-global-dimension-static-font-size-50: 11px;
        --cm-global-dimension-static-font-size-75: 12px;
        --cm-global-dimension-static-font-size-100: 14px;
        --cm-global-dimension-static-font-size-150: 15px;
        --cm-global-dimension-static-font-size-200: 16px;
        --cm-global-dimension-static-font-size-300: 18px;
        --cm-global-dimension-static-font-size-400: 20px;
        --cm-global-dimension-static-font-size-500: 22px;
        --cm-global-dimension-static-font-size-600: 25px;
        --cm-global-dimension-static-font-size-700: 28px;
        --cm-global-dimension-static-font-size-800: 32px;
        --cm-global-dimension-static-font-size-900: 36px;
        --cm-global-dimension-static-font-size-1000: 40px;
        --cm-global-dimension-static-percent-50: 50%;
        --cm-global-dimension-static-percent-100: 100%;
        --cm-global-dimension-static-breakpoint-xsmall: 304px;
        --cm-global-dimension-static-breakpoint-small: 768px;
        --cm-global-dimension-static-breakpoint-medium: 1280px;
        --cm-global-dimension-static-breakpoint-large: 1768px;
        --cm-global-dimension-static-breakpoint-xlarge: 2160px;
        --cm-global-dimension-static-grid-columns: 12;
        --cm-global-dimension-static-grid-fluid-width: 100%;
        --cm-global-dimension-static-grid-fixed-max-width: 1280px;
        --cm-global-font-family-base: var(--i2c-font-family);
        --cm-global-font-family-serif: var(--i2c-font-family);
        --cm-global-font-family-code: 'Source Code Pro', Monaco, monospace;
        --cm-global-font-weight-thin: 100;
        --cm-global-font-weight-ultra-light: 200;
        --cm-global-font-weight-light: 300;
        --cm-global-font-weight-regular: 400;
        --cm-global-font-weight-medium: 500;
        --cm-global-font-weight-semi-bold: 600;
        --cm-global-font-weight-bold: 700;
        --cm-global-font-weight-extra-bold: 800;
        --cm-global-font-weight-black: 900;
        --cm-global-font-style-regular: normal;
        --cm-global-font-style-italic: italic;
        --cm-global-font-letter-spacing-none: 0;
        --cm-global-font-letter-spacing-small: 0.0125em;
        --cm-global-font-letter-spacing-han: 0.05em;
        --cm-global-font-letter-spacing-medium: 0.06em;
        --cm-global-font-line-height-large: 1.7;
        --cm-global-font-line-height-medium: 1.5;
        --cm-global-font-line-height-small: 1.3;
        --cm-global-font-multiplier-25: 0.25em;
        --cm-global-font-multiplier-75: 0.75em;
        --cm-alias-border-size-thin: var(--cm-global-dimension-static-size-10);
        --cm-alias-border-size-thick: var(--cm-global-dimension-static-size-25);
        --cm-alias-border-size-thicker: var(
            --cm-global-dimension-static-size-50
        );
        --cm-alias-border-size-thickest: var(
            --cm-global-dimension-static-size-100
        );
        --cm-alias-border-offset-thin: var(
            --cm-global-dimension-static-size-25
        );
        --cm-alias-border-offset-thick: var(
            --cm-global-dimension-static-size-50
        );
        --cm-alias-border-offset-thicker: var(
            --cm-global-dimension-static-size-100
        );
        --cm-alias-border-offset-thickest: var(
            --cm-global-dimension-static-size-200
        );
        --cm-alias-grid-baseline: var(--cm-global-dimension-static-size-100);
        --cm-alias-grid-gutter-xsmall: var(
            --cm-global-dimension-static-size-200
        );
        --cm-alias-grid-gutter-small: var(
            --cm-global-dimension-static-size-300
        );
        --cm-alias-grid-gutter-medium: var(
            --cm-global-dimension-static-size-400
        );
        --cm-alias-grid-gutter-large: var(
            --cm-global-dimension-static-size-500
        );
        --cm-alias-grid-gutter-xlarge: var(
            --cm-global-dimension-static-size-600
        );
        --cm-alias-grid-margin-xsmall: var(
            --cm-global-dimension-static-size-200
        );
        --cm-alias-grid-margin-small: var(
            --cm-global-dimension-static-size-300
        );
        --cm-alias-grid-margin-medium: var(
            --cm-global-dimension-static-size-400
        );
        --cm-alias-grid-margin-large: var(
            --cm-global-dimension-static-size-500
        );
        --cm-alias-grid-margin-xlarge: var(
            --cm-global-dimension-static-size-600
        );
        --cm-alias-grid-layout-region-margin-bottom-xsmall: var(
            --cm-global-dimension-static-size-200
        );
        --cm-alias-grid-layout-region-margin-bottom-small: var(
            --cm-global-dimension-static-size-300
        );
        --cm-alias-grid-layout-region-margin-bottom-medium: var(
            --cm-global-dimension-static-size-400
        );
        --cm-alias-grid-layout-region-margin-bottom-large: var(
            --cm-global-dimension-static-size-500
        );
        --cm-alias-grid-layout-region-margin-bottom-xlarge: var(
            --cm-global-dimension-static-size-600
        );
        --cm-alias-radial-reaction-size-default: var(
            --cm-global-dimension-static-size-550
        );
        --cm-alias-font-family-ar: myriad-arabic, i2c Inc-clean, 'Source Sans Pro',
            -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu,
            'Trebuchet MS', 'Lucida Grande', sans-serif;
        --cm-alias-font-family-he: myriad-hebrew, i2c Inc-clean, 'Source Sans Pro',
            -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu,
            'Trebuchet MS', 'Lucida Grande', sans-serif;
        --cm-alias-font-family-zh: i2c Inc-clean-han-traditional,
            source-han-traditional, 'MingLiu', 'Heiti TC Light', 'sans-serif';
        --cm-alias-font-family-zhhans: i2c Inc-clean-han-simplified-c,
            source-han-simplified-c, 'SimSun', 'Heiti SC Light', 'sans-serif';
        --cm-alias-font-family-ko: i2c Inc-clean-han-korean, source-han-korean,
            'Malgun Gothic', 'Apple Gothic', 'sans-serif';
        --cm-alias-font-family-ja: i2c Inc-clean-han-japanese, source-han-japanese,
            'Yu Gothic', '\\30E1 \\30A4 \\30EA \\30AA',
            '\\30D2 \\30E9 \\30AE \\30CE \\89D2 \\30B4  Pro W3',
            'Hiragino Kaku Gothic Pro W3', 'Osaka',
            '\\FF2D \\FF33 \\FF30 \\30B4 \\30B7 \\30C3 \\30AF', 'MS PGothic',
            'sans-serif';
        --cm-alias-font-family-condensed: i2c Inc-clean-han-traditional,
            source-han-traditional, 'MingLiu', 'Heiti TC Light', i2c Inc-clean,
            'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Ubuntu, 'Trebuchet MS', 'Lucida Grande', sans-serif;
        --cm-alias-body-text-font-family: var(--cm-global-font-family-base);
        --cm-alias-body-text-line-height: var(
            --cm-global-font-line-height-medium
        );
        --cm-alias-body-text-font-weight: var(--cm-global-font-weight-regular);
        --cm-alias-body-text-font-weight-strong: var(
            --cm-global-font-weight-bold
        );
        --cm-alias-button-text-line-height: var(
            --cm-global-font-line-height-small
        );
        --cm-alias-component-text-line-height: var(
            --cm-global-font-line-height-small
        );
        --cm-alias-han-component-text-line-height: var(
            --cm-global-font-line-height-medium
        );
        --cm-alias-heading-text-line-height: var(
            --cm-global-font-line-height-small
        );
        --cm-alias-heading-text-font-weight-regular: var(
            --cm-global-font-weight-bold
        );
        --cm-alias-heading-text-font-weight-regular-strong: var(
            --cm-global-font-weight-black
        );
        --cm-alias-heading-text-font-weight-quiet: var(
            --cm-global-font-weight-light
        );
        --cm-alias-heading-text-font-weight-quiet-strong: var(
            --cm-global-font-weight-bold
        );
        --cm-alias-heading-text-font-weight-strong: var(
            --cm-global-font-weight-black
        );
        --cm-alias-heading-text-font-weight-strong-strong: var(
            --cm-global-font-weight-black
        );
        --cm-alias-subheading-text-font-weight: var(
            --cm-global-font-weight-bold
        );
        --cm-alias-subheading-text-font-weight-strong: var(
            --cm-global-font-weight-black
        );
        --cm-alias-detail-text-font-weight: var(--cm-global-font-weight-bold);
        --cm-alias-detail-text-font-weight-light: var(
            --cm-global-font-weight-regular
        );
        --cm-alias-detail-text-font-weight-strong: var(
            --cm-global-font-weight-black
        );
        --cm-alias-serif-text-font-family: var(--cm-global-font-family-serif);
        --cm-alias-article-body-text-font-weight: var(
            --cm-global-font-weight-regular
        );
        --cm-alias-article-body-text-font-weight-strong: var(
            --cm-global-font-weight-black
        );
        --cm-alias-article-heading-text-font-weight: var(
            --cm-global-font-weight-bold
        );
        --cm-alias-article-heading-text-font-weight-strong: var(
            --cm-global-font-weight-black
        );
        --cm-alias-article-heading-text-font-weight-quiet: var(
            --cm-global-font-weight-regular
        );
        --cm-alias-article-heading-text-font-weight-quiet-strong: var(
            --cm-global-font-weight-bold
        );
        --cm-alias-article-subheading-text-font-weight: var(
            --cm-global-font-weight-bold
        );
        --cm-alias-article-subheading-text-font-weight-strong: var(
            --cm-global-font-weight-black
        );
        --cm-alias-article-detail-text-font-weight: var(
            --cm-global-font-weight-regular
        );
        --cm-alias-article-detail-text-font-weight-strong: var(
            --cm-global-font-weight-bold
        );
        --cm-alias-code-text-font-family: var(--cm-global-font-family-code);
        --cm-alias-han-heading-text-line-height: var(
            --cm-global-font-line-height-medium
        );
        --cm-alias-han-heading-text-font-weight-regular: var(
            --cm-global-font-weight-bold
        );
        --cm-alias-han-heading-text-font-weight-regular-emphasis: var(
            --cm-global-font-weight-extra-bold
        );
        --cm-alias-han-heading-text-font-weight-regular-strong: var(
            --cm-global-font-weight-black
        );
        --cm-alias-han-heading-text-font-weight-quiet-strong: var(
            --cm-global-font-weight-bold
        );
        --cm-alias-han-heading-text-font-weight-light: var(
            --cm-global-font-weight-light
        );
        --cm-alias-han-heading-text-font-weight-light-emphasis: var(
            --cm-global-font-weight-regular
        );
        --cm-alias-han-heading-text-font-weight-light-strong: var(
            --cm-global-font-weight-bold
        );
        --cm-alias-han-heading-text-font-weight-heavy: var(
            --cm-global-font-weight-black
        );
        --cm-alias-han-heading-text-font-weight-heavy-emphasis: var(
            --cm-global-font-weight-black
        );
        --cm-alias-han-heading-text-font-weight-heavy-strong: var(
            --cm-global-font-weight-black
        );
        --cm-alias-han-body-text-line-height: var(
            --cm-global-font-line-height-large
        );
        --cm-alias-han-body-text-font-weight-regular: var(
            --cm-global-font-weight-regular
        );
        --cm-alias-han-body-text-font-weight-emphasis: var(
            --cm-global-font-weight-bold
        );
        --cm-alias-han-body-text-font-weight-strong: var(
            --cm-global-font-weight-black
        );
        --cm-alias-han-subheading-text-font-weight-regular: var(
            --cm-global-font-weight-bold
        );
        --cm-alias-han-subheading-text-font-weight-emphasis: var(
            --cm-global-font-weight-extra-bold
        );
        --cm-alias-han-subheading-text-font-weight-strong: var(
            --cm-global-font-weight-black
        );
        --cm-alias-han-detail-text-font-weight: var(
            --cm-global-font-weight-regular
        );
        --cm-alias-han-detail-text-font-weight-emphasis: var(
            --cm-global-font-weight-bold
        );
        --cm-alias-han-detail-text-font-weight-strong: var(
            --cm-global-font-weight-black
        );
        --cm-alias-code-text-font-weight-regular: var(
            --cm-global-font-weight-regular
        );
        --cm-alias-code-text-font-weight-strong: var(
            --cm-global-font-weight-bold
        );
        --cm-alias-code-text-line-height: var(
            --cm-global-font-line-height-medium
        );
        --cm-alias-heading-margin-bottom: var(--cm-global-font-multiplier-25);
        --cm-alias-body-margin-bottom: var(--cm-global-font-multiplier-75);
        --cm-alias-focus-ring-gap: var(--cm-global-dimension-static-size-25);
        --cm-alias-focus-ring-size: var(--cm-global-dimension-static-size-25);
        --cm-alias-loupe-entry-animation-duration: var(
            --cm-global-animation-duration-300
        );
        --cm-alias-loupe-exit-animation-duration: var(
            --cm-global-animation-duration-300
        );
        --cm-alias-dropshadow-blur: var(--cm-global-dimension-size-50);
        --cm-alias-dropshadow-offset-y: var(--cm-global-dimension-size-10);
        --cm-alias-font-size-default: var(--cm-global-dimension-font-size-100);
        --cm-alias-layout-label-gap-size: var(--cm-global-dimension-size-100);
        --cm-alias-pill-button-text-size: var(
            --cm-global-dimension-font-size-100
        );
        --cm-alias-pill-button-text-baseline: var(
            --cm-global-dimension-static-size-150
        );
        --cm-alias-border-radius-xsmall: var(--cm-global-dimension-size-10);
        --cm-alias-border-radius-small: var(--cm-global-dimension-size-25);
        --cm-alias-border-radius-regular: var(--cm-global-dimension-size-50);
        --cm-alias-border-radius-medium: var(--cm-global-dimension-size-100);
        --cm-alias-border-radius-large: var(--cm-global-dimension-size-200);
        --cm-alias-single-line-height: var(--cm-global-dimension-size-400);
        --cm-alias-single-line-width: var(--cm-global-dimension-size-2400);
        --cm-alias-item-height-s: var(--cm-global-dimension-size-300);
        --cm-alias-item-height-m: var(--cm-global-dimension-size-400);
        --cm-alias-item-height-l: var(--cm-global-dimension-size-500);
        --cm-alias-item-height-xl: var(--cm-global-dimension-size-600);
        --cm-alias-item-rounded-border-radius-s: var(
            --cm-global-dimension-size-40
        );
        --cm-alias-item-rounded-border-radius-m: var(
            --cm-global-dimension-size-40
        );
        --cm-alias-item-rounded-border-radius-l: var(
            --cm-global-dimension-size-40
        );
        --cm-alias-item-rounded-border-radius-xl: var(
            --cm-global-dimension-size-40
        );
        --cm-alias-item-text-size-s: var(--cm-global-dimension-font-size-50);
        --cm-alias-item-text-size-m: var(--cm-global-dimension-font-size-100);
        --cm-alias-item-text-size-l: var(--cm-global-dimension-font-size-200);
        --cm-alias-item-text-size-xl: var(--cm-global-dimension-font-size-300);
        --cm-alias-item-text-padding-top-s: var(
            --cm-global-dimension-static-size-50
        );
        --cm-alias-item-text-padding-top-m: var(--cm-global-dimension-size-75);
        --cm-alias-item-text-padding-top-xl: var(
            --cm-global-dimension-size-150
        );
        --cm-alias-item-text-padding-bottom-m: var(
            --cm-global-dimension-size-115
        );
        --cm-alias-item-text-padding-bottom-l: var(
            --cm-global-dimension-size-130
        );
        --cm-alias-item-text-padding-bottom-xl: var(
            --cm-global-dimension-size-175
        );
        --cm-alias-item-icon-padding-top-s: var(--cm-global-dimension-size-50);
        --cm-alias-item-icon-padding-top-m: var(--cm-global-dimension-size-85);
        --cm-alias-item-icon-padding-top-l: var(--cm-global-dimension-size-125);
        --cm-alias-item-icon-padding-top-xl: var(
            --cm-global-dimension-size-160
        );
        --cm-alias-item-icon-padding-bottom-s: var(
            --cm-global-dimension-size-50
        );
        --cm-alias-item-icon-padding-bottom-m: var(
            --cm-global-dimension-size-85
        );
        --cm-alias-item-icon-padding-bottom-l: var(
            --cm-global-dimension-size-125
        );
        --cm-alias-item-icon-padding-bottom-xl: var(
            --cm-global-dimension-size-160
        );
        --cm-alias-item-mark-padding-top-s: var(--cm-global-dimension-size-40);
        --cm-alias-item-mark-padding-top-l: var(--cm-global-dimension-size-115);
        --cm-alias-item-mark-padding-top-xl: var(
            --cm-global-dimension-size-130
        );
        --cm-alias-item-mark-padding-bottom-s: var(
            --cm-global-dimension-size-40
        );
        --cm-alias-item-mark-padding-bottom-l: var(
            --cm-global-dimension-size-115
        );
        --cm-alias-item-mark-padding-bottom-xl: var(
            --cm-global-dimension-size-130
        );
        --cm-alias-item-padding-s: var(--cm-global-dimension-size-115);
        --cm-alias-item-padding-m: var(--cm-global-dimension-size-150);
        --cm-alias-item-padding-l: var(--cm-global-dimension-size-185);
        --cm-alias-item-padding-xl: var(--cm-global-dimension-size-225);
        --cm-alias-item-rounded-padding-s: var(--cm-global-dimension-size-150);
        --cm-alias-item-rounded-padding-m: var(--cm-global-dimension-size-200);
        --cm-alias-item-rounded-padding-l: var(--cm-global-dimension-size-250);
        --cm-alias-item-rounded-padding-xl: var(--cm-global-dimension-size-300);
        --cm-alias-item-icononly-padding-s: var(--cm-global-dimension-size-50);
        --cm-alias-item-icononly-padding-m: var(--cm-global-dimension-size-85);
        --cm-alias-item-icononly-padding-l: var(--cm-global-dimension-size-125);
        --cm-alias-item-icononly-padding-xl: var(
            --cm-global-dimension-size-160
        );
        --cm-alias-item-workflow-padding-left-s: var(
            --cm-global-dimension-size-85
        );
        --cm-alias-item-workflow-padding-left-l: var(
            --cm-global-dimension-size-160
        );
        --cm-alias-item-workflow-padding-left-xl: var(
            --cm-global-dimension-size-185
        );
        --cm-alias-item-rounded-workflow-padding-left-s: var(
            --cm-global-dimension-size-125
        );
        --cm-alias-item-rounded-workflow-padding-left-l: var(
            --cm-global-dimension-size-225
        );
        --cm-alias-item-mark-padding-left-s: var(--cm-global-dimension-size-85);
        --cm-alias-item-mark-padding-left-l: var(
            --cm-global-dimension-size-160
        );
        --cm-alias-item-mark-padding-left-xl: var(
            --cm-global-dimension-size-185
        );
        --cm-alias-item-control-1-size-s: var(
            --cm-global-dimension-static-size-100
        );
        --cm-alias-item-control-1-size-m: var(--cm-global-dimension-size-100);
        --cm-alias-item-control-2-size-m: var(--cm-global-dimension-size-175);
        --cm-alias-item-control-2-size-l: var(--cm-global-dimension-size-200);
        --cm-alias-item-control-2-size-xl: var(--cm-global-dimension-size-225);
        --cm-alias-item-control-2-size-xxl: var(--cm-global-dimension-size-250);
        --cm-alias-item-control-3-height-m: var(--cm-global-dimension-size-175);
        --cm-alias-item-control-3-height-l: var(--cm-global-dimension-size-200);
        --cm-alias-item-control-3-height-xl: var(
            --cm-global-dimension-size-225
        );
        --cm-alias-item-mark-size-s: var(--cm-global-dimension-size-225);
        --cm-alias-item-mark-size-l: var(--cm-global-dimension-size-275);
        --cm-alias-item-mark-size-xl: var(--cm-global-dimension-size-325);
        --cm-alias-workflow-icon-size-s: var(--cm-global-dimension-size-200);
        --cm-alias-workflow-icon-size-m: var(--cm-global-dimension-size-200);
        --cm-alias-workflow-icon-size-xl: var(--cm-global-dimension-size-275);
        --cm-alias-ui-icon-alert-size-75: var(--cm-global-dimension-size-200);
        --cm-alias-ui-icon-alert-size-100: var(--cm-global-dimension-size-225);
        --cm-alias-ui-icon-alert-size-200: var(--cm-global-dimension-size-250);
        --cm-alias-ui-icon-alert-size-300: var(--cm-global-dimension-size-275);
        --cm-alias-ui-icon-triplegripper-size-100-height: var(
            --cm-global-dimension-size-100
        );
        --cm-alias-ui-icon-doublegripper-size-100-width: var(
            --cm-global-dimension-size-200
        );
        --cm-alias-ui-icon-singlegripper-size-100-width: var(
            --cm-global-dimension-size-300
        );
        --cm-alias-ui-icon-cornertriangle-size-75: var(
            --cm-global-dimension-size-65
        );
        --cm-alias-ui-icon-cornertriangle-size-200: var(
            --cm-global-dimension-size-75
        );
        --cm-alias-ui-icon-asterisk-size-75: var(
            --cm-global-dimension-static-size-100
        );
        --cm-alias-ui-icon-asterisk-size-100: var(
            --cm-global-dimension-size-100
        );
        --cm-alias-item-control-gap-s: var(--cm-global-dimension-size-115);
        --cm-alias-item-control-gap-m: var(--cm-global-dimension-size-125);
        --cm-alias-item-control-gap-l: var(--cm-global-dimension-size-130);
        --cm-alias-item-control-gap-xl: var(--cm-global-dimension-size-160);
        --cm-alias-item-workflow-icon-gap-s: var(--cm-global-dimension-size-85);
        --cm-alias-item-workflow-icon-gap-m: var(
            --cm-global-dimension-size-100
        );
        --cm-alias-item-workflow-icon-gap-l: var(
            --cm-global-dimension-size-115
        );
        --cm-alias-item-workflow-icon-gap-xl: var(
            --cm-global-dimension-size-125
        );
        --cm-alias-item-mark-gap-s: var(--cm-global-dimension-size-85);
        --cm-alias-item-mark-gap-m: var(--cm-global-dimension-size-100);
        --cm-alias-item-mark-gap-l: var(--cm-global-dimension-size-115);
        --cm-alias-item-mark-gap-xl: var(--cm-global-dimension-size-125);
        --cm-alias-item-ui-icon-gap-s: var(--cm-global-dimension-size-85);
        --cm-alias-item-ui-icon-gap-m: var(--cm-global-dimension-size-100);
        --cm-alias-item-ui-icon-gap-l: var(--cm-global-dimension-size-115);
        --cm-alias-item-ui-icon-gap-xl: var(--cm-global-dimension-size-125);
        --cm-alias-item-clearbutton-gap-s: var(--cm-global-dimension-size-50);
        --cm-alias-item-clearbutton-gap-m: var(--cm-global-dimension-size-85);
        --cm-alias-item-clearbutton-gap-l: var(--cm-global-dimension-size-125);
        --cm-alias-item-clearbutton-gap-xl: var(--cm-global-dimension-size-150);
        --cm-alias-heading-xxxl-text-size: var(
            --cm-global-dimension-font-size-1300
        );
        --cm-alias-heading-han-xxxl-text-size: var(
            --cm-global-dimension-font-size-1300
        );
        --cm-alias-heading-han-xxxl-margin-top: var(
            --cm-global-dimension-font-size-1200
        );
        --cm-alias-heading-xxxl-margin-top: var(
            --cm-global-dimension-font-size-1200
        );
        --cm-alias-heading-xxl-text-size: var(
            --cm-global-dimension-font-size-1100
        );
        --cm-alias-heading-xxl-margin-top: var(
            --cm-global-dimension-font-size-900
        );
        --cm-alias-heading-han-xxl-text-size: var(
            --cm-global-dimension-font-size-900
        );
        --cm-alias-heading-han-xxl-margin-top: var(
            --cm-global-dimension-font-size-800
        );
        --cm-alias-heading-xl-text-size: var(
            --cm-global-dimension-font-size-900
        );
        --cm-alias-heading-xl-margin-top: var(
            --cm-global-dimension-font-size-800
        );
        --cm-alias-heading-han-xl-text-size: var(
            --cm-global-dimension-font-size-800
        );
        --cm-alias-heading-han-xl-margin-top: var(
            --cm-global-dimension-font-size-700
        );
        --cm-alias-heading-l-text-size: var(
            --cm-global-dimension-font-size-700
        );
        --cm-alias-heading-l-margin-top: var(
            --cm-global-dimension-font-size-600
        );
        --cm-alias-heading-han-l-text-size: var(
            --cm-global-dimension-font-size-600
        );
        --cm-alias-heading-han-l-margin-top: var(
            --cm-global-dimension-font-size-500
        );
        --cm-alias-heading-m-text-size: var(
            --cm-global-dimension-font-size-500
        );
        --cm-alias-heading-m-margin-top: var(
            --cm-global-dimension-font-size-400
        );
        --cm-alias-heading-han-m-text-size: var(
            --cm-global-dimension-font-size-400
        );
        --cm-alias-heading-han-m-margin-top: var(
            --cm-global-dimension-font-size-300
        );
        --cm-alias-heading-s-text-size: var(
            --cm-global-dimension-font-size-300
        );
        --cm-alias-heading-s-margin-top: var(
            --cm-global-dimension-font-size-200
        );
        --cm-alias-heading-xs-text-size: var(
            --cm-global-dimension-font-size-200
        );
        --cm-alias-heading-xs-margin-top: var(
            --cm-global-dimension-font-size-100
        );
        --cm-alias-heading-xxs-text-size: var(
            --cm-global-dimension-font-size-100
        );
        --cm-alias-heading-xxs-margin-top: var(
            --cm-global-dimension-font-size-75
        );
        --cm-alias-avatar-size-50: var(--cm-global-dimension-size-200);
        --cm-alias-avatar-size-75: var(--cm-global-dimension-size-225);
        --cm-alias-avatar-size-200: var(--cm-global-dimension-size-275);
        --cm-alias-avatar-size-300: var(--cm-global-dimension-size-325);
        --cm-alias-avatar-size-500: var(--cm-global-dimension-size-400);
        --cm-alias-avatar-size-700: var(--cm-global-dimension-size-500);
        --cm-alias-background-color-default: var(--cm-global-color-gray-100);
        --cm-alias-background-color-disabled: var(--cm-global-color-gray-200);
        --cm-alias-background-color-transparent: transparent;
        --cm-alias-background-color-over-background-down: hsla(
            0,
            0%,
            100%,
            0.2
        );
        --cm-alias-background-color-quickactions-overlay: rgba(0, 0, 0, 0.2);
        --cm-alias-placeholder-text-color: var(--cm-global-color-gray-800);
        --cm-alias-placeholder-text-color-hover: var(
            --cm-global-color-gray-1500
        );
        --cm-alias-placeholder-text-color-down: var(--cm-global-color-gray-900);
        --cm-alias-placeholder-text-color-selected: var(
            --cm-global-color-gray-800
        );
        --cm-alias-label-text-color: var(--cm-global-color-gray-700);
        --cm-alias-text-color: var(--cm-global-color-gray-800);
        --cm-alias-text-color-hover: var(--cm-global-color-gray-900);
        --cm-alias-text-color-down: var(--cm-global-color-gray-900);
        --cm-alias-text-color-key-focus: var(--cm-global-color-blue-600);
        --cm-alias-text-color-mouse-focus: var(--cm-global-color-blue-600);
        --cm-alias-text-color-disabled: var(--cm-global-color-gray-500);
        --cm-alias-text-color-invalid: var(--cm-global-color-red-500);
        --cm-alias-text-color-selected: var(--cm-global-color-blue-600);
        --cm-alias-text-color-selected-neutral: var(--cm-global-color-gray-900);
        --cm-alias-text-color-over-background: var(
            --cm-global-color-static-white
        );
        --cm-alias-text-color-over-background-disabled: hsla(0, 0%, 100%, 0.2);
        --cm-alias-heading-text-color: var(--cm-global-color-gray-900);
        --cm-alias-border-color: var(--cm-global-color-gray-1500);
        --cm-alias-border-color-hover: var(--cm-global-color-gray-1500);
        --cm-alias-border-color-down: var(--cm-global-color-gray-500);
        --cm-alias-border-color-focus: var(--cm-global-color-blue-400);
        --cm-alias-border-color-mouse-focus: var(--cm-global-color-blue-500);
        --cm-alias-border-color-disabled: var(--cm-global-color-gray-200);
        --cm-alias-border-color-extralight: var(--cm-global-color-gray-100);
        --cm-alias-border-color-light: var(--cm-global-color-gray-200);
        --cm-alias-border-color-mid: var(--cm-global-color-gray-300);
        --cm-alias-border-color-dark: var(--cm-global-color-gray-100);
        --cm-alias-border-color-darker-default: var(--cm-global-color-gray-600);
        --cm-alias-border-color-darker-hover: var(--cm-global-color-gray-900);
        --cm-alias-border-color-darker-down: var(--cm-global-color-gray-900);
        --cm-alias-border-color-transparent: transparent;
        --cm-alias-border-color-translucent-dark: rgba(0, 0, 0, 0.05);
        --cm-alias-border-color-translucent-darker: rgba(0, 0, 0, 0.1);
        --cm-alias-focus-color: var(--cm-global-color-blue-400);
        --cm-alias-focus-ring-color: var(--cm-alias-focus-color);
        --cm-alias-track-color-default: var(--cm-global-color-gray-300);
        --cm-alias-track-color-disabled: var(--cm-global-color-gray-300);
        --cm-alias-track-color-over-background: hsla(0, 0%, 100%, 0.2);
        --cm-alias-icon-color: var(--cm-global-color-gray-700);
        --cm-alias-icon-color-over-background: var(
            --cm-global-color-static-white
        );
        --cm-alias-icon-color-hover: var(--cm-global-color-gray-900);
        --cm-alias-icon-color-down: var(--cm-global-color-gray-900);
        --cm-alias-icon-color-focus: var(--cm-global-color-gray-900);
        --cm-alias-icon-color-disabled: var(--cm-global-color-gray-400);
        --cm-alias-icon-color-over-background-disabled: hsla(0, 0%, 100%, 0.2);
        --cm-alias-icon-color-selected-neutral: var(--cm-global-color-gray-900);
        --cm-alias-icon-color-selected: var(--cm-global-color-blue-500);
        --cm-alias-icon-color-selected-hover: var(--cm-global-color-blue-600);
        --cm-alias-icon-color-selected-down: var(--cm-global-color-blue-700);
        --cm-alias-icon-color-selected-focus: var(--cm-global-color-blue-600);
        --cm-alias-image-opacity-disabled: var(--cm-global-color-opacity-30);
        --cm-alias-toolbar-background-color: var(--cm-global-color-gray-100);
        --cm-alias-colorhandle-outer-border-color: rgba(0, 0, 0, 0.42);
        --cm-alias-code-highlight-color-default: var(
            --cm-global-color-gray-800
        );
        --cm-alias-code-highlight-color-background: var(
            --cm-global-color-gray-75
        );
        --cm-alias-code-highlight-color-keyword: var(
            --cm-global-color-fuchsia-600
        );
        --cm-alias-code-highlight-color-section: var(--cm-global-color-red-600);
        --cm-alias-code-highlight-color-literal: var(
            --cm-global-color-blue-600
        );
        --cm-alias-code-highlight-color-attribute: var(
            --cm-global-color-seafoam-600
        );
        --cm-alias-code-highlight-color-class: var(
            --cm-global-color-magenta-600
        );
        --cm-alias-code-highlight-color-variable: var(
            --cm-global-color-purple-600
        );
        --cm-alias-code-highlight-color-title: var(
            --cm-global-color-indigo-600
        );
        --cm-alias-code-highlight-color-string: var(
            --cm-global-color-fuchsia-600
        );
        --cm-alias-code-highlight-color-function: var(
            --cm-global-color-blue-600
        );
        --cm-alias-code-highlight-color-comment: var(
            --cm-global-color-gray-700
        );
        --cm-alias-categorical-color-1: var(
            --cm-global-color-static-seafoam-200
        );
        --cm-alias-categorical-color-2: var(
            --cm-global-color-static-indigo-700
        );
        --cm-alias-categorical-color-3: var(
            --cm-global-color-static-orange-500
        );
        --cm-alias-categorical-color-4: var(
            --cm-global-color-static-magenta-500
        );
        --cm-alias-categorical-color-5: var(
            --cm-global-color-static-indigo-200
        );
        --cm-alias-categorical-color-6: var(
            --cm-global-color-static-celery-200
        );
        --cm-alias-categorical-color-7: var(--cm-global-color-static-blue-500);
        --cm-alias-categorical-color-8: var(
            --cm-global-color-static-purple-800
        );
        --cm-alias-categorical-color-9: var(
            --cm-global-color-static-yellow-500
        );
        --cm-alias-categorical-color-10: var(
            --cm-global-color-static-orange-700
        );
        --cm-alias-categorical-color-11: var(
            --cm-global-color-static-green-600
        );
        --cm-alias-categorical-color-12: var(
            --cm-global-color-static-chartreuse-300
        );
        --cm-alias-categorical-color-13: var(--cm-global-color-static-blue-200);
        --cm-alias-categorical-color-14: var(
            --cm-global-color-static-fuchsia-500
        );
        --cm-alias-categorical-color-15: var(
            --cm-global-color-static-magenta-200
        );
        --cm-alias-categorical-color-16: var(
            --cm-global-color-static-yellow-200
        );
        font-family: var(--cm-alias-body-text-font-family);
        font-size: var(--cm-alias-font-size-default);
    }

    :host:lang(ar),
    :root:lang(ar) {
        font-family: var(--cm-alias-font-family-ar);
    }

    :host:lang(he),
    :root:lang(he) {
        font-family: var(--cm-alias-font-family-he);
    }

    :host:lang(zh-Hans),
    :root:lang(zh-Hans) {
        font-family: var(--cm-alias-font-family-zhhans);
    }

    :host:lang(zh),
    :host:lang(zh-Hant),
    :root:lang(zh),
    :root:lang(zh-Hant) {
        font-family: var(--cm-alias-font-family-zh);
    }

    :host:lang(ko),
    :root:lang(ko) {
        font-family: var(--cm-alias-font-family-ko);
    }

    :host:lang(ja),
    :root:lang(ja) {
        font-family: var(--cm-alias-font-family-ja);
    }

    :host {
        display: block;
    }

    #scale,
    #theme {
        width: 100%;
        height: 100%;
    }
`;
export default styles;
//# sourceMappingURL=theme.css.js.map
