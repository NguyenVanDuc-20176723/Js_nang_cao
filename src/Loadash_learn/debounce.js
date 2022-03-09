var lodash = require("lodash");
lodash.debounce(function(){console.log(123)}, 3000, {"leading": true, "trailing": false})