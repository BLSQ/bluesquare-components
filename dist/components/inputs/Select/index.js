"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _core = require("@material-ui/core");

var _FormControl = require("../FormControl");

var _InputLabel = require("../InputLabel");

var _useSafeIntl = require("../../../utils/useSafeIntl");

var _messages = require("./messages");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SelectComponent = function SelectComponent(_ref) {
  var value = _ref.value,
      keyValue = _ref.keyValue,
      label = _ref.label,
      errors = _ref.errors,
      _onChange = _ref.onChange,
      options = _ref.options,
      _onBlur = _ref.onBlur,
      _onFocus = _ref.onFocus,
      withMarginTop = _ref.withMarginTop,
      multi = _ref.multi,
      disabled = _ref.disabled,
      clearable = _ref.clearable,
      isFocused = _ref.isFocused,
      searchable = _ref.searchable,
      required = _ref.required,
      classes = _ref.classes;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      selectInputValue = _useState2[0],
      setSelectInputValue = _useState2[1];

  var hasErrors = errors.length > 0;
  var classNames = hasErrors ? [classes.select, classes.selectError] : [classes.select];
  var intl = (0, _useSafeIntl.useSafeIntl)();

  var _useState3 = (0, _react.useState)(isFocused),
      _useState4 = _slicedToArray(_useState3, 2),
      focus = _useState4[0],
      setFocus = _useState4[1];

  return /*#__PURE__*/_react["default"].createElement(_FormControl.FormControl, {
    withMarginTop: withMarginTop,
    errors: errors
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel.InputLabel, {
    htmlFor: "input-select-".concat(keyValue),
    label: label,
    shrink: value !== undefined && value !== null || selectInputValue !== '',
    isFocused: focus,
    required: required,
    error: hasErrors
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: classNames.join(' ')
  }, /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], {
    disabled: disabled,
    searchable: searchable,
    multi: multi,
    clearable: clearable,
    simpleValue: true,
    onInputChange: function onInputChange(newValue) {
      setSelectInputValue(newValue);
    },
    name: keyValue,
    value: value,
    placeholder: "",
    onBlur: function onBlur() {
      setFocus(false);

      _onBlur();
    },
    onFocus: function onFocus() {
      setFocus(true);

      _onFocus();
    },
    options: options,
    noResultsText: intl.formatMessage(_messages.MESSAGES.noOptions),
    onChange: function onChange(newValue) {
      _onChange(newValue);
    }
  })));
};

SelectComponent.defaultProps = {
  value: undefined,
  errors: [],
  withMarginTop: true,
  multi: false,
  disabled: false,
  clearable: true,
  isFocused: false,
  required: false,
  searchable: true,
  onChange: function onChange() {},
  options: [],
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  label: '' // TODO use library translations
  // noResultsText: '',

};
SelectComponent.propTypes = {
  withMarginTop: _propTypes["default"].bool,
  errors: _propTypes["default"].arrayOf(_propTypes["default"].string),
  keyValue: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  searchable: _propTypes["default"].bool,
  clearable: _propTypes["default"].bool,
  isFocused: _propTypes["default"].bool,
  multi: _propTypes["default"].bool,
  value: _propTypes["default"].any,
  onBlur: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  // noResultsText: PropTypes.string,
  options: _propTypes["default"].array,
  onChange: _propTypes["default"].func,
  classes: _propTypes["default"].object.isRequired
};
var styledSelectComponent = (0, _core.withStyles)(_styles.styles)(SelectComponent);
exports.Select = styledSelectComponent;