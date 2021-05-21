"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExportButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CallMade = _interopRequireDefault(require("@material-ui/icons/CallMade"));

var _core = require("@material-ui/core");

var _common = require("../styles/iaso/common");

var _injectIntl = require("../utils/injectIntl");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return _objectSpread(_objectSpread({}, (0, _common.commonStyles)(theme)), {}, {
    button: {
      marginLeft: theme.spacing(2),
      '& svg, & i': {
        marginRight: theme.spacing(1)
      }
    }
  });
};

var defaultMessage = {
  id: 'iaso.label.export',
  defaultMessage: 'Export'
}; // TODO refactor to useSafeIntl instead?

function ExportButtonComponent(_ref) {
  var classes = _ref.classes,
      intl = _ref.intl,
      onClick = _ref.onClick,
      message = _ref.message,
      isDisabled = _ref.isDisabled,
      batchExport = _ref.batchExport;
  return batchExport ? /*#__PURE__*/_react["default"].createElement(_core.Button, {
    variant: "contained",
    className: classes.button,
    color: "primary",
    onClick: onClick,
    disabled: isDisabled
  }, /*#__PURE__*/_react["default"].createElement(_CallMade["default"], {
    className: classes.buttonIcon
  }), intl.formatMessage(message)) : /*#__PURE__*/_react["default"].createElement(_CallMade["default"], {
    onClick: onClick,
    disabled: isDisabled
  });
}

ExportButtonComponent.defaultProps = {
  message: defaultMessage,
  isDisabled: false
};
ExportButtonComponent.propTypes = {
  intl: _propTypes["default"].object.isRequired,
  classes: _propTypes["default"].object.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  isDisabled: _propTypes["default"].bool,
  batchExport: _propTypes["default"].bool.isRequired,
  message: _propTypes["default"].object // TODO: make a message prop type

};
var styledExportButton = (0, _core.withStyles)(styles)((0, _injectIntl.injectIntl)(ExportButtonComponent));
exports.ExportButton = styledExportButton;