"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireDefault(require("react-select"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _core = require("@material-ui/core");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _grey = _interopRequireDefault(require("@material-ui/core/colors/grey"));

var _ArrayFieldInput = _interopRequireDefault(require("./ArrayFieldInput"));

var _InputLabel = _interopRequireDefault(require("../InputLabel"));

var _FormControl = _interopRequireDefault(require("../FormControl"));

var _intlUtils = require("../../../utils/intlUtils");

var _injectIntl = _interopRequireDefault(require("../../../utils/injectIntl"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    select: {
      '& .is-disabled  .Select-control': {
        borderColor: "".concat(_grey["default"]['300'], " !important"),
        cursor: 'not-allowed'
      },
      '&:hover .is-disabled  .Select-control': {
        borderColor: "".concat(_grey["default"]['300'], " !important")
      },
      '& .is-pseudo-focused .Select-control': {
        borderColor: "".concat(theme.palette.primary.main, "  !important")
      },
      '& .is-focused .Select-control': {
        borderColor: "".concat(theme.palette.primary.main, "  !important")
      },
      '& .is-open .Select-control': {
        borderColor: "".concat(theme.palette.primary.main, "  !important"),
        overfow: 'hidden'
      },
      '& .is-open .Select-menu-outer': {
        borderLeftColor: theme.palette.primary.main,
        borderBottomColor: theme.palette.primary.main,
        borderRightColor: theme.palette.primary.main,
        left: '1px'
      },
      '&:hover .Select-control': {
        borderColor: "".concat(theme.palette.primary.main, "  !important")
      },
      '& .Select-control': {
        boxShadow: 'none  !important'
      },
      '& .Select--multi .Select-value': {
        height: theme.spacing(4),
        display: 'inline-block !important',
        padding: '0 !important',
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.secondary.main, 0.08)
      },
      '& .Select--multi .Select-value .Select-value-icon': {
        borderColor: (0, _colorManipulator.fade)(theme.palette.secondary.main, 0.24),
        width: '21px',
        height: '100%',
        paddingTop: '3px'
      },
      '& .Select--multi .Select-value .select-color': {
        display: 'inline-block',
        width: theme.spacing(2),
        height: theme.spacing(2),
        borderRadius: theme.spacing(2),
        marginRight: theme.spacing(1),
        position: 'relative',
        top: 3
      },
      '& .Select--multi .Select-multi-value-wrapper': {
        width: '97%',
        position: 'relative',
        top: 5
      },
      '& .Select--multi .Select-input': {
        position: 'relative',
        top: -5,
        paddingLeft: "".concat(theme.spacing(1), "px !important")
      },
      '& .Select--multi .Select-value-label': {
        height: '27px',
        width: 'auto',
        maxWidth: '92%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }
    },
    selectError: {
      '& .Select-control': {
        borderColor: "".concat(theme.palette.error.main, " !important")
      }
    },
    icon: {
      right: theme.spacing(2)
    },
    search: _defineProperty({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      marginLeft: 0,
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }),
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      right: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      outline: 'none',
      boxShadow: 'none'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: {
      paddingRight: theme.spacing(7),
      width: '100%'
    },
    displayPassword: {
      position: 'absolute',
      top: 4,
      right: theme.spacing(2)
    },
    passwordInput: {
      paddingRight: theme.spacing(8)
    }
  };
};

