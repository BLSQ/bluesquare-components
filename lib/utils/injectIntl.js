"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.injectIntl = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _patchIntl = require("./patchIntl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FakeComponent = function FakeComponent(props) {
  var propsCopy = _objectSpread({}, props);

  var Component = props.component;
  var intlCopy = (0, _patchIntl.patchIntl)((0, _reactIntl.useIntl)());
  delete propsCopy.component;
  delete propsCopy.ref;
  return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, propsCopy, {
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