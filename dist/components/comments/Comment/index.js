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

var _styles = require("./styles");

var _AddComment = require("../AddComment");

require("../../../css/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// TODO refactor style import
// credit: https://codesandbox.io/s/comment-box-with-material-ui-10p3c?file=/src/index.js:2810-4030
var Comment = function Comment(_ref) {
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
      _useState2 = _slicedToArray(_useState, 2),
      addingComment = _useState2[0],
      setAddingComment = _useState2[1];

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
  }, content), /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "body2",
    className: classes.commentPostingTime
  }, "".concat(intl.formatMessage(_messages.MESSAGES.postingTime), "  ").concat((0, _moment["default"])(parseInt(postingTime, 10)).fromNow())), !addingComment && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.replyToComment
  }, /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "overline",
    onClick: function onClick() {
      setAddingComment(true);
    }
  }, actionText)), addingComment && /*#__PURE__*/_react["default"].createElement(_AddComment.AddComment, {
    position: "right",
    buttonText: actionText,
    onConfirm: function onConfirm(newComment) {
      setAddingComment(false);
      onAddComment(newComment, id);
    }
  }))));
};

exports.Comment = Comment;
Comment.propTypes = {
  avatar: _propTypes["default"].string,
  author: _propTypes["default"].string.isRequired,
  content: _propTypes["default"].string.isRequired,
  postingTime: _propTypes["default"].string,
  classNames: _propTypes["default"].arrayOf(_propTypes["default"].string),
  actionText: _propTypes["default"].string,
  onAddComment: _propTypes["default"].func,
  id: _propTypes["default"].number
};
Comment.defaultProps = {
  avatar: null,
  postingTime: '',
  classNames: null,
  actionText: 'add comment',
  onAddComment: function onAddComment() {},
  id: null
};