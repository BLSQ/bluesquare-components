"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TablePaginationActions = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _FirstPage = _interopRequireDefault(require("@material-ui/icons/FirstPage"));

var _KeyboardArrowLeft = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowLeft"));

var _KeyboardArrowRight = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowRight"));

var _LastPage = _interopRequireDefault(require("@material-ui/icons/LastPage"));

var _useSafeIntl = require("../../../utils/useSafeIntl");

var _PageSelect = require("./PageSelect");

var _PageRowSelect = require("./PageRowSelect");

var _Count = require("./Count");

var _messages = require("./messages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      width: '100%',
      position: 'relative'
    },
    count: {
      position: 'absolute',
      right: theme.spacing(2)
    }
  };
});

var TablePaginationActions = function TablePaginationActions(_ref) {
  var count = _ref.count,
      pageIndex = _ref.pageIndex,
      rowsPerPage = _ref.rowsPerPage,
      _onPageChange = _ref.onPageChange,
      pages = _ref.pages,
      rowsPerPageOptions = _ref.rowsPerPageOptions,
      onRowPerPageChange = _ref.onRowPerPageChange,
      countOnTop = _ref.countOnTop,
      selectCount = _ref.selectCount;
  var classes = useStyles();
  var intl = (0, _useSafeIntl.useSafeIntl)();
  var formatMessage = intl.formatMessage;

  var handleFirstPageButtonClick = function handleFirstPageButtonClick() {
    _onPageChange(1);
  };

  var handleBackButtonClick = function handleBackButtonClick() {
    _onPageChange(pageIndex);
  };

  var handleNextButtonClick = function handleNextButtonClick() {
    _onPageChange(pageIndex + 2);
  };

  var handleLastPageButtonClick = function handleLastPageButtonClick() {
    _onPageChange(Math.max(0, Math.ceil(count / rowsPerPage)));
  };

  var firstDisabled = pageIndex === 0;
  var lastDisabled = pageIndex >= Math.ceil(count / rowsPerPage) - 1;
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    py: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    variant: "outlined",
    onClick: handleFirstPageButtonClick,
    disabled: firstDisabled,
    "aria-label": formatMessage(_messages.MESSAGES.firstText)
  }, /*#__PURE__*/_react["default"].createElement(_FirstPage["default"], {
    color: firstDisabled ? 'inherit' : 'primary'
  })), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    variant: "outlined",
    onClick: handleBackButtonClick,
    disabled: firstDisabled,
    "aria-label": formatMessage(_messages.MESSAGES.previous)
  }, /*#__PURE__*/_react["default"].createElement(_KeyboardArrowLeft["default"], {
    color: firstDisabled ? 'inherit' : 'primary'
  })), /*#__PURE__*/_react["default"].createElement(_PageSelect.PageSelect, {
    pages: pages,
    pageIndex: pageIndex + 1,
    onPageChange: function onPageChange(newPage) {
      _onPageChange(newPage);
    }
  }), /*#__PURE__*/_react["default"].createElement(_PageRowSelect.PageRowSelect, {
    rowsPerPage: rowsPerPage,
    rowsPerPageOptions: rowsPerPageOptions,
    onRowPerPageChange: onRowPerPageChange
  }), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    variant: "outlined",
    onClick: handleNextButtonClick,
    disabled: lastDisabled,
    "aria-label": formatMessage(_messages.MESSAGES.nextText)
  }, /*#__PURE__*/_react["default"].createElement(_KeyboardArrowRight["default"], {
    color: lastDisabled ? 'inherit' : 'primary'
  })), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    variant: "outlined",
    onClick: handleLastPageButtonClick,
    disabled: lastDisabled,
    "aria-label": formatMessage(_messages.MESSAGES.lastText)
  }, /*#__PURE__*/_react["default"].createElement(_LastPage["default"], {
    color: lastDisabled ? 'inherit' : 'primary'
  })), !countOnTop && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.count
  }, /*#__PURE__*/_react["default"].createElement(_Count.Count, {
    count: count,
    selectCount: selectCount
  })));
};

exports.TablePaginationActions = TablePaginationActions;
TablePaginationActions.propTypes = {
  pages: _propTypes["default"].number.isRequired,
  count: _propTypes["default"].number.isRequired,
  onPageChange: _propTypes["default"].func.isRequired,
  pageIndex: _propTypes["default"].number.isRequired,
  rowsPerPage: _propTypes["default"].number.isRequired,
  rowsPerPageOptions: _propTypes["default"].array.isRequired,
  onRowPerPageChange: _propTypes["default"].func.isRequired,
  countOnTop: _propTypes["default"].bool.isRequired,
  selectCount: _propTypes["default"].number.isRequired
};