"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicTabs = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _reactIntl = require("react-intl");

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _color = _interopRequireDefault(require("color"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _common = require("../../../styles/iaso/common");

var _utils = require("../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import MESSAGES from './messages';
var styles = function styles(theme) {
  return _objectSpread(_objectSpread({}, (0, _common.commonStyles)(theme)), {}, {
    tabs: _objectSpread(_objectSpread({}, (0, _common.commonStyles)(theme).tabs), {}, {
      paddingRight: 0
    }),
    mainContainer: {
      display: 'flex',
      position: 'relative'
    },
    tabsContainer: {
      position: 'relative'
    },
    iconButton: {
      color: 'white !important',
      height: 30,
      position: 'relative',
      top: 8
    },
    removeIconButton: {
      color: 'white !important',
      position: 'relative',
      top: 19,
      right: 15,
      height: 20,
      '& svg': {
        width: 14,
        height: 14
      }
    },
    removeContainer: {
      padding: 0,
      margin: 0,
      position: 'absolute',
      left: theme.spacing(4),
      top: -5,
      minHeight: 0,
      height: 1,
      width: "calc(100% - ".concat(theme.spacing(4), "px)"),
      display: 'flex',
      listStyleType: 'none',
      zIndex: 100000
    },
    removeContainerItem: {
      display: 'inline-flex',
      justifyContent: 'flex-end',
      minWidth: 160,
      fontSize: 5
    },
    roundColor: {
      display: 'inline-block',
      width: 15,
      height: 15,
      borderRadius: 15,
      position: 'absolute',
      top: 16,
      left: theme.spacing(2)
    },
    tabContentAlone: {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(4)
    },
    tabContent: {
      paddingRight: theme.spacing(6),
      paddingLeft: theme.spacing(6)
    }
  });
};

var DynamicTabs = /*#__PURE__*/function (_Component) {
  _inherits(DynamicTabs, _Component);

  var _super = _createSuper(DynamicTabs);

  function DynamicTabs(props) {
    var _this;

    _classCallCheck(this, DynamicTabs);

    _this = _super.call(this, props);
    _this.state = {
      tabIndex: parseInt(props.params[props.tabParamKey], 10) || 0,
      tabsWidth: []
    };
    return _this;
  }

  _createClass(DynamicTabs, [{
    key: "handleAddTab",
    value: function handleAddTab() {
      var _this$props = this.props,
          redirectTo = _this$props.redirectTo,
          params = _this$props.params,
          defaultItem = _this$props.defaultItem,
          paramKey = _this$props.paramKey,
          baseUrl = _this$props.baseUrl,
          tabParamKey = _this$props.tabParamKey,
          onTabsUpdated = _this$props.onTabsUpdated;

      var newState = _objectSpread({}, this.state);

      var newItems = JSON.parse(params[paramKey]);
      newState.tabIndex = newItems.length;
      newItems.push(defaultItem);

      var newParams = _objectSpread({}, params);

      newParams[tabParamKey] = newState.tabIndex.toString();
      newParams[paramKey] = JSON.stringify(newItems);
      redirectTo(baseUrl, newParams);
      onTabsUpdated();
      this.setState(newState);
    }
  }, {
    key: "handleDeleteTab",
    value: function handleDeleteTab(tabIndex) {
      var _this$props2 = this.props,
          redirectTo = _this$props2.redirectTo,
          params = _this$props2.params,
          paramKey = _this$props2.paramKey,
          baseUrl = _this$props2.baseUrl,
          tabParamKey = _this$props2.tabParamKey,
          onTabsDeleted = _this$props2.onTabsDeleted;
      var newItems = JSON.parse(params[paramKey]);
      newItems.splice(tabIndex, 1);

      var newParams = _objectSpread(_objectSpread({}, params), {}, {
        searchActive: false
      });

      newParams[paramKey] = JSON.stringify(newItems);

      if (this.state.tabIndex > newItems.length - 1) {
        newParams[tabParamKey] = (newItems.length - 1).toString();
        this.setState({
          tabIndex: newItems.length - 1
        });
      }

      onTabsDeleted();
      redirectTo(baseUrl, newParams);
    }
  }, {
    key: "handleTabChange",
    value: function handleTabChange(tabIndex) {
      var _this$props3 = this.props,
          redirectTo = _this$props3.redirectTo,
          params = _this$props3.params,
          paramKey = _this$props3.paramKey,
          baseUrl = _this$props3.baseUrl,
          tabParamKey = _this$props3.tabParamKey;

      var newState = _objectSpread({}, this.state);

      var newItems = JSON.parse(params[paramKey]);
      newState.tabIndex = tabIndex;

      var newParams = _objectSpread({}, params);

      newParams[tabParamKey] = newState.tabIndex.toString();
      newParams[paramKey] = JSON.stringify(newItems);
      redirectTo(baseUrl, newParams);
      this.setState(newState);
    }
  }, {
    key: "setTabsElement",
    value: function setTabsElement(element, index) {
      var tabsWidth = this.state.tabsWidth;
      var newWidth = element.getBoundingClientRect().width;

      if (newWidth !== tabsWidth[index]) {
        var newArray = _toConsumableArray(tabsWidth);

        newArray[index] = newWidth;
        this.setState({
          tabsWidth: newArray
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          classes = _this$props4.classes,
          baseLabel = _this$props4.baseLabel,
          params = _this$props4.params,
          paramKey = _this$props4.paramKey,
          maxItems = _this$props4.maxItems,
          displayCounts = _this$props4.displayCounts,
          counts = _this$props4.counts,
          addMessage = _this$props4.addMessage,
          deleteMessage = _this$props4.deleteMessage;
      var _this$state = this.state,
          tabIndex = _this$state.tabIndex,
          tabsWidth = _this$state.tabsWidth;
      var itemsList = JSON.parse(params[paramKey]);
      return /*#__PURE__*/_react["default"].createElement("section", {
        className: classes.mainContainer
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.tabsContainer
      }, itemsList.length > 1 && /*#__PURE__*/_react["default"].createElement("ul", {
        className: classes.removeContainer
      }, itemsList.map(function (item, currentTabIndex) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          className: classes.removeContainerItem,
          key: currentTabIndex,
          style: {
            width: "".concat(tabsWidth[currentTabIndex], "px")
          }
        }, /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
          size: "small",
          title: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, deleteMessage), " ".concat(baseLabel.toLowerCase()))
        }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
          onClick: function onClick() {
            return _this2.handleDeleteTab(currentTabIndex);
          },
          className: classes.removeIconButton,
          size: "small"
        }, /*#__PURE__*/_react["default"].createElement(_Clear["default"], null))));
      })), /*#__PURE__*/_react["default"].createElement(_core.Tabs, {
        value: tabIndex,
        classes: {
          root: classes.tabs,
          indicator: classes.indicator
        },
        onChange: function onChange(event, newtab) {
          return _this2.handleTabChange(newtab);
        }
      }, itemsList.map(function (item, currentTabIndex) {
        return /*#__PURE__*/_react["default"].createElement(_core.Tab, {
          ref: function ref(_ref) {
            if (_ref) _this2.setTabsElement(_ref, currentTabIndex);
          },
          key: currentTabIndex,
          value: currentTabIndex,
          label: /*#__PURE__*/_react["default"].createElement("span", {
            className: itemsList.length > 1 ? classes.tabContent : classes.tabContentAlone
          }, /*#__PURE__*/_react["default"].createElement("span", {
            style: item.color ? {
              backgroundColor: "#".concat(item.color),
              border: "2px solid ".concat((0, _color["default"])("#".concat(item.color)).darken(0.5))
            } : {},
            className: classes.roundColor
          }), baseLabel, displayCounts && counts[currentTabIndex] && " (".concat((0, _utils.formatThousand)(counts[currentTabIndex].count), ")"))
        });
      }))), itemsList.length < maxItems && /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
        size: "small",
        title: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, addMessage), " ".concat(baseLabel.toLowerCase()))
      }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
        onClick: function onClick() {
          return _this2.handleAddTab();
        },
        className: classes.iconButton,
        size: "small"
      }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null))));
    }
  }]);

  return DynamicTabs;
}(_react.Component);

DynamicTabs.defaultProps = {
  baseLabel: 'tab',
  maxItems: 5,
  onTabsUpdated: function onTabsUpdated() {
    return {};
  },
  onTabsDeleted: function onTabsDeleted() {
    return {};
  },
  displayCounts: false,
  counts: []
};
DynamicTabs.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  baseLabel: _propTypes["default"].string,
  params: _propTypes["default"].object.isRequired,
  defaultItem: _propTypes["default"].object.isRequired,
  paramKey: _propTypes["default"].string.isRequired,
  tabParamKey: _propTypes["default"].string.isRequired,
  baseUrl: _propTypes["default"].string.isRequired,
  redirectTo: _propTypes["default"].func.isRequired,
  maxItems: _propTypes["default"].number,
  onTabsUpdated: _propTypes["default"].func,
  onTabsDeleted: _propTypes["default"].func,
  displayCounts: _propTypes["default"].bool,
  counts: _propTypes["default"].array,
  deleteMessage: _propTypes["default"].object.isRequired,
  addMessage: _propTypes["default"].object.isRequired
};
var styledDynamicTabs = (0, _core.withStyles)(styles)(DynamicTabs);
exports.DynamicTabs = styledDynamicTabs;