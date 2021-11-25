import { __decorate } from "tslib";
/* Copyright 2021 i2c Inc. All rights reserved. */
import { property, html, ifDefined, } from '../../base/src/index';
export function LikeAnchor(constructor) {
    class LikeAnchorElement extends constructor {
        renderAnchor({ id, className, ariaHidden, 
        // prettier-ignore
        anchorContent = html `<slot></slot>`, }) {
            // prettier-ignore
            return html `<a
                    id=${id}
                    class=${ifDefined(className)}
                    href=${ifDefined(this.href)}
                    download=${ifDefined(this.download)}
                    target=${ifDefined(this.target)}
                    aria-label=${ifDefined(this.label)}
                    aria-hidden=${ifDefined(ariaHidden ? 'true' : undefined)}
                    rel=${ifDefined(this.rel)}
                >${anchorContent}</a>`;
        }
    }
    __decorate([
        property({ reflect: true })
    ], LikeAnchorElement.prototype, "download", void 0);
    __decorate([
        property()
    ], LikeAnchorElement.prototype, "label", void 0);
    __decorate([
        property({ reflect: true })
    ], LikeAnchorElement.prototype, "href", void 0);
    __decorate([
        property({ reflect: true })
    ], LikeAnchorElement.prototype, "target", void 0);
    __decorate([
        property({ reflect: true })
    ], LikeAnchorElement.prototype, "rel", void 0);
    return LikeAnchorElement;
}
//# sourceMappingURL=like-anchor.js.map