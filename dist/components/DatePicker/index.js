"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DatePicker = void 0;

var _react = _interopRequireWildcard(require("react"));

var _pickers = require("@material-ui/pickers");

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _common = require("../../styles/iaso/common");

var _useSafeIntl = require("../../utils/useSafeIntl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import MESSAGES from '../messages';
var useStyles = (0, _core.makeStyles)(function (theme) {
  return _objectSpread(_objectSpread({}, (0, _common.commonStyles)(theme)), {}, {
    formControl: {
      width: '100%'
    },
    clearDateButton: {
      marginRight: theme.spacing(2),
      padding: 0,
      position: 'absolute',
      right: theme.spacing(6),
      top: 15
    }
  });
});

var DatePicker = function DatePicker(_ref) {
  var placeholder = _ref.placeholder,
      onChange = _ref.onChange,
      currentDate = _ref.currentDate,
      hasError = _ref.hasError,
      clearMessage = _ref.clearMessage;
  var classes = useStyles();
  var intl = (0, _useSafeIntl.useSafeIntl)();

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
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
    InputProps: {
      error: hasError || Boolean(dateError)
    },
    format: "DD/MM/YYYY" // This one need be set by user locale
    ,
    label: placeholder,
    helperText: "",
    value: currentDate,
    onChange: onChange,
    onError: function onError(error) {
      return setDateError(error);
    }
  }), currentDate && /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
    arrow: true,
    title: intl.formatMessage(clearMessage)
  }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    color: "inherit",
    onClick: function onClick() {
      return onChange(null);
    },
    className: classes.clearDateButton
  }, /*#__PURE__*/_react["default"].createElement(_Clear["default"], {
    color: "primary"
  }))));
};

exports.DatePicker = DatePicker;
DatePicker.defaultProps = {
  currentDate: null
};
DatePicker.propTypes = {
  /**
   * A placeholder. Required
   */
  placeholder: _propTypes["default"].string.isRequired,

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
  clearMessage: _propTypes["default"].object.isRequired
};