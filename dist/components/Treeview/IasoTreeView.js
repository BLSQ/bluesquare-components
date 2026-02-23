"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IasoTreeView = void 0;
var _material = require("@mui/material");
var _styles = require("@mui/styles");
var _xTreeView = require("@mui/x-tree-view");
var _propTypes = require("prop-types");
var _react = _interopRequireWildcard(require("react"));
var _useSafeIntl2 = require("../../localization/useSafeIntl");
var _EnrichedTreeItem = require("./EnrichedTreeItem");
var _messages = require("./messages");
var _requests = require("./requests");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var styles = function styles(theme) {
  return {
    root: {
      color: theme.palette.gray.main,
      backgroundColor: theme.palette.ligthGray.main,
      borderRadius: '7px',
      maxHeight: '60vh',
      overflowY: 'scroll'
    },
    isFetching: {
      color: theme.palette.gray.main,
      backgroundColor: theme.palette.ligthGray.main,
      borderRadius: '7px',
      maxHeight: '60vh',
      overflowY: 'scroll'
    }
  };
};
var useStyles = (0, _styles.makeStyles)(styles);
var IasoTreeView = exports.IasoTreeView = function IasoTreeView(_ref) {
  var _ref$getChildrenData = _ref.getChildrenData,
    getChildrenData = _ref$getChildrenData === void 0 ? function () {} : _ref$getChildrenData,
    _ref$getRootData = _ref.getRootData,
    getRootData = _ref$getRootData === void 0 ? function () {} : _ref$getRootData,
    label = _ref.label,
    _ref$multiselect = _ref.multiselect,
    multiselect = _ref$multiselect === void 0 ? false : _ref$multiselect,
    expanded = _ref.expanded,
    _ref$selected = _ref.selected,
    selected = _ref$selected === void 0 ? undefined : _ref$selected,
    onToggle = _ref.onToggle,
    _ref$toggleOnLabelCli = _ref.toggleOnLabelClick,
    toggleOnLabelClick = _ref$toggleOnLabelCli === void 0 ? true : _ref$toggleOnLabelCli,
    _ref$onSelect = _ref.onSelect,
    onSelect = _ref$onSelect === void 0 ? function () {} : _ref$onSelect,
    _ref$onCheckBoxClick = _ref.onCheckBoxClick,
    onCheckBoxClick = _ref$onCheckBoxClick === void 0 ? function () {} : _ref$onCheckBoxClick,
    _ref$onLabelClick = _ref.onLabelClick,
    onLabelClick = _ref$onLabelClick === void 0 ? function () {} : _ref$onLabelClick,
    _ref$ticked = _ref.ticked,
    ticked = _ref$ticked === void 0 ? [] : _ref$ticked,
    _ref$parentsTicked = _ref.parentsTicked,
    parentsTicked = _ref$parentsTicked === void 0 ? [] : _ref$parentsTicked,
    _ref$scrollIntoView = _ref.scrollIntoView,
    scrollIntoView = _ref$scrollIntoView === void 0 ? null : _ref$scrollIntoView,
    _ref$allowSelection = _ref.allowSelection,
    allowSelection = _ref$allowSelection === void 0 ? function () {
      return true;
    } : _ref$allowSelection,
    _ref$queryOptions = _ref.queryOptions,
    queryOptions = _ref$queryOptions === void 0 ? {} : _ref$queryOptions,
    _ref$childrenQueryOpt = _ref.childrenQueryOptions,
    childrenQueryOptions = _ref$childrenQueryOpt === void 0 ? {} : _ref$childrenQueryOpt,
    _ref$dependency = _ref.dependency,
    dependency = _ref$dependency === void 0 ? undefined : _ref$dependency;
  var classes = useStyles();
  var _useSafeIntl = (0, _useSafeIntl2.useSafeIntl)(),
    formatMessage = _useSafeIntl.formatMessage;
  var fetchChildrenData = (0, _react.useCallback)(getChildrenData, [getChildrenData]);
  var _useRootData = (0, _requests.useRootData)(getRootData, queryOptions, dependency),
    rootData = _useRootData.data,
    isFetching = _useRootData.isFetching;
  var onNodeToggle = function onNodeToggle(_event, nodeIds) {
    onToggle(nodeIds);
  };
  var onNodeSelect = function onNodeSelect(_event, selection) {
    onSelect(selection);
  };
  var makeChildren = (0, _react.useCallback)(function (data) {
    if (!data) return null;
    return data.map(function (item) {
      return /*#__PURE__*/_react["default"].createElement(_EnrichedTreeItem.EnrichedTreeItem, {
        label: label,
        id: item.id,
        data: item,
        key: "RootTreeItem ".concat(item.id),
        fetchChildrenData: fetchChildrenData,
        dependency: dependency,
        expanded: expanded,
        selected: selected,
        toggleOnLabelClick: toggleOnLabelClick,
        onCheckBoxClick: onCheckBoxClick,
        onLabelClick: onLabelClick,
        withCheckbox: multiselect,
        ticked: ticked,
        parentsTicked: parentsTicked,
        scrollIntoView: scrollIntoView,
        allowSelection: allowSelection,
        queryOptions: childrenQueryOptions
      });
    });
  }, [label, fetchChildrenData, expanded, selected, toggleOnLabelClick, onCheckBoxClick, onLabelClick, multiselect, ticked, parentsTicked, scrollIntoView]);
  return /*#__PURE__*/_react["default"].createElement(_xTreeView.TreeView, {
    classes: isFetching ? {
      root: classes.isFetching
    } : {
      root: classes.root
    },
    expanded: expanded,
    selected: selected,
    multiSelect: multiselect,
    onNodeSelect: onNodeSelect,
    onNodeToggle: onNodeToggle
  }, rootData && makeChildren(rootData), rootData && !isFetching && rootData.length === 0 && /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 100
  }, formatMessage(_messages.MESSAGES.noData)), isFetching && /*#__PURE__*/_react["default"].createElement(_material.Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 100
  }, /*#__PURE__*/_react["default"].createElement(_material.CircularProgress, null)));
};
IasoTreeView.propTypes = {
  getChildrenData: _propTypes.func,
  getRootData: _propTypes.func,
  label: _propTypes.func.isRequired,
  // a function that will return the label, including additional icons
  multiselect: _propTypes.bool,
  toggleOnLabelClick: _propTypes.bool,
  expanded: (0, _propTypes.arrayOf)(_propTypes.string).isRequired,
  onToggle: _propTypes.func.isRequired,
  onSelect: _propTypes.func,
  onCheckBoxClick: _propTypes.func,
  onLabelClick: _propTypes.func,
  selected: (0, _propTypes.oneOfType)([_propTypes.string, (0, _propTypes.arrayOf)(_propTypes.string)]),
  ticked: (0, _propTypes.oneOfType)([_propTypes.string, (0, _propTypes.arrayOf)(_propTypes.string)]),
  parentsTicked: _propTypes.array,
  scrollIntoView: _propTypes.string,
  allowSelection: _propTypes.func,
  queryOptions: _propTypes.object,
  childrenQueryOptions: _propTypes.object,
  dependency: _propTypes.any
};