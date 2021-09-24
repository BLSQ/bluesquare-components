"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _FormControl = require("../FormControl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// import { InputLabel } from '../InputLabel';
var formatValue = function formatValue(value, integersOnly) {
  if (value === null || value === undefined) return '';
  if (typeof value === 'number') return value;
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

  var parsedValue = integersOnly ? parseInt(value, 10) : parseFloat(value);

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
      multiline = _ref.multiline,
      integersOnly = _ref.integersOnly,
      onEnterPressed = _ref.onEnterPressed,
      className = _ref.className;
  var hasErrors = errors.length > 1;

  var _useState = (0, _react.useState)(formatValue(value)),
      _useState2 = _slicedToArray(_useState, 2),
      formattedValue = _useState2[0],
      setFormattedValue = _useState2[1];

  (0, _react.useEffect)(function () {
    var formatted = formatValue(value, integersOnly);
    setFormattedValue(formatted);
  }, [value]);
  return /*#__PURE__*/_react["default"].createElement(_FormControl.FormControl, {
    withMarginTop: withMarginTop,
    errors: errors,
    className: className
  }, /*#__PURE__*/_react["default"].createElement(_core.InputLabel, {
    htmlFor: "input-text-".concat(keyValue),
    required: required,
    error: hasErrors,
    shrink: value !== ''
  }, label), /*#__PURE__*/_react["default"].createElement(_core.OutlinedInput, {
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
    onKeyPress: function onKeyPress(event) {
      if (event.key === 'Enter') {
        onEnterPressed();
      }
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
  // onChange: () => {},
  label: '',
  integersOnly: true,
  onEnterPressed: function onEnterPressed() {
    return null;
  },
  className: ''
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
  onChange: _propTypes["default"].func.isRequired,
  integersOnly: _propTypes["default"].bool,
  onEnterPressed: _propTypes["default"].func,
  className: _propTypes["default"].string
};