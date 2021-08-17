"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Table = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTable = _interopRequireWildcard(require("react-table"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _classnames = _interopRequireDefault(require("classnames"));

require("../../../css/index.css");

var _tableUtils = require("../../../utils/tableUtils");

var _utils = require("../../../utils");

var _SelectionSpeedDials = require("../SelectionSpeedDials");

var _messages = require("./messages");

var _injectIntl = require("../../../utils/injectIntl");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Table component, no redux, no fetch, just displaying.
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
 * @param {Array} defaultSorted
 * @param {Array} marginTop
 * @param {Array} countOnTop
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
var Table = /*#__PURE__*/function (_Component) {
  _inherits(Table, _Component);

  var _super = _createSuper(Table);

  function Table() {
    _classCallCheck(this, Table);

    return _super.apply(this, arguments);
  }

  _createClass(Table, [{
    key: "render",
    value: // constructor(props) {
    //     super(props);
    //     const {
    //         intl: { formatMessage },
    //         setTableSelection,
    //     } = props;
    //     setTableSelection('reset');
    //     Object.assign(
    //         ReactTableDefaults,
    //         customTableTranslations(formatMessage),
    //     );
    // }
    // shouldComponentUpdate(nextProps) {
    //     const newColumns = getSimplifiedColumns(nextProps.columns);
    //     const oldColumns = getSimplifiedColumns(this.props.columns);
    //     return (
    //         !isEqual(nextProps.data, this.props.data) ||
    //         !isEqual(newColumns, oldColumns) ||
    //         !isEqual(
    //             nextProps.selection.selectedItems,
    //             this.props.selection.selectedItems,
    //         ) ||
    //         !isEqual(
    //             nextProps.selection.selectAll,
    //             this.props.selection.selectAll,
    //         ) ||
    //         !isEqual(
    //             nextProps.selection.unSelectedItems,
    //             this.props.selection.unSelectedItems,
    //         ) ||
    //         !isEqual(nextProps.extraProps, this.props.extraProps) ||
    //         !isEqual(nextProps.watchToRender, this.props.watchToRender)
    //     );
    // }
    // componentWillUnmount() {
    //     this.props.setTableSelection('reset');
    // }
    // onTableParamsChange(key, value) {
    //     const { params, redirectTo, baseUrl, paramsPrefix } = this.props;
    //     const newParams = {
    //         ...params,
    //         [getParamsKey(paramsPrefix, key)]:
    //             key !== 'order' ? value : getSort(value),
    //     };
    //     if (key === 'pageSize') {
    //         newParams[getParamsKey(paramsPrefix, 'page')] = 1;
    //     }
    //     redirectTo(baseUrl, newParams);
    // }
    // onSelect(isSelected, item) {
    //     const selectedItems = [...this.props.selection.selectedItems];
    //     const unSelectedItems = [...this.props.selection.unSelectedItems];
    //     const {
    //         selection: { selectAll },
    //         count,
    //         setTableSelection,
    //     } = this.props;
    //     if (selectAll) {
    //         if (!isSelected) {
    //             unSelectedItems.push(item);
    //         } else {
    //             const itemIndex = unSelectedItems.findIndex(el =>
    //                 isEqual(el, item),
    //             );
    //             if (itemIndex !== -1) {
    //                 unSelectedItems.splice(itemIndex, 1);
    //             }
    //         }
    //         setTableSelection('unselect', unSelectedItems, count);
    //     } else {
    //         if (isSelected) {
    //             selectedItems.push(item);
    //         } else {
    //             const itemIndex = selectedItems.findIndex(el =>
    //                 isEqual(el, item),
    //             );
    //             selectedItems.splice(itemIndex, 1);
    //         }
    //         setTableSelection('select', selectedItems);
    //     }
    // }
    // isItemSelected(item) {
    //     const {
    //         selection: { selectedItems, unSelectedItems, selectAll },
    //     } = this.props;
    //     if (!selectAll) {
    //         return Boolean(selectedItems.find(el => isEqual(el, item)));
    //     }
    //     return !unSelectedItems.find(el => isEqual(el, item));
    // }
    function render() {
      var _selectionActionMessa,
          _classNames,
          _classNames2,
          _this = this;

      // const {
      //     classes,
      //     intl: { formatMessage },
      //     params,
      //     data,
      //     count,
      //     pages,
      //     columns,
      //     defaultSorted,
      //     countOnTop,
      //     marginTop,
      //     multiSelect,
      //     selectionActions,
      //     setTableSelection,
      //     selection: { selectCount },
      //     selection,
      //     extraProps,
      //     paramsPrefix,
      //     selectionActionMessage,
      // } = this.props;
      // let actions = [
      //     ...defaultSelectionActions(
      //         () => setTableSelection('selectAll', [], count),
      //         () => setTableSelection('reset'),
      //         formatMessage,
      //     ),
      // ];
      // actions = actions.concat(selectionActions);
      // const page = params[getParamsKey(paramsPrefix, 'page')]
      //     ? params[getParamsKey(paramsPrefix, 'page')] - 1
      //     : 0;
      // const urlPageSize = parseInt(
      //     params[getParamsKey(paramsPrefix, 'pageSize')],
      //     10,
      // );
      // let pageSize =
      //     urlPageSize || (extraProps && extraProps.defaultPageSize);
      // const showPagination = !(pageSize >= count && page === 0);
      // pageSize = pageSize < count ? pageSize : count;
      // if (count === 0) {
      //     pageSize = 2;
      // }
      // const order = params[getParamsKey(paramsPrefix, 'order')]
      //     ? getOrderArray(params[getParamsKey(paramsPrefix, 'order')])
      //     : defaultSorted;
      // if (multiSelect && !columns.find(c => c.accessor === 'selected')) {
      //     columns.push({
      //         Header: formatMessage(MESSAGES.selection),
      //         accessor: 'selected',
      //         width: 100,
      //         sortable: false,
      //         Cell: settings => (
      //             <Checkbox
      //                 color="primary"
      //                 checked={this.isItemSelected(settings.original)}
      //                 onChange={event =>
      //                     this.onSelect(
      //                         event.target.checked,
      //                         settings.original,
      //                     )
      //                 }
      //             />
      //         ),
      //     });
      // }
      return null;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_SelectionSpeedDials.SelectionSpeedDials, {
        selection: selection,
        hidden: !multiSelect,
        actions: actions,
        reset: function reset() {
          return setTableSelection('reset');
        },
        actionMessage: (_selectionActionMessa = selectionActionMessage) !== null && _selectionActionMessa !== void 0 ? _selectionActionMessa : formatMessage(_messages.MESSAGES.selectionAction)
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(classes.reactTable, (_classNames = {}, _defineProperty(_classNames, classes.reactTableNoPaginationCountBottom, !countOnTop && !showPagination), _defineProperty(_classNames, classes.reactTableNoMarginTop, !marginTop), _classNames))
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])(classes.count, (_classNames2 = {}, _defineProperty(_classNames2, classes.countBottom, !countOnTop), _defineProperty(_classNames2, classes.countBottomNoPagination, !showPagination), _classNames2))
      }, count > 0 && /*#__PURE__*/_react["default"].createElement("div", null, selectCount > 0 && /*#__PURE__*/_react["default"].createElement("span", null, "".concat((0, _utils.formatThousand)(selectCount), " "), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, _messages.MESSAGES.selected), ' - '), "".concat((0, _utils.formatThousand)(count), " "), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, _messages.MESSAGES.results))), /*#__PURE__*/_react["default"].createElement(_reactTable["default"], _extends({
        showPagination: showPagination,
        multiSort: true,
        manual: true,
        columns: (0, _tableUtils.getColumnsHeadersInfos)(columns),
        data: data,
        pages: pages,
        className: "-striped -highlight",
        defaultSorted: order,
        pageSize: pageSize,
        page: page,
        onPageChange: function onPageChange(newPage) {
          return _this.onTableParamsChange('page', newPage + 1);
        },
        onPageSizeChange: function onPageSizeChange(newPageSize) {
          return _this.onTableParamsChange('pageSize', newPageSize);
        },
        onSortedChange: function onSortedChange(newOrder) {
          return _this.onTableParamsChange('order', newOrder);
        }
      }, extraProps))));
    }
  }]);

  return Table;
}(_react.Component);

Table.defaultProps = {
  count: 0,
  defaultSorted: [{
    id: 'updated_at',
    desc: true
  }],
  baseUrl: '',
  countOnTop: true,
  marginTop: true,
  multiSelect: false,
  selectionActions: [],
  selection: _tableUtils.selectionInitialState,
  setTableSelection: function setTableSelection() {
    return null;
  },
  extraProps: null,
  paramsPrefix: '',
  params: {
    pageSize: 10,
    page: 1,
    order: '-created_at'
  },
  watchToRender: null,
  selectionActionMessage: null
};
Table.propTypes = {
  // comes from withStyles
  classes: _propTypes["default"].object.isRequired,
  // comes from injectIntl
  intl: _propTypes["default"].object.isRequired,
  // used to come from router
  params: _propTypes["default"].object,
  count: _propTypes["default"].number,
  pages: _propTypes["default"].number.isRequired,
  defaultSorted: _propTypes["default"].array,
  data: _propTypes["default"].array.isRequired,
  columns: _propTypes["default"].array.isRequired,
  baseUrl: _propTypes["default"].string,
  countOnTop: _propTypes["default"].bool,
  marginTop: _propTypes["default"].bool,
  multiSelect: _propTypes["default"].bool,
  selectionActions: _propTypes["default"].array,
  redirectTo: _propTypes["default"].func.isRequired,
  setTableSelection: _propTypes["default"].func,
  selection: _propTypes["default"].object,
  extraProps: _propTypes["default"].object,
  paramsPrefix: _propTypes["default"].string,
  watchToRender: _propTypes["default"].any,
  selectionActionMessage: _propTypes["default"].string
};
var styledAndTranslated = (0, _core.withStyles)(_styles.styles)((0, _injectIntl.injectIntl)(Table));
exports.Table = styledAndTranslated;