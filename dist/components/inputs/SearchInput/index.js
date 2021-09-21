"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _FormControl = require("../FormControl");

var _InputLabel = require("../InputLabel");

var _styles = require("./styles");

var _useDebounce = require("../../../utils/useDebounce");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SearchInput = function SearchInput(_ref) {
  var withMarginTop = _ref.withMarginTop,
      label = _ref.label,
      required = _ref.required,
      keyValue = _ref.keyValue,
      disabled = _ref.disabled,
      value = _ref.value,
      onEnterPressed = _ref.onEnterPressed,
      onChange = _ref.onChange,
      classes = _ref.classes,
      uid = _ref.uid,
      debounce = _ref.debounce;

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var debouncedValue = (0, _useDebounce.useDebounce)(inputValue, debounce);
  (0, _react.useEffect)(function () {
    console.log('new debounce', debouncedValue, debounce);
    onChange(debouncedValue);
  }, [debouncedValue, debounce]);
  return /*#__PURE__*/_react["default"].createElement(_FormControl.FormControl, {
    withMarginTop: withMarginTop
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel.InputLabel, {
    htmlFor: "search-".concat(keyValue),
    label: label,
    required: required,
    shrink: value !== undefined && value !== null && value !== ''
  }), /*#__PURE__*/_react["default"].createElement(_core.OutlinedInput, {
    disabled: disabled,
    id: uid ? "search-".concat(uid) : "search-".concat(keyValue),
    value: value || '',
    placeholder: "",
    onKeyPress: function onKeyPress(event) {
      if (event.which === 13 || event.keyCode === 13) {
        onEnterPressed();
      }
    },
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'search'
    },
    onChange: function onChange(event) {
      setInputValue(event.target.value);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    tabIndex: 0,
    role: "button",
    className: classes.searchIcon,
    onClick: function onClick() {
      return onEnterPressed();
    }
  }, /*#__PURE__*/_react["default"].createElement(_Search["default"], null)));
};

SearchInput.defaultProps = {
  value: '',
  withMarginTop: true,
  disabled: false,
  required: false,
  onEnterPressed: function onEnterPressed() {},
  onChange: function onChange() {},
  uid: '',
  label: '',
  debounce: 0
};
SearchInput.propTypes = {
  withMarginTop: _propTypes["default"].bool,
  keyValue: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  onEnterPressed: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  uid: _propTypes["default"].string,
  classes: _propTypes["default"].object.isRequired,
  debounce: _propTypes["default"].number
};
var styledSearchInput = (0, _core.withStyles)(_styles.styles)(SearchInput);
exports.SearchInput = styledSearchInput;