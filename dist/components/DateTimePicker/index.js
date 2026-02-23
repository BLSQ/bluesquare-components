"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DateTimePicker = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _xDatePickers = require("@mui/x-date-pickers");
var _Event = _interopRequireDefault(require("@mui/icons-material/Event"));
var _styles = require("@mui/styles");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _IconButton = require("../buttons/IconButton");
var _FormControl = require("../inputs/FormControl");
var _common = require("../../styles/iaso/common.ts");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return _objectSpread(_objectSpread({}, (0, _common.commonStyles)(theme)), {}, {
    clearDateButton: {
      marginRight: theme.spacing(2),
      padding: 0,
      position: 'absolute',
      right: theme.spacing(4),
      top: 13
    },
    helperTextError: {
      color: theme.palette.error.main
    }
  });
});
var DateTimePicker = exports.DateTimePicker = function DateTimePicker(_ref) {
  var label = _ref.label,
    onChange = _ref.onChange,
    _ref$currentDate = _ref.currentDate,
    currentDate = _ref$currentDate === void 0 ? null : _ref$currentDate,
    clearMessage = _ref.clearMessage,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$errors = _ref.errors,
    errors = _ref$errors === void 0 ? [] : _ref$errors,
    _ref$hideError = _ref.hideError,
    hideError = _ref$hideError === void 0 ? false : _ref$hideError,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$clearable = _ref.clearable,
    clearable = _ref$clearable === void 0 ? true : _ref$clearable,
    maxTime = _ref.maxTime,
    maxDateTime = _ref.maxDateTime,
    maxDate = _ref.maxDate,
    minTime = _ref.minTime,
    minDateTime = _ref.minDateTime,
    minDate = _ref.minDate;
  var classes = useStyles();
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    dateError = _useState2[0],
    setDateError = _useState2[1];
  var isOnError = errors.length > 0 || Boolean(dateError);
  return /*#__PURE__*/_react["default"].createElement(_FormControl.FormControl, {
    errors: errors,
    hideError: hideError
  }, /*#__PURE__*/_react["default"].createElement(_xDatePickers.DateTimePicker, {
    autoOk: true,
    renderInput: function renderInput(props) {
      return /*#__PURE__*/_react["default"].createElement(_material.TextField, props);
    },
    disableToolbar: true,
    inputVariant: "outlined",
    required: required,
    disabled: disabled,
    InputLabelProps: {
      className: classes.label,
      shrink: Boolean(currentDate),
      error: isOnError
    },
    KeyboardButtonProps: {
      size: 'small'
    },
    keyboardIcon: /*#__PURE__*/_react["default"].createElement(_Event["default"], {
      size: "small"
    }),
    InputProps: {
      error: isOnError
    },
    helperText: null,
    format: "DD/MM/YYYY HH:mm" // This one need be set by user locale
    ,
    label: "".concat(label),
    value: currentDate,
    onChange: onChange,
    onError: function onError(error) {
      return setDateError(error);
    },
    minDate: minDate,
    minDateTime: minDateTime,
    minTime: minTime,
    maxDate: maxDate,
    maxDateTime: maxDateTime,
    maxTime: maxTime
  }), clearable && clearMessage && currentDate && /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.clearDateButton
  }, /*#__PURE__*/_react["default"].createElement(_IconButton.IconButton, {
    disabled: disabled,
    size: "small",
    icon: "clear",
    tooltipMessage: clearMessage,
    onClick: function onClick() {
      return onChange(null);
    }
  })));
};
DateTimePicker.propTypes = {
  /**
   * A label. Required
   */
  label: _propTypes["default"].string.isRequired,
  /**
  /**
   * OnChange function. Required
   */
  onChange: _propTypes["default"].func.isRequired,
  /**
   * The date to initialize the DateTimePicker with
   */
  currentDate: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
  /**
   * List of errors strings
   */
  errors: _propTypes["default"].array,
  /**
   * A message object to use with react-intl. Displays when hovering over the clear icon
   */
  clearMessage: _propTypes["default"].object,
  /**
   * display a star in the label if required
   */
  required: _propTypes["default"].bool,
  /**
   * hidde error message
   */
  hideError: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  clearable: _propTypes["default"].bool,
  /** Use moment to pass these props
   * https://github.com/mui/material-ui-pickers/issues/1506
   */
  maxTime: _propTypes["default"].any,
  maxDateTime: _propTypes["default"].any,
  maxDate: _propTypes["default"].any,
  minTime: _propTypes["default"].any,
  minDateTime: _propTypes["default"].any,
  minDate: _propTypes["default"].any
};