"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputLabel = InputLabelComponent;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _InputLabel = _interopRequireDefault(require("@mui/material/InputLabel"));
var _styles = require("./styles");
/** @deprecated use InputLabel from @mui/material instead to avoid text alignment issues */
function InputLabelComponent(_ref) {
  var htmlFor = _ref.htmlFor,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    required = _ref.required,
    _ref$shrink = _ref.shrink,
    shrink = _ref$shrink === void 0 ? true : _ref$shrink,
    _ref$error = _ref.error,
    error = _ref$error === void 0 ? false : _ref$error;
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
InputLabelComponent.propTypes = {
  htmlFor: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string,
  required: _propTypes["default"].bool.isRequired,
  shrink: _propTypes["default"].bool,
  error: _propTypes["default"].bool
};