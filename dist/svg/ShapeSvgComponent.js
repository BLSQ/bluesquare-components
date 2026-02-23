"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShapeSvg = ShapeSvg;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _SvgIcon = _interopRequireDefault(require("@mui/material/SvgIcon"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ShapeSvg(props) {
  var finalProps = _objectSpread(_objectSpread({}, props), {}, {
    viewBox: '-5 -5 55 55'
  });
  return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], finalProps, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M46,14V2H34V6H14V2H2V14H6V34H2V46H14V42H34v4H46V34H42V14ZM6,6h4v4H6Zm4,36H6V38h4Zm24-4H14V34H10V14h4V10H34v4h4V34H34Zm8,4H38V38h4ZM38,10V6h4v4Z"
  }));
}