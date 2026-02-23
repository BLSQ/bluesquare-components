"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextInput = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _material = require("@mui/material");
var _FormControl = require("../FormControl");
var _styles = require("../styles");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TextInput = exports.TextInput = function TextInput(_ref) {
  var params = _ref.params,
    _ref$renderOption = _ref.renderOption,
    renderOption = _ref$renderOption === void 0 ? null : _ref$renderOption,
    _ref$renderTags = _ref.renderTags,
    renderTags = _ref$renderTags === void 0 ? null : _ref$renderTags,
    _ref$selectedOption = _ref.selectedOption,
    selectedOption = _ref$selectedOption === void 0 ? null : _ref$selectedOption,
    disabled = _ref.disabled,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? undefined : _ref$label,
    required = _ref.required,
    onBlur = _ref.onBlur,
    errors = _ref.errors,
    _ref$helperText = _ref.helperText,
    helperText = _ref$helperText === void 0 ? null : _ref$helperText,
    loading = _ref.loading,
    _ref$autoComplete = _ref.autoComplete,
    autoComplete = _ref$autoComplete === void 0 ? 'off' : _ref$autoComplete,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? '' : _ref$placeholder,
    _ref$dataTestId = _ref.dataTestId,
    dataTestId = _ref$dataTestId === void 0 ? undefined : _ref$dataTestId;
  var classes = (0, _styles.useStyles)();
  var paramsCopy = _objectSpread({}, params);
  var inputExtraProps = {};
  if (selectedOption !== null && selectedOption !== void 0 && selectedOption.color) {
    var tags = renderTags([selectedOption], function () {
      return {};
    });
    var chip = Array.isArray(tags) ? tags[0] : tags;
    inputExtraProps = {
      startAdornment: /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.startAdornment
      }, chip),
      style: {
        color: 'transparent'
      }
    };
    paramsCopy.inputProps.value = '';
  } else if (renderOption && params.inputProps.value) {
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
  return /*#__PURE__*/_react["default"].createElement(_FormControl.FormControl, {
    errors: errors
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], (0, _extends2["default"])({}, paramsCopy, {
    variant: "outlined",
    disabled: disabled,
    label: label ? "".concat(label).concat(required ? '*' : '') : undefined,
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
      autoComplete: autoComplete,
      placeholder: placeholder,
      'data-test': dataTestId,
      endAdornment: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, loading ? /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, {
        color: "inherit",
        size: 20
      }) : null, params.InputProps.endAdornment)
    }, inputExtraProps)
  })));
};
TextInput.propTypes = {
  renderOption: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  renderTags: _propTypes["default"].func,
  selectedOption: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].number, _propTypes["default"].string]),
  params: _propTypes["default"].object.isRequired,
  disabled: _propTypes["default"].bool.isRequired,
  label: _propTypes["default"].string,
  required: _propTypes["default"].bool.isRequired,
  onBlur: _propTypes["default"].func.isRequired,
  errors: _propTypes["default"].array.isRequired,
  helperText: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  loading: _propTypes["default"].bool.isRequired,
  autoComplete: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  dataTestId: _propTypes["default"].string
};