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
exports.DialogWrapper = void 0;
var index_1 = require("../../base/src/index");
require("../../underlay/sp-underlay.js");
require("../../button/sp-button.js");
require("../sp-dialog.js");
// @ts-ignore
var modal_css_js_1 = require("../../modal/src/modal.css.js");
var index_2 = require("../../shared/src/index");
/**
 * @element sp-dialog-wrapper
 *
 * @fires secondary - Announces that the "secondary" button has been clicked.
 * @fires cancel - Announces that the "cancel" button has been clicked.
 * @fires confirm - Announces that the "confirm" button has been clicked.
 * @fires close - Announces that the dialog has been closed.
 */
var DialogWrapper = /** @class */ (function (_super) {
    __extends(DialogWrapper, _super);
    function DialogWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.error = false;
        _this.cancelLabel = '';
        _this.confirmLabel = '';
        _this.dismissable = false;
        _this.footer = '';
        _this.hero = '';
        _this.heroLabel = '';
        _this.noDivider = false;
        _this.open = false;
        _this.secondaryLabel = '';
        _this.headline = '';
        _this.responsive = false;
        _this.underlay = false;
        return _this;
    }
    Object.defineProperty(DialogWrapper, "styles", {
        get: function () {
            return [modal_css_js_1["default"]];
        },
        enumerable: false,
        configurable: true
    });
    DialogWrapper.prototype.focus = function () {
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
            else {
                this.dialog.focus();
            }
            /* c8 ignore next 3 */
        }
        else {
            _super.prototype.focus.call(this);
        }
    };
    DialogWrapper.prototype.dismiss = function () {
        if (!this.dismissable) {
            return;
        }
        this.close();
    };
    DialogWrapper.prototype.clickSecondary = function () {
        this.dispatchEvent(new Event('secondary', {
            bubbles: true
        }));
    };
    DialogWrapper.prototype.clickCancel = function () {
        this.dispatchEvent(new Event('cancel', {
            bubbles: true
        }));
    };
    DialogWrapper.prototype.clickConfirm = function () {
        this.dispatchEvent(new Event('confirm', {
            bubbles: true
        }));
    };
    DialogWrapper.prototype.close = function () {
        this.open = false;
        this.dispatchEvent(new Event('close', {
            bubbles: true
        }));
    };
    DialogWrapper.prototype.render = function () {
        return index_1.html(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n            ", "\n            <div class='modal ", "'>\n                <cm-dialog\n                    ?dismissable='", "'\n                    ?no-divider='", "'\n                    ?error='", "'\n                    mode='", "'\n                    size='", "'\n                    @close='", "'\n                >\n                    ", "\n                    ", "\n                    <slot></slot>\n                    ", "\n                    ", "\n                    ", "\n                    ", "\n                </cm-dialog>\n            </div>\n        "], ["\n            ",
            "\n            <div class='modal ", "'>\n                <cm-dialog\n                    ?dismissable='", "'\n                    ?no-divider='", "'\n                    ?error='", "'\n                    mode='", "'\n                    size='", "'\n                    @close='", "'\n                >\n                    ",
            "\n                    ",
            "\n                    <slot></slot>\n                    ",
            "\n                    ",
            "\n                    ",
            "\n                    ",
            "\n                </cm-dialog>\n            </div>\n        "])), this.underlay
            ? index_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                    <sp-underlay\n                        ?open='", "'\n                        @click='", "'\n                    ></sp-underlay>\n                "], ["\n                    <sp-underlay\n                        ?open='", "'\n                        @click='", "'\n                    ></sp-underlay>\n                "])), this.open, this.dismiss) : index_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""]))), this.mode, this.dismissable, this.noDivider, this.error, index_1.ifDefined(this.mode ? this.mode : undefined), index_1.ifDefined(this.size ? this.size : undefined), this.close, this.hero
            ? index_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n                            <img\n                                src=\"", "\"\n                                slot=\"hero\"\n                                aria-hidden=", "\n                                alt=", "\n                            />\n                        "], ["\n                            <img\n                                src=\"", "\"\n                                slot=\"hero\"\n                                aria-hidden=",
                "\n                                alt=",
                "\n                            />\n                        "])), this.hero, index_1.ifDefined(this.heroLabel ? undefined : 'true'), index_1.ifDefined(this.heroLabel
                ? this.heroLabel
                : undefined)) : index_1.html(templateObject_4 || (templateObject_4 = __makeTemplateObject([""], [""]))), this.headline
            ? index_1.html(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n                            <h2 slot=\"heading\">", "</h2>\n                        "], ["\n                            <h2 slot=\"heading\">", "</h2>\n                        "])), this.headline) : index_1.html(templateObject_6 || (templateObject_6 = __makeTemplateObject([""], [""]))), this.footer
            ? index_1.html(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n                            <div slot=\"footer\">", "</div>\n                        "], ["\n                            <div slot=\"footer\">", "</div>\n                        "])), this.footer) : index_1.html(templateObject_8 || (templateObject_8 = __makeTemplateObject([""], [""]))), this.secondaryLabel
            ? index_1.html(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n                            <cm-button\n                                variant=\"primary\"\n                                slot=\"button\"\n                                @click=", "\n                            >\n                                ", "\n                            </cm-button>\n                        "], ["\n                            <cm-button\n                                variant=\"primary\"\n                                slot=\"button\"\n                                @click=", "\n                            >\n                                ", "\n                            </cm-button>\n                        "])), this.clickSecondary, this.secondaryLabel) : index_1.html(templateObject_10 || (templateObject_10 = __makeTemplateObject([""], [""]))), this.cancelLabel
            ? index_1.html(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n                            <cm-button\n                                variant=\"secondary\"\n                                slot=\"button\"\n                                @click=", "\n                            >\n                                ", "\n                            </cm-button>\n                        "], ["\n                            <cm-button\n                                variant=\"secondary\"\n                                slot=\"button\"\n                                @click=", "\n                            >\n                                ", "\n                            </cm-button>\n                        "])), this.clickCancel, this.cancelLabel) : index_1.html(templateObject_12 || (templateObject_12 = __makeTemplateObject([""], [""]))), this.confirmLabel
            ? index_1.html(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n                            <cm-button\n                                variant=\"cta\"\n                                slot=\"button\"\n                                @click=", "\n                            >\n                                ", "\n                            </cm-button>\n                        "], ["\n                            <cm-button\n                                variant=\"cta\"\n                                slot=\"button\"\n                                @click=", "\n                            >\n                                ", "\n                            </cm-button>\n                        "])), this.clickConfirm, this.confirmLabel) : index_1.html(templateObject_14 || (templateObject_14 = __makeTemplateObject([""], [""]))));
    };
    __decorate([
        index_1.property({ type: Boolean, reflect: true })
    ], DialogWrapper.prototype, "error");
    __decorate([
        index_1.property({ attribute: 'cancel-label' })
    ], DialogWrapper.prototype, "cancelLabel");
    __decorate([
        index_1.property({ attribute: 'confirm-label' })
    ], DialogWrapper.prototype, "confirmLabel");
    __decorate([
        index_1.property({ type: Boolean, reflect: true })
    ], DialogWrapper.prototype, "dismissable");
    __decorate([
        index_1.property()
    ], DialogWrapper.prototype, "footer");
    __decorate([
        index_1.property()
    ], DialogWrapper.prototype, "hero");
    __decorate([
        index_1.property({ attribute: 'hero-label' })
    ], DialogWrapper.prototype, "heroLabel");
    __decorate([
        index_1.property({ type: Boolean, reflect: true, attribute: 'no-divider' })
    ], DialogWrapper.prototype, "noDivider");
    __decorate([
        index_1.property({ type: Boolean, reflect: true })
    ], DialogWrapper.prototype, "open");
    __decorate([
        index_1.property({ type: String, reflect: true })
    ], DialogWrapper.prototype, "mode");
    __decorate([
        index_1.property({ type: String, reflect: true })
    ], DialogWrapper.prototype, "size");
    __decorate([
        index_1.property({ attribute: 'secondary-label' })
    ], DialogWrapper.prototype, "secondaryLabel");
    __decorate([
        index_1.property()
    ], DialogWrapper.prototype, "headline");
    __decorate([
        index_1.property({ type: Boolean })
    ], DialogWrapper.prototype, "responsive");
    __decorate([
        index_1.property({ type: Boolean })
    ], DialogWrapper.prototype, "underlay");
    __decorate([
        index_1.query('sp-dialog')
    ], DialogWrapper.prototype, "dialog");
    return DialogWrapper;
}(index_2.FocusVisiblePolyfillMixin(index_1.SpectrumElement)));
exports.DialogWrapper = DialogWrapper;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15;
