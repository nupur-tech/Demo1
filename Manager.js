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
exports.__esModule = true;
var Employee_1 = require("./Employee");
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(ename, age, isMarried, skill, mobile, email) {
        var _this = _super.call(this, ename, age, isMarried) || this;
        _this.skill = skill;
        _this.skill = skill;
        _this.mobile = mobile;
        _this.email = email;
        return _this;
    }
    Manager.prototype.getContactDetails = function () {
        console.log(this.mobile);
        console.log(this.email);
    };
    Manager.prototype.getEmployeeDetails = function () {
        _super.prototype.getEmployeeDetails.call(this);
        console.log('Skills ', this.skill);
        this.getContactDetails();
    };
    return Manager;
}(Employee_1.Employee));
exports.Manager = Manager;
