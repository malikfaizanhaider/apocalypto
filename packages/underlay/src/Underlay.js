import { __decorate } from "tslib";
import { html, SpectrumElement, property, } from '../../base/src/index';
import styles from './underlay.css.js';
/**
 * @element sp-underlay
 */
export class Underlay extends SpectrumElement {
    constructor() {
        super(...arguments);
        this.open = false;
    }
    static get styles() {
        return [styles];
    }
    render() {
        return html ``;
    }
}
__decorate([
    property({ type: Boolean })
], Underlay.prototype, "open", void 0);
//# sourceMappingURL=Underlay.js.map