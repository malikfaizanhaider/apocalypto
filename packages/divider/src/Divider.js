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
exports.Divider = void 0;
var index_1 = require("../../base/src/index");
var divider_css_js_1 = require("./divider.css.js");
/**
 * @element sp-divider
 */
var Divider = /** @class */ (function (_super) {
    __extends(Divider, _super);
    function Divider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vertical = false;
        return _this;
    }
    Divider.prototype.render = function () {
        return index_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
    };
    Divider.prototype.firstUpdated = function (changed) {
        _super.prototype.firstUpdated.call(this, changed);
        this.setAttribute('role', 'separator');
    };
    Divider.prototype.updated = function (changed) {
        _super.prototype.updated.call(this, changed);
        if (changed.has('vertical')) {
            if (this.vertical) {
                this.setAttribute('aria-orientation', 'vertical');
            }
            else {
                this.removeAttribute('aria-orientation');
            }
        }
    };
    Divider.styles = [divider_css_js_1["default"]];
    __decorate([
        index_1.property({ type: Boolean, reflect: true })
    ], Divider.prototype, "vertical");
    return Divider;
}(index_1.SizedMixin(index_1.SpectrumElement, {
    validSizes: ['s', 'm', 'l']
})));
exports.Divider = Divider;
var templateObject_1;
