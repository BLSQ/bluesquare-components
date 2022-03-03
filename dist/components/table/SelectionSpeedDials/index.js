"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectionSpeedDials = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _lab = require("@material-ui/lab");

var _CheckBox = _interopRequireDefault(require("@material-ui/icons/CheckBox"));

var _styles = require("./styles");

var SelectionSpeedDials = function SelectionSpeedDials(_ref) {
  var hidden = _ref.hidden,
      actions = _ref.actions,
      selection = _ref.selection,
      reset = _ref.reset,
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
  return /*#__PURE__*/_react["default"].createElement(_core.ClickAwayListener, {
    onClickAway: function onClickAway() {
      return handleClose();
    }
  }, /*#__PURE__*/_react["default"].createElement(_lab.SpeedDial, {
    ariaLabel: actionMessage,
    className: classes.speedDial,
    hidden: hidden,
    icon: /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], null),
    onOpen: handleOpen,
    open: open,
    direction: "up"
  }, activeAction.map(function (action) {
    return /*#__PURE__*/_react["default"].createElement(_lab.SpeedDialAction, {
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

exports.SelectionSpeedDials = SelectionSpeedDials;
SelectionSpeedDials.defaultProps = {
  hidden: false,
  actions: [],
  reset: function reset() {
    return null;
  }
};
SelectionSpeedDials.propTypes = {
  hidden: _propTypes["default"].bool,
  actions: _propTypes["default"].array,
  selection: _propTypes["default"].object.isRequired,
  reset: _propTypes["default"].func,
  actionMessage: _propTypes["default"].string.isRequired
};