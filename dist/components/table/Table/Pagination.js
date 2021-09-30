"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TablePagination = _interopRequireDefault(require("@material-ui/core/TablePagination"));

var _styles = require("@material-ui/core/styles");

var _constants = require("./constants");

var _TablePaginationActions = require("./TablePaginationActions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var Pagination = function Pagination(_ref) {
  var count = _ref.count,
      rowsPerPage = _ref.rowsPerPage,
      pageIndex = _ref.pageIndex,
      onTableParamsChange = _ref.onTableParamsChange,
      pages = _ref.pages,
      countOnTop = _ref.countOnTop,
      selectCount = _ref.selectCount;
  var classes = useStyles();
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
    page: pageIndex,
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
        pageIndex: pageIndex,
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

exports.Pagination = Pagination;
Pagination.defaultProps = {
  count: 0,
  rowsPerPage: 0,
  pageIndex: 0,
  pages: 0,
  selectCount: 0
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