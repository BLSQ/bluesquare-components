"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentsList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _styles = require("../Comment/styles");

var _messages = require("../Comment/messages");

var _useSafeIntl = require("../../utils/useSafeIntl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CommentsList = function CommentsList(_ref) {
  var comments = _ref.comments;
  var classes = (0, _styles.useStyles)();
  var intl = (0, _useSafeIntl.useSafeIntl)();
  var commentsArray = comments.map(function (comment, index) {
    var _ref2, _ref3, _ref4;

    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
      key: (_ref2 = "Fragment".concat(comment.author).concat(comment.dateTime).concat(comment.id)) !== null && _ref2 !== void 0 ? _ref2 : '' // className={classes.commentWrapper}

    }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
      container: true,
      wrap: "nowrap",
      spacing: 2,
      key: (_ref3 = "Grid".concat(comment.author).concat(comment.dateTime).concat(comment.id)) !== null && _ref3 !== void 0 ? _ref3 : ''
    }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
      item: true
    }, comment.avatar && /*#__PURE__*/_react["default"].createElement(_core.Avatar, {
      alt: comment.author,
      src: comment.avatar
    })), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
      className: classes.commentGrid,
      item: true,
      xs: true,
      zeroMinWidth: true
    }, /*#__PURE__*/_react["default"].createElement("h4", {
      className: classes.commentAuthor
    }, comment.author), /*#__PURE__*/_react["default"].createElement("p", {
      className: classes.commentText
    }, comment.comment), /*#__PURE__*/_react["default"].createElement("p", {
      className: classes.commentPostingTime
    }, "".concat(intl.formatMessage(_messages.MESSAGES.postingTime), " ").concat(comment.dateTime)))), index < comments.length - 1 && /*#__PURE__*/_react["default"].createElement(_core.Divider, {
      variant: "fullWidth",
      style: {
        margin: '30px 0'
      },
      key: (_ref4 = "divider".concat(comment.author).concat(comment.dateTime).concat(comment.id)) !== null && _ref4 !== void 0 ? _ref4 : ''
    }));
  });
  return /*#__PURE__*/_react["default"].createElement(_core.Paper, {
    className: classes.commentRoot
  }, commentsArray);
};

exports.CommentsList = CommentsList;
CommentsList.propTypes = {
  comments: _propTypes["default"].array
};
CommentsList.defaultProps = {
  comments: []
};