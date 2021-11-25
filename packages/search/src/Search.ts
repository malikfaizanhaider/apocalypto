import {
    html,
    CSSResultArray,
    PropertyValues,
    TemplateResult,
    property,
    query,
    ifDefined,
} from '../../base/src/index';

import { Textfield } from '../../textfield/src/index';

import '../../button/sp-clear-button.js';

import searchStyles from './search.css.js';

const stopPropagation = (event: Event): void => event.stopPropagation();

export class Search extends Textfield {
    public static get styles(): CSSResultArray {
        return [...super.styles, searchStyles];
    }

    @property()
    public action?: string;

    @property()
    public label = 'Search';

    @property()
    public method?: 'GET' | 'POST' | 'dialog';

    @property()
    public placeholder = 'Search';

    @query('#form')
    public form!: HTMLFormElement;

    private handleSubmit(event: Event): void {
        const applyDefault = this.dispatchEvent(
            new Event('submit', {
                cancelable: true,
                bubbles: true,
            })
        );
        if (!applyDefault) {
            event.preventDefault();
        }
    }

    private handleKeydown(event: KeyboardEvent): void {
        const { code } = event;
        if (!this.value || code !== 'Escape') {
            return;
        }
        this.reset();
    }

    public async reset(): Promise<void> {
        this.value = '';
        await this.updateComplete;
        this.focusElement.dispatchEvent(
            new InputEvent('input', {
                bubbles: true,
                composed: true,
            })
        );
        // The native `change` event on an `input` element is not composed,
        // so this synthetic replication of a `change` event must not be
        // either as the `TextField` baseclass should only need to handle
        // the native variant of this interaction.
        this.focusElement.dispatchEvent(
            new InputEvent('change', {
                bubbles: true,
            })
        );
    }

    protected render(): TemplateResult {
        return html`
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
                    ? html`
                          <cm-clear-button
                              id="button"
                              label="Reset"
                              tabindex="-1"
                              type="reset"
                              @keydown=${stopPropagation}
                          ></cm-clear-button>
                      `
                    : html``}
            </form>
        `;
    }

    public updated(changedProperties: PropertyValues): void {
        super.updated(changedProperties);
        this.multiline = false;
    }
}
