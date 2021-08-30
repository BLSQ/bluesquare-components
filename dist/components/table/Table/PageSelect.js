"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageSelect = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _styles = require("@material-ui/core/styles");

var _reactIntl = require("react-intl");

var _messages = require("./messages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    input: {
      width: 80
    }
  };
});

var PageSelect = function PageSelect(_ref) {
  var pageIndex = _ref.pageIndex,
      pages = _ref.pages,
      onPageChange = _ref.onPageChange;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    ml: 8
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "inline-block",
    mr: 1
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, _messages.MESSAGES.pageText)), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    className: classes.input,
    size: "small",
    label: "",
    type: "number",
    value: pageIndex,
    disabled: pages < 2,
    variant: "outlined",
    onChange: function onChange(e) {
      return onPageChange(e.currentTarget.value);
    }
  }), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "inline-block",
    ml: 1
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, _messages.MESSAGES.ofText)), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "inline-block",
    ml: 1
  }, pages));
};

exports.PageSelect = PageSelect;
PageSelect.defaultProps = {
  pages: 0,
  pageIndex: 0
};
PageSelect.propTypes = {
  pages: _propTypes["default"].number,
  pageIndex: _propTypes["default"].number,
  onPageChange: _propTypes["default"].func.isRequired
};