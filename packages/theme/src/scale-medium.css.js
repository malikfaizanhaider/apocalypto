/* Copyright 2021 i2c Inc. All rights reserved. */
import { css } from '../../base/src/index';
const styles = css `
    :host,
    :root {
        --cm-global-dimension-scale-factor: 1;
        --cm-global-dimension-size-0: 0rem;
        --cm-global-dimension-size-10: 0.0625rem;
        --cm-global-dimension-size-25: 0.125rem;
        --cm-global-dimension-size-40: 0.1875rem;
        --cm-global-dimension-size-50: 0.25rem;
        --cm-global-dimension-size-65: 0.3125rem;
        --cm-global-dimension-size-75: 0.375rem;
        --cm-global-dimension-size-85: 0.4375rem;
        --cm-global-dimension-size-100: 0.5rem;
        --cm-global-dimension-size-115: 0.5625rem;
        --cm-global-dimension-size-125: 0.625rem;
        --cm-global-dimension-size-130: 0.6875rem;
        --cm-global-dimension-size-150: 0.75rem;
        --cm-global-dimension-size-160: 0.8125rem;
        --cm-global-dimension-size-175: 0.875rem;
        --cm-global-dimension-size-185: 0.9375rem;
        --cm-global-dimension-size-200: 1rem;
        --cm-global-dimension-size-225: 1.125rem;
        --cm-global-dimension-size-250: 1.25rem;
        --cm-global-dimension-size-275: 1.375rem;
        --cm-global-dimension-size-300: var(--i2c-size-s);
        --cm-global-dimension-size-325: 1.625rem;
        --cm-global-dimension-size-350: 1.75rem;
        --cm-global-dimension-size-400: var(--i2c-size-m);
        --cm-global-dimension-size-450: 2.25rem;
        --cm-global-dimension-size-500: var(--i2c-size-l);
        --cm-global-dimension-size-550: 2.75rem;
        --cm-global-dimension-size-600: 3rem;
        --cm-global-dimension-size-650: 3.25rem;
        --cm-global-dimension-size-675: 3.375rem;
        --cm-global-dimension-size-700: 3.5rem;
        --cm-global-dimension-size-750: 3.75rem;
        --cm-global-dimension-size-800: 4rem;
        --cm-global-dimension-size-900: 4.5rem;
        --cm-global-dimension-size-1000: 5rem;
        --cm-global-dimension-size-1125: 5.625rem;
        --cm-global-dimension-size-1200: 6rem;
        --cm-global-dimension-size-1250: 6.25rem;
        --cm-global-dimension-size-1600: 8rem;
        --cm-global-dimension-size-1700: 8.5rem;
        --cm-global-dimension-size-1800: 9rem;
        --cm-global-dimension-size-2000: 10rem;
        --cm-global-dimension-size-2400: 12rem;
        --cm-global-dimension-size-2500: 12.5rem;
        --cm-global-dimension-size-3000: 15rem;
        --cm-global-dimension-size-3400: 17rem;
        --cm-global-dimension-size-3600: 18rem;
        --cm-global-dimension-size-4600: 368px;
        --cm-global-dimension-size-5000: 23rem;
        --cm-global-dimension-size-6000: 30rem;
        --cm-global-dimension-font-size-25: 0.625rem;
        --cm-global-dimension-font-size-50: 0.6875rem;
        --cm-global-dimension-font-size-75: 0.75rem;
        --cm-global-dimension-font-size-100: var(--i2c-font-size-xs);
        --cm-global-dimension-font-size-150: 0.9375rem;
        --cm-global-dimension-font-size-200: 1rem;
        --cm-global-dimension-font-size-300: 1.125rem;
        --cm-global-dimension-font-size-400: 1.25rem;
        --cm-global-dimension-font-size-500: 1.375rem;
        --cm-global-dimension-font-size-600: 1.5625rem;
        --cm-global-dimension-font-size-700: 1.75rem;
        --cm-global-dimension-font-size-800: 2rem;
        --cm-global-dimension-font-size-900: 2.25rem;
        --cm-global-dimension-font-size-1000: 2.5rem;
        --cm-global-dimension-font-size-1100: 2.8125rem;
        --cm-global-dimension-font-size-1200: 3.125rem;
        --cm-global-dimension-font-size-1300: 3.75rem;
        --cm-alias-focus-ring-radius-default: var(
            --cm-global-dimension-static-size-100
        );
        --cm-alias-item-text-padding-top-l: var(--cm-global-dimension-size-115);
        --cm-alias-item-text-padding-bottom-s: var(
            --cm-global-dimension-static-size-65
        );
        --cm-alias-item-mark-padding-top-m: var(
            --cm-global-dimension-static-size-75
        );
        --cm-alias-item-mark-padding-bottom-m: var(
            --cm-global-dimension-static-size-75
        );
        --cm-alias-item-workflow-padding-left-m: var(
            --cm-global-dimension-size-125
        );
        --cm-alias-item-rounded-workflow-padding-left-m: var(
            --cm-global-dimension-size-175
        );
        --cm-alias-item-rounded-workflow-padding-left-xl: 21px;
        --cm-alias-item-mark-padding-left-m: var(
            --cm-global-dimension-size-125
        );
        --cm-alias-item-control-1-size-l: var(--cm-global-dimension-size-125);
        --cm-alias-item-control-1-size-xl: var(--cm-global-dimension-size-125);
        --cm-alias-item-control-2-size-s: var(--cm-global-dimension-size-150);
        --cm-alias-item-control-3-height-s: var(--cm-global-dimension-size-150);
        --cm-alias-item-control-3-width-s: 23px;
        --cm-alias-item-control-3-width-m: var(
            --cm-global-dimension-static-size-325
        );
        --cm-alias-item-control-3-width-l: 29px;
        --cm-alias-item-control-3-width-xl: 33px;
        --cm-alias-item-mark-size-m: var(--cm-global-dimension-size-250);
        --cm-alias-workflow-icon-size-l: var(
            --cm-global-dimension-static-size-250
        );
        --cm-alias-ui-icon-chevron-size-75: var(
            --cm-global-dimension-static-size-125
        );
        --cm-alias-ui-icon-chevron-size-100: var(
            --cm-global-dimension-static-size-125
        );
        --cm-alias-ui-icon-chevron-size-200: var(
            --cm-global-dimension-static-size-150
        );
        --cm-alias-ui-icon-chevron-size-300: var(
            --cm-global-dimension-static-size-175
        );
        --cm-alias-ui-icon-chevron-size-400: var(
            --cm-global-dimension-static-size-200
        );
        --cm-alias-ui-icon-chevron-size-500: var(
            --cm-global-dimension-static-size-200
        );
        --cm-alias-ui-icon-checkmark-size-50: var(
            --cm-global-dimension-static-size-125
        );
        --cm-alias-ui-icon-checkmark-size-75: var(
            --cm-global-dimension-static-size-125
        );
        --cm-alias-ui-icon-checkmark-size-100: var(
            --cm-global-dimension-static-size-125
        );
        --cm-alias-ui-icon-checkmark-size-200: var(
            --cm-global-dimension-static-size-150
        );
        --cm-alias-ui-icon-checkmark-size-300: var(
            --cm-global-dimension-static-size-175
        );
        --cm-alias-ui-icon-checkmark-size-400: var(
            --cm-global-dimension-static-size-200
        );
        --cm-alias-ui-icon-checkmark-size-500: var(
            --cm-global-dimension-static-size-200
        );
        --cm-alias-ui-icon-checkmark-size-600: var(
            --cm-global-dimension-static-size-225
        );
        --cm-alias-ui-icon-dash-size-50: var(
            --cm-global-dimension-static-size-100
        );
        --cm-alias-ui-icon-dash-size-75: var(
            --cm-global-dimension-static-size-100
        );
        --cm-alias-ui-icon-dash-size-100: var(
            --cm-global-dimension-static-size-125
        );
        --cm-alias-ui-icon-dash-size-200: var(
            --cm-global-dimension-static-size-150
        );
        --cm-alias-ui-icon-dash-size-300: var(
            --cm-global-dimension-static-size-150
        );
        --cm-alias-ui-icon-dash-size-400: var(
            --cm-global-dimension-static-size-175
        );
        --cm-alias-ui-icon-dash-size-500: var(
            --cm-global-dimension-static-size-200
        );
        --cm-alias-ui-icon-dash-size-600: var(
            --cm-global-dimension-static-size-225
        );
        --cm-alias-ui-icon-cross-size-75: var(
            --cm-global-dimension-static-size-100
        );
        --cm-alias-ui-icon-cross-size-100: var(
            --cm-global-dimension-static-size-100
        );
        --cm-alias-ui-icon-cross-size-200: var(
            --cm-global-dimension-static-size-125
        );
        --cm-alias-ui-icon-cross-size-300: var(
            --cm-global-dimension-static-size-150
        );
        --cm-alias-ui-icon-cross-size-400: var(
            --cm-global-dimension-static-size-150
        );
        --cm-alias-ui-icon-cross-size-500: var(
            --cm-global-dimension-static-size-175
        );
        --cm-alias-ui-icon-cross-size-600: var(
            --cm-global-dimension-static-size-200
        );
        --cm-alias-ui-icon-arrow-size-75: var(
            --cm-global-dimension-static-size-125
        );
        --cm-alias-ui-icon-arrow-size-100: var(
            --cm-global-dimension-static-size-125
        );
        --cm-alias-ui-icon-arrow-size-200: var(
            --cm-global-dimension-static-size-150
        );
        --cm-alias-ui-icon-arrow-size-300: var(
            --cm-global-dimension-static-size-175
        );
        --cm-alias-ui-icon-arrow-size-400: var(
            --cm-global-dimension-static-size-200
        );
        --cm-alias-ui-icon-arrow-size-500: var(
            --cm-global-dimension-static-size-225
        );
        --cm-alias-ui-icon-arrow-size-600: var(
            --cm-global-dimension-static-size-250
        );
        --cm-alias-ui-icon-triplegripper-size-100-width: var(
            --cm-global-dimension-static-size-125
        );
        --cm-alias-ui-icon-doublegripper-size-100-height: var(
            --cm-global-dimension-static-size-50
        );
        --cm-alias-ui-icon-singlegripper-size-100-height: var(
            --cm-global-dimension-static-size-25
        );
        --cm-alias-ui-icon-cornertriangle-size-100: var(
            --cm-global-dimension-static-size-65
        );
        --cm-alias-ui-icon-cornertriangle-size-300: var(
            --cm-global-dimension-static-size-85
        );
        --cm-alias-ui-icon-asterisk-size-200: var(
            --cm-global-dimension-static-size-125
        );
        --cm-alias-ui-icon-asterisk-size-300: var(
            --cm-global-dimension-static-size-125
        );
        --cm-alias-avatar-size-100: var(--cm-global-dimension-size-250);
        --cm-alias-avatar-size-400: var(--cm-global-dimension-size-350);
        --cm-alias-avatar-size-600: var(--cm-global-dimension-size-450);
        --cm-actionbutton-l-emphasized-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-emphasized-icononly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-emphasized-icononly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-emphasized-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-emphasized-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-emphasized-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-emphasized-icononly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-emphasized-icononly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-emphasized-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-emphasized-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-emphasized-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-emphasized-icononly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-emphasized-icononly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-emphasized-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-emphasized-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-emphasized-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-emphasized-icononly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-emphasized-icononly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-emphasized-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-emphasized-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-quiet-emphasized-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-quiet-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-quiet-emphasized-icononly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-quiet-emphasized-icononly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-quiet-emphasized-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-quiet-emphasized-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-quiet-emphasized-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-quiet-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-quiet-emphasized-icononly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-quiet-emphasized-icononly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-quiet-emphasized-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-quiet-emphasized-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-quiet-emphasized-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-quiet-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-quiet-emphasized-icononly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-quiet-emphasized-icononly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-quiet-emphasized-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-quiet-emphasized-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-quiet-emphasized-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-quiet-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-quiet-emphasized-icononly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-quiet-emphasized-icononly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-quiet-emphasized-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-quiet-emphasized-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-quiet-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-quiet-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-quiet-icononly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-quiet-icononly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-quiet-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-quiet-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-quiet-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-quiet-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-quiet-icononly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-quiet-icononly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-quiet-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-quiet-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-quiet-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-quiet-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-quiet-icononly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-quiet-icononly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-quiet-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-quiet-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-quiet-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-quiet-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-quiet-icononly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-quiet-icononly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-quiet-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-quiet-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-icononly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-icononly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-l-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-icononly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-icononly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-m-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-icononly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-icononly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-s-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-icononly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-icononly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-actionbutton-xl-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-breadcrumb-compact-item-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-breadcrumb-compact-button-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-breadcrumb-item-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-breadcrumb-button-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-breadcrumb-multiline-item-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-breadcrumb-multiline-button-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-cta-l-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-cta-l-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-cta-l-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-cta-l-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-cta-m-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-cta-m-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-cta-m-min-width: var(--cm-global-dimension-size-900);
        --cm-button-cta-m-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-cta-m-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-cta-m-textonly-min-width: var(
            --cm-global-dimension-size-900
        );
        --cm-button-cta-s-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-cta-s-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-cta-s-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-cta-s-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-cta-xl-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-cta-xl-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-cta-xl-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-cta-xl-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-over-background-l-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-over-background-l-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-over-background-l-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-over-background-l-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-over-background-m-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-over-background-m-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-over-background-m-min-width: var(
            --cm-global-dimension-size-900
        );
        --cm-button-over-background-m-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-over-background-m-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-over-background-m-textonly-min-width: var(
            --cm-global-dimension-size-900
        );
        --cm-button-over-background-s-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-over-background-s-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-over-background-s-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-over-background-s-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-over-background-xl-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-over-background-xl-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-over-background-xl-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-over-background-xl-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-over-background-l-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-over-background-l-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-over-background-l-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-over-background-l-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-over-background-m-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-over-background-m-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-over-background-m-min-width: var(
            --cm-global-dimension-size-900
        );
        --cm-button-quiet-over-background-m-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-over-background-m-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-over-background-m-textonly-min-width: var(
            --cm-global-dimension-size-900
        );
        --cm-button-quiet-over-background-s-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-over-background-s-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-over-background-s-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-over-background-s-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-over-background-xl-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-over-background-xl-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-over-background-xl-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-over-background-xl-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-primary-l-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-primary-l-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-primary-l-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-primary-l-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-primary-m-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-primary-m-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-primary-m-min-width: var(--cm-global-dimension-size-900);
        --cm-button-primary-m-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-primary-m-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-primary-m-textonly-min-width: var(
            --cm-global-dimension-size-900
        );
        --cm-button-primary-s-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-primary-s-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-primary-s-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-primary-s-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-primary-xl-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-primary-xl-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-primary-xl-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-primary-xl-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-primary-l-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-primary-l-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-primary-l-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-primary-l-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-primary-m-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-primary-m-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-primary-m-min-width: var(
            --cm-global-dimension-size-900
        );
        --cm-button-quiet-primary-m-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-primary-m-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-primary-m-textonly-min-width: var(
            --cm-global-dimension-size-900
        );
        --cm-button-quiet-primary-s-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-primary-s-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-primary-s-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-primary-s-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-primary-xl-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-primary-xl-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-primary-xl-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-primary-xl-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-secondary-l-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-secondary-l-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-secondary-l-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-secondary-l-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-secondary-m-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-secondary-m-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-secondary-m-min-width: var(
            --cm-global-dimension-size-900
        );
        --cm-button-quiet-secondary-m-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-secondary-m-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-secondary-m-textonly-min-width: var(
            --cm-global-dimension-size-900
        );
        --cm-button-quiet-secondary-s-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-secondary-s-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-secondary-s-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-secondary-s-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-secondary-xl-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-secondary-xl-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-secondary-xl-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-secondary-xl-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-secondary-l-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-secondary-l-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-secondary-l-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-secondary-l-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-secondary-m-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-secondary-m-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-secondary-m-min-width: var(--cm-global-dimension-size-900);
        --cm-button-secondary-m-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-secondary-m-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-secondary-m-textonly-min-width: var(
            --cm-global-dimension-size-900
        );
        --cm-button-secondary-s-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-secondary-s-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-secondary-s-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-secondary-s-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-secondary-xl-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-secondary-xl-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-secondary-xl-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-secondary-xl-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-warning-l-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-warning-l-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-warning-l-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-warning-l-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-warning-m-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-warning-m-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-warning-m-min-width: var(
            --cm-global-dimension-size-900
        );
        --cm-button-quiet-warning-m-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-warning-m-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-warning-m-textonly-min-width: var(
            --cm-global-dimension-size-900
        );
        --cm-button-quiet-warning-s-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-warning-s-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-warning-s-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-warning-s-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-warning-xl-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-warning-xl-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-warning-xl-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-quiet-warning-xl-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-warning-l-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-warning-l-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-warning-l-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-warning-l-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-warning-m-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-warning-m-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-warning-m-min-width: var(--cm-global-dimension-size-900);
        --cm-button-warning-m-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-warning-m-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-warning-m-textonly-min-width: var(
            --cm-global-dimension-size-900
        );
        --cm-button-warning-s-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-warning-s-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-warning-s-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-warning-s-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-warning-xl-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-warning-xl-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-warning-xl-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-button-warning-xl-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-checkbox-l-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-checkbox-m-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-checkbox-s-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-checkbox-xl-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-checkbox-l-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-checkbox-m-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-checkbox-s-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-checkbox-xl-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-colorloupe-colorhandle-gap: var(
            --cm-global-dimension-static-size-125
        );
        --cm-colorslider-touch-hit-y: var(--cm-global-dimension-size-150);
        --cm-colorslider-vertical-touch-hit-x: var(
            --cm-global-dimension-size-150
        );
        --cm-colorwheel-min-size: var(--cm-global-dimension-size-2400);
        --cm-colorwheel-touch-hit-outer: var(--cm-global-dimension-size-150);
        --cm-colorwheel-touch-hit-inner: var(--cm-global-dimension-size-150);
        --cm-cyclebutton-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-cyclebutton-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-dialog-confirm-max-width: var(
            --cm-global-dimension-static-size-6000
        );
        --cm-dialog-confirm-title-text-size: var(
            --cm-global-dimension-font-size-300
        );
        --cm-dialog-confirm-description-text-size: var(
            --cm-global-dimension-font-size-100
        );
        --cm-dialog-confirm-padding: var(--cm-global-dimension-static-size-500);
        --cm-dialog-confirm-description-margin-bottom: var(
            --cm-global-dimension-static-size-600
        );
        --cm-dialog-destructive-max-width: var(
            --cm-global-dimension-static-size-6000
        );
        --cm-dialog-destructive-title-text-size: var(
            --cm-global-dimension-font-size-300
        );
        --cm-dialog-destructive-description-text-size: var(
            --cm-global-dimension-font-size-100
        );
        --cm-dialog-destructive-padding: var(
            --cm-global-dimension-static-size-500
        );
        --cm-dialog-destructive-description-margin-bottom: var(
            --cm-global-dimension-static-size-600
        );
        --cm-dialog-error-max-width: var(
            --cm-global-dimension-static-size-6000
        );
        --cm-dialog-error-title-text-size: var(
            --cm-global-dimension-font-size-300
        );
        --cm-dialog-error-description-text-size: var(
            --cm-global-dimension-font-size-100
        );
        --cm-dialog-error-padding: var(--cm-global-dimension-static-size-500);
        --cm-dialog-error-description-margin-bottom: var(
            --cm-global-dimension-static-size-600
        );
        --cm-dialog-info-max-width: var(--cm-global-dimension-static-size-6000);
        --cm-dialog-info-title-text-size: var(
            --cm-global-dimension-font-size-300
        );
        --cm-dialog-info-description-text-size: var(
            --cm-global-dimension-font-size-100
        );
        --cm-dialog-info-padding: var(--cm-global-dimension-static-size-500);
        --cm-dialog-info-description-margin-bottom: var(
            --cm-global-dimension-static-size-600
        );
        --cm-icon-arrow-down-small-height: var(--cm-global-dimension-size-125);
        --cm-icon-arrow-left-medium-height: var(--cm-global-dimension-size-125);
        --cm-icon-checkmark-medium-width: var(--cm-global-dimension-size-150);
        --cm-icon-checkmark-medium-height: var(--cm-global-dimension-size-150);
        --cm-icon-checkmark-small-width: var(--cm-global-dimension-size-125);
        --cm-icon-checkmark-small-height: var(--cm-global-dimension-size-125);
        --cm-icon-chevron-down-medium-width: var(
            --cm-global-dimension-size-125
        );
        --cm-icon-chevron-left-large-width: var(--cm-global-dimension-size-150);
        --cm-icon-chevron-left-medium-height: var(
            --cm-global-dimension-size-125
        );
        --cm-icon-chevron-right-large-width: var(
            --cm-global-dimension-size-150
        );
        --cm-icon-chevron-right-medium-height: var(
            --cm-global-dimension-size-125
        );
        --cm-icon-cross-large-width: var(--cm-global-dimension-size-150);
        --cm-icon-cross-large-height: var(--cm-global-dimension-size-150);
        --cm-icon-dash-small-width: var(--cm-global-dimension-size-125);
        --cm-icon-dash-small-height: var(--cm-global-dimension-size-125);
        --cm-icon-skip-left-width: 9px;
        --cm-icon-skip-left-height: var(--cm-global-dimension-size-125);
        --cm-icon-skip-right-width: 9px;
        --cm-icon-skip-right-height: var(--cm-global-dimension-size-125);
        --cm-icon-triplegripper-width: var(--cm-global-dimension-size-125);
        --cm-meter-negative-m-border-radius: var(
            --cm-global-dimension-static-size-40
        );
        --cm-meter-negative-m-over-background-border-radius: var(
            --cm-global-dimension-static-size-40
        );
        --cm-meter-negative-s-border-radius: var(
            --cm-global-dimension-static-size-25
        );
        --cm-meter-negative-s-over-background-border-radius: var(
            --cm-global-dimension-static-size-25
        );
        --cm-meter-negative-xl-border-radius: var(
            --cm-global-dimension-static-size-65
        );
        --cm-meter-negative-xl-over-background-border-radius: var(
            --cm-global-dimension-static-size-65
        );
        --cm-meter-notice-m-border-radius: var(
            --cm-global-dimension-static-size-40
        );
        --cm-meter-notice-m-over-background-border-radius: var(
            --cm-global-dimension-static-size-40
        );
        --cm-meter-notice-s-border-radius: var(
            --cm-global-dimension-static-size-25
        );
        --cm-meter-notice-s-over-background-border-radius: var(
            --cm-global-dimension-static-size-25
        );
        --cm-meter-notice-xl-border-radius: var(
            --cm-global-dimension-static-size-65
        );
        --cm-meter-notice-xl-over-background-border-radius: var(
            --cm-global-dimension-static-size-65
        );
        --cm-meter-positive-m-border-radius: var(
            --cm-global-dimension-static-size-40
        );
        --cm-meter-positive-m-over-background-border-radius: var(
            --cm-global-dimension-static-size-40
        );
        --cm-meter-positive-s-over-background-border-radius: var(
            --cm-global-dimension-static-size-25
        );
        --cm-meter-positive-xl-border-radius: var(
            --cm-global-dimension-static-size-65
        );
        --cm-meter-positive-xl-over-background-border-radius: var(
            --cm-global-dimension-static-size-65
        );
        --cm-pagination-page-button-line-height: 26px;
        --cm-panel-l-header-height: var(--cm-global-dimension-size-600);
        --cm-panel-l-collapsible-header-height: var(
            --cm-global-dimension-size-600
        );
        --cm-panel-s-header-height: var(--cm-global-dimension-size-600);
        --cm-panel-s-collapsible-header-height: var(
            --cm-global-dimension-size-600
        );
        --cm-picker-quiet-l-touch-hit-y: var(
            --cm-global-dimension-static-size-400
        );
        --cm-picker-quiet-l-min-width: var(--cm-global-dimension-size-250);
        --cm-picker-quiet-l-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-400
        );
        --cm-picker-quiet-l-textonly-min-width: var(
            --cm-global-dimension-size-250
        );
        --cm-picker-quiet-m-touch-hit-y: var(
            --cm-global-dimension-static-size-400
        );
        --cm-picker-quiet-m-min-width: var(--cm-global-dimension-size-225);
        --cm-picker-quiet-m-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-400
        );
        --cm-picker-quiet-m-textonly-min-width: var(
            --cm-global-dimension-size-225
        );
        --cm-picker-quiet-s-touch-hit-y: var(
            --cm-global-dimension-static-size-400
        );
        --cm-picker-quiet-s-min-width: var(--cm-global-dimension-size-200);
        --cm-picker-quiet-s-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-400
        );
        --cm-picker-quiet-s-textonly-min-width: var(
            --cm-global-dimension-size-200
        );
        --cm-picker-quiet-xl-touch-hit-y: var(
            --cm-global-dimension-static-size-400
        );
        --cm-picker-quiet-xl-min-width: var(--cm-global-dimension-size-275);
        --cm-picker-quiet-xl-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-400
        );
        --cm-picker-quiet-xl-textonly-min-width: var(
            --cm-global-dimension-size-275
        );
        --cm-picker-l-touch-hit-x: var(--cm-global-dimension-static-size-100);
        --cm-picker-l-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-picker-l-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-picker-l-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-picker-m-touch-hit-x: var(--cm-global-dimension-static-size-100);
        --cm-picker-m-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-picker-m-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-picker-m-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-picker-s-touch-hit-x: var(--cm-global-dimension-static-size-100);
        --cm-picker-s-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-picker-s-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-picker-s-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-picker-xl-touch-hit-x: var(--cm-global-dimension-static-size-100);
        --cm-picker-xl-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-picker-xl-textonly-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-picker-xl-textonly-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-progressbar-m-border-radius: var(
            --cm-global-dimension-static-size-40
        );
        --cm-progressbar-m-over-background-border-radius: var(
            --cm-global-dimension-static-size-40
        );
        --cm-progressbar-s-border-radius: var(
            --cm-global-dimension-static-size-25
        );
        --cm-progressbar-s-over-background-border-radius: var(
            --cm-global-dimension-static-size-25
        );
        --cm-progressbar-xl-border-radius: var(
            --cm-global-dimension-static-size-65
        );
        --cm-progressbar-xl-over-background-border-radius: var(
            --cm-global-dimension-static-size-65
        );
        --cm-progressbar-m-indeterminate-border-radius: var(
            --cm-global-dimension-static-size-40
        );
        --cm-progressbar-m-indeterminate-over-background-border-radius: var(
            --cm-global-dimension-static-size-40
        );
        --cm-progressbar-s-indeterminate-border-radius: var(
            --cm-global-dimension-static-size-25
        );
        --cm-progressbar-s-indeterminate-over-background-border-radius: var(
            --cm-global-dimension-static-size-25
        );
        --cm-progressbar-xl-indeterminate-border-radius: var(
            --cm-global-dimension-static-size-65
        );
        --cm-progressbar-xl-indeterminate-over-background-border-radius: var(
            --cm-global-dimension-static-size-65
        );
        --cm-progresscircle-medium-border-size: 3px;
        --cm-progresscircle-medium-over-background-border-size: 3px;
        --cm-progresscircle-small-border-size: var(
            --cm-global-dimension-static-size-25
        );
        --cm-progresscircle-small-indeterminate-border-size: var(
            --cm-global-dimension-static-size-25
        );
        --cm-progresscircle-small-over-background-border-size: var(
            --cm-global-dimension-static-size-25
        );
        --cm-progresscircle-medium-indeterminate-border-size: 3px;
        --cm-radio-l-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-radio-m-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-radio-s-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-radio-xl-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-radio-l-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-radio-m-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-radio-s-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-radio-xl-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-rating-icon-width: 24px;
        --cm-rating-indicator-width: 16px;
        --cm-rating-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-rating-emphasized-icon-width: 24px;
        --cm-rating-emphasized-indicator-width: 16px;
        --cm-rating-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-search-quiet-l-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-search-quiet-l-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-search-quiet-m-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-search-quiet-m-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-search-quiet-s-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-search-quiet-s-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-search-quiet-xl-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-search-quiet-xl-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-search-l-touch-hit-x: var(--cm-global-dimension-static-size-100);
        --cm-search-l-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-search-m-touch-hit-x: var(--cm-global-dimension-static-size-100);
        --cm-search-m-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-search-s-touch-hit-x: var(--cm-global-dimension-static-size-100);
        --cm-search-s-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-search-xl-touch-hit-x: var(--cm-global-dimension-static-size-100);
        --cm-search-xl-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-sidenav-item-touch-hit-bottom: var(
            --cm-global-dimension-static-size-25
        );
        --cm-sidenav-multilevel-item-touch-hit-bottom: var(
            --cm-global-dimension-static-size-25
        );
        --cm-slider-l-track-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-slider-l-handle-touch-hit-x: var(
            --cm-global-dimension-static-size-200
        );
        --cm-slider-l-handle-touch-hit-y: var(
            --cm-global-dimension-static-size-200
        );
        --cm-slider-m-track-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-slider-m-handle-touch-hit-x: var(
            --cm-global-dimension-static-size-200
        );
        --cm-slider-m-handle-touch-hit-y: var(
            --cm-global-dimension-static-size-200
        );
        --cm-slider-s-track-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-slider-s-handle-touch-hit-x: var(
            --cm-global-dimension-static-size-200
        );
        --cm-slider-s-handle-touch-hit-y: var(
            --cm-global-dimension-static-size-200
        );
        --cm-slider-xl-track-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-slider-xl-handle-touch-hit-x: var(
            --cm-global-dimension-static-size-200
        );
        --cm-slider-xl-handle-touch-hit-y: var(
            --cm-global-dimension-static-size-200
        );
        --cm-slider-editable-track-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-slider-editable-handle-touch-hit-x: var(
            --cm-global-dimension-static-size-200
        );
        --cm-slider-editable-handle-touch-hit-y: var(
            --cm-global-dimension-static-size-200
        );
        --cm-slider-tick-l-track-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-slider-tick-l-handle-touch-hit-x: var(
            --cm-global-dimension-static-size-200
        );
        --cm-slider-tick-l-handle-touch-hit-y: var(
            --cm-global-dimension-static-size-200
        );
        --cm-slider-tick-m-track-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-slider-tick-m-handle-touch-hit-x: var(
            --cm-global-dimension-static-size-200
        );
        --cm-slider-tick-m-handle-touch-hit-y: var(
            --cm-global-dimension-static-size-200
        );
        --cm-slider-tick-s-track-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-slider-tick-s-handle-touch-hit-x: var(
            --cm-global-dimension-static-size-200
        );
        --cm-slider-tick-s-handle-touch-hit-y: var(
            --cm-global-dimension-static-size-200
        );
        --cm-slider-tick-xl-track-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-slider-tick-xl-handle-touch-hit-x: var(
            --cm-global-dimension-static-size-200
        );
        --cm-slider-tick-xl-handle-touch-hit-y: var(
            --cm-global-dimension-static-size-200
        );
        --cm-switch-l-emphasized-focus-ring-border-radius-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-l-emphasized-focus-ring-border-radius-selected-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-l-emphasized-focus-ring-border-radius-error-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-l-emphasized-focus-ring-border-radius-error-selected-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-l-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-switch-l-emphasized-handle-border-radius: 7px;
        --cm-switch-m-emphasized-focus-ring-border-radius-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-m-emphasized-focus-ring-border-radius-selected-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-m-emphasized-focus-ring-border-radius-error-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-m-emphasized-focus-ring-border-radius-error-selected-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-m-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-switch-m-emphasized-handle-border-radius: 7px;
        --cm-switch-s-emphasized-focus-ring-border-radius-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-s-emphasized-focus-ring-border-radius-selected-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-s-emphasized-focus-ring-border-radius-error-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-s-emphasized-focus-ring-border-radius-error-selected-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-s-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-switch-s-emphasized-handle-border-radius: 7px;
        --cm-switch-xl-emphasized-focus-ring-border-radius-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-xl-emphasized-focus-ring-border-radius-selected-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-xl-emphasized-focus-ring-border-radius-error-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-xl-emphasized-focus-ring-border-radius-error-selected-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-xl-emphasized-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-switch-xl-emphasized-handle-border-radius: 7px;
        --cm-switch-l-focus-ring-border-radius-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-l-focus-ring-border-radius-selected-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-l-focus-ring-border-radius-error-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-l-focus-ring-border-radius-error-selected-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-l-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-switch-l-handle-border-radius: 7px;
        --cm-switch-m-focus-ring-border-radius-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-m-focus-ring-border-radius-selected-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-m-focus-ring-border-radius-error-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-m-focus-ring-border-radius-error-selected-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-m-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-switch-m-handle-border-radius: 7px;
        --cm-switch-s-focus-ring-border-radius-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-s-focus-ring-border-radius-selected-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-s-focus-ring-border-radius-error-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-s-focus-ring-border-radius-error-selected-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-s-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-switch-s-handle-border-radius: 7px;
        --cm-switch-xl-focus-ring-border-radius-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-xl-focus-ring-border-radius-selected-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-xl-focus-ring-border-radius-error-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-xl-focus-ring-border-radius-error-selected-key-focus: var(
            --cm-global-dimension-static-size-130
        );
        --cm-switch-xl-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-switch-xl-handle-border-radius: 7px;
        --cm-tabs-quiet-s-compact-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-s-compact-emphasized-margin-left: -7px;
        --cm-tabs-quiet-s-compact-emphasized-margin-right: -7px;
        --cm-tabs-quiet-s-compact-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-s-compact-margin-left: -7px;
        --cm-tabs-quiet-s-compact-margin-right: -7px;
        --cm-tabs-quiet-s-compact-vertical-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-s-compact-vertical-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-s-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-s-emphasized-margin-left: -7px;
        --cm-tabs-quiet-s-emphasized-margin-right: -7px;
        --cm-tabs-quiet-s-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-s-margin-left: -7px;
        --cm-tabs-quiet-s-margin-right: -7px;
        --cm-tabs-quiet-s-vertical-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-s-vertical-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-m-compact-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-m-compact-emphasized-margin-left: -8px;
        --cm-tabs-quiet-m-compact-emphasized-margin-right: -8px;
        --cm-tabs-quiet-m-compact-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-m-compact-margin-left: -8px;
        --cm-tabs-quiet-m-compact-margin-right: -8px;
        --cm-tabs-quiet-m-compact-vertical-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-m-compact-vertical-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-m-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-m-emphasized-margin-left: -8px;
        --cm-tabs-quiet-m-emphasized-margin-right: -8px;
        --cm-tabs-quiet-m-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-m-margin-left: -8px;
        --cm-tabs-quiet-m-margin-right: -8px;
        --cm-tabs-quiet-m-vertical-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-m-vertical-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-l-compact-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-l-compact-emphasized-margin-left: -9px;
        --cm-tabs-quiet-l-compact-emphasized-margin-right: -9px;
        --cm-tabs-quiet-l-compact-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-l-compact-margin-left: -9px;
        --cm-tabs-quiet-l-compact-margin-right: -9px;
        --cm-tabs-quiet-l-compact-vertical-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-l-compact-vertical-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-l-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-l-emphasized-margin-left: -9px;
        --cm-tabs-quiet-l-emphasized-margin-right: -9px;
        --cm-tabs-quiet-l-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-l-margin-left: -9px;
        --cm-tabs-quiet-l-margin-right: -9px;
        --cm-tabs-quiet-l-vertical-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-l-vertical-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-xl-compact-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-xl-compact-emphasized-margin-left: -10px;
        --cm-tabs-quiet-xl-compact-emphasized-margin-right: -10px;
        --cm-tabs-quiet-xl-compact-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-xl-compact-margin-left: -10px;
        --cm-tabs-quiet-xl-compact-margin-right: -10px;
        --cm-tabs-quiet-xl-compact-vertical-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-xl-compact-vertical-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-xl-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-xl-emphasized-margin-left: -10px;
        --cm-tabs-quiet-xl-emphasized-margin-right: -10px;
        --cm-tabs-quiet-xl-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-xl-margin-left: -10px;
        --cm-tabs-quiet-xl-margin-right: -10px;
        --cm-tabs-quiet-xl-vertical-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-quiet-xl-vertical-focus-ring-border-radius: 5px;
        --cm-tabs-s-compact-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-s-compact-emphasized-margin-left: -7px;
        --cm-tabs-s-compact-emphasized-margin-right: -7px;
        --cm-tabs-s-compact-focus-ring-border-radius: 5px;
        --cm-tabs-s-compact-margin-left: -7px;
        --cm-tabs-s-compact-margin-right: -7px;
        --cm-tabs-s-compact-vertical-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-s-compact-vertical-focus-ring-border-radius: 5px;
        --cm-tabs-s-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-s-emphasized-margin-left: -7px;
        --cm-tabs-s-emphasized-margin-right: -7px;
        --cm-tabs-s-focus-ring-border-radius: 5px;
        --cm-tabs-s-margin-left: -7px;
        --cm-tabs-s-margin-right: -7px;
        --cm-tabs-s-vertical-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-s-vertical-focus-ring-border-radius: 5px;
        --cm-tabs-m-compact-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-m-compact-emphasized-margin-left: -8px;
        --cm-tabs-m-compact-emphasized-margin-right: -8px;
        --cm-tabs-m-compact-focus-ring-border-radius: 5px;
        --cm-tabs-m-compact-margin-left: -8px;
        --cm-tabs-m-compact-margin-right: -8px;
        --cm-tabs-m-compact-vertical-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-m-compact-vertical-focus-ring-border-radius: 5px;
        --cm-tabs-m-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-m-emphasized-margin-left: -8px;
        --cm-tabs-m-emphasized-margin-right: -8px;
        --cm-tabs-m-focus-ring-border-radius: 5px;
        --cm-tabs-m-margin-left: -8px;
        --cm-tabs-m-margin-right: -8px;
        --cm-tabs-m-vertical-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-m-vertical-focus-ring-border-radius: 5px;
        --cm-tabs-l-compact-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-l-compact-emphasized-margin-left: -9px;
        --cm-tabs-l-compact-emphasized-margin-right: -9px;
        --cm-tabs-l-compact-focus-ring-border-radius: 5px;
        --cm-tabs-l-compact-margin-left: -9px;
        --cm-tabs-l-compact-margin-right: -9px;
        --cm-tabs-l-compact-vertical-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-l-compact-vertical-focus-ring-border-radius: 5px;
        --cm-tabs-l-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-l-emphasized-margin-left: -9px;
        --cm-tabs-l-emphasized-margin-right: -9px;
        --cm-tabs-l-focus-ring-border-radius: 5px;
        --cm-tabs-l-margin-left: -9px;
        --cm-tabs-l-margin-right: -9px;
        --cm-tabs-l-vertical-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-l-vertical-focus-ring-border-radius: 5px;
        --cm-tabs-xl-compact-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-xl-compact-emphasized-margin-left: -10px;
        --cm-tabs-xl-compact-emphasized-margin-right: -10px;
        --cm-tabs-xl-compact-focus-ring-border-radius: 5px;
        --cm-tabs-xl-compact-margin-left: -10px;
        --cm-tabs-xl-compact-margin-right: -10px;
        --cm-tabs-xl-compact-vertical-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-xl-compact-vertical-focus-ring-border-radius: 5px;
        --cm-tabs-xl-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-xl-emphasized-margin-left: -10px;
        --cm-tabs-xl-emphasized-margin-right: -10px;
        --cm-tabs-xl-focus-ring-border-radius: 5px;
        --cm-tabs-xl-margin-left: -10px;
        --cm-tabs-xl-margin-right: -10px;
        --cm-tabs-xl-vertical-emphasized-focus-ring-border-radius: 5px;
        --cm-tabs-xl-vertical-focus-ring-border-radius: 5px;
        --cm-textarea-quiet-l-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textarea-quiet-l-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textarea-quiet-m-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textarea-quiet-m-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textarea-quiet-s-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textarea-quiet-s-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textarea-quiet-xl-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textarea-quiet-xl-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textarea-l-touch-hit-x: var(--cm-global-dimension-static-size-100);
        --cm-textarea-l-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-textarea-m-touch-hit-x: var(--cm-global-dimension-static-size-100);
        --cm-textarea-m-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-textarea-s-touch-hit-x: var(--cm-global-dimension-static-size-100);
        --cm-textarea-s-touch-hit-y: var(--cm-global-dimension-static-size-100);
        --cm-textarea-xl-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textarea-xl-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textfield-quiet-l-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textfield-quiet-l-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textfield-quiet-m-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textfield-quiet-m-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textfield-quiet-s-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textfield-quiet-s-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textfield-quiet-xl-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textfield-quiet-xl-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textfield-l-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textfield-l-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textfield-m-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textfield-m-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textfield-s-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textfield-s-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textfield-xl-touch-hit-x: var(
            --cm-global-dimension-static-size-100
        );
        --cm-textfield-xl-touch-hit-y: var(
            --cm-global-dimension-static-size-100
        );
        --cm-tooltip-info-padding-bottom: 5px;
        --cm-tooltip-negative-padding-bottom: 5px;
        --cm-tooltip-padding-bottom: 5px;
        --cm-tooltip-positive-padding-bottom: 5px;
    }
`;
export default styles;
//# sourceMappingURL=scale-medium.css.js.map