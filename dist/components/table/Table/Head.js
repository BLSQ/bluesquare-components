"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Head = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableHead = _interopRequireDefault(require("@material-ui/core/TableHead"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _HeadCell = require("./HeadCell");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Head = function Head(_ref) {
  var headerGroups = _ref.headerGroups,
      setSortBy = _ref.setSortBy,
      multiSortEnabled = _ref.multiSortEnabled,
      sortBy = _ref.sortBy;
  return /*#__PURE__*/_react["default"].createElement(_TableHead["default"], null, headerGroups.map(function (headerGroup) {
    var headerGroupProps = headerGroup.getHeaderGroupProps();
    return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], _extends({}, headerGroupProps, {
      key: headerGroupProps.key
    }), headerGroup.headers.map(function (column) {
      var columnsProps = column.getHeaderProps();
      return /*#__PURE__*/_react["default"].createElement(_HeadCell.HeadCell, {
        column: column,
        key: column.id,
        columnsProps: columnsProps,
        setSortBy: setSortBy,
        multiSortEnabled: multiSortEnabled,
        sortBy: sortBy
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