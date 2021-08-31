"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _Table = _interopRequireDefault(require("@material-ui/core/Table"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _TableContainer = _interopRequireDefault(require("@material-ui/core/TableContainer"));

var _styles = require("@material-ui/core/styles");

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _reactTable = require("react-table");

var _useSafeIntl2 = require("../../../utils/useSafeIntl");

var _constants = require("./constants");

var _tableUtils = require("./tableUtils");

var _Head = require("./Head");

var _Body = require("./Body");

var _Footer = require("./Footer");

var _Select = require("./Select");

var _NoResult = require("./NoResult");

var _Count = require("./Count");

var _Pagination = require("./Pagination");

var _LoadingSpinner = require("../../LoadingSpinner");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * TableComponent component, no redux, no fetch, just displaying.
 * Multi selection is optionnal, if set to true you can add custom actions
 * Required props in order to work:
 * @param {Object} params
 * @param {Array} data
 * @param {Array} columns
 * @param {Number} pages
 * @param {Function} redirectTo
 *
 * Optionnal props:
 * @param {Number} count
 * @param {String} baseUrl
 * @param {Array} marginTop
 * @param {Array} countOnTop
 * @param {Array} showPagination
 * @param {Array} showFooter
 * @param {Object} extraProps
 * @param {String} paramPrefix
 *
 * Multi selection is optionnal
 * Selection props:
 * @param {Boolean} multiSelect
 * if set to true you can add custom actions, an array of object(s):
 *   @param {Array} selectionActions
 *       @param {Array} icon
 *       @param {String} label
 *       @param {Function} onClick
 *       @param {Boolean} disabled
 * You need aslo to maintain selection state in parent component
 * You can use selectionInitialState and setTableSelection from Iaso/utils/tableUtils.js
 *   @param {Object} selection
 *   @param {Function} setTableSelection
 */
var useStyles = (0, _styles.makeStyles)(function () {
  return {
    tableContainer: {
      overflow: 'hidden'
    },
    paper: {
      position: 'relative'
    }
  };
});

var TableComponent = function TableComponent(props) {
  var params = props.params,
      count = props.count,
      extraProps = props.extraProps,
      paramsPrefix = props.paramsPrefix,
      redirectTo = props.redirectTo,
      baseUrl = props.baseUrl,
      pages = props.pages,
      countOnTop = props.countOnTop,
      marginTop = props.marginTop,
      multiSelect = props.multiSelect,
      selectionActions = props.selectionActions,
      setTableSelection = props.setTableSelection,
      selection = props.selection,
      selectionActionMessage = props.selectionActionMessage,
      showPagination = props.showPagination,
      showFooter = props.showFooter;

  var _useSafeIntl = (0, _useSafeIntl2.useSafeIntl)(),
      formatMessage = _useSafeIntl.formatMessage;

  var classes = useStyles();
  var columns = (0, _react.useMemo)(function () {
    var temp = _toConsumableArray(props.columns);

    if (multiSelect && !props.columns.find(function (c) {
      return c.accessor === 'selected';
    })) {
      temp.push((0, _Select.getSelectionCol)(selection, setTableSelection, count, formatMessage));
    }

    return (0, _tableUtils.getColumnsHeadersInfos)(temp);
  }, [props.columns, multiSelect, selection]);
  var data = (0, _react.useMemo)(function () {
    return props.data;
  }, [props.data]);
  var loading = extraProps.loading;
  var initialState = (0, _react.useMemo)(function () {
    var urlPageSize = parseInt(params[(0, _tableUtils.getParamsKey)(paramsPrefix, 'pageSize')], 10);
    return {
      pageIndex: params[(0, _tableUtils.getParamsKey)(paramsPrefix, 'page')] ? params[(0, _tableUtils.getParamsKey)(paramsPrefix, 'page')] - 1 : _constants.DEFAULT_PAGE - 1,
      pageSize: urlPageSize || extraProps && extraProps.defaultPageSize || _constants.DEFAULT_PAGE_SIZE,
      sortBy: params[(0, _tableUtils.getParamsKey)(paramsPrefix, 'order')] ? (0, _tableUtils.getOrderArray)(params[(0, _tableUtils.getParamsKey)(paramsPrefix, 'order')]) : (0, _tableUtils.getOrderArray)(_constants.DEFAULT_ORDER)
    };
  }, []);

  var _useTable = (0, _reactTable.useTable)({
    columns: columns,
    data: data,
    initialState: initialState,
    disableMultiSort: true,
    manualPagination: true,
    manualSortBy: true,
    pageCount: pages
  }, _reactTable.useSortBy, _reactTable.useResizeColumns, _reactTable.usePagination),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      footerGroups = _useTable.footerGroups,
      prepareRow = _useTable.prepareRow,
      gotoPage = _useTable.gotoPage,
      setPageSize = _useTable.setPageSize,
      setSortBy = _useTable.setSortBy,
      page = _useTable.page,
      _useTable$state = _useTable.state,
      pageSize = _useTable$state.pageSize,
      pageIndex = _useTable$state.pageIndex,
      sortBy = _useTable$state.sortBy;

  var onTableParamsChange = function onTableParamsChange(key, value) {
    var newParams = _objectSpread({}, params);

    if (key === 'order' && value.length > 0) {
      newParams[(0, _tableUtils.getParamsKey)(paramsPrefix, 'order')] = (0, _tableUtils.getSort)(value);
    } else if (key !== 'order') {
      newParams[(0, _tableUtils.getParamsKey)(paramsPrefix, key)] = value;
    }

    if (key === 'pageSize') {
      newParams[(0, _tableUtils.getParamsKey)(paramsPrefix, 'page')] = 1;
      setPageSize(value);
    }

    if (key === 'page') {
      gotoPage(value - 1);
    }

    redirectTo(baseUrl, newParams);
  };

  (0, _react.useEffect)(function () {
    onTableParamsChange('order', sortBy);
  }, [sortBy]);

  var tableProps = _objectSpread(_objectSpread({}, getTableProps()), {}, {
    size: 'small'
  });

  var rowsPerPage = parseInt(pageSize, 10);
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    mt: marginTop ? 4 : 0,
    mb: 4
  }, /*#__PURE__*/_react["default"].createElement(_Select.Select, {
    count: count,
    multiSelect: multiSelect,
    selectionActions: selectionActions,
    selection: selection,
    setTableSelection: setTableSelection,
    selectionActionMessage: selectionActionMessage
  }), countOnTop && /*#__PURE__*/_react["default"].createElement(_Count.Count, {
    count: count,
    selectCount: selection.selectCount
  }), /*#__PURE__*/_react["default"].createElement(_Paper["default"], {
    elevation: 3,
    className: classes.paper
  }, loading && /*#__PURE__*/_react["default"].createElement(_LoadingSpinner.LoadingSpinner, {
    absolute: true
  }), /*#__PURE__*/_react["default"].createElement(_TableContainer["default"], {
    className: classes.tableContainer
  }, /*#__PURE__*/_react["default"].createElement(_Table["default"], _extends({}, tableProps, {
    stickyHeader: true
  }), /*#__PURE__*/_react["default"].createElement(_Head.Head, {
    headerGroups: headerGroups,
    setSortBy: setSortBy
  }), /*#__PURE__*/_react["default"].createElement(_Body.Body, {
    page: page,
    getTableBodyProps: getTableBodyProps,
    prepareRow: prepareRow,
    subComponent: extraProps.SubComponent,
    sortBy: sortBy
  }), showFooter && /*#__PURE__*/_react["default"].createElement(_Footer.Footer, {
    footerGroups: footerGroups
  }))), (page === null || page === void 0 ? void 0 : page.length) === 0 && /*#__PURE__*/_react["default"].createElement(_NoResult.NoResult, {
    loading: loading
  }), (page === null || page === void 0 ? void 0 : page.length) > 0 && showPagination && /*#__PURE__*/_react["default"].createElement(_Pagination.Pagination, {
    count: count,
    rowsPerPage: rowsPerPage,
    pageIndex: pageIndex,
    onTableParamsChange: onTableParamsChange,
    pages: pages,
    countOnTop: countOnTop,
    selectCount: selection.selectCount
  })));
};

