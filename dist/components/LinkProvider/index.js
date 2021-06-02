"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withLink = exports.useLink = exports.LinkContext = exports.LinkProvider = exports.makeLinkComponent = void 0;

var _propTypes = require("prop-types");

var _react = _interopRequireWildcard(require("react"));

var _excluded = ["href"],
    _excluded2 = ["href"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Credit https://github.com/seek-oss/braid-design-system/blob/master/lib/components/BraidProvider/BraidProvider.tsx
var passToForwardRef = function passToForwardRef(render) {
  return {
    __forwardRef__: /*#__PURE__*/(0, _react.forwardRef)(render)
  };
};

var renderLink = function renderLink(_ref, ref, Component) {
  var href = _ref.href,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(Component, _extends({
    ref: ref,
    to: href
  }, restProps));
};

var render = function render(component) {
  return function (_ref2, ref) {
    var href = _ref2.href,
        restProps = _objectWithoutProperties(_ref2, _excluded2);

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

    return /*#__PURE__*/_react["default"].createElement("component", _extends({}, props, {
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