var InputComponent = /*#__PURE__*/function (_Component) {
  _inherits(InputComponent, _Component);

  var _super = _createSuper(InputComponent);

  function InputComponent(props) {
    var _this;

    _classCallCheck(this, InputComponent);

    _this = _super.call(this, props);
    _this.state = {
      selectInputValue: '',
      isFocused: false,
      displayPassword: false
    };
    return _this;
  }

  _createClass(InputComponent, [{
    key: "onSelectInputChange",
    value: function onSelectInputChange(selectInputValue) {
      this.setState({
        selectInputValue: selectInputValue
      });
    }
  }, {
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
          uid = _this$props.uid;
      var _this$state = this.state,
          selectInputValue = _this$state.selectInputValue,
          isFocused = _this$state.isFocused,
          displayPassword = _this$state.displayPassword;
      var hasErrors = errors.length > 0;
      var labelText;

      if (type !== 'radio') {
        labelText = labelString !== '' ? labelString : formatMessage(label || MESSAGES[keyValue]); // TODO: move in label component?
      }

      if (type === 'text' || type === 'number' || type === 'email' || type === 'password') {
        var inputValue = value === null || typeof value === 'undefined' ? '' : value;
        return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
          withMarginTop: withMarginTop,
          errors: errors
        }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
          htmlFor: "input-text-".concat(keyValue),
          label: labelText,
          required: required,
          error: hasErrors,
          shrink: value !== '' && value !== null
        }), /*#__PURE__*/_react["default"].createElement(_core.OutlinedInput, {
          size: "small",
          multiline: multiline,
          disabled: disabled,
          id: "input-text-".concat(keyValue),
          value: inputValue,
          type: type === 'password' && displayPassword ? 'text' : type,
          onChange: function onChange(event) {
            return _onChange(keyValue, event.target.value);
          },
          error: hasErrors,
          className: type === 'password' ? classes.passwordInput : ''
        }), type === 'password' && /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
          className: classes.displayPassword,
          disableFocusListener: disabled,
          disableHoverListener: disabled,
          disableTouchListener: disabled,
          placement: "bottom",
          title: formatMessage(MESSAGES.displayPassword)
        }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
          color: displayPassword ? 'primary' : 'inherit',
          onClick: function onClick() {
            return _this2.toggleDisplayPassword();
          }
        }, /*#__PURE__*/_react["default"].createElement(_Edit["default"], null)))));
      }

      if (type === 'select') {
        var selectClassNames = [classes.select];

        if (hasErrors) {
          selectClassNames.push(classes.selectError);
        }

        return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
          withMarginTop: withMarginTop,
          errors: errors
        }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
          htmlFor: "input-select-".concat(keyValue),
          label: labelText,
          shrink: value !== undefined && value !== null || selectInputValue !== '',
          isFocused: isFocused,
          required: required,
          error: hasErrors
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: selectClassNames.join(' ')
        }, /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], {
          disabled: disabled,
          searchable: isSearchable,
          multi: multi,
          clearable: clearable,
          simpleValue: true,
          onInputChange: function onInputChange(newValue) {
            return _this2.onSelectInputChange(newValue);
          },
          name: keyValue,
          value: value,
          placeholder: "",
          onBlur: function onBlur() {
            return _this2.toggleFocused(false);
          },
          onFocus: function onFocus() {
            return _this2.toggleFocused(true);
          },
          options: (0, _intlUtils.translateOptions)(options, formatMessage),
          noResultsText: formatMessage(MESSAGES.noOptions),
          onChange: function onChange(newValue) {
            return _onChange(keyValue, newValue);
          }
        })));
      }

      if (type === 'arrayInput') {
        // TODO: implement required, errors...
        return /*#__PURE__*/_react["default"].createElement(_ArrayFieldInput["default"], {
          label: labelText,
          fieldList: value,
          name: keyValue,
          baseId: keyValue,
          updateList: function updateList(list) {
            return _onChange(keyValue, list);
          }
        });
      }

      if (type === 'search') {
        return /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
          withMarginTop: withMarginTop
        }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
          htmlFor: "search-".concat(keyValue),
          label: labelText,
          required: required,
          shrink: value !== undefined && value !== null && value !== '',
          isFocused: isFocused
        }), /*#__PURE__*/_react["default"].createElement(_core.OutlinedInput, {
          disabled: disabled,
          id: uid ? "search-".concat(uid) : "search-".concat(keyValue),
          value: value || '',
          placeholder: "",
          onKeyPress: function onKeyPress(event) {
            if (event.which === 13 || event.keyCode === 13) {
              onEnterPressed();
            }
          },
          classes: {
            root: classes.inputRoot,
            input: classes.inputInput
          },
          inputProps: {
            'aria-label': 'search'
          },
          onChange: function onChange(event) {
            return _onChange(keyValue, event.target.value);
          }
        }), /*#__PURE__*/_react["default"].createElement("div", {
          tabIndex: 0,
          role: "button",
          className: classes.searchIcon,
          onClick: function onClick() {
            return onEnterPressed();
          }
        }, /*#__PURE__*/_react["default"].createElement(_Search["default"], null)));
      }

      if (type === 'checkbox') {
        return /*#__PURE__*/_react["default"].createElement(_core.FormControlLabel, {
          disabled: disabled,
          control: /*#__PURE__*/_react["default"].createElement(_core.Checkbox, {
            color: "primary",
            checked: value === true,
            onChange: function onChange(event) {
              return _onChange(keyValue, event.target.checked);
            },
            value: "checked",
            disabled: disabled
          }),
          label: labelText
        });
      }

      if (type === 'radio') {
        return /*#__PURE__*/_react["default"].createElement(_core.RadioGroup, {
          name: keyValue,
          value: value,
          onChange: function onChange(event) {
            return _onChange(keyValue, event.target.value);
          }
        }, options.map(function (o) {
          return /*#__PURE__*/_react["default"].createElement(_core.FormControlLabel, {
            key: o.value,
            value: o.value,
            control: /*#__PURE__*/_react["default"].createElement(_core.Radio, {
              color: "primary"
            }),
            label: o.label
          });
        }));
      }

      return null;
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
  uid: _propTypes["default"].any
};

var _default = (0, _injectIntl["default"])((0, _core.withStyles)(styles)(InputComponent));

exports["default"] = _default;