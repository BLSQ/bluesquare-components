"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Expander = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Visibility = _interopRequireDefault(require("@material-ui/icons/Visibility"));

var _VisibilityOff = _interopRequireDefault(require("@material-ui/icons/VisibilityOff"));

var _useSafeIntl2 = require("../../../utils/useSafeIntl");

var _messages = require("./messages");

var Expander = function Expander(_ref) {
  var isExpanded = _ref.isExpanded,
      setIsExpanded = _ref.setIsExpanded;

  var _useSafeIntl = (0, _useSafeIntl2.useSafeIntl)(),
      formatMessage = _useSafeIntl.formatMessage;

  return isExpanded ? /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    onClick: function onClick() {
      return setIsExpanded(!isExpanded);
    }
  }, /*#__PURE__*/_react["default"].createElement(_VisibilityOff["default"], null)) : /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
    title: formatMessage(_messages.MESSAGES.details)
  }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    onClick: function onClick() {
      return setIsExpanded(!isExpanded);
    }
  }, /*#__PURE__*/_react["default"].createElement(_Visibility["default"], null)));
};

exports.Expander = Expander;
Expander.defaultProps = {
  isExpanded: false,
  setIsExpanded: function setIsExpanded() {
    return null;
  }
};
Expander.propTypes = {
  isExpanded: _propTypes["default"].bool,
  setIsExpanded: _propTypes["default"].func
};