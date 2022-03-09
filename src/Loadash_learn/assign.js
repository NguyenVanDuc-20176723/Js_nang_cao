var lodash = require("lodash");
function Foo() {
    this.a = 1;
}
   
function Bar() {
    this.c = 3;
}

const result = lodash.assign({ 'a': 0 }, new Foo, new Bar);
console.log(result);