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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.FieldLabel = void 0;
var index_1 = require("../../base/src/index");
require("@spectrum-web-components/icons-ui/icons/sp-icon-asterisk100.js");
var spectrum_icon_asterisk_css_js_1 = require("@spectrum-web-components/icon/src/spectrum-icon-asterisk.css.js");
var field_label_css_js_1 = require("./field-label.css.js");
/**
 * @element sp-field-label
 */
var FieldLabel = /** @class */ (function (_super) {
    __extends(FieldLabel, _super);
    function FieldLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.disabled = false;
        _this.id = '';
        _this["for"] = '';
        _this.required = false;
        return _this;
    }
    Object.defineProperty(FieldLabel, "styles", {
        get: function () {
            return [field_label_css_js_1["default"], spectrum_icon_asterisk_css_js_1["default"]];
        },
        enumerable: false,
        configurable: true
    });
    FieldLabel.prototype.handleClick = function () {
        if (!this.target || this.disabled)
            return;
        this.target.focus();
        var parent = this.getRootNode();
        var target = this.target;
        var targetParent = target.getRootNode();
        var targetHost = targetParent.host;
        if (targetParent === parent && target.forceFocusVisible) {
            target.forceFocusVisible();
        }
        else if (targetHost && targetHost.forceFocusVisible) {
            targetHost.forceFocusVisible();
        }
    };
    FieldLabel.prototype.manageFor = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parent, target, targetParent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this["for"]) {
                            return [2 /*return*/];
                        }
                        parent = this.getRootNode();
                        target = parent.querySelector("#" + this["for"]);
                        if (!target) {
                            return [2 /*return*/];
                        }
                        if (!(typeof target.updateComplete !== 'undefined')) return [3 /*break*/, 2];
                        return [4 /*yield*/, target.updateComplete];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.target = target.focusElement || target;
                        if (this.target) {
                            targetParent = this.target.getRootNode();
                            if (targetParent === parent) {
                                this.target.setAttribute('aria-labelledby', this.id);
                            }
                            else {
                                this.target.setAttribute('aria-label', (this.textContent || /* c8 ignore next */ '').trim());
                            }
                        }
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    FieldLabel.prototype.render = function () {
        return index_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <label>\n                <slot></slot>\n                ", "\n            </label>\n        "], ["\n            <label>\n                <slot></slot>\n                ",
            "\n            </label>\n        "])), this.required
            ? index_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                          <sp-icon-asterisk100\n                              class=\"requiredIcon spectrum-UIIcon-Asterisk100\"\n                          ></sp-icon-asterisk100>\n                      "], ["\n                          <sp-icon-asterisk100\n                              class=\"requiredIcon spectrum-UIIcon-Asterisk100\"\n                          ></sp-icon-asterisk100>\n                      "]))) : index_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""]))));
    };
    FieldLabel.prototype.firstUpdated = function (changes) {
        _super.prototype.firstUpdated.call(this, changes);
        if (!this.hasAttribute('id')) {
            this.setAttribute('id', this.tagName.toLowerCase() + "-" + FieldLabel.instanceCount++);
        }
        this.addEventListener('click', this.handleClick);
    };
    FieldLabel.prototype.updated = function (changes) {
        _super.prototype.updated.call(this, changes);
        if (changes.has('for') || changes.has('id')) {
            this.manageFor();
        }
    };
    /**
     * @private
     */
    FieldLabel.instanceCount = 0;
    __decorate([
        index_1.property({ type: Boolean, reflect: true })
    ], FieldLabel.prototype, "disabled");
    __decorate([
        index_1.property({ type: String })
    ], FieldLabel.prototype, "id");
    __decorate([
        index_1.property({ type: String })
    ], FieldLabel.prototype, "for");
    __decorate([
        index_1.property({ type: Boolean, reflect: true })
    ], FieldLabel.prototype, "required");
    __decorate([
        index_1.property({ type: String, reflect: true, attribute: 'side-aligned' })
    ], FieldLabel.prototype, "sideAligned");
    return FieldLabel;
}(index_1.SizedMixin(index_1.SpectrumElement)));
exports.FieldLabel = FieldLabel;
var templateObject_1, templateObject_2, templateObject_3;
