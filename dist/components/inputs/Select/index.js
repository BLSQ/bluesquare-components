"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));

var _core = require("@material-ui/core");

var _useSafeIntl = require("../../../utils/useSafeIntl");

var _messages = require("./messages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _core.makeStyles)(function () {
  return {
    chipLabel: {
      marginTop: -2
    },
    startAdornment: {
      marginTop: -5
    }
  };
});

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
      renderOption = _ref.renderOption;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectedValue = _useState2[0],
      setSelectedValue = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      multiSelectedValue = _useState4[0],
      setMultiSelectedValue = _useState4[1];

  var intl = (0, _useSafeIntl.useSafeIntl)();
  var classes = useStyles();

  var getOption = function getOption(optionValue) {
    return options.find(function (o) {
      return "".concat(o.value) === "".concat(optionValue);
    });
  };

  (0, _react.useEffect)(function () {
    if (value) {
      if (multi) {
        var newSelectedValue = [];
        var valuesList = Array.isArray(value) ? value : value.split(',');
        valuesList.forEach(function (v) {
          var option = getOption(v);
          if (option) newSelectedValue.push(getOption(v));
        });
        setMultiSelectedValue(newSelectedValue);
      } else {
        var _newSelectedValue = getOption(value);

        if (_newSelectedValue) setSelectedValue(_newSelectedValue);
      }
    } else {
      multi ? setMultiSelectedValue([]) : setSelectedValue(null);
    }
  }, [value, options]);

  var handleChange = function handleChange(e, newValue) {
    if (!multi && !newValue || multi && newValue.length === 0) {
      return onChange(null);
    }

    if (multi) {
      return onChange(newValue.map(function (v) {
        return v && v.value;
      }).join(','));
    }

    return onChange(newValue.value);
  };

  var extraProps = {
    getOptionLabel: getOptionLabel || function (option) {
      return option && option.label;
    },
    getOptionSelected: getOptionSelected || function (option, val) {
      return val && option.value === val.value;
    }
  };

  if (renderOption) {
    extraProps.renderOption = renderOption;
  }

  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    mt: 1,
    mb: 2
  }, /*#__PURE__*/_react["default"].createElement(_Autocomplete["default"], _extends({
    noOptionsText: intl.formatMessage(noOptionsText),
    multiple: multi,
    id: keyValue,
    disableClearable: !clearable,
    options: options,
    value: multi ? multiSelectedValue : selectedValue,
    onChange: handleChange,
    loading: loading,
    renderTags: function renderTags(tagValue, getTagProps) {
      return tagValue.map(function (option, index) {
        if (!option) return null;
        return /*#__PURE__*/_react["default"].createElement(_Chip["default"], _extends({
          classes: {
            label: classes.chipLabel
          },
          color: "secondary",
          label: option.label
        }, getTagProps({
          index: index
        })));
      });
    },
    renderInput: function renderInput(params) {
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
        inputExtraProps.startAdornment = /*#__PURE__*/_react["default"].createElement("div", {
          className: classes.startAdornment
        }, extraProps.renderOption({
          label: params.inputProps.value
        }));
        paramsCopy.inputProps.value = '';
      }

      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, paramsCopy, {
        variant: "outlined",
        disabled: disabled,
        label: "".concat(label).concat(required ? '*' : ''),
        onBlur: onBlur,
        error: errors.length > 0 && touched,
        InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
          endAdornment: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, loading ? /*#__PURE__*/_react["default"].createElement(_core.CircularProgress, {
            color: "inherit",
            size: 20
          }) : null, params.InputProps.endAdornment)
        }, inputExtraProps)
      }));
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
  touched: false,
  loading: false,
  options: [],
  onBlur: function onBlur() {},
  getOptionSelected: null,
  getOptionLabel: null,
  renderOption: null,
  noOptionsText: _messages.MESSAGES.noOptions
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
  options: _propTypes["default"].array,
  touched: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].array]),
  loading: _propTypes["default"].bool,
  onChange: _propTypes["default"].func.isRequired,
  getOptionLabel: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  getOptionSelected: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  renderOption: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func])
};