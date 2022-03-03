"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PasswordInput = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _FormControl = require("../FormControl");

var _InputLabel = require("../InputLabel");

var _useSafeIntl = require("../../../utils/useSafeIntl");

var _messages = require("./messages");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      displayPassword = _ref.displayPassword,
      classes = _ref.classes;
  var hasErrors = errors.length >= 1;

  var _useState = (0, _react.useState)(displayPassword),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      showPassword = _useState2[0],
      setShowPassword = _useState2[1];

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
    type: showPassword ? 'text' : 'password',
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    },
    error: hasErrors,
    className: classes.passwordInput
  }), /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
    className: classes.displayPassword,
    disableFocusListener: disabled,
    disableHoverListener: disabled,
    disableTouchListener: disabled,
    placement: "bottom",
    title: intl.formatMessage(_messages.MESSAGES.displayPassword)
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    color: showPassword ? 'primary' : 'inherit',
    onClick: function onClick() {
      setShowPassword(function (isShowing) {
        return !isShowing;
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_Edit["default"], null)))));
};

PasswordInput.defaultProps = {
  value: '',
  errors: [],
  withMarginTop: true,
  multiline: false,
  disabled: false,
  required: false,
  onChange: function onChange() {},
  displayPassword: false,
  label: ''
};
PasswordInput.propTypes = {
  withMarginTop: _propTypes["default"].bool,
  errors: _propTypes["default"].arrayOf(_propTypes["default"].string),
  keyValue: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  multiline: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  displayPassword: _propTypes["default"].bool,
  // tooltipMessage: PropTypes.string,
  classes: _propTypes["default"].object.isRequired
};
var styledPasswordInput = (0, _core.withStyles)(_styles.styles)(PasswordInput);
exports.PasswordInput = styledPasswordInput;