"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextSvg = TextSvg;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function TextSvg(props) {
  var finalProps = _objectSpread(_objectSpread({}, props), {}, {
    viewBox: '-4 -3 40 40'
  });

  return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], finalProps, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.2,0L3,8.6v22.9h25.5V0H11.2z M10.5,3.6v3.8H6.8L10.5,3.6z M26.5,29.5H5V9.4h7.4V2h14.1V29.5z"
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    points: "19.1,18.6 21,18.6 21,26.8 22.6,26.8 22.6,18.6 24.4,18.6 24.4,17.2 19.1,17.2 "
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    points: "7.1,18.6 9,18.6 9,26.8 10.6,26.8 10.6,18.6 12.4,18.6 12.4,17.2 7.1,17.2"
  }), /*#__PURE__*/_react["default"].createElement("polygon", {
    points: "18.9,17.2 17.2,17.2 15.8,20.5 14.3,17.2 12.6,17.2 14.8,21.8 12.4,26.8 14.1,26.8 15.7,23.1 17.3,26.8 19.1,26.8 16.7,21.8"
  })));
}