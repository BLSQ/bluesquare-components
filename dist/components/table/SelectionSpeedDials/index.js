"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectionSpeedDials = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _material = require("@mui/material");
var _CheckBox = _interopRequireDefault(require("@mui/icons-material/CheckBox"));
var _styles = require("./styles");
var SelectionSpeedDials = exports.SelectionSpeedDials = function SelectionSpeedDials(_ref) {
  var _ref$hidden = _ref.hidden,
    hidden = _ref$hidden === void 0 ? false : _ref$hidden,
    _ref$actions = _ref.actions,
    actions = _ref$actions === void 0 ? [] : _ref$actions,
    selection = _ref.selection,
    _ref$reset = _ref.reset,
    reset = _ref$reset === void 0 ? function () {
      return null;
    } : _ref$reset,
    actionMessage = _ref.actionMessage;
  var classes = (0, _styles.useStyles)();
  var _React$useState = _react["default"].useState(false),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var handleClose = function handleClose() {
    setOpen(false);
  };
  var handleOpen = function handleOpen() {
    setOpen(true);
  };
  var activeAction = actions.filter(function (a) {
    return !a.disabled;
  });
  return /*#__PURE__*/_react["default"].createElement(_material.ClickAwayListener, {
    onClickAway: function onClickAway() {
      return handleClose();
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.SpeedDial, {
    ariaLabel: actionMessage,
    className: classes.speedDial,
    hidden: hidden,
    icon: /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], null),
    onOpen: handleOpen,
    open: open,
    direction: "up"
  }, activeAction.map(function (action) {
    return /*#__PURE__*/_react["default"].createElement(_material.SpeedDialAction, {
      key: action.label,
      icon: typeof action.icon === 'function' ? action.icon(selection, reset) : action.icon,
      tooltipTitle: action.label,
      onClick: function onClick() {
        return action.onClick ? action.onClick(selection) : function () {
          return null;
        };
      }
    });
  })));
};
SelectionSpeedDials.propTypes = {
  hidden: _propTypes["default"].bool,
  actions: _propTypes["default"].array,
  selection: _propTypes["default"].object.isRequired,
  reset: _propTypes["default"].func,
  actionMessage: _propTypes["default"].string.isRequired
};