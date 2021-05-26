"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerDrawer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _common = require("../../../styles/iaso/common");

var _innerDrawer = require("../../../styles/iaso/innerDrawer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return _objectSpread(_objectSpread({}, (0, _common.commonStyles)(theme)), {}, {
    boxContent: {
      width: '100%'
    },
    button: {
      width: '100%',
      marginBottom: theme.spacing(2)
    },
    mapContainer: _objectSpread(_objectSpread({}, (0, _common.commonStyles)(theme).mapContainer), {}, {
      marginBottom: 0,
      height: "calc(100vh - ".concat(_innerDrawer.menuHeight, "px)"),
      overflow: 'hidden'
    })
  });
};

var InnerDrawer = /*#__PURE__*/function (_Component) {
  _inherits(InnerDrawer, _Component);

  var _super = _createSuper(InnerDrawer);

  function InnerDrawer(props) {
    var _this;

    _classCallCheck(this, InnerDrawer);

    _this = _super.call(this, props);
    _this.state = {
      activeOption: props.filtersOption ? 'filters' : 'settings'
    };
    return _this;
  }

  _createClass(InnerDrawer, [{
    key: "toggleOption",
    value: function toggleOption(activeOption) {
      this.setState({
        activeOption: activeOption
      });
      this.props.setCurrentOption(activeOption);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          classes = _this$props.classes,
          editOption = _this$props.editOption,
          settingsOption = _this$props.settingsOption,
          filtersOption = _this$props.filtersOption,
          settingsDisabled = _this$props.settingsDisabled,
          filtersDisabled = _this$props.filtersDisabled,
          withTopBorder = _this$props.withTopBorder,
          footerComponent = _this$props.footerComponent;
      var activeOption = this.state.activeOption;
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Box, {
        borderTop: withTopBorder ? 1 : 0,
        borderColor: "grey.300",
        p: 0,
        className: classes.boxContent,
        component: "div"
      }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
        container: true,
        spacing: 0
      }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
        item: true,
        xs: 7,
        md: 8,
        lg: 9,
        className: classes.mapContainer
      }, children), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
        item: true,
        xs: 5,
        md: 4,
        lg: 3,
        className: classes.innerDrawerToolContainer
      }, (editOption || filtersOption) && /*#__PURE__*/_react["default"].createElement(_core.Tabs, {
        classes: {
          root: classes.innerDrawerTabs
        },
        value: activeOption,
        indicatorColor: "primary",
        onChange: function onChange(event, newtab) {
          return _this2.toggleOption(newtab);
        }
      }, filtersOption && /*#__PURE__*/_react["default"].createElement(_core.Tab, {
        classes: {
          root: classes.innerDrawerTab
        },
        disabled: filtersDisabled,
        value: "filters",
        label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, filtersOption.message)
      }), /*#__PURE__*/_react["default"].createElement(_core.Tab, {
        classes: {
          root: classes.innerDrawerTab
        },
        disabled: settingsDisabled,
        value: "settings",
        label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, settingsOption.message)
      }), editOption && /*#__PURE__*/_react["default"].createElement(_core.Tab, {
        classes: {
          root: classes.innerDrawerTab
        },
        value: "edit",
        label: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, editOption.message)
      })), /*#__PURE__*/_react["default"].createElement(_core.Box, {
        display: "flex",
        flexWrap: "wrap",
        className: classes.innerDrawerContentContainer,
        flexDirection: "row"
      }, filtersOption && /*#__PURE__*/_react["default"].createElement(_core.Box, {
        width: "100%",
        className: activeOption !== 'filters' ? 'hidden-opacity' : ''
      }, filtersOption.component), activeOption === 'edit' && /*#__PURE__*/_react["default"].createElement(_core.Box, {
        width: "100%"
      }, editOption.component), activeOption === 'settings' && /*#__PURE__*/_react["default"].createElement(_core.Box, {
        width: "100%"
      }, settingsOption.component), footerComponent && /*#__PURE__*/_react["default"].createElement("div", {
        className: classes.innerDrawerFooterContent
      }, footerComponent))))));
    }
  }]);

  return InnerDrawer;
}(_react.Component);

InnerDrawer.defaultProps = {
  children: null,
  editOption: null,
  filtersOption: null,
  footerComponent: null,
  settingsDisabled: false,
  filtersDisabled: false,
  setCurrentOption: function setCurrentOption() {
    return null;
  },
  withTopBorder: false
};
InnerDrawer.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  children: _propTypes["default"].any,
  settingsOption: _propTypes["default"].object.isRequired,
  editOption: _propTypes["default"].object,
  filtersOption: _propTypes["default"].object,
  footerComponent: _propTypes["default"].object,
  settingsDisabled: _propTypes["default"].bool,
  filtersDisabled: _propTypes["default"].bool,
  setCurrentOption: _propTypes["default"].func,
  withTopBorder: _propTypes["default"].bool
};
var styledInnerDrawer = (0, _core.withStyles)(styles)(InnerDrawer);
exports.InnerDrawer = styledInnerDrawer;