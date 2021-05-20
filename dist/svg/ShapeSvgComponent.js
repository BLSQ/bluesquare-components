"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShapeSvg = ShapeSvg;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ShapeSvg(props) {
  var finalProps = _objectSpread(_objectSpread({}, props), {}, {
    viewBox: '-5 -5 55 55'
  });

  return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], finalProps, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M46,14V2H34V6H14V2H2V14H6V34H2V46H14V42H34v4H46V34H42V14ZM6,6h4v4H6Zm4,36H6V38h4Zm24-4H14V34H10V14h4V10H34v4h4V34H34Zm8,4H38V38h4ZM38,10V6h4v4Z"
  }));
}