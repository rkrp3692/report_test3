import {Given,When,Then} from "@cucumber/cucumber";
import {expect} from "chai";
import { Calculator } from "../../src/calculator";


Given("a calculator",function(){
    // this.calculator = {
    //     divide(n1:number,n2:number):number{
    //         return n1/n2;
    //     }
    // }
    this.calculator = new Calculator();
});


When("I want to divide {int} by {int}",function(n1:number,n2:number){
    this.actual = this.calculator.divide(n1,n2);
});


Then("the result is {int}",function(expected: number){
    expect(this.actual).to.be.equal(expected);

});