"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _xTreeView = require("@mui/x-tree-view");
var _ArrowRight = _interopRequireDefault(require("@mui/icons-material/ArrowRight"));
var _ArrowDropDown = _interopRequireDefault(require("@mui/icons-material/ArrowDropDown"));
var determineClassName = function determineClassName(items, nextItems, disabled, style) {
  var baseClass = disabled ? "".concat(style.disabled, " ") : '';
  if (items.size === 1) return "".concat(baseClass).concat(style.singleTreeItem);
  if (nextItems.size === 0) return "".concat(baseClass).concat(style.lastTreeItem);
  return "".concat(baseClass).concat(style.truncatedTreeviewItem);
};
var makeLabel = function makeLabel(child) {
  var handleClick = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return null;
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      verticalAlign: 'middle'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    onClick: handleClick,
    tabIndex: 0,
    role: "button"
  }, child));
};
var _TreeItems = function TreeItems(_ref) {
  var items = _ref.items,
    initialItems = _ref.initialItems,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    label = _ref.label,
    _ref$onLabelClick = _ref.onLabelClick,
    onLabelClick = _ref$onLabelClick === void 0 ? function () {} : _ref$onLabelClick;
  if (items.size === 0) return null;
  var nextItems = new Map(items);
  // first entry of the map in the form of an array: [key,value]
  var item = nextItems.entries().next().value;
  nextItems["delete"](item[0]);
  var className = determineClassName(initialItems, nextItems, disabled, style);
  return /*#__PURE__*/_react["default"].createElement(_xTreeView.TreeItem, {
    key: item[0].toString() + nextItems.size.toString(),
    className: className,
    collapseIcon: /*#__PURE__*/_react["default"].createElement(_ArrowDropDown["default"], {
      style: {
        fontSize: 'large'
      }
    }),
    expandIcon: /*#__PURE__*/_react["default"].createElement(_ArrowRight["default"], {
      style: {
        fontSize: 'large'
      }
    }),
    label: makeLabel(label(item[1]), function () {
      return onLabelClick(item[0]);
    }),
    nodeId: item[0],
    disabled: true
  }, items.size >= 1 ? /*#__PURE__*/_react["default"].createElement(_TreeItems, {
    items: nextItems,
    initialItems: initialItems,
    disabled: disabled,
    style: style,
    label: label,
    onLabelClick: onLabelClick
  }) : null);
};
_TreeItems.propTypes = {
  items: _propTypes["default"].instanceOf(Map).isRequired,
  initialItems: _propTypes["default"].instanceOf(Map).isRequired,
  disabled: _propTypes["default"].bool,
  style: _propTypes["default"].object,
  label: _propTypes["default"].func.isRequired,
  onLabelClick: _propTypes["default"].func
};
var _default = exports["default"] = _TreeItems;