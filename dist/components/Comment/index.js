"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _useSafeIntl = require("../../utils/useSafeIntl");

var _messages = require("./messages");

var _styles = require("./styles");

require("../../css/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// credit: https://codesandbox.io/s/comment-box-with-material-ui-10p3c?file=/src/index.js:2810-4030
var Comment = function Comment(_ref) {
  var avatar = _ref.avatar,
      author = _ref.author,
      content = _ref.content,
      postingTime = _ref.postingTime,
      classNames = _ref.classNames;
  var intl = (0, _useSafeIntl.useSafeIntl)();
  var defaultClasses = (0, _styles.useStyles)();
  var classes = classNames !== null && classNames !== void 0 ? classNames : defaultClasses;
  return /*#__PURE__*/_react["default"].createElement(_core.Paper, {
    className: classes.commentRoot
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    wrap: "nowrap",
    spacing: 2
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true
  }, avatar && /*#__PURE__*/_react["default"].createElement(_core.Avatar, {
    alt: author,
    src: avatar
  })), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    className: classes.commentGrid,
    item: true,
    xs: true,
    zeroMinWidth: true
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: classes.commentAuthor
  }, author), /*#__PURE__*/_react["default"].createElement("p", {
    className: classes.commentText
  }, content), /*#__PURE__*/_react["default"].createElement("p", {
    className: classes.commentPostiingTime
  }, "".concat(intl.formatMessage(_messages.MESSAGES.postingTime), " ").concat(postingTime)))));
};

exports.Comment = Comment;
Comment.propTypes = {
  avatar: _propTypes["default"].string,
  author: _propTypes["default"].string.isRequired,
  content: _propTypes["default"].string.isRequired,
  postingTime: _propTypes["default"].string,
  classNames: _propTypes["default"].arrayOf(_propTypes["default"].string)
};
Comment.defaultProps = {
  avatar: null,
  postingTime: '',
  classNames: null
};