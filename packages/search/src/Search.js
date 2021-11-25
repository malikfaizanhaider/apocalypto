import { __decorate } from "tslib";
import { html, property, query, ifDefined, } from '../../base/src/index';
import { Textfield } from '../../textfield/src/index';
import '../../button/sp-clear-button.js';
import searchStyles from './search.css.js';
const stopPropagation = (event) => event.stopPropagation();
export class Search extends Textfield {
    constructor() {
        super(...arguments);
        this.label = 'Search';
        this.placeholder = 'Search';
    }
    static get styles() {
        return [...super.styles, searchStyles];
    }
    handleSubmit(event) {
        const applyDefault = this.dispatchEvent(new Event('submit', {
            cancelable: true,
            bubbles: true,
        }));
        if (!applyDefault) {
            event.preventDefault();
        }
    }
    handleKeydown(event) {
        const { code } = event;
        if (!this.value || code !== 'Escape') {
            return;
        }
        this.reset();
    }
    async reset() {
        this.value = '';
        await this.updateComplete;
        this.focusElement.dispatchEvent(new InputEvent('input', {
            bubbles: true,
            composed: true,
        }));
        // The native `change` event on an `input` element is not composed,
        // so this synthetic replication of a `change` event must not be
        // either as the `TextField` baseclass should only need to handle
        // the native variant of this interaction.
        this.focusElement.dispatchEvent(new InputEvent('change', {
            bubbles: true,
        }));
    }
    render() {
        return html `
            <form
                action=${ifDefined(this.action)}
                id="form"
                method=${ifDefined(this.method)}
                @submit=${this.handleSubmit}
                @reset=${this.reset}
                @keydown=${this.handleKeydown}
            >
                <iron-icon
                    icon="vaadin:search"
                    class="icon search icon-workflow "
                ></iron-icon>
                ${super.render()}
                ${this.value
            ? html `
                          <cm-clear-button
                              id="button"
                              label="Reset"
                              tabindex="-1"
                              type="reset"
                              @keydown=${stopPropagation}
                          ></cm-clear-button>
                      `
            : html ``}
            </form>
        `;
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        this.multiline = false;
    }
}
__decorate([
    property()
], Search.prototype, "action", void 0);
__decorate([
    property()
], Search.prototype, "label", void 0);
__decorate([
    property()
], Search.prototype, "method", void 0);
__decorate([
    property()
], Search.prototype, "placeholder", void 0);
__decorate([
    query('#form')
], Search.prototype, "form", void 0);
//# sourceMappingURL=Search.js.map