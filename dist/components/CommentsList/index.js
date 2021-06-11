"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentsList = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Comment = require("../Comment");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CommentsList = function CommentsList(_ref) {
  var comments = _ref.comments;
  var commentsArray = comments.map(function (comment) {
    return /*#__PURE__*/_react["default"].createElement(_Comment.Comment, {
      key: "comment".concat(comment.author).concat(comment.dateTime).concat(comment.id),
      author: comment.author,
      content: comment.comment,
      postingTime: comment.dateTime
    });
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, commentsArray);
};

exports.CommentsList = CommentsList;
CommentsList.propTypes = {
  comments: _propTypes["default"].array
};
CommentsList.defaultProps = {
  comments: []
};