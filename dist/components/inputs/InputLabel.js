"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputLabel = InputLabelComponent;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function InputLabelComponent(_ref) {
  var htmlFor = _ref.htmlFor,
      label = _ref.label,
      required = _ref.required,
      shrink = _ref.shrink,
      error = _ref.error;
  var classes = (0, _styles.useStyles)();
  return /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    name: htmlFor.replace('input-text-', ''),
    htmlFor: htmlFor,
    classes: {
      shrink: classes.shrink
    },
    className: classes.inputLabel,
    shrink: shrink,
    error: error
  }, label, required && /*#__PURE__*/_react["default"].createElement("sup", null, " *"));
}

InputLabelComponent.defaultProps = {
  shrink: true,
  error: false,
  label: ''
};
InputLabelComponent.propTypes = {
  htmlFor: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string,
  required: _propTypes["default"].bool.isRequired,
  shrink: _propTypes["default"].bool,
  error: _propTypes["default"].bool
};