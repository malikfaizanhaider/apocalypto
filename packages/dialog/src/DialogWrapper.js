import { __decorate } from "tslib";
import { html, SpectrumElement, property, query, ifDefined, } from '../../base/src/index';
import '../../underlay/sp-underlay.js';
import '../../button/sp-button.js';
import '../sp-dialog.js';
import styles from '../../modal/src/modal.css.js';
import { FocusVisiblePolyfillMixin } from '../../shared/src/index';
/**
 * @element sp-dialog-wrapper
 *
 * @fires secondary - Announces that the "secondary" button has been clicked.
 * @fires cancel - Announces that the "cancel" button has been clicked.
 * @fires confirm - Announces that the "confirm" button has been clicked.
 * @fires close - Announces that the dialog has been closed.
 */
export class DialogWrapper extends FocusVisiblePolyfillMixin(SpectrumElement) {
    constructor() {
        super(...arguments);
        this.error = false;
        this.cancelLabel = '';
        this.confirmLabel = '';
        this.dismissable = false;
        this.footer = '';
        this.hero = '';
        this.heroLabel = '';
        this.noDivider = false;
        this.open = false;
        this.secondaryLabel = '';
        this.headline = '';
        this.responsive = false;
        this.underlay = false;
    }
    static get styles() {
        return [styles];
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
            else {
                this.dialog.focus();
            }
            /* c8 ignore next 3 */
        }
        else {
            super.focus();
        }
    }
    dismiss() {
        if (!this.dismissable) {
            return;
        }
        this.close();
    }
    clickSecondary() {
        this.dispatchEvent(new Event('secondary', {
            bubbles: true,
        }));
    }
    clickCancel() {
        this.dispatchEvent(new Event('cancel', {
            bubbles: true,
        }));
    }
    clickConfirm() {
        this.dispatchEvent(new Event('confirm', {
            bubbles: true,
        }));
    }
    close() {
        this.open = false;
        this.dispatchEvent(new Event('close', {
            bubbles: true,
        }));
    }
    render() {
        return html `
            ${this.underlay
            ? html `
                      <sp-underlay
                          ?open="${this.open}"
                          @click="${this.dismiss}"
                      ></sp-underlay>
                  `
            : html ``}
            <div class="modal ${this.mode}">
                <cm-dialog
                    ?dismissable="${this.dismissable}"
                    ?no-divider="${this.noDivider}"
                    ?error="${this.error}"
                    mode="${ifDefined(this.mode ? this.mode : undefined)}"
                    size="${ifDefined(this.size ? this.size : undefined)}"
                    @close="${this.close}"
                >
                    ${this.hero
            ? html `
                              <img
                                  src="${this.hero}"
                                  slot="hero"
                                  aria-hidden=${ifDefined(this.heroLabel ? undefined : 'true')}
                                  alt=${ifDefined(this.heroLabel
                ? this.heroLabel
                : undefined)}
                              />
                          `
            : html ``}
                    ${this.headline
            ? html ` <h2 slot="heading">${this.headline}</h2> `
            : html ``}
                    <slot></slot>
                    ${this.footer
            ? html ` <div slot="footer">${this.footer}</div> `
            : html ``}
                    ${this.secondaryLabel
            ? html `
                              <cm-button
                                  variant="primary"
                                  slot="button"
                                  @click=${this.clickSecondary}
                              >
                                  ${this.secondaryLabel}
                              </cm-button>
                          `
            : html ``}
                    ${this.cancelLabel
            ? html `
                              <cm-button
                                  variant="secondary"
                                  slot="button"
                                  @click=${this.clickCancel}
                              >
                                  ${this.cancelLabel}
                              </cm-button>
                          `
            : html ``}
                    ${this.confirmLabel
            ? html `
                              <cm-button
                                  variant="cta"
                                  slot="button"
                                  @click=${this.clickConfirm}
                              >
                                  ${this.confirmLabel}
                              </cm-button>
                          `
            : html ``}
                </cm-dialog>
            </div>
        `;
    }
}
__decorate([
    property({ type: Boolean, reflect: true })
], DialogWrapper.prototype, "error", void 0);
__decorate([
    property({ attribute: 'cancel-label' })
], DialogWrapper.prototype, "cancelLabel", void 0);
__decorate([
    property({ attribute: 'confirm-label' })
], DialogWrapper.prototype, "confirmLabel", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], DialogWrapper.prototype, "dismissable", void 0);
__decorate([
    property()
], DialogWrapper.prototype, "footer", void 0);
__decorate([
    property()
], DialogWrapper.prototype, "hero", void 0);
__decorate([
    property({ attribute: 'hero-label' })
], DialogWrapper.prototype, "heroLabel", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'no-divider' })
], DialogWrapper.prototype, "noDivider", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], DialogWrapper.prototype, "open", void 0);
__decorate([
    property({ type: String, reflect: true })
], DialogWrapper.prototype, "mode", void 0);
__decorate([
    property({ type: String, reflect: true })
], DialogWrapper.prototype, "size", void 0);
__decorate([
    property({ attribute: 'secondary-label' })
], DialogWrapper.prototype, "secondaryLabel", void 0);
__decorate([
    property()
], DialogWrapper.prototype, "headline", void 0);
__decorate([
    property({ type: Boolean })
], DialogWrapper.prototype, "responsive", void 0);
__decorate([
    property({ type: Boolean })
], DialogWrapper.prototype, "underlay", void 0);
__decorate([
    query('sp-dialog')
], DialogWrapper.prototype, "dialog", void 0);
//# sourceMappingURL=DialogWrapper.js.map