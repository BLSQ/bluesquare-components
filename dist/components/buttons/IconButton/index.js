"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _core = require("@material-ui/core");

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _FilterList = _interopRequireDefault(require("@material-ui/icons/FilterList"));

var _CallMerge = _interopRequireDefault(require("@material-ui/icons/CallMerge"));

var _RemoveRedEye = _interopRequireDefault(require("@material-ui/icons/RemoveRedEye"));

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _History = _interopRequireDefault(require("@material-ui/icons/History"));

var _Map = _interopRequireDefault(require("@material-ui/icons/Map"));

var _CachedRounded = _interopRequireDefault(require("@material-ui/icons/CachedRounded"));

var _StopRounded = _interopRequireDefault(require("@material-ui/icons/StopRounded"));

var _GetApp = _interopRequireDefault(require("@material-ui/icons/GetApp"));

var _RestoreFromTrash = _interopRequireDefault(require("@material-ui/icons/RestoreFromTrash"));

var _XmlSvgComponent = require("../../../svg/XmlSvgComponent");

var _DHIS2SvgComponent = require("../../../svg/DHIS2SvgComponent");

var _OrgUnitSvgComponent = require("../../../svg/OrgUnitSvgComponent");

var _ExcellSvgComponent = require("../../../svg/ExcellSvgComponent");

var _common = require("../../../styles/iaso/common");

var _LinkProvider = require("../../LinkProvider");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ICON_VARIANTS = {
  "delete": _Delete["default"],
  'filter-list': _FilterList["default"],
  'call-merge': _CallMerge["default"],
  'remove-red-eye': _RemoveRedEye["default"],
  'restore-from-trash': _RestoreFromTrash["default"],
  edit: _Edit["default"],
  history: _History["default"],
  map: _Map["default"],
  xml: _XmlSvgComponent.XmlSvg,
  dhis: _DHIS2SvgComponent.DHIS2Svg,
  orgUnit: _OrgUnitSvgComponent.OrgUnitSvg,
  refresh: _CachedRounded["default"],
  stop: _StopRounded["default"],
  xls: _ExcellSvgComponent.ExcellSvg,
  download: _GetApp["default"]
};

var styles = function styles(theme) {
  return _objectSpread(_objectSpread({}, (0, _common.commonStyles)(theme)), {}, {
    white: {
      color: 'white'
    },
    popperFixed: _objectSpread(_objectSpread({}, (0, _common.commonStyles)(theme).popperFixed), {}, {
      marginTop: theme.spacing(1)
    })
  });
};

var ButtonIcon = function ButtonIcon(_ref) {
  var Icon = _ref.icon,
      color = _ref.color,
      onClick = _ref.onClick;

  if (Icon === undefined) {
    return 'wrong icon';
  }

  var iconProps = onClick !== null ? {
    onClick: onClick
  } : {}; // special override for white color, which is not a "theme" variant such as primary, secondary or action

  var iconStyles = color === 'white' ? {
    color: 'white'
  } : {};
  return /*#__PURE__*/_react["default"].createElement(Icon, _extends({}, iconProps, {
    color: color === 'white' ? 'inherit' : color,
    style: iconStyles
  }));
};

ButtonIcon.defaultProps = {
  onClick: null
};
ButtonIcon.propTypes = {
  onClick: _propTypes["default"].func,
  icon: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]).isRequired,
  color: _propTypes["default"].string.isRequired
};

function IconButtonComponent(_ref2) {
  var classes = _ref2.classes,
      disabled = _ref2.disabled,
      onClick = _ref2.onClick,
      url = _ref2.url,
      iconName = _ref2.icon,
      tooltipMessage = _ref2.tooltipMessage,
      color = _ref2.color;

  if (onClick === null === (url === null)) {
    console.error('IconButtonComponent needs either the onClick or the url property');
  }

  var Link = (0, _LinkProvider.useLink)();
  var icon = ICON_VARIANTS[iconName];
  return /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
    classes: {
      popper: classes.popperFixed
    },
    disableFocusListener: disabled,
    disableHoverListener: disabled,
    disableTouchListener: disabled,
    placement: "bottom",
    title: /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, tooltipMessage)
  }, /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    disabled: disabled,
    onClick: onClick
  }, url ? /*#__PURE__*/_react["default"].createElement(Link, {
    to: url,
    className: classes.linkButton
  }, /*#__PURE__*/_react["default"].createElement(ButtonIcon, {
    icon: icon,
    color: color
  })) : /*#__PURE__*/_react["default"].createElement(ButtonIcon, {
    icon: icon,
    color: color
  }))));
}

IconButtonComponent.defaultProps = {
  disabled: false,
  url: null,
  onClick: null,
  color: 'action'
};
IconButtonComponent.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  onClick: _propTypes["default"].func,
  url: _propTypes["default"].string,
  disabled: _propTypes["default"].bool,
  icon: _propTypes["default"].oneOf(Object.keys(ICON_VARIANTS)).isRequired,
  color: _propTypes["default"].string,
  tooltipMessage: _propTypes["default"].object.isRequired // TODO: refactor IASO to pass the translation directly

};
var styledIconButton = (0, _core.withStyles)(styles)(IconButtonComponent);
exports.IconButton = styledIconButton;