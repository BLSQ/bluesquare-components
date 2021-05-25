"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WordSvg = WordSvg;

var _react = _interopRequireDefault(require("react"));

var _SvgIcon = _interopRequireDefault(require("@material-ui/core/SvgIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function WordSvg(props) {
  var finalProps = _objectSpread(_objectSpread({}, props), {}, {
    viewBox: '-7 -3 40 40'
  });

  return /*#__PURE__*/_react["default"].createElement(_SvgIcon["default"], finalProps, /*#__PURE__*/_react["default"].createElement("g", null, /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11.184,0,3.021,8.619v22.9H28.498V0Zm-.721,3.624V7.443H6.847ZM26.528,29.55H4.991V9.413h7.443V1.97H26.528Z",
    transform: "translate(-3.021)"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    // eslint-disable-next-line max-len
    d: "M13.5,15.211a1.02243,1.02243,0,0,1,.335.197,1.583,1.583,0,0,1,.278.351,4.63323,4.63323,0,0,1,.268.532l.62,1.764-1.68,4.828L11.214,16.88c-.135-.372-.235-.679-.296-.92a2.01149,2.01149,0,0,1-.085-.435.31193.31193,0,0,1,.127-.256.78111.78111,0,0,1,.506-.129h.59V14.061H6.701V15.14h.37a1.50644,1.50644,0,0,1,.688.125.85109.85109,0,0,1,.346.367c.039.072.158.363.502,1.32l3.794,10.6h.852l2.564-7.236,2.579,7.236h.891l3.564-10.303A10.633,10.633,0,0,1,23.4,15.78a1.97318,1.97318,0,0,1,.232-.336.927.927,0,0,1,.209-.179.81631.81631,0,0,1,.244-.095,1.82682,1.82682,0,0,1,.361-.032h.37V14.059H20.355v1.079h.368a2.06347,2.06347,0,0,1,.84.142.25379.25379,0,0,1,.169.271,5.512,5.512,0,0,1-.383,1.462l-2.028,5.868-2.035-5.779a5.26922,5.26922,0,0,1-.394-1.515.40192.40192,0,0,1,.115-.33c.046-.045.174-.117.508-.117h.7V14.061H12.62V15.14h.369A1.61981,1.61981,0,0,1,13.5,15.211Z",
    transform: "translate(-3.021)"
  })));
}