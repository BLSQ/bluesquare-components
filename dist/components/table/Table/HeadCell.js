"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadCell = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableSortLabel = _interopRequireDefault(require("@material-ui/core/TableSortLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    resizer: {
      display: 'inline-block',
      width: '15px',
      height: '100%',
      position: 'absolute',
      right: 0,
      top: 0,
      transform: 'translateX(50%)',
      zIndex: 1,
      touchAction: 'none',
      cursor: 'col-resize'
    },
    headerCell: {
      borderRight: "2px solid ".concat(theme.palette.ligthGray.border),
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
      backgroundColor: 'white'
    },
    sortLabel: {
      display: 'inline-block',
      width: '80%'
    },
    icon: {
      color: "".concat(theme.palette.primary.main, "!important"),
      position: 'absolute',
      left: '100%',
      top: 3
    }
  };
});

var HeadCell = function HeadCell(_ref) {
  var _column$width;

  var column = _ref.column,
      columnsProps = _ref.columnsProps;
  var classes = useStyles();
  var isSortable = column.sortable !== false && !column.isResizing;
  var direction;

  if (column.isSorted) {
    if (column.isSortedDesc) {
      direction = 'desc';
    }

    if (column.isSortedAsc) {
      direction = 'asc';
    }
  }

  var cellStyle = {
    width: (_column$width = column.width) !== null && _column$width !== void 0 ? _column$width : 'auto'
  };
  return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], _extends({}, columnsProps, {
    style: cellStyle,
    className: classes.headerCell,
    key: columnsProps.key
  }), isSortable && /*#__PURE__*/_react["default"].createElement("div", column.getSortByToggleProps(), /*#__PURE__*/_react["default"].createElement(_TableSortLabel["default"], {
    active: column.isSorted,
    direction: direction,
    classes: {
      root: classes.sortLabel,
      icon: classes.icon
    }
  }, column.render('Header'))), !isSortable && column.render('Header'), column.resizable !== false && /*#__PURE__*/_react["default"].createElement("div", _extends({}, column.getResizerProps(), {
    className: classes.resizer
  })));
};

exports.HeadCell = HeadCell;
HeadCell.propTypes = {
  column: _propTypes["default"].object.isRequired,
  columnsProps: _propTypes["default"].object.isRequired
};