"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TopBar = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Menu = _interopRequireDefault(require("@material-ui/icons/Menu"));

var _ArrowBack = _interopRequireDefault(require("@material-ui/icons/ArrowBack"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = function styles(theme) {
  return {
    menuButton: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(1)
    }
  };
};
/**
 * toggleSidebar originally came from redux. It must now be passed as prop
 *
 */


var TopBar = function TopBar(props) {
  var classes = props.classes,
      title = props.title,
      toggleSidebar = props.toggleSidebar,
      children = props.children,
      displayBackButton = props.displayBackButton,
      goBack = props.goBack;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_AppBar["default"], {
    position: "relative",
    color: "primary"
  }, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], null, !displayBackButton && /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "Menu",
    onClick: toggleSidebar
  }, /*#__PURE__*/_react["default"].createElement(_Menu["default"], null)), displayBackButton && /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "Back",
    onClick: goBack
  }, /*#__PURE__*/_react["default"].createElement(_ArrowBack["default"], null)), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    color: "inherit"
  }, title)), children));
};

TopBar.defaultProps = {
  children: null,
  displayBackButton: false,
  goBack: function goBack() {
    return null;
  },
  title: ''
};
TopBar.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  title: _propTypes["default"].string,
  toggleSidebar: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].any,
  displayBackButton: _propTypes["default"].bool,
  goBack: _propTypes["default"].func
};
var styledTopBar = (0, _core.withStyles)(styles)(TopBar);
exports.TopBar = styledTopBar;