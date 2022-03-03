"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _assert = _interopRequireDefault(require("assert"));

var _index = require("./index");

describe('clone', function () {
  it('should clone an obj', function () {
    var a = {
      foo: 11,
      bar: {
        baz: 22
      }
    };
    var b = (0, _index.clone)(a);
    (0, _assert["default"])(a !== b);
    (0, _assert["default"])(b.foo === a.foo);
    (0, _assert["default"])(b.bar !== a.bar);
  });
});
describe('deepEqual', function () {
  it('should compare primitives', function () {
    var a = 1;
    var b = 1;
    (0, _assert["default"])((0, _index.deepEqual)(a, b), 'Primitives are equal');
    b = 2;
    (0, _assert["default"])(!(0, _index.deepEqual)(a, b), 'Primitives are not equal');
  });
  it('should compare objects', function () {
    var a = {
      foo: 11,
      bar: 22,
      baz: {
        y: 4
      }
    };
    var b = {
      bar: 22,
      foo: 11,
      baz: {
        y: 4
      }
    };
    (0, _assert["default"])((0, _index.deepEqual)(a, b), 'Objects are equal');
    b.baz.y = 5;
    (0, _assert["default"])(!(0, _index.deepEqual)(a, b), 'Objects are not equal');
  });
  it('should compare arrays', function () {
    var a = [1, 2, 3];
    var b = [1, 2, 3];
    (0, _assert["default"])((0, _index.deepEqual)(a, b), 'Arrays are equal');
    b = [1, 2, 2];
    (0, _assert["default"])(!(0, _index.deepEqual)(a, b), 'Arrays are not equal');
  });
  it('should ignore null and undefined values', function () {
    var a = {
      x: 1,
      y: null,
      z: undefined
    };
    var b = {
      x: 1
    };
    (0, _assert["default"])((0, _index.deepEqual)(a, b, true), 'Should be equal without null values');
    (0, _assert["default"])(!(0, _index.deepEqual)(a, b), 'Should not be equal with null values');
  });
});
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

    _assert["default"].deepEqual(newObj, expectedObj);

    (0, _assert["default"])(newObj !== templateObj);
  });
});