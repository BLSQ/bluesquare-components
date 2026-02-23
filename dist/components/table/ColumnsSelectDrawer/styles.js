"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var styles = exports.styles = function styles(theme) {
  return {
    root: {
      width: 400,
      overflow: 'hidden'
    },
    toolbar: _objectSpread(_objectSpread({}, theme.mixins.toolbar), {}, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      height: theme.spacing(8)
    }),
    search: {
      marginLeft: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%'
    },
    list: {
      height: "calc(100vh - ".concat(theme.spacing(8), "px)"),
      overflowY: 'auto',
      overflowX: 'hidden'
    },
    listItem: {
      height: theme.spacing(6)
    },
    "switch": {
      marginRight: theme.spacing(1)
    },
    placeholder: {
      height: 15,
      backgroundColor: theme.palette.ligthGray.main,
      borderRadius: 5,
      marginRight: theme.spacing(1),
      width: '50%'
    },
    input: {
      width: '100%',
      padding: 0
    }
  };
};