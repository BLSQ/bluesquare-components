"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnText = exports["default"] = ColumnText;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ColumnText(_ref) {
  var text = _ref.text,
      title = _ref.title;
  return /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "body2",
    noWrap: true,
    title: title !== '' ? title : text
  }, text);
}

ColumnText.defaultProps = {
  title: ''
};
ColumnText.propTypes = {
  text: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].node]).isRequired,
  title: _propTypes["default"].string
};