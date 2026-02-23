"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ErrorBoundary = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ErrorBoundary = exports.ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  function ErrorBoundary(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, ErrorBoundary);
    _this = _callSuper(this, ErrorBoundary, [props]);
    _this.state = {
      hasError: false
    };
    return _this;
  }
  (0, _inherits2["default"])(ErrorBoundary, _React$Component);
  return (0, _createClass2["default"])(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      console.error('BOUNDARY ERROR', error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        _this$props$message = _this$props.message,
        message = _this$props$message === void 0 ? null : _this$props$message,
        _this$props$className = _this$props.className,
        className = _this$props$className === void 0 ? null : _this$props$className,
        children = _this$props.children;
      if (this.state.hasError) {
        if (message) {
          return /*#__PURE__*/_react["default"].createElement("h1", {
            style: className ? {} : {
              textAlign: 'center'
            },
            className: className
          }, message);
        }
        return /*#__PURE__*/_react["default"].createElement("h1", null, "An exception occurred: ", this.state.error.toString());
      }
      return children;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return {
        hasError: true,
        error: error
      };
    }
  }]);
}(_react["default"].Component);
ErrorBoundary.propTypes = {
  children: _propTypes["default"].node.isRequired,
  message: _propTypes["default"].string,
  className: _propTypes["default"].string
};