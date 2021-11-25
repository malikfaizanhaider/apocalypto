import { __decorate } from "tslib";
import { html, SpectrumElement, property, ifDefined, } from '../../base/src/index';
import avatarStyles from './avatar.css.js';
/**
 * Avatar component
 */
export class Avatar extends SpectrumElement {
    constructor() {
        super(...arguments);
        this.label = '';
        this.title = '';
        this.subtitle = '';
        this.src = '';
    }
    static get styles() {
        return [avatarStyles];
    }
    render() {
        return html `
            <div>
                <img
                    alt=${ifDefined(this.label || undefined)}
                    src=${this.src}
                />
            </div>
            <div>
                ${this.title ? html `<div>something</div>` : html ``}
                ${this.subtitle ? html `<div>something</div>` : html ``}
            </div>
        `;
    }
}
__decorate([
    property()
], Avatar.prototype, "label", void 0);
__decorate([
    property()
], Avatar.prototype, "title", void 0);
__decorate([
    property()
], Avatar.prototype, "subtitle", void 0);
__decorate([
    property()
], Avatar.prototype, "src", void 0);
//# sourceMappingURL=Avatar.js.map