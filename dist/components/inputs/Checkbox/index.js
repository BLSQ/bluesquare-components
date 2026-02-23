"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
/**
 * We use JSDoc here to define the types for TypeScript, 
 * specifically to ensure onChange is known to accept a boolean argument.
 * * @param {Object} props
 * @param {boolean} [props.value]
 * @param {boolean} [props.disabled]
 * @param {string} [props.label]
 * @param {(checked: boolean) => void} [props.onChange]
 * @param {string} props.keyValue
 * @param {boolean} [props.required]
 * @param {string} [props.dataTestId]
 */

var CheckboxComponent = exports.Checkbox = function CheckboxComponent(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? false : _ref$value,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    _ref$onChange = _ref.onChange,
    _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    keyValue = _ref.keyValue,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$dataTestId = _ref.dataTestId,
    dataTestId = _ref$dataTestId === void 0 ? undefined : _ref$dataTestId;
  return /*#__PURE__*/_react["default"].createElement(_material.FormControlLabel, {
    disabled: disabled,
    control: /*#__PURE__*/_react["default"].createElement(_material.Checkbox, {
      id: "check-box-".concat(keyValue),
      "data-test": dataTestId,
      color: "primary",
      checked: value === true,
      onChange: function onChange(event) {
        return _onChange(event.target.checked);
      },
      value: "checked",
      disabled: disabled
    }),
    label: "".concat(label).concat(required ? '*' : '')
  });
};
CheckboxComponent.propTypes = {
  value: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  dataTestId: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  keyValue: _propTypes["default"].string.isRequired
};