"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _moment = _interopRequireDefault(require("moment"));
var _useSafeIntl = require("../../../localization/useSafeIntl");
var _messages = require("./messages");
var _styles = require("../styles");
var _utils = require("../../../utils");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var MAX_TEXT_LENGTH = 150;
var CommentText = function CommentText(_ref) {
  var text = _ref.text,
    hideOverflow = _ref.hideOverflow,
    toggle = _ref.toggle,
    maxLength = _ref.maxLength,
    _ref$textExpand = _ref.textExpand,
    textExpand = _ref$textExpand === void 0 ? null : _ref$textExpand,
    _ref$textCollapse = _ref.textCollapse,
    textCollapse = _ref$textCollapse === void 0 ? null : _ref$textCollapse;
  var classes = (0, _styles.useStyles)();
  var intl = (0, _useSafeIntl.useSafeIntl)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.commentText
  }, /*#__PURE__*/_react["default"].createElement("p", null, hideOverflow && text.length > maxLength ? (0, _utils.truncateText)(text, MAX_TEXT_LENGTH) : text, ' '), hideOverflow && /*#__PURE__*/_react["default"].createElement("span", {
    onClick: toggle,
    className: classes.toggleCommentText,
    role: "button",
    tabIndex: 0
  }, textExpand !== null && textExpand !== void 0 ? textExpand : intl.formatMessage(_messages.MESSAGES.textExpand)), !hideOverflow && text.length > maxLength && /*#__PURE__*/_react["default"].createElement("span", {
    onClick: toggle,
    className: classes.toggleCommentText,
    role: "button",
    tabIndex: 0
  }, textCollapse !== null && textCollapse !== void 0 ? textCollapse : intl.formatMessage(_messages.MESSAGES.textCollapse)));
};
CommentText.propTypes = {
  text: _propTypes["default"].string.isRequired,
  hideOverflow: _propTypes["default"].bool.isRequired,
  toggle: _propTypes["default"].func.isRequired,
  maxLength: _propTypes["default"].number.isRequired,
  textExpand: _propTypes["default"].string,
  textCollapse: _propTypes["default"].string
};

// credit: https://codesandbox.io/s/comment-box-with-material-ui-10p3c?file=/src/index.js:2810-4030
var Comment = exports.Comment = function Comment(_ref2) {
  var _ref2$avatar = _ref2.avatar,
    avatar = _ref2$avatar === void 0 ? null : _ref2$avatar,
    author = _ref2.author,
    content = _ref2.content,
    _ref2$postingTime = _ref2.postingTime,
    postingTime = _ref2$postingTime === void 0 ? '' : _ref2$postingTime,
    _ref2$classNames = _ref2.classNames,
    classNames = _ref2$classNames === void 0 ? null : _ref2$classNames;
  var intl = (0, _useSafeIntl.useSafeIntl)();
  var defaultClasses = (0, _styles.useStyles)();
  var _useState = (0, _react.useState)(content.length > MAX_TEXT_LENGTH),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    hideTextOverflow = _useState2[0],
    setHideTextOverflow = _useState2[1];
  var toggleOverflowDisplay = (0, _react.useCallback)(function () {
    return setHideTextOverflow(!hideTextOverflow);
  }, [hideTextOverflow]);
  var classes = classNames !== null && classNames !== void 0 ? classNames : defaultClasses;
  var formattedPostingTime = "".concat(intl.formatMessage(_messages.MESSAGES.postingTime), "  ").concat((0, _moment["default"])(postingTime).fromNow());
  return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    wrap: "nowrap",
    spacing: 4
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_material.Avatar, {
    alt: author,
    src: avatar
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    className: classes.commentGrid,
    item: true,
    xs: true,
    zeroMinWidth: true
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: classes.commentAuthor
  }, author), /*#__PURE__*/_react["default"].createElement(CommentText, {
    text: content,
    hideOverflow: hideTextOverflow,
    toggle: toggleOverflowDisplay,
    maxLength: MAX_TEXT_LENGTH
  }), /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    className: classes.commentPostingTime,
    component: "div"
  }, formattedPostingTime)));
};
Comment.propTypes = {
  avatar: _propTypes["default"].string,
  author: _propTypes["default"].string.isRequired,
  content: _propTypes["default"].string.isRequired,
  postingTime: _propTypes["default"].string,
  classNames: _propTypes["default"].arrayOf(_propTypes["default"].string)
};