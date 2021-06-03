"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

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
      label: o.label
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
  value: _propTypes["default"].string
};