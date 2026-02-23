"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Count = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _reactIntl = require("react-intl");
var _utils = require("../../../utils");
var _messages = require("./messages");
var Count = exports.Count = function Count(_ref) {
  var _ref$count = _ref.count,
    count = _ref$count === void 0 ? 0 : _ref$count,
    _ref$selectCount = _ref.selectCount,
    selectCount = _ref$selectCount === void 0 ? 0 : _ref$selectCount;
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    py: 2,
    display: "flex",
    justifyContent: "flex-end",
    className: "pagination-count"
  }, selectCount > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "inline-block",
    mr: 1
  }, "".concat((0, _utils.formatThousand)(selectCount), " "), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, _messages.MESSAGES.selected)), "-"), count > 0 && /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "inline-block",
    ml: 1
  }, "".concat((0, _utils.formatThousand)(count), " "), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, _messages.MESSAGES.results)));
};
Count.propTypes = {
  count: _propTypes["default"].number,
  selectCount: _propTypes["default"].number
};