goog.require('goog.dom');
goog.require('goog.dom.TagName');

var ele = goog.dom.createDom(goog.dom.TagName.P, {}, "hello world!!");

export { ele };