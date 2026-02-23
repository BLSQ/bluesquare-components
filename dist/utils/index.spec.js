"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _assert = _interopRequireDefault(require("assert"));
var _index = require("./index");
describe('substituteVars', function () {
  it('should substitute values in an object', function () {
    var templateObj = {
      foo: 11,
      bar: '${a}',
      // eslint-disable-line
      baz: {
        x: '${y}' // eslint-disable-line
      }
    };
    var subs = {
      a: 22,
      y: 'hello'
    };
    var expectedObj = {
      foo: 11,
      bar: 22,
      baz: {
        x: 'hello'
      }
    };
    var newObj = (0, _index.substituteVars)(templateObj, subs);
    (0, _assert["default"])(newObj.foo === expectedObj.foo);
    (0, _assert["default"])(newObj.bar === expectedObj.bar);
    (0, _assert["default"])(newObj.baz.x === expectedObj.baz.x);
    (0, _assert["default"])(newObj !== templateObj);
  });
});