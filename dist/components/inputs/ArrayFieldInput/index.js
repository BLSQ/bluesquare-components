"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrayFieldInput = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _styles = require("@mui/styles");
var _ListItem = _interopRequireDefault(require("@mui/material/ListItem"));
var _OutlinedInput = _interopRequireDefault(require("@mui/material/OutlinedInput"));
var _Fab = _interopRequireDefault(require("@mui/material/Fab"));
var _Delete = _interopRequireDefault(require("@mui/icons-material/Delete"));
var _Add = _interopRequireDefault(require("@mui/icons-material/Add"));
var _common = require("../../../styles/iaso/common.ts");
var _utils = require("../../../utils");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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
      padding: '0 !important'
    },
    listItem: {
      height: 55,
      width: '100% !important',
      position: 'relative !important',
      display: 'flex !important',
      alignItems: 'center !important',
      padding: '0 !important',
      marginBottom: theme.spacing(1)
    },
    addListItem: {
      height: 55,
      width: '100% !important',
      position: 'relative !important',
      display: 'flex !important',
      alignItems: 'center !important',
      justifyContent: 'flex-end !important',
      padding: '0 !important',
      marginBottom: theme.spacing(2)
    },
    input: {
      width: '95% ',
      marginLeft: '5%'
    },
    deleteIcon: {
      position: 'absolute !important',
      right: theme.spacing(1)
    }
  });
};
var ArrayFieldInput = /*#__PURE__*/function (_Component) {
  function ArrayFieldInput(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ArrayFieldInput);
    _this = _callSuper(this, ArrayFieldInput, [props]);
    _this.state = {
      fieldList: (0, _utils.addPositionIndex)(props.fieldList || [])
    };
    return _this;
  }

  // eslint-disable-next-line camelcase
  (0, _inherits2["default"])(ArrayFieldInput, _Component);
  return (0, _createClass2["default"])(ArrayFieldInput, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      this.setState({
        fieldList: (0, _utils.addPositionIndex)(newProps.fieldList || [])
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
        classes = _this$props.classes,
        _this$props$label = _this$props.label,
        label = _this$props$label === void 0 ? '' : _this$props$label,
        _this$props$autoCompl = _this$props.autoComplete,
        autoComplete = _this$props$autoCompl === void 0 ? 'off' : _this$props$autoCompl,
        dataTestId = _this$props.dataTestId;
      var fieldList = this.state.fieldList;
      var addFieldButtonDisabled = fieldList.length > 0 && fieldList[fieldList.length - 1].value === '';
      return /*#__PURE__*/_react["default"].createElement(_material.Grid, {
        container: true,
        spacing: 0
      }, /*#__PURE__*/_react["default"].createElement(_material.Grid, {
        item: true,
        xs: 1
      }, /*#__PURE__*/_react["default"].createElement("span", {
        className: classes.label
      }, label, ":")), /*#__PURE__*/_react["default"].createElement(_material.Grid, {
        item: true,
        xs: 11
      }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
        id: "array-input-field-list-".concat(baseId),
        "data-test": dataTestId !== null && dataTestId !== void 0 ? dataTestId : "array-input-field-list-".concat(baseId)
      }, /*#__PURE__*/_react["default"].createElement(_material.List, {
        className: classes.list
      }, fieldList.map(function (a, fieldIndex) {
        return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
          key: a.position,
          className: classes.listItem
        }, /*#__PURE__*/_react["default"].createElement(_OutlinedInput["default"], {
          autoComplete: autoComplete,
          className: classes.input,
          id: "".concat(baseId, "-").concat(a.position),
          value: a.value || '',
          onChange: function onChange(event) {
            return _this2.updateField(event.currentTarget.value, fieldIndex);
          }
        }), /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
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
}(_react.Component); // TODO type/document classes prop
ArrayFieldInput.propTypes = {
  fieldList: _propTypes["default"].array,
  baseId: _propTypes["default"].string.isRequired,
  updateList: _propTypes["default"].func.isRequired,
  classes: _propTypes["default"].object.isRequired,
  label: _propTypes["default"].string,
  autoComplete: _propTypes["default"].string,
  dataTestId: _propTypes["default"].string
};
var styledArrayFieldInput = exports.ArrayFieldInput = (0, _styles.withStyles)(styles)(ArrayFieldInput);