TableComponent.defaultProps = {
  count: 0,
  pages: 0,
  baseUrl: '',
  countOnTop: true,
  marginTop: true,
  multiSelect: false,
  selectionActions: [],
  selection: _tableUtils.selectionInitialState,
  setTableSelection: function setTableSelection() {
    return null;
  },
  redirectTo: function redirectTo() {
    return null;
  },
  extraProps: {
    loading: false
  },
  paramsPrefix: '',
  params: {
    pageSize: 10,
    page: 1,
    order: '-created_at'
  },
  selectionActionMessage: null,
  showPagination: true,
  showFooter: false
};
TableComponent.propTypes = {
  params: _propTypes["default"].object,
  count: _propTypes["default"].number,
  pages: _propTypes["default"].number,
  data: _propTypes["default"].array.isRequired,
  columns: _propTypes["default"].array.isRequired,
  baseUrl: _propTypes["default"].string,
  countOnTop: _propTypes["default"].bool,
  marginTop: _propTypes["default"].bool,
  multiSelect: _propTypes["default"].bool,
  selectionActions: _propTypes["default"].array,
  redirectTo: _propTypes["default"].func,
  setTableSelection: _propTypes["default"].func,
  selection: _propTypes["default"].object,
  extraProps: _propTypes["default"].object,
  paramsPrefix: _propTypes["default"].string,
  selectionActionMessage: _propTypes["default"].string,
  showPagination: _propTypes["default"].bool,
  showFooter: _propTypes["default"].bool
};

var Table = /*#__PURE__*/_react["default"].memo(TableComponent, function (props, prevProps) {
  var newColumns = (0, _tableUtils.getSimplifiedColumns)(props.columns);
  var oldColumns = (0, _tableUtils.getSimplifiedColumns)(prevProps.columns);
  var shouldRender = !(!(0, _isEqual["default"])(props.data, prevProps.data) || !(0, _isEqual["default"])(newColumns, oldColumns) || !(0, _isEqual["default"])(props.selection.selectedItems, prevProps.selection.selectedItems) || !(0, _isEqual["default"])(props.selection.selectAll, prevProps.selection.selectAll) || !(0, _isEqual["default"])(props.selection.unSelectedItems, prevProps.selection.unSelectedItems) || !(0, _isEqual["default"])(props.extraProps, prevProps.extraProps));
  return shouldRender;
});

exports.Table = Table;