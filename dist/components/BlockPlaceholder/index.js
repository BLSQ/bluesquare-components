"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockPlaceholder = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("@mui/styles");
var _styles2 = require("./styles");
var BlockPlaceholder = function BlockPlaceholder(_ref) {
  var classes = _ref.classes,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? '50%' : _ref$width;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.placeholder,
    style: {
      width: width
    }
  });
};
BlockPlaceholder.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  width: _propTypes["default"].string
};
var styled = exports.BlockPlaceholder = (0, _styles.withStyles)(_styles2.styles)(BlockPlaceholder);