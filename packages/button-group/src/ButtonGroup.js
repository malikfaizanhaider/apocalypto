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
exports.ButtonGroup = void 0;
var index_1 = require("../../base/src/index");
var button_group_css_js_1 = require("./button-group.css.js");
/**
 * @element sp-button-group
 */
var ButtonGroup = /** @class */ (function (_super) {
    __extends(ButtonGroup, _super);
    function ButtonGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vertical = false;
        return _this;
    }
    Object.defineProperty(ButtonGroup, "styles", {
        get: function () {
            return [button_group_css_js_1["default"]];
        },
        enumerable: false,
        configurable: true
    });
    ButtonGroup.prototype.render = function () {
        return index_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            <slot></slot>\n        "], ["\n            <slot></slot>\n        "])));
    };
    __decorate([
        index_1.property({ type: Boolean, reflect: true })
    ], ButtonGroup.prototype, "vertical");
    return ButtonGroup;
}(index_1.SpectrumElement));
exports.ButtonGroup = ButtonGroup;
var templateObject_1;
