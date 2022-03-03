"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePicker = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _pickers = require("@material-ui/pickers");

var _Event = _interopRequireDefault(require("@material-ui/icons/Event"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = require("../buttons/IconButton");

var _common = require("../../styles/iaso/common");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return _objectSpread(_objectSpread({}, (0, _common.commonStyles)(theme)), {}, {
    formControl: {
      width: '100%'
    },
    clearDateButton: {
      marginRight: theme.spacing(2),
      padding: 0,
      position: 'absolute',
      right: theme.spacing(4),
      top: 13
    }
  });
});

var DatePicker = function DatePicker(_ref) {
  var label = _ref.label,
      onChange = _ref.onChange,
      currentDate = _ref.currentDate,
      hasError = _ref.hasError,
      clearMessage = _ref.clearMessage,
      helperText = _ref.helperText;
  var classes = useStyles();

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      dateError = _useState2[0],
      setDateError = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_core.FormControl, {
    className: classes.formControl
  }, /*#__PURE__*/_react["default"].createElement(_pickers.KeyboardDatePicker, {
    autoOk: true,
    disableToolbar: true,
    inputVariant: "outlined",
    InputLabelProps: {
      className: classes.label,
      shrink: Boolean(currentDate),
      error: hasError || Boolean(dateError)
    },
    KeyboardButtonProps: {
      size: 'small'
    },
    keyboardIcon: /*#__PURE__*/_react["default"].createElement(_Event["default"], {
      size: "small"
    }),
    InputProps: {
      error: hasError || Boolean(dateError)
    },
    format: "DD/MM/YYYY" // This one need be set by user locale
    ,
    label: label,
    helperText: helperText,
    value: currentDate,
    onChange: onChange,
    onError: function onError(error) {
      return setDateError(error);
    }
  }), currentDate && /*#__PURE__*/_react["default"].createElement("span", {
    className: classes.clearDateButton
  }, /*#__PURE__*/_react["default"].createElement(_IconButton.IconButton, {
    size: "small",
    icon: "clear",
    tooltipMessage: clearMessage,
    onClick: function onClick() {
      return onChange(null);
    }
  })));
};

exports.DatePicker = DatePicker;
DatePicker.defaultProps = {
  currentDate: null,
  helperText: ''
};
DatePicker.propTypes = {
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
   * The date to initialize the DatePicker with
   */
  currentDate: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),

  /**
   * Toggles the CSS for error state
   */
  hasError: _propTypes["default"].bool.isRequired,

  /**
   * A message object to use with react-intl. Displays when hovering over the clear icon
   */
  clearMessage: _propTypes["default"].object.isRequired,

  /**
   * A message object to use with react-intl. Displays when hovering over the clear icon
   */
  helperText: _propTypes["default"].string
};