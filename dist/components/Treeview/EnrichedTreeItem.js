"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnrichedTreeItem = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _ArrowDropDown = _interopRequireDefault(require("@mui/icons-material/ArrowDropDown"));
var _ArrowRight = _interopRequireDefault(require("@mui/icons-material/ArrowRight"));
var _CheckBox = _interopRequireDefault(require("@mui/icons-material/CheckBox"));
var _CheckBoxOutlineBlankOutlined = _interopRequireDefault(require("@mui/icons-material/CheckBoxOutlineBlankOutlined"));
var _IndeterminateCheckBox = _interopRequireDefault(require("@mui/icons-material/IndeterminateCheckBox"));
var _styles = require("@mui/styles");
var _xTreeView = require("@mui/x-tree-view");
var _propTypes = require("prop-types");
var _react = _interopRequireWildcard(require("react"));
var _requests = require("./requests");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
var _EnrichedTreeItem = exports.EnrichedTreeItem = function EnrichedTreeItem(_ref) {
  var label = _ref.label,
    id = _ref.id,
    _ref$fetchChildrenDat = _ref.fetchChildrenData,
    fetchChildrenData = _ref$fetchChildrenDat === void 0 ? function () {} : _ref$fetchChildrenDat,
    _ref$expanded = _ref.expanded,
    expanded = _ref$expanded === void 0 ? [] : _ref$expanded,
    _ref$toggleOnLabelCli = _ref.toggleOnLabelClick,
    toggleOnLabelClick = _ref$toggleOnLabelCli === void 0 ? true : _ref$toggleOnLabelCli,
    _ref$onLabelClick = _ref.onLabelClick,
    onLabelClick = _ref$onLabelClick === void 0 ? function () {} : _ref$onLabelClick,
    data = _ref.data,
    _ref$withCheckbox = _ref.withCheckbox,
    withCheckbox = _ref$withCheckbox === void 0 ? false : _ref$withCheckbox,
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
    _ref$dependency = _ref.dependency,
    dependency = _ref$dependency === void 0 ? undefined : _ref$dependency;
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
      }),
      dependency: dependency
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
    var handleClick = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {
      return null;
    };
    return /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        verticalAlign: 'middle'
      }
    }, makeIcon(hasCheckbox, hasBeenTicked, tickedParent), /*#__PURE__*/_react["default"].createElement("span", {
      onClick: handleClick,
      tabIndex: 0,
      role: "button"
    }, child));
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
      return /*#__PURE__*/_react["default"].createElement(_EnrichedTreeItem, {
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
        queryOptions: queryOptions,
        dependency: dependency
      });
    });
  };
  if (isExpanded && isLoading) {
    return /*#__PURE__*/_react["default"].createElement(_xTreeView.TreeItem, {
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
    }, /*#__PURE__*/_react["default"].createElement(_xTreeView.TreeItem, {
      classes: {
        root: isSelectable ? classes.treeItem : classes.unselectableTreeItem
      },
      ref: ref,
      label: makeLabel(label(data), withCheckbox, isTicked, isTickedParent, handleLabelClick),
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
      })
    }, childrenData && isExpanded && makeSubTree(childrenData), !isExpanded && /*#__PURE__*/_react["default"].createElement("div", null)));
  }
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/_react["default"].createElement(_xTreeView.TreeItem, {
    classes: {
      root: isSelectable ? classes.treeItem : classes.unselectableTreeItem
    },
    ref: ref,
    label: makeLabel(label(data), withCheckbox, isTicked, undefined, handleLabelClick),
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
    })
  }));
};
_EnrichedTreeItem.propTypes = {
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
  queryOptions: _propTypes.object,
  dependency: _propTypes.any
};