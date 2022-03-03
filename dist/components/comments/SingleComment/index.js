"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleComment = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _useSafeIntl = require("../../../utils/useSafeIntl");

var _messages = require("./messages");

var _styles = require("../styles");

var _AddComment = require("../AddComment");

var _Comment = require("../Comment");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// credit: https://codesandbox.io/s/comment-box-with-material-ui-10p3c?file=/src/index.js:2810-4030
var SingleComment = function SingleComment(_ref) {
  var avatar = _ref.avatar,
      author = _ref.author,
      content = _ref.content,
      postingTime = _ref.postingTime,
      classNames = _ref.classNames,
      actionText = _ref.actionText,
      onAddComment = _ref.onAddComment,
      id = _ref.id;
  var intl = (0, _useSafeIntl.useSafeIntl)();
  var defaultClasses = (0, _styles.useStyles)();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      addingComment = _useState2[0],
      setAddingComment = _useState2[1];

  var classes = classNames !== null && classNames !== void 0 ? classNames : defaultClasses;
  var handleConfirm = (0, _react.useCallback)(function (newComment) {
    setAddingComment(false);
    onAddComment(newComment, id);
  }, [id, onAddComment]);
  return /*#__PURE__*/_react["default"].createElement(_core.Paper, {
    variant: "outlined",
    className: classes.commentRoot
  }, /*#__PURE__*/_react["default"].createElement(_Comment.Comment, {
    avatar: avatar,
    author: author,
    postingTime: postingTime,
    content: content
  }), !addingComment && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.replyToComment
  }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    className: classes.button,
    size: "small",
    onClick: function onClick() {
      setAddingComment(true);
    }
  }, actionText !== null && actionText !== void 0 ? actionText : intl.formatMessage(_messages.MESSAGES.reply))), addingComment && /*#__PURE__*/_react["default"].createElement(_AddComment.AddComment, {
    position: "right",
    onConfirm: handleConfirm
  }));
};

exports.SingleComment = SingleComment;
SingleComment.propTypes = {
  avatar: _propTypes["default"].string,
  author: _propTypes["default"].string.isRequired,
  content: _propTypes["default"].string.isRequired,
  postingTime: _propTypes["default"].string,
  classNames: _propTypes["default"].arrayOf(_propTypes["default"].string),
  actionText: _propTypes["default"].string,
  onAddComment: _propTypes["default"].func,
  id: _propTypes["default"].number
};
SingleComment.defaultProps = {
  avatar: null,
  postingTime: '',
  classNames: null,
  actionText: null,
  onAddComment: function onAddComment() {},
  id: null
};