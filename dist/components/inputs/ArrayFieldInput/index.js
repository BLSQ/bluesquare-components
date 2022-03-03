"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrayFieldInput = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _OutlinedInput = _interopRequireDefault(require("@material-ui/core/OutlinedInput"));

var _Fab = _interopRequireDefault(require("@material-ui/core/Fab"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _common = require("../../../styles/iaso/common");

var _utils = require("../../../utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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
  (0, _inherits2["default"])(ArrayFieldInput, _Component);

  var _super = _createSuper(ArrayFieldInput);

  function ArrayFieldInput(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ArrayFieldInput);
    _this = _super.call(this, props);
    _this.state = {
      fieldList: (0, _utils.addPositionIndex)(props.fieldList)
    };
    return _this;
  } // eslint-disable-next-line camelcase


  (0, _createClass2["default"])(ArrayFieldInput, [{
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
      return /*#__PURE__*/_react["default"].createElement(_core.Grid, {
        container: true,
        spacing: 0,
        className: classes.marginTop
      }, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
        item: true,
        xs: 1
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: classes.label
      }, label, ":")), /*#__PURE__*/_react["default"].createElement(_core.Grid, {
        item: true,
        xs: 11
      }, /*#__PURE__*/_react["default"].createElement(_core.Box, {
        id: "array-input-field-list-".concat(baseId)
      }, /*#__PURE__*/_react["default"].createElement(_core.List, {
        className: classes.list
      }, fieldList.map(function (a, fieldIndex) {
        return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
          key: a.position,
          className: classes.listItem
        }, /*#__PURE__*/_react["default"].createElement(_OutlinedInput["default"], {
          className: classes.input,
          id: "".concat(baseId, "-").concat(a.position),
          value: a.value || '',
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
      }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null)))))));
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