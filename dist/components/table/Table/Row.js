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

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _styles = require("@material-ui/core/styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
    cell: {
      padding: theme.spacing(1, 2)
    }
  };
});

var Row = function Row(_ref) {
  var row = _ref.row,
      rowProps = _ref.rowProps,
      subComponent = _ref.subComponent,
      sortBy = _ref.sortBy;
  var classes = useStyles();

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      isExpanded = _useState2[0],
      setIsExpanded = _useState2[1];

  (0, _react.useEffect)(function () {
    setIsExpanded(false);
  }, [sortBy]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_TableRow["default"], (0, _extends2["default"])({}, rowProps, {
    className: classes.row,
    key: rowProps.key
  }), row.cells.map(function (cell) {
    var cellProps = cell.getCellProps();
    var align = cell.column.align || 'center';
    return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], (0, _extends2["default"])({}, cellProps, {
      key: cellProps.key,
      className: classes.cell,
      align: cell.column.id === 'actions' ? 'center' : align
    }), !cell.column.expander && cell.render('Cell'), cell.column.expander && cell.render('Expander', {
      isExpanded: isExpanded,
      setIsExpanded: setIsExpanded
    }));
  })), isExpanded && subComponent && /*#__PURE__*/_react["default"].createElement(_TableRow["default"], (0, _extends2["default"])({}, rowProps, {
    key: "".concat(rowProps.key, "-expand"),
    className: classes.row
  }), /*#__PURE__*/_react["default"].createElement(_TableCell["default"], {
    colSpan: row.cells.length
  }, subComponent(row.original))));
};

exports.Row = Row;
Row.defaultProps = {
  subComponent: undefined,
  sortBy: []
};
Row.propTypes = {
  sortBy: _propTypes["default"].array,
  row: _propTypes["default"].object.isRequired,
  rowProps: _propTypes["default"].object.isRequired,
  subComponent: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func])
};