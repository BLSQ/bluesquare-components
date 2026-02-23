"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExportButton = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _CallMade = _interopRequireDefault(require("@mui/icons-material/CallMade"));
var _material = require("@mui/material");
var _styles = require("@mui/styles");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _injectIntl = require("../../../localization/injectIntl.js");
var _common = require("../../../styles/iaso/common.ts");
var _messages = require("./messages");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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

// TODO refactor to useSafeIntl instead?
function ExportButtonComponent(_ref) {
  var classes = _ref.classes,
    intl = _ref.intl,
    onClick = _ref.onClick,
    _ref$message = _ref.message,
    message = _ref$message === void 0 ? _messages.MESSAGES["export"] : _ref$message,
    _ref$isDisabled = _ref.isDisabled,
    isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled,
    batchExport = _ref.batchExport,
    _ref$id = _ref.id,
    id = _ref$id === void 0 ? '' : _ref$id;
  return batchExport ? /*#__PURE__*/_react["default"].createElement(_material.Button, {
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
var styledExportButton = exports.ExportButton = (0, _styles.withStyles)(styles)((0, _injectIntl.injectIntl)(ExportButtonComponent));