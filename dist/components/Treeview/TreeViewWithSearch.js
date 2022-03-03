"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeViewWithSearch = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _DynamicSelect = require("./DynamicSelect");

var _messages = require("./messages");

var _IasoTreeView = require("./IasoTreeView");

var _utils = require("./utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var formatInitialSelectedData = function formatInitialSelectedData(selectedData) {
  if (!selectedData) return [];
  if (!Array.isArray(selectedData)) return [selectedData];
  return selectedData;
};

var TreeViewWithSearch = function TreeViewWithSearch(_ref) {
  var _adaptMap;

  var label = _ref.label,
      getChildrenData = _ref.getChildrenData,
      getRootData = _ref.getRootData,
      toggleOnLabelClick = _ref.toggleOnLabelClick,
      onSelect = _ref.onSelect,
      minResultCount = _ref.minResultCount,
      inputLabelObject = _ref.inputLabelObject,
      withSearchButton = _ref.withSearchButton,
      request = _ref.request,
      makeDropDownText = _ref.makeDropDownText,
      toolTip = _ref.toolTip,
      parseNodeIds = _ref.parseNodeIds,
      onUpdate = _ref.onUpdate,
      multiselect = _ref.multiselect,
      preselected = _ref.preselected,
      preexpanded = _ref.preexpanded,
      selectedData = _ref.selectedData,
      allowSelection = _ref.allowSelection;

  var _useState = (0, _react.useState)(formatInitialSelectedData(selectedData)),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0, _react.useState)(preselected || (multiselect ? [] : '')),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      selected = _useState4[0],
      setSelected = _useState4[1];

  var _useState5 = (0, _react.useState)((_adaptMap = (0, _utils.adaptMap)(preexpanded)) !== null && _adaptMap !== void 0 ? _adaptMap : []),
      _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
      expanded = _useState6[0],
      setExpanded = _useState6[1];

  var _useState7 = (0, _react.useState)(preselected !== null && preselected !== void 0 ? preselected : []),
      _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
      ticked = _useState8[0],
      setTicked = _useState8[1];

  var _useState9 = (0, _react.useState)(preexpanded !== null && preexpanded !== void 0 ? preexpanded : new Map()),
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      parentsTicked = _useState10[0],
      setParentsTicked = _useState10[1];

  var _useState11 = (0, _react.useState)(!Array.isArray(preselected) ? preselected : null),
      _useState12 = (0, _slicedToArray2["default"])(_useState11, 2),
      scrollIntoView = _useState12[0],
      setScrollIntoView = _useState12[1];

  var onNodeSelect = (0, _react.useCallback)(function (selection) {
    setSelected(selection);

    if (multiselect) {
      // disabling when multiselect to avoid allowing user to confirm data while boxes are unticked
      onSelect(selection);
    }
  }, [onSelect, multiselect]); // Tick and untick checkbox

  var onLabelClick = (0, _react.useCallback)(function (id, itemData, isSelectable) {
    var newTicked;
    var updatedParents;
    var updatedSelectedData;

    if (isSelectable) {
      if (multiselect) {
        newTicked = ticked.includes(id) ? ticked.filter(function (tickedId) {
          return tickedId !== id;
        }) : [].concat((0, _toConsumableArray2["default"])(ticked), [id]);
      } else {
        newTicked = [id];
      }

      setTicked(newTicked);
    }

    if (multiselect) {
      updatedParents = new Map(parentsTicked);
    } else {
      updatedParents = new Map();
    }

    if (parentsTicked.has(id)) {
      var _data$filter;

      updatedParents["delete"](id);
      updatedSelectedData = (_data$filter = data === null || data === void 0 ? void 0 : data.filter(function (d) {
        return d.id !== id;
      })) !== null && _data$filter !== void 0 ? _data$filter : [];
    } else {
      updatedParents.set(id, parseNodeIds(itemData));

      if (multiselect) {
        updatedSelectedData = [].concat((0, _toConsumableArray2["default"])(data), [itemData]);
      } else {
        updatedSelectedData = [itemData];
      }
    }

    onUpdate(newTicked, updatedParents, updatedSelectedData);
    setParentsTicked(updatedParents);
    setData(updatedSelectedData);
  }, [onUpdate, ticked, parentsTicked, multiselect, data, parseNodeIds]);
  var onSearchSelect = (0, _react.useCallback)( // this is an org unit so you can access the parents here
  function (searchSelection) {
    var ancestors = parseNodeIds(searchSelection);
    var idsToExpand = Array.from(ancestors.keys()).map(function (id) {
      return id.toString();
    });
    var currentId = idsToExpand[idsToExpand.length - 1]; // Not expanding the last selected item as it messes with the scrollIntoView

    idsToExpand.pop();

    if (multiselect) {
      setExpanded([].concat((0, _toConsumableArray2["default"])(expanded), (0, _toConsumableArray2["default"])(idsToExpand)));
      var newSelected = [].concat((0, _toConsumableArray2["default"])(selected), [currentId]);
      onNodeSelect(newSelected);
    } else {
      setExpanded(idsToExpand);
      var newParentsTicked = new Map();
      newParentsTicked.set(currentId, ancestors);
      onNodeSelect(currentId);
      setData([searchSelection]); // We don't call it in multiselect because it will only be called on label click
      // We use it here to auto select the search item selected

      onUpdate(currentId, newParentsTicked, [searchSelection]);
    }

    setScrollIntoView(currentId);
  }, [parseNodeIds, onNodeSelect, selected, onUpdate, expanded, multiselect]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_DynamicSelect.DynamicSelect, {
    onSelect: onSearchSelect,
    minResultCount: minResultCount,
    inputLabelObject: inputLabelObject,
    withSearchButton: withSearchButton,
    request: request,
    makeDropDownText: makeDropDownText,
    toolTip: toolTip
  }), /*#__PURE__*/_react["default"].createElement(_IasoTreeView.IasoTreeView, {
    label: label,
    getChildrenData: getChildrenData,
    getRootData: getRootData,
    toggleOnLabelClick: toggleOnLabelClick,
    selected: selected,
    onSelect: onNodeSelect,
    expanded: expanded,
    onToggle: setExpanded,
    onLabelClick: onLabelClick,
    multiselect: multiselect,
    ticked: ticked,
    parentsTicked: (0, _utils.adaptMap)(parentsTicked),
    scrollIntoView: scrollIntoView,
    allowSelection: allowSelection
  }));
};

