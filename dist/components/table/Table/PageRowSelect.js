"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageRowSelect = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _styles = require("@material-ui/core/styles");

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _useSafeIntl2 = require("../../../utils/useSafeIntl");

var _messages = require("./messages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    select: {
      height: 40,
      marginLeft: theme.spacing(10)
    }
  };
});

var PageRowSelect = function PageRowSelect(_ref) {
  var rowsPerPage = _ref.rowsPerPage,
      rowsPerPageOptions = _ref.rowsPerPageOptions,
      selectRowsPerPage = _ref.selectRowsPerPage;
  var classes = useStyles();

  var _useSafeIntl = (0, _useSafeIntl2.useSafeIntl)(),
      formatMessage = _useSafeIntl.formatMessage;

  var handleChange = function handleChange(event) {
    selectRowsPerPage(event.target.value);
  };

  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    mr: 8
  }, /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    variant: "outlined"
  }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
    className: classes.select,
    value: rowsPerPage,
    onChange: handleChange
  }, rowsPerPageOptions.map(function (o) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: o,
      value: o
    }, "".concat(o, " ").concat(formatMessage(_messages.MESSAGES.rowsText)));
  }))));
};

exports.PageRowSelect = PageRowSelect;
PageRowSelect.propTypes = {
  rowsPerPage: _propTypes["default"].number.isRequired,
  rowsPerPageOptions: _propTypes["default"].array.isRequired,
  selectRowsPerPage: _propTypes["default"].func.isRequired
};