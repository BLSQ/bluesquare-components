"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Body = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.gray.background
      },
      '&:nth-of-type(even)': {
        backgroundColor: 'transparent'
      }
    }
  };
});

var Body = function Body(_ref) {
  var page = _ref.page,
      getTableBodyProps = _ref.getTableBodyProps,
      prepareRow = _ref.prepareRow,
      rowsPerPage = _ref.rowsPerPage;
  var classes = useStyles();
  var rows = page.slice(0, rowsPerPage);
  return /*#__PURE__*/_react["default"].createElement(_TableBody["default"], getTableBodyProps, rows.map(function (row) {
    prepareRow(row);
    var rowProps = row.getRowProps();
    return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], _extends({}, rowProps, {
      key: rowProps.key,
      className: classes.row
    }), row.cells.map(function (cell) {
      var cellProps = cell.getCellProps();
      var align = cell.column.align || 'center';
      return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], _extends({}, cellProps, {
        key: cellProps.key,
        align: cell.column.id === 'actions' ? 'center' : align
      }), cell.render('Cell'));
    }));
  }));
};

exports.Body = Body;
Body.defaultProps = {
  page: [],
  rowsPerPage: 10
};
Body.propTypes = {
  page: _propTypes["default"].array,
  getTableBodyProps: _propTypes["default"].func.isRequired,
  prepareRow: _propTypes["default"].func.isRequired,
  rowsPerPage: _propTypes["default"].number
};