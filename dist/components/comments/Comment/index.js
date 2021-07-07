"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Comment = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _moment = _interopRequireDefault(require("moment"));

var _useSafeIntl = require("../../../utils/useSafeIntl");

var _messages = require("./messages");

var _styles = require("../styles");

require("../../../css/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MAX_TEXT_LENGTH = 150;

var truncateText = function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return "".concat(text.substring(0, maxLength - 4), "...   ");
  }

  return "".concat(text, "   ");
};

var CommentText = function CommentText(_ref) {
  var text = _ref.text,
      hideOverflow = _ref.hideOverflow,
      toggle = _ref.toggle,
      maxLength = _ref.maxLength,
      textExpand = _ref.textExpand,
      textCollapse = _ref.textCollapse;
  var classes = (0, _styles.useStyles)();
  var intl = (0, _useSafeIntl.useSafeIntl)();
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.commentText
  }, /*#__PURE__*/_react["default"].createElement("p", null, hideOverflow && text.length > maxLength ? truncateText(text, MAX_TEXT_LENGTH) : text, ' '), hideOverflow && /*#__PURE__*/_react["default"].createElement("span", {
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
CommentText.defaultProps = {
  textExpand: null,
  textCollapse: null
}; // credit: https://codesandbox.io/s/comment-box-with-material-ui-10p3c?file=/src/index.js:2810-4030

var Comment = function Comment(_ref2) {
  var avatar = _ref2.avatar,
      author = _ref2.author,
      content = _ref2.content,
      postingTime = _ref2.postingTime,
      classNames = _ref2.classNames;
  var intl = (0, _useSafeIntl.useSafeIntl)();
  var defaultClasses = (0, _styles.useStyles)();

  var _useState = (0, _react.useState)(content.length > MAX_TEXT_LENGTH),
      _useState2 = _slicedToArray(_useState, 2),
      hideTextOverflow = _useState2[0],
      setHideTextOverflow = _useState2[1];

  var toggleOverflowDisplay = (0, _react.useCallback)(function () {
    return setHideTextOverflow(!hideTextOverflow);
  }, [hideTextOverflow]);
  var classes = classNames !== null && classNames !== void 0 ? classNames : defaultClasses;
  var formattedPostingTime = "".concat(intl.formatMessage(_messages.MESSAGES.postingTime), "  ").concat((0, _moment["default"])(postingTime).fromNow());
  return /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    wrap: "nowrap",
    spacing: 4
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_core.Avatar, {
    alt: author,
    src: avatar
  })), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
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
  }), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "body2",
    className: classes.commentPostingTime,
    component: "div"
  }, formattedPostingTime)));
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