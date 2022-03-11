const moment = require('moment');

time_str = "2022-03-08T12:12:12";
timestamp_second = moment(time_str).format("X");
timestamp_millisecond = moment(time_str).format("x");
console.log("time: ", time_str);
console.log("timestamp second: ", timestamp_second);
console.log("timestamp millisecond: ", timestamp_millisecond);
console.log("Unix milliseconds:", moment(parseInt(timestamp_millisecond)));
console.log("Unix seconds:", moment.unix(parseInt(timestamp_second)));
