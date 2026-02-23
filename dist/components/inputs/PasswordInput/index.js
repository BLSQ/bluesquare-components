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
var _material = require("@mui/material");
var _styles = require("@mui/styles");
var _RemoveRedEye = _interopRequireDefault(require("@mui/icons-material/RemoveRedEye"));
var _FormControl = require("../FormControl");
var _InputLabel = require("../InputLabel");
var _useSafeIntl = require("../../../localization/useSafeIntl");
var _messages = require("./messages");
var _styles2 = require("./styles");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var PasswordInput = function PasswordInput(_ref) {
  var keyValue = _ref.keyValue,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
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
    _ref$displayPassword = _ref.displayPassword,
    displayPassword = _ref$displayPassword === void 0 ? false : _ref$displayPassword,
    classes = _ref.classes,
    _ref$autoComplete = _ref.autoComplete,
    autoComplete = _ref$autoComplete === void 0 ? 'new-password' : _ref$autoComplete,
    _ref$dataTestId = _ref.dataTestId,
    dataTestId = _ref$dataTestId === void 0 ? undefined : _ref$dataTestId;
  var hasErrors = errors.length >= 1;
  var _useState = (0, _react.useState)(displayPassword),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    showPassword = _useState2[0],
    setShowPassword = _useState2[1];
  var intl = (0, _useSafeIntl.useSafeIntl)();
  return /*#__PURE__*/_react["default"].createElement(_FormControl.FormControl, {
    errors: errors
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel.InputLabel, {
    htmlFor: "input-text-".concat(keyValue),
    label: label,
    required: required,
    error: hasErrors,
    shrink: value !== ''
  }), /*#__PURE__*/_react["default"].createElement(_material.OutlinedInput, {
    size: "small",
    autoComplete: autoComplete,
    multiline: multiline,
    disabled: disabled,
    id: "input-text-".concat(keyValue),
    value: value,
    type: showPassword ? 'text' : 'password',
    onChange: function onChange(event) {
      return _onChange(event.target.value);
    },
    error: hasErrors,
    className: classes.passwordInput,
    "date-test": dataTestId
  }), /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
    className: classes.displayPassword,
    disableFocusListener: disabled,
    disableHoverListener: disabled,
    disableTouchListener: disabled,
    placement: "bottom",
    title: intl.formatMessage(_messages.MESSAGES.displayPassword)
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    color: showPassword ? 'primary' : 'inherit',
    onClick: function onClick() {
      setShowPassword(function (isShowing) {
        return !isShowing;
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_RemoveRedEye["default"], null)))));
};
PasswordInput.propTypes = {
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
  classes: _propTypes["default"].object.isRequired,
  autoComplete: _propTypes["default"].string,
  dataTestId: _propTypes["default"].string
};
var styledPasswordInput = exports.PasswordInput = (0, _styles.withStyles)(_styles2.styles)(PasswordInput);