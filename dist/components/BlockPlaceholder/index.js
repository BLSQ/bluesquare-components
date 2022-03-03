"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockPlaceholder = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _styles = require("./styles");

var BlockPlaceholder = function BlockPlaceholder(_ref) {
  var classes = _ref.classes,
      width = _ref.width;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.placeholder,
    style: {
      width: width
    }
  });
};

BlockPlaceholder.defaultProps = {
  width: '50%'
};
BlockPlaceholder.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  width: _propTypes["default"].string
};
var styled = (0, _core.withStyles)(_styles.styles)(BlockPlaceholder);
exports.BlockPlaceholder = styled;