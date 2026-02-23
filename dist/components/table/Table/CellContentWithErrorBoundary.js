"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CellContentWithErrorBoundary = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _material = require("@mui/material");
var _styles = require("@mui/styles");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _injectIntl = require("../../../localization/injectIntl");
var _messages = require("./messages");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var styles = function styles(theme) {
  return {
    errorContainer: {
      backgroundColor: theme.palette.error.background,
      margin: 0,
      padding: 0
    }
  };
};
// Use an errorBoundary so if the value cannot be parsed and crash when rendering
// we still display the raw value
var CellWithErrorBoundary_ = /*#__PURE__*/function (_React$Component) {
  function CellWithErrorBoundary_(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, CellWithErrorBoundary_);
    _this = _callSuper(this, CellWithErrorBoundary_, [props]);
    _this.state = {
      hasError: false
    };
    return _this;
  }
  (0, _inherits2["default"])(CellWithErrorBoundary_, _React$Component);
  return (0, _createClass2["default"])(CellWithErrorBoundary_, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        _this$props$value = _this$props.value,
        value = _this$props$value === void 0 ? undefined : _this$props$value,
        children = _this$props.children,
        classes = _this$props.classes,
        formatMessage = _this$props.intl.formatMessage;
      if (this.state.hasError) {
        return /*#__PURE__*/_react["default"].createElement(_material.Box, {
          className: classes.errorContainer,
          title: "".concat(this.state.error)
        }, formatMessage(_messages.MESSAGES.renderError), ":", /*#__PURE__*/_react["default"].createElement("pre", null, "".concat(JSON.stringify(value))));
      }
      return children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      console.error(error);
      return {
        hasError: true,
        error: error
      };
    }
  }]);
}(_react["default"].Component);
CellWithErrorBoundary_.propTypes = {
  value: _propTypes["default"].any,
  intl: _propTypes["default"].object.isRequired,
  classes: _propTypes["default"].object.isRequired,
  children: _propTypes["default"].any.isRequired
};
var CellContentWithErrorBoundary = exports.CellContentWithErrorBoundary = (0, _styles.withStyles)(styles)((0, _injectIntl.injectIntl)(CellWithErrorBoundary_));