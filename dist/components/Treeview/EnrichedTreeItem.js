"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnrichedTreeItem = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _lab = require("@material-ui/lab");

var _ArrowRight = _interopRequireDefault(require("@material-ui/icons/ArrowRight"));

var _ArrowDropDown = _interopRequireDefault(require("@material-ui/icons/ArrowDropDown"));

var _CheckBoxOutlineBlankOutlined = _interopRequireDefault(require("@material-ui/icons/CheckBoxOutlineBlankOutlined"));

var _CheckBox = _interopRequireDefault(require("@material-ui/icons/CheckBox"));

var _IndeterminateCheckBox = _interopRequireDefault(require("@material-ui/icons/IndeterminateCheckBox"));

var _styles = require("@material-ui/core/styles");

var _requests = require("./requests");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var styles = function styles(theme) {
  return {
    treeItem: {
      '&.MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label': {
        backgroundColor: theme.palette.primary.background,
        alignItems: 'center',
        color: theme.palette.primary.main
      }
    },
    unselectableTreeItem: {
      '&.MuiTreeItem-root > .MuiTreeItem-content .MuiTreeItem-label': {
        alignItems: 'center',
        color: theme.palette.mediumGray.main
      }
    },
    checkbox: {
      color: theme.palette.mediumGray.main,
      fontSize: '16px',
      marginRight: '5px'
    }
  };
};

var useStyles = (0, _styles.makeStyles)(styles);