exports.TreeViewWithSearch = TreeViewWithSearch;
TreeViewWithSearch.propTypes = {
  getChildrenData: _propTypes.func,
  getRootData: _propTypes.func,
  toggleOnLabelClick: _propTypes.bool,
  onSelect: _propTypes.func,
  minResultCount: _propTypes.number,
  inputLabelObject: _propTypes.object,
  withSearchButton: _propTypes.bool,
  request: _propTypes.func.isRequired,
  makeDropDownText: _propTypes.func.isRequired,
  toolTip: _propTypes.func,
  parseNodeIds: _propTypes.func.isRequired,
  onUpdate: _propTypes.func,
  multiselect: _propTypes.bool,
  preselected: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.array]),
  // preexpanded is a Map
  preexpanded: _propTypes.any,
  selectedData: (0, _propTypes.oneOfType)([_propTypes.object, _propTypes.array]),
  label: _propTypes.func.isRequired,
  allowSelection: _propTypes.func
};
TreeViewWithSearch.defaultProps = {
  getChildrenData: function getChildrenData() {},
  getRootData: function getRootData() {},
  toggleOnLabelClick: true,
  onSelect: function onSelect() {},
  minResultCount: 50,
  inputLabelObject: _messages.MESSAGES.search,
  withSearchButton: false,
  toolTip: null,
  onUpdate: function onUpdate() {},
  multiselect: false,
  preselected: null,
  preexpanded: null,
  selectedData: [],
  allowSelection: function allowSelection() {
    return true;
  }
};