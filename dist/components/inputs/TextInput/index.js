"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _styles = require("@mui/styles");
var _FormControl = require("../FormControl");
var _InputLabel = require("../InputLabel");
var styles = function styles() {
  return {
    input: {
      minHeight: 56
    }
  };
};
var useStyles = (0, _styles.makeStyles)(styles);
var TextInput = exports.TextInput = function TextInput(_ref) {
  var keyValue = _ref.keyValue,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? undefined : _ref$label,
    _ref$errors = _ref.errors,
    errors = _ref$errors === void 0 ? [] : _ref$errors,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$onChange = _ref.onChange,
    _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$multiline = _ref.multiline,
    multiline = _ref$multiline === void 0 ? false : _ref$multiline,
    _ref$autoComplete = _ref.autoComplete,
    autoComplete = _ref$autoComplete === void 0 ? 'off' : _ref$autoComplete,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? undefined : _ref$placeholder,
    _ref$dataTestId = _ref.dataTestId,
    dataTestId = _ref$dataTestId === void 0 ? undefined : _ref$dataTestId;
  var hasErrors = errors.length >= 1;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_FormControl.FormControl, {
    errors: errors
  }, label && /*#__PURE__*/_react["default"].createElement(_InputLabel.InputLabel, {
    htmlFor: "input-text-".concat(keyValue),
    label: label,
    required: required,
    error: hasErrors,
    shrink: value !== ''
  }), /*#__PURE__*/_react["default"].createElement(_material.OutlinedInput, {
    size: "small",
    className: classes.input,
    autoComplete: autoComplete,
    multiline: multiline,
    disabled: disabled,
    id: "input-text-".concat(keyValue),
    value: value,
    type: "text",
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    },
    error: hasErrors,
    placeholder: placeholder,
    "data-test": dataTestId !== null && dataTestId !== void 0 ? dataTestId : ''
  }));
};
TextInput.propTypes = {
  errors: _propTypes["default"].arrayOf(_propTypes["default"].string),
  keyValue: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  multiline: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  autoComplete: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  dataTestId: _propTypes["default"].string
};