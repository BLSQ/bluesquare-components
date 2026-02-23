"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControl = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _styles = require("@mui/styles");
var _material = require("@mui/material");
var _classnames = _interopRequireDefault(require("classnames"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
/** @type {string[]} */
var defaultErrors = [];
var styles = function styles(theme) {
  return {
    formControl: {
      width: '100%',
      '& fieldset': {
        borderWidth: '1px !important'
      },
      '&:hover fieldset': {
        borderColor: "".concat(theme.palette.primary.main)
      },
      '&:focused label': {
        color: "".concat(theme.palette.primary.main)
      },
      zIndex: 'auto'
    },
    errorContainer: {
      paddingLeft: theme.spacing(1.6),
      paddingTop: theme.spacing(0.5)
    },
    error: {
      color: theme.palette.error.main,
      fontSize: 14,
      padding: 0
    }
  };
};
function FormControlComponent(_ref) {
  var classes = _ref.classes,
    children = _ref.children,
    _ref$errors = _ref.errors,
    errors = _ref$errors === void 0 ? defaultErrors : _ref$errors,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? null : _ref$id,
    _ref$hideError = _ref.hideError,
    hideError = _ref$hideError === void 0 ? false : _ref$hideError;
  var extraProps = {};
  if (id) {
    extraProps.id = id;
  }
  return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], (0, _extends2["default"])({
    className: classes.formControl,
    variant: "outlined"
  }, extraProps), children, errors.length > 0 && !hideError && /*#__PURE__*/_react["default"].createElement(_material.Box, {
    className: (0, _classnames["default"])(classes.errorContainer, 'error-container')
  }, errors.filter(function (error) {
    return !!error;
  }).map(function (error) {
    return /*#__PURE__*/_react["default"].createElement(_material.Typography, {
      variant: "caption",
      key: error,
      className: classes.error
    }, error);
  })));
}
FormControlComponent.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  children: _propTypes["default"].node.isRequired,
  errors: _propTypes["default"].arrayOf(_propTypes["default"].string.isRequired),
  id: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  hideError: _propTypes["default"].bool
};
var styledComponent = exports.FormControl = (0, _styles.withStyles)(styles)(FormControlComponent);