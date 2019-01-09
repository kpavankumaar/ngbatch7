"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var basicunit_1 = require("./basicunit");
var Samsung = /** @class */ (function (_super) {
    __extends(Samsung, _super);
    // mboard:string;
    function Samsung() {
        return _super.call(this, 'abcd', 'def') || this;
    }
    return Samsung;
}(basicunit_1.BasicUnit));
var A9 = new Samsung();
