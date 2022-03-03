"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _assert = _interopRequireDefault(require("assert"));

var _fetchData = require("./fetchData");

describe('createUrl', function () {
  it('should create an url', function () {
    var url = (0, _fetchData.createUrl)({
      foo: 11,
      bar: 12,
      baz: 'hello'
    });
    (0, _assert["default"])(url === '/charts/foo/11/bar/12/baz/hello');
  });
});