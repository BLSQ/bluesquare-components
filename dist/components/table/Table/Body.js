"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Body = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TableBody = _interopRequireDefault(require("@mui/material/TableBody"));
var _Row = require("./Row");
var defaultRowProps = function defaultRowProps() {};
var defaultGetObjectId = function defaultGetObjectId(obj) {
  return obj.toString();
};

/**
 * @param {Object} props
 * @param {Array} [props.page]
 * @param {Function} props.getTableBodyProps
 * @param {Function} props.prepareRow
 * @param {any} [props.subComponent]
 * @param {Array} [props.sortBy]
 * @param {(row?: any, event?: any) => void} [props.onRowClick]
 * @param {Function} [props.rowProps]
 * @param {Object} [props.expanded]
 * @param {Function} [props.getObjectId]
 * @param {Function} [props.cellProps]
 */

var Body = exports.Body = function Body(_ref) {
  var _ref$page = _ref.page,
    page = _ref$page === void 0 ? [] : _ref$page,
    getTableBodyProps = _ref.getTableBodyProps,
    prepareRow = _ref.prepareRow,
    _ref$subComponent = _ref.subComponent,
    subComponent = _ref$subComponent === void 0 ? undefined : _ref$subComponent,
    _ref$sortBy = _ref.sortBy,
    sortBy = _ref$sortBy === void 0 ? [] : _ref$sortBy,
    _ref$onRowClick = _ref.onRowClick,
    onRowClick = _ref$onRowClick === void 0 ? undefined : _ref$onRowClick,
    _ref$rowProps = _ref.rowProps,
    userRowProps = _ref$rowProps === void 0 ? defaultRowProps : _ref$rowProps,
    _ref$expanded = _ref.expanded,
    expanded = _ref$expanded === void 0 ? {} : _ref$expanded,
    _ref$getObjectId = _ref.getObjectId,
    getObjectId = _ref$getObjectId === void 0 ? defaultGetObjectId : _ref$getObjectId,
    _ref$cellProps = _ref.cellProps,
    cellProps = _ref$cellProps === void 0 ? function () {} : _ref$cellProps;
  return /*#__PURE__*/_react["default"].createElement(_TableBody["default"], getTableBodyProps, page.map(function (row) {
    prepareRow(row);
    var rowProps = row.getRowProps(userRowProps(row));
    return /*#__PURE__*/_react["default"].createElement(_Row.Row, {
      row: row,
      rowProps: rowProps,
      key: rowProps.key,
      subComponent: subComponent,
      sortBy: sortBy,
      onRowClick: onRowClick,
      cellProps: cellProps,
      expanded: expanded[getObjectId(row.original)]
    });
  }));
};
Body.propTypes = {
  page: _propTypes["default"].array,
  sortBy: _propTypes["default"].array,
  getTableBodyProps: _propTypes["default"].func.isRequired,
  prepareRow: _propTypes["default"].func.isRequired,
  rowsPerPage: _propTypes["default"].number,
  subComponent: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  onRowClick: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
  rowProps: _propTypes["default"].func,
  cellProps: _propTypes["default"].func,
  expanded: _propTypes["default"].object,
  getObjectId: _propTypes["default"].func
};