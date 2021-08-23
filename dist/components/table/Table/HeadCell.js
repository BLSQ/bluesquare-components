"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadCell = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableSortLabel = _interopRequireDefault(require("@material-ui/core/TableSortLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

  var column = _ref.column;
  var classes = useStyles();

  var _useState = (0, _react.useState)(column.getHeaderProps(column.sortable !== false ? column.getSortByToggleProps() : undefined)),
      _useState2 = _slicedToArray(_useState, 2),
      columnsProps = _useState2[0],
      setColumnsProps = _useState2[1];

  var direction;

  if (column.isSorted) {
    if (column.isSortedDesc) {
      direction = 'desc';
    }

    if (column.isSortedAsc) {
      direction = 'asc';
    }
  }

  (0, _react.useEffect)(function () {
    if (!column.isResizing && column.sortable !== false) {
      // prevent resize click to sort column...
      setTimeout(function () {
        setColumnsProps(column.getHeaderProps(column.getSortByToggleProps()));
      }, 500);
    } else {
      setColumnsProps(column.getHeaderProps());
    }
  }, [column.isResizing]);
  var cellStyle = {
    width: (_column$width = column.width) !== null && _column$width !== void 0 ? _column$width : 'auto'
  };
  return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], _extends({}, columnsProps, {
    style: cellStyle,
    className: classes.headerCell,
    key: columnsProps.key
  }), column.sortable !== false && !column.isResizing && /*#__PURE__*/_react["default"].createElement(_TableSortLabel["default"], {
    active: column.isSorted,
    direction: direction,
    classes: {
      root: classes.sortLabel,
      icon: classes.icon
    }
  }, column.render('Header')), (column.sortable === false || column.isResizing) && column.render('Header'), column.resizable !== false && /*#__PURE__*/_react["default"].createElement("div", _extends({}, column.getResizerProps(), {
    className: classes.resizer
  })));
};

exports.HeadCell = HeadCell;
HeadCell.propTypes = {
  column: _propTypes["default"].object.isRequired
};