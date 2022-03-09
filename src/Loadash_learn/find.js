
var lodash = require('lodash');

let json = {'a': 1, 'b': 4, 'c': 3};

console.log('find:');
const result = lodash.find(json, value => value >= 2);
console.log(result);