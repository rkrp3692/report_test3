"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const chai_1 = require("chai");
const calculator_1 = require("../../src/calculator");
(0, cucumber_1.Given)("a calculator", function () {
    // this.calculator = {
    //     divide(n1:number,n2:number):number{
    //         return n1/n2;
    //     }
    // }
    this.calculator = new calculator_1.Calculator();
});
(0, cucumber_1.When)("I want to divide {int} by {int}", function (n1, n2) {
    this.actual = this.calculator.divide(n1, n2);
});
(0, cucumber_1.Then)("the result is {int}", function (expected) {
    (0, chai_1.expect)(this.actual).to.be.equal(expected);
});
