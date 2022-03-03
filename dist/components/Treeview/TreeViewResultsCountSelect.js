"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeViewResultsCountSelect = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = require("prop-types");

var _PageRowSelect = require("../table/Table/PageRowSelect");

var ROWS_PER_PAGE_OPTIONS = [5, 10, 20, 30, 40, 50];

var TreeViewResultsCountSelect = function TreeViewResultsCountSelect(_ref) {
  var resultsCount = _ref.resultsCount,
      handleSelect = _ref.handleSelect,
      countOptions = _ref.countOptions;
  return /*#__PURE__*/_react["default"].createElement(_PageRowSelect.PageRowSelect, {
    rowsPerPageOptions: countOptions,
    rowsPerPage: resultsCount,
    selectRowsPerPage: handleSelect
  });
};

exports.TreeViewResultsCountSelect = TreeViewResultsCountSelect;
TreeViewResultsCountSelect.propTypes = {
  countOptions: (0, _propTypes.arrayOf)(_propTypes.number),
  resultsCount: _propTypes.number,
  handleSelect: _propTypes.func
};
TreeViewResultsCountSelect.defaultProps = {
  countOptions: ROWS_PER_PAGE_OPTIONS,
  handleSelect: function handleSelect() {
    return null;
  },
  resultsCount: ROWS_PER_PAGE_OPTIONS[2]
};