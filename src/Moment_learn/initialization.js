const moment = require('moment');

console.log("Datetime");
console.log("string: ",moment("2021-12-01 12:12:12"));
console.log("string + format: ", moment("2021-12-01 12:12:12", "YYYY-MM-DD HH:mm:ss"));
console.log("array: ", moment([2021, 11, 01, 12, 12, 12]));
console.log("object: ", moment({years: 2021, months: 11, date: 1, hours: 12, minutes: 12, seconds: 12}));
console.log("object Date: ", moment(new Date(2021, 12, 1, 12, 12, 12)));

console.log("Now:");
console.log(moment());
console.log(moment(undefined));
console.log(moment([]));
console.log(moment({}));

