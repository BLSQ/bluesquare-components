"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Body = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _Row = require("./Row");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Body = function Body(_ref) {
  var page = _ref.page,
      getTableBodyProps = _ref.getTableBodyProps,
      prepareRow = _ref.prepareRow,
      rowsPerPage = _ref.rowsPerPage,
      subComponent = _ref.subComponent;
  var rows = page.slice(0, rowsPerPage);
  return /*#__PURE__*/_react["default"].createElement(_TableBody["default"], getTableBodyProps, rows.map(function (row) {
    prepareRow(row);
    var rowProps = row.getRowProps();
    return /*#__PURE__*/_react["default"].createElement(_Row.Row, {
      row: row,
      rowProps: rowProps,
      key: rowProps.key,
      subComponent: subComponent
    });
  }));
};

exports.Body = Body;
Body.defaultProps = {
  page: [],
  rowsPerPage: 10,
  subComponent: undefined
};
Body.propTypes = {
  page: _propTypes["default"].array,
  getTableBodyProps: _propTypes["default"].func.isRequired,
  prepareRow: _propTypes["default"].func.isRequired,
  rowsPerPage: _propTypes["default"].number,
  subComponent: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func])
};