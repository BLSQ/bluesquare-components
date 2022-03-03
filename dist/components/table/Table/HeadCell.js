"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadCell = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableSortLabel = _interopRequireDefault(require("@material-ui/core/TableSortLabel"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useSafeIntl2 = require("../../../utils/useSafeIntl");

var _messages = require("./messages");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
    lastHeaderCell: {
      borderRight: 'none'
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
    },
    cell: {
      cursor: 'default'
    }
  };
});

var HeadCell = function HeadCell(_ref) {
  var _column$width;

  var column = _ref.column,
      columnsProps = _ref.columnsProps,
      setSortBy = _ref.setSortBy,
      multiSortEnabled = _ref.multiSortEnabled,
      sortBy = _ref.sortBy,
      isLastCell = _ref.isLastCell;
  var classes = useStyles();

  var _useSafeIntl = (0, _useSafeIntl2.useSafeIntl)(),
      formatMessage = _useSafeIntl.formatMessage;

  var isSortable = column.sortable !== false && !column.isResizing;
  var direction;
  var title = _messages.MESSAGES.sortAsc;

  if (column.isSorted) {
    if (column.isSortedDesc) {
      direction = 'desc';
    } else {
      direction = 'asc';
      title = _messages.MESSAGES.sortDesc;
    }
  }

  var cellStyle = {
    width: (_column$width = column.width) !== null && _column$width !== void 0 ? _column$width : 'auto'
  };

  var sortProps = _objectSpread({}, column.getSortByToggleProps());

  sortProps.onClick = function () {
    var newSort = [];
    var currentSort = {
      desc: direction === 'asc',
      id: column.id
    };

    if (!multiSortEnabled) {
      newSort.push(currentSort);
    } else {
      newSort = [].concat((0, _toConsumableArray2["default"])(sortBy.filter(function (sort) {
        return sort.id !== column.id;
      })), [currentSort]);
    }

    setSortBy(newSort);
  };

  return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], (0, _extends2["default"])({}, columnsProps, {
    style: cellStyle,
    className: (0, _classnames["default"])(classes.headerCell, isLastCell && classes.lastHeaderCell),
    key: columnsProps.key
  }), isSortable && /*#__PURE__*/_react["default"].createElement("div", sortProps, /*#__PURE__*/_react["default"].createElement(_TableSortLabel["default"], {
    active: column.isSorted,
    direction: direction,
    title: formatMessage(title),
    classes: {
      root: classes.sortLabel,
      icon: classes.icon
    }
  }, column.render('Header'))), !isSortable && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.cell
  }, column.render('Header')), column.resizable !== false && /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, column.getResizerProps(), {
    className: classes.resizer
  })));
};

exports.HeadCell = HeadCell;
HeadCell.propTypes = {
  column: _propTypes["default"].object.isRequired,
  columnsProps: _propTypes["default"].object.isRequired,
  setSortBy: _propTypes["default"].func.isRequired,
  multiSortEnabled: _propTypes["default"].bool.isRequired,
  sortBy: _propTypes["default"].array.isRequired,
  isLastCell: _propTypes["default"].bool.isRequired
};