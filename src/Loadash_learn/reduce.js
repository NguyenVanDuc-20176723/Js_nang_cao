
var lodash = require('lodash');

let arr = [1, 2, 3, 4, 5];
console.log("reduce:");
let sum1 = lodash.reduce(arr, (sum, value) => sum + value, 5);
console.log("sum1:", sum1);
let sum2 = lodash.reduce(arr, (sum, value) => sum + value);
console.log("sum2:", sum2);