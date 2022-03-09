var lodash = require("lodash");

console.log(lodash.includes([1, 2, 3], 1)); // => true
console.log(lodash.includes([1, 2, 3], 1, 2)); // => false
console.log(lodash.includes({ 'a': 1, 'b': 2 }, 1)); // => true
console.log(lodash.includes('abcd', 'bc')); // => true