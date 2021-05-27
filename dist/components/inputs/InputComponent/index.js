"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputComponent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _index = require("../../../index");

var _intlUtils = require("../../../utils/intlUtils");

var _injectIntl = _interopRequireDefault(require("../../../utils/injectIntl"));

var _styles = require("./styles");

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

var InputComponent = /*#__PURE__*/function (_Component) {
  _inherits(InputComponent, _Component);

  var _super = _createSuper(InputComponent);

  function InputComponent(props) {
    var _this;

    _classCallCheck(this, InputComponent);

    _this = _super.call(this, props);
    _this.state = {
      isFocused: false,
      displayPassword: false
    };
    return _this;
  }

  _createClass(InputComponent, [{
    key: "toggleFocused",
    value: function toggleFocused(isFocused) {
      this.setState({
        isFocused: isFocused
      });
    }
  }, {
    key: "toggleDisplayPassword",
    value: function toggleDisplayPassword() {
      this.setState({
        displayPassword: !this.state.displayPassword
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          classes = _this$props.classes,
          type = _this$props.type,
          keyValue = _this$props.keyValue,
          value = _this$props.value,
          errors = _this$props.errors,
          _onChange = _this$props.onChange,
          options = _this$props.options,
          formatMessage = _this$props.intl.formatMessage,
          disabled = _this$props.disabled,
          multiline = _this$props.multiline,
          clearable = _this$props.clearable,
          label = _this$props.label,
          labelString = _this$props.labelString,
          required = _this$props.required,
          onEnterPressed = _this$props.onEnterPressed,
          withMarginTop = _this$props.withMarginTop,
          isSearchable = _this$props.isSearchable,
          multi = _this$props.multi,
          uid = _this$props.uid,
          MESSAGES = _this$props.MESSAGES;
      var _this$state = this.state,
          isFocused = _this$state.isFocused,
          displayPassword = _this$state.displayPassword;
      var labelText;

      if (type !== 'radio') {
        labelText = labelString !== '' ? labelString : formatMessage(label || MESSAGES[keyValue]); // TODO: move in label component?
      }

      var inputValue = value === null || typeof value === 'undefined' ? '' : value;
      var selectClassNames = [classes.select];

      if (errors.length > 0) {
        selectClassNames.push(classes.selectError);
      }

      switch (type) {
        case 'email':
        case 'text':
          return /*#__PURE__*/_react["default"].createElement(_index.TextInput, {
            value: inputValue,
            keyValue: keyValue,
            label: labelText,
            withMarginTop: withMarginTop,
            errors: errors,
            required: required,
            multiline: multiline,
            disabled: disabled,
            onChange: function onChange(input) {
              _onChange(keyValue, input);
            }
          });

        case 'password':
          return /*#__PURE__*/_react["default"].createElement(_index.PasswordInput, {
            withMarginTop: withMarginTop,
            value: inputValue,
            keyValue: keyValue,
            errors: errors,
            label: labelText,
            required: required,
            multiline: multiline,
            disabled: disabled,
            onChange: function onChange(input) {
              _onChange(keyValue, input);
            },
            classNames: {
              passwordInput: classes.passwordInput,
              displayPassword: classes.displayPassword
            },
            onClick: function onClick() {
              return _this2.toggleDisplayPassword();
            },
            displayPassword: displayPassword,
            tooltipMessage: formatMessage(MESSAGES.displayPassword)
          });

        case 'number':
          // TODO remove inputValue if not needed for number
          return /*#__PURE__*/_react["default"].createElement(_index.NumberInput, {
            value: inputValue,
            keyValue: keyValue,
            label: labelText,
            withMarginTop: withMarginTop,
            errors: errors,
            required: required,
            multiline: multiline,
            disabled: disabled,
            onChange: function onChange(input) {
              _onChange(keyValue, input);
            }
          });

        case 'select':
          return /*#__PURE__*/_react["default"].createElement(_index.Select, {
            withMarginTop: withMarginTop,
            errors: errors,
            keyValue: keyValue,
            label: labelText,
            required: required,
            disabled: disabled,
            searchable: isSearchable,
            clearable: clearable,
            isFocused: isFocused,
            multi: multi,
            value: value,
            onBlur: function onBlur() {
              return _this2.toggleFocused(false);
            },
            onFocus: function onFocus() {
              return _this2.toggleFocused(true);
            },
            noResultsText: formatMessage(MESSAGES.noOptions),
            options: (0, _intlUtils.translateOptions)(options, formatMessage),
            classNames: selectClassNames,
            onChange: function onChange(newValue) {
              _onChange(keyValue, newValue);
            }
          });

        case 'arrayInput':
          // TODO: implement required, errors...
          return /*#__PURE__*/_react["default"].createElement(_index.ArrayFieldInput, {
            label: labelText,
            fieldList: value,
            name: keyValue,
            baseId: keyValue,
            updateList: function updateList(list) {
              return _onChange(keyValue, list);
            }
          });

        case 'search':
          return /*#__PURE__*/_react["default"].createElement(_index.SearchInput, {
            uid: uid,
            withMarginTop: withMarginTop,
            keyValue: keyValue,
            label: labelText,
            required: required,
            disabled: disabled,
            onEnterPressed: onEnterPressed,
            isFocused: isFocused,
            classes: classes,
            onChange: function onChange(newValue) {
              return _onChange(keyValue, newValue);
            },
            value: value
          });

        case 'checkbox':
          return /*#__PURE__*/_react["default"].createElement(_index.Checkbox, {
            disabled: disabled,
            onChange: function onChange(newValue) {
              return _onChange(keyValue, newValue);
            },
            value: value,
            label: labelText
          });

        case 'radio':
          return /*#__PURE__*/_react["default"].createElement(_index.Radio // Will be changed to name in next commit
          , {
            keyValue: keyValue,
            onChange: function onChange(newValue) {
              return _onChange(keyValue, newValue);
            },
            options: options
          });

        default:
          return null;
      }
    }
  }]);

  return InputComponent;
}(_react.Component);

InputComponent.defaultProps = {
  type: 'text',
  value: undefined,
  errors: [],
  options: [],
  disabled: false,
  multiline: false,
  clearable: true,
  label: undefined,
  labelString: '',
  required: false,
  onEnterPressed: function onEnterPressed() {
    return null;
  },
  onChange: function onChange() {
    return null;
  },
  withMarginTop: true,
  isSearchable: true,
  multi: false,
  uid: null
};
InputComponent.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  type: _propTypes["default"].string,
  keyValue: _propTypes["default"].string.isRequired,
  value: _propTypes["default"].any,
  errors: _propTypes["default"].arrayOf(_propTypes["default"].string),
  onChange: _propTypes["default"].func,
  intl: _propTypes["default"].object.isRequired,
  options: _propTypes["default"].array,
  disabled: _propTypes["default"].bool,
  multiline: _propTypes["default"].bool,
  clearable: _propTypes["default"].bool,
  label: _propTypes["default"].object,
  labelString: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  onEnterPressed: _propTypes["default"].func,
  withMarginTop: _propTypes["default"].bool,
  isSearchable: _propTypes["default"].bool,
  multi: _propTypes["default"].bool,
  uid: _propTypes["default"].any,
  MESSAGES: _propTypes["default"].object.isRequired
};
var styledAndTranslated = (0, _injectIntl["default"])((0, _core.withStyles)(_styles.styles)(InputComponent));
exports.InputComponent = styledAndTranslated;