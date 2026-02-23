"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TablePagination = _interopRequireDefault(require("@mui/material/TablePagination"));
var _styles = require("@mui/styles");
var _constants = require("./constants");
var _TablePaginationActions = require("./TablePaginationActions");
var useStyles = (0, _styles.makeStyles)(function () {
  return {
    spacer: {
      display: 'none'
    },
    caption: {
      display: 'none'
    },
    input: {
      display: 'none'
    }
  };
});
var Pagination = exports.Pagination = function Pagination(_ref) {
  var _ref$count = _ref.count,
    count = _ref$count === void 0 ? 0 : _ref$count,
    _ref$rowsPerPage = _ref.rowsPerPage,
    rowsPerPage = _ref$rowsPerPage === void 0 ? 0 : _ref$rowsPerPage,
    _ref$pageIndex = _ref.pageIndex,
    pageIndex = _ref$pageIndex === void 0 ? 0 : _ref$pageIndex,
    onTableParamsChange = _ref.onTableParamsChange,
    _ref$pages = _ref.pages,
    pages = _ref$pages === void 0 ? 0 : _ref$pages,
    countOnTop = _ref.countOnTop,
    _ref$selectCount = _ref.selectCount,
    selectCount = _ref$selectCount === void 0 ? 0 : _ref$selectCount;
  var classes = useStyles();
  var displayedPageIndex = pageIndex + 1 > pages ? pages - 1 : pageIndex;
  return /*#__PURE__*/_react["default"].createElement(_TablePagination["default"], {
    classes: {
      spacer: classes.spacer,
      caption: classes.caption,
      input: classes.input
    },
    rowsPerPageOptions: _constants.ROWS_PER_PAGE_OPTIONS,
    component: "div",
    count: count,
    rowsPerPage: rowsPerPage,
    page: displayedPageIndex,
    onPageChange: function onPageChange(event, newPage) {
      onTableParamsChange('page', newPage + 1);
    },
    onRowsPerPageChange: function onRowsPerPageChange(event) {
      onTableParamsChange('pageSize', event.target.value);
    },
    ActionsComponent: function ActionsComponent() {
      return /*#__PURE__*/_react["default"].createElement(_TablePaginationActions.TablePaginationActions, {
        rowsPerPageOptions: _constants.ROWS_PER_PAGE_OPTIONS,
        count: count,
        rowsPerPage: rowsPerPage,
        onPageChange: function onPageChange(value) {
          onTableParamsChange('page', value);
        },
        selectRowsPerPage: function selectRowsPerPage(value) {
          return onTableParamsChange('pageSize', value);
        },
        pageIndex: displayedPageIndex,
        pages: pages,
        countOnTop: countOnTop,
        selectCount: selectCount
      });
    },
    labelDisplayedRows: function labelDisplayedRows() {
      return null;
    }
  });
};
Pagination.propTypes = {
  count: _propTypes["default"].number,
  rowsPerPage: _propTypes["default"].number,
  pageIndex: _propTypes["default"].number,
  pages: _propTypes["default"].number,
  onTableParamsChange: _propTypes["default"].func.isRequired,
  countOnTop: _propTypes["default"].bool.isRequired,
  selectCount: _propTypes["default"].number
};