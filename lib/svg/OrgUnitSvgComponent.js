"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrgUnitSvg = OrgUnitSvg;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function OrgUnitSvg(props) {
  var finalProps = _objectSpread(_objectSpread({}, props), {}, {
    viewBox: '0 0 85 85'
  });

  return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], finalProps, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M17.518403,78.3591 C16.2139001,78.3570957 15.0595734,77.5172438 14.660803,76.28 L0.1493927,31.77603 C-0.249658449,30.5438778 0.191427305,29.1958057 1.242723,28.43453 L39.235803,0.93513 C40.2882476,0.175265921 41.7117584,0.175265921 42.764203,0.93513 L80.757302,28.43453 C81.8085865,29.1958138 82.2496596,30.5438843 81.850602,31.77603 L67.339202,76.28 C66.9404317,77.5172435 65.7861055,78.3570953 64.481603,78.3591 L17.518403,78.3591 L17.518403,78.3591 Z M19.705003,72.3692 L62.295003,72.3692 L75.464602,31.99883 L41.000003,7.07363 L6.535413,31.99883 L19.705003,72.3692 Z"
  }));
}