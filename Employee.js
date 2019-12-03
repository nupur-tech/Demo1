"use strict";
exports.__esModule = true;
var Employee = /** @class */ (function () {
    /*private age: number;
    private isMarried:boolean;
*/
    function Employee(empname, age, isMarried) {
        this.age = age;
        this.isMarried = isMarried;
        this.ename = empname;
        this.age = age;
        this.isMarried = isMarried;
    }
    Employee.prototype.getEmployeeDetails = function () {
        console.log("Employee Name: ", this.ename);
        console.log("Employee Age: ", this.age);
        console.log("Employee Married: ", this.isMarried);
    };
    return Employee;
}());
exports.Employee = Employee;
