import { __decorate } from "tslib";
import { html, SpectrumElement, property, query, ifDefined, } from '../../base/src/index';
import '../../divider/sp-divider.js';
import '../../action-button/sp-action-button.js';
import '../../button-group/sp-button-group.js';
import crossStyles from '@spectrum-web-components/icon/src/spectrum-icon-cross.css.js';
import '@spectrum-web-components/icons-ui/icons/sp-icon-cross500.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-alert.js';
import { ObserveSlotPresence, FocusVisiblePolyfillMixin, } from '../../shared/src/index';
import styles from './dialog.css.js';
/**
 * @element sp-dialog
 *
 * @slot hero - Accepts a hero image to display at the top of the dialog
 * @slot heading - Acts as the heading of the dialog. This should be an actual heading tag `<h1-6 />`
 * @slot - Content not addressed to a specific slot will be interpreted as the main content of the dialog
 * @slot footer - Content addressed to the `footer` will be placed below the main content and to the side of any `[slot='button']` content
 * @slot button - Button elements addressed to this slot may be placed below the content when not delivered in a fullscreen mode
 * @fires close - Announces that the dialog has been closed.
 */
export class Dialog extends FocusVisiblePolyfillMixin(ObserveSlotPresence(SpectrumElement, [
    '[slot="hero"]',
    '[slot="footer"]',
    '[slot="button"]',
])) {
    constructor() {
        super(...arguments);
        this.error = false;
        this.dismissable = false;
        this.noDivider = false;
        this.shouldManageTabOrderForScrolling = () => {
            const { offsetHeight, scrollHeight } = this.contentElement;
            if (offsetHeight < scrollHeight) {
                this.contentElement.tabIndex = 0;
            }
            else {
                this.contentElement.removeAttribute('tabindex');
            }
        };
    }
    static get styles() {
        return [styles, crossStyles];
    }
    get hasFooter() {
        return this.getSlotContentPresence('[slot="footer"]');
    }
    get hasButtons() {
        return this.getSlotContentPresence('[slot="button"]');
    }
    get hasHero() {
        return this.getSlotContentPresence('[slot="hero"]');
    }
    focus() {
        if (this.shadowRoot) {
            const firstFocusable = this.shadowRoot.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [focusable]');
            if (firstFocusable) {
                if (firstFocusable.updateComplete) {
                    firstFocusable.updateComplete.then(() => firstFocusable.focus());
                    /* c8 ignore next 3 */
                }
                else {
                    firstFocusable.focus();
                }
                this.removeAttribute('tabindex');
            }
            /* c8 ignore next 3 */
        }
        else {
            super.focus();
        }
    }
    close() {
        this.dispatchEvent(new Event('close', {
            bubbles: true,
        }));
    }
    render() {
        return html `
            <div class="grid">
                <slot name="hero"></slot>
                <slot
                    name="heading"
                    class=${ifDefined(this.hasHero ? this.hasHero : undefined)}
                ></slot>
                ${this.error
            ? html `
                          <sp-icon-alert class="type-icon"></sp-icon-alert>
                      `
            : html ``}
                ${this.noDivider
            ? html ``
            : html `
                          <sp-divider size="m" class="divider"></sp-divider>
                      `}
                <div class="content">
                    <slot @slotchange=${this.onContentSlotChange}></slot>
                </div>
                ${this.hasFooter
            ? html `
                          <div class="footer">
                              <slot name="footer"></slot>
                          </div>
                      `
            : html ``}
                ${this.hasButtons
            ? html `
                          <cm-button-group
                              class="buttonGroup ${this.hasFooter
                ? ''
                : 'buttonGroup--noFooter'}"
                          >
                              <slot name="button"></slot>
                          </cm-button-group>
                      `
            : html ``}
                ${this.dismissable
            ? html `
                          <cm-action-button
                              class="close-button"
                              label="Close"
                              quiet
                              size="m"
                              @click=${this.close}
                          >
                              <iron-icon icon="vaadin:close-small"></iron-icon>
                          </cm-action-button>
                      `
            : html ``}
            </div>
        `;
    }
    shouldUpdate(changes) {
        if (changes.has('mode') && !!this.mode) {
            this.dismissable = false;
        }
        if (changes.has('dismissable') && this.dismissable) {
            this.dismissable = !this.mode;
        }
        return super.shouldUpdate(changes);
    }
    onContentSlotChange() {
        this.shouldManageTabOrderForScrolling();
    }
    connectedCallback() {
        super.connectedCallback();
        window.addEventListener('resize', this.shouldManageTabOrderForScrolling);
    }
    disconnectedCallback() {
        window.removeEventListener('resize', this.shouldManageTabOrderForScrolling);
        super.disconnectedCallback();
    }
}
__decorate([
    query('.content')
], Dialog.prototype, "contentElement", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Dialog.prototype, "error", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Dialog.prototype, "dismissable", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'no-divider' })
], Dialog.prototype, "noDivider", void 0);
__decorate([
    property({ type: String, reflect: true })
], Dialog.prototype, "mode", void 0);
__decorate([
    property({ type: String, reflect: true })
], Dialog.prototype, "size", void 0);
//# sourceMappingURL=Dialog.js.map