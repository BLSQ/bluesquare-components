"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireWildcard(require("prop-types"));

var _core = require("@material-ui/core");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var RadioComponent = function RadioComponent(_ref) {
  var options = _ref.options,
      name = _ref.name,
      _onChange = _ref.onChange,
      value = _ref.value;
  return /*#__PURE__*/_react["default"].createElement(_core.RadioGroup, {
    name: name,
    value: value,
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    }
  }, options.map(function (o) {
    return /*#__PURE__*/_react["default"].createElement(_core.FormControlLabel, {
      key: o.value,
      value: o.value,
      control: /*#__PURE__*/_react["default"].createElement(_core.Radio, {
        color: "primary"
      }),
      label: o.label,
      disabled: o.disabled
    });
  }));
};

exports.Radio = RadioComponent;
RadioComponent.defaultProps = {
  options: [],
  onChange: function onChange() {},
  value: '' // name: '',

};
RadioComponent.propTypes = {
  options: _propTypes["default"].array,
  name: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func,
  value: (0, _propTypes.oneOfType)(_propTypes["default"].string, _propTypes["default"].bool)
};