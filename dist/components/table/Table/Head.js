"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Head = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _HeadCell = require("./HeadCell");

var Head = function Head(_ref) {
  var headerGroups = _ref.headerGroups,
      setSortBy = _ref.setSortBy,
      multiSortEnabled = _ref.multiSortEnabled,
      sortBy = _ref.sortBy;
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

exports.Head = Head;
Head.defaultProps = {
  headerGroups: [],
  sortBy: [],
  setSortBy: function setSortBy() {
    return null;
  }
};
Head.propTypes = {
  headerGroups: _propTypes["default"].array,
  setSortBy: _propTypes["default"].func,
  sortBy: _propTypes["default"].array,
  multiSortEnabled: _propTypes["default"].bool.isRequired
};