/* Copyright 2021 i2c Inc. All rights reserved. */
import { css } from '../../base/src/index';
const styles = css `
.spectrum-Detail{font-family:var(--cm-heading-m-text-font-family,var(--cm-alias-body-text-font-family))}.spectrum-Detail-strong,strong{font-weight:var(--cm-detail-m-strong-text-font-weight,var(--cm-global-font-weight-black))}.spectrum-Detail-emphasis,em{font-style:var(--cm-detail-m-emphasis-text-font-style,var(--cm-global-font-style-italic))}.spectrum-Detail--light{font-style:var(--cm-detail-light-m-text-font-style,var(--cm-global-font-style-regular));font-weight:var(--cm-detail-light-m-text-font-weight,var(--cm-alias-detail-text-font-weight-light))}.spectrum-Detail--serif{font-family:var(--cm-body-serif-m-text-font-family,var(--cm-alias-serif-text-font-family))}.spectrum-Detail--sizeXL{font-size:var(--cm-detail-xl-text-size,var(--cm-global-dimension-font-size-200));font-weight:var(--cm-detail-xl-text-font-weight,var(--cm-alias-detail-text-font-weight));line-height:var(--cm-detail-xl-text-line-height,var(--cm-alias-body-text-line-height));font-style:var(--cm-detail-xl-text-font-style,var(--cm-global-font-style-regular));letter-spacing:var(--cm-detail-xl-text-letter-spacing,var(--cm-global-font-letter-spacing-medium));text-transform:var(--cm-detail-xl-text-transform,uppercase);margin-top:0;margin-bottom:0}.spectrum-Detail--sizeXL em{font-size:var(--cm-detail-xl-emphasis-text-size,var(--cm-global-dimension-font-size-200));font-weight:var(--cm-detail-xl-emphasis-text-font-weight,var(--cm-alias-detail-text-font-weight));line-height:var(--cm-detail-xl-emphasis-text-line-height,var(--cm-alias-body-text-line-height));font-style:var(--cm-detail-xl-emphasis-text-font-style,var(--cm-global-font-style-italic));letter-spacing:var(--cm-detail-xl-emphasis-text-letter-spacing,var(--cm-global-font-letter-spacing-medium));text-transform:var(--cm-detail-xl-emphasis-text-transform,uppercase);margin-top:0;margin-bottom:0}.spectrum-Detail--sizeXL strong{font-size:var(--cm-detail-xl-strong-text-size,var(--cm-global-dimension-font-size-200));font-weight:var(--cm-detail-xl-strong-text-font-weight,var(--cm-global-font-weight-black));line-height:var(--cm-detail-xl-strong-text-line-height,var(--cm-alias-body-text-line-height));font-style:var(--cm-detail-xl-strong-text-font-style,var(--cm-global-font-style-regular));letter-spacing:var(--cm-detail-xl-strong-text-letter-spacing,var(--cm-global-font-letter-spacing-medium));text-transform:var(--cm-detail-xl-strong-text-transform,uppercase);margin-top:0;margin-bottom:0}.spectrum-Detail--sizeL{font-size:var(--cm-detail-l-text-size,var(--cm-global-dimension-font-size-100));font-weight:var(--cm-detail-l-text-font-weight,var(--cm-alias-detail-text-font-weight));line-height:var(--cm-detail-l-text-line-height,var(--cm-alias-body-text-line-height));font-style:var(--cm-detail-l-text-font-style,var(--cm-global-font-style-regular));letter-spacing:var(--cm-detail-l-text-letter-spacing,var(--cm-global-font-letter-spacing-medium));text-transform:var(--cm-detail-l-text-transform,uppercase);margin-top:0;margin-bottom:0}.spectrum-Detail--sizeL em{font-size:var(--cm-detail-l-emphasis-text-size,var(--cm-global-dimension-font-size-100));font-weight:var(--cm-detail-l-emphasis-text-font-weight,var(--cm-alias-detail-text-font-weight));line-height:var(--cm-detail-l-emphasis-text-line-height,var(--cm-alias-body-text-line-height));font-style:var(--cm-detail-l-emphasis-text-font-style,var(--cm-global-font-style-italic));letter-spacing:var(--cm-detail-l-emphasis-text-letter-spacing,var(--cm-global-font-letter-spacing-medium));text-transform:var(--cm-detail-l-emphasis-text-transform,uppercase);margin-top:0;margin-bottom:0}.spectrum-Detail--sizeL strong{font-size:var(--cm-detail-l-strong-text-size,var(--cm-global-dimension-font-size-100));font-weight:var(--cm-detail-l-strong-text-font-weight,var(--cm-global-font-weight-black));line-height:var(--cm-detail-l-strong-text-line-height,var(--cm-alias-body-text-line-height));font-style:var(--cm-detail-l-strong-text-font-style,var(--cm-global-font-style-regular));letter-spacing:var(--cm-detail-l-strong-text-letter-spacing,var(--cm-global-font-letter-spacing-medium));text-transform:var(--cm-detail-l-strong-text-transform,uppercase);margin-top:0;margin-bottom:0}.spectrum-Detail--sizeM{font-size:var(--cm-detail-m-text-size,var(--cm-global-dimension-font-size-75));font-weight:var(--cm-detail-m-text-font-weight,var(--cm-alias-detail-text-font-weight));line-height:var(--cm-detail-m-text-line-height,var(--cm-alias-body-text-line-height));font-style:var(--cm-detail-m-text-font-style,var(--cm-global-font-style-regular));letter-spacing:var(--cm-detail-m-text-letter-spacing,var(--cm-global-font-letter-spacing-medium));text-transform:var(--cm-detail-m-text-transform,uppercase);margin-top:0;margin-bottom:0}.spectrum-Detail--sizeM em{font-size:var(--cm-detail-m-emphasis-text-size,var(--cm-global-dimension-font-size-75));font-weight:var(--cm-detail-m-emphasis-text-font-weight,var(--cm-alias-detail-text-font-weight));line-height:var(--cm-detail-m-emphasis-text-line-height,var(--cm-alias-body-text-line-height));font-style:var(--cm-detail-m-emphasis-text-font-style,var(--cm-global-font-style-italic));letter-spacing:var(--cm-detail-m-emphasis-text-letter-spacing,var(--cm-global-font-letter-spacing-medium));text-transform:var(--cm-detail-m-emphasis-text-transform,uppercase);margin-top:0;margin-bottom:0}.spectrum-Detail--sizeM strong{font-size:var(--cm-detail-m-strong-text-size,var(--cm-global-dimension-font-size-75));font-weight:var(--cm-detail-m-strong-text-font-weight,var(--cm-global-font-weight-black));line-height:var(--cm-detail-m-strong-text-line-height,var(--cm-alias-body-text-line-height));font-style:var(--cm-detail-m-strong-text-font-style,var(--cm-global-font-style-regular));letter-spacing:var(--cm-detail-m-strong-text-letter-spacing,var(--cm-global-font-letter-spacing-medium));text-transform:var(--cm-detail-m-strong-text-transform,uppercase);margin-top:0;margin-bottom:0}.spectrum-Detail--sizeS{font-size:var(--cm-detail-s-text-size,var(--cm-global-dimension-font-size-50));font-weight:var(--cm-detail-s-text-font-weight,var(--cm-alias-detail-text-font-weight));line-height:var(--cm-detail-s-text-line-height,var(--cm-alias-body-text-line-height));font-style:var(--cm-detail-s-text-font-style,var(--cm-global-font-style-regular));letter-spacing:var(--cm-detail-s-text-letter-spacing,var(--cm-global-font-letter-spacing-medium));text-transform:var(--cm-detail-s-text-transform,uppercase);margin-top:0;margin-bottom:0}.spectrum-Detail--sizeS em{font-size:var(--cm-detail-s-emphasis-text-size,var(--cm-global-dimension-font-size-50));font-weight:var(--cm-detail-s-emphasis-text-font-weight,var(--cm-alias-detail-text-font-weight));line-height:var(--cm-detail-s-emphasis-text-line-height,var(--cm-alias-body-text-line-height));font-style:var(--cm-detail-s-emphasis-text-font-style,var(--cm-global-font-style-italic));letter-spacing:var(--cm-detail-s-emphasis-text-letter-spacing,var(--cm-global-font-letter-spacing-medium));text-transform:var(--cm-detail-s-emphasis-text-transform,uppercase);margin-top:0;margin-bottom:0}.spectrum-Detail--sizeS strong{font-size:var(--cm-detail-s-strong-text-size,var(--cm-global-dimension-font-size-50));font-weight:var(--cm-detail-s-strong-text-font-weight,var(--cm-global-font-weight-black));line-height:var(--cm-detail-s-strong-text-line-height,var(--cm-alias-body-text-line-height));font-style:var(--cm-detail-s-strong-text-font-style,var(--cm-global-font-style-regular));letter-spacing:var(--cm-detail-s-strong-text-letter-spacing,var(--cm-global-font-letter-spacing-medium));text-transform:var(--cm-detail-s-strong-text-transform,uppercase);margin-top:0;margin-bottom:0}.spectrum-Detail--sizeXL{color:var(--cm-detail-xl-text-color,var(--cm-alias-heading-text-color))}.spectrum-Detail--sizeL{color:var(--cm-detail-l-text-color,var(--cm-alias-heading-text-color))}.spectrum-Detail--sizeM{color:var(--cm-detail-m-text-color,var(--cm-alias-heading-text-color))}.spectrum-Detail--sizeS{color:var(--cm-detail-s-text-color,var(--cm-alias-heading-text-color))}
`;
export default styles;
//# sourceMappingURL=spectrum-detail.css.js.map