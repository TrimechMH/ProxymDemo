/**
 * factorial.js 
 * @author  TrimecheMH
 * @Copyright Proxym-it 
 * Created at 2/19/2016
 * Last update at "change me"
 * Module Calculator
 * this function is created to calculate the value of n factorial  !!!
 */
/**
 *
 * @param {number} n
 * @returns {*}
 */
module.exports = function factorial (n) {

    if (n < 0) return 'NaN';
    if (n === 0) return 1;
    return n*factorial(n-1);
};
