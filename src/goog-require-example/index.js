// use traditional goog.require(without return) import the Foo, this will
// create a global variable.
// never use goog.provide defines too many top level namespace.
goog.require('Foo');
console.log(Foo);
module.exports = { Foo };
