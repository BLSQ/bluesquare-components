"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectionSpeedDials = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _lab = require("@material-ui/lab");

var _CheckBox = _interopRequireDefault(require("@material-ui/icons/CheckBox"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SelectionSpeedDials = function SelectionSpeedDials(_ref) {
  var hidden = _ref.hidden,
      actions = _ref.actions,
      selection = _ref.selection,
      reset = _ref.reset,
      actionMessage = _ref.actionMessage;
  var classes = (0, _styles.useStyles)();

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
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