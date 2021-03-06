import { __decorate } from "tslib";
import { property } from 'lit-element';
export function SizedMixin(constructor, { validSizes = ['s', 'm', 'l', 'xl'], noDefaultSize, } = {}) {
    class SizedElement extends constructor {
        constructor() {
            super(...arguments);
            this._size = 'm';
        }
        get size() {
            return this._size || 'm';
        }
        set size(value) {
            const defaultSize = noDefaultSize ? null : 'm';
            const size = (value
                ? value.toLocaleLowerCase()
                : value);
            const validSize = (validSizes.includes(size)
                ? size
                : defaultSize);
            if (validSize) {
                this.setAttribute('size', validSize);
            }
            if (this._size === validSize) {
                return;
            }
            const oldSize = this._size;
            this._size = validSize;
            this.requestUpdate('size', oldSize);
        }
        firstUpdated(changes) {
            super.firstUpdated(changes);
            if (!this.hasAttribute('size') && !noDefaultSize) {
                this.setAttribute('size', this.size);
            }
        }
    }
    __decorate([
        property({ type: String, reflect: true })
    ], SizedElement.prototype, "size", null);
    return SizedElement;
}
//# sourceMappingURL=sizedMixin.js.map