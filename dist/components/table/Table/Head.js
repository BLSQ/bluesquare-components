"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Head = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TableHead = _interopRequireDefault(require("@mui/material/TableHead"));
var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));
var _HeadCell = require("./HeadCell");
/**
 * @param {Object} props
 * @param {Array} [props.headerGroups]
 * @param {(sort: any) => void} [props.setSortBy]
 * @param {boolean} [props.multiSortEnabled]
 * @param {Array} [props.sortBy]
 */

var Head = exports.Head = function Head(_ref) {
  var _ref$headerGroups = _ref.headerGroups,
    headerGroups = _ref$headerGroups === void 0 ? [] : _ref$headerGroups,
    _ref$setSortBy = _ref.setSortBy,
    setSortBy = _ref$setSortBy === void 0 ? function () {
      return null;
    } : _ref$setSortBy,
    multiSortEnabled = _ref.multiSortEnabled,
    _ref$sortBy = _ref.sortBy,
    sortBy = _ref$sortBy === void 0 ? [] : _ref$sortBy;
  return /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, headerGroups.map(function (headerGroup) {
    var headerGroupProps = headerGroup.getHeaderGroupProps();
    return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], (0, _extends2["default"])({}, headerGroupProps, {
      key: headerGroupProps.key
    }), headerGroup.headers.map(function (column, colIndex) {
      var columnsProps = column.getHeaderProps();
      return /*#__PURE__*/_react["default"].createElement(_HeadCell.HeadCell, {
        column: column,
        key: column.id,
        columnsProps: columnsProps,
        setSortBy: setSortBy,
        multiSortEnabled: multiSortEnabled,
        sortBy: sortBy,
        isLastCell: colIndex + 1 === headerGroup.headers.length
      });
    }));
  }));
};
Head.propTypes = {
  headerGroups: _propTypes["default"].array,
  setSortBy: _propTypes["default"].func,
  sortBy: _propTypes["default"].array,
  multiSortEnabled: _propTypes["default"].bool.isRequired
};