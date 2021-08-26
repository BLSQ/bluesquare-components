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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseRoot = {
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  top: 0,
  left: 0
};

var styles = function styles() {
  return {
    rootFixed: _objectSpread(_objectSpread({}, baseRoot), {}, {
      position: 'fixed',
      zIndex: '10000'
    }),
    rootAbsolute: _objectSpread(_objectSpread({}, baseRoot), {}, {
      position: 'absolute',
      zIndex: '10'
    }),
    root: _objectSpread(_objectSpread({}, baseRoot), {}, {
      position: 'relative',
      zIndex: '1'
    }),
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
      absolute = props.absolute,
      padding = props.padding;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      padding: padding
    },
    className: (0, _classnames["default"])(fixed && !absolute && classes.rootFixed, absolute && classes.rootAbsolute, !fixed && !absolute && classes.root, transparent && classes.rootTransparent)
  }, /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], {
    size: size
  }));
};

LoadingSpinner.defaultProps = {
  size: 40,
  transparent: false,
  fixed: true,
  absolute: false,
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
  absolute: _propTypes["default"].bool,

  /**
   * add padding
   */
  padding: _propTypes["default"].number,
  classes: _propTypes["default"].object.isRequired
};
var styledSpinner = (0, _core.withStyles)(styles)(LoadingSpinner);
exports.LoadingSpinner = styledSpinner;