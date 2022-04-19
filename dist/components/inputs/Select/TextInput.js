"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _core = require("@material-ui/core");

var _styles = require("../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TextInput = function TextInput(_ref) {
  var params = _ref.params,
      renderOption = _ref.renderOption,
      disabled = _ref.disabled,
      label = _ref.label,
      required = _ref.required,
      onBlur = _ref.onBlur,
      errors = _ref.errors,
      helperText = _ref.helperText,
      loading = _ref.loading;
  var classes = (0, _styles.useStyles)();

  var paramsCopy = _objectSpread({}, params);

  var inputExtraProps = {};

  if (renderOption && params.inputProps.value) {
    inputExtraProps = {
      startAdornment: /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.startAdornment
      }, renderOption({
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

exports.TextInput = TextInput;
TextInput.defaultProps = {
  helperText: undefined,
  renderOption: null
};
TextInput.propTypes = {
  renderOption: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  params: _propTypes["default"].object.isRequired,
  disabled: _propTypes["default"].bool.isRequired,
  label: _propTypes["default"].string.isRequired,
  required: _propTypes["default"].bool.isRequired,
  onBlur: _propTypes["default"].func.isRequired,
  errors: _propTypes["default"].array.isRequired,
  helperText: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  loading: _propTypes["default"].bool.isRequired
};