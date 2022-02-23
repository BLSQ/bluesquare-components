"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TruncatedTreeview = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = require("prop-types");

var _lab = require("@material-ui/lab");

var _styles = require("@material-ui/core/styles");

var _ArrowRight = _interopRequireDefault(require("@material-ui/icons/ArrowRight"));

var _ArrowDropDown = _interopRequireDefault(require("@material-ui/icons/ArrowDropDown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
}, removeBackgroundOnTabNav); // TODO remove repetitions


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
    })
  };
};

var determineClassName = function determineClassName(items, nextItems, style) {
  if (items.size === 1) return style.singleTreeItem;
  if (nextItems.size === 0) return style.lastTreeItem;
  return style.truncatedTreeviewItem;
};

var useStyles = (0, _styles.makeStyles)(styles);

var TruncatedTreeview = function TruncatedTreeview(_ref) {
  var _Array$from$map;

  var selectedItems = _ref.selectedItems,
      label = _ref.label,
      redirect = _ref.redirect;
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

  var makeTreeItems = function makeTreeItems(items, initialItems) {
    if (items.size === 0) return null;
    var nextItems = new Map(items); // first entry of the map in the form of an array: [key,value]

    var item = nextItems.entries().next().value;
    nextItems["delete"](item[0]);
    var className = determineClassName(initialItems, nextItems, style);
    return /*#__PURE__*/_react["default"].createElement(_lab.TreeItem, {
      key: item[0].toString() + nextItems.size.toString(),
      className: className,
      onIconClick: function onIconClick(e) {
        return e.preventDefault();
      },
      onLabelClick: onLabelClick(item[0]),
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
      label: label(item[1]),
      nodeId: item[0],
      disabled: true
    }, items.size >= 1 ? makeTreeItems(nextItems, initialItems) : null);
  };

  var expanded = (_Array$from$map = Array.from(selectedItems.keys()).map(function (item) {
    return item.toString();
  })) !== null && _Array$from$map !== void 0 ? _Array$from$map : [];
  return /*#__PURE__*/_react["default"].createElement(_lab.TreeView, {
    onMouseDown: function onMouseDown() {
      mouseDownTime.current = new Date();
    },
    disableSelection: true,
    expanded: expanded,
    className: style.truncatedTreeview
  }, makeTreeItems(selectedItems, selectedItems));
};

exports.TruncatedTreeview = TruncatedTreeview;
TruncatedTreeview.propTypes = {
  // in fact a nested map : {orgUnitId:{parentId:parentName}}
  selectedItems: _propTypes.any,
  label: _propTypes.func.isRequired,
  redirect: _propTypes.func
};
TruncatedTreeview.defaultProps = {
  selectedItems: null,
  redirect: function redirect() {
    return null;
  }
};