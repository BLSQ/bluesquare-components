"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.XmlSvg = XmlSvg;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function XmlSvg(props) {
  var finalProps = _objectSpread(_objectSpread({}, props), {}, {
    viewBox: '0 0 40 40'
  });

  return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], finalProps, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.2,3L7,11.6v22.9h25.5V3H15.2z M14.5,6.6v3.8h-3.7L14.5,6.6z M30.5,32.5H9V12.4h7.4V5h14.1V32.5z"
  }), /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.4,28.1L10.7,31H9.4l2.4-4l-2.2-3.9h1.3l1.6,2.7l1.6-2.7h1.3L13,27l2.5,4h-1.3L12.4,28.1z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16.4,23.1h1.1l2.2,5.2l2.2-5.2h1.1V31h-1.2v-4.9h0l-1.6,3.8h-1l-1.6-3.8h0V31h-1.2V23.1z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M25,23.1h1.2v6.8H30V31h-5V23.1z"
  }))));
}