"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadCell = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("@mui/styles");
var _TableCell = _interopRequireDefault(require("@mui/material/TableCell"));
var _TableSortLabel = _interopRequireDefault(require("@mui/material/TableSortLabel"));
var _classnames = _interopRequireDefault(require("classnames"));
var _useSafeIntl2 = require("../../../localization/useSafeIntl");
var _messages = require("./messages");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
      position: 'relative !important',
      overflow: 'hidden',
      textAlign: 'center !important',
      backgroundColor: 'white !important'
    },
    lastHeaderCell: {
      borderRight: 'none'
    },
    sortLabel: {
      display: 'inline-block !important',
      width: '80% !important'
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
var HeadCell = exports.HeadCell = function HeadCell(_ref) {
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
  var isColumnNotEmpty = column.Header.length > 0 || /*#__PURE__*/(0, _react.isValidElement)(column.Header) || column.parent;
  var isSortable = isColumnNotEmpty && column.sortable !== false && !column.isResizing;
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
HeadCell.propTypes = {
  column: _propTypes["default"].object.isRequired,
  columnsProps: _propTypes["default"].object.isRequired,
  setSortBy: _propTypes["default"].func.isRequired,
  multiSortEnabled: _propTypes["default"].bool.isRequired,
  sortBy: _propTypes["default"].array.isRequired,
  isLastCell: _propTypes["default"].bool.isRequired
};