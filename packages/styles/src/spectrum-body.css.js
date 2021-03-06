/* Copyright 2021 i2c Inc. All rights reserved. */
import { css } from '../../base/src/index';
const styles = css `
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

    .spectrum-Body-strong, strong {
        font-weight: var(--cm-body-m-strong-text-font-weight, var(--cm-global-font-weight-bold))
    }

    .spectrum-Body-emphasis, em {
        font-style: var(--cm-body-m-emphasis-text-font-style, var(--cm-global-font-style-italic))
    }

    .spectrum-Body--serif {
        font-family: var(--cm-body-serif-m-text-font-family, var(--cm-alias-serif-text-font-family))
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

    .spectrum-Body {
        color: var(--cm-body-m-text-color, var(--cm-alias-text-color))
    }
`;
export default styles;
//# sourceMappingURL=spectrum-body.css.js.map