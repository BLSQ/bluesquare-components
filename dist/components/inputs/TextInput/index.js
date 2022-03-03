"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _FormControl = require("../FormControl");

var _InputLabel = require("../InputLabel");

var TextInput = function TextInput(_ref) {
  var keyValue = _ref.keyValue,
      label = _ref.label,
      withMarginTop = _ref.withMarginTop,
      errors = _ref.errors,
      required = _ref.required,
      value = _ref.value,
      disabled = _ref.disabled,
      _onChange = _ref.onChange,
      multiline = _ref.multiline;
  var hasErrors = errors.length >= 1;
  return /*#__PURE__*/_react["default"].createElement(_FormControl.FormControl, {
    withMarginTop: withMarginTop,
    errors: errors
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel.InputLabel, {
    htmlFor: "input-text-".concat(keyValue),
    label: label,
    required: required,
    error: hasErrors,
    shrink: value !== ''
  }), /*#__PURE__*/_react["default"].createElement(_core.OutlinedInput, {
    size: "small",
    multiline: multiline,
    disabled: disabled,
    id: "input-text-".concat(keyValue),
    value: value,
    type: "text",
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    },
    error: hasErrors
  }));
};

exports.TextInput = TextInput;
TextInput.defaultProps = {
  value: '',
  errors: [],
  withMarginTop: true,
  multiline: false,
  disabled: false,
  required: false,
  onChange: function onChange() {},
  label: ''
};
TextInput.propTypes = {
  withMarginTop: _propTypes["default"].bool,
  errors: _propTypes["default"].arrayOf(_propTypes["default"].string),
  keyValue: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  multiline: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func
};