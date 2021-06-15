"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentsList = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _styles = require("./styles");

var _messages = require("../../Comment/messages");

var _useSafeIntl = require("../../../utils/useSafeIntl");

var _AddComment = require("../AddComment");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var assignColors = function assignColors(comments) {
  var availableColors = ['black', 'blue', 'red', 'green', 'yellow', 'purple', 'amber'];
  var colorIndex = 0;
  var result = {};
  comments.forEach(function (comment) {
    if (!result[comment.authorId]) {
      result[comment.authorId] = availableColors[colorIndex];

      if (colorIndex < availableColors.length - 1) {
        colorIndex += 1;
      } else {
        colorIndex = 0;
      }
    }
  });
  return result;
};

var CommentsList = function CommentsList(_ref) {
  var comments = _ref.comments,
      actionText = _ref.actionText,
      onAddComment = _ref.onAddComment;
  var classes = (0, _styles.useStyles)();
  var intl = (0, _useSafeIntl.useSafeIntl)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      addingComment = _useState2[0],
      setAddingComment = _useState2[1];

  var assignedColors = assignColors(comments);
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
      className: "".concat(classes.commentAuthor, " ").concat(classes[assignedColors[comment.authorId]])
    }, comment.author), /*#__PURE__*/_react["default"].createElement("p", {
      className: classes.commentText
    }, comment.comment), /*#__PURE__*/_react["default"].createElement("p", {
      className: classes.commentPostingTime
    }, "".concat(intl.formatMessage(_messages.MESSAGES.postingTime), " ").concat(comment.dateTime)), index === comments.length - 1 && !addingComment && /*#__PURE__*/_react["default"].createElement(_core.Typography, {
      variant: "overline",
      onClick: function onClick() {
        setAddingComment(true);
      }
    }, actionText), index === comments.length - 1 && addingComment && /*#__PURE__*/_react["default"].createElement(_AddComment.AddComment, {
      buttonText: actionText,
      onConfirm: function onConfirm(newComment) {
        var _comment$parentId;

        setAddingComment(false);
        onAddComment(newComment, (_comment$parentId = comment.parentId) !== null && _comment$parentId !== void 0 ? _comment$parentId : comment.id);
      }
    }))), index < comments.length - 1 && /*#__PURE__*/_react["default"].createElement(_core.Divider, {
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
  comments: _propTypes["default"].array,
  actionText: _propTypes["default"].string,
  onAddComment: _propTypes["default"].func
};
CommentsList.defaultProps = {
  comments: [],
  actionText: 'add comment',
  onAddComment: function onAddComment() {}
};