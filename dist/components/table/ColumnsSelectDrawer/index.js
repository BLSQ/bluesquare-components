"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnsSelectDrawer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _ArrowBack = _interopRequireDefault(require("@mui/icons-material/ArrowBack"));
var _Close = _interopRequireDefault(require("@mui/icons-material/Close"));
var _material = require("@mui/material");
var _styles = require("@mui/styles");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _reactIntersectionObserver = require("react-intersection-observer");
var _BlockPlaceholder = require("../../BlockPlaceholder");
var _IconButton = require("../../buttons/IconButton");
var _injectIntl = require("../../../localization/injectIntl");
var _messages = require("./messages");
var _styles2 = require("./styles");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var filterResults = function filterResults(searchString, options) {
  var displayedOptions = (0, _toConsumableArray2["default"])(options);
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
    _ref$minColumns = _ref.minColumns,
    minColumns = _ref$minColumns === void 0 ? 2 : _ref$minColumns,
    formatMessage = _ref.intl.formatMessage;
  var _React$useState = _react["default"].useState({
      open: false,
      searchString: ''
    }),
    _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
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
      var newOptions = (0, _toConsumableArray2["default"])(options);
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
  }), /*#__PURE__*/_react["default"].createElement(_material.Drawer, {
    anchor: "right",
    open: state.open,
    onClose: toggleDrawer(false)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.toolbar
  }, /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
    title: formatMessage(_messages.MESSAGES.close)
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: toggleDrawer(false)
  }, /*#__PURE__*/_react["default"].createElement(_ArrowBack["default"], null))), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.search
  }, /*#__PURE__*/_react["default"].createElement(_material.InputBase, {
    value: state.searchString,
    onChange: handleSearch(),
    className: classes.input,
    placeholder: formatMessage(_messages.MESSAGES.search),
    inputProps: {
      'aria-label': formatMessage(_messages.MESSAGES.search),
      className: classes.input
    }
  })), state.searchString !== '' && /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
    title: formatMessage(_messages.MESSAGES.resetSearch)
  }, /*#__PURE__*/_react["default"].createElement(_material.IconButton, {
    onClick: handleSearch(true)
  }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null)))), /*#__PURE__*/_react["default"].createElement(_material.Divider, null), /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.list
  }, /*#__PURE__*/_react["default"].createElement(_material.List, null, displayedOptions.map(function (o) {
    return /*#__PURE__*/_react["default"].createElement(_reactIntersectionObserver.InView, {
      key: o.key
    }, function (_ref2) {
      var inView = _ref2.inView,
        ref = _ref2.ref;
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: ref,
        id: o.key
      }, /*#__PURE__*/_react["default"].createElement(_material.ListItem, {
        className: classes.listItem
      }, inView && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_material.Switch, {
        disabled: activeOptionsCount === minColumns && o.active,
        size: "small",
        checked: o.active,
        onChange: handleChangeOptions(o.index),
        color: "primary",
        inputProps: {
          'aria-label': o.label
        },
        className: classes["switch"]
      }), /*#__PURE__*/_react["default"].createElement(_material.ListItemText, {
        primary: o.label || o.key
      })), !inView && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_BlockPlaceholder.BlockPlaceholder, {
        width: "30px"
      }), /*#__PURE__*/_react["default"].createElement(_BlockPlaceholder.BlockPlaceholder, null))));
    });
  }))))));
};
ColumnsSelectDrawer.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  options: _propTypes["default"].array.isRequired,
  setOptions: _propTypes["default"].func.isRequired,
  minColumns: _propTypes["default"].number,
  intl: _propTypes["default"].object.isRequired
};
var styledAndTranslated = exports.ColumnsSelectDrawer = (0, _styles.withStyles)(_styles2.styles)((0, _injectIntl.injectIntl)(ColumnsSelectDrawer));