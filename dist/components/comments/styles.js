"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _styles = require("@material-ui/core/styles");

var _common = require("../../styles/iaso/common");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var styles = function styles(theme) {
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

exports.styles = styles;
var useStyles = (0, _styles.makeStyles)(styles);
exports.useStyles = useStyles;