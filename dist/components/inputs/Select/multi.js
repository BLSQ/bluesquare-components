"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MultiSelect = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _Clear = _interopRequireDefault(require("@mui/icons-material/Clear"));
var _Autocomplete = _interopRequireDefault(require("@mui/material/Autocomplete"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _useKeyPressListener = require("../../../utils/useKeyPressListener");
var _useSafeIntl2 = require("../../../localization/useSafeIntl");
var _messages = require("./messages");
var _styles = require("../styles");
var _TextInput = require("./TextInput");
var _utils = require("./utils");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var MultiSelect = exports.MultiSelect = function MultiSelect(_ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? undefined : _ref$value,
    keyValue = _ref.keyValue,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    _ref$errors = _ref.errors,
    errors = _ref$errors === void 0 ? [] : _ref$errors,
    onChange = _ref.onChange,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    _ref$onBlur = _ref.onBlur,
    onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$clearable = _ref.clearable,
    clearable = _ref$clearable === void 0 ? true : _ref$clearable,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$noOptionsText = _ref.noOptionsText,
    noOptionsText = _ref$noOptionsText === void 0 ? _messages.MESSAGES.noOptions : _ref$noOptionsText,
    _ref$getOptionLabel = _ref.getOptionLabel,
    getOptionLabel = _ref$getOptionLabel === void 0 ? null : _ref$getOptionLabel,
    _ref$getOptionSelecte = _ref.getOptionSelected,
    getOptionSelected = _ref$getOptionSelecte === void 0 ? null : _ref$getOptionSelecte,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$renderOption = _ref.renderOption,
    renderOption = _ref$renderOption === void 0 ? null : _ref$renderOption,
    _ref$renderTags = _ref.renderTags,
    renderTags = _ref$renderTags === void 0 ? _utils.defaultRenderTags : _ref$renderTags,
    _ref$returnFullObject = _ref.returnFullObject,
    returnFullObject = _ref$returnFullObject === void 0 ? false : _ref$returnFullObject,
    _ref$helperText = _ref.helperText,
    helperText = _ref$helperText === void 0 ? undefined : _ref$helperText,
    _ref$loadingText = _ref.loadingText,
    loadingText = _ref$loadingText === void 0 ? _messages.MESSAGES.loadingOptions : _ref$loadingText,
    _ref$dataTestId = _ref.dataTestId,
    dataTestId = _ref$dataTestId === void 0 ? undefined : _ref$dataTestId,
    placeholder = _ref.placeholder,
    _ref$useBuiltInErrors = _ref.useBuiltInErrors,
    useBuiltInErrors = _ref$useBuiltInErrors === void 0 ? true : _ref$useBuiltInErrors;
  var _useSafeIntl = (0, _useSafeIntl2.useSafeIntl)(),
    formatMessage = _useSafeIntl.formatMessage;
  var classes = (0, _styles.useStyles)();
  var shiftKeyIsDown = (0, _useKeyPressListener.useKeyPressListener)('Shift');
  //  Handle numeric 0 as value
  var hasValue = Boolean(value) || value === 0;
  var valuesList = (0, _react.useMemo)(function () {
    if (!hasValue) return [];
    return Array.isArray(value) ? value : value.split(',');
  }, [value, hasValue]);
  var extraProps = (0, _utils.getExtraProps)(getOptionLabel, getOptionSelected, renderOption);
  var displayedErrors = (0, _react.useMemo)(function () {
    var tempErrors = (0, _toConsumableArray2["default"])(errors);
    if (hasValue && !loading && useBuiltInErrors) {
      valuesList.forEach(function (val) {
        var multiOption = (0, _utils.getMultiOption)(val, options, extraProps.isOptionEqualToValue);
        var missingValueError = !Boolean(multiOption) && multiOption !== 0;
        if (missingValueError && useBuiltInErrors) {
          tempErrors.push(formatMessage(_messages.MESSAGES.oneValueNotFound, {
            value: "".concat(extraProps.getOptionLabel(val))
          }));
        }
      });
    }
    return tempErrors;
  }, [value, options, errors, loading, hasValue, valuesList, useBuiltInErrors]);
  var fixedValue = (0, _react.useMemo)(function () {
    if (hasValue) {
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
  }, [options, hasValue, valuesList]);
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
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], null, /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], (0, _extends2["default"])({
    disabled: disabled,
    noOptionsText: formatMessage(noOptionsText),
    multiple: true,
    disableCloseOnSelect: shiftKeyIsDown,
    id: keyValue,
    disableClearable: !clearable,
    options: options,
    value: fixedValue,
    onChange: handleChange,
    loading: loading,
    loadingText: formatMessage(loadingText),
    clearIcon: /*#__PURE__*/_react["default"].createElement(_Clear["default"], null),
    renderTags: renderTags,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/_react["default"].createElement(_TextInput.TextInput, {
        params: params,
        renderOption: renderOption,
        disabled: disabled,
        label: label,
        required: required,
        onBlur: onBlur,
        errors: displayedErrors,
        helperText: helperText,
        loading: loading,
        dataTestId: dataTestId,
        placeholder: placeholder
      });
    },
    classes: {
      popupIndicator: classes.popupIndicator,
      clearIndicator: classes.clearIndicator,
      hasClearIcon: classes.hasClearIcon
    },
    renderOption: function renderOption(props, option) {
      return (0, _utils.defaultRenderOption)(props, option, extraProps.getOptionLabel);
    }
  }, extraProps)));
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
  loadingText: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  noOptionsText: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  helperText: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  options: _propTypes["default"].array,
  loading: _propTypes["default"].bool,
  onChange: _propTypes["default"].func.isRequired,
  getOptionLabel: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  getOptionSelected: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  renderOption: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  renderTags: _propTypes["default"].func,
  returnFullObject: _propTypes["default"].bool,
  dataTestId: _propTypes["default"].string,
  useBuiltInErrors: _propTypes["default"].bool
};