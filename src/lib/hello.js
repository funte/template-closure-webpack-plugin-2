goog.provide('Hello');

goog.require('goog.dom');
goog.require('goog.dom.TagName');

Hello.inject = function () {
  var ele = goog.dom.createDom(goog.dom.TagName.H1, { 'style': 'background-color:#EEE' },
    'Hello World!!');
  goog.dom.appendChild(document.body, ele);
}