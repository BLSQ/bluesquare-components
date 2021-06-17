"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = exports.styles = void 0;

var _styles = require("@material-ui/core/styles");

var _common = require("../../styles/iaso/common");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var _theme$mediumGray$mai, _theme$mediumGray;

  return _objectSpread(_objectSpread({}, (0, _common.commonStyles)(theme)), {}, {
    commentRoot: {
      padding: '20px 20px',
      marginBottom: '5px'
    },
    commentAuthor: {
      margin: 0,
      textAlign: 'left'
    },
    // commentText: { textAlign: 'justify' },
    commentPostingTime: {
      textAlign: 'end',
      color: (_theme$mediumGray$mai = (_theme$mediumGray = theme.mediumGray) === null || _theme$mediumGray === void 0 ? void 0 : _theme$mediumGray.main) !== null && _theme$mediumGray$mai !== void 0 ? _theme$mediumGray$mai : '#A2A2A2'
    },
    commentGrid: {
      justifyContent: 'left'
    },
    replyToComment: {
      textAlign: 'end'
    },
    commentText: {
      display: 'inline-flex',
      textAlign: 'justify'
    },
    toggleCommentText: {
      alignSelf: 'end'
    } // commentRoot: { padding: '20px 20px', marginBottom: '5px' },
    // commentAuthor: { margin: 0, textAlign: 'left' },
    // commentText: { textAlign: 'justify' },
    // commentPostingTime: { textAlign: 'left', color: theme.ligthGray },
    // commentGrid: { justifyContent: 'left' },
    // black: { color: 'black' },
    // blue: { color: 'blue' },
    // red: { color: 'red' },
    // green: { color: 'green' },
    // yellow: { color: 'yellow' },
    // purple: { color: 'purple' },
    // amber: { color: 'amber' },

  });
};

exports.styles = styles;
var useStyles = (0, _styles.makeStyles)(styles);
exports.useStyles = useStyles;