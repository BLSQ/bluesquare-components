"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddButton = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _core = require("@material-ui/core");

var _common = require("../../../styles/iaso/common");

var _useSafeIntl = require("../../../utils/useSafeIntl");

var _messages = require("./messages");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var styles = function styles(theme) {
  return _objectSpread({}, (0, _common.commonStyles)(theme));
};

function AddButtonComponent(_ref) {
  var classes = _ref.classes,
      onClick = _ref.onClick,
      message = _ref.message,
      id = _ref.id;
  var intl = (0, _useSafeIntl.useSafeIntl)();
  return /*#__PURE__*/_react["default"].createElement(_core.Button, {
    variant: "contained",
    className: classes.button,
    color: "primary",
    onClick: onClick,
    id: id
  }, /*#__PURE__*/_react["default"].createElement(_Add["default"], {
    className: classes.buttonIcon
  }), intl.formatMessage(message));
}

AddButtonComponent.defaultProps = {
  message: _messages.MESSAGES.create,
  id: ''
};
AddButtonComponent.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  message: _propTypes["default"].object,
  // TODO: make a message prop type
  id: _propTypes["default"].string
};
var styledAddButton = (0, _core.withStyles)(styles)(AddButtonComponent);
exports.AddButton = styledAddButton;