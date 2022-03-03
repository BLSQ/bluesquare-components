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

var _core = require("@material-ui/core");

var _styles = require("../styles");

var _messages = require("./messages");

var _useSafeIntl = require("../../../utils/useSafeIntl");

var _AddComment = require("../AddComment");

var _Comment = require("../Comment");

var _SingleComment = require("../SingleComment");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CommentWithThread = function CommentWithThread(_ref) {
  var comments = _ref.comments,
      actionText = _ref.actionText,
      onAddComment = _ref.onAddComment,
      parentId = _ref.parentId;
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
    if (array.length === 1) {// const { author, dateTime, id, comment } = array[0];
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
      }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
        onClick: toggleExpand,
        className: classes.button,
        size: "small"
      }, intl.formatMessage(isExpanded ? _messages.MESSAGES.collapse : _messages.MESSAGES.expand))), !addingComment && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.replyToComment
      }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
        className: classes.button,
        size: "small",
        onClick: toggleAddComment
      }, actionText !== null && actionText !== void 0 ? actionText : intl.formatMessage(_messages.MESSAGES.addReply))), index === comments.length - 1 && addingComment && /*#__PURE__*/_react["default"].createElement(_AddComment.AddComment, {
        onConfirm: handleConfirm
      }), index < comments.length - 1 && isExpanded && /*#__PURE__*/_react["default"].createElement(_core.Divider, {
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
      id: comments[0].id // onButtonClick={() => {
      //     setIsExpanded(true);
      // }}

    });
  }

  return /*#__PURE__*/_react["default"].createElement(_core.Paper, {
    className: classes.commentRoot,
    variant: "outlined",
    elevation: 1
  }, isExpanded ? makeComment(comments) : makeComment([comments[0]]));
};

exports.CommentWithThread = CommentWithThread;
CommentWithThread.propTypes = {
  comments: _propTypes["default"].array,
  actionText: _propTypes["default"].string,
  onAddComment: _propTypes["default"].func,
  parentId: _propTypes["default"].number
};
CommentWithThread.defaultProps = {
  comments: [],
  actionText: null,
  onAddComment: function onAddComment() {},
  parentId: null
};