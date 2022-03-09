var lodash = require("lodash");
const obj = [{"age": 23, "name": "duc"}];
const result = lodash.clone(obj);
console.log(result[0] === obj[0]);