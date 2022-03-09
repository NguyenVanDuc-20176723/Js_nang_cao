var lodash = require('lodash');

let arr = [1, 2, 3, 4, 5];

console.log("Without:");
const result = lodash.without(arr, 1, 3, 10);
console.log(result);
