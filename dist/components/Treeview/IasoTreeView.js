"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IasoTreeView = void 0;

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _lab = require("@material-ui/lab");

var _styles = require("@material-ui/core/styles");

var _core = require("@material-ui/core");

var _EnrichedTreeItem = require("./EnrichedTreeItem");

var _requests = require("./requests");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var IasoTreeView = function IasoTreeView(_ref) {
  var getChildrenData = _ref.getChildrenData,
      getRootData = _ref.getRootData,
      label = _ref.label,
      multiselect = _ref.multiselect,
      expanded = _ref.expanded,
      selected = _ref.selected,
      onToggle = _ref.onToggle,
      toggleOnLabelClick = _ref.toggleOnLabelClick,
      onSelect = _ref.onSelect,
      onCheckBoxClick = _ref.onCheckBoxClick,
      onLabelClick = _ref.onLabelClick,
      ticked = _ref.ticked,
      parentsTicked = _ref.parentsTicked,
      scrollIntoView = _ref.scrollIntoView,
      allowSelection = _ref.allowSelection,
      _ref$queryOptions = _ref.queryOptions,
      queryOptions = _ref$queryOptions === void 0 ? {} : _ref$queryOptions,
      _ref$childrenQueryOpt = _ref.childrenQueryOptions,
      childrenQueryOptions = _ref$childrenQueryOpt === void 0 ? {} : _ref$childrenQueryOpt;
  var classes = useStyles();
  var fetchChildrenData = (0, _react.useCallback)(getChildrenData, [getChildrenData]);

  var _useRootData = (0, _requests.useRootData)(getRootData, queryOptions),
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
  return /*#__PURE__*/_react["default"].createElement(_lab.TreeView, {
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
  }, !isFetching && rootData && makeChildren(rootData), isFetching && /*#__PURE__*/_react["default"].createElement(_core.Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 100
  }, /*#__PURE__*/_react["default"].createElement(_core.CircularProgress, null)));
};

exports.IasoTreeView = IasoTreeView;
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
  childrenQueryOptions: _propTypes.object
};
IasoTreeView.defaultProps = {
  getChildrenData: function getChildrenData() {},
  getRootData: function getRootData() {},
  multiselect: false,
  toggleOnLabelClick: true,
  onSelect: function onSelect() {},
  onCheckBoxClick: function onCheckBoxClick() {},
  onLabelClick: function onLabelClick() {},
  selected: undefined,
  ticked: [],
  parentsTicked: [],
  scrollIntoView: null,
  allowSelection: function allowSelection() {
    return true;
  },
  queryOptions: {},
  childrenQueryOptions: {}
};