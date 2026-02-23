"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicSelect = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _material = require("@mui/material");
var _styles = require("@mui/styles");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _InfoOutlined = _interopRequireDefault(require("@mui/icons-material/InfoOutlined"));
var _theme = require("../../styles/iaso/theme");
var _useSafeIntl2 = require("../../localization/useSafeIntl");
var _LoadingSpinner = require("../LoadingSpinner");
var _SearchInput = require("../inputs/SearchInput");
var _TreeViewResultsCountSelect = require("./TreeViewResultsCountSelect");
var _messages = require("./messages");
var _requests = require("./requests");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var styles = function styles(theme) {
  return {
    root: {
      height: theme.spacing(9),
      overflow: 'visible'
    },
    container: {
      position: 'relative',
      zIndex: 1000
    },
    loadingContainer: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      zIndex: 10,
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },
    listContainer: {
      border: "1px solid ".concat(theme.palette.ligthGray.border),
      backgroundColor: 'white',
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius,
      boxShadow: '0px 9px 29px -5px rgba(0,0,0,0.3)',
      position: 'relative',
      overflow: 'hidden'
    },
    list: {
      maxHeight: '250px',
      overflow: 'auto'
    },
    noResult: {
      backgroundColor: 'white',
      border: "1px solid ".concat(theme.palette.ligthGray.border),
      borderBottomLeftRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius,
      color: theme.palette.error.main,
      height: theme.spacing(9),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0px 9px 29px -5px rgba(0,0,0,0.3)'
    },
    resultInfos: {
      fontSize: 12,
      height: theme.spacing(6),
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: theme.spacing(0, 4)
    },
    countContainer: {
      marginTop: theme.spacing(1),
      marginBottom: 5,
      '& >div': {
        marginRight: 0
      }
    },
    iconButton: {
      height: 25,
      marginLeft: theme.spacing(1)
    },
    resultsCountInput: {
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
      },
      '-moz-appearance': 'textfield',
      textAlign: 'center'
    },
    searchBar: {
      display: 'flex',
      alignItems: 'center'
    },
    searchButton: {
      marginLeft: '10px'
    }
  };
};
var DynamicSelect = function DynamicSelect(_ref) {
  var classes = _ref.classes,
    _ref$onSelect = _ref.onSelect,
    onSelect = _ref$onSelect === void 0 ? function () {} : _ref$onSelect,
    _ref$minResultCount = _ref.minResultCount,
    minResultCount = _ref$minResultCount === void 0 ? 50 : _ref$minResultCount,
    _ref$inputLabelObject = _ref.inputLabelObject,
    inputLabelObject = _ref$inputLabelObject === void 0 ? _messages.MESSAGES.search : _ref$inputLabelObject,
    _ref$withSearchButton = _ref.withSearchButton,
    withSearchButton = _ref$withSearchButton === void 0 ? false : _ref$withSearchButton,
    request = _ref.request,
    makeDropDownText = _ref.makeDropDownText,
    _ref$toolTip = _ref.toolTip,
    toolTip = _ref$toolTip === void 0 ? null : _ref$toolTip,
    _ref$dependency = _ref.dependency,
    dependency = _ref$dependency === void 0 ? undefined : _ref$dependency;
  var _useSafeIntl = (0, _useSafeIntl2.useSafeIntl)(),
    formatMessage = _useSafeIntl.formatMessage;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    searchValue = _useState2[0],
    setSearchValue = _useState2[1];
  var _useState3 = (0, _react.useState)(minResultCount),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    resultsCount = _useState4[0],
    setResultsCount = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    isSearchActive = _useState6[0],
    setIsSearchActive = _useState6[1];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    searchSent = _useState8[0],
    setSearchSent = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState0 = (0, _slicedToArray2["default"])(_useState9, 2),
    selectCountIsFocused = _useState0[0],
    setSelectCountIsFocused = _useState0[1];
  var _useTreeviewSearch = (0, _requests.useTreeviewSearch)({
      request: request,
      searchValue: searchValue,
      resultsCount: resultsCount,
      options: {
        enabled: isSearchActive && searchSent
      },
      dependency: dependency
    }),
    searchResults = _useTreeviewSearch.data,
    isLoading = _useTreeviewSearch.isLoading,
    isFetching = _useTreeviewSearch.isFetching;
  var onChangeSearch = function onChangeSearch(newSearchValue) {
    setSearchValue(newSearchValue);
    setSearchSent(false);
  };
  var handleSearch = (0, _react.useCallback)(function () {
    if (searchValue !== '') {
      setSearchSent(true);
    }
  }, [searchValue]);
  var handleSelect = function handleSelect(element) {
    onSelect(element);
    setIsSearchActive(false);
  };
  var handleResultCountChange = function handleResultCountChange(newResultCount) {
    setResultsCount(parseInt(newResultCount, 10));
  };
  var tooltipIcon = /*#__PURE__*/_react["default"].createElement(_InfoOutlined["default"], {
    fontSize: "small",
    style: {
      color: _theme.rawTheme.palette.mediumGray.main
    }
  });
  return /*#__PURE__*/_react["default"].createElement(_material.Box, {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_material.ClickAwayListener, {
    onClickAway: function onClickAway() {
      if (!selectCountIsFocused) {
        setIsSearchActive(false);
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    className: classes.container,
    onFocus: function onFocus() {
      return setIsSearchActive(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    className: classes.searchBar
  }, /*#__PURE__*/_react["default"].createElement(_SearchInput.SearchInput, {
    disabled: isLoading,
    keyValue: "orgUnitSearch",
    onChange: function onChange(value) {
      onChangeSearch(value);
    },
    value: searchValue,
    type: "search",
    label: formatMessage(inputLabelObject),
    onEnterPressed: function onEnterPressed() {
      return handleSearch();
    }
  }), withSearchButton && /*#__PURE__*/_react["default"].createElement(_material.Button, {
    variant: "contained",
    className: classes.searchButton,
    color: "primary",
    onClick: handleSearch
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, _messages.MESSAGES.search))), isLoading && /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.loadingContainer
  }, /*#__PURE__*/_react["default"].createElement(_LoadingSpinner.LoadingSpinner, {
    fixed: false,
    transparent: true,
    padding: 4,
    size: 25
  })), searchResults.length === 0 && isSearchActive && searchSent && !isFetching && /*#__PURE__*/_react["default"].createElement(_material.Typography, {
    variant: "body2",
    align: "center",
    className: classes.noResult
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, _messages.MESSAGES.noOptions)), searchResults.length > 0 && isSearchActive && /*#__PURE__*/_react["default"].createElement(_material.Box, {
    className: classes.listContainer
  }, /*#__PURE__*/_react["default"].createElement(_material.List, {
    className: classes.list
  }, searchResults.map(function (element) {
    return /*#__PURE__*/_react["default"].createElement(_material.ListItem, {
      key: element.id,
      button: true,
      onClick: function onClick() {
        return handleSelect(element);
      },
      className: "org-unit-item"
    }, /*#__PURE__*/_react["default"].createElement(_material.ListItemText, {
      primary: /*#__PURE__*/_react["default"].createElement(_material.Typography, {
        type: "body2"
      }, makeDropDownText(element))
    }), toolTip && toolTip(element, tooltipIcon));
  })), /*#__PURE__*/_react["default"].createElement(_material.Divider, null), /*#__PURE__*/_react["default"].createElement(_material.Box, {
    className: classes.resultInfos
  }, /*#__PURE__*/_react["default"].createElement(_material.ClickAwayListener, {
    onClickAway: function onClickAway() {
      return setSelectCountIsFocused(false);
    }
  }, /*#__PURE__*/_react["default"].createElement(_material.Box, {
    className: classes.countContainer,
    onFocus: function onFocus() {
      return setSelectCountIsFocused(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_TreeViewResultsCountSelect.TreeViewResultsCountSelect, {
    handleSelect: handleResultCountChange,
    resultsCount: resultsCount
  }))))))));
};
DynamicSelect.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  onSelect: _propTypes["default"].func,
  minResultCount: _propTypes["default"].number,
  inputLabelObject: _propTypes["default"].object,
  withSearchButton: _propTypes["default"].bool,
  request: _propTypes["default"].func.isRequired,
  makeDropDownText: _propTypes["default"].func.isRequired,
  toolTip: _propTypes["default"].func,
  dependency: _propTypes["default"].any
};
var dynamicSelect = exports.DynamicSelect = (0, _styles.withStyles)(styles)(DynamicSelect);