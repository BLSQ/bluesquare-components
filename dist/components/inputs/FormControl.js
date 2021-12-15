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
        borderColor: "".concat(theme.palette.primary.main)
      },
      '&:focused label': {
        color: "".concat(theme.palette.primary.main)
      },
      zIndex: 'auto'
    },
    formControlWithMarginTop: {
      marginTop: theme.spacing(2)
    },
    error: {
      color: theme.palette.error.main
    },
    marginTopZero: {
      marginTop: 0
    }
  };
};

function FormControlComponent(_ref) {
  var classes = _ref.classes,
      children = _ref.children,
      withMarginTop = _ref.withMarginTop,
      errors = _ref.errors,
      marginTopZero = _ref.marginTopZero;
  var classNames = [classes.formControl]; // FIXME the logic seems to inverted here, but changing it leads to lots of visual bugs in Iaso

  if (!withMarginTop) {
    classNames.push(classes.formControlWithMarginTop);
  } // placing marginTopZero here to make sure it overides whatever margin was given by withMarginTop


  if (marginTopZero) {
    classNames.push(classes.marginTopZero);
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
  marginTopZero: false,
  errors: []
};
FormControlComponent.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  children: _propTypes["default"].node.isRequired,
  withMarginTop: _propTypes["default"].bool,
  // FIXME: these 2 props are redundant, but changing withMarginTop breaks alignment in Iaso
  marginTopZero: _propTypes["default"].bool,
  errors: _propTypes["default"].arrayOf(_propTypes["default"].string.isRequired)
};
var styledComponent = (0, _core.withStyles)(styles)(FormControlComponent);
exports.FormControl = styledComponent;