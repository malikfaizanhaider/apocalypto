/* Copyright 2021 i2c Inc. All rights reserved. */
import { css } from 'lit-element';
const styles = css `
    :host, :root {
        font-family: var(--cm-alias-body-text-font-family, var(--cm-global-font-family-base));
        font-size: var(--cm-alias-font-size-default, var(--cm-global-dimension-font-size-100))
    }

    .spectrum:lang(ar) {
        font-family: var(--cm-alias-font-family-ar, myriad-arabic, adobe-clean, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Trebuchet MS", "Lucida Grande", sans-serif)
    }

    .spectrum:lang(he) {
        font-family: var(--cm-alias-font-family-he, myriad-hebrew, adobe-clean, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Trebuchet MS", "Lucida Grande", sans-serif)
    }

    .spectrum:lang(zh-Hans) {
        font-family: var(--cm-alias-font-family-zhhans, adobe-clean-han-simplified-c, source-han-simplified-c, "SimSun", "Heiti SC Light", "sans-serif")
    }

    .spectrum:lang(zh), .spectrum:lang(zh-Hant) {
        font-family: var(--cm-alias-font-family-zh, adobe-clean-han-traditional, source-han-traditional, "MingLiu", "Heiti TC Light", "sans-serif")
    }

    .spectrum:lang(ko) {
        font-family: var(--cm-alias-font-family-ko, adobe-clean-han-korean, source-han-korean, "Malgun Gothic", "Apple Gothic", "sans-serif")
    }

    .spectrum:lang(ja) {
        font-family: var(--cm-alias-font-family-ja, adobe-clean-han-japanese, source-han-japanese, "Yu Gothic", "\\30E1 \\30A4 \\30EA \\30AA", "\\30D2 \\30E9 \\30AE \\30CE \\89D2 \\30B4  Pro W3", "Hiragino Kaku Gothic Pro W3", "Osaka", "\\FF2D \\FF33 \\FF30 \\30B4 \\30B7 \\30C3 \\30AF", "MS PGothic", "sans-serif")
    }

    .spectrum-Heading--sizeXXXL {
        font-size: var(--cm-heading-xxxl-text-size, var(--cm-alias-heading-xxxl-text-size));
        font-weight: var(--cm-heading-xxxl-text-font-weight, var(--cm-alias-heading-text-font-weight-regular));
        line-height: var(--cm-heading-xxxl-text-line-height, var(--cm-alias-heading-text-line-height));
        font-style: var(--cm-heading-xxxl-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-heading-xxxl-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        text-transform: var(--cm-heading-xxxl-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Heading--sizeXXL {
        font-size: var(--cm-heading-xxl-text-size, var(--cm-alias-heading-xxl-text-size));
        font-weight: var(--cm-heading-xxl-text-font-weight, var(--cm-alias-heading-text-font-weight-regular));
        line-height: var(--cm-heading-xxl-text-line-height, var(--cm-alias-heading-text-line-height));
        font-style: var(--cm-heading-xxl-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-heading-xxl-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        text-transform: var(--cm-heading-xxl-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Heading--sizeXL {
        font-size: var(--cm-heading-xl-text-size, var(--cm-alias-heading-xl-text-size));
        font-weight: var(--cm-heading-xl-text-font-weight, var(--cm-alias-heading-text-font-weight-regular));
        line-height: var(--cm-heading-xl-text-line-height, var(--cm-alias-heading-text-line-height));
        font-style: var(--cm-heading-xl-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-heading-xl-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        text-transform: var(--cm-heading-xl-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Heading--sizeL {
        font-size: var(--cm-heading-l-text-size, var(--cm-alias-heading-l-text-size));
        font-weight: var(--cm-heading-l-text-font-weight, var(--cm-alias-heading-text-font-weight-regular));
        line-height: var(--cm-heading-l-text-line-height, var(--cm-alias-heading-text-line-height));
        font-style: var(--cm-heading-l-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-heading-l-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        text-transform: var(--cm-heading-l-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Heading--sizeM {
        font-size: var(--cm-heading-m-text-size, var(--cm-alias-heading-m-text-size));
        font-weight: var(--cm-heading-m-text-font-weight, var(--cm-alias-heading-text-font-weight-regular));
        line-height: var(--cm-heading-m-text-line-height, var(--cm-alias-heading-text-line-height));
        font-style: var(--cm-heading-m-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-heading-m-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        text-transform: var(--cm-heading-m-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Heading--sizeS {
        font-size: var(--cm-heading-s-text-size, var(--cm-alias-heading-s-text-size));
        font-weight: var(--cm-heading-s-text-font-weight, var(--cm-alias-heading-text-font-weight-regular));
        line-height: var(--cm-heading-s-text-line-height, var(--cm-alias-heading-text-line-height));
        font-style: var(--cm-heading-s-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-heading-s-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        text-transform: var(--cm-heading-s-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Heading--sizeXS {
        font-size: var(--cm-heading-xs-text-size, var(--cm-alias-heading-xs-text-size));
        font-weight: var(--cm-heading-xs-text-font-weight, var(--cm-alias-heading-text-font-weight-regular));
        line-height: var(--cm-heading-xs-text-line-height, var(--cm-alias-heading-text-line-height));
        font-style: var(--cm-heading-xs-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-heading-xs-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        text-transform: var(--cm-heading-xs-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Heading--sizeXXS {
        font-size: var(--cm-heading-xxs-text-size, var(--cm-alias-heading-xxs-text-size));
        font-weight: var(--cm-heading-xxs-text-font-weight, var(--cm-alias-heading-text-font-weight-regular));
        line-height: var(--cm-heading-xxs-text-line-height, var(--cm-alias-heading-text-line-height));
        font-style: var(--cm-heading-xxs-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-heading-xxs-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        text-transform: var(--cm-heading-xxs-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Heading {
        font-family: var(--cm-heading-m-text-font-family, var(--cm-alias-body-text-font-family));
        font-weight: var(--cm-heading-m-text-font-weight, var(--cm-alias-heading-text-font-weight-regular))
    }

    .spectrum-Heading .spectrum-Heading-emphasis, .spectrum-Heading em {
        font-style: var(--cm-heading-m-emphasis-text-font-style, var(--cm-global-font-style-italic))
    }

    .spectrum-Heading .spectrum-Heading-strong, .spectrum-Heading strong {
        font-weight: var(--cm-heading-m-strong-text-font-weight, var(--cm-global-font-weight-black))
    }

    .spectrum-Heading--serif {
        font-family: var(--cm-body-serif-m-text-font-family, var(--cm-alias-serif-text-font-family))
    }

    .spectrum-Heading--heavy {
        font-weight: var(--cm-heading-heavy-m-text-font-weight, var(--cm-global-font-weight-black))
    }

    .spectrum-Heading--heavy .spectrum-Heading-emphasis, .spectrum-Heading--heavy em {
        font-style: var(--cm-heading-heavy-m-emphasis-text-font-style, var(--cm-global-font-style-italic))
    }

    .spectrum-Heading--heavy .spectrum-Heading-strong, .spectrum-Heading--heavy strong {
        font-weight: var(--cm-heading-heavy-m-strong-text-font-weight, var(--cm-global-font-weight-black))
    }

    .spectrum-Heading--light {
        font-weight: var(--cm-heading-light-m-emphasis-text-font-weight, var(--cm-global-font-weight-light))
    }

    .spectrum-Heading--light .spectrum-Heading-emphasis, .spectrum-Heading--light em {
        font-style: var(--cm-heading-light-m-emphasis-text-font-style, var(--cm-global-font-style-italic))
    }

    .spectrum-Heading--light .spectrum-Heading-strong, .spectrum-Heading--light strong {
        font-weight: var(--cm-heading-light-m-strong-text-font-weight, var(--cm-global-font-weight-bold))
    }

    .spectrum-Body--sizeXXXL {
        font-size: var(--cm-body-xxxl-text-size, var(--cm-global-dimension-font-size-600));
        font-weight: var(--cm-body-xxxl-text-font-weight, var(--cm-alias-body-text-font-weight));
        line-height: var(--cm-body-xxxl-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-body-xxxl-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-body-xxxl-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        text-transform: var(--cm-body-xxxl-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Body--sizeXXL {
        font-size: var(--cm-body-xxl-text-size, var(--cm-global-dimension-font-size-500));
        font-weight: var(--cm-body-xxl-text-font-weight, var(--cm-alias-body-text-font-weight));
        line-height: var(--cm-body-xxl-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-body-xxl-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-body-xxl-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        text-transform: var(--cm-body-xxl-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Body--sizeXL {
        font-size: var(--cm-body-xl-text-size, var(--cm-global-dimension-font-size-400));
        font-weight: var(--cm-body-xl-text-font-weight, var(--cm-alias-body-text-font-weight));
        line-height: var(--cm-body-xl-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-body-xl-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-body-xl-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        text-transform: var(--cm-body-xl-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Body--sizeL {
        font-size: var(--cm-body-l-text-size, var(--cm-global-dimension-font-size-300));
        font-weight: var(--cm-body-l-text-font-weight, var(--cm-alias-body-text-font-weight));
        line-height: var(--cm-body-l-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-body-l-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-body-l-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        text-transform: var(--cm-body-l-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Body--sizeM {
        font-size: var(--cm-body-m-text-size, var(--cm-global-dimension-font-size-200));
        font-weight: var(--cm-body-m-text-font-weight, var(--cm-alias-body-text-font-weight));
        line-height: var(--cm-body-m-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-body-m-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-body-m-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        text-transform: var(--cm-body-m-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Body--sizeS {
        font-size: var(--cm-body-s-text-size, var(--cm-alias-font-size-default));
        font-weight: var(--cm-body-s-text-font-weight, var(--cm-alias-body-text-font-weight));
        line-height: var(--cm-body-s-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-body-s-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-body-s-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        text-transform: var(--cm-body-s-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Body--sizeXS {
        font-size: var(--cm-body-xs-text-size, var(--cm-global-dimension-font-size-75));
        font-weight: var(--cm-body-xs-text-font-weight, var(--cm-alias-body-text-font-weight));
        line-height: var(--cm-body-xs-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-body-xs-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-body-xs-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        text-transform: var(--cm-body-xs-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Body {
        font-family: var(--cm-body-m-text-font-family, var(--cm-alias-body-text-font-family))
    }

    .spectrum-Body .spectrum-Body-strong, .spectrum-Body strong {
        font-weight: var(--cm-body-m-strong-text-font-weight, var(--cm-global-font-weight-bold))
    }

    .spectrum-Body .spectrum-Body-emphasis, .spectrum-Body em {
        font-style: var(--cm-body-m-emphasis-text-font-style, var(--cm-global-font-style-italic))
    }

    .spectrum-Body--serif {
        font-family: var(--cm-body-serif-m-text-font-family, var(--cm-alias-serif-text-font-family))
    }

    .spectrum-Detail {
        font-family: var(--cm-heading-m-text-font-family, var(--cm-alias-body-text-font-family))
    }

    .spectrum-Detail .spectrum-Detail-strong, .spectrum-Detail strong {
        font-weight: var(--cm-detail-m-strong-text-font-weight, var(--cm-global-font-weight-black))
    }

    .spectrum-Detail .spectrum-Detail-emphasis, .spectrum-Detail em {
        font-style: var(--cm-detail-m-emphasis-text-font-style, var(--cm-global-font-style-italic))
    }

    .spectrum-Detail--light {
        font-style: var(--cm-detail-light-m-text-font-style, var(--cm-global-font-style-regular));
        font-weight: var(--cm-detail-light-m-text-font-weight, var(--cm-alias-detail-text-font-weight-light))
    }

    .spectrum-Detail--serif {
        font-family: var(--cm-body-serif-m-text-font-family, var(--cm-alias-serif-text-font-family))
    }

    .spectrum-Detail--sizeXL {
        font-size: var(--cm-detail-xl-text-size, var(--cm-global-dimension-font-size-200));
        font-weight: var(--cm-detail-xl-text-font-weight, var(--cm-alias-detail-text-font-weight));
        line-height: var(--cm-detail-xl-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-detail-xl-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-xl-text-letter-spacing, var(--cm-global-font-letter-spacing-medium));
        text-transform: var(--cm-detail-xl-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Detail--sizeXL em {
        font-size: var(--cm-detail-xl-emphasis-text-size, var(--cm-global-dimension-font-size-200));
        font-weight: var(--cm-detail-xl-emphasis-text-font-weight, var(--cm-alias-detail-text-font-weight));
        line-height: var(--cm-detail-xl-emphasis-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-detail-xl-emphasis-text-font-style, var(--cm-global-font-style-italic));
        letter-spacing: var(--cm-detail-xl-emphasis-text-letter-spacing, var(--cm-global-font-letter-spacing-medium));
        text-transform: var(--cm-detail-xl-emphasis-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Detail--sizeXL strong {
        font-size: var(--cm-detail-xl-strong-text-size, var(--cm-global-dimension-font-size-200));
        font-weight: var(--cm-detail-xl-strong-text-font-weight, var(--cm-global-font-weight-black));
        line-height: var(--cm-detail-xl-strong-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-detail-xl-strong-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-xl-strong-text-letter-spacing, var(--cm-global-font-letter-spacing-medium));
        text-transform: var(--cm-detail-xl-strong-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Detail--sizeL {
        font-size: var(--cm-detail-l-text-size, var(--cm-global-dimension-font-size-100));
        font-weight: var(--cm-detail-l-text-font-weight, var(--cm-alias-detail-text-font-weight));
        line-height: var(--cm-detail-l-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-detail-l-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-l-text-letter-spacing, var(--cm-global-font-letter-spacing-medium));
        text-transform: var(--cm-detail-l-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Detail--sizeL em {
        font-size: var(--cm-detail-l-emphasis-text-size, var(--cm-global-dimension-font-size-100));
        font-weight: var(--cm-detail-l-emphasis-text-font-weight, var(--cm-alias-detail-text-font-weight));
        line-height: var(--cm-detail-l-emphasis-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-detail-l-emphasis-text-font-style, var(--cm-global-font-style-italic));
        letter-spacing: var(--cm-detail-l-emphasis-text-letter-spacing, var(--cm-global-font-letter-spacing-medium));
        text-transform: var(--cm-detail-l-emphasis-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Detail--sizeL strong {
        font-size: var(--cm-detail-l-strong-text-size, var(--cm-global-dimension-font-size-100));
        font-weight: var(--cm-detail-l-strong-text-font-weight, var(--cm-global-font-weight-black));
        line-height: var(--cm-detail-l-strong-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-detail-l-strong-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-l-strong-text-letter-spacing, var(--cm-global-font-letter-spacing-medium));
        text-transform: var(--cm-detail-l-strong-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Detail--sizeM {
        font-size: var(--cm-detail-m-text-size, var(--cm-global-dimension-font-size-75));
        font-weight: var(--cm-detail-m-text-font-weight, var(--cm-alias-detail-text-font-weight));
        line-height: var(--cm-detail-m-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-detail-m-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-m-text-letter-spacing, var(--cm-global-font-letter-spacing-medium));
        text-transform: var(--cm-detail-m-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Detail--sizeM em {
        font-size: var(--cm-detail-m-emphasis-text-size, var(--cm-global-dimension-font-size-75));
        font-weight: var(--cm-detail-m-emphasis-text-font-weight, var(--cm-alias-detail-text-font-weight));
        line-height: var(--cm-detail-m-emphasis-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-detail-m-emphasis-text-font-style, var(--cm-global-font-style-italic));
        letter-spacing: var(--cm-detail-m-emphasis-text-letter-spacing, var(--cm-global-font-letter-spacing-medium));
        text-transform: var(--cm-detail-m-emphasis-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Detail--sizeM strong {
        font-size: var(--cm-detail-m-strong-text-size, var(--cm-global-dimension-font-size-75));
        font-weight: var(--cm-detail-m-strong-text-font-weight, var(--cm-global-font-weight-black));
        line-height: var(--cm-detail-m-strong-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-detail-m-strong-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-m-strong-text-letter-spacing, var(--cm-global-font-letter-spacing-medium));
        text-transform: var(--cm-detail-m-strong-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Detail--sizeS {
        font-size: var(--cm-detail-s-text-size, var(--cm-global-dimension-font-size-50));
        font-weight: var(--cm-detail-s-text-font-weight, var(--cm-alias-detail-text-font-weight));
        line-height: var(--cm-detail-s-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-detail-s-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-s-text-letter-spacing, var(--cm-global-font-letter-spacing-medium));
        text-transform: var(--cm-detail-s-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Detail--sizeS em {
        font-size: var(--cm-detail-s-emphasis-text-size, var(--cm-global-dimension-font-size-50));
        font-weight: var(--cm-detail-s-emphasis-text-font-weight, var(--cm-alias-detail-text-font-weight));
        line-height: var(--cm-detail-s-emphasis-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-detail-s-emphasis-text-font-style, var(--cm-global-font-style-italic));
        letter-spacing: var(--cm-detail-s-emphasis-text-letter-spacing, var(--cm-global-font-letter-spacing-medium));
        text-transform: var(--cm-detail-s-emphasis-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Detail--sizeS strong {
        font-size: var(--cm-detail-s-strong-text-size, var(--cm-global-dimension-font-size-50));
        font-weight: var(--cm-detail-s-strong-text-font-weight, var(--cm-global-font-weight-black));
        line-height: var(--cm-detail-s-strong-text-line-height, var(--cm-alias-body-text-line-height));
        font-style: var(--cm-detail-s-strong-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-s-strong-text-letter-spacing, var(--cm-global-font-letter-spacing-medium));
        text-transform: var(--cm-detail-s-strong-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum-Code {
        font-family: var(--cm-heading-m-text-font-family, var(--cm-alias-body-text-font-family))
    }

    .spectrum-Code .spectrum-Code-strong, .spectrum-Code strong {
        font-weight: var(--cm-code-m-strong-text-font-weight, var(--cm-global-font-weight-bold))
    }

    .spectrum-Code .spectrum-Code-emphasis, .spectrum-Code em {
        font-style: var(--cm-code-m-emphasis-text-font-style, var(--cm-global-font-style-italic))
    }

    .spectrum-Code--serif {
        font-family: var(--cm-body-serif-m-text-font-family, var(--cm-alias-serif-text-font-family))
    }

    .spectrum-Code--sizeXL {
        font-size: var(--cm-code-xl-text-size, var(--cm-global-dimension-font-size-400));
        font-weight: var(--cm-code-xl-text-font-weight, var(--cm-alias-code-text-font-weight-regular));
        line-height: var(--cm-code-xl-text-line-height, var(--cm-alias-code-text-line-height));
        font-style: var(--cm-code-xl-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-code-xl-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        margin-top: 0;
        margin-bottom: 0;
        font-family: var(--cm-code-xl-text-font-family, var(--cm-alias-code-text-font-family))
    }

    .spectrum-Code--sizeL {
        font-size: var(--cm-code-l-text-size, var(--cm-global-dimension-font-size-300));
        font-weight: var(--cm-code-l-text-font-weight, var(--cm-alias-code-text-font-weight-regular));
        line-height: var(--cm-code-l-text-line-height, var(--cm-alias-code-text-line-height));
        font-style: var(--cm-code-l-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-code-l-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        margin-top: 0;
        margin-bottom: 0;
        font-family: var(--cm-code-l-text-font-family, var(--cm-alias-code-text-font-family))
    }

    .spectrum-Code--sizeM {
        font-size: var(--cm-code-m-text-size, var(--cm-global-dimension-font-size-200));
        font-weight: var(--cm-code-m-text-font-weight, var(--cm-alias-code-text-font-weight-regular));
        line-height: var(--cm-code-m-text-line-height, var(--cm-alias-code-text-line-height));
        font-style: var(--cm-code-m-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-code-m-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        margin-top: 0;
        margin-bottom: 0;
        font-family: var(--cm-code-m-text-font-family, var(--cm-alias-code-text-font-family))
    }

    .spectrum-Code--sizeS {
        font-size: var(--cm-code-s-text-size, var(--cm-alias-font-size-default));
        font-weight: var(--cm-code-s-text-font-weight, var(--cm-alias-code-text-font-weight-regular));
        line-height: var(--cm-code-s-text-line-height, var(--cm-alias-code-text-line-height));
        font-style: var(--cm-code-s-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-code-s-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        margin-top: 0;
        margin-bottom: 0;
        font-family: var(--cm-code-s-text-font-family, var(--cm-alias-code-text-font-family))
    }

    .spectrum-Code--sizeXS {
        font-size: var(--cm-code-xs-text-size, var(--cm-global-dimension-font-size-75));
        font-weight: var(--cm-code-xs-text-font-weight, var(--cm-alias-code-text-font-weight-regular));
        line-height: var(--cm-code-xs-text-line-height, var(--cm-alias-code-text-line-height));
        font-style: var(--cm-code-xs-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-code-xs-text-letter-spacing, var(--cm-global-font-letter-spacing-none));
        margin-top: 0;
        margin-bottom: 0;
        font-family: var(--cm-code-xs-text-font-family, var(--cm-alias-code-text-font-family))
    }

    .spectrum-Typography .spectrum-Heading--sizeXXXL {
        margin-top: var(--cm-heading-xxxl-margin-top, var(--cm-alias-heading-xxxl-margin-top));
        margin-bottom: var(--cm-heading-xxxl-margin-bottom, var(--cm-global-dimension-size-130))
    }

    .spectrum-Typography .spectrum-Heading--sizeXXL {
        margin-top: var(--cm-heading-xxl-margin-top, var(--cm-alias-heading-xxl-margin-top));
        margin-bottom: var(--cm-heading-xxl-margin-bottom, var(--cm-global-dimension-size-125))
    }

    .spectrum-Typography .spectrum-Heading--sizeXL {
        margin-top: var(--cm-heading-xl-margin-top, var(--cm-alias-heading-xl-margin-top));
        margin-bottom: var(--cm-heading-xl-margin-bottom, var(--cm-global-dimension-size-115))
    }

    .spectrum-Typography .spectrum-Heading--sizeL {
        margin-top: var(--cm-heading-l-margin-top, var(--cm-alias-heading-l-margin-top));
        margin-bottom: var(--cm-heading-l-margin-bottom, var(--cm-global-dimension-size-85))
    }

    .spectrum-Typography .spectrum-Heading--sizeM {
        margin-top: var(--cm-heading-m-margin-top, var(--cm-alias-heading-m-margin-top));
        margin-bottom: var(--cm-heading-m-margin-bottom, var(--cm-global-dimension-size-75))
    }

    .spectrum-Typography .spectrum-Heading--sizeS {
        margin-top: var(--cm-heading-s-margin-top, var(--cm-alias-heading-s-margin-top));
        margin-bottom: var(--cm-heading-s-margin-bottom, var(--cm-global-dimension-size-65))
    }

    .spectrum-Typography .spectrum-Heading--sizeXS {
        margin-top: var(--cm-heading-xs-margin-top, var(--cm-alias-heading-xs-margin-top));
        margin-bottom: var(--cm-heading-xs-margin-bottom, var(--cm-global-dimension-size-50))
    }

    .spectrum-Typography .spectrum-Heading--sizeXXS {
        margin-top: var(--cm-heading-xxs-margin-top, var(--cm-alias-heading-xxs-margin-top));
        margin-bottom: var(--cm-heading-xxs-margin-bottom, var(--cm-global-dimension-size-40))
    }

    .spectrum-Typography .spectrum-Body--sizeXXXL {
        margin-top: var(--cm-body-xxxl-margin-top, 0);
        margin-bottom: var(--cm-body-xxxl-margin-bottom, var(--cm-global-dimension-size-400))
    }

    .spectrum-Typography .spectrum-Body--sizeXXL {
        margin-top: var(--cm-body-xxl-margin-top, 0);
        margin-bottom: var(--cm-body-xxl-margin-bottom, var(--cm-global-dimension-size-300))
    }

    .spectrum-Typography .spectrum-Body--sizeXL {
        margin-top: var(--cm-body-xl-margin-top, 0);
        margin-bottom: var(--cm-body-xl-margin-bottom, var(--cm-global-dimension-size-200))
    }

    .spectrum-Typography .spectrum-Body--sizeL {
        margin-top: var(--cm-body-l-margin-top, 0);
        margin-bottom: var(--cm-body-l-margin-bottom, var(--cm-global-dimension-size-160))
    }

    .spectrum-Typography .spectrum-Body--sizeM {
        margin-top: var(--cm-body-m-margin-top, 0);
        margin-bottom: var(--cm-body-m-margin-bottom, var(--cm-global-dimension-size-150))
    }

    .spectrum-Typography .spectrum-Body--sizeS {
        margin-top: var(--cm-body-s-margin-top, 0);
        margin-bottom: var(--cm-body-s-margin-bottom, var(--cm-global-dimension-size-125))
    }

    .spectrum-Typography .spectrum-Body--sizeXS {
        margin-top: var(--cm-body-xs-margin-top, 0);
        margin-bottom: var(--cm-body-xs-margin-bottom, var(--cm-global-dimension-size-115))
    }

    .spectrum:lang(ja) .spectrum-Heading--sizeXXXL, .spectrum:lang(ko) .spectrum-Heading--sizeXXXL, .spectrum:lang(zh) .spectrum-Heading--sizeXXXL {
        font-size: var(--cm-heading-han-xxxl-text-size, var(--cm-alias-heading-xxxl-text-size));
        font-weight: var(--cm-heading-han-xxxl-text-font-weight, var(--cm-alias-han-heading-text-font-weight-regular));
        line-height: var(--cm-heading-han-xxxl-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-heading-han-xxxl-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-heading-han-xxxl-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-heading-han-xxxl-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Heading--sizeXXL, .spectrum:lang(ko) .spectrum-Heading--sizeXXL, .spectrum:lang(zh) .spectrum-Heading--sizeXXL {
        font-size: var(--cm-heading-han-xxl-text-size, var(--cm-alias-heading-han-xxl-text-size));
        font-weight: var(--cm-heading-han-xxl-text-font-weight, var(--cm-alias-han-heading-text-font-weight-regular));
        line-height: var(--cm-heading-han-xxl-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-heading-han-xxl-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-heading-han-xxl-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-heading-han-xxl-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Heading--sizeXL, .spectrum:lang(ko) .spectrum-Heading--sizeXL, .spectrum:lang(zh) .spectrum-Heading--sizeXL {
        font-size: var(--cm-heading-han-xl-text-size, var(--cm-alias-heading-han-xl-text-size));
        font-weight: var(--cm-heading-han-xl-text-font-weight, var(--cm-alias-han-heading-text-font-weight-regular));
        line-height: var(--cm-heading-han-xl-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-heading-han-xl-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-heading-han-xl-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-heading-han-xl-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Heading--sizeL, .spectrum:lang(ko) .spectrum-Heading--sizeL, .spectrum:lang(zh) .spectrum-Heading--sizeL {
        font-size: var(--cm-heading-han-l-text-size, var(--cm-alias-heading-han-l-text-size));
        font-weight: var(--cm-heading-han-l-text-font-weight, var(--cm-alias-han-heading-text-font-weight-regular));
        line-height: var(--cm-heading-han-l-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-heading-han-l-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-heading-han-l-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-heading-han-l-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Heading--sizeM, .spectrum:lang(ko) .spectrum-Heading--sizeM, .spectrum:lang(zh) .spectrum-Heading--sizeM {
        font-size: var(--cm-heading-han-m-text-size, var(--cm-alias-heading-han-m-text-size));
        font-weight: var(--cm-heading-han-m-text-font-weight, var(--cm-alias-han-heading-text-font-weight-regular));
        line-height: var(--cm-heading-han-m-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-heading-han-m-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-heading-han-m-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-heading-han-m-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Heading--sizeS, .spectrum:lang(ko) .spectrum-Heading--sizeS, .spectrum:lang(zh) .spectrum-Heading--sizeS {
        font-size: var(--cm-heading-han-s-text-size, var(--cm-alias-heading-s-text-size));
        font-weight: var(--cm-heading-han-s-text-font-weight, var(--cm-alias-han-heading-text-font-weight-regular));
        line-height: var(--cm-heading-han-s-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-heading-han-s-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-heading-han-s-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-heading-han-s-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Heading--sizeXS, .spectrum:lang(ko) .spectrum-Heading--sizeXS, .spectrum:lang(zh) .spectrum-Heading--sizeXS {
        font-size: var(--cm-heading-han-xs-text-size, var(--cm-alias-heading-xs-text-size));
        font-weight: var(--cm-heading-han-xs-text-font-weight, var(--cm-alias-han-heading-text-font-weight-regular));
        line-height: var(--cm-heading-han-xs-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-heading-han-xs-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-heading-han-xs-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-heading-han-xs-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Heading--sizeXXS, .spectrum:lang(ko) .spectrum-Heading--sizeXXS, .spectrum:lang(zh) .spectrum-Heading--sizeXXS {
        font-size: var(--cm-heading-han-xxs-text-size, var(--cm-alias-heading-xxs-text-size));
        font-weight: var(--cm-heading-han-xxs-text-font-weight, var(--cm-alias-han-heading-text-font-weight-regular));
        line-height: var(--cm-heading-han-xxs-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-heading-han-xxs-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-heading-han-xxs-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-heading-han-xxs-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Heading--heavy, .spectrum:lang(ko) .spectrum-Heading--heavy, .spectrum:lang(zh) .spectrum-Heading--heavy {
        font-weight: var(--cm-heading-han-m-text-font-weight, var(--cm-alias-han-heading-text-font-weight-regular))
    }

    .spectrum:lang(ja) .spectrum-Heading--heavy .spectrum-Heading--emphasis, .spectrum:lang(ja) .spectrum-Heading--heavy em, .spectrum:lang(ko) .spectrum-Heading--heavy .spectrum-Heading--emphasis, .spectrum:lang(ko) .spectrum-Heading--heavy em, .spectrum:lang(zh) .spectrum-Heading--heavy .spectrum-Heading--emphasis, .spectrum:lang(zh) .spectrum-Heading--heavy em {
        font-style: var(--cm-heading-han-heavy-m-emphasis-text-font-style, var(--cm-global-font-style-regular));
        font-weight: var(--cm-heading-han-heavy-m-emphasis-text-font-weight, var(--cm-alias-han-heading-text-font-weight-heavy-emphasis))
    }

    .spectrum:lang(ja) .spectrum-Heading--heavy .spectrum-Heading--strong, .spectrum:lang(ja) .spectrum-Heading--heavy strong, .spectrum:lang(ko) .spectrum-Heading--heavy .spectrum-Heading--strong, .spectrum:lang(ko) .spectrum-Heading--heavy strong, .spectrum:lang(zh) .spectrum-Heading--heavy .spectrum-Heading--strong, .spectrum:lang(zh) .spectrum-Heading--heavy strong {
        font-style: var(--cm-heading-heavy-m-strong-text-font-style, var(--cm-global-font-style-regular));
        font-weight: var(--cm-heading-heavy-m-strong-text-font-weight, var(--cm-global-font-weight-black))
    }

    .spectrum:lang(ja) .spectrum-Heading--light, .spectrum:lang(ko) .spectrum-Heading--light, .spectrum:lang(zh) .spectrum-Heading--light {
        font-weight: var(--cm-heading-han-m-text-font-weight, var(--cm-alias-han-heading-text-font-weight-regular))
    }

    .spectrum:lang(ja) .spectrum-Heading--light .spectrum-Heading--emphasis, .spectrum:lang(ja) .spectrum-Heading--light em, .spectrum:lang(ko) .spectrum-Heading--light .spectrum-Heading--emphasis, .spectrum:lang(ko) .spectrum-Heading--light em, .spectrum:lang(zh) .spectrum-Heading--light .spectrum-Heading--emphasis, .spectrum:lang(zh) .spectrum-Heading--light em {
        font-style: var(--cm-heading-han-light-m-emphasis-text-font-style, var(--cm-global-font-style-regular));
        font-weight: var(--cm-heading-han-light-m-emphasis-text-font-weight, var(--cm-alias-han-heading-text-font-weight-light-emphasis))
    }

    .spectrum:lang(ja) .spectrum-Heading--light .spectrum-Heading--strong, .spectrum:lang(ja) .spectrum-Heading--light strong, .spectrum:lang(ko) .spectrum-Heading--light .spectrum-Heading--strong, .spectrum:lang(ko) .spectrum-Heading--light strong, .spectrum:lang(zh) .spectrum-Heading--light .spectrum-Heading--strong, .spectrum:lang(zh) .spectrum-Heading--light strong {
        font-style: var(--cm-heading-han-light-m-strong-text-font-style, var(--cm-global-font-style-regular));
        font-weight: var(--cm-heading-han-light-m-strong-text-font-weight, var(--cm-global-font-weight-bold))
    }

    .spectrum:lang(ja) .spectrum-Body--sizeXXXL, .spectrum:lang(ko) .spectrum-Body--sizeXXXL, .spectrum:lang(zh) .spectrum-Body--sizeXXXL {
        font-size: var(--cm-body-han-xxxl-text-size, var(--cm-global-dimension-font-size-600));
        font-weight: var(--cm-body-han-xxxl-text-font-weight, var(--cm-alias-han-body-text-font-weight-regular));
        line-height: var(--cm-body-han-xxxl-text-line-height, var(--cm-alias-han-body-text-line-height));
        font-style: var(--cm-body-han-xxxl-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-body-han-xxxl-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-body-han-xxxl-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Body--sizeXXL, .spectrum:lang(ko) .spectrum-Body--sizeXXL, .spectrum:lang(zh) .spectrum-Body--sizeXXL {
        font-size: var(--cm-body-han-xxl-text-size, var(--cm-global-dimension-font-size-500));
        font-weight: var(--cm-body-han-xxl-text-font-weight, var(--cm-alias-han-body-text-font-weight-regular));
        line-height: var(--cm-body-han-xxl-text-line-height, var(--cm-alias-han-body-text-line-height));
        font-style: var(--cm-body-han-xxl-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-body-han-xxl-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-body-han-xxl-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Body--sizeXL, .spectrum:lang(ko) .spectrum-Body--sizeXL, .spectrum:lang(zh) .spectrum-Body--sizeXL {
        font-size: var(--cm-body-han-xl-text-size, var(--cm-global-dimension-font-size-400));
        font-weight: var(--cm-body-han-xl-text-font-weight, var(--cm-alias-han-body-text-font-weight-regular));
        line-height: var(--cm-body-han-xl-text-line-height, var(--cm-alias-han-body-text-line-height));
        font-style: var(--cm-body-han-xl-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-body-han-xl-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-body-han-xl-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Body--sizeL, .spectrum:lang(ko) .spectrum-Body--sizeL, .spectrum:lang(zh) .spectrum-Body--sizeL {
        font-size: var(--cm-body-han-l-text-size, var(--cm-global-dimension-font-size-300));
        font-weight: var(--cm-body-han-l-text-font-weight, var(--cm-alias-han-body-text-font-weight-regular));
        line-height: var(--cm-body-han-l-text-line-height, var(--cm-alias-han-body-text-line-height));
        font-style: var(--cm-body-han-l-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-body-han-l-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-body-han-l-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Body--sizeM, .spectrum:lang(ko) .spectrum-Body--sizeM, .spectrum:lang(zh) .spectrum-Body--sizeM {
        font-size: var(--cm-body-han-m-text-size, var(--cm-global-dimension-font-size-200));
        font-weight: var(--cm-body-han-m-text-font-weight, var(--cm-alias-han-body-text-font-weight-regular));
        line-height: var(--cm-body-han-m-text-line-height, var(--cm-alias-han-body-text-line-height));
        font-style: var(--cm-body-han-m-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-body-han-m-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-body-han-m-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Body--sizeS, .spectrum:lang(ko) .spectrum-Body--sizeS, .spectrum:lang(zh) .spectrum-Body--sizeS {
        font-size: var(--cm-body-han-s-text-size, var(--cm-alias-font-size-default));
        font-weight: var(--cm-body-han-s-text-font-weight, var(--cm-alias-han-body-text-font-weight-regular));
        line-height: var(--cm-body-han-s-text-line-height, var(--cm-alias-han-body-text-line-height));
        font-style: var(--cm-body-han-s-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-body-han-s-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-body-han-s-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Body--sizeXS, .spectrum:lang(ko) .spectrum-Body--sizeXS, .spectrum:lang(zh) .spectrum-Body--sizeXS {
        font-size: var(--cm-body-han-xs-text-size, var(--cm-global-dimension-font-size-75));
        font-weight: var(--cm-body-han-xs-text-font-weight, var(--cm-alias-han-body-text-font-weight-regular));
        line-height: var(--cm-body-han-xs-text-line-height, var(--cm-alias-han-body-text-line-height));
        font-style: var(--cm-body-han-xs-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-body-han-xs-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-body-han-xs-text-transform, none);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Detail--sizeXL, .spectrum:lang(ko) .spectrum-Detail--sizeXL, .spectrum:lang(zh) .spectrum-Detail--sizeXL {
        font-size: var(--cm-detail-han-xl-text-size, var(--cm-global-dimension-font-size-200));
        font-weight: var(--cm-detail-han-xl-text-font-weight, var(--cm-alias-detail-text-font-weight));
        line-height: var(--cm-detail-han-xl-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-detail-han-xl-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-han-xl-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-detail-han-xl-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Detail--sizeXL em, .spectrum:lang(ko) .spectrum-Detail--sizeXL em, .spectrum:lang(zh) .spectrum-Detail--sizeXL em {
        font-size: var(--cm-detail-han-xl-emphasis-text-size, var(--cm-global-dimension-font-size-200));
        font-weight: var(--cm-detail-han-xl-emphasis-text-font-weight, var(--cm-alias-han-heading-text-font-weight-regular-emphasis));
        line-height: var(--cm-detail-han-xl-emphasis-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-detail-han-xl-emphasis-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-han-xl-emphasis-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-detail-han-xl-emphasis-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Detail--sizeXL strong, .spectrum:lang(ko) .spectrum-Detail--sizeXL strong, .spectrum:lang(zh) .spectrum-Detail--sizeXL strong {
        font-size: var(--cm-detail-han-xl-strong-text-size, var(--cm-global-dimension-font-size-200));
        font-weight: var(--cm-detail-han-xl-strong-text-font-weight, var(--cm-global-font-weight-black));
        line-height: var(--cm-detail-han-xl-strong-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-detail-han-xl-strong-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-han-xl-strong-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-detail-han-xl-strong-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Detail--sizeL, .spectrum:lang(ko) .spectrum-Detail--sizeL, .spectrum:lang(zh) .spectrum-Detail--sizeL {
        font-size: var(--cm-detail-han-l-text-size, var(--cm-global-dimension-font-size-100));
        font-weight: var(--cm-detail-han-l-text-font-weight, var(--cm-alias-detail-text-font-weight));
        line-height: var(--cm-detail-han-l-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-detail-han-l-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-han-l-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-detail-han-l-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Detail--sizeL em, .spectrum:lang(ko) .spectrum-Detail--sizeL em, .spectrum:lang(zh) .spectrum-Detail--sizeL em {
        font-size: var(--cm-detail-han-l-emphasis-text-size, var(--cm-global-dimension-font-size-100));
        font-weight: var(--cm-detail-han-l-emphasis-text-font-weight, var(--cm-alias-han-heading-text-font-weight-regular-emphasis));
        line-height: var(--cm-detail-han-l-emphasis-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-detail-han-l-emphasis-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-han-l-emphasis-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-detail-han-l-emphasis-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Detail--sizeL strong, .spectrum:lang(ko) .spectrum-Detail--sizeL strong, .spectrum:lang(zh) .spectrum-Detail--sizeL strong {
        font-size: var(--cm-detail-han-l-strong-text-size, var(--cm-global-dimension-font-size-100));
        font-weight: var(--cm-detail-han-l-strong-text-font-weight, var(--cm-global-font-weight-black));
        line-height: var(--cm-detail-han-l-strong-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-detail-han-l-strong-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-han-l-strong-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-detail-han-l-strong-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Detail--sizeM, .spectrum:lang(ko) .spectrum-Detail--sizeM, .spectrum:lang(zh) .spectrum-Detail--sizeM {
        font-size: var(--cm-detail-han-m-text-size, var(--cm-global-dimension-font-size-75));
        font-weight: var(--cm-detail-han-m-text-font-weight, var(--cm-alias-detail-text-font-weight));
        line-height: var(--cm-detail-han-m-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-detail-han-m-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-han-m-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-detail-han-m-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Detail--sizeM em, .spectrum:lang(ko) .spectrum-Detail--sizeM em, .spectrum:lang(zh) .spectrum-Detail--sizeM em {
        font-size: var(--cm-detail-han-m-emphasis-text-size, var(--cm-global-dimension-font-size-75));
        font-weight: var(--cm-detail-han-m-emphasis-text-font-weight, var(--cm-alias-han-heading-text-font-weight-regular-emphasis));
        line-height: var(--cm-detail-han-m-emphasis-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-detail-han-m-emphasis-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-han-m-emphasis-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-detail-han-m-emphasis-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Detail--sizeM strong, .spectrum:lang(ko) .spectrum-Detail--sizeM strong, .spectrum:lang(zh) .spectrum-Detail--sizeM strong {
        font-size: var(--cm-detail-han-m-strong-text-size, var(--cm-global-dimension-font-size-75));
        font-weight: var(--cm-detail-han-m-strong-text-font-weight, var(--cm-global-font-weight-black));
        line-height: var(--cm-detail-han-m-strong-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-detail-han-m-strong-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-han-m-strong-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-detail-han-m-strong-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Detail--sizeS, .spectrum:lang(ko) .spectrum-Detail--sizeS, .spectrum:lang(zh) .spectrum-Detail--sizeS {
        font-size: var(--cm-detail-han-s-text-size, var(--cm-global-dimension-font-size-50));
        font-weight: var(--cm-detail-han-s-text-font-weight, var(--cm-alias-detail-text-font-weight));
        line-height: var(--cm-detail-han-s-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-detail-han-s-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-han-s-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-detail-han-s-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Detail--sizeS em, .spectrum:lang(ko) .spectrum-Detail--sizeS em, .spectrum:lang(zh) .spectrum-Detail--sizeS em {
        font-size: var(--cm-detail-han-s-emphasis-text-size, var(--cm-global-dimension-font-size-50));
        font-weight: var(--cm-detail-han-s-emphasis-text-font-weight, var(--cm-alias-han-heading-text-font-weight-regular-emphasis));
        line-height: var(--cm-detail-han-s-emphasis-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-detail-han-s-emphasis-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-han-s-emphasis-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-detail-han-s-emphasis-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Detail--sizeS strong, .spectrum:lang(ko) .spectrum-Detail--sizeS strong, .spectrum:lang(zh) .spectrum-Detail--sizeS strong {
        font-size: var(--cm-detail-han-s-strong-text-size, var(--cm-global-dimension-font-size-50));
        font-weight: var(--cm-detail-han-s-strong-text-font-weight, var(--cm-global-font-weight-black));
        line-height: var(--cm-detail-han-s-strong-text-line-height, var(--cm-alias-han-heading-text-line-height));
        font-style: var(--cm-detail-han-s-strong-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-detail-han-s-strong-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        text-transform: var(--cm-detail-han-s-strong-text-transform, uppercase);
        margin-top: 0;
        margin-bottom: 0
    }

    .spectrum:lang(ja) .spectrum-Detail--light, .spectrum:lang(ko) .spectrum-Detail--light, .spectrum:lang(zh) .spectrum-Detail--light {
        font-weight: var(--cm-detail-han-m-text-font-weight, var(--cm-alias-detail-text-font-weight))
    }

    .spectrum:lang(ja) .spectrum-Detail--light .spectrum-Detail--emphasis, .spectrum:lang(ja) .spectrum-Detail--light em, .spectrum:lang(ko) .spectrum-Detail--light .spectrum-Detail--emphasis, .spectrum:lang(ko) .spectrum-Detail--light em, .spectrum:lang(zh) .spectrum-Detail--light .spectrum-Detail--emphasis, .spectrum:lang(zh) .spectrum-Detail--light em {
        font-style: var(--cm-detail-han-light-m-emphasis-text-font-style, var(--cm-global-font-style-regular));
        font-weight: var(--cm-detail-han-light-m-emphasis-text-font-weight, var(--cm-alias-han-heading-text-font-weight-light-emphasis))
    }

    .spectrum:lang(ja) .spectrum-Detail--light .spectrum-Detail--strong, .spectrum:lang(ja) .spectrum-Detail--light strong, .spectrum:lang(ko) .spectrum-Detail--light .spectrum-Detail--strong, .spectrum:lang(ko) .spectrum-Detail--light strong, .spectrum:lang(zh) .spectrum-Detail--light .spectrum-Detail--strong, .spectrum:lang(zh) .spectrum-Detail--light strong {
        font-style: var(--cm-detail-han-light-m-strong-text-font-style, var(--cm-global-font-style-regular));
        font-weight: var(--cm-detail-han-light-m-strong-text-font-weight, var(--cm-alias-heading-text-font-weight-regular))
    }

    .spectrum:lang(ja) .spectrum-Code--sizeXL, .spectrum:lang(ko) .spectrum-Code--sizeXL, .spectrum:lang(zh) .spectrum-Code--sizeXL {
        font-size: var(--cm-code-han-xl-text-size, var(--cm-global-dimension-font-size-400));
        font-weight: var(--cm-code-han-xl-text-font-weight, var(--cm-alias-han-body-text-font-weight-regular));
        line-height: var(--cm-code-han-xl-text-line-height, var(--cm-alias-han-body-text-line-height));
        font-style: var(--cm-code-han-xl-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-code-han-xl-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        margin-top: 0;
        margin-bottom: 0;
        font-family: var(--cm-code-han-xl-text-font-family, var(--cm-alias-font-family-zh))
    }

    .spectrum:lang(ja) .spectrum-Code--sizeL, .spectrum:lang(ko) .spectrum-Code--sizeL, .spectrum:lang(zh) .spectrum-Code--sizeL {
        font-size: var(--cm-code-han-l-text-size, var(--cm-global-dimension-font-size-300));
        font-weight: var(--cm-code-han-l-text-font-weight, var(--cm-alias-han-body-text-font-weight-regular));
        line-height: var(--cm-code-han-l-text-line-height, var(--cm-alias-han-body-text-line-height));
        font-style: var(--cm-code-han-l-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-code-han-l-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        margin-top: 0;
        margin-bottom: 0;
        font-family: var(--cm-code-han-l-text-font-family, var(--cm-alias-font-family-zh))
    }

    .spectrum:lang(ja) .spectrum-Code--sizeM, .spectrum:lang(ko) .spectrum-Code--sizeM, .spectrum:lang(zh) .spectrum-Code--sizeM {
        font-size: var(--cm-code-han-m-text-size, var(--cm-global-dimension-font-size-200));
        font-weight: var(--cm-code-han-m-text-font-weight, var(--cm-alias-han-body-text-font-weight-regular));
        line-height: var(--cm-code-han-m-text-line-height, var(--cm-alias-han-body-text-line-height));
        font-style: var(--cm-code-han-m-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-code-han-m-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        margin-top: 0;
        margin-bottom: 0;
        font-family: var(--cm-code-han-m-text-font-family, var(--cm-alias-font-family-zh))
    }

    .spectrum:lang(ja) .spectrum-Code--sizeS, .spectrum:lang(ko) .spectrum-Code--sizeS, .spectrum:lang(zh) .spectrum-Code--sizeS {
        font-size: var(--cm-code-han-s-text-size, var(--cm-alias-font-size-default));
        font-weight: var(--cm-code-han-s-text-font-weight, var(--cm-alias-han-body-text-font-weight-regular));
        line-height: var(--cm-code-han-s-text-line-height, var(--cm-alias-han-body-text-line-height));
        font-style: var(--cm-code-han-s-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-code-han-s-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        margin-top: 0;
        margin-bottom: 0;
        font-family: var(--cm-code-han-s-text-font-family, var(--cm-alias-font-family-zh))
    }

    .spectrum:lang(ja) .spectrum-Code--sizeXS, .spectrum:lang(ko) .spectrum-Code--sizeXS, .spectrum:lang(zh) .spectrum-Code--sizeXS {
        font-size: var(--cm-code-han-xs-text-size, var(--cm-global-dimension-font-size-75));
        font-weight: var(--cm-code-han-xs-text-font-weight, var(--cm-alias-han-body-text-font-weight-regular));
        line-height: var(--cm-code-han-xs-text-line-height, var(--cm-alias-han-body-text-line-height));
        font-style: var(--cm-code-han-xs-text-font-style, var(--cm-global-font-style-regular));
        letter-spacing: var(--cm-code-han-xs-text-letter-spacing, var(--cm-global-font-letter-spacing-han));
        margin-top: 0;
        margin-bottom: 0;
        font-family: var(--cm-code-han-xs-text-font-family, var(--cm-alias-font-family-zh))
    }

    .spectrum-Heading--sizeXXXL {
        color: var(--cm-heading-xxxl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading--sizeXXL {
        color: var(--cm-heading-xxl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading--sizeXL {
        color: var(--cm-heading-xl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading--sizeL {
        color: var(--cm-heading-l-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading--sizeM {
        color: var(--cm-heading-m-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading--sizeS {
        color: var(--cm-heading-s-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading--sizeXS {
        color: var(--cm-heading-xs-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading--sizeXXS {
        color: var(--cm-heading-xxs-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading-sizeXXXL--light {
        color: var(--cm-heading-light-xxxl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading-sizeXXL--light {
        color: var(--cm-heading-light-xxl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading-sizeXL--light {
        color: var(--cm-heading-light-xl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading-sizeL--light {
        color: var(--cm-heading-light-l-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading-sizeXXXL--heavy {
        color: var(--cm-heading-heavy-xxxl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading-sizeXXL--heavy {
        color: var(--cm-heading-heavy-xxl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading-sizeXL--heavy {
        color: var(--cm-heading-heavy-xl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading-sizeL--heavy {
        color: var(--cm-heading-heavy-l-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading-sizeXXXL--heading {
        color: var(--cm-heading-xxxl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading-sizeXXL--heading {
        color: var(--cm-heading-xxl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading-sizeXL--heading {
        color: var(--cm-heading-xl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Heading-sizeL--heading {
        color: var(--cm-heading-l-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Body--sizeXXXL {
        color: var(--cm-body-xxxl-text-color, var(--cm-alias-text-color))
    }

    .spectrum-Body--sizeXXL {
        color: var(--cm-body-xxl-text-color, var(--cm-alias-text-color))
    }

    .spectrum-Body--sizeXL {
        color: var(--cm-body-xl-text-color, var(--cm-alias-text-color))
    }

    .spectrum-Body--sizeL {
        color: var(--cm-body-l-text-color, var(--cm-alias-text-color))
    }

    .spectrum-Body--sizeM {
        color: var(--cm-body-m-text-color, var(--cm-alias-text-color))
    }

    .spectrum-Body--sizeS {
        color: var(--cm-body-s-text-color, var(--cm-alias-text-color))
    }

    .spectrum-Body--sizeXS {
        color: var(--cm-body-xs-text-color, var(--cm-alias-text-color))
    }

    .spectrum-Detail--sizeXL {
        color: var(--cm-detail-xl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Detail--sizeL {
        color: var(--cm-detail-l-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Detail--sizeM {
        color: var(--cm-detail-m-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Detail--sizeS {
        color: var(--cm-detail-s-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum-Code--sizeXL {
        color: var(--cm-code-xl-text-color, var(--cm-alias-text-color))
    }

    .spectrum-Code--sizeL {
        color: var(--cm-code-l-text-color, var(--cm-alias-text-color))
    }

    .spectrum-Code--sizeM {
        color: var(--cm-code-m-text-color, var(--cm-alias-text-color))
    }

    .spectrum-Code--sizeS {
        color: var(--cm-code-s-text-color, var(--cm-alias-text-color))
    }

    .spectrum-Code--sizeXS {
        color: var(--cm-code-xs-text-color, var(--cm-alias-text-color))
    }

    .spectrum:lang(ja) .spectrum-Body--sizeXXXL, .spectrum:lang(ko) .spectrum-Body--sizeXXXL, .spectrum:lang(zh) .spectrum-Body--sizeXXXL {
        color: var(--cm-body-han-xxxl-text-color, var(--cm-alias-text-color))
    }

    .spectrum:lang(ja) .spectrum-Body--sizeXXL, .spectrum:lang(ko) .spectrum-Body--sizeXXL, .spectrum:lang(zh) .spectrum-Body--sizeXXL {
        color: var(--cm-body-han-xxl-text-color, var(--cm-alias-text-color))
    }

    .spectrum:lang(ja) .spectrum-Body--sizeXL, .spectrum:lang(ko) .spectrum-Body--sizeXL, .spectrum:lang(zh) .spectrum-Body--sizeXL {
        color: var(--cm-body-han-xl-text-color, var(--cm-alias-text-color))
    }

    .spectrum:lang(ja) .spectrum-Body--sizeL, .spectrum:lang(ko) .spectrum-Body--sizeL, .spectrum:lang(zh) .spectrum-Body--sizeL {
        color: var(--cm-body-han-l-text-color, var(--cm-alias-text-color))
    }

    .spectrum:lang(ja) .spectrum-Body--sizeM, .spectrum:lang(ko) .spectrum-Body--sizeM, .spectrum:lang(zh) .spectrum-Body--sizeM {
        color: var(--cm-body-han-m-text-color, var(--cm-alias-text-color))
    }

    .spectrum:lang(ja) .spectrum-Body--sizeS, .spectrum:lang(ko) .spectrum-Body--sizeS, .spectrum:lang(zh) .spectrum-Body--sizeS {
        color: var(--cm-body-han-s-text-color, var(--cm-alias-text-color))
    }

    .spectrum:lang(ja) .spectrum-Body--sizeXS, .spectrum:lang(ko) .spectrum-Body--sizeXS, .spectrum:lang(zh) .spectrum-Body--sizeXS {
        color: var(--cm-body-han-xs-text-color, var(--cm-alias-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading--sizeXXXL, .spectrum:lang(ko) .spectrum-Heading--sizeXXXL, .spectrum:lang(zh) .spectrum-Heading--sizeXXXL {
        color: var(--cm-heading-xxxl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading--sizeXXL, .spectrum:lang(ko) .spectrum-Heading--sizeXXL, .spectrum:lang(zh) .spectrum-Heading--sizeXXL {
        color: var(--cm-heading-xxl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading--sizeXL, .spectrum:lang(ko) .spectrum-Heading--sizeXL, .spectrum:lang(zh) .spectrum-Heading--sizeXL {
        color: var(--cm-heading-xl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading--sizeL, .spectrum:lang(ko) .spectrum-Heading--sizeL, .spectrum:lang(zh) .spectrum-Heading--sizeL {
        color: var(--cm-heading-l-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading--sizeM, .spectrum:lang(ko) .spectrum-Heading--sizeM, .spectrum:lang(zh) .spectrum-Heading--sizeM {
        color: var(--cm-heading-m-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading--sizeS, .spectrum:lang(ko) .spectrum-Heading--sizeS, .spectrum:lang(zh) .spectrum-Heading--sizeS {
        color: var(--cm-heading-s-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading--sizeXS, .spectrum:lang(ko) .spectrum-Heading--sizeXS, .spectrum:lang(zh) .spectrum-Heading--sizeXS {
        color: var(--cm-heading-xs-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading--sizeXXS, .spectrum:lang(ko) .spectrum-Heading--sizeXXS, .spectrum:lang(zh) .spectrum-Heading--sizeXXS {
        color: var(--cm-heading-xxs-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading-sizeXXXL--light, .spectrum:lang(ko) .spectrum-Heading-sizeXXXL--light, .spectrum:lang(zh) .spectrum-Heading-sizeXXXL--light {
        color: var(--cm-heading-light-xxxl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading-sizeXXL--light, .spectrum:lang(ko) .spectrum-Heading-sizeXXL--light, .spectrum:lang(zh) .spectrum-Heading-sizeXXL--light {
        color: var(--cm-heading-light-xxl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading-sizeXL--light, .spectrum:lang(ko) .spectrum-Heading-sizeXL--light, .spectrum:lang(zh) .spectrum-Heading-sizeXL--light {
        color: var(--cm-heading-light-xl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading-sizeL--light, .spectrum:lang(ko) .spectrum-Heading-sizeL--light, .spectrum:lang(zh) .spectrum-Heading-sizeL--light {
        color: var(--cm-heading-light-l-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading-sizeXXXL--heavy, .spectrum:lang(ko) .spectrum-Heading-sizeXXXL--heavy, .spectrum:lang(zh) .spectrum-Heading-sizeXXXL--heavy {
        color: var(--cm-heading-heavy-xxxl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading-sizeXXL--heavy, .spectrum:lang(ko) .spectrum-Heading-sizeXXL--heavy, .spectrum:lang(zh) .spectrum-Heading-sizeXXL--heavy {
        color: var(--cm-heading-heavy-xxl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading-sizeXL--heavy, .spectrum:lang(ko) .spectrum-Heading-sizeXL--heavy, .spectrum:lang(zh) .spectrum-Heading-sizeXL--heavy {
        color: var(--cm-heading-heavy-xl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading-sizeL--heavy, .spectrum:lang(ko) .spectrum-Heading-sizeL--heavy, .spectrum:lang(zh) .spectrum-Heading-sizeL--heavy {
        color: var(--cm-heading-heavy-l-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading-sizeXXXL--heading, .spectrum:lang(ko) .spectrum-Heading-sizeXXXL--heading, .spectrum:lang(zh) .spectrum-Heading-sizeXXXL--heading {
        color: var(--cm-heading-xxxl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading-sizeXXL--heading, .spectrum:lang(ko) .spectrum-Heading-sizeXXL--heading, .spectrum:lang(zh) .spectrum-Heading-sizeXXL--heading {
        color: var(--cm-heading-xxl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading-sizeXL--heading, .spectrum:lang(ko) .spectrum-Heading-sizeXL--heading, .spectrum:lang(zh) .spectrum-Heading-sizeXL--heading {
        color: var(--cm-heading-xl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Heading-sizeL--heading, .spectrum:lang(ko) .spectrum-Heading-sizeL--heading, .spectrum:lang(zh) .spectrum-Heading-sizeL--heading {
        color: var(--cm-heading-l-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Detail--sizeXL, .spectrum:lang(ko) .spectrum-Detail--sizeXL, .spectrum:lang(zh) .spectrum-Detail--sizeXL {
        color: var(--cm-detail-xl-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Detail--sizeL, .spectrum:lang(ko) .spectrum-Detail--sizeL, .spectrum:lang(zh) .spectrum-Detail--sizeL {
        color: var(--cm-detail-l-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Detail--sizeM, .spectrum:lang(ko) .spectrum-Detail--sizeM, .spectrum:lang(zh) .spectrum-Detail--sizeM {
        color: var(--cm-detail-m-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Detail--sizeS, .spectrum:lang(ko) .spectrum-Detail--sizeS, .spectrum:lang(zh) .spectrum-Detail--sizeS {
        color: var(--cm-detail-s-text-color, var(--cm-alias-heading-text-color))
    }

    .spectrum:lang(ja) .spectrum-Code--sizeXL, .spectrum:lang(ko) .spectrum-Code--sizeXL, .spectrum:lang(zh) .spectrum-Code--sizeXL {
        color: var(--cm-code-xl-text-color, var(--cm-alias-text-color))
    }

    .spectrum:lang(ja) .spectrum-Code--sizeL, .spectrum:lang(ko) .spectrum-Code--sizeL, .spectrum:lang(zh) .spectrum-Code--sizeL {
        color: var(--cm-code-l-text-color, var(--cm-alias-text-color))
    }

    .spectrum:lang(ja) .spectrum-Code--sizeM, .spectrum:lang(ko) .spectrum-Code--sizeM, .spectrum:lang(zh) .spectrum-Code--sizeM {
        color: var(--cm-code-m-text-color, var(--cm-alias-text-color))
    }

    .spectrum:lang(ja) .spectrum-Code--sizeS, .spectrum:lang(ko) .spectrum-Code--sizeS, .spectrum:lang(zh) .spectrum-Code--sizeS {
        color: var(--cm-code-s-text-color, var(--cm-alias-text-color))
    }

    .spectrum:lang(ja) .spectrum-Code--sizeXS, .spectrum:lang(ko) .spectrum-Code--sizeXS, .spectrum:lang(zh) .spectrum-Code--sizeXS {
        color: var(--cm-code-xs-text-color, var(--cm-alias-text-color))
    }

    .spectrum, .spectrum-Body {
        color: var(--cm-body-m-text-color, var(--cm-alias-text-color))
    }
`;
export default styles;
//# sourceMappingURL=typography.css.js.map