import {
    html,
    SpectrumElement,
    TemplateResult,
    property,
    CSSResultArray,
    query,
    ifDefined,
} from '../../base/src/index';

import '../../underlay/sp-underlay.js';
import '../../button/sp-button.js';

import '../sp-dialog.js';
import styles from '../../modal/src/modal.css.js';
import { Dialog } from './Dialog.js';
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
    public static get styles(): CSSResultArray {
        return [styles];
    }

    @property({ type: Boolean, reflect: true })
    public error = false;

    @property({ attribute: 'cancel-label' })
    public cancelLabel = '';

    @property({ attribute: 'confirm-label' })
    public confirmLabel = '';

    @property({ type: Boolean, reflect: true })
    public dismissable = false;

    @property()
    public footer = '';

    @property()
    public hero = '';

    @property({ attribute: 'hero-label' })
    public heroLabel = '';

    @property({ type: Boolean, reflect: true, attribute: 'no-divider' })
    public noDivider = false;

    @property({ type: Boolean, reflect: true })
    public open = false;

    @property({ type: String, reflect: true })
    public mode?: 'fullscreen' | 'fullscreenTakeover';

    @property({ type: String, reflect: true })
    public size?: 'small' | 'medium' | 'large' | 'alert';

    @property({ attribute: 'secondary-label' })
    public secondaryLabel = '';

    @property()
    public headline = '';

    @property({ type: Boolean })
    public responsive = false;

    @property({ type: Boolean })
    public underlay = false;

    @query('sp-dialog')
    private dialog!: Dialog;

    public focus(): void {
        if (this.shadowRoot) {
            const firstFocusable = this.shadowRoot.querySelector(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [focusable]'
            ) as SpectrumElement;
            if (firstFocusable) {
                if (firstFocusable.updateComplete) {
                    firstFocusable.updateComplete.then(() =>
                        firstFocusable.focus()
                    );
                    /* c8 ignore next 3 */
                } else {
                    firstFocusable.focus();
                }
                this.removeAttribute('tabindex');
            } else {
                this.dialog.focus();
            }
            /* c8 ignore next 3 */
        } else {
            super.focus();
        }
    }

    private dismiss(): void {
        if (!this.dismissable) {
            return;
        }
        this.close();
    }

    private clickSecondary(): void {
        this.dispatchEvent(
            new Event('secondary', {
                bubbles: true,
            })
        );
    }

    private clickCancel(): void {
        this.dispatchEvent(
            new Event('cancel', {
                bubbles: true,
            })
        );
    }

    private clickConfirm(): void {
        this.dispatchEvent(
            new Event('confirm', {
                bubbles: true,
            })
        );
    }

    public close(): void {
        this.open = false;
        this.dispatchEvent(
            new Event('close', {
                bubbles: true,
            })
        );
    }

    protected render(): TemplateResult {
        return html`
            ${this.underlay
                ? html`
                      <sp-underlay
                          ?open="${this.open}"
                          @click="${this.dismiss}"
                      ></sp-underlay>
                  `
                : html``}
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
                        ? html`
                              <img
                                  src="${this.hero}"
                                  slot="hero"
                                  aria-hidden=${ifDefined(
                                      this.heroLabel ? undefined : 'true'
                                  )}
                                  alt=${ifDefined(
                                      this.heroLabel
                                          ? this.heroLabel
                                          : undefined
                                  )}
                              />
                          `
                        : html``}
                    ${this.headline
                        ? html` <h2 slot="heading">${this.headline}</h2> `
                        : html``}
                    <slot></slot>
                    ${this.footer
                        ? html` <div slot="footer">${this.footer}</div> `
                        : html``}
                    ${this.secondaryLabel
                        ? html`
                              <cm-button
                                  variant="primary"
                                  slot="button"
                                  @click=${this.clickSecondary}
                              >
                                  ${this.secondaryLabel}
                              </cm-button>
                          `
                        : html``}
                    ${this.cancelLabel
                        ? html`
                              <cm-button
                                  variant="secondary"
                                  slot="button"
                                  @click=${this.clickCancel}
                              >
                                  ${this.cancelLabel}
                              </cm-button>
                          `
                        : html``}
                    ${this.confirmLabel
                        ? html`
                              <cm-button
                                  variant="cta"
                                  slot="button"
                                  @click=${this.clickConfirm}
                              >
                                  ${this.confirmLabel}
                              </cm-button>
                          `
                        : html``}
                </cm-dialog>
            </div>
        `;
    }
}
