"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _core = require("@material-ui/core");

var _common = require("./styles/iaso/common");

var _useSafeIntl = require("./utils/useSafeIntl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultMessage = {
  id: 'iaso.label.create',
  defaultMessage: 'Create'
};

var styles = function styles(theme) {
  return _objectSpread({}, (0, _common.commonStyles)(theme));
};

function AddButtonComponent(_ref) {
  var classes = _ref.classes,
      onClick = _ref.onClick,
      message = _ref.message;
  var intl = (0, _useSafeIntl.useSafeIntl)();
  return /*#__PURE__*/_react["default"].createElement(_core.Button, {
    variant: "contained",
    className: classes.button,
    color: "primary",
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement(_Add["default"], {
    className: classes.buttonIcon
  }), intl.formatMessage(message));
}

AddButtonComponent.defaultProps = {
  message: defaultMessage
};
AddButtonComponent.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  message: _propTypes["default"].object // TODO: make a message prop type

};
var styledAddButton = (0, _core.withStyles)(styles)(AddButtonComponent);
exports.AddButton = styledAddButton;