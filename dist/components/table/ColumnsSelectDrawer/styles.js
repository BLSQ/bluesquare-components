"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var styles = function styles(theme) {
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

exports.styles = styles;