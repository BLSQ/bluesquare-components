"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectIntl = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _patchIntl = require("./patchIntl");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var FakeComponent = function FakeComponent(props) {
  var propsCopy = _objectSpread({}, props);
  var Component = props.component;
  var intlCopy = (0, _patchIntl.patchIntl)((0, _reactIntl.useIntl)());
  delete propsCopy.component;
  delete propsCopy.ref;
  return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, propsCopy, {
    intl: intlCopy,
    forwardedRef: props.ref
  }));
};
FakeComponent.propTypes = {
  component: _propTypes["default"].any.isRequired,
  ref: _propTypes["default"].object
};

/**
 * same as newIjectIntl in iaso-root codebase
 * used to inject a patched version of react-intl
 *
 */
var injectIntl = exports.injectIntl = function injectIntl(Component) {
  return /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
    var propsCopy = _objectSpread(_objectSpread({}, props), {}, {
      component: Component,
      ref: ref
    });
    return /*#__PURE__*/_react["default"].createElement(FakeComponent, propsCopy);
  });
};