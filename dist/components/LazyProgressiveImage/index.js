"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LazyImage = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _readOnlyError2 = _interopRequireDefault(require("@babel/runtime/helpers/readOnlyError"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactVisibilitySensor = _interopRequireDefault(require("react-visibility-sensor"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); } /* eslint-disable react/jsx-props-no-spreading */
var LazyImage = exports.LazyImage = /*#__PURE__*/function (_Component) {
  function LazyImage(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, LazyImage);
    _this = _callSuper(this, LazyImage, [props]);
    _this.image = null;
    _this.state = {
      image: props.placeholder,
      isVisible: false,
      loading: true
    };
    _this.handleVisibilityChange = _this.handleVisibilityChange.bind(_this);
    _this.onLoad = _this.onLoad.bind(_this);
    _this.onError = _this.onError.bind(_this);
    _this.loadImage = _this.loadImage.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(LazyImage, _Component);
  return (0, _createClass2["default"])(LazyImage, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(oldProps) {
      var _this$props = this.props,
        src = _this$props.src,
        placeholder = _this$props.placeholder;
      // We only invalidate the current image if the src has changed.
      if (src !== oldProps.src) {
        if (this.state.isVisible) {
          // load new image right away
          this.loadImage(src);
        } else {
          this.setState({
            image: placeholder,
            loading: true
          });
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.image) {
        this.image.onload = null;
        this.image.onerror = null;
      }
    }
  }, {
    key: "handleVisibilityChange",
    value: function handleVisibilityChange(isVisible) {
      var _this2 = this;
      this.setState({
        isVisible: isVisible
      }, function () {
        // load the image if it is visible and if it isn't already loaded
        if (_this2.state.loading && _this2.state.isVisible) {
          _this2.loadImage(_this2.props.src);
        }
      });
    }
  }, {
    key: "onLoad",
    value: function onLoad() {
      // use this.image.src instead of this.props.src to
      // avoid the possibility of props being updated and the
      // new image loading before the new props are available as
      // this.props.
      this.setState({
        image: this.image.src,
        loading: false
      });
    }
  }, {
    key: "onError",
    value: function onError(errorEvent) {
      var onError = this.props.onError;
      if (onError) {
        onError(errorEvent);
      }
    }
  }, {
    key: "loadImage",
    value: function loadImage(src) {
      // If there is already an image we nullify the onload
      // and onerror props so it does not incorrectly set state
      // when it resolves
      if (this.image) {
        this.image.onload = null;
        this.image.onerror = null;
      }
      var image = new Image();
      this.image = image;
      image.onload = this.onLoad;
      image.onerror = this.onError;
      image.src = src;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        image = _this$state.image,
        loading = _this$state.loading,
        isVisible = _this$state.isVisible;
      var _this$props2 = this.props,
        children = _this$props2.children,
        visibilitySensorProps = _this$props2.visibilitySensorProps;
      if (!children || typeof children !== 'function') {
        throw new Error("LazyProgressiveImage requires a function as its only child");
      }
      return /*#__PURE__*/_react["default"].createElement(_reactVisibilitySensor["default"], (0, _extends2["default"])({}, visibilitySensorProps, {
        onChange: this.handleVisibilityChange
      }), children(image, loading, isVisible));
    }
  }]);
}(_react.Component);
LazyImage.propTypes = {
  children: _propTypes["default"].func,
  onError: _propTypes["default"].func,
  placeholder: _propTypes["default"].string,
  src: _propTypes["default"].string,
  visibilitySensorProps: _propTypes["default"].any
};