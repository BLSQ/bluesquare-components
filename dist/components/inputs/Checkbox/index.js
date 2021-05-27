"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CheckboxComponent = function CheckboxComponent(_ref) {
  var value = _ref.value,
      disabled = _ref.disabled,
      label = _ref.label,
      _onChange = _ref.onChange;
  return /*#__PURE__*/_react["default"].createElement(_core.FormControlLabel, {
    disabled: disabled,
    control: /*#__PURE__*/_react["default"].createElement(_core.Checkbox, {
      color: "primary",
      checked: value === true,
      onChange: function onChange(event) {
        return _onChange(event.target.checked);
      },
      value: "checked",
      disabled: disabled
    }),
    label: label
  });
};

exports.Checkbox = CheckboxComponent;
CheckboxComponent.defaultProps = {
  value: false,
  disabled: false,
  onChange: function onChange() {}
};
CheckboxComponent.propTypes = {
  value: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  label: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func
};