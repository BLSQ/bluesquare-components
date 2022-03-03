"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControl = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

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
      marginTopZero = _ref.marginTopZero,
      id = _ref.id;
  var classNames = [classes.formControl]; // FIXME the logic seems to inverted here, but changing it leads to lots of visual bugs in Iaso

  if (!withMarginTop) {
    classNames.push(classes.formControlWithMarginTop);
  } // placing marginTopZero here to make sure it overides whatever margin was given by withMarginTop


  if (marginTopZero) {
    classNames.push(classes.marginTopZero);
  }

  var extraProps = {};

  if (id) {
    extraProps.id = id;
  }

  return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], (0, _extends2["default"])({
    className: classNames.join(' '),
    variant: "outlined"
  }, extraProps), children, errors.length > 0 && errors.map(function (error) {
    return /*#__PURE__*/_react["default"].createElement(_core.Typography, {
      key: error,
      className: classes.error
    }, error);
  }));
}

FormControlComponent.defaultProps = {
  withMarginTop: true,
  marginTopZero: false,
  errors: [],
  id: null
};
FormControlComponent.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  children: _propTypes["default"].node.isRequired,
  withMarginTop: _propTypes["default"].bool,
  // FIXME: these 2 props are redundant, but changing withMarginTop breaks alignment in Iaso
  marginTopZero: _propTypes["default"].bool,
  errors: _propTypes["default"].arrayOf(_propTypes["default"].string.isRequired),
  id: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string])
};
var styledComponent = (0, _core.withStyles)(styles)(FormControlComponent);
exports.FormControl = styledComponent;