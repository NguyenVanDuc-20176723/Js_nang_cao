const object = {"name": "duc"};
const other = {"name": "duc"};

var lodash = require("lodash");

console.log("isString\n-----");
console.log(lodash.isString("duc"));
console.log(lodash.isString(["a", "b"]));

console.log("\nisBoolean\n-----");
console.log(lodash.isBoolean(false));
console.log(lodash.isBoolean(0));

console.log("\nisArray\n-----");
console.log(lodash.isArray([1, 2]));
console.log(lodash.isArray(2));

console.log("\nisInteger\n-----");
console.log(lodash.isInteger(7));
console.log(lodash.isInteger(7.2));
console.log(lodash.isInteger("7"));

console.log("\nisObject\n-----");
console.log(lodash.isObject(object));
console.log(lodash.isObject("object"));

console.log("\nisEqual\n-----");
console.log(lodash.isEqual(object, other));
console.log(object === other);

console.log("\nisEmpty\n-----");
console.log(lodash.isEmpty(null));
console.log(lodash.isEmpty([1,2]));
console.log(lodash.isEmpty([]));

console.log("\nisUndefined\n-----");
console.log(lodash.isUndefined(void 0));
console.log(lodash.isUndefined(null));

console.log("\nisNaN\n-----");
console.log(lodash.isNaN(NaN));
console.log(lodash.isNaN(new Number(NaN)));
console.log(isNaN(undefined));
console.log(lodash.isNaN(undefined));
console.log(lodash.isNaN('a7a'));


console.log("\nisDate:");
console.log(lodash.isDate(new Date));
console.log(lodash.isDate('Mon April 23 2012'));

