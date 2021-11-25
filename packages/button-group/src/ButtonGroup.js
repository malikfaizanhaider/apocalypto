import { __decorate } from "tslib";
import { html, SpectrumElement, property, } from '../../base/src/index';
import styles from './button-group.css.js';
/**
 * @element sp-button-group
 */
export class ButtonGroup extends SpectrumElement {
    constructor() {
        super(...arguments);
        this.vertical = false;
    }
    static get styles() {
        return [styles];
    }
    render() {
        return html ` <slot></slot> `;
    }
}
__decorate([
    property({ type: Boolean, reflect: true })
], ButtonGroup.prototype, "vertical", void 0);
//# sourceMappingURL=ButtonGroup.js.map