"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddComment = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _useSafeIntl = require("../../../utils/useSafeIntl");

var _messages = require("./messages");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AddComment = function AddComment(_ref) {
  var placeholder = _ref.placeholder,
      minRows = _ref.minRows,
      maxRows = _ref.maxRows,
      onChange = _ref.onChange,
      className = _ref.className,
      buttonText = _ref.buttonText,
      onConfirm = _ref.onConfirm,
      position = _ref.position,
      inline = _ref.inline;

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      comment = _useState2[0],
      setComment = _useState2[1];

  var classes = (0, _styles.useStyles)();
  var intl = (0, _useSafeIntl.useSafeIntl)();
  var handleConfirm = (0, _react.useCallback)(function () {
    onConfirm(comment);
    setComment('');
  }, [comment]);

  var handleChange = function handleChange(e) {
    setComment(e.target.value);
    onChange(e.target.value);
  };

  return /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    direction: inline ? 'row' : 'column',
    alignItems: "center",
    spacing: 2,
    className: position ? classes[position] : null
  }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    className: classes.textAreaContainer
  }, /*#__PURE__*/_react["default"].createElement(_core.TextareaAutosize, {
    className: className !== null && className !== void 0 ? className : classes.textArea,
    minRows: minRows,
    maxRows: maxRows,
    "aria-label": "write comment here",
    placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : intl.formatMessage(_messages.MESSAGES.textAreaPlaceholder),
    onChange: handleChange,
    value: comment,
    autoFocus: true
  })), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    item: true,
    className: classes.commentConfirmButton
  }, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    onClick: handleConfirm,
    variant: "contained",
    color: "primary"
  }, buttonText !== null && buttonText !== void 0 ? buttonText : intl.formatMessage(_messages.MESSAGES.confirmComment))));
};

exports.AddComment = AddComment;
AddComment.propTypes = {
  placeholder: _propTypes["default"].string,
  className: _propTypes["default"].string,
  minRows: _propTypes["default"].number,
  maxRows: _propTypes["default"].number,
  onChange: _propTypes["default"].func,
  onConfirm: _propTypes["default"].func,
  buttonText: _propTypes["default"].string,
  position: _propTypes["default"].string,
  inline: _propTypes["default"].bool
};
AddComment.defaultProps = {
  placeholder: null,
  minRows: 3,
  maxRows: 5,
  onChange: function onChange() {},
  className: null,
  buttonText: null,
  onConfirm: function onConfirm() {},
  position: '',
  inline: true
};