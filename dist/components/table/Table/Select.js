"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onSelect = exports.isItemSelected = exports.getSelectionCol = exports.Select = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _isEqual = _interopRequireDefault(require("lodash/isEqual"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _SelectionSpeedDials = require("../SelectionSpeedDials");

var _useSafeIntl2 = require("../../../utils/useSafeIntl");

var _messages = require("./messages");

var _tableUtils = require("../../../utils/tableUtils");

var onSelect = function onSelect(_ref) {
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

exports.onSelect = onSelect;

var isItemSelected = function isItemSelected(item, selection) {
  var selectedItems = selection.selectedItems,
      unSelectedItems = selection.unSelectedItems,
      selectAll = selection.selectAll;

  if (!selectAll) {
    return Boolean(selectedItems.find(function (el) {
      return (0, _isEqual["default"])(el, item);
    }));
  }

  return !unSelectedItems.find(function (el) {
    return (0, _isEqual["default"])(el, item);
  });
};

exports.isItemSelected = isItemSelected;

var getSelectionCol = function getSelectionCol(selection, setTableSelection, count, formatMessage) {
  return {
    Header: formatMessage(_messages.MESSAGES.selection),
    accessor: 'selected',
    width: 100,
    sortable: false,
    Cell: function Cell(settings) {
      return /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
        color: "primary",
        checked: isItemSelected(settings.cell.row.original, selection),
        onChange: function onChange(event) {
          return onSelect({
            isSelected: event.target.checked,
            item: settings.cell.row.original,
            selection: selection,
            setTableSelection: setTableSelection,
            count: count
          });
        }
      });
    }
  };
};

exports.getSelectionCol = getSelectionCol;

var Select = function Select(_ref2) {
  var count = _ref2.count,
      multiSelect = _ref2.multiSelect,
      selectionActions = _ref2.selectionActions,
      setTableSelection = _ref2.setTableSelection,
      selection = _ref2.selection,
      selectionActionMessage = _ref2.selectionActionMessage;

  var _useSafeIntl = (0, _useSafeIntl2.useSafeIntl)(),
      formatMessage = _useSafeIntl.formatMessage;

  var actions = (0, _toConsumableArray2["default"])((0, _tableUtils.defaultSelectionActions)(function () {
    return setTableSelection('selectAll', [], count);
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

exports.Select = Select;
Select.defaultProps = {
  count: 0,
  multiSelect: false,
  selectionActions: [],
  selection: _tableUtils.selectionInitialState,
  setTableSelection: function setTableSelection() {
    return null;
  },
  selectionActionMessage: null
};
Select.propTypes = {
  count: _propTypes["default"].number,
  multiSelect: _propTypes["default"].bool,
  selectionActions: _propTypes["default"].array,
  setTableSelection: _propTypes["default"].func,
  selection: _propTypes["default"].object,
  selectionActionMessage: _propTypes["default"].string
};