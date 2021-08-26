"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NoResult = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _styles = require("@material-ui/core/styles");

var _reactIntl = require("react-intl");

var _messages = require("./messages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    box: {
      width: '100%',
      height: theme.spacing(10),
      backgroundColor: theme.palette.gray.background
    }
  };
});

var NoResult = function NoResult(_ref) {
  var loading = _ref.loading;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    className: classes.box,
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  }, !loading && /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, _messages.MESSAGES.noDataText));
};

exports.NoResult = NoResult;
NoResult.defaultProps = {
  loading: false
};
NoResult.propTypes = {
  loading: _propTypes["default"].bool
};