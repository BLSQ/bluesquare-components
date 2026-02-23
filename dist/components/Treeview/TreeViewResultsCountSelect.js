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
var TreeViewResultsCountSelect = exports.TreeViewResultsCountSelect = function TreeViewResultsCountSelect(_ref) {
  var _ref$resultsCount = _ref.resultsCount,
    resultsCount = _ref$resultsCount === void 0 ? ROWS_PER_PAGE_OPTIONS[2] : _ref$resultsCount,
    _ref$handleSelect = _ref.handleSelect,
    handleSelect = _ref$handleSelect === void 0 ? function () {
      return null;
    } : _ref$handleSelect,
    _ref$countOptions = _ref.countOptions,
    countOptions = _ref$countOptions === void 0 ? ROWS_PER_PAGE_OPTIONS : _ref$countOptions;
  return /*#__PURE__*/_react["default"].createElement(_PageRowSelect.PageRowSelect, {
    rowsPerPageOptions: countOptions,
    rowsPerPage: resultsCount,
    selectRowsPerPage: handleSelect
  });
};
TreeViewResultsCountSelect.propTypes = {
  countOptions: (0, _propTypes.arrayOf)(_propTypes.number),
  resultsCount: _propTypes.number,
  handleSelect: _propTypes.func
};