"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Expander = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _Visibility = _interopRequireDefault(require("@mui/icons-material/Visibility"));
var _VisibilityOff = _interopRequireDefault(require("@mui/icons-material/VisibilityOff"));
var _useSafeIntl2 = require("../../../localization/useSafeIntl");
var _messages = require("./messages");
var Expander = exports.Expander = function Expander(_ref) {
  var _ref$isExpanded = _ref.isExpanded,
    isExpanded = _ref$isExpanded === void 0 ? false : _ref$isExpanded,
    _ref$setIsExpanded = _ref.setIsExpanded,
    setIsExpanded = _ref$setIsExpanded === void 0 ? function () {
      return null;
    } : _ref$setIsExpanded;
  var _useSafeIntl = (0, _useSafeIntl2.useSafeIntl)(),
    formatMessage = _useSafeIntl.formatMessage;
  return isExpanded ? /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: function onClick() {
      return setIsExpanded(!isExpanded);
    }
  }, /*#__PURE__*/_react["default"].createElement(_VisibilityOff["default"], null)) : /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
    title: formatMessage(_messages.MESSAGES.details)
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: function onClick() {
      return setIsExpanded(!isExpanded);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Visibility["default"], null)));
};
Expander.propTypes = {
  isExpanded: _propTypes["default"].bool,
  setIsExpanded: _propTypes["default"].func
};