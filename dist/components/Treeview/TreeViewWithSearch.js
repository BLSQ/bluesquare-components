"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeViewWithSearch = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _propTypes = require("prop-types");
var _react = _interopRequireWildcard(require("react"));
var _DynamicSelect = require("./DynamicSelect");
var _IasoTreeView = require("./IasoTreeView");
var _messages = require("./messages");
var _utils = require("./utils");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var formatInitialSelectedData = function formatInitialSelectedData(selectedData) {
  if (!selectedData) return [];
  if (!Array.isArray(selectedData)) return [selectedData];
  return selectedData;
};
var TreeViewWithSearch = exports.TreeViewWithSearch = function TreeViewWithSearch(_ref) {
  var _adaptMap;
  var label = _ref.label,
    _ref$getChildrenData = _ref.getChildrenData,
    getChildrenData = _ref$getChildrenData === void 0 ? function () {} : _ref$getChildrenData,
    _ref$getRootData = _ref.getRootData,
    getRootData = _ref$getRootData === void 0 ? function () {} : _ref$getRootData,
    _ref$toggleOnLabelCli = _ref.toggleOnLabelClick,
    toggleOnLabelClick = _ref$toggleOnLabelCli === void 0 ? true : _ref$toggleOnLabelCli,
    _ref$onSelect = _ref.onSelect,
    onSelect = _ref$onSelect === void 0 ? function () {} : _ref$onSelect,
    _ref$minResultCount = _ref.minResultCount,
    minResultCount = _ref$minResultCount === void 0 ? 50 : _ref$minResultCount,
    _ref$inputLabelObject = _ref.inputLabelObject,
    inputLabelObject = _ref$inputLabelObject === void 0 ? _messages.MESSAGES.search : _ref$inputLabelObject,
    _ref$withSearchButton = _ref.withSearchButton,
    withSearchButton = _ref$withSearchButton === void 0 ? false : _ref$withSearchButton,
    request = _ref.request,
    makeDropDownText = _ref.makeDropDownText,
    _ref$toolTip = _ref.toolTip,
    toolTip = _ref$toolTip === void 0 ? null : _ref$toolTip,
    parseNodeIds = _ref.parseNodeIds,
    _ref$onUpdate = _ref.onUpdate,
    onUpdate = _ref$onUpdate === void 0 ? function () {} : _ref$onUpdate,
    _ref$multiselect = _ref.multiselect,
    multiselect = _ref$multiselect === void 0 ? false : _ref$multiselect,
    _ref$preselected = _ref.preselected,
    preselected = _ref$preselected === void 0 ? null : _ref$preselected,
    _ref$preexpanded = _ref.preexpanded,
    preexpanded = _ref$preexpanded === void 0 ? null : _ref$preexpanded,
    _ref$selectedData = _ref.selectedData,
    selectedData = _ref$selectedData === void 0 ? [] : _ref$selectedData,
    _ref$allowSelection = _ref.allowSelection,
    allowSelection = _ref$allowSelection === void 0 ? function () {
      return true;
    } : _ref$allowSelection,
    _ref$dependency = _ref.dependency,
    dependency = _ref$dependency === void 0 ? undefined : _ref$dependency,
    _ref$childrenDependen = _ref.childrenDependency,
    childrenDependency = _ref$childrenDependen === void 0 ? undefined : _ref$childrenDependen,
    _ref$queryOptions = _ref.queryOptions,
    queryOptions = _ref$queryOptions === void 0 ? {} : _ref$queryOptions,
    _ref$childrenQueryOpt = _ref.childrenQueryOptions,
    childrenQueryOptions = _ref$childrenQueryOpt === void 0 ? {} : _ref$childrenQueryOpt,
    _ref$fetchDetails = _ref.fetchDetails,
    fetchDetails = _ref$fetchDetails === void 0 ? function (item) {
      return item;
    } : _ref$fetchDetails;
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
    _useState0 = (0, _slicedToArray2["default"])(_useState9, 2),
    parentsTicked = _useState0[0],
    setParentsTicked = _useState0[1];
  var _useState1 = (0, _react.useState)(!Array.isArray(preselected) ? preselected : null),
    _useState10 = (0, _slicedToArray2["default"])(_useState1, 2),
    scrollIntoView = _useState10[0],
    setScrollIntoView = _useState10[1];
  var onNodeSelect = (0, _react.useCallback)(function (selection) {
    setSelected(selection);
    if (multiselect) {
      // disabling when multiselect to avoid allowing user to confirm data while boxes are unticked
      onSelect(selection);
    }
  }, [onSelect, multiselect]);

  // Tick and untick checkbox
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
        return d.id !== parseInt(id, 10);
      })) !== null && _data$filter !== void 0 ? _data$filter : [];
    } else {
      updatedParents.set(id, parseNodeIds(itemData));
      if (multiselect) {
        if (newTicked.includes(itemData.id)) {
          updatedSelectedData = [].concat((0, _toConsumableArray2["default"])(data), [itemData]);
        } else {
          // if unticking, itemData must be removed from data
          updatedSelectedData = data.filter(function (d) {
            return d.id !== parseInt(itemData.id, 10);
          });
        }
      } else {
        updatedSelectedData = [itemData];
      }
    }
    onUpdate(newTicked, updatedParents, updatedSelectedData);
    setParentsTicked(updatedParents);
    setData(updatedSelectedData);
  }, [onUpdate, ticked, parentsTicked, multiselect, data, parseNodeIds]);
  var onSearchSelect = (0, _react.useCallback)(
  /*#__PURE__*/
  // this is an org unit so you can access the parents here
  function () {
    var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(searchSelection) {
      var details, ancestors, idsToExpand, currentId, newSelected, newParentsTicked;
      return _regenerator["default"].wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 1;
            return fetchDetails(searchSelection);
          case 1:
            details = _context.sent;
            ancestors = parseNodeIds(details);
            idsToExpand = Array.from(ancestors.keys()).map(function (id) {
              return id.toString();
            });
            currentId = idsToExpand[idsToExpand.length - 1]; // Not expanding the last selected item as it messes with the scrollIntoView
            idsToExpand.pop();
            if (multiselect) {
              setExpanded([].concat((0, _toConsumableArray2["default"])(expanded), (0, _toConsumableArray2["default"])(idsToExpand)));
              newSelected = [].concat((0, _toConsumableArray2["default"])(selected), [currentId]);
              onNodeSelect(newSelected);
            } else {
              setExpanded(idsToExpand);
              newParentsTicked = new Map();
              newParentsTicked.set(currentId, ancestors);
              onNodeSelect(currentId);
              setData([searchSelection]);
              // We don't call it in multiselect because it will only be called on label click
              // We use it here to auto select the search item selected
              onUpdate(currentId, newParentsTicked, [searchSelection]);
            }
            setScrollIntoView(currentId);
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [parseNodeIds, onNodeSelect, selected, onUpdate, expanded, multiselect, dependency]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_DynamicSelect.DynamicSelect, {
    onSelect: onSearchSelect,
    minResultCount: minResultCount,
    inputLabelObject: inputLabelObject,
    withSearchButton: withSearchButton,
    request: request,
    makeDropDownText: makeDropDownText,
    toolTip: toolTip,
    dependency: childrenDependency
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
    allowSelection: allowSelection,
    dependency: dependency,
    queryOptions: queryOptions,
    childrenQueryOptions: childrenQueryOptions
  }));
};
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
  allowSelection: _propTypes.func,
  dependency: _propTypes.any,
  childrenDependency: _propTypes.any,
  queryOptions: _propTypes.object,
  childrenQueryOptions: _propTypes.object,
  fetchDetails: _propTypes.func
};