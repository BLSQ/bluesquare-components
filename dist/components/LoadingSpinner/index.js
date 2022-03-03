"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingSpinner = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
      zIndex: '500'
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