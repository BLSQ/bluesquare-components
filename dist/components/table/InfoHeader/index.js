"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InfoHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var InfoHeader = function InfoHeader(_ref) {
  var message = _ref.message,
      children = _ref.children;
  var classes = (0, _styles.useStyles)();
  return /*#__PURE__*/_react["default"].createElement(_core.Box, {
    className: classes.root,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/_react["default"].createElement(_core.Box, {
    display: "inline",
    mr: 1
  }, children), /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
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

exports.InfoHeader = InfoHeader;
InfoHeader.propTypes = {
  message: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].string]).isRequired
};