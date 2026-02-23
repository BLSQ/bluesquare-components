"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = exports.styles = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _styles = require("@mui/styles");
var _common = require("../../styles/iaso/common.ts");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var styles = exports.styles = function styles(theme) {
  var _theme$mediumGray$mai, _theme$mediumGray;
  return _objectSpread(_objectSpread({}, (0, _common.commonStyles)(theme)), {}, {
    commentRoot: {
      padding: '10px 20px',
      margin: '0px 5px 5px 5px'
    },
    commentAuthor: {
      margin: 0,
      textAlign: 'left'
    },
    commentPostingTime: {
      textAlign: 'end',
      color: (_theme$mediumGray$mai = (_theme$mediumGray = theme.mediumGray) === null || _theme$mediumGray === void 0 ? void 0 : _theme$mediumGray.main) !== null && _theme$mediumGray$mai !== void 0 ? _theme$mediumGray$mai : '#A2A2A2'
    },
    commentGrid: {
      justifyContent: 'left',
      padding: '0px 10px'
    },
    replyToComment: {
      textAlign: 'end'
    },
    commentText: {
      textAlign: 'justify',
      marginTop: '10px'
    },
    toggleCommentText: {
      alignSelf: 'end',
      cursor: 'default',
      color: '#3f51b5',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    expandThread: {
      textAlign: 'end'
    },
    button: {
      backgroundColor: '#fff',
      color: '#3f51b5'
    },
    childComment: {
      paddingLeft: '20px'
    }
  });
};
var useStyles = exports.useStyles = (0, _styles.makeStyles)(styles);