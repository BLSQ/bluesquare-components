"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputLabel = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = function styles(theme) {
  return {
    inputLabel: {
      color: 'rgba(0, 0, 0, 0.4)',
      paddingLeft: 3,
      paddingRight: 3,
      transition: theme.transitions.create(['all'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    shrink: {
      fontSize: 20,
      marginTop: -2,
      backgroundColor: 'white'
    },
    shrinkFocused: {
      fontSize: 20,
      marginTop: -2,
      backgroundColor: 'white',
      color: theme.palette.primary.main
    }
  };
};

function InputLabelComponent(_ref) {
  var classes = _ref.classes,
      htmlFor = _ref.htmlFor,
      label = _ref.label,
      required = _ref.required,
      isFocused = _ref.isFocused,
      shrink = _ref.shrink,
      error = _ref.error;
  return /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    name: htmlFor.replace('input-text-', ''),
    htmlFor: htmlFor,
    classes: {
      shrink: isFocused ? classes.shrinkFocused : classes.shrink
    },
    className: classes.inputLabel,
    shrink: shrink,
    error: error
  }, label, required && /*#__PURE__*/_react["default"].createElement("sup", null, " *"));
}

InputLabelComponent.defaultProps = {
  isFocused: false,
  shrink: true,
  error: false
};
InputLabelComponent.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  htmlFor: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string.isRequired,
  required: _propTypes["default"].bool.isRequired,
  isFocused: _propTypes["default"].bool,
  shrink: _propTypes["default"].bool,
  error: _propTypes["default"].bool
};
var styledComponent = (0, _core.withStyles)(styles)(InputLabelComponent);
exports.InputLabel = styledComponent;