"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingSpinner = void 0;

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = function styles() {
  return {
    rootFixed: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      zIndex: '10000'
    },
    root: {
      position: 'relative',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.4)',
      zIndex: '1'
    },
    rootTransparent: {
      backgroundColor: 'transparent'
    }
  };
};

var LoadingSpinner = function LoadingSpinner(props) {
  var classes = props.classes,
      size = props.size,
      transparent = props.transparent,
      fixed = props.fixed,
      padding = props.padding;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: padding
    },
    className: (0, _classnames["default"])(fixed && classes.rootFixed, !fixed && classes.root, transparent && classes.rootTransparent)
  }, /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
    size: size
  }));
};

LoadingSpinner.defaultProps = {
  size: 40,
  transparent: false,
  fixed: true,
  padding: 0
};
LoadingSpinner.propTypes = {
  /**
   * Adjust the size of the spinner
   */
  size: _propTypes["default"].number,

  /**
   * I don't know what that does
   */
  transparent: _propTypes["default"].bool,
  fixed: _propTypes["default"].bool,

  /**
   * add padding
   */
  padding: _propTypes["default"].number,
  classes: _propTypes["default"].object.isRequired
};
var styledSpinner = (0, _core.withStyles)(styles)(LoadingSpinner);
exports.LoadingSpinner = styledSpinner;