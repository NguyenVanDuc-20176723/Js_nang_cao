
var lodash = require('lodash');

let arr = [1, 2];
let json = {'a': 1, 'b': 2};

console.log('forEach:');
lodash.forEach(arr, (value, key) => console.log(`${key} => ${value}`));

console.log('each:');
lodash.each(json, (value, key) => console.log(`${key} => ${value}`));