"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrayFieldInput = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _core = require("@material-ui/core");

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _OutlinedInput = _interopRequireDefault(require("@material-ui/core/OutlinedInput"));

var _Fab = _interopRequireDefault(require("@material-ui/core/Fab"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _common = require("../../../styles/iaso/common");

var _utils = require("../../../utils");

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
    label: {
      top: theme.spacing(2),
      position: 'relative',
      color: theme.textColor,
      fontSize: 16
    },
    list: {
      width: '100%',
      padding: '0'
    },
    listItem: {
      height: 55,
      width: '100%',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      padding: '0',
      marginBottom: theme.spacing(1)
    },
    addListItem: {
      height: 55,
      width: '100%',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0',
      marginBottom: theme.spacing(2)
    },
    input: {
      width: '95%',
      marginLeft: '5%'
    },
    deleteIcon: {
      position: 'absolute',
      right: theme.spacing(1)
    }
  });
};

var ArrayFieldInput = /*#__PURE__*/function (_Component) {
  _inherits(ArrayFieldInput, _Component);

  var _super = _createSuper(ArrayFieldInput);

  function ArrayFieldInput(props) {
    var _this;

    _classCallCheck(this, ArrayFieldInput);

    _this = _super.call(this, props);
    _this.state = {
      fieldList: (0, _utils.addPositionIndex)(props.fieldList)
    };
    return _this;
  } // eslint-disable-next-line camelcase


  _createClass(ArrayFieldInput, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      this.setState({
        fieldList: (0, _utils.addPositionIndex)(newProps.fieldList)
      });
    }
  }, {
    key: "updateField",
    value: function updateField(value, fieldIndex) {
      var newFieldList = this.state.fieldList.slice();
      newFieldList[fieldIndex].value = value;
      this.props.updateList((0, _utils.removePositionIndex)(newFieldList));
    }
  }, {
    key: "addField",
    value: function addField() {
      var newFieldList = this.state.fieldList.slice();
      newFieldList.push({
        value: '',
        position: this.state.fieldList.length
      });
      this.props.updateList((0, _utils.removePositionIndex)(newFieldList));
    }
  }, {
    key: "removeField",
    value: function removeField(fieldIndex) {
      var newFieldList = this.state.fieldList.slice();
      newFieldList.splice(fieldIndex, 1);
      this.props.updateList((0, _utils.removePositionIndex)(newFieldList));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          baseId = _this$props.baseId,
          label = _this$props.label,
          classes = _this$props.classes;
      var fieldList = this.state.fieldList;
      var addFieldButtonDisabled = fieldList.length > 0 && fieldList[fieldList.length - 1].value === '';
      return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        container: true,
        spacing: 0,
        className: classes.marginTop
      }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 1
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: classes.label
      }, label, ":")), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
        item: true,
        xs: 11
      }, /*#__PURE__*/_react["default"].createElement(_List["default"], {
        className: classes.list
      }, fieldList.map(function (a, fieldIndex) {
        return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
          key: a.position,
          className: classes.listItem
        }, /*#__PURE__*/_react["default"].createElement(_OutlinedInput["default"], {
          className: classes.input,
          id: "".concat(baseId, "-").concat(a.position),
          value: a.value || undefined,
          onChange: function onChange(event) {
            return _this2.updateField(event.currentTarget.value, fieldIndex);
          }
        }), /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
          className: classes.deleteIcon,
          color: "inherit",
          onClick: function onClick() {
            return _this2.removeField(fieldIndex);
          }
        }, /*#__PURE__*/_react["default"].createElement(_Delete["default"], null)));
      }), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
        className: classes.addListItem
      }, /*#__PURE__*/_react["default"].createElement(_Fab["default"], {
        disabled: addFieldButtonDisabled,
        className: classes.Fab,
        size: "small",
        color: "primary",
        "aria-label": "add",
        onClick: function onClick() {
          return _this2.addField();
        }
      }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null))))));
    }
  }]);

  return ArrayFieldInput;
}(_react.Component);

ArrayFieldInput.defaultProps = {
  fieldList: [],
  label: ''
}; // TODO type/document classes prop

ArrayFieldInput.propTypes = {
  fieldList: _propTypes["default"].array,
  baseId: _propTypes["default"].string.isRequired,
  updateList: _propTypes["default"].func.isRequired,
  classes: _propTypes["default"].object.isRequired,
  label: _propTypes["default"].string
};
var styledArrayFieldInput = (0, _core.withStyles)(styles)(ArrayFieldInput);
exports.ArrayFieldInput = styledArrayFieldInput;