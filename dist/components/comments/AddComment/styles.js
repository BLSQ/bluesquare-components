"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles = require("@material-ui/core/styles");

var _common = require("../../../styles/iaso/common");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var styles = function styles(theme) {
  return _objectSpread(_objectSpread({}, (0, _common.commonStyles)(theme)), {}, {
    textAreaContainer: {
      width: '100%',
      marginTop: '20px'
    },
    textArea: {
      width: '100%',
      borderRadius: '6px',
      borderColor: '#A2A2A2',
      padding: '8px',
      resize: 'vertical'
    },
    left: {
      textAlign: 'left'
    },
    right: {
      textAlign: 'right'
    },
    center: {
      textAlign: 'center'
    },
    commentConfirmButton: {
      marginBottom: '20px',
      marginLeft: 'auto'
    },
    button: {
      color: '#fff',
      backgroundColor: '#3f51b5'
    }
  });
};

exports.styles = styles;
var useStyles = (0, _styles.makeStyles)(styles);
exports.useStyles = useStyles;