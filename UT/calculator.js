/**
 * calculator.js
 * @author  TrimecheMH
 * @Copyright Proxym-it
 * Created at 2/19/2016
 * Last update at "change me"
 * Module TDD
 * write your description here !!!
 */
// expect.js expect() style assertions
var expect=require('chai').expect;

//the first test for all the calculator operations
describe('Test calculator....',  function(){

    //testing for the factorial operation
    describe('Testing factorial ...',function(){

        //call the factorial function from factorial module
        var factorial = require('./factorial.js');

        //this test is written to test the factorial of Zero
        it('should return 1 when given 0 ...',function(){
            expect(factorial(0)).to.equal(1);
        });

        //this test is written to test the factorial of positive number
        it('should return 6 when given 3 ...',function(){
           expect(factorial(3)).to.equal(6);
        });

        //this test should return NaN when given negative number
        it('should return Not a Number when given negative ...',function(){
            expect(factorial(-2)).to.equal('NaN');
        });

    });
});

