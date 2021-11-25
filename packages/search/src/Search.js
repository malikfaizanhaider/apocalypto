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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Search = void 0;
var index_1 = require("../../base/src/index");
var index_2 = require("../../textfield/src/index");
// @ts-ignore
require("../../button/sp-clear-button.js");
var search_css_js_1 = require("./search.css.js");
var stopPropagation = function (event) { return event.stopPropagation(); };
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = 'Search';
        _this.placeholder = 'Search';
        return _this;
    }
    Object.defineProperty(Search, "styles", {
        get: function () {
            return __spreadArrays(_super.styles, [search_css_js_1["default"]]);
        },
        enumerable: false,
        configurable: true
    });
    Search.prototype.handleSubmit = function (event) {
        var applyDefault = this.dispatchEvent(new Event('submit', {
            cancelable: true,
            bubbles: true
        }));
        if (!applyDefault) {
            event.preventDefault();
        }
    };
    Search.prototype.handleKeydown = function (event) {
        var code = event.code;
        if (!this.value || code !== 'Escape') {
            return;
        }
        this.reset();
    };
    Search.prototype.reset = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.value = '';
                        return [4 /*yield*/, this.updateComplete];
                    case 1:
                        _a.sent();
                        this.focusElement.dispatchEvent(new InputEvent('input', {
                            bubbles: true,
                            composed: true
                        }));
                        // The native `change` event on an `input` element is not composed,
                        // so this synthetic replication of a `change` event must not be
                        // either as the `TextField` baseclass should only need to handle
                        // the native variant of this interaction.
                        this.focusElement.dispatchEvent(new InputEvent('change', {
                            bubbles: true
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    Search.prototype.render = function () {
        return index_1.html(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <form\n                action=", "\n                id=\"form\"\n                method=", "\n                @submit=", "\n                @reset=", "\n                @keydown=", "\n            >\n                <iron-icon icon=\"vaadin:search\" class='icon search icon-workflow '></iron-icon>\n                ", "\n                ", "\n            </form>\n        "], ["\n            <form\n                action=", "\n                id=\"form\"\n                method=", "\n                @submit=", "\n                @reset=", "\n                @keydown=", "\n            >\n                <iron-icon icon=\"vaadin:search\" class='icon search icon-workflow '></iron-icon>\n                ", "\n                ",
            "\n            </form>\n        "])), index_1.ifDefined(this.action), index_1.ifDefined(this.method), this.handleSubmit, this.reset, this.handleKeydown, _super.prototype.render.call(this), this.value
            ? index_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n                          <cm-clear-button\n                              id=\"button\"\n                              label=\"Reset\"\n                              tabindex=\"-1\"\n                              type=\"reset\"\n                              @keydown=", "\n                          ></cm-clear-button>\n                      "], ["\n                          <cm-clear-button\n                              id=\"button\"\n                              label=\"Reset\"\n                              tabindex=\"-1\"\n                              type=\"reset\"\n                              @keydown=", "\n                          ></cm-clear-button>\n                      "])), stopPropagation) : index_1.html(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""]))));
    };
    Search.prototype.updated = function (changedProperties) {
        _super.prototype.updated.call(this, changedProperties);
        this.multiline = false;
    };
    __decorate([
        index_1.property()
    ], Search.prototype, "action");
    __decorate([
        index_1.property()
    ], Search.prototype, "label");
    __decorate([
        index_1.property()
    ], Search.prototype, "method");
    __decorate([
        index_1.property()
    ], Search.prototype, "placeholder");
    __decorate([
        index_1.query('#form')
    ], Search.prototype, "form");
    return Search;
}(index_2.Textfield));
exports.Search = Search;
var templateObject_1, templateObject_2, templateObject_3;
