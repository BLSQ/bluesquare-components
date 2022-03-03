"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExportButton = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CallMade = _interopRequireDefault(require("@material-ui/icons/CallMade"));

var _core = require("@material-ui/core");

var _common = require("../../../styles/iaso/common");

var _injectIntl = require("../../../utils/injectIntl");

var _messages = require("./messages");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var styles = function styles(theme) {
  return _objectSpread(_objectSpread({}, (0, _common.commonStyles)(theme)), {}, {
    button: {
      marginLeft: theme.spacing(2),
      '& svg, & i': {
        marginRight: theme.spacing(1)
      }
    }
  });
}; // TODO refactor to useSafeIntl instead?


function ExportButtonComponent(_ref) {
  var classes = _ref.classes,
      intl = _ref.intl,
      onClick = _ref.onClick,
      message = _ref.message,
      isDisabled = _ref.isDisabled,
      batchExport = _ref.batchExport,
      id = _ref.id;
  return batchExport ? /*#__PURE__*/_react["default"].createElement(_core.Button, {
    variant: "contained",
    className: classes.button,
    color: "primary",
    onClick: onClick,
    disabled: isDisabled,
    id: id
  }, /*#__PURE__*/_react["default"].createElement(_CallMade["default"], {
    className: classes.buttonIcon
  }), intl.formatMessage(message)) : /*#__PURE__*/_react["default"].createElement(_CallMade["default"], {
    onClick: onClick,
    disabled: isDisabled
  });
}

ExportButtonComponent.defaultProps = {
  message: _messages.MESSAGES["export"],
  isDisabled: false,
  id: ''
};
ExportButtonComponent.propTypes = {
  intl: _propTypes["default"].object.isRequired,
  classes: _propTypes["default"].object.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  isDisabled: _propTypes["default"].bool,
  batchExport: _propTypes["default"].bool.isRequired,
  message: _propTypes["default"].object,
  // TODO: make a message prop type
  id: _propTypes["default"].string
};
var styledExportButton = (0, _core.withStyles)(styles)((0, _injectIntl.injectIntl)(ExportButtonComponent));
exports.ExportButton = styledExportButton;