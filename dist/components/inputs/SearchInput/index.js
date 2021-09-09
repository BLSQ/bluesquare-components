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

var _styles = require("./styles");

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
      uid = _ref.uid;
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

SearchInput.defaultProps = {
  value: '',
  withMarginTop: true,
  disabled: false,
  required: false,
  onEnterPressed: function onEnterPressed() {},
  onChange: function onChange() {},
  uid: '',
  label: ''
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
  classes: _propTypes["default"].object.isRequired
};
var styledSearchInput = (0, _core.withStyles)(_styles.styles)(SearchInput);
exports.SearchInput = styledSearchInput;