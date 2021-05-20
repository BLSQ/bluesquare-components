"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PdfSvg = PdfSvg;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function PdfSvg(props) {
  var finalProps = _objectSpread(_objectSpread({}, props), {}, {
    viewBox: '-4 -3 40 40'
  });

  return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], finalProps, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.2,12.3c0.2,1.8,0.3,5.1-1.1,7.8c-0.1,0.2-0.2,0.4-0.3,0.6c-2.3,0.7-4.8,2.1-5.2,3.6c-0.2,0.6,0,1.2,0.4,1.6 c0.4,0.5,1,0.7,1.6,0.7c1.4,0,2.9-1.4,4.6-4.2c0.6-0.1,4-0.6,4.7-0.6c2,2,3.6,3,4.9,3c0.8,0,1.5-0.4,1.9-1.1 c0.3-0.5,0.3-1.1,0-1.6c-0.8-1.5-4-2.1-5.9-2.2c-0.2-0.2-0.3-0.4-0.5-0.6c-2-2.2-2.8-5.5-3-7.2c0-0.4-0.1-0.7-0.1-1 c-0.1-0.9-0.7-1-1-1c-0.3,0-0.6,0.1-0.7,0.3c-0.3,0.3-0.3,0.7-0.2,1C13.1,11.7,13.1,12,13.2,12.3z M8.6,24.6 c0.2-0.2,0.6-0.5,1.1-0.8C9.2,24.3,8.8,24.5,8.6,24.6z M22.5,22.9c-0.2,0-0.5-0.1-1-0.4C22,22.6,22.3,22.7,22.5,22.9z M14.9,17.9 c0.4,0.7,0.8,1.4,1.2,2c-0.2,0-1.8,0.2-1.9,0.2C14.5,19.5,14.7,18.7,14.9,17.9z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.1,0L3,8.5v22.7h25.3V0H11.1z M10.4,3.6v3.8H6.8L10.4,3.6z M26.3,29.3H4.9v-20h7.4V2h14L26.3,29.3L26.3,29.3z"
  })));
}