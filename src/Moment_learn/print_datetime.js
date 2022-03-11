const moment = require('moment');

time_str = "2022-03-08T12:12:12";

datetime_old = moment(time_str);
timestamp_old = datetime_old.format("X");
timestamp_new = parseInt(timestamp_old) + 24*60*60; // 2022-03-09T12:12:12
datetime_new = moment.unix(timestamp_new);

datetime_old_str = `datetime old: Nam ${datetime_old.year()} \
Thang ${datetime_old.month()} Ngay ${datetime_old.date()} \
Gio ${datetime_old.hour()} Phut ${datetime_old.minute()} Giay ${datetime_old.second()}`;

datetime_new_str = `datetime new: Nam ${datetime_new.year()} \
Thang ${datetime_new.month()} Ngay ${datetime_new.date()} \
Gio ${datetime_new.hour()} Phut ${datetime_new.minute()} Giay ${datetime_new.second()}`;

console.log(datetime_old_str);
console.log(datetime_new_str);

