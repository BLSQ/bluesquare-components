"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderRowIcon = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _styles = require("./styles");

function HeaderRowIcon(_ref) {
  var IconComponent = _ref.IconComponent,
      title = _ref.title,
      classes = _ref.classes;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
    title: title
  }, /*#__PURE__*/_react["default"].createElement(IconComponent, null)));
}

HeaderRowIcon.propTypes = {
  title: _propTypes["default"].string.isRequired,
  classes: _propTypes["default"].object.isRequired,
  IconComponent: _propTypes["default"].object.isRequired
};
var styled = (0, _core.withStyles)(_styles.styles)(HeaderRowIcon);
exports.HeaderRowIcon = styled;