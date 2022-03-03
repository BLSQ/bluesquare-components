"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectIntl = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _patchIntl = require("./patchIntl");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

FakeComponent.defaultProps = {
  ref: undefined
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

var injectIntl = function injectIntl(Component) {
  return /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
    var propsCopy = _objectSpread(_objectSpread({}, props), {}, {
      component: Component,
      ref: ref
    });

    return /*#__PURE__*/_react["default"].createElement(FakeComponent, propsCopy);
  });
};

exports.injectIntl = injectIntl;