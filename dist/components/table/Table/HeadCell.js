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

var _useSafeIntl2 = require("../../../utils/useSafeIntl");

var _messages = require("./messages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      sortBy = _ref.sortBy;
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
      newSort = [].concat(_toConsumableArray(sortBy.filter(function (sort) {
        return sort.id !== column.id;
      })), [currentSort]);
    }

    setSortBy(newSort);
  };

  return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], _extends({}, columnsProps, {
    style: cellStyle,
    className: classes.headerCell,
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
  }, column.render('Header')), column.resizable !== false && /*#__PURE__*/_react["default"].createElement("div", _extends({}, column.getResizerProps(), {
    className: classes.resizer
  })));
};

exports.HeadCell = HeadCell;
HeadCell.propTypes = {
  column: _propTypes["default"].object.isRequired,
  columnsProps: _propTypes["default"].object.isRequired,
  setSortBy: _propTypes["default"].func.isRequired,
  multiSortEnabled: _propTypes["default"].bool.isRequired,
  sortBy: _propTypes["default"].array.isRequired
};