var EnrichedTreeItem = function EnrichedTreeItem(_ref) {
  var label = _ref.label,
      id = _ref.id,
      fetchChildrenData = _ref.fetchChildrenData,
      expanded = _ref.expanded,
      toggleOnLabelClick = _ref.toggleOnLabelClick,
      onLabelClick = _ref.onLabelClick,
      data = _ref.data,
      withCheckbox = _ref.withCheckbox,
      ticked = _ref.ticked,
      parentsTicked = _ref.parentsTicked,
      scrollIntoView = _ref.scrollIntoView,
      allowSelection = _ref.allowSelection,
      _ref$queryOptions = _ref.queryOptions,
      queryOptions = _ref$queryOptions === void 0 ? {} : _ref$queryOptions;
  var classes = useStyles();
  var isExpanded = expanded.includes(id);
  var isTicked = ticked.includes(id);
  var isTickedParent = parentsTicked.includes(id);
  var isSelectable = allowSelection(data);

  var _useChildrenData = (0, _requests.useChildrenData)({
    request: fetchChildrenData,
    id: id,
    options: _objectSpread(_objectSpread({}, queryOptions), {}, {
      enabled: isExpanded
    })
  }),
      childrenData = _useChildrenData.data,
      isLoading = _useChildrenData.isLoading;

  var ref = (0, _react.useRef)();
  var hasChildren = data.has_children;

  var makeIcon = function makeIcon(hasCheckbox, hasBeenTicked, tickedParent) {
    if (!hasCheckbox) return null;
    if (hasBeenTicked) return /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
      className: classes.checkbox
    });
    if (tickedParent) return /*#__PURE__*/_react["default"].createElement(_IndeterminateCheckBox["default"], {
      className: classes.checkbox
    });
    return /*#__PURE__*/_react["default"].createElement(_CheckBoxOutlineBlankOutlined["default"], {
      className: classes.checkbox
    });
  };

  var makeLabel = function makeLabel(child, hasCheckbox, hasBeenTicked, tickedParent) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        verticalAlign: 'middle'
      }
    }, makeIcon(hasCheckbox, hasBeenTicked, tickedParent), child);
  };

  var handleLabelClick = (0, _react.useCallback)(function (e) {
    if (!toggleOnLabelClick) {
      e.preventDefault();
    }

    onLabelClick(id, data, isSelectable);
  }, [data, id, onLabelClick, toggleOnLabelClick, isSelectable]);
  (0, _react.useEffect)(function () {
    if (scrollIntoView === id) {
      ref.current.scrollIntoView();
    }
  }, [scrollIntoView, id, ref]);

  var makeSubTree = function makeSubTree(subTreeData) {
    if (!subTreeData) return null;
    return subTreeData.map(function (unit) {
      return /*#__PURE__*/_react["default"].createElement(EnrichedTreeItem, {
        key: "TreeItem ".concat(unit.id),
        label: label,
        id: unit.id,
        fetchChildrenData: fetchChildrenData,
        expanded: expanded,
        toggleOnLabelClick: toggleOnLabelClick,
        onLabelClick: onLabelClick,
        data: unit,
        withCheckbox: withCheckbox,
        ticked: ticked,
        parentsTicked: parentsTicked,
        scrollIntoView: scrollIntoView,
        allowSelection: allowSelection,
        queryOptions: queryOptions
      });
    });
  };

  if (isExpanded && isLoading) {
    return /*#__PURE__*/_react["default"].createElement(_lab.TreeItem, {
      classes: {
        root: isSelectable ? classes.treeItem : classes.unselectableTreeItem
      },
      ref: ref,
      label: makeLabel(label(data), withCheckbox, isTicked, isTickedParent),
      nodeId: id,
      icon: /*#__PURE__*/_react["default"].createElement(_ArrowDropDown["default"], {
        style: {
          fontSize: 'large'
        }
      })
    });
  }

  if (hasChildren) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/_react["default"].createElement(_lab.TreeItem, {
      classes: {
        root: isSelectable ? classes.treeItem : classes.unselectableTreeItem
      },
      ref: ref,
      label: makeLabel(label(data), withCheckbox, isTicked, isTickedParent),
      nodeId: id,
      collapseIcon: /*#__PURE__*/_react["default"].createElement(_ArrowDropDown["default"], {
        style: {
          fontSize: '24px'
        }
      }),
      expandIcon: /*#__PURE__*/_react["default"].createElement(_ArrowRight["default"], {
        style: {
          fontSize: '24px'
        }
      }),
      onLabelClick: handleLabelClick
    }, childrenData && isExpanded && makeSubTree(childrenData), !isExpanded && /*#__PURE__*/_react["default"].createElement("div", null)));
  }

  if (!hasChildren && !isSelectable) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement(_lab.TreeItem, {
    classes: {
      root: isSelectable ? classes.treeItem : classes.unselectableTreeItem
    },
    ref: ref,
    label: makeLabel(label(data), withCheckbox, isTicked),
    nodeId: id,
    collapseIcon: /*#__PURE__*/_react["default"].createElement(_ArrowDropDown["default"], {
      style: {
        fontSize: '24px'
      }
    }),
    expandIcon: /*#__PURE__*/_react["default"].createElement(_ArrowRight["default"], {
      style: {
        fontSize: '24px'
      }
    }),
    onLabelClick: handleLabelClick
  }));
};

exports.EnrichedTreeItem = EnrichedTreeItem;
EnrichedTreeItem.propTypes = {
  label: _propTypes.func.isRequired,
  id: _propTypes.string.isRequired,
  fetchChildrenData: _propTypes.func,
  expanded: (0, _propTypes.arrayOf)(_propTypes.string),
  toggleOnLabelClick: _propTypes.bool,
  data: _propTypes.object.isRequired,
  onLabelClick: _propTypes.func,
  withCheckbox: _propTypes.bool,
  ticked: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.array]),
  parentsTicked: _propTypes.array,
  scrollIntoView: _propTypes.string,
  allowSelection: _propTypes.func,
  queryOptions: _propTypes.object
};
EnrichedTreeItem.defaultProps = {
  fetchChildrenData: function fetchChildrenData() {},
  expanded: [],
  toggleOnLabelClick: true,
  onLabelClick: function onLabelClick() {},
  withCheckbox: false,
  ticked: [],
  parentsTicked: [],
  scrollIntoView: null,
  allowSelection: function allowSelection() {
    return true;
  },
  queryOptions: {}
};