"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _FormControl = require("../FormControl");

var _InputLabel = require("../InputLabel");

var _useSafeIntl = require("../../../utils/useSafeIntl");

var _messages = require("./messages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var PasswordInput = function PasswordInput(_ref) {
  var keyValue = _ref.keyValue,
      label = _ref.label,
      withMarginTop = _ref.withMarginTop,
      errors = _ref.errors,
      required = _ref.required,
      value = _ref.value,
      disabled = _ref.disabled,
      _onChange = _ref.onChange,
      multiline = _ref.multiline,
      onClick = _ref.onClick,
      displayPassword = _ref.displayPassword,
      classNames = _ref.classNames;
  var hasErrors = errors.length > 1;
  var intl = (0, _useSafeIntl.useSafeIntl)();
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
    type: displayPassword ? 'text' : 'password',
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    },
    error: hasErrors,
    className: classNames.passwordInput
  }), /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
    className: classNames.displayPassword,
    disableFocusListener: disabled,
    disableHoverListener: disabled,
    disableTouchListener: disabled,
    placement: "bottom",
    title: intl.formatMessage(_messages.MESSAGES.displayPassword)
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    color: displayPassword ? 'primary' : 'inherit',
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_Edit["default"], null)))));
};

exports.PasswordInput = PasswordInput;
PasswordInput.defaultProps = {
  value: '',
  errors: [],
  withMarginTop: true,
  multiline: false,
  disabled: false,
  required: false,
  onChange: function onChange() {},
  onClick: function onClick() {},
  displayPassword: false,
  // tooltipMessage: 'Display password',
  classNames: {
    passwordInput: '',
    displayPassword: ''
  }
};
PasswordInput.propTypes = {
  withMarginTop: _propTypes["default"].bool,
  errors: _propTypes["default"].arrayOf(_propTypes["default"].string),
  keyValue: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string.isRequired,
  required: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  multiline: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  displayPassword: _propTypes["default"].bool,
  // tooltipMessage: PropTypes.string,
  classNames: _propTypes["default"].object
};