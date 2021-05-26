"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControl = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = function styles(theme) {
  return {
    formControl: {
      width: '100%',
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(1),
      '& fieldset': {
        borderWidth: '1px !important'
      },
      '&:hover fieldset': {
        borderColor: "".concat(theme.palette.primary.main, "  !important")
      },
      '&:focused label': {
        color: "".concat(theme.palette.primary.main, "  !important")
      },
      zIndex: 'auto'
    },
    formControlWithMarginTop: {
      marginTop: theme.spacing(2)
    },
    error: {
      color: theme.palette.error.main
    }
  };
};

function FormControlComponent(_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      withMarginTop = _ref.withMarginTop,
      errors = _ref.errors;
  var classNames = [classes.formControl];

  if (!withMarginTop) {
    classNames.push(classes.formControlWithMarginTop);
  }

  return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    className: classNames.join(' '),
    variant: "outlined"
  }, children, errors.length > 0 && errors.map(function (error) {
    return /*#__PURE__*/_react["default"].createElement(_core.Typography, {
      key: error,
      className: classes.error
    }, error);
  }));
}

FormControlComponent.defaultProps = {
  withMarginTop: true,
  errors: []
};
FormControlComponent.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  children: _propTypes["default"].node.isRequired,
  withMarginTop: _propTypes["default"].bool,
  errors: _propTypes["default"].arrayOf(_propTypes["default"].string.isRequired)
};
var styledComponent = (0, _core.withStyles)(styles)(FormControlComponent);
exports.FormControl = styledComponent;