/* Copyright 2021 i2c Inc. All rights reserved. */
import { css } from '../../base/src/index';

const styles = css`
    ::slotted([slot='icon']) {
        max-height: 100%;
        flex-shrink: 0;
    }

    #label {
        align-self: center;
        justify-self: center;
        text-align: center;
    }

    #label:empty {
        display: none;
    }

    :host([size='s']) {
        --cm-button-primary-focus-ring-size-key-focus: var(
            --cm-button-primary-s-focus-ring-size-key-focus,
            var(--cm-alias-focus-ring-size)
        );
        --cm-button-primary-text-font-weight: var(
            --cm-button-primary-s-text-font-weight,
            var(--cm-global-font-weight-regular)
        );
        --cm-button-primary-text-line-height: var(
            --cm-button-primary-s-text-line-height,
            var(--cm-alias-component-text-line-height)
        );
        --cm-button-primary-border-size: var(
            --cm-button-primary-s-border-size,
            var(--cm-alias-border-size-thin)
        );
        --cm-button-primary-text-size: var(
            --cm-button-primary-s-text-size,
            var(--cm-alias-item-text-size-s)
        );
        --cm-button-primary-icon-gap: var(
            --cm-button-primary-s-icon-gap,
            var(--cm-alias-item-workflow-icon-gap-s)
        );
        --cm-button-primary-height: var(
            --cm-button-primary-s-height,
            var(--cm-alias-item-height-s)
        );
        --cm-button-primary-padding-left: var(
            --cm-button-primary-s-padding-left,
            var(--cm-alias-item-rounded-workflow-padding-left-s)
        );
        --cm-button-primary-border-radius: var(
            --cm-button-primary-s-border-radius,
            var(--cm-alias-item-rounded-border-radius-s)
        );
        --cm-button-primary-min-width: var(
            --cm-button-primary-s-min-width,
            var(--cm-global-dimension-size-675)
        );
        --cm-button-primary-textonly-padding-left: var(
            --cm-button-primary-s-textonly-padding-left,
            var(--cm-alias-item-rounded-padding-s)
        );
        --cm-button-primary-textonly-padding-right: var(
            --cm-button-primary-s-textonly-padding-right,
            var(--cm-alias-item-rounded-padding-s)
        );
        --cm-button-primary-text-padding-top: calc(
            var(
                    --cm-button-primary-s-text-padding-top,
                    var(--cm-alias-item-text-padding-top-s)
                ) - 3px
        );
    }

    :host([size='m']) {
        --cm-button-primary-min-width: var(--cm-button-primary-m-min-width);
        --cm-button-primary-focus-ring-size-key-focus: var(
            --cm-button-primary-m-focus-ring-size-key-focus,
            var(--cm-alias-focus-ring-size)
        );
        --cm-button-primary-text-font-weight: var(
            --cm-button-primary-m-text-font-weight,
            var(--cm-global-font-weight-regular)
        );
        --cm-button-primary-text-line-height: var(
            --cm-button-primary-m-text-line-height,
            var(--cm-alias-component-text-line-height)
        );
        --cm-button-primary-border-size: var(
            --cm-button-primary-m-border-size,
            var(--cm-alias-border-size-thin)
        );
        --cm-button-primary-text-size: var(
            --cm-button-primary-m-text-size,
            var(--cm-alias-item-text-size-m)
        );
        --cm-button-primary-text-padding-top: var(
            --cm-button-primary-m-text-padding-top,
            var(--cm-alias-item-text-padding-top-m)
        );
        --cm-button-primary-height: var(
            --cm-button-primary-m-height,
            var(--cm-alias-item-height-m)
        );
        --cm-button-primary-icon-gap: var(
            --cm-button-primary-m-icon-gap,
            var(--cm-alias-item-workflow-icon-gap-m)
        );
        --cm-button-primary-padding-left: var(
            --cm-button-primary-m-padding-left,
            var(--cm-alias-item-rounded-workflow-padding-left-m)
        );
        --cm-button-primary-border-radius: var(
            --cm-button-primary-m-border-radius,
            var(--cm-alias-item-rounded-border-radius-m)
        );
        --cm-button-primary-textonly-padding-left: var(
            --cm-button-primary-m-textonly-padding-left,
            var(--cm-alias-item-rounded-padding-m)
        );
        --cm-button-primary-textonly-padding-right: var(
            --cm-button-primary-m-textonly-padding-right,
            var(--cm-alias-item-rounded-padding-m)
        );
    }

    :host([size='l']) {
        --cm-button-primary-focus-ring-size-key-focus: var(
            --cm-button-primary-l-focus-ring-size-key-focus,
            var(--cm-alias-focus-ring-size)
        );
        --cm-button-primary-text-font-weight: var(
            --cm-button-primary-l-text-font-weight,
            var(--cm-global-font-weight-regular)
        );
        --cm-button-primary-text-line-height: var(
            --cm-button-primary-l-text-line-height,
            var(--cm-alias-component-text-line-height)
        );
        --cm-button-primary-border-size: var(
            --cm-button-primary-l-border-size,
            var(--cm-alias-border-size-thin)
        );
        --cm-button-primary-text-size: var(
            --cm-button-primary-l-text-size,
            var(--cm-alias-item-text-size-l)
        );
        --cm-button-primary-text-padding-top: var(
            --cm-button-primary-l-text-padding-top,
            var(--cm-alias-item-text-padding-top-l)
        );
        --cm-button-primary-icon-gap: var(
            --cm-button-primary-l-icon-gap,
            var(--cm-alias-item-workflow-icon-gap-l)
        );
        --cm-button-primary-height: var(
            --cm-button-primary-l-height,
            var(--cm-alias-item-height-l)
        );
        --cm-button-primary-padding-left: var(
            --cm-button-primary-l-padding-left,
            var(--cm-alias-item-rounded-workflow-padding-left-l)
        );
        --cm-button-primary-border-radius: var(
            --cm-button-primary-l-border-radius,
            var(--cm-alias-item-rounded-border-radius-l)
        );
        --cm-button-primary-min-width: var(
            --cm-button-primary-l-min-width,
            var(--cm-global-dimension-size-1125)
        );
        --cm-button-primary-textonly-padding-left: var(
            --cm-button-primary-l-textonly-padding-left,
            var(--cm-alias-item-rounded-padding-l)
        );
        --cm-button-primary-textonly-padding-right: var(
            --cm-button-primary-l-textonly-padding-right,
            var(--cm-alias-item-rounded-padding-l)
        );
    }

    :host([size='xl']) {
        --cm-button-primary-focus-ring-size-key-focus: var(
            --cm-button-primary-xl-focus-ring-size-key-focus,
            var(--cm-alias-focus-ring-size)
        );
        --cm-button-primary-text-font-weight: var(
            --cm-button-primary-xl-text-font-weight,
            var(--cm-global-font-weight-regular)
        );
        --cm-button-primary-text-line-height: var(
            --cm-button-primary-xl-text-line-height,
            var(--cm-alias-component-text-line-height)
        );
        --cm-button-primary-border-size: var(
            --cm-button-primary-xl-border-size,
            var(--cm-alias-border-size-thin)
        );
        --cm-button-primary-icon-gap: var(
            --cm-button-primary-xl-icon-gap,
            var(--cm-alias-item-workflow-icon-gap-l)
        );
        --cm-button-primary-text-size: var(
            --cm-button-primary-xl-text-size,
            var(--cm-alias-item-text-size-xl)
        );
        --cm-button-primary-text-padding-top: var(
            --cm-button-primary-xl-text-padding-top,
            var(--cm-alias-item-text-padding-top-xl)
        );
        --cm-button-primary-height: var(
            --cm-button-primary-xl-height,
            var(--cm-alias-item-height-xl)
        );
        --cm-button-primary-padding-left: var(
            --cm-button-primary-xl-padding-left,
            var(--cm-alias-item-rounded-workflow-padding-left-xl)
        );
        --cm-button-primary-border-radius: var(
            --cm-button-primary-xl-border-radius,
            var(--cm-alias-item-rounded-border-radius-xl)
        );
        --cm-button-primary-min-width: var(
            --cm-button-primary-xl-min-width,
            var(--cm-global-dimension-size-1250)
        );
        --cm-button-primary-textonly-padding-left: var(
            --cm-button-primary-xl-textonly-padding-left,
            var(--cm-alias-item-rounded-padding-xl)
        );
        --cm-button-primary-textonly-padding-right: var(
            --cm-button-primary-xl-textonly-padding-right,
            var(--cm-alias-item-rounded-padding-xl)
        );
    }

    :host {
        --cm-button-primary-padding-left-adjusted: calc(
            var(--cm-button-primary-padding-left) -
                var(--cm-button-primary-border-size)
        );
        --cm-button-primary-textonly-padding-left-adjusted: calc(
            var(--cm-button-primary-textonly-padding-left) -
                var(--cm-button-primary-border-size)
        );
        --cm-button-primary-textonly-padding-right-adjusted: calc(
            var(--cm-button-primary-textonly-padding-right) -
                var(--cm-button-primary-border-size)
        );
        --cm-button-padding-y: calc(
            var(--cm-button-primary-text-padding-top) - 1px
        );
    }

    :host([dir='ltr']) {
        --i2c-button-size: 2.3125rem;
        padding: 0
            calc(var(--i2c-button-size) / 3 + var(--i2c-border-radius) / 2);
    }

    :host([dir='rtl']) {
        --i2c-button-size: 2.3125rem;
        padding: 0
            calc(var(--i2c-button-size) / 3 + var(--i2c-border-radius) / 2);
    }

    :host([size='m'][dir='ltr']),
    :host([size='m'][dir='rtl']) {
        min-width: calc(var(--i2c-button-size) * 2.5);
    }

    :host([size='l'][dir='ltr']),
    :host([size='l'][dir='rtl']) {
        min-width: calc(var(--i2c-button-size) * 3);
    }

    :host([size='xl'][dir='ltr']),
    :host([size='xl'][dir='rtl']) {
        min-width: calc(var(--i2c-button-size) * 3.5);
    }

    :host {
        border-width: var(--cm-button-primary-border-size);
        border-style: solid;
        border-radius: var(--cm-button-primary-border-radius);
        min-height: var(--cm-button-primary-height);
        height: auto;
        min-width: var(--cm-button-primary-min-width);

        font-size: var(--cm-button-primary-text-size);
        font-weight: var(--cm-button-primary-text-font-weight);
    }

    :host(:hover),
    :host([active]) {
        box-shadow: none;
    }

    :host([dir='ltr']) ::slotted([slot='icon']) {
        margin-left: calc(
            -1 * (var(--cm-button-primary-textonly-padding-left-adjusted) -
                        var(--cm-button-primary-padding-left-adjusted))
        );
    }

    :host([dir='rtl']) ::slotted([slot='icon']) {
        margin-right: calc(
            -1 * (var(--cm-button-primary-textonly-padding-left-adjusted) -
                        var(--cm-button-primary-padding-left-adjusted))
        );
    }

    :host([dir='ltr']) slot[name='icon'] + #label {
        padding-left: var(--i2c-space-xs);
    }

    :host([dir='rtl']) slot[name='icon'] + #label {
        padding-right: var(--i2c-space-xs);
    }

    :host([dir='ltr']) slot[name='icon'] + #label {
        padding-right: 0;
    }

    :host([dir='rtl']) slot[name='icon'] + #label {
        padding-left: 0;
    }

    #label {
        line-height: var(--cm-button-primary-text-line-height);
    }

    :host(.focus-visible):after,
    :host(.focus-visible):after,
    :host([focused]):after {
        box-shadow: 0 0 0 var(--cm-button-primary-focus-ring-size-key-focus)
            var(
                --cm-button-primary-m-focus-ring-color-key-focus,
                var(--cm-alias-focus-ring-color)
            );
    }

    :host(.focus-visible):after,
    :host(:focus-visible):after,
    :host([focused]):after {
        box-shadow: 0 0 0 var(--cm-button-primary-focus-ring-size-key-focus)
            var(
                --cm-button-primary-m-focus-ring-color-key-focus,
                var(--cm-alias-focus-ring-color)
            );
    }

    :host([variant='cta']) {
        background-color: var(
            --cm-button-cta-m-background-color,
            var(--cm-semantic-cta-color-background-default)
        );
        border-color: var(
            --cm-button-cta-m-border-color,
            var(--cm-semantic-cta-color-background-default)
        );
        color: var(
            --cm-button-cta-m-text-color,
            var(--cm-global-color-static-white)
        );
    }

    :host([variant='cta']:hover) {
        background-color: var(
            --cm-button-cta-m-background-color-hover,
            var(--cm-semantic-cta-color-background-hover)
        );
        border-color: var(
            --cm-button-cta-m-border-color-hover,
            var(--cm-semantic-cta-color-background-hover)
        );
        color: var(
            --cm-button-cta-m-text-color-hover,
            var(--cm-global-color-static-white)
        );
    }

    :host([variant='cta'].focus-visible),
    :host([variant='cta'].focus-visible) {
        background-color: var(
            --cm-button-cta-m-background-color-key-focus,
            var(--cm-semantic-cta-color-background-hover)
        );
        border-color: var(
            --cm-button-cta-m-border-color-key-focus,
            var(--cm-semantic-cta-color-background-hover)
        );
        color: var(
            --cm-button-cta-m-text-color-key-focus,
            var(--cm-global-color-static-white)
        );
    }

    :host([variant='cta'].focus-visible),
    :host([variant='cta']:focus-visible) {
        background-color: var(
            --cm-button-cta-m-background-color-key-focus,
            var(--cm-semantic-cta-color-background-hover)
        );
        border-color: var(
            --cm-button-cta-m-border-color-key-focus,
            var(--cm-semantic-cta-color-background-hover)
        );
        color: var(
            --cm-button-cta-m-text-color-key-focus,
            var(--cm-global-color-static-white)
        );
    }

    :host([variant='cta'][active]) {
        background-color: var(
            --cm-button-cta-m-background-color-down,
            var(--cm-semantic-cta-color-background-down)
        );
        border-color: var(
            --cm-button-cta-m-border-color-down,
            var(--cm-semantic-cta-color-background-down)
        );
        color: var(
            --cm-button-cta-m-text-color-down,
            var(--cm-global-color-static-white)
        );
    }

    :host([variant='cta']:disabled),
    :host([variant='cta'][disabled]) {
        background-color: var(
            --cm-button-cta-m-background-color-disabled,
            var(--cm-global-color-gray-200)
        );
        border-color: var(
            --cm-button-cta-m-border-color-disabled,
            var(--cm-global-color-gray-200)
        );
        color: var(
            --cm-button-cta-m-text-color-disabled,
            var(--cm-global-color-gray-500)
        );
    }

    :host([variant='primary']) {
        background-color: var(
            --cm-button-primary-m-background-color,
            var(--cm-alias-background-color-transparent)
        );
        border-color: var(
            --cm-button-primary-m-border-color,
            var(--cm-global-color-gray-800)
        );
        color: var(
            --cm-button-primary-m-text-color,
            var(--cm-global-color-gray-800)
        );
    }

    :host([variant='primary']:hover) {
        background-color: var(
            --cm-button-primary-m-background-color-hover,
            var(--cm-global-color-gray-800)
        );
        border-color: var(
            --cm-button-primary-m-border-color-hover,
            var(--cm-global-color-gray-800)
        );
        color: var(
            --cm-button-primary-m-text-color-hover,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='primary'].focus-visible),
    :host([variant='primary'].focus-visible) {
        background-color: var(
            --cm-button-primary-m-background-color-key-focus,
            var(--cm-global-color-gray-800)
        );
        border-color: var(
            --cm-button-primary-m-border-color-key-focus,
            var(--cm-global-color-gray-800)
        );
        color: var(
            --cm-button-primary-m-text-color-key-focus,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='primary'].focus-visible),
    :host([variant='primary']:focus-visible) {
        background-color: var(
            --cm-button-primary-m-background-color-key-focus,
            var(--cm-global-color-gray-800)
        );
        border-color: var(
            --cm-button-primary-m-border-color-key-focus,
            var(--cm-global-color-gray-800)
        );
        color: var(
            --cm-button-primary-m-text-color-key-focus,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='primary'][active]) {
        background-color: var(
            --cm-button-primary-m-background-color-down,
            var(--cm-global-color-gray-900)
        );
        border-color: var(
            --cm-button-primary-m-border-color-down,
            var(--cm-global-color-gray-900)
        );
        color: var(
            --cm-button-primary-m-text-color-down,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='primary']:disabled),
    :host([variant='primary'][disabled]) {
        background-color: var(
            --cm-button-primary-m-background-color-disabled,
            var(--cm-global-color-gray-200)
        );
        border-color: var(
            --cm-button-primary-m-border-color-disabled,
            var(--cm-global-color-gray-200)
        );
        color: var(
            --cm-button-primary-m-text-color-disabled,
            var(--cm-global-color-gray-500)
        );
    }

    :host([variant='secondary']) {
        background-color: var(
            --cm-button-secondary-m-background-color,
            var(--cm-alias-background-color-transparent)
        );
        border-color: var(
            --cm-button-secondary-m-border-color,
            var(--cm-global-color-gray-700)
        );
        color: var(
            --cm-button-secondary-m-text-color,
            var(--cm-global-color-gray-700)
        );
    }

    :host([variant='secondary']:hover) {
        background-color: var(
            --cm-button-secondary-m-background-color-hover,
            var(--cm-global-color-gray-700)
        );
        border-color: var(
            --cm-button-secondary-m-border-color-hover,
            var(--cm-global-color-gray-700)
        );
        color: var(
            --cm-button-secondary-m-text-color-hover,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='secondary'].focus-visible),
    :host([variant='secondary'].focus-visible) {
        background-color: var(
            --cm-button-secondary-m-background-color-key-focus,
            var(--cm-global-color-gray-700)
        );
        border-color: var(
            --cm-button-secondary-m-border-color-key-focus,
            var(--cm-global-color-gray-700)
        );
        color: var(
            --cm-button-secondary-m-text-color-key-focus,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='secondary'].focus-visible),
    :host([variant='secondary']:focus-visible) {
        background-color: var(
            --cm-button-secondary-m-background-color-key-focus,
            var(--cm-global-color-gray-700)
        );
        border-color: var(
            --cm-button-secondary-m-border-color-key-focus,
            var(--cm-global-color-gray-700)
        );
        color: var(
            --cm-button-secondary-m-text-color-key-focus,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='secondary'][active]) {
        background-color: var(
            --cm-button-secondary-m-background-color-down,
            var(--cm-global-color-gray-800)
        );
        border-color: var(
            --cm-button-secondary-m-border-color-down,
            var(--cm-global-color-gray-800)
        );
        color: var(
            --cm-button-secondary-m-text-color-down,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='secondary']:disabled),
    :host([variant='secondary'][disabled]) {
        background-color: var(
            --cm-button-secondary-m-background-color-disabled,
            var(--cm-global-color-gray-200)
        );
        border-color: var(
            --cm-button-secondary-m-border-color-disabled,
            var(--cm-global-color-gray-200)
        );
        color: var(
            --cm-button-secondary-m-text-color-disabled,
            var(--cm-global-color-gray-500)
        );
    }

    :host([variant='highlight']) {
        background-color: var(
            --cm-button-warning-m-background-color,
            var(--cm-alias-background-color-transparent)
        );
        border-color: var(
            --cm-button-warning-m-border-color,
            var(--cm-semantic-notice-color-text-small)
        );
        color: var(
            --cm-button-warning-m-text-color,
            var(--cm-semantic-notice-color-text-small)
        );
    }

    :host([variant='highlight']:hover) {
        background-color: var(
            --cm-button-warning-m-background-color-hover,
            var(--cm-semantic-notice-color-text-small)
        );
        border-color: var(
            --cm-button-warning-m-border-color-hover,
            var(--cm-semantic-notice-color-text-small)
        );
        color: var(
            --cm-button-warning-m-text-color-hover,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='highlight'].focus-visible),
    :host([variant='highlight'].focus-visible) {
        background-color: var(
            --cm-button-warning-m-background-color-hover,
            var(--cm-semantic-notice-color-text-small)
        );
        border-color: var(
            --cm-button-warning-m-border-color-hover,
            var(--cm-semantic-notice-color-text-small)
        );
        color: var(
            --cm-button-warning-m-text-color-hover,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='highlight'].focus-visible),
    :host([variant='highlight']:focus-visible) {
        background-color: var(
            --cm-button-warning-m-background-color-hover,
            var(--cm-semantic-notice-color-text-small)
        );
        border-color: var(
            --cm-button-warning-m-border-color-hover,
            var(--cm-semantic-notice-color-text-small)
        );
        color: var(
            --cm-button-warning-m-text-color-hover,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='highlight'][active]) {
        background-color: var(
            --cm-button-warning-m-background-color-down,
            var(--cm-global-color-orange-700)
        );
        border-color: var(
            --cm-button-warning-m-border-color-down,
            var(--cm-global-color-orange-700)
        );
        color: var(
            --cm-button-warning-m-text-color-down,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='highlight']:disabled),
    :host([variant='highlight'][disabled]) {
        background-color: var(
            --cm-button-warning-m-background-color-disabled,
            var(--cm-global-color-gray-200)
        );
        border-color: var(
            --cm-button-warning-m-border-color-disabled,
            var(--cm-global-color-gray-200)
        );
        color: var(
            --cm-button-warning-m-text-color-disabled,
            var(--cm-global-color-gray-500)
        );
    }

    :host([variant='positive']) {
        background-color: var(
            --cm-button-positive-m-background-color,
            var(--cm-alias-background-color-transparent)
        );
        border-color: var(
            --cm-button-positive-m-border-color,
            var(--cm-semantic-positive-color-text-small)
        );
        color: var(
            --cm-button-positive-m-text-color,
            var(--cm-semantic-positive-color-text-small)
        );
    }

    :host([variant='positive']:hover) {
        background-color: var(
            --cm-button-positive-m-background-color-hover,
            var(--cm-semantic-positive-color-text-small)
        );
        border-color: var(
            --cm-button-positive-m-border-color-hover,
            var(--cm-semantic-positive-color-text-small)
        );
        color: var(
            --cm-button-positive-m-text-color-hover,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='positive'].focus-visible),
    :host([variant='positive'].focus-visible) {
        background-color: var(
            --cm-button-positive-m-background-color-hover,
            var(--cm-semantic-positive-color-text-small)
        );
        border-color: var(
            --cm-button-positive-m-border-color-hover,
            var(--cm-semantic-positive-color-text-small)
        );
        color: var(
            --cm-button-positive-m-text-color-hover,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='positive'].focus-visible),
    :host([variant='positive']:focus-visible) {
        background-color: var(
            --cm-button-positive-m-background-color-hover,
            var(--cm-semantic-positive-color-text-small)
        );
        border-color: var(
            --cm-button-positive-m-border-color-hover,
            var(--cm-semantic-positive-color-text-small)
        );
        color: var(
            --cm-button-positive-m-text-color-hover,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='positive'][active]) {
        background-color: var(
            --cm-button-positive-m-background-color-down,
            var(--cm-global-color-green-700)
        );
        border-color: var(
            --cm-button-positive-m-border-color-down,
            var(--cm-global-color-green-700)
        );
        color: var(
            --cm-button-positive-m-text-color-down,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='positive']:disabled),
    :host([variant='positive'][disabled]) {
        background-color: var(
            --cm-button-positive-m-background-color-disabled,
            var(--cm-global-color-gray-200)
        );
        border-color: var(
            --cm-button-positive-m-border-color-disabled,
            var(--cm-global-color-gray-200)
        );
        color: var(
            --cm-button-positive-m-text-color-disabled,
            var(--cm-global-color-gray-500)
        );
    }

    :host([variant='negative']) {
        background-color: var(
            --cm-button-warning-m-background-color,
            var(--cm-alias-background-color-transparent)
        );
        border-color: var(
            --cm-button-warning-m-border-color,
            var(--cm-semantic-negative-color-text-small)
        );
        color: var(
            --cm-button-warning-m-text-color,
            var(--cm-semantic-negative-color-text-small)
        );
    }

    :host([variant='negative']:hover) {
        background-color: var(
            --cm-button-warning-m-background-color-hover,
            var(--cm-semantic-negative-color-text-small)
        );
        border-color: var(
            --cm-button-warning-m-border-color-hover,
            var(--cm-semantic-negative-color-text-small)
        );
        color: var(
            --cm-button-warning-m-text-color-hover,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='negative'].focus-visible),
    :host([variant='negative'].focus-visible) {
        background-color: var(
            --cm-button-warning-m-background-color-key-focus,
            var(--cm-semantic-negative-color-text-small)
        );
        border-color: var(
            --cm-button-warning-m-border-color-key-focus,
            var(--cm-semantic-negative-color-text-small)
        );
        color: var(
            --cm-button-warning-m-text-color-key-focus,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='negative'].focus-visible),
    :host([variant='negative']:focus-visible) {
        background-color: var(
            --cm-button-warning-m-background-color-key-focus,
            var(--cm-semantic-negative-color-text-small)
        );
        border-color: var(
            --cm-button-warning-m-border-color-key-focus,
            var(--cm-semantic-negative-color-text-small)
        );
        color: var(
            --cm-button-warning-m-text-color-key-focus,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='negative'][active]) {
        background-color: var(
            --cm-button-warning-m-background-color-down,
            var(--cm-global-color-red-700)
        );
        border-color: var(
            --cm-button-warning-m-border-color-down,
            var(--cm-global-color-red-700)
        );
        color: var(
            --cm-button-warning-m-text-color-down,
            var(--cm-global-color-gray-50)
        );
    }

    :host([variant='negative']:disabled),
    :host([variant='negative'][disabled]) {
        background-color: var(
            --cm-button-warning-m-background-color-disabled,
            var(--cm-global-color-gray-200)
        );
        border-color: var(
            --cm-button-warning-m-border-color-disabled,
            var(--cm-global-color-gray-200)
        );
        color: var(
            --cm-button-warning-m-text-color-disabled,
            var(--cm-global-color-gray-500)
        );
    }

    :host([variant='overBackground']) {
        background-color: var(
            --cm-button-over-background-m-background-color,
            var(--cm-alias-background-color-transparent)
        );
        border-color: var(
            --cm-button-over-background-m-border-color,
            var(--cm-global-color-static-white)
        );
        color: var(
            --cm-button-over-background-m-text-color,
            var(--cm-global-color-static-white)
        );
    }

    :host([variant='overBackground'].focus-visible),
    :host([variant='overBackground'].focus-visible),
    :host([variant='overBackground']:hover) {
        background-color: var(
            --cm-button-over-background-m-background-color-hover,
            var(--cm-global-color-static-white)
        );
        border-color: var(
            --cm-button-over-background-m-border-color-hover,
            var(--cm-global-color-static-white)
        );
        color: inherit;
    }

    :host([variant='overBackground'].focus-visible),
    :host([variant='overBackground']:focus-visible),
    :host([variant='overBackground']:hover) {
        background-color: var(
            --cm-button-over-background-m-background-color-hover,
            var(--cm-global-color-static-white)
        );
        border-color: var(
            --cm-button-over-background-m-border-color-hover,
            var(--cm-global-color-static-white)
        );
        color: inherit;
    }

    :host([variant='overBackground'].focus-visible):after,
    :host([variant='overBackground'].focus-visible):after {
        box-shadow: 0 0 0
            var(
                --cm-alias-focus-ring-size,
                var(--cm-global-dimension-static-size-25)
            )
            var(
                --cm-button-over-background-m-border-color-key-focus,
                var(--cm-global-color-static-white)
            );
    }

    :host([variant='overBackground'].focus-visible):after,
    :host([variant='overBackground']:focus-visible):after {
        box-shadow: 0 0 0
            var(
                --cm-alias-focus-ring-size,
                var(--cm-global-dimension-static-size-25)
            )
            var(
                --cm-button-over-background-m-border-color-key-focus,
                var(--cm-global-color-static-white)
            );
    }

    :host([variant='overBackground'][active]) {
        background-color: var(
            --cm-button-over-background-m-background-color-down,
            var(--cm-global-color-static-white)
        );
        border-color: var(
            --cm-button-over-background-m-border-color-down,
            var(--cm-global-color-static-white)
        );
        color: inherit;
    }

    :host([variant='overBackground']:disabled),
    :host([variant='overBackground'][disabled]) {
        background-color: var(
            --cm-button-over-background-m-background-color-disabled,
            hsla(0, 0%, 100%, 0.1)
        );
        border-color: var(
            --cm-button-over-background-m-border-color-disabled,
            var(--cm-alias-border-color-transparent)
        );
        color: var(
            --cm-button-over-background-m-text-color-disabled,
            hsla(0, 0%, 100%, 0.35)
        );
    }

    :host([variant='overBackground'][quiet]) {
        background-color: var(
            --cm-button-quiet-over-background-m-background-color,
            var(--cm-alias-background-color-transparent)
        );
        border-color: var(
            --cm-button-quiet-over-background-m-border-color,
            var(--cm-alias-border-color-transparent)
        );
        color: var(
            --cm-button-quiet-over-background-m-text-color,
            var(--cm-global-color-static-white)
        );
    }

    :host([variant='overBackground'][quiet].focus-visible),
    :host([variant='overBackground'][quiet].focus-visible),
    :host([variant='overBackground'][quiet]:hover) {
        background-color: var(
            --cm-button-quiet-over-background-m-background-color-hover,
            hsla(0, 0%, 100%, 0.1)
        );
        border-color: var(
            --cm-button-quiet-over-background-m-border-color-hover,
            var(--cm-alias-border-color-transparent)
        );
        color: var(
            --cm-button-quiet-over-background-m-text-color-hover,
            var(--cm-global-color-static-white)
        );
    }

    :host([variant='overBackground'][quiet].focus-visible),
    :host([variant='overBackground'][quiet]:focus-visible),
    :host([variant='overBackground'][quiet]:hover) {
        background-color: var(
            --cm-button-quiet-over-background-m-background-color-hover,
            hsla(0, 0%, 100%, 0.1)
        );
        border-color: var(
            --cm-button-quiet-over-background-m-border-color-hover,
            var(--cm-alias-border-color-transparent)
        );
        color: var(
            --cm-button-quiet-over-background-m-text-color-hover,
            var(--cm-global-color-static-white)
        );
    }

    :host([variant='overBackground'][quiet].focus-visible),
    :host([variant='overBackground'][quiet].focus-visible) {
        box-shadow: none;
    }

    :host([variant='overBackground'][quiet].focus-visible),
    :host([variant='overBackground'][quiet]:focus-visible) {
        box-shadow: none;
    }

    :host([variant='overBackground'][quiet].focus-visible):after,
    :host([variant='overBackground'][quiet].focus-visible):after {
        box-shadow: 0 0 0
            var(
                --cm-alias-focus-ring-size,
                var(--cm-global-dimension-static-size-25)
            )
            var(
                --cm-button-over-background-m-border-color-key-focus,
                var(--cm-global-color-static-white)
            );
    }

    :host([variant='overBackground'][quiet].focus-visible):after,
    :host([variant='overBackground'][quiet]:focus-visible):after {
        box-shadow: 0 0 0
            var(
                --cm-alias-focus-ring-size,
                var(--cm-global-dimension-static-size-25)
            )
            var(
                --cm-button-over-background-m-border-color-key-focus,
                var(--cm-global-color-static-white)
            );
    }

    :host([variant='overBackground'][quiet][active]) {
        background-color: var(
            --cm-button-quiet-over-background-m-background-color-down,
            hsla(0, 0%, 100%, 0.2)
        );
        border-color: var(
            --cm-button-quiet-over-background-m-border-color-down,
            var(--cm-alias-border-color-transparent)
        );
        color: var(
            --cm-button-quiet-over-background-m-text-color-down,
            var(--cm-global-color-static-white)
        );
    }

    :host([variant='overBackground'][quiet]:disabled),
    :host([variant='overBackground'][quiet][disabled]) {
        background-color: var(
            --cm-button-quiet-over-background-m-background-color-disabled,
            var(--cm-alias-background-color-transparent)
        );
        border-color: var(
            --cm-button-quiet-over-background-m-border-color-disabled,
            var(--cm-alias-border-color-transparent)
        );
        color: var(
            --cm-button-quiet-over-background-m-text-color-disabled,
            hsla(0, 0%, 100%, 0.15)
        );
    }

    :host([variant='primary'][quiet]) {
        background-color: var(
            --cm-button-quiet-primary-m-background-color,
            var(--cm-alias-background-color-transparent)
        );
        border-color: var(
            --cm-button-quiet-primary-m-border-color,
            var(--cm-alias-border-color-transparent)
        );
        color: var(
            --cm-button-quiet-primary-m-text-color,
            var(--cm-global-color-gray-800)
        );
    }

    :host([variant='primary'][quiet]:hover) {
        background-color: var(
            --cm-button-quiet-primary-m-background-color-hover,
            var(--cm-global-color-gray-200)
        );
        border-color: var(
            --cm-button-quiet-primary-m-border-color-hover,
            var(--cm-global-color-gray-200)
        );
        color: var(
            --cm-button-quiet-primary-m-text-color-hover,
            var(--cm-global-color-gray-900)
        );
    }

    :host([variant='primary'][quiet].focus-visible),
    :host([variant='primary'][quiet].focus-visible) {
        background-color: var(
            --cm-button-quiet-primary-m-background-color-key-focus,
            var(--cm-global-color-gray-200)
        );
        border-color: var(
            --cm-button-quiet-primary-m-border-color-key-focus,
            var(--cm-global-color-gray-200)
        );
        color: var(
            --cm-button-quiet-primary-m-text-color-key-focus,
            var(--cm-global-color-gray-900)
        );
    }

    :host([variant='primary'][quiet].focus-visible),
    :host([variant='primary'][quiet]:focus-visible) {
        background-color: var(
            --cm-button-quiet-primary-m-background-color-key-focus,
            var(--cm-global-color-gray-200)
        );
        border-color: var(
            --cm-button-quiet-primary-m-border-color-key-focus,
            var(--cm-global-color-gray-200)
        );
        color: var(
            --cm-button-quiet-primary-m-text-color-key-focus,
            var(--cm-global-color-gray-900)
        );
    }

    :host([variant='primary'][quiet][active]) {
        background-color: var(
            --cm-button-quiet-primary-m-background-color-down,
            var(--cm-global-color-gray-300)
        );
        border-color: var(
            --cm-button-quiet-primary-m-border-color-down,
            var(--cm-global-color-gray-300)
        );
        color: var(
            --cm-button-quiet-primary-m-text-color-down,
            var(--cm-global-color-gray-900)
        );
    }

    :host([variant='primary'][quiet]:disabled),
    :host([variant='primary'][quiet][disabled]) {
        background-color: var(
            --cm-button-quiet-primary-m-background-color-disabled,
            var(--cm-alias-background-color-transparent)
        );
        border-color: var(
            --cm-button-quiet-primary-m-border-color-disabled,
            var(--cm-alias-border-color-transparent)
        );
        color: var(
            --cm-button-quiet-primary-m-text-color-disabled,
            var(--cm-global-color-gray-500)
        );
    }

    :host([variant='secondary'][quiet]) {
        background-color: var(
            --cm-button-quiet-secondary-m-background-color,
            var(--cm-alias-background-color-transparent)
        );
        border-color: var(
            --cm-button-quiet-secondary-m-border-color,
            var(--cm-alias-border-color-transparent)
        );
        color: var(
            --cm-button-quiet-secondary-m-text-color,
            var(--cm-global-color-gray-700)
        );
    }

    :host([variant='secondary'][quiet]:hover) {
        background-color: var(
            --cm-button-quiet-secondary-m-background-color-hover,
            var(--cm-global-color-gray-200)
        );
        border-color: var(
            --cm-button-quiet-secondary-m-border-color-hover,
            var(--cm-global-color-gray-200)
        );
        color: var(
            --cm-button-quiet-secondary-m-text-color-hover,
            var(--cm-global-color-gray-800)
        );
    }

    :host([variant='secondary'][quiet].focus-visible),
    :host([variant='secondary'][quiet].focus-visible) {
        background-color: var(
            --cm-button-quiet-secondary-m-background-color-key-focus,
            var(--cm-global-color-gray-200)
        );
        border-color: var(
            --cm-button-quiet-secondary-m-border-color-key-focus,
            var(--cm-global-color-gray-200)
        );
        color: var(
            --cm-button-quiet-secondary-m-text-color-key-focus,
            var(--cm-global-color-gray-800)
        );
    }

    :host([variant='secondary'][quiet].focus-visible),
    :host([variant='secondary'][quiet]:focus-visible) {
        background-color: var(
            --cm-button-quiet-secondary-m-background-color-key-focus,
            var(--cm-global-color-gray-200)
        );
        border-color: var(
            --cm-button-quiet-secondary-m-border-color-key-focus,
            var(--cm-global-color-gray-200)
        );
        color: var(
            --cm-button-quiet-secondary-m-text-color-key-focus,
            var(--cm-global-color-gray-800)
        );
    }

    :host([variant='secondary'][quiet][active]) {
        background-color: var(
            --cm-button-quiet-secondary-m-background-color-down,
            var(--cm-global-color-gray-300)
        );
        border-color: var(
            --cm-button-quiet-secondary-m-border-color-down,
            var(--cm-global-color-gray-300)
        );
        color: var(
            --cm-button-quiet-secondary-m-text-color-down,
            var(--cm-global-color-gray-800)
        );
    }

    :host([variant='secondary'][quiet]:disabled),
    :host([variant='secondary'][quiet][disabled]) {
        background-color: var(
            --cm-button-quiet-secondary-m-background-color-disabled,
            var(--cm-alias-background-color-transparent)
        );
        border-color: var(
            --cm-button-quiet-secondary-m-border-color-disabled,
            var(--cm-alias-border-color-transparent)
        );
        color: var(
            --cm-button-quiet-secondary-m-text-color-disabled,
            var(--cm-global-color-gray-500)
        );
    }

    :host([variant='negative'][quiet]) {
        background-color: var(
            --cm-button-quiet-warning-m-background-color,
            var(--cm-global-color-red-50)
        );
        border-color: var(
            --cm-button-quiet-warning-m-border-color,
            var(--cm-global-color-red-100)
        );
        color: var(
            --cm-button-quiet-warning-m-text-color,
            var(--cm-semantic-negative-color-text-small)
        );
    }

    :host([variant='negative'][quiet]:hover) {
        background-color: var(
            --cm-button-quiet-warning-m-background-color-hover,
            var(--cm-global-color-red-A200)
        );
        border-color: var(
            --cm-button-quiet-warning-m-border-color-hover,
            var(--cm-global-color-red-A400)
        );
        color: var(
            --cm-button-quiet-warning-m-text-color-hover,
            var(--cm-global-color-red-700)
        );
    }

    :host([variant='negative'][quiet].focus-visible),
    :host([variant='negative'][quiet].focus-visible) {
        background-color: var(
            --cm-button-quiet-warning-m-background-color-hover,
            var(--cm-global-color-red-A200)
        );
        border-color: var(
            --cm-button-quiet-warning-m-border-color-hover,
            var(--cm-global-color-red-A400)
        );
        color: var(
            --cm-button-quiet-warning-m-text-color-hover,
            var(--cm-global-color-red-700)
        );
    }

    :host([variant='negative'][quiet].focus-visible),
    :host([variant='negative'][quiet]:focus-visible) {
        background-color: var(
            --cm-button-quiet-warning-m-background-color-hover,
            var(--cm-global-color-red-A200)
        );
        border-color: var(
            --cm-button-quiet-warning-m-border-color-hover,
            var(--cm-global-color-red-A400)
        );
        color: var(
            --cm-button-quiet-warning-m-text-color-hover,
            var(--cm-global-color-red-700)
        );
    }

    :host([variant='negative'][quiet][active]) {
        background-color: var(
            --cm-button-quiet-warning-m-background-color-hover,
            var(--cm-global-color-red-100)
        );
        border-color: var(
            --cm-button-quiet-warning-m-border-color-hover,
            var(--cm-global-color-red-A400)
        );
        color: var(
            --cm-button-quiet-warning-m-text-color-hover,
            var(--cm-global-color-red-700)
        );
    }

    :host([variant='negative'][quiet]:disabled),
    :host([variant='negative'][quiet][disabled]) {
        background-color: var(
            --cm-button-warning-m-background-color-disabled,
            var(--cm-global-color-gray-200)
        );
        border-color: var(
            --cm-button-warning-m-border-color-disabled,
            var(--cm-global-color-gray-200)
        );
        color: var(
            --cm-button-warning-m-text-color-disabled,
            var(--cm-global-color-gray-500)
        );
    }

    :host([variant='positive'][quiet]) {
        background-color: var(
            --cm-button-quiet-warning-m-background-color,
            var(--cm-global-color-green-50)
        );
        border-color: var(
            --cm-button-quiet-warning-m-border-color,
            var(--cm-global-color-green-100)
        );
        color: var(
            --cm-button-quiet-warning-m-text-color,
            var(--cm-semantic-positive-color-text-small)
        );
    }

    :host([variant='positive'][quiet]:hover) {
        background-color: var(
            --cm-button-quiet-warning-m-background-color-hover,
            var(--cm-global-color-green-A100)
        );
        border-color: var(
            --cm-button-quiet-warning-m-border-color-hover,
            var(--cm-global-color-green-A400)
        );
        color: var(
            --cm-button-quiet-warning-m-text-color-hover,
            var(--cm-global-color-green-700)
        );
    }

    :host([variant='positive'][quiet].focus-visible),
    :host([variant='positive'][quiet].focus-visible) {
        background-color: var(
            --cm-button-quiet-warning-m-background-color-hover,
            var(--cm-global-color-green-A100)
        );
        border-color: var(
            --cm-button-quiet-warning-m-border-color-hover,
            var(--cm-global-color-green-A400)
        );
        color: var(
            --cm-button-quiet-warning-m-text-color-hover,
            var(--cm-global-color-green-700)
        );
    }

    :host([variant='positive'][quiet].focus-visible),
    :host([variant='positive'][quiet]:focus-visible) {
        background-color: var(
            --cm-button-quiet-warning-m-background-color-hover,
            var(--cm-global-color-green-A100)
        );
        border-color: var(
            --cm-button-quiet-warning-m-border-color-hover,
            var(--cm-global-color-green-A400)
        );
        color: var(
            --cm-button-quiet-warning-m-text-color-hover,
            var(--cm-global-color-green-700)
        );
    }

    :host([variant='positive'][quiet][active]) {
        background-color: var(
            --cm-button-quiet-warning-m-background-color-hover,
            var(--cm-global-color-green-100)
        );
        border-color: var(
            --cm-button-quiet-warning-m-border-color-hover,
            var(--cm-global-color-green-A400)
        );
        color: var(
            --cm-button-quiet-warning-m-text-color-hover,
            var(--cm-global-color-green-700)
        );
    }

    :host([variant='positive'][quiet]:disabled),
    :host([variant='positive'][quiet][disabled]) {
        background-color: var(
            --cm-button-warning-m-background-color-disabled,
            var(--cm-global-color-gray-200)
        );
        border-color: var(
            --cm-button-warning-m-border-color-disabled,
            var(--cm-global-color-gray-200)
        );
        color: var(
            --cm-button-warning-m-text-color-disabled,
            var(--cm-global-color-gray-500)
        );
    }

    @media (forced-colors: active) {
        :host {
            --cm-button-cta-m-background-color: ButtonText;
            --cm-button-cta-m-background-color-disabled: ButtonFace;
            --cm-button-cta-m-background-color-down: Highlight;
            --cm-button-cta-m-background-color-hover: Highlight;
            --cm-button-cta-m-background-color-key-focus: Highlight;
            --cm-button-cta-m-border-color-disabled: GrayText;
            --cm-button-cta-m-border-color-down: Highlight;
            --cm-button-cta-m-border-color-hover: Highlight;
            --cm-button-cta-m-border-color-key-focus: Highlight;
            --cm-button-cta-m-border-color: ButtonText;
            --cm-button-cta-m-text-color-disabled: GrayText;
            --cm-button-cta-m-text-color-down: ButtonFace;
            --cm-button-cta-m-text-color-hover: ButtonFace;
            --cm-button-cta-m-text-color-key-focus: ButtonFace;
            --cm-button-cta-m-text-color: ButtonFace;
            --cm-button-over-background-m-background-color: ButtonFace;
            --cm-button-over-background-m-background-color-disabled: ButtonFace;
            --cm-button-over-background-m-background-color-down: ButtonFace;
            --cm-button-over-background-m-background-color-hover: ButtonFace;
            --cm-button-over-background-m-border-color-disabled: GrayText;
            --cm-button-over-background-m-border-color-down: Highlight;
            --cm-button-over-background-m-border-color-hover: Highlight;
            --cm-button-over-background-m-border-color-key-focus: ButtonText;
            --cm-button-over-background-m-border-color: ButtonText;
            --cm-button-over-background-m-text-color-disabled: GrayText;
            --cm-button-over-background-m-text-color: ButtonText;
            --cm-button-quiet-over-background-m-background-color-disabled: ButtonFace;
            --cm-button-quiet-over-background-m-background-color-down: ButtonFace;
            --cm-button-quiet-over-background-m-background-color-hover: ButtonFace;
            --cm-button-quiet-over-background-m-border-color-disabled: ButtonFace;
            --cm-button-quiet-over-background-m-border-color-down: Highlight;
            --cm-button-quiet-over-background-m-border-color-hover: Highlight;
            --cm-button-quiet-over-background-m-border-color: ButtonFace;
            --cm-button-quiet-over-background-m-text-color-disabled: GrayText;
            --cm-button-quiet-over-background-m-text-color-down: ButtonText;
            --cm-button-quiet-over-background-m-text-color-hover: ButtonText;
            --cm-button-quiet-over-background-m-text-color: ButtonText;
            --cm-button-primary-m-background-color: ButtonFace;
            --cm-button-primary-m-background-color-disabled: ButtonFace;
            --cm-button-primary-m-background-color-down: ButtonFace;
            --cm-button-primary-m-background-color-hover: ButtonFace;
            --cm-button-primary-m-background-color-key-focus: ButtonFace;
            --cm-button-primary-m-border-color-disabled: GrayText;
            --cm-button-primary-m-border-color-down: Highlight;
            --cm-button-primary-m-border-color-hover: Highlight;
            --cm-button-primary-m-border-color-key-focus: Highlight;
            --cm-button-primary-m-border-color: ButtonText;
            --cm-button-primary-m-text-color-disabled: GrayText;
            --cm-button-primary-m-text-color-down: ButtonText;
            --cm-button-primary-m-text-color-hover: ButtonText;
            --cm-button-primary-m-text-color-key-focus: ButtonText;
            --cm-button-primary-m-text-color: ButtonText;
            --cm-button-quiet-primary-m-background-color-disabled: ButtonFace;
            --cm-button-quiet-primary-m-background-color-down: ButtonFace;
            --cm-button-quiet-primary-m-background-color-hover: ButtonFace;
            --cm-button-quiet-primary-m-background-color-key-focus: ButtonFace;
            --cm-button-quiet-primary-m-border-color-disabled: ButtonFace;
            --cm-button-quiet-primary-m-border-color-down: Highlight;
            --cm-button-quiet-primary-m-border-color-hover: Highlight;
            --cm-button-quiet-primary-m-border-color-key-focus: Highlight;
            --cm-button-quiet-primary-m-border-color: ButtonFace;
            --cm-button-quiet-primary-m-text-color-disabled: GrayText;
            --cm-button-quiet-primary-m-text-color-down: ButtonText;
            --cm-button-quiet-primary-m-text-color-hover: ButtonText;
            --cm-button-quiet-primary-m-text-color-key-focus: ButtonText;
            --cm-button-quiet-primary-m-text-color: ButtonText;
            --cm-button-secondary-m-background-color: ButtonFace;
            --cm-button-secondary-m-background-color-down: ButtonFace;
            --cm-button-secondary-m-background-color-hover: ButtonFace;
            --cm-button-secondary-m-background-color-key-focus: ButtonFace;
            --cm-button-secondary-m-border-color-disabled: GrayText;
            --cm-button-secondary-m-border-color-down: Highlight;
            --cm-button-secondary-m-border-color-hover: Highlight;
            --cm-button-secondary-m-border-color-key-focus: Highlight;
            --cm-button-secondary-m-border-color: ButtonText;
            --cm-button-secondary-m-text-color-disabled: GrayText;
            --cm-button-secondary-m-text-color-down: ButtonText;
            --cm-button-secondary-m-text-color-hover: ButtonText;
            --cm-button-secondary-m-text-color-key-focus: ButtonText;
            --cm-button-secondary-m-text-color: ButtonText;
            --cm-button-quiet-secondary-m-background-color-disabled: ButtonFace;
            --cm-button-quiet-secondary-m-background-color-down: ButtonFace;
            --cm-button-quiet-secondary-m-background-color-hover: ButtonFace;
            --cm-button-quiet-secondary-m-background-color-key-focus: ButtonFace;
            --cm-button-quiet-secondary-m-border-color-disabled: ButtonFace;
            --cm-button-quiet-secondary-m-border-color-down: Highlight;
            --cm-button-quiet-secondary-m-border-color-hover: Highlight;
            --cm-button-quiet-secondary-m-border-color-key-focus: Highlight;
            --cm-button-quiet-secondary-m-border-color: ButtonFace;
            --cm-button-quiet-secondary-m-text-color-disabled: GrayText;
            --cm-button-quiet-secondary-m-text-color-down: ButtonText;
            --cm-button-quiet-secondary-m-text-color-hover: ButtonText;
            --cm-button-quiet-secondary-m-text-color-key-focus: ButtonText;
            --cm-button-quiet-secondary-m-text-color: ButtonText;
            --cm-button-warning-m-background-color: ButtonFace;
            --cm-button-warning-m-background-color-down: ButtonFace;
            --cm-button-warning-m-background-color-hover: ButtonFace;
            --cm-button-warning-m-background-color-key-focus: ButtonFace;
            --cm-button-warning-m-border-color-disabled: GrayText;
            --cm-button-warning-m-border-color-down: Highlight;
            --cm-button-warning-m-border-color-hover: Highlight;
            --cm-button-warning-m-border-color-key-focus: Highlight;
            --cm-button-warning-m-border-color: ButtonText;
            --cm-button-warning-m-text-color-disabled: GrayText;
            --cm-button-warning-m-text-color-down: ButtonText;
            --cm-button-warning-m-text-color-hover: ButtonText;
            --cm-button-warning-m-text-color-key-focus: ButtonText;
            --cm-button-warning-m-text-color: ButtonText;
            --cm-button-quiet-warning-m-background-color-disabled: ButtonFace;
            --cm-button-quiet-warning-m-background-color-down: ButtonFace;
            --cm-button-quiet-warning-m-background-color-hover: ButtonFace;
            --cm-button-quiet-warning-m-background-color-key-focus: ButtonFace;
            --cm-button-quiet-warning-m-border-color-disabled: ButtonFace;
            --cm-button-quiet-warning-m-border-color-down: Highlight;
            --cm-button-quiet-warning-m-border-color-hover: Highlight;
            --cm-button-quiet-warning-m-border-color-key-focus: Highlight;
            --cm-button-quiet-warning-m-border-color: ButtonFace;
            --cm-button-quiet-warning-m-text-color-disabled: GrayText;
            --cm-button-quiet-warning-m-text-color-down: ButtonText;
            --cm-button-quiet-warning-m-text-color-hover: ButtonText;
            --cm-button-quiet-warning-m-text-color-key-focus: ButtonText;
            --cm-button-quiet-warning-m-text-color: ButtonText;
            --cm-button-secondary-m-background-color-disabled: ButtonFace;
            --cm-button-warning-m-background-color-disabled: ButtonFace;
            --cm-button-primary-m-focus-ring-color-key-focus: ButtonText;
            --cm-button-positive-m-background-color: ButtonFace;
            --cm-button-positive-m-background-color-down: ButtonFace;
            --cm-button-positive-m-background-color-hover: ButtonFace;
            --cm-button-positive-m-background-color-key-focus: ButtonFace;
            --cm-button-positive-m-border-color-disabled: GrayText;
            --cm-button-positive-m-border-color-down: Highlight;
            --cm-button-positive-m-border-color-hover: Highlight;
            --cm-button-positive-m-border-color-key-focus: Highlight;
            --cm-button-positive-m-border-color: ButtonText;
            --cm-button-positive-m-text-color-disabled: GrayText;
            --cm-button-positive-m-text-color-down: ButtonText;
            --cm-button-positive-m-text-color-hover: ButtonText;
            --cm-button-positive-m-text-color-key-focus: ButtonText;
            --cm-button-positive-m-text-color: ButtonText;
            forced-color-adjust: none;
        }
    }

    :host([size='s']) {
        --cm-icon-tshirt-size-height: var(--cm-alias-workflow-icon-size-s);
        --cm-icon-tshirt-size-width: var(--cm-alias-workflow-icon-size-s);
        --cm-ui-icon-tshirt-size-height: var(
            --cm-alias-ui-icon-cornertriangle-size-75
        );
        --cm-ui-icon-tshirt-size-width: var(
            --cm-alias-ui-icon-cornertriangle-size-75
        );
    }

    :host([size='m']) {
        --cm-icon-tshirt-size-height: var(--cm-alias-workflow-icon-size-m);
        --cm-icon-tshirt-size-width: var(--cm-alias-workflow-icon-size-m);
        --cm-ui-icon-tshirt-size-height: var(
            --cm-alias-ui-icon-cornertriangle-size-100
        );
        --cm-ui-icon-tshirt-size-width: var(
            --cm-alias-ui-icon-cornertriangle-size-100
        );
    }

    :host([size='l']) {
        --cm-icon-tshirt-size-height: var(--cm-alias-workflow-icon-size-l);
        --cm-icon-tshirt-size-width: var(--cm-alias-workflow-icon-size-l);
        --cm-ui-icon-tshirt-size-height: var(
            --cm-alias-ui-icon-cornertriangle-size-200
        );
        --cm-ui-icon-tshirt-size-width: var(
            --cm-alias-ui-icon-cornertriangle-size-200
        );
    }

    :host([size='xl']) {
        --cm-icon-tshirt-size-height: var(--cm-alias-workflow-icon-size-xl);
        --cm-icon-tshirt-size-width: var(--cm-alias-workflow-icon-size-xl);
        --cm-ui-icon-tshirt-size-height: var(
            --cm-alias-ui-icon-cornertriangle-size-300
        );
        --cm-ui-icon-tshirt-size-width: var(
            --cm-alias-ui-icon-cornertriangle-size-300
        );
    }
`;
export default styles;
