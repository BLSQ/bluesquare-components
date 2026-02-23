"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Row = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));
var _TableRow = _interopRequireDefault(require("@mui/material/TableRow"));
var _styles = require("@mui/styles");
var _classnames = _interopRequireDefault(require("classnames"));
var _CellContentWithErrorBoundary = require("./CellContentWithErrorBoundary");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var defaultCellProps = function defaultCellProps() {};
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.gray.background
      },
      '&:nth-of-type(even)': {
        backgroundColor: 'transparent'
      }
    },
    rowClickable: {
      cursor: 'pointer',
      '&:hover': {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.grey['300']
        },
        '&:nth-of-type(even)': {
          backgroundColor: theme.palette.grey['300']
        }
      }
    },
    cell: {
      padding: theme.spacing(1, 2)
    }
  };
});
var Row = exports.Row = function Row(_ref) {
  var _rowProps$className;
  var row = _ref.row,
    rowProps = _ref.rowProps,
    _ref$subComponent = _ref.subComponent,
    subComponent = _ref$subComponent === void 0 ? undefined : _ref$subComponent,
    _ref$sortBy = _ref.sortBy,
    sortBy = _ref$sortBy === void 0 ? [] : _ref$sortBy,
    _ref$onRowClick = _ref.onRowClick,
    onRowClick = _ref$onRowClick === void 0 ? undefined : _ref$onRowClick,
    _ref$expanded = _ref.expanded,
    expanded = _ref$expanded === void 0 ? false : _ref$expanded,
    _ref$cellProps = _ref.cellProps,
    userCellProps = _ref$cellProps === void 0 ? defaultCellProps : _ref$cellProps;
  var classes = useStyles();
  var _useState = (0, _react.useState)(expanded),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isExpanded = _useState2[0],
    setIsExpanded = _useState2[1];
  (0, _react.useEffect)(function () {
    if (isExpanded !== expanded) {
      setIsExpanded(expanded);
    }
  }, [sortBy, expanded]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], (0, _extends2["default"])({}, rowProps, {
    onClick: function onClick(event) {
      return onRowClick ? onRowClick(row.original, event) : null;
    },
    className: (0, _classnames["default"])(classes.row, Boolean(onRowClick) && classes.rowClickable, (_rowProps$className = rowProps.className) !== null && _rowProps$className !== void 0 ? _rowProps$className : ''),
    key: rowProps.key
  }), row.cells.map(function (cell) {
    var _cellProps$className;
    var cellProps = cell.getCellProps(userCellProps(cell));
    var align = cell.column.align || 'center';
    return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], (0, _extends2["default"])({}, cellProps, {
      key: cellProps.key,
      className: (0, _classnames["default"])(classes.cell, (_cellProps$className = cellProps.className) !== null && _cellProps$className !== void 0 ? _cellProps$className : ''),
      align: cell.column.id === 'actions' ? 'center' : align
    }), /*#__PURE__*/_react["default"].createElement(_CellContentWithErrorBoundary.CellContentWithErrorBoundary, {
      value: cell.value
    }, !cell.column.expander && cell.render('Cell'), cell.column.expander && cell.render('Expander', {
      isExpanded: isExpanded,
      setIsExpanded: setIsExpanded
    })));
  })), isExpanded && subComponent && /*#__PURE__*/_react["default"].createElement(_TableRow["default"], (0, _extends2["default"])({}, rowProps, {
    key: "".concat(rowProps.key, "-expand"),
    className: classes.row
  }), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
    colSpan: row.cells.length
  }, subComponent(row.original))));
};
Row.propTypes = {
  sortBy: _propTypes["default"].array,
  row: _propTypes["default"].object.isRequired,
  rowProps: _propTypes["default"].object.isRequired,
  subComponent: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  onRowClick: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
  expanded: _propTypes["default"].bool,
  cellProps: _propTypes["default"].func
};