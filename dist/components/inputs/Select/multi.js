"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelect = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _useSafeIntl = require("../../../utils/useSafeIntl");

var _useKeyPressListener = require("../../../utils/useKeyPressListener");

var _messages = require("./messages");

var _styles = require("../styles");

var _utils = require("./utils");

var _TextInput = require("./TextInput");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var MultiSelect = function MultiSelect(_ref) {
  var value = _ref.value,
      keyValue = _ref.keyValue,
      label = _ref.label,
      errors = _ref.errors,
      onChange = _ref.onChange,
      options = _ref.options,
      onBlur = _ref.onBlur,
      disabled = _ref.disabled,
      clearable = _ref.clearable,
      required = _ref.required,
      noOptionsText = _ref.noOptionsText,
      getOptionLabel = _ref.getOptionLabel,
      getOptionSelected = _ref.getOptionSelected,
      loading = _ref.loading,
      renderOption = _ref.renderOption,
      renderTags = _ref.renderTags,
      returnFullObject = _ref.returnFullObject,
      helperText = _ref.helperText;
  var intl = (0, _useSafeIntl.useSafeIntl)();
  var classes = (0, _styles.useStyles)();
  var shiftKeyIsDown = (0, _useKeyPressListener.useKeyPressListener)('Shift');
  var fixedValue = (0, _react.useMemo)(function () {
    if (value) {
      var valuesList = Array.isArray(value) ? value : value.split(',');

      if (returnFullObject) {
        return valuesList;
      }

      return valuesList.map(function (v) {
        return (0, _utils.getOption)(v, options);
      }).filter(function (o) {
        return o;
      });
    }

    return [];
  }, [value, options]);
  var handleChange = (0, _react.useCallback)(function (e, newValue) {
    if (newValue.length === 0) {
      return onChange(null);
    }

    if (!returnFullObject) {
      return onChange(newValue.map(function (v) {
        return v === null || v === void 0 ? void 0 : v.value;
      }).join(','));
    }

    return onChange(newValue);
  }, [onChange, returnFullObject]);
  var extraProps = (0, _utils.getExtraProps)(getOptionLabel, getOptionSelected, renderOption);
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    mt: 1,
    mb: 2
  }, /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], _extends({
    disabled: disabled,
    noOptionsText: intl.formatMessage(noOptionsText),
    multiple: true,
    disableCloseOnSelect: shiftKeyIsDown,
    id: keyValue,
    disableClearable: !clearable,
    options: options,
    value: fixedValue,
    onChange: handleChange,
    loading: loading,
    closeIcon: /*#__PURE__*/_react["default"].createElement(_Clear["default"], null),
    renderTags: renderTags,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
        params: params,
        renderOption: renderOption,
        disabled: disabled,
        label: label,
        required: required,
        onBlur: onBlur,
        errors: errors,
        helperText: helperText,
        loading: loading
      });
    },
    classes: {
      popupIndicator: classes.popupIndicator,
      clearIndicator: classes.clearIndicator,
      hasClearIcon: classes.hasClearIcon
    }
  }, extraProps)));
};

exports.MultiSelect = MultiSelect;
MultiSelect.defaultProps = {
  value: undefined,
  errors: [],
  label: '',
  disabled: false,
  clearable: true,
  required: false,
  loading: false,
  options: [],
  onBlur: function onBlur() {},
  getOptionSelected: null,
  getOptionLabel: null,
  renderOption: null,
  noOptionsText: _messages.MESSAGES.noOptions,
  helperText: undefined,
  renderTags: (0, _utils.defaultRenderTags)(function (o) {
    return o !== null && o !== void 0 && o.label ? o.label : '';
  }),
  returnFullObject: false // use this one if you pass array of objects as options and want an array of objects as sected items, not a string of id's

};
MultiSelect.propTypes = {
  errors: _propTypes["default"].arrayOf(_propTypes["default"].string),
  keyValue: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  clearable: _propTypes["default"].bool,
  value: _propTypes["default"].any,
  onBlur: _propTypes["default"].func,
  noOptionsText: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  helperText: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  options: _propTypes["default"].array,
  loading: _propTypes["default"].bool,
  onChange: _propTypes["default"].func.isRequired,
  getOptionLabel: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  getOptionSelected: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  renderOption: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  renderTags: _propTypes["default"].func,
  returnFullObject: _propTypes["default"].bool
};