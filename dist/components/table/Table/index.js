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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

  function Table(props) {
    var _this;

    _classCallCheck(this, Table);

    _this = _super.call(this, props);
    var formatMessage = props.intl.formatMessage,
        setTableSelection = props.setTableSelection;
    setTableSelection('reset');
    Object.assign(_reactTable.ReactTableDefaults, (0, _messages.customTableTranslations)(formatMessage));
    return _this;
  }

  _createClass(Table, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var newColumns = (0, _tableUtils.getSimplifiedColumns)(nextProps.columns);
      var oldColumns = (0, _tableUtils.getSimplifiedColumns)(this.props.columns);
      return !(0, _isEqual["default"])(nextProps.data, this.props.data) || !(0, _isEqual["default"])(newColumns, oldColumns) || !(0, _isEqual["default"])(nextProps.selection.selectedItems, this.props.selection.selectedItems) || !(0, _isEqual["default"])(nextProps.selection.selectAll, this.props.selection.selectAll) || !(0, _isEqual["default"])(nextProps.selection.unSelectedItems, this.props.selection.unSelectedItems) || !(0, _isEqual["default"])(nextProps.extraProps, this.props.extraProps) || !(0, _isEqual["default"])(nextProps.watchToRender, this.props.watchToRender);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.setTableSelection('reset');
    }
  }, {
    key: "onTableParamsChange",
    value: function onTableParamsChange(key, value) {
      var _this$props = this.props,
          params = _this$props.params,
          redirectTo = _this$props.redirectTo,
          baseUrl = _this$props.baseUrl,
          paramsPrefix = _this$props.paramsPrefix;

      var newParams = _objectSpread(_objectSpread({}, params), {}, _defineProperty({}, (0, _tableUtils.getParamsKey)(paramsPrefix, key), key !== 'order' ? value : (0, _tableUtils.getSort)(value)));

      if (key === 'pageSize') {
        newParams[(0, _tableUtils.getParamsKey)(paramsPrefix, 'page')] = 1;
      }

      redirectTo(baseUrl, newParams);
    }
  }, {
    key: "onSelect",
    value: function onSelect(isSelected, item) {
      var selectedItems = _toConsumableArray(this.props.selection.selectedItems);

      var unSelectedItems = _toConsumableArray(this.props.selection.unSelectedItems);

      var _this$props2 = this.props,
          selectAll = _this$props2.selection.selectAll,
          count = _this$props2.count,
          setTableSelection = _this$props2.setTableSelection;

      if (selectAll) {
        if (!isSelected) {
          unSelectedItems.push(item);
        } else {
          var itemIndex = unSelectedItems.findIndex(function (el) {
            return (0, _isEqual["default"])(el, item);
          });

          if (itemIndex !== -1) {
            unSelectedItems.splice(itemIndex, 1);
          }
        }

        setTableSelection('unselect', unSelectedItems, count);
      } else {
        if (isSelected) {
          selectedItems.push(item);
        } else {
          var _itemIndex = selectedItems.findIndex(function (el) {
            return (0, _isEqual["default"])(el, item);
          });

          selectedItems.splice(_itemIndex, 1);
        }

        setTableSelection('select', selectedItems);
      }
    }
  }, {
    key: "isItemSelected",
    value: function isItemSelected(item) {
      var _this$props$selection = this.props.selection,
          selectedItems = _this$props$selection.selectedItems,
          unSelectedItems = _this$props$selection.unSelectedItems,
          selectAll = _this$props$selection.selectAll;

      if (!selectAll) {
        return Boolean(selectedItems.find(function (el) {
          return (0, _isEqual["default"])(el, item);
        }));
      }

      return !unSelectedItems.find(function (el) {
        return (0, _isEqual["default"])(el, item);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this,
          _classNames,
          _classNames2;

      var _this$props3 = this.props,
          classes = _this$props3.classes,
          formatMessage = _this$props3.intl.formatMessage,
          params = _this$props3.params,
          data = _this$props3.data,
          count = _this$props3.count,
          pages = _this$props3.pages,
          columns = _this$props3.columns,
          defaultSorted = _this$props3.defaultSorted,
          countOnTop = _this$props3.countOnTop,
          marginTop = _this$props3.marginTop,
          multiSelect = _this$props3.multiSelect,
          selectionActions = _this$props3.selectionActions,
          setTableSelection = _this$props3.setTableSelection,
          selectCount = _this$props3.selection.selectCount,
          selection = _this$props3.selection,
          extraProps = _this$props3.extraProps,
          paramsPrefix = _this$props3.paramsPrefix,
          selectionActionMessage = _this$props3.selectionActionMessage;

      var actions = _toConsumableArray((0, _tableUtils.defaultSelectionActions)(function () {
        return setTableSelection('selectAll', [], count);
      }, function () {
        return setTableSelection('reset');
      }, formatMessage));

      actions = actions.concat(selectionActions);
      var page = params[(0, _tableUtils.getParamsKey)(paramsPrefix, 'page')] ? params[(0, _tableUtils.getParamsKey)(paramsPrefix, 'page')] - 1 : 0;
      var urlPageSize = parseInt(params[(0, _tableUtils.getParamsKey)(paramsPrefix, 'pageSize')], 10);
      var pageSize = urlPageSize || extraProps && extraProps.defaultPageSize;
      var showPagination = !(pageSize >= count && page === 0);
      pageSize = pageSize < count ? pageSize : count;

      if (count === 0) {
        pageSize = 2;
      }

      var order = params[(0, _tableUtils.getParamsKey)(paramsPrefix, 'order')] ? (0, _tableUtils.getOrderArray)(params[(0, _tableUtils.getParamsKey)(paramsPrefix, 'order')]) : defaultSorted;

      if (multiSelect && !columns.find(function (c) {
        return c.accessor === 'selected';
      })) {
        columns.push({
          Header: formatMessage(_messages.MESSAGES.selection),
          accessor: 'selected',
          width: 100,
          sortable: false,
          Cell: function Cell(settings) {
            return /*#__PURE__*/_react["default"].createElement(_core.Checkbox, {
              color: "primary",
              checked: _this2.isItemSelected(settings.original),
              onChange: function onChange(event) {
                return _this2.onSelect(event.target.checked, settings.original);
              }
            });
          }
        });
      }

      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_SelectionSpeedDials.SelectionSpeedDials, {
        selection: selection,
        hidden: !multiSelect,
        actions: actions,
        reset: function reset() {
          return setTableSelection('reset');
        },
        actionMessage: selectionActionMessage !== null && selectionActionMessage !== void 0 ? selectionActionMessage : formatMessage(_messages.MESSAGES.selectionAction)
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
          return _this2.onTableParamsChange('page', newPage + 1);
        },
        onPageSizeChange: function onPageSizeChange(newPageSize) {
          return _this2.onTableParamsChange('pageSize', newPageSize);
        },
        onSortedChange: function onSortedChange(newOrder) {
          return _this2.onTableParamsChange('order', newOrder);
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