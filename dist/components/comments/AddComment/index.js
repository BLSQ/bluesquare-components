"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddComment = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _material = require("@mui/material");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _useSafeIntl = require("../../../localization/useSafeIntl");
var _messages = require("./messages");
var _styles = require("./styles");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var AddComment = exports.AddComment = function AddComment(_ref) {
  var _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? null : _ref$placeholder,
    _ref$minRows = _ref.minRows,
    minRows = _ref$minRows === void 0 ? 3 : _ref$minRows,
    _ref$maxRows = _ref.maxRows,
    maxRows = _ref$maxRows === void 0 ? 5 : _ref$maxRows,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? null : _ref$className,
    _ref$buttonText = _ref.buttonText,
    buttonText = _ref$buttonText === void 0 ? null : _ref$buttonText,
    _ref$onConfirm = _ref.onConfirm,
    onConfirm = _ref$onConfirm === void 0 ? function () {} : _ref$onConfirm,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? '' : _ref$position,
    _ref$inline = _ref.inline,
    inline = _ref$inline === void 0 ? true : _ref$inline;
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
  return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    container: true,
    direction: inline ? 'row' : 'column',
    alignItems: "center",
    spacing: 2,
    className: position ? classes[position] : null
  }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    className: classes.textAreaContainer
  }, /*#__PURE__*/_react["default"].createElement(_material.TextareaAutosize, {
    className: className !== null && className !== void 0 ? className : classes.textArea,
    minRows: minRows,
    maxRows: maxRows,
    "aria-label": "write comment here",
    placeholder: placeholder !== null && placeholder !== void 0 ? placeholder : intl.formatMessage(_messages.MESSAGES.textAreaPlaceholder),
    onChange: handleChange,
    value: comment,
    autoFocus: true
  })), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
    item: true,
    className: classes.commentConfirmButton
  }, /*#__PURE__*/_react["default"].createElement(_material.Button, {
    onClick: handleConfirm,
    variant: "contained",
    color: "primary"
  }, buttonText !== null && buttonText !== void 0 ? buttonText : intl.formatMessage(_messages.MESSAGES.confirmComment))));
};
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