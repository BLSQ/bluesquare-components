"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _Info = _interopRequireDefault(require("@mui/icons-material/Info"));
var _styles = require("./styles");
var InfoHeader = exports.InfoHeader = function InfoHeader(_ref) {
  var message = _ref.message,
    children = _ref.children;
  var classes = (0, _styles.useStyles)();
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    className: classes.root,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "inline",
    mr: 1
  }, children), /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
    classes: {
      popper: classes.popperFixed
    },
    placement: "bottom",
    title: message
  }, /*#__PURE__*/_react["default"].createElement(_Info["default"], {
    fontSize: "small",
    color: "primary",
    className: classes.icon
  })));
};
InfoHeader.propTypes = {
  message: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]).isRequired
};