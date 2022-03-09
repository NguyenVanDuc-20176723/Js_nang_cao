var lodash = require("lodash");

console.log("groupBy:");
const result1 = lodash.groupBy([6.1, 4.2, 6.3], Math.floor);
console.log(result1);
const result2 = lodash.groupBy(['one', 'two', 'three'], 'length');
console.log(result2);