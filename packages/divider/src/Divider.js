import { __decorate } from "tslib";
import { html, SpectrumElement, property, SizedMixin, } from '../../base/src/index';
import styles from './divider.css.js';
/**
 * @element sp-divider
 */
export class Divider extends SizedMixin(SpectrumElement, {
    validSizes: ['s', 'm', 'l'],
}) {
    constructor() {
        super(...arguments);
        this.vertical = false;
    }
    render() {
        return html ``;
    }
    firstUpdated(changed) {
        super.firstUpdated(changed);
        this.setAttribute('role', 'separator');
    }
    updated(changed) {
        super.updated(changed);
        if (changed.has('vertical')) {
            if (this.vertical) {
                this.setAttribute('aria-orientation', 'vertical');
            }
            else {
                this.removeAttribute('aria-orientation');
            }
        }
    }
}
Divider.styles = [styles];
__decorate([
    property({ type: Boolean, reflect: true })
], Divider.prototype, "vertical", void 0);
//# sourceMappingURL=Divider.js.map