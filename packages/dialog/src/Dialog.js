"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Dialog = void 0;
var index_1 = require("../../base/src/index");
require("../../divider/sp-divider.js");
require("../../action-button/sp-action-button.js");
require("../../button-group/sp-button-group.js");
var spectrum_icon_cross_css_js_1 = require("@spectrum-web-components/icon/src/spectrum-icon-cross.css.js");
require("@spectrum-web-components/icons-ui/icons/sp-icon-cross500.js");
require("@spectrum-web-components/icons-workflow/icons/sp-icon-alert.js");
var index_2 = require("../../shared/src/index");
var dialog_css_js_1 = require("./dialog.css.js");
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
var Dialog = /** @class */ (function (_super) {
    __extends(Dialog, _super);
    function Dialog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.error = false;
        _this.dismissable = false;
        _this.noDivider = false;
        _this.shouldManageTabOrderForScrolling = function () {
            var _a = _this.contentElement, offsetHeight = _a.offsetHeight, scrollHeight = _a.scrollHeight;
            if (offsetHeight < scrollHeight) {
                _this.contentElement.tabIndex = 0;
            }
            else {
                _this.contentElement.removeAttribute('tabindex');
            }
        };
        return _this;
    }
    Object.defineProperty(Dialog, "styles", {
        get: function () {
            return [dialog_css_js_1["default"], spectrum_icon_cross_css_js_1["default"]];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dialog.prototype, "hasFooter", {
        get: function () {
            return this.getSlotContentPresence('[slot="footer"]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dialog.prototype, "hasButtons", {
        get: function () {
            return this.getSlotContentPresence('[slot="button"]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dialog.prototype, "hasHero", {
        get: function () {
            return this.getSlotContentPresence('[slot="hero"]');
        },
        enumerable: false,
        configurable: true
    });
    Dialog.prototype.focus = function () {
        if (this.shadowRoot) {
            var firstFocusable_1 = this.shadowRoot.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"]), [focusable]');
            if (firstFocusable_1) {
                if (firstFocusable_1.updateComplete) {
                    firstFocusable_1.updateComplete.then(function () {
                        return firstFocusable_1.focus();
                    });
                    /* c8 ignore next 3 */
                }
                else {
                    firstFocusable_1.focus();
                }
                this.removeAttribute('tabindex');
            }
            /* c8 ignore next 3 */
        }
        else {
            _super.prototype.focus.call(this);
        }
    };
    Dialog.prototype.close = function () {
        this.dispatchEvent(new Event('close', {
            bubbles: true
        }));
    };
    Dialog.prototype.render = function () {
        return index_1.html(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n            <div class=\"grid\">\n                <slot name=\"hero\"></slot>\n                <slot\n                    name=\"heading\"\n                    class=", "\n                ></slot>\n                ", "\n                ", "\n                <div class=\"content\">\n                    <slot @slotchange=", "></slot>\n                </div>\n                ", "\n                ", "\n                ", "\n            </div>\n        "], ["\n            <div class=\"grid\">\n                <slot name=\"hero\"></slot>\n                <slot\n                    name=\"heading\"\n                    class=", "\n                ></slot>\n                ",
            "\n                ",
            "\n                <div class=\"content\">\n                    <slot @slotchange=", "></slot>\n                </div>\n                ",
            "\n                ",
            "\n                ",
            "\n            </div>\n        "])), index_1.ifDefined(this.hasHero ? this.hasHero : undefined), this.error
            ? index_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                          <sp-icon-alert class=\"type-icon\"></sp-icon-alert>\n                      "], ["\n                          <sp-icon-alert class=\"type-icon\"></sp-icon-alert>\n                      "]))) : index_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""]))), this.noDivider
            ? index_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject([""], [""]))) : index_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n                          <sp-divider size=\"m\" class=\"divider\"></sp-divider>\n                      "], ["\n                          <sp-divider size=\"m\" class=\"divider\"></sp-divider>\n                      "]))), this.onContentSlotChange, this.hasFooter
            ? index_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                          <div class=\"footer\">\n                              <slot name=\"footer\"></slot>\n                          </div>\n                      "], ["\n                          <div class=\"footer\">\n                              <slot name=\"footer\"></slot>\n                          </div>\n                      "]))) : index_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject([""], [""]))), this.hasButtons
            ? index_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                          <cm-button-group\n                              class=\"buttonGroup ", "\"\n                          >\n                              <slot name=\"button\"></slot>\n                          </cm-button-group>\n                      "], ["\n                          <cm-button-group\n                              class=\"buttonGroup ",
                "\"\n                          >\n                              <slot name=\"button\"></slot>\n                          </cm-button-group>\n                      "])), this.hasFooter
                ? ''
                : 'buttonGroup--noFooter') : index_1.html(templateObject_8 || (templateObject_8 = __makeTemplateObject([""], [""]))), this.dismissable
            ? index_1.html(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n                          <cm-action-button\n                              class=\"close-button\"\n                              label=\"Close\"\n                              quiet\n                              size=\"m\"\n                              @click=", "\n                          >\n                              <iron-icon icon=\"vaadin:close-small\"></iron-icon>\n                          </cm-action-button>\n                      "], ["\n                          <cm-action-button\n                              class=\"close-button\"\n                              label=\"Close\"\n                              quiet\n                              size=\"m\"\n                              @click=", "\n                          >\n                              <iron-icon icon=\"vaadin:close-small\"></iron-icon>\n                          </cm-action-button>\n                      "])), this.close) : index_1.html(templateObject_10 || (templateObject_10 = __makeTemplateObject([""], [""]))));
    };
    Dialog.prototype.shouldUpdate = function (changes) {
        if (changes.has('mode') && !!this.mode) {
            this.dismissable = false;
        }
        if (changes.has('dismissable') && this.dismissable) {
            this.dismissable = !this.mode;
        }
        return _super.prototype.shouldUpdate.call(this, changes);
    };
    Dialog.prototype.onContentSlotChange = function () {
        this.shouldManageTabOrderForScrolling();
    };
    Dialog.prototype.connectedCallback = function () {
        _super.prototype.connectedCallback.call(this);
        window.addEventListener('resize', this.shouldManageTabOrderForScrolling);
    };
    Dialog.prototype.disconnectedCallback = function () {
        window.removeEventListener('resize', this.shouldManageTabOrderForScrolling);
        _super.prototype.disconnectedCallback.call(this);
    };
    __decorate([
        index_1.query('.content')
    ], Dialog.prototype, "contentElement");
    __decorate([
        index_1.property({ type: Boolean, reflect: true })
    ], Dialog.prototype, "error");
    __decorate([
        index_1.property({ type: Boolean, reflect: true })
    ], Dialog.prototype, "dismissable");
    __decorate([
        index_1.property({ type: Boolean, reflect: true, attribute: 'no-divider' })
    ], Dialog.prototype, "noDivider");
    __decorate([
        index_1.property({ type: String, reflect: true })
    ], Dialog.prototype, "mode");
    __decorate([
        index_1.property({ type: String, reflect: true })
    ], Dialog.prototype, "size");
    return Dialog;
}(index_2.FocusVisiblePolyfillMixin(index_2.ObserveSlotPresence(index_1.SpectrumElement, [
    '[slot="hero"]',
    '[slot="footer"]',
    '[slot="button"]',
]))));
exports.Dialog = Dialog;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;
