"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withLink = exports.useLink = exports.makeLinkComponent = exports.LinkProvider = exports.LinkContext = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _excluded = ["href"],
    _excluded2 = ["href"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

// Credit https://github.com/seek-oss/braid-design-system/blob/master/lib/components/BraidProvider/BraidProvider.tsx
var passToForwardRef = function passToForwardRef(render) {
  return {
    __forwardRef__: /*#__PURE__*/(0, _react.forwardRef)(render)
  };
};

var renderLink = function renderLink(_ref, ref, Component) {
  var href = _ref.href,
      restProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({
    ref: ref,
    to: href
  }, restProps));
};

var render = function render(component) {
  return function (_ref2, ref) {
    var href = _ref2.href,
        restProps = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);
    return renderLink(_objectSpread({
      href: href
    }, restProps), ref, component);
  };
};

var makeLinkComponent = function makeLinkComponent(component) {
  return passToForwardRef(render(component));
};

exports.makeLinkComponent = makeLinkComponent;
var LinkContext = /*#__PURE__*/(0, _react.createContext)({});
exports.LinkContext = LinkContext;

var LinkProvider = function LinkProvider(props) {
  var linkComponent = props.linkComponent;
  var providedComponent = makeLinkComponent(linkComponent);
  var value = (0, _react.useMemo)(function () {
    return {
      Link: providedComponent
    };
  }, [providedComponent]);
  return /*#__PURE__*/_react["default"].createElement(LinkContext.Provider, {
    value: value
  }, props.children);
}; // TODO add better typing


exports.LinkProvider = LinkProvider;
LinkProvider.propTypes = {
  children: _propTypes.any.isRequired,
  linkComponent: _propTypes.any.isRequired
};

var useLink = function useLink() {
  return (0, _react.useContext)(LinkContext).Link.__forwardRef__;
};

exports.useLink = useLink;

var withLink = function withLink(component) {
  return function (props) {
    var linkComponent = (0, _react.useContext)(LinkContext).Link.__forwardRef__;

    return /*#__PURE__*/_react["default"].createElement("component", (0, _extends2["default"])({}, props, {
      linkComponent: linkComponent
    }));
  };
}; // First create the custom link implementation:
// const CustomLink = makeLinkComponent(({ href, ...restProps }, ref) =>
//     href[0] === '/' ? (
//         <ReactRouterLink ref={ref} to={href} {...restProps} />
//     ) : (
//         <a ref={ref} href={href} {...restProps} />
//     ),
// );


exports.withLink = withLink;