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
  return _objectSpread(_objectSpread({}, (0, _common.commonStyles)(theme)), {}, {
    commentRoot: {
      padding: '40px 20px'
    },
    commentAuthor: {
      margin: 0,
      textAlign: 'left'
    },
    commentText: {
      textAlign: 'justify'
    },
    commentPostingTime: {
      textAlign: 'left',
      color: theme.gray
    },
    commentGrid: {
      justifyContent: 'left'
    }
  });
};

exports.styles = styles;
var useStyles = (0, _styles.makeStyles)(styles);
exports.useStyles = useStyles;