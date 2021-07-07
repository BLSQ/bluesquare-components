"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnsSelectDrawer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntersectionObserver = require("react-intersection-observer");

var _core = require("@material-ui/core");

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _ArrowBack = _interopRequireDefault(require("@material-ui/icons/ArrowBack"));

var _IconButton = require("../../buttons/IconButton");

var _BlockPlaceholder = require("../../BlockPlaceholder");

var _messages = require("./messages");

var _injectIntl = require("../../../utils/injectIntl");

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var filterResults = function filterResults(searchString, options) {
  var displayedOptions = _toConsumableArray(options);

  displayedOptions = displayedOptions.map(function (o, i) {
    return _objectSpread(_objectSpread({}, o), {}, {
      index: i
    });
  });

  if (searchString !== '') {
    var search = searchString.toLowerCase();
    displayedOptions = displayedOptions.filter(function (o) {
      return o.key && o.key.toLowerCase().includes(search) || o.label && o.label.toLowerCase().includes(search);
    });
  }

  return displayedOptions;
};

var ColumnsSelectDrawer = function ColumnsSelectDrawer(_ref) {
  var classes = _ref.classes,
      options = _ref.options,
      setOptions = _ref.setOptions,
      minColumns = _ref.minColumns,
      formatMessage = _ref.intl.formatMessage;

  var _React$useState = _react["default"].useState({
    open: false,
    searchString: ''
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var toggleDrawer = function toggleDrawer(open) {
    return function () {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        open: open
      }));
    };
  };

  var handleSearch = function handleSearch(reset) {
    return function (event) {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        searchString: reset ? '' : event.target.value
      }));
    };
  };

  var handleChangeOptions = function handleChangeOptions(index) {
    return function (event) {
      var newOptions = _toConsumableArray(options);

      newOptions[index] = _objectSpread(_objectSpread({}, newOptions[index]), {}, {
        active: event.target.checked
      });
      setOptions(newOptions);
    };
  };

  var activeOptionsCount = options.filter(function (o) {
    return o.active;
  }).length;
  var displayedOptions = filterResults(state.searchString, options);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_IconButton.IconButton, {
    onClick: toggleDrawer(true),
    icon: "filter-list",
    color: "white",
    tooltipMessage: _messages.MESSAGES.columnSelectTooltip
  }), /*#__PURE__*/_react["default"].createElement(_core.Drawer, {
    anchor: "right",
    open: state.open,
    onClose: toggleDrawer(false)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.toolbar
  }, /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
    title: formatMessage(_messages.MESSAGES.close)
  }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    onClick: toggleDrawer(false)
  }, /*#__PURE__*/_react["default"].createElement(_ArrowBack["default"], null))), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.search
  }, /*#__PURE__*/_react["default"].createElement(_core.InputBase, {
    value: state.searchString,
    onChange: handleSearch(),
    className: classes.input,
    placeholder: formatMessage(_messages.MESSAGES.search),
    inputProps: {
      'aria-label': formatMessage(_messages.MESSAGES.search),
      className: classes.input
    }
  })), state.searchString !== '' && /*#__PURE__*/_react["default"].createElement(_core.Tooltip, {
    title: formatMessage(_messages.MESSAGES.resetSearch)
  }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
    onClick: handleSearch(true)
  }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null)))), /*#__PURE__*/_react["default"].createElement(_core.Divider, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.list
  }, /*#__PURE__*/_react["default"].createElement(_core.List, null, displayedOptions.map(function (o) {
    return /*#__PURE__*/_react["default"].createElement(_reactIntersectionObserver.InView, {
      key: o.key
    }, function (_ref2) {
      var inView = _ref2.inView,
          ref = _ref2.ref;
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: ref,
        id: o.key
      }, /*#__PURE__*/_react["default"].createElement(_core.ListItem, {
        className: classes.listItem
      }, inView && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Switch, {
        disabled: activeOptionsCount === minColumns && o.active,
        size: "small",
        checked: o.active,
        onChange: handleChangeOptions(o.index),
        color: "primary",
        inputProps: {
          'aria-label': o.label
        },
        className: classes["switch"]
      }), /*#__PURE__*/_react["default"].createElement(_core.ListItemText, {
        primary: o.label || o.key
      })), !inView && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_BlockPlaceholder.BlockPlaceholder, {
        width: "30px"
      }), /*#__PURE__*/_react["default"].createElement(_BlockPlaceholder.BlockPlaceholder, null))));
    });
  }))))));
};

ColumnsSelectDrawer.defaultProps = {
  minColumns: 2
};
ColumnsSelectDrawer.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  options: _propTypes["default"].array.isRequired,
  setOptions: _propTypes["default"].func.isRequired,
  minColumns: _propTypes["default"].number,
  intl: _propTypes["default"].object.isRequired
};
var styledAndTranslated = (0, _core.withStyles)(_styles.styles)((0, _injectIntl.injectIntl)(ColumnsSelectDrawer));
exports.ColumnsSelectDrawer = styledAndTranslated;