"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberInput = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _FormControl = require("../FormControl");

var _InputLabel = require("../InputLabel");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var formatValue = function formatValue(value) {
  if (typeof value === 'number') return value;
  if (value === undefined || value == null) return '';
  var valueAsArray = value.split('');
  var containsDots = valueAsArray.filter(function (_char) {
    return _char === '.';
  }); // If there is only one dot, the dot should be the last char and the char before it should be a number
  // e.g: "123."

  if (containsDots.length === 1 && valueAsArray[valueAsArray.length - 1] === '.' && !Number.isNaN(parseInt(valueAsArray[valueAsArray.length - 2], 10))) {
    return value;
  } // "12.l" should return "12.""


  if (containsDots.length === 1 && valueAsArray[valueAsArray.length - 2] === '.' && Number.isNaN(parseInt(valueAsArray[valueAsArray.length - 1], 10))) {
    valueAsArray.pop();
    return valueAsArray.join('');
  }

  var parsedValue = parseFloat(value);

  if (Number.isNaN(parsedValue)) {
    return '';
  }

  return parsedValue;
};

var NumberInput = function NumberInput(_ref) {
  var keyValue = _ref.keyValue,
      label = _ref.label,
      withMarginTop = _ref.withMarginTop,
      errors = _ref.errors,
      required = _ref.required,
      value = _ref.value,
      disabled = _ref.disabled,
      _onChange = _ref.onChange,
      multiline = _ref.multiline;
  var hasErrors = errors.length >= 1;

  var _useState = (0, _react.useState)(formatValue(value)),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      formattedValue = _useState2[0],
      setFormattedValue = _useState2[1];

  (0, _react.useEffect)(function () {
    var formatted = formatValue(value);
    setFormattedValue(formatted);
  }, [value]);
  return /*#__PURE__*/_react["default"].createElement(_FormControl.FormControl, {
    withMarginTop: withMarginTop,
    errors: errors
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel.InputLabel, {
    htmlFor: "input-text-".concat(keyValue),
    label: label,
    required: required,
    error: hasErrors,
    shrink: value !== ''
  }), /*#__PURE__*/_react["default"].createElement(_core.OutlinedInput, {
    size: "small",
    multiline: multiline,
    disabled: disabled,
    id: "input-text-".concat(keyValue),
    value: formattedValue,
    type: "text",
    onChange: function onChange(event) {
      var updatedValue = formatValue(event.target.value);
      setFormattedValue(updatedValue);

      _onChange(updatedValue);
    },
    error: hasErrors
  }));
};

exports.NumberInput = NumberInput;
NumberInput.defaultProps = {
  value: '',
  errors: [],
  withMarginTop: true,
  multiline: false,
  disabled: false,
  required: false,
  onChange: function onChange() {},
  label: ''
};
NumberInput.propTypes = {
  withMarginTop: _propTypes["default"].bool,
  errors: _propTypes["default"].arrayOf(_propTypes["default"].string),
  keyValue: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  multiline: _propTypes["default"].bool,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  onChange: _propTypes["default"].func
};