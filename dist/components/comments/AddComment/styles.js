"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = exports.styles = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _styles = require("@mui/styles");
var _common = require("../../../styles/iaso/common.ts");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var styles = exports.styles = function styles(theme) {
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
var useStyles = exports.useStyles = (0, _styles.makeStyles)(styles);