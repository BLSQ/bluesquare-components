"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicSelect = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _reactIntl = require("react-intl");

var _InfoOutlined = _interopRequireDefault(require("@material-ui/icons/InfoOutlined"));

var _useSafeIntl2 = require("../../utils/useSafeIntl");

var _SearchInput = require("../inputs/SearchInput");

var _theme = require("../../styles/iaso/theme");

var _messages = require("./messages");

var _requests = require("./requests");

var _LoadingSpinner = require("../LoadingSpinner");

var _TreeViewResultsCountSelect = require("./TreeViewResultsCountSelect");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      maxHeight: '50vh',
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
      marginTop: '7px'
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
      onSelect = _ref.onSelect,
      minResultCount = _ref.minResultCount,
      inputLabelObject = _ref.inputLabelObject,
      withSearchButton = _ref.withSearchButton,
      request = _ref.request,
      makeDropDownText = _ref.makeDropDownText,
      toolTip = _ref.toolTip;

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
      _useState10 = (0, _slicedToArray2["default"])(_useState9, 2),
      selectCountIsFocused = _useState10[0],
      setSelectCountIsFocused = _useState10[1];

  var _useTreeviewSearch = (0, _requests.useTreeviewSearch)({
    request: request,
    searchValue: searchValue,
    resultsCount: resultsCount,
    options: {
      enabled: isSearchActive && searchSent
    }
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

  return /*#__PURE__*/_react["default"].createElement(_core.Box, {
    className: classes.root
  }, /*#__PURE__*/_react["default"].createElement(_core.ClickAwayListener, {
    onClickAway: function onClickAway() {
      if (!selectCountIsFocused) {
        setIsSearchActive(false);
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Box, {
    className: classes.container,
    onFocus: function onFocus() {
      return setIsSearchActive(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_core.Box, {
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
  }), withSearchButton && /*#__PURE__*/_react["default"].createElement(_core.Button, {
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
  })), searchResults.length === 0 && isSearchActive && searchSent && !isFetching && /*#__PURE__*/_react["default"].createElement(_core.Typography, {
    variant: "body2",
    align: "center",
    className: classes.noResult
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, _messages.MESSAGES.noOptions)), searchResults.length > 0 && isSearchActive && /*#__PURE__*/_react["default"].createElement(_core.Box, {
    className: classes.listContainer
  }, /*#__PURE__*/_react["default"].createElement(_core.List, {
    className: classes.list
  }, searchResults.map(function (element) {
    return /*#__PURE__*/_react["default"].createElement(_core.ListItem, {
      key: element.id,
      button: true,
      onClick: function onClick() {
        return handleSelect(element);
      },
      className: "org-unit-item"
    }, /*#__PURE__*/_react["default"].createElement(_core.ListItemText, {
      primary: /*#__PURE__*/_react["default"].createElement(_core.Typography, {
        type: "body2"
      }, makeDropDownText(element))
    }), toolTip && toolTip(element, tooltipIcon));
  })), /*#__PURE__*/_react["default"].createElement(_core.Divider, null), /*#__PURE__*/_react["default"].createElement(_core.Box, {
    className: classes.resultInfos
  }, /*#__PURE__*/_react["default"].createElement(_core.ClickAwayListener, {
    onClickAway: function onClickAway() {
      return setSelectCountIsFocused(false);
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: classes.countContainer,
    onFocus: function onFocus() {
      return setSelectCountIsFocused(true);
    }
  }, /*#__PURE__*/_react["default"].createElement(_TreeViewResultsCountSelect.TreeViewResultsCountSelect, {
    handleSelect: handleResultCountChange,
    resultsCount: resultsCount
  }))))))));
};

DynamicSelect.defaultProps = {
  minResultCount: 50,
  inputLabelObject: _messages.MESSAGES.search,
  withSearchButton: false,
  toolTip: null,
  onSelect: function onSelect() {}
};
DynamicSelect.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  onSelect: _propTypes["default"].func,
  minResultCount: _propTypes["default"].number,
  inputLabelObject: _propTypes["default"].object,
  withSearchButton: _propTypes["default"].bool,
  request: _propTypes["default"].func.isRequired,
  makeDropDownText: _propTypes["default"].func.isRequired,
  toolTip: _propTypes["default"].func
};
var dynamicSelect = (0, _core.withStyles)(styles)(DynamicSelect);
exports.DynamicSelect = dynamicSelect;