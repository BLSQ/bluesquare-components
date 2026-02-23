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
var _material = require("@mui/material");
var _useSafeIntl = require("../../../localization/useSafeIntl");
var _messages = require("./messages");
var _styles = require("../styles");
var _AddComment = require("../AddComment");
var _Comment = require("../Comment");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
// credit: https://codesandbox.io/s/comment-box-with-material-ui-10p3c?file=/src/index.js:2810-4030
var SingleComment = exports.SingleComment = function SingleComment(_ref) {
  var _ref$avatar = _ref.avatar,
    avatar = _ref$avatar === void 0 ? null : _ref$avatar,
    author = _ref.author,
    content = _ref.content,
    _ref$postingTime = _ref.postingTime,
    postingTime = _ref$postingTime === void 0 ? '' : _ref$postingTime,
    _ref$classNames = _ref.classNames,
    classNames = _ref$classNames === void 0 ? null : _ref$classNames,
    _ref$actionText = _ref.actionText,
    actionText = _ref$actionText === void 0 ? null : _ref$actionText,
    _ref$onAddComment = _ref.onAddComment,
    onAddComment = _ref$onAddComment === void 0 ? function () {} : _ref$onAddComment,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? null : _ref$id;
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
  return /*#__PURE__*/_react["default"].createElement(_material.Paper, {
    variant: "outlined",
    className: classes.commentRoot
  }, /*#__PURE__*/_react["default"].createElement(_Comment.Comment, {
    avatar: avatar,
    author: author,
    postingTime: postingTime,
    content: content
  }), !addingComment && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.replyToComment
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
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