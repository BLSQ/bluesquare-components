"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TruncatedTreeview = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = require("prop-types");
var _xTreeView = require("@mui/x-tree-view");
var _styles = require("@mui/styles");
var _TreeItems = _interopRequireDefault(require("./TreeItems"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var alignTailIcon = {
  display: 'flex',
  alignItems: 'center'
};
var removeBackgroundOnTabNav = {
  '&.MuiTreeItem-root:focus > .MuiTreeItem-content .MuiTreeItem-label': {
    backgroundColor: 'white'
  }
};
var treeItemStyle = _objectSpread({
  '& .MuiTreeItem-label': _objectSpread(_objectSpread({}, alignTailIcon), {}, {
    paddingLeft: '0px'
  })
}, removeBackgroundOnTabNav);
// TODO remove repetitions
var styles = function styles(theme) {
  return {
    truncatedTreeview: {
      color: theme.palette.mediumGray.main
    },
    singleTreeItem: _objectSpread(_objectSpread({}, treeItemStyle), {}, {
      color: theme.palette.gray.main
    }),
    truncatedTreeviewItem: _objectSpread(_objectSpread({}, treeItemStyle), {}, {
      color: theme.palette.mediumGray.main
    }),
    lastTreeItem: _objectSpread(_objectSpread({
      '& .MuiTreeItem-label': _objectSpread({}, alignTailIcon)
    }, removeBackgroundOnTabNav), {}, {
      color: theme.palette.gray.main
    }),
    removeIconContainer: {
      paddingLeft: '5px',
      '& .MuiTreeItem-iconContainer': {
        display: 'none'
      }
    },
    disabled: {
      '& .MuiTreeItem-label:hover': {
        backgroundColor: 'white',
        cursor: 'default'
      }
    }
  };
};
var useStyles = (0, _styles.makeStyles)(styles);
var TruncatedTreeview = exports.TruncatedTreeview = function TruncatedTreeview(_ref) {
  var _Array$from$map;
  var _ref$selectedItems = _ref.selectedItems,
    selectedItems = _ref$selectedItems === void 0 ? null : _ref$selectedItems,
    label = _ref.label,
    _ref$redirect = _ref.redirect,
    redirect = _ref$redirect === void 0 ? function () {
      return null;
    } : _ref$redirect,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var style = useStyles();
  var mouseDownTime = (0, _react.useRef)();
  var onLabelClick = function onLabelClick(id) {
    return function (e) {
      e.preventDefault();
      if (new Date() - mouseDownTime.current < 150) {
        redirect(id);
      }
    };
  };
  var expanded = (_Array$from$map = Array.from(selectedItems.keys()).map(function (item) {
    return item.toString();
  })) !== null && _Array$from$map !== void 0 ? _Array$from$map : [];
  return /*#__PURE__*/_react["default"].createElement(_xTreeView.TreeView, {
    onMouseDown: function onMouseDown() {
      mouseDownTime.current = new Date();
    },
    disableSelection: true,
    expanded: expanded,
    classes: {
      root: expanded.length === 1 && style.removeIconContainer
    },
    className: style.truncatedTreeview
  }, /*#__PURE__*/_react["default"].createElement(_TreeItems["default"], {
    items: selectedItems,
    initialItems: selectedItems,
    disabled: disabled,
    style: style,
    label: label,
    onLabelClick: onLabelClick
  }));
};
TruncatedTreeview.propTypes = {
  // in fact a nested map : {orgUnitId:{parentId:parentName}}
  selectedItems: _propTypes.any,
  label: _propTypes.func.isRequired,
  redirect: _propTypes.func,
  disabled: _propTypes.bool
};