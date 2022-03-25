"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTags = exports.Select = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));

var _core = require("@material-ui/core");

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _useSafeIntl = require("../../../utils/useSafeIntl");

var _messages = require("./messages");

var _styles = require("../styles");

var _useKeyPressListener = require("../../../utils/useKeyPressListener");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultRenderTags = function defaultRenderTags(getLabel) {
  return function (tagValue, getTagProps) {
    return tagValue.map(function (option, index) {
      return /*#__PURE__*/_react["default"].createElement(_Chip["default"], _extends({
        color: "secondary",
        style: {
          backgroundColor: option.color,
          color: 'white'
        },
        label: getLabel(option)
      }, getTagProps({
        index: index
      })));
    });
  };
};

exports.renderTags = defaultRenderTags;

var SelectCustom = function SelectCustom(_ref) {
  var value = _ref.value,
      keyValue = _ref.keyValue,
      label = _ref.label,
      errors = _ref.errors,
      onChange = _ref.onChange,
      options = _ref.options,
      touched = _ref.touched,
      onBlur = _ref.onBlur,
      multi = _ref.multi,
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
  console.log('errors', errors);
  var intl = (0, _useSafeIntl.useSafeIntl)();
  var classes = (0, _styles.useStyles)();
  var shiftKeyIsDown = (0, _useKeyPressListener.useKeyPressListener)('Shift');

  var getOption = function getOption(optionValue) {
    return options.find(function (o) {
      return "".concat(o.value) === "".concat(optionValue);
    });
  };

  var fixedValue = (0, _react.useMemo)(function () {
    if (value) {
      var _getOption;

      if (multi) {
        var valuesList = Array.isArray(value) ? value : value.split(',');

        if (returnFullObject) {
          return valuesList;
        }

        return valuesList.map(function (v) {
          return getOption(v);
        }).filter(function (o) {
          return o;
        });
      }

      return (_getOption = getOption(value)) !== null && _getOption !== void 0 ? _getOption : value;
    }

    return multi ? [] : null;
  }, [value, options, multi]);
  var handleChange = (0, _react.useCallback)(function (e, newValue) {
    if (!multi && !newValue || multi && newValue.length === 0) {
      return onChange(null);
    }

    if (multi) {
      if (!returnFullObject) {
        return onChange(newValue.map(function (v) {
          return v === null || v === void 0 ? void 0 : v.value;
        }).join(','));
      }

      return onChange(newValue);
    }

    return onChange(newValue.value);
  }, [multi, onChange, returnFullObject]);
  var extraProps = {
    getOptionLabel: getOptionLabel || function (option) {
      var _option$label;

      return (_option$label = option === null || option === void 0 ? void 0 : option.label) !== null && _option$label !== void 0 ? _option$label : option.toString();
    },
    getOptionSelected: getOptionSelected || function (option, val) {
      return val && option.value === val.value;
    }
  };

  if (renderOption) {
    extraProps.renderOption = renderOption;
  }

  var _renderInput = function renderInput(params) {
    var paramsCopy = _objectSpread({}, params);

    var inputExtraProps = {};

    if (extraProps.renderOption && params.inputProps.value) {
      inputExtraProps = {
        startAdornment: /*#__PURE__*/_react["default"].createElement("div", {
          className: classes.startAdornment
        }, extraProps.renderOption({
          label: params.inputProps.value
        })),
        style: {
          color: 'transparent'
        }
      };
      paramsCopy.inputProps.value = '';
    }

    return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, paramsCopy, {
      variant: "outlined",
      disabled: disabled,
      label: "".concat(label).concat(required ? '*' : ''),
      onBlur: onBlur,
      error: errors.length > 0,
      InputLabelProps: {
        classes: {
          shrink: classes.shrink
        },
        className: classes.inputLabel
      },
      helperText: helperText,
      InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
        endAdornment: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, loading ? /*#__PURE__*/_react["default"].createElement(_core.CircularProgress, {
          color: "inherit",
          size: 20
        }) : null, params.InputProps.endAdornment)
      }, inputExtraProps)
    }));
  };

  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    mt: 1,
    mb: 2
  }, /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], _extends({
    disabled: disabled,
    noOptionsText: intl.formatMessage(noOptionsText),
    multiple: multi,
    disableCloseOnSelect: multi && shiftKeyIsDown,
    id: keyValue,
    disableClearable: !clearable,
    options: options,
    value: fixedValue,
    onChange: handleChange,
    loading: loading,
    closeIcon: /*#__PURE__*/_react["default"].createElement(_Clear["default"], null),
    renderTags: renderTags,
    renderInput: function renderInput(params) {
      return _renderInput(params);
    },
    classes: {
      popupIndicator: classes.popupIndicator,
      clearIndicator: classes.clearIndicator,
      hasClearIcon: classes.hasClearIcon
    }
  }, extraProps)));
};

exports.Select = SelectCustom;
SelectCustom.defaultProps = {
  value: undefined,
  errors: [],
  label: '',
  multi: false,
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
  renderTags: defaultRenderTags(function (o) {
    return o !== null && o !== void 0 && o.label ? o.label : '';
  }),
  returnFullObject: false // use this one if you pass array of objects as options and want an array of objects as sected items, not a string of id's

};
SelectCustom.propTypes = {
  errors: _propTypes["default"].arrayOf(_propTypes["default"].string),
  keyValue: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  clearable: _propTypes["default"].bool,
  multi: _propTypes["default"].bool,
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