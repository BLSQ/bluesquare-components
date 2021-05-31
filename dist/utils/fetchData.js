"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUrl = createUrl;

function createUrl(params) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/charts';
  // Create a url from an params object
  // e.g.: `{foo: 11, bar: 22} => '/foo/11/bar/22'`
  Object.keys(params).forEach(function (key) {
    var value = params[key];

    if (value) {
      url += "/".concat(key, "/").concat(value); // eslint-disable-line
    }
  });
  return url;
}