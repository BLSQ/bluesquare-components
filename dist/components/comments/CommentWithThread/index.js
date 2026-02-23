"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentWithThread = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _styles = require("../styles");
var _messages = require("./messages");
var _useSafeIntl = require("../../../localization/useSafeIntl");
var _AddComment = require("../AddComment");
var _Comment = require("../Comment");
var _SingleComment = require("../SingleComment");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var CommentWithThread = exports.CommentWithThread = function CommentWithThread(_ref) {
  var _ref$comments = _ref.comments,
    comments = _ref$comments === void 0 ? [] : _ref$comments,
    _ref$actionText = _ref.actionText,
    actionText = _ref$actionText === void 0 ? null : _ref$actionText,
    _ref$onAddComment = _ref.onAddComment,
    onAddComment = _ref$onAddComment === void 0 ? function () {} : _ref$onAddComment,
    _ref$parentId = _ref.parentId,
    parentId = _ref$parentId === void 0 ? null : _ref$parentId;
  var classes = (0, _styles.useStyles)();
  var intl = (0, _useSafeIntl.useSafeIntl)();
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    addingComment = _useState2[0],
    setAddingComment = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    isExpanded = _useState4[0],
    setIsExpanded = _useState4[1];
  var toggleExpand = (0, _react.useCallback)(function () {
    if (isExpanded) {
      setAddingComment(false);
    }
    setIsExpanded(!isExpanded);
  }, [isExpanded]);
  var toggleAddComment = function toggleAddComment() {
    setAddingComment(true);
    setIsExpanded(true);
  };
  var handleConfirm = (0, _react.useCallback)(function (newComment) {
    setAddingComment(false);
    onAddComment(newComment, parentId);
  }, [onAddComment, parentId]);
  var handleSingleCommentConfirm = (0, _react.useCallback)(function (newComment, id) {
    setAddingComment(false);
    setIsExpanded(true);
    onAddComment(newComment, id);
  }, [onAddComment]);
  var makeComment = function makeComment(array) {
    if (array.length === 1) {
      // const { author, dateTime, id, comment } = array[0];
      // return (
      //     <SingleComment
      //         onAddComment={handleSingleCommentConfirm}
      //         author={author}
      //         content={comment}
      //         postingTime={dateTime}
      //         id={id}
      //     />
      // );
    }
    return array.map(function (comment, index) {
      var _ref2, _ref3;
      return /*#__PURE__*/_react["default"].createElement("div", {
        key: (_ref2 = "Fragment".concat(comment.author).concat(comment.dateTime).concat(comment.id)) !== null && _ref2 !== void 0 ? _ref2 : '',
        className: index === 0 ? '' : classes.childComment
      }, /*#__PURE__*/_react["default"].createElement(_Comment.Comment, {
        avatar: comment.avatar,
        author: comment.author,
        postingTime: comment.dateTime,
        content: comment.comment
      }), index === 0 && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.expandThread
      }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
        onClick: toggleExpand,
        className: classes.button,
        size: "small"
      }, intl.formatMessage(isExpanded ? _messages.MESSAGES.collapse : _messages.MESSAGES.expand))), !addingComment && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.replyToComment
      }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
        className: classes.button,
        size: "small",
        onClick: toggleAddComment
      }, actionText !== null && actionText !== void 0 ? actionText : intl.formatMessage(_messages.MESSAGES.addReply))), index === comments.length - 1 && addingComment && /*#__PURE__*/_react["default"].createElement(_AddComment.AddComment, {
        onConfirm: handleConfirm
      }), index < comments.length - 1 && isExpanded && /*#__PURE__*/_react["default"].createElement(_material.Divider, {
        variant: "fullWidth",
        style: {
          margin: '30px 0'
        },
        key: (_ref3 = "divider".concat(comment.author).concat(comment.dateTime).concat(comment.id)) !== null && _ref3 !== void 0 ? _ref3 : ''
      }));
    });
  };
  if (comments.length === 1) {
    return /*#__PURE__*/_react["default"].createElement(_SingleComment.SingleComment, {
      onAddComment: handleSingleCommentConfirm,
      author: comments[0].author,
      content: comments[0].comment,
      postingTime: comments[0].dateTime,
      id: comments[0].id
    });
  }
  return /*#__PURE__*/_react["default"].createElement(_material.Paper, {
    className: classes.commentRoot,
    variant: "outlined",
    elevation: 1
  }, isExpanded ? makeComment(comments) : makeComment([comments[0]]));
};
CommentWithThread.propTypes = {
  comments: _propTypes["default"].array,
  actionText: _propTypes["default"].string,
  onAddComment: _propTypes["default"].func,
  parentId: _propTypes["default"].number
};