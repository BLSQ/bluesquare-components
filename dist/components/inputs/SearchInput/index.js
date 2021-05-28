"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchInput = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _FormControl = require("../FormControl");

var _InputLabel = require("../InputLabel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SearchInput = function SearchInput(_ref) {
  var withMarginTop = _ref.withMarginTop,
      label = _ref.label,
      required = _ref.required,
      keyValue = _ref.keyValue,
      disabled = _ref.disabled,
      value = _ref.value,
      onEnterPressed = _ref.onEnterPressed,
      _onChange = _ref.onChange,
      classes = _ref.classes,
      isFocused = _ref.isFocused,
      uid = _ref.uid;
  return /*#__PURE__*/_react["default"].createElement(_FormControl.FormControl, {
    withMarginTop: withMarginTop
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel.InputLabel, {
    htmlFor: "search-".concat(keyValue),
    label: label,
    required: required,
    shrink: value !== undefined && value !== null && value !== '',
    isFocused: isFocused
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
      return _onChange(event.target.value);
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

exports.SearchInput = SearchInput;
SearchInput.defaultProps = {
  value: '',
  withMarginTop: true,
  disabled: false,
  required: false,
  onEnterPressed: function onEnterPressed() {},
  onChange: function onChange() {},
  classes: {
    inputRoot: '',
    inputInput: '',
    searchIcon: ''
  },
  isFocused: false,
  uid: ''
};
SearchInput.propTypes = {
  withMarginTop: _propTypes["default"].bool,
  keyValue: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string.isRequired,
  required: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  value: _propTypes["default"].string,
  onEnterPressed: _propTypes["default"].func,
  onChange: _propTypes["default"].func,
  classes: _propTypes["default"].object,
  isFocused: _propTypes["default"].bool,
  uid: _propTypes["default"].string
};