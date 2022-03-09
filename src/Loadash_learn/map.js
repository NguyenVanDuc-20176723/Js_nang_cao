var lodash = require('lodash');

let json = {'a': 1, 'b': 2};

console.log('map:');
const result = lodash.map(json, value => value**2);
console.log(result);