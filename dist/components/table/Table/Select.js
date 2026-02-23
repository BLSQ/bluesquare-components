"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onSelect = exports.isItemSelected = exports.getSelectionCol = exports.Select = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
var _isEqual = _interopRequireDefault(require("lodash/isEqual"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _useSafeIntl2 = require("../../../localization/useSafeIntl");
var _SelectionSpeedDials = require("../SelectionSpeedDials");
var _messages = require("./messages");
var _tableUtils = require("../../../utils/tableUtils");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var onSelect = exports.onSelect = function onSelect(_ref) {
  var isSelected = _ref.isSelected,
    item = _ref.item,
    selection = _ref.selection,
    setTableSelection = _ref.setTableSelection,
    count = _ref.count;
  var selectedItems = (0, _toConsumableArray2["default"])(selection.selectedItems);
  var unSelectedItems = (0, _toConsumableArray2["default"])(selection.unSelectedItems);
  var selectAll = selection.selectAll;
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
};
var isItemSelected = exports.isItemSelected = function isItemSelected(item, selection) {
  var selector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';
  var selectedItems = selection.selectedItems,
    unSelectedItems = selection.unSelectedItems,
    selectAll = selection.selectAll;
  if (!selectAll) {
    return Boolean(selectedItems.find(function (el) {
      return el[selector] === item[selector];
    }));
  }
  return !unSelectedItems.find(function (el) {
    return el[selector] === item[selector];
  });
};
var getSelectionCol = exports.getSelectionCol = function getSelectionCol(selection, setTableSelection, count, formatMessage) {
  var getIsSelectionDisabled = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (row) {
    return false;
  };
  return {
    Header: formatMessage(_messages.MESSAGES.selection),
    accessor: 'selected',
    id: 'selectionColumn',
    width: 100,
    sortable: false,
    Cell: function Cell(settings) {
      var handleSelect = (0, _react.useCallback)(function (event) {
        onSelect({
          isSelected: event.target.checked,
          item: settings.cell.row.original,
          selection: selection,
          setTableSelection: setTableSelection,
          count: count
        });
      }, [selection, setTableSelection, count, settings.cell.row.original]);
      var isDisabled = getIsSelectionDisabled(settings.cell.row.original);
      var isChecked = !isDisabled && isItemSelected(settings.cell.row.original, selection);
      return /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
        color: "primary",
        disabled: isDisabled,
        checked: isChecked,
        onChange: handleSelect
      });
    }
  };
};

/**
 * @typedef {Object} SelectionObject
 * @property {Array} selectedItems
 * @property {Array} unSelectedItems
 * @property {boolean} selectAll
 * @property {number} selectCount
 */

/**
 * @param {Object} props
 * @param {boolean} [props.multiSelect]
 * @param {Array} [props.selectionActions]
 * @param {(selectionType: string, items: Array<any>, totalCount?: number) => any} [props.setTableSelection]
 * @param {SelectionObject|any} [props.selection]
 * @param {string|null} [props.selectionActionMessage]
 * @param {number} [props.selectAllCount]
 */

var Select = exports.Select = function Select(_ref2) {
  var _ref2$multiSelect = _ref2.multiSelect,
    multiSelect = _ref2$multiSelect === void 0 ? false : _ref2$multiSelect,
    _ref2$selectionAction = _ref2.selectionActions,
    selectionActions = _ref2$selectionAction === void 0 ? [] : _ref2$selectionAction,
    _ref2$setTableSelecti = _ref2.setTableSelection,
    setTableSelection = _ref2$setTableSelecti === void 0 ? function () {
      return null;
    } : _ref2$setTableSelecti,
    _ref2$selection = _ref2.selection,
    selection = _ref2$selection === void 0 ? _tableUtils.selectionInitialState : _ref2$selection,
    _ref2$selectionAction2 = _ref2.selectionActionMessage,
    selectionActionMessage = _ref2$selectionAction2 === void 0 ? null : _ref2$selectionAction2,
    _ref2$selectAllCount = _ref2.selectAllCount,
    selectAllCount = _ref2$selectAllCount === void 0 ? 0 : _ref2$selectAllCount;
  var _useSafeIntl = (0, _useSafeIntl2.useSafeIntl)(),
    formatMessage = _useSafeIntl.formatMessage;
  var actions = (0, _toConsumableArray2["default"])((0, _tableUtils.defaultSelectionActions)(function () {
    return setTableSelection('selectAll', [], selectAllCount);
  }, function () {
    return setTableSelection('reset');
  }, formatMessage));
  actions = actions.concat(selectionActions);
  return /*#__PURE__*/_react["default"].createElement(_SelectionSpeedDials.SelectionSpeedDials, {
    selection: selection,
    hidden: !multiSelect,
    actions: actions,
    reset: function reset() {
      return setTableSelection('reset');
    },
    actionMessage: selectionActionMessage !== null && selectionActionMessage !== void 0 ? selectionActionMessage : formatMessage(_messages.MESSAGES.selectionAction)
  });
};
Select.propTypes = {
  selectAllCount: _propTypes["default"].number,
  multiSelect: _propTypes["default"].bool,
  selectionActions: _propTypes["default"].array,
  setTableSelection: _propTypes["default"].func,
  selection: _propTypes["default"].object,
  selectionActionMessage: _propTypes["default"].string
};