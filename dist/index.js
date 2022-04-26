(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("bluesquare-components", [], factory);
	else if(typeof exports === 'object')
		exports["bluesquare-components"] = factory();
	else
		root["bluesquare-components"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/BlockPlaceholder/index.js":
/*!**************************************************!*\
  !*** ./src/components/BlockPlaceholder/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlockPlaceholder": () => (/* binding */ styled)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/BlockPlaceholder/styles.js");





const BlockPlaceholder = ({
  classes,
  width
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
  className: classes.placeholder,
  style: {
    width
  }
});

BlockPlaceholder.defaultProps = {
  width: '50%'
};
BlockPlaceholder.propTypes = {
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  width: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
const styled = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.withStyles)(_styles__WEBPACK_IMPORTED_MODULE_3__.styles)(BlockPlaceholder);


/***/ }),

/***/ "./src/components/BlockPlaceholder/styles.js":
/*!***************************************************!*\
  !*** ./src/components/BlockPlaceholder/styles.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles)
/* harmony export */ });
const styles = theme => ({
  placeholder: {
    height: 15,
    backgroundColor: theme.palette.ligthGray.main,
    borderRadius: 5,
    marginRight: theme.spacing(1),
    width: '50%'
  }
});



/***/ }),

/***/ "./src/components/DatePicker/index.js":
/*!********************************************!*\
  !*** ./src/components/DatePicker/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatePicker": () => (/* binding */ DatePicker)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/pickers */ "@material-ui/pickers");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Event */ "@material-ui/icons/Event");
/* harmony import */ var _material_ui_icons_Event__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Event__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _buttons_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../buttons/IconButton */ "./src/components/buttons/IconButton/index.js");
/* harmony import */ var _styles_iaso_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/iaso/common */ "./src/styles/iaso/common.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(theme => _objectSpread(_objectSpread({}, (0,_styles_iaso_common__WEBPACK_IMPORTED_MODULE_7__.commonStyles)(theme)), {}, {
  formControl: {
    width: '100%'
  },
  clearDateButton: {
    marginRight: theme.spacing(2),
    padding: 0,
    position: 'absolute',
    right: theme.spacing(4),
    top: 13
  }
}));

const DatePicker = ({
  label,
  onChange,
  currentDate,
  hasError,
  clearMessage,
  helperText
}) => {
  const classes = useStyles();
  const [dateError, setDateError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
    className: classes.formControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_2__.KeyboardDatePicker, {
    autoOk: true,
    disableToolbar: true,
    inputVariant: "outlined",
    InputLabelProps: {
      className: classes.label,
      shrink: Boolean(currentDate),
      error: hasError || Boolean(dateError)
    },
    KeyboardButtonProps: {
      size: 'small'
    },
    keyboardIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_Event__WEBPACK_IMPORTED_MODULE_3___default()), {
      size: "small"
    }),
    InputProps: {
      error: hasError || Boolean(dateError)
    },
    format: "DD/MM/YYYY" // This one need be set by user locale
    ,
    label: label,
    helperText: helperText,
    value: currentDate,
    onChange: onChange,
    onError: error => setDateError(error)
  }), currentDate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
    className: classes.clearDateButton
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_buttons_IconButton__WEBPACK_IMPORTED_MODULE_6__.IconButton, {
    size: "small",
    icon: "clear",
    tooltipMessage: clearMessage,
    onClick: () => onChange(null)
  })));
};

DatePicker.defaultProps = {
  currentDate: null,
  helperText: ''
};
DatePicker.propTypes = {
  /**
   * A label. Required
   */
  label: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string.isRequired),

  /**
  /**
   * OnChange function. Required
   */
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired),

  /**
   * The date to initialize the DatePicker with
   */
  currentDate: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_5___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)]),

  /**
   * Toggles the CSS for error state
   */
  hasError: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool.isRequired),

  /**
   * A message object to use with react-intl. Displays when hovering over the clear icon
   */
  clearMessage: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object.isRequired),

  /**
   * A message object to use with react-intl. Displays when hovering over the clear icon
   */
  helperText: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)
};


/***/ }),

/***/ "./src/components/ErrorBoundary/index.js":
/*!***********************************************!*\
  !*** ./src/components/ErrorBoundary/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorBoundary": () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


class ErrorBoundary extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  componentDidCatch(error, errorInfo) {
    // eslint-disable-next-line no-console
    console.log('BOUNDARY ERROR', error, errorInfo);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }

}



/***/ }),

/***/ "./src/components/LinkProvider/index.js":
/*!**********************************************!*\
  !*** ./src/components/LinkProvider/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkContext": () => (/* binding */ LinkContext),
/* harmony export */   "LinkProvider": () => (/* binding */ LinkProvider),
/* harmony export */   "makeLinkComponent": () => (/* binding */ makeLinkComponent),
/* harmony export */   "useLink": () => (/* binding */ useLink),
/* harmony export */   "withLink": () => (/* binding */ withLink)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "@babel/runtime/helpers/objectWithoutProperties");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



const _excluded = ["href"],
      _excluded2 = ["href"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


 // Credit https://github.com/seek-oss/braid-design-system/blob/master/lib/components/BraidProvider/BraidProvider.tsx

const passToForwardRef = render => ({
  __forwardRef__: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(render)
});

const renderLink = (_ref, ref, Component) => {
  let {
    href
  } = _ref,
      restProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(Component, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({
    ref: ref,
    to: href
  }, restProps));
};

const render = component => (_ref2, ref) => {
  let {
    href
  } = _ref2,
      restProps = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref2, _excluded2);

  return renderLink(_objectSpread({
    href
  }, restProps), ref, component);
};

const makeLinkComponent = component => passToForwardRef(render(component));
const LinkContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)({});

const LinkProvider = props => {
  const {
    linkComponent
  } = props;
  const providedComponent = makeLinkComponent(linkComponent);
  const value = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => ({
    Link: providedComponent
  }), [providedComponent]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(LinkContext.Provider, {
    value: value
  }, props.children);
}; // TODO add better typing


LinkProvider.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3__.any.isRequired,
  linkComponent: prop_types__WEBPACK_IMPORTED_MODULE_3__.any.isRequired
};

const useLink = () => (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(LinkContext).Link.__forwardRef__;

const withLink = component => props => {
  const linkComponent = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(LinkContext).Link.__forwardRef__;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("component", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_1___default()({}, props, {
    linkComponent: linkComponent
  }));
};

 // First create the custom link implementation:
// const CustomLink = makeLinkComponent(({ href, ...restProps }, ref) =>
//     href[0] === '/' ? (
//         <ReactRouterLink ref={ref} to={href} {...restProps} />
//     ) : (
//         <a ref={ref} href={href} {...restProps} />
//     ),
// );

/***/ }),

/***/ "./src/components/Treeview/DynamicSelect.js":
/*!**************************************************!*\
  !*** ./src/components/Treeview/DynamicSelect.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicSelect": () => (/* binding */ dynamicSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/InfoOutlined */ "@material-ui/icons/InfoOutlined");
/* harmony import */ var _material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/useSafeIntl */ "./src/utils/useSafeIntl.js");
/* harmony import */ var _inputs_SearchInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../inputs/SearchInput */ "./src/components/inputs/SearchInput/index.js");
/* harmony import */ var _styles_iaso_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/iaso/theme */ "./src/styles/iaso/theme.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages */ "./src/components/Treeview/messages.js");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./requests */ "./src/components/Treeview/requests.js");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../LoadingSpinner */ "./src/components/LoadingSpinner/index.tsx");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _TreeViewResultsCountSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TreeViewResultsCountSelect */ "./src/components/Treeview/TreeViewResultsCountSelect.js");













const styles = theme => ({
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
    border: `1px solid ${theme.palette.ligthGray.border}`,
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
    border: `1px solid ${theme.palette.ligthGray.border}`,
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
});

const DynamicSelect = ({
  classes,
  onSelect,
  minResultCount,
  inputLabelObject,
  withSearchButton,
  request,
  makeDropDownText,
  toolTip
}) => {
  const {
    formatMessage
  } = (0,_utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_5__.useSafeIntl)();
  const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [resultsCount, setResultsCount] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(minResultCount);
  const [isSearchActive, setIsSearchActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [searchSent, setSearchSent] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [selectCountIsFocused, setSelectCountIsFocused] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    data: searchResults,
    isLoading,
    isFetching
  } = (0,_requests__WEBPACK_IMPORTED_MODULE_9__.useTreeviewSearch)({
    request,
    searchValue,
    resultsCount,
    options: {
      enabled: isSearchActive && searchSent
    }
  });

  const onChangeSearch = newSearchValue => {
    setSearchValue(newSearchValue);
    setSearchSent(false);
  };

  const handleSearch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (searchValue !== '') {
      setSearchSent(true);
    }
  }, [searchValue]);

  const handleSelect = element => {
    onSelect(element);
    setIsSearchActive(false);
  };

  const handleResultCountChange = newResultCount => {
    setResultsCount(parseInt(newResultCount, 10));
  };

  const tooltipIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_InfoOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {
    fontSize: "small",
    style: {
      color: _styles_iaso_theme__WEBPACK_IMPORTED_MODULE_7__.rawTheme.palette.mediumGray.main
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ClickAwayListener, {
    onClickAway: () => {
      if (!selectCountIsFocused) {
        setIsSearchActive(false);
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
    className: classes.container,
    onFocus: () => setIsSearchActive(true)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
    className: classes.searchBar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_inputs_SearchInput__WEBPACK_IMPORTED_MODULE_6__.SearchInput, {
    disabled: isLoading,
    keyValue: "orgUnitSearch",
    onChange: value => {
      onChangeSearch(value);
    },
    value: searchValue,
    type: "search",
    label: formatMessage(inputLabelObject),
    onEnterPressed: () => handleSearch()
  }), withSearchButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
    variant: "contained",
    className: classes.searchButton,
    color: "primary",
    onClick: handleSearch
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, _messages__WEBPACK_IMPORTED_MODULE_8__.MESSAGES.search))), isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.loadingContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_10__.LoadingSpinner, {
    fixed: false,
    transparent: true,
    padding: 4,
    size: 25
  })), searchResults.length === 0 && isSearchActive && searchSent && !isFetching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
    variant: "body2",
    align: "center",
    className: classes.noResult
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, _messages__WEBPACK_IMPORTED_MODULE_8__.MESSAGES.noOptions)), searchResults.length > 0 && isSearchActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
    className: classes.listContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.List, {
    className: classes.list
  }, searchResults.map(element => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ListItem, {
    key: element.id,
    button: true,
    onClick: () => handleSelect(element),
    className: "org-unit-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ListItemText, {
    primary: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
      type: "body2"
    }, makeDropDownText(element))
  }), toolTip && toolTip(element, tooltipIcon)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
    className: classes.resultInfos
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ClickAwayListener, {
    onClickAway: () => setSelectCountIsFocused(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.countContainer,
    onFocus: () => setSelectCountIsFocused(true)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TreeViewResultsCountSelect__WEBPACK_IMPORTED_MODULE_11__.TreeViewResultsCountSelect, {
    handleSelect: handleResultCountChange,
    resultsCount: resultsCount
  }))))))));
};

DynamicSelect.defaultProps = {
  minResultCount: 50,
  inputLabelObject: _messages__WEBPACK_IMPORTED_MODULE_8__.MESSAGES.search,
  withSearchButton: false,
  toolTip: null,
  onSelect: () => {}
};
DynamicSelect.propTypes = {
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  onSelect: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  minResultCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  inputLabelObject: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  withSearchButton: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  request: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  makeDropDownText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  toolTip: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};
const dynamicSelect = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.withStyles)(styles)(DynamicSelect);


/***/ }),

/***/ "./src/components/Treeview/EnrichedTreeItem.js":
/*!*****************************************************!*\
  !*** ./src/components/Treeview/EnrichedTreeItem.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EnrichedTreeItem": () => (/* binding */ EnrichedTreeItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab */ "@material-ui/lab");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ArrowRight */ "@material-ui/icons/ArrowRight");
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowDropDown */ "@material-ui/icons/ArrowDropDown");
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_CheckBoxOutlineBlankOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/CheckBoxOutlineBlankOutlined */ "@material-ui/icons/CheckBoxOutlineBlankOutlined");
/* harmony import */ var _material_ui_icons_CheckBoxOutlineBlankOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckBoxOutlineBlankOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/CheckBox */ "@material-ui/icons/CheckBox");
/* harmony import */ var _material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_IndeterminateCheckBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/IndeterminateCheckBox */ "@material-ui/icons/IndeterminateCheckBox");
/* harmony import */ var _material_ui_icons_IndeterminateCheckBox__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_IndeterminateCheckBox__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./requests */ "./src/components/Treeview/requests.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












const styles = theme => ({
  treeItem: {
    '&.MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label': {
      backgroundColor: theme.palette.primary.background,
      alignItems: 'center',
      color: theme.palette.primary.main
    }
  },
  unselectableTreeItem: {
    '&.MuiTreeItem-root > .MuiTreeItem-content .MuiTreeItem-label': {
      alignItems: 'center',
      color: theme.palette.mediumGray.main
    }
  },
  checkbox: {
    color: theme.palette.mediumGray.main,
    fontSize: '16px',
    marginRight: '5px'
  }
});

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__.makeStyles)(styles);

const EnrichedTreeItem = ({
  label,
  id,
  fetchChildrenData,
  // fetchChildrenData(id)
  expanded,
  toggleOnLabelClick,
  onLabelClick,
  data,
  // additional data that can be passed up to the parent (eg org unit details)
  withCheckbox,
  ticked,
  parentsTicked,
  scrollIntoView,
  allowSelection,
  queryOptions = {}
}) => {
  const classes = useStyles();
  const isExpanded = expanded.includes(id);
  const isTicked = ticked.includes(id);
  const isTickedParent = parentsTicked.includes(id);
  const isSelectable = allowSelection(data);
  const {
    data: childrenData,
    isLoading
  } = (0,_requests__WEBPACK_IMPORTED_MODULE_10__.useChildrenData)({
    request: fetchChildrenData,
    id,
    options: _objectSpread(_objectSpread({}, queryOptions), {}, {
      enabled: isExpanded
    })
  });
  const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const hasChildren = data.has_children;

  const makeIcon = (hasCheckbox, hasBeenTicked, tickedParent) => {
    if (!hasCheckbox) return null;
    if (hasBeenTicked) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_7___default()), {
      className: classes.checkbox
    });
    if (tickedParent) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_IndeterminateCheckBox__WEBPACK_IMPORTED_MODULE_8___default()), {
      className: classes.checkbox
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_CheckBoxOutlineBlankOutlined__WEBPACK_IMPORTED_MODULE_6___default()), {
      className: classes.checkbox
    });
  };

  const makeLabel = (child, hasCheckbox, hasBeenTicked, tickedParent) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      verticalAlign: 'middle'
    }
  }, makeIcon(hasCheckbox, hasBeenTicked, tickedParent), child);

  const handleLabelClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {
    if (!toggleOnLabelClick) {
      e.preventDefault();
    }

    onLabelClick(id, data, isSelectable);
  }, [data, id, onLabelClick, toggleOnLabelClick, isSelectable]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (scrollIntoView === id) {
      ref.current.scrollIntoView();
    }
  }, [scrollIntoView, id, ref]);

  const makeSubTree = subTreeData => {
    if (!subTreeData) return null;
    return subTreeData.map(unit => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(EnrichedTreeItem, {
      key: `TreeItem ${unit.id}`,
      label: label,
      id: unit.id,
      fetchChildrenData: fetchChildrenData,
      expanded: expanded,
      toggleOnLabelClick: toggleOnLabelClick,
      onLabelClick: onLabelClick,
      data: unit,
      withCheckbox: withCheckbox,
      ticked: ticked,
      parentsTicked: parentsTicked,
      scrollIntoView: scrollIntoView,
      allowSelection: allowSelection,
      queryOptions: queryOptions
    }));
  };

  if (isExpanded && isLoading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__.TreeItem, {
      classes: {
        root: isSelectable ? classes.treeItem : classes.unselectableTreeItem
      },
      ref: ref,
      label: makeLabel(label(data), withCheckbox, isTicked, isTickedParent),
      nodeId: id,
      icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5___default()), {
        style: {
          fontSize: 'large'
        }
      })
    });
  }

  if (hasChildren) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      style: {
        display: 'flex'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__.TreeItem, {
      classes: {
        root: isSelectable ? classes.treeItem : classes.unselectableTreeItem
      },
      ref: ref,
      label: makeLabel(label(data), withCheckbox, isTicked, isTickedParent),
      nodeId: id,
      collapseIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5___default()), {
        style: {
          fontSize: '24px'
        }
      }),
      expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_4___default()), {
        style: {
          fontSize: '24px'
        }
      }),
      onLabelClick: handleLabelClick
    }, childrenData && isExpanded && makeSubTree(childrenData), !isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", null)));
  }

  if (!hasChildren && !isSelectable) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__.TreeItem, {
    classes: {
      root: isSelectable ? classes.treeItem : classes.unselectableTreeItem
    },
    ref: ref,
    label: makeLabel(label(data), withCheckbox, isTicked),
    nodeId: id,
    collapseIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_5___default()), {
      style: {
        fontSize: '24px'
      }
    }),
    expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_4___default()), {
      style: {
        fontSize: '24px'
      }
    }),
    onLabelClick: handleLabelClick
  }));
};

EnrichedTreeItem.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_2__.func.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  fetchChildrenData: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,
  expanded: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf)(prop_types__WEBPACK_IMPORTED_MODULE_2__.string),
  toggleOnLabelClick: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2__.object.isRequired,
  onLabelClick: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,
  withCheckbox: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  ticked: (0,prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_2__.string, prop_types__WEBPACK_IMPORTED_MODULE_2__.array]),
  parentsTicked: prop_types__WEBPACK_IMPORTED_MODULE_2__.array,
  scrollIntoView: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  allowSelection: prop_types__WEBPACK_IMPORTED_MODULE_2__.func,
  queryOptions: prop_types__WEBPACK_IMPORTED_MODULE_2__.object
};
EnrichedTreeItem.defaultProps = {
  fetchChildrenData: () => {},
  expanded: [],
  toggleOnLabelClick: true,
  onLabelClick: () => {},
  withCheckbox: false,
  ticked: [],
  parentsTicked: [],
  scrollIntoView: null,
  allowSelection: () => true,
  queryOptions: {}
};


/***/ }),

/***/ "./src/components/Treeview/IasoTreeView.js":
/*!*************************************************!*\
  !*** ./src/components/Treeview/IasoTreeView.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IasoTreeView": () => (/* binding */ IasoTreeView)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/lab */ "@material-ui/lab");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _EnrichedTreeItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EnrichedTreeItem */ "./src/components/Treeview/EnrichedTreeItem.js");
/* harmony import */ var _requests__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./requests */ "./src/components/Treeview/requests.js");








const styles = theme => ({
  root: {
    color: theme.palette.gray.main,
    backgroundColor: theme.palette.ligthGray.main,
    borderRadius: '7px',
    maxHeight: '60vh',
    overflowY: 'scroll'
  },
  isFetching: {
    color: theme.palette.gray.main,
    backgroundColor: theme.palette.ligthGray.main,
    borderRadius: '7px',
    maxHeight: '60vh',
    overflowY: 'scroll'
  }
});

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(styles);

const IasoTreeView = ({
  getChildrenData,
  getRootData,
  label,
  multiselect,
  expanded,
  selected,
  onToggle,
  toggleOnLabelClick,
  onSelect,
  onCheckBoxClick,
  onLabelClick,
  ticked,
  parentsTicked,
  scrollIntoView,
  allowSelection,
  queryOptions = {},
  childrenQueryOptions = {}
}) => {
  const classes = useStyles();
  const fetchChildrenData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(getChildrenData, [getChildrenData]);
  const {
    data: rootData,
    isFetching
  } = (0,_requests__WEBPACK_IMPORTED_MODULE_6__.useRootData)(getRootData, queryOptions);

  const onNodeToggle = (_event, nodeIds) => {
    onToggle(nodeIds);
  };

  const onNodeSelect = (_event, selection) => {
    onSelect(selection);
  };

  const makeChildren = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(data => {
    if (!data) return null;
    return data.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_EnrichedTreeItem__WEBPACK_IMPORTED_MODULE_5__.EnrichedTreeItem, {
      label: label,
      id: item.id,
      data: item,
      key: `RootTreeItem ${item.id}`,
      fetchChildrenData: fetchChildrenData,
      expanded: expanded,
      selected: selected,
      toggleOnLabelClick: toggleOnLabelClick,
      onCheckBoxClick: onCheckBoxClick,
      onLabelClick: onLabelClick,
      withCheckbox: multiselect,
      ticked: ticked,
      parentsTicked: parentsTicked,
      scrollIntoView: scrollIntoView,
      allowSelection: allowSelection,
      queryOptions: childrenQueryOptions
    }));
  }, [label, fetchChildrenData, expanded, selected, toggleOnLabelClick, onCheckBoxClick, onLabelClick, multiselect, ticked, parentsTicked, scrollIntoView]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_2__.TreeView, {
    classes: isFetching ? {
      root: classes.isFetching
    } : {
      root: classes.root
    },
    expanded: expanded,
    selected: selected,
    multiSelect: multiselect,
    onNodeSelect: onNodeSelect,
    onNodeToggle: onNodeToggle
  }, !isFetching && rootData && makeChildren(rootData), isFetching && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 100
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.CircularProgress, null)));
};

IasoTreeView.propTypes = {
  getChildrenData: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,
  getRootData: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,
  label: prop_types__WEBPACK_IMPORTED_MODULE_0__.func.isRequired,
  // a function that will return the label, including additional icons
  multiselect: prop_types__WEBPACK_IMPORTED_MODULE_0__.bool,
  toggleOnLabelClick: prop_types__WEBPACK_IMPORTED_MODULE_0__.bool,
  expanded: (0,prop_types__WEBPACK_IMPORTED_MODULE_0__.arrayOf)(prop_types__WEBPACK_IMPORTED_MODULE_0__.string).isRequired,
  onToggle: prop_types__WEBPACK_IMPORTED_MODULE_0__.func.isRequired,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,
  onCheckBoxClick: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,
  onLabelClick: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,
  selected: (0,prop_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_0__.string, (0,prop_types__WEBPACK_IMPORTED_MODULE_0__.arrayOf)(prop_types__WEBPACK_IMPORTED_MODULE_0__.string)]),
  ticked: (0,prop_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_0__.string, (0,prop_types__WEBPACK_IMPORTED_MODULE_0__.arrayOf)(prop_types__WEBPACK_IMPORTED_MODULE_0__.string)]),
  parentsTicked: prop_types__WEBPACK_IMPORTED_MODULE_0__.array,
  scrollIntoView: prop_types__WEBPACK_IMPORTED_MODULE_0__.string,
  allowSelection: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,
  queryOptions: prop_types__WEBPACK_IMPORTED_MODULE_0__.object,
  childrenQueryOptions: prop_types__WEBPACK_IMPORTED_MODULE_0__.object
};
IasoTreeView.defaultProps = {
  getChildrenData: () => {},
  getRootData: () => {},
  multiselect: false,
  toggleOnLabelClick: true,
  onSelect: () => {},
  onCheckBoxClick: () => {},
  onLabelClick: () => {},
  selected: undefined,
  ticked: [],
  parentsTicked: [],
  scrollIntoView: null,
  allowSelection: () => true,
  queryOptions: {},
  childrenQueryOptions: {}
};


/***/ }),

/***/ "./src/components/Treeview/TreeViewResultsCountSelect.js":
/*!***************************************************************!*\
  !*** ./src/components/Treeview/TreeViewResultsCountSelect.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeViewResultsCountSelect": () => (/* binding */ TreeViewResultsCountSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _table_Table_PageRowSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../table/Table/PageRowSelect */ "./src/components/table/Table/PageRowSelect.js");



const ROWS_PER_PAGE_OPTIONS = [5, 10, 20, 30, 40, 50];
const TreeViewResultsCountSelect = ({
  resultsCount,
  handleSelect,
  countOptions
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_table_Table_PageRowSelect__WEBPACK_IMPORTED_MODULE_2__.PageRowSelect, {
  rowsPerPageOptions: countOptions,
  rowsPerPage: resultsCount,
  selectRowsPerPage: handleSelect
});
TreeViewResultsCountSelect.propTypes = {
  countOptions: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.arrayOf)(prop_types__WEBPACK_IMPORTED_MODULE_1__.number),
  resultsCount: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  handleSelect: prop_types__WEBPACK_IMPORTED_MODULE_1__.func
};
TreeViewResultsCountSelect.defaultProps = {
  countOptions: ROWS_PER_PAGE_OPTIONS,
  handleSelect: () => null,
  resultsCount: ROWS_PER_PAGE_OPTIONS[2]
};

/***/ }),

/***/ "./src/components/Treeview/TreeViewWithSearch.js":
/*!*******************************************************!*\
  !*** ./src/components/Treeview/TreeViewWithSearch.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TreeViewWithSearch": () => (/* binding */ TreeViewWithSearch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DynamicSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DynamicSelect */ "./src/components/Treeview/DynamicSelect.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./messages */ "./src/components/Treeview/messages.js");
/* harmony import */ var _IasoTreeView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IasoTreeView */ "./src/components/Treeview/IasoTreeView.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./src/components/Treeview/utils.js");







const formatInitialSelectedData = selectedData => {
  if (!selectedData) return [];
  if (!Array.isArray(selectedData)) return [selectedData];
  return selectedData;
};

const TreeViewWithSearch = ({
  label,
  getChildrenData,
  getRootData,
  toggleOnLabelClick,
  onSelect,
  minResultCount,
  inputLabelObject,
  withSearchButton,
  request,
  makeDropDownText,
  toolTip,
  parseNodeIds,
  onUpdate,
  multiselect,
  preselected,
  // TODO rename
  preexpanded,
  // TODO rename
  selectedData,
  allowSelection
}) => {
  const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(formatInitialSelectedData(selectedData));
  const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(preselected || (multiselect ? [] : ''));
  const [expanded, setExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils__WEBPACK_IMPORTED_MODULE_5__.adaptMap)(preexpanded) ?? []);
  const [ticked, setTicked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(preselected ?? []);
  const [parentsTicked, setParentsTicked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(preexpanded ?? new Map());
  const [scrollIntoView, setScrollIntoView] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!Array.isArray(preselected) ? preselected : null);
  const onNodeSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(selection => {
    setSelected(selection);

    if (multiselect) {
      // disabling when multiselect to avoid allowing user to confirm data while boxes are unticked
      onSelect(selection);
    }
  }, [onSelect, multiselect]); // Tick and untick checkbox

  const onLabelClick = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((id, itemData, isSelectable) => {
    let newTicked;
    let updatedParents;
    let updatedSelectedData;

    if (isSelectable) {
      if (multiselect) {
        newTicked = ticked.includes(id) ? ticked.filter(tickedId => tickedId !== id) : [...ticked, id];
      } else {
        newTicked = [id];
      }

      setTicked(newTicked);
    }

    if (multiselect) {
      updatedParents = new Map(parentsTicked);
    } else {
      updatedParents = new Map();
    }

    if (parentsTicked.has(id)) {
      updatedParents.delete(id);
      updatedSelectedData = (data === null || data === void 0 ? void 0 : data.filter(d => d.id !== id)) ?? [];
    } else {
      updatedParents.set(id, parseNodeIds(itemData));

      if (multiselect) {
        updatedSelectedData = [...data, itemData];
      } else {
        updatedSelectedData = [itemData];
      }
    }

    onUpdate(newTicked, updatedParents, updatedSelectedData);
    setParentsTicked(updatedParents);
    setData(updatedSelectedData);
  }, [onUpdate, ticked, parentsTicked, multiselect, data, parseNodeIds]);
  const onSearchSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)( // this is an org unit so you can access the parents here
  searchSelection => {
    const ancestors = parseNodeIds(searchSelection);
    const idsToExpand = Array.from(ancestors.keys()).map(id => id.toString());
    const currentId = idsToExpand[idsToExpand.length - 1]; // Not expanding the last selected item as it messes with the scrollIntoView

    idsToExpand.pop();

    if (multiselect) {
      setExpanded([...expanded, ...idsToExpand]);
      const newSelected = [...selected, currentId];
      onNodeSelect(newSelected);
    } else {
      setExpanded(idsToExpand);
      const newParentsTicked = new Map();
      newParentsTicked.set(currentId, ancestors);
      onNodeSelect(currentId);
      setData([searchSelection]); // We don't call it in multiselect because it will only be called on label click
      // We use it here to auto select the search item selected

      onUpdate(currentId, newParentsTicked, [searchSelection]);
    }

    setScrollIntoView(currentId);
  }, [parseNodeIds, onNodeSelect, selected, onUpdate, expanded, multiselect]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DynamicSelect__WEBPACK_IMPORTED_MODULE_2__.DynamicSelect, {
    onSelect: onSearchSelect,
    minResultCount: minResultCount,
    inputLabelObject: inputLabelObject,
    withSearchButton: withSearchButton,
    request: request,
    makeDropDownText: makeDropDownText,
    toolTip: toolTip
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_IasoTreeView__WEBPACK_IMPORTED_MODULE_4__.IasoTreeView, {
    label: label,
    getChildrenData: getChildrenData,
    getRootData: getRootData,
    toggleOnLabelClick: toggleOnLabelClick,
    selected: selected,
    onSelect: onNodeSelect,
    expanded: expanded,
    onToggle: setExpanded,
    onLabelClick: onLabelClick,
    multiselect: multiselect,
    ticked: ticked,
    parentsTicked: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.adaptMap)(parentsTicked),
    scrollIntoView: scrollIntoView,
    allowSelection: allowSelection
  }));
};

TreeViewWithSearch.propTypes = {
  getChildrenData: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  getRootData: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  toggleOnLabelClick: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  onSelect: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  minResultCount: prop_types__WEBPACK_IMPORTED_MODULE_1__.number,
  inputLabelObject: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  withSearchButton: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  request: prop_types__WEBPACK_IMPORTED_MODULE_1__.func.isRequired,
  makeDropDownText: prop_types__WEBPACK_IMPORTED_MODULE_1__.func.isRequired,
  toolTip: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  parseNodeIds: prop_types__WEBPACK_IMPORTED_MODULE_1__.func.isRequired,
  onUpdate: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  multiselect: prop_types__WEBPACK_IMPORTED_MODULE_1__.bool,
  preselected: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_1__.string, prop_types__WEBPACK_IMPORTED_MODULE_1__.array]),
  // preexpanded is a Map
  preexpanded: prop_types__WEBPACK_IMPORTED_MODULE_1__.any,
  selectedData: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_1__.object, prop_types__WEBPACK_IMPORTED_MODULE_1__.array]),
  label: prop_types__WEBPACK_IMPORTED_MODULE_1__.func.isRequired,
  allowSelection: prop_types__WEBPACK_IMPORTED_MODULE_1__.func
};
TreeViewWithSearch.defaultProps = {
  getChildrenData: () => {},
  getRootData: () => {},
  toggleOnLabelClick: true,
  onSelect: () => {},
  minResultCount: 50,
  inputLabelObject: _messages__WEBPACK_IMPORTED_MODULE_3__.MESSAGES.search,
  withSearchButton: false,
  toolTip: null,
  onUpdate: () => {},
  multiselect: false,
  preselected: null,
  preexpanded: null,
  selectedData: [],
  allowSelection: () => true
};


/***/ }),

/***/ "./src/components/Treeview/TruncatedTreeview.js":
/*!******************************************************!*\
  !*** ./src/components/Treeview/TruncatedTreeview.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TruncatedTreeview": () => (/* binding */ TruncatedTreeview)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab */ "@material-ui/lab");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowRight */ "@material-ui/icons/ArrowRight");
/* harmony import */ var _material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowDropDown */ "@material-ui/icons/ArrowDropDown");
/* harmony import */ var _material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







const alignTailIcon = {
  display: 'flex',
  alignItems: 'center'
};
const removeBackgroundOnTabNav = {
  '&.MuiTreeItem-root:focus > .MuiTreeItem-content .MuiTreeItem-label': {
    backgroundColor: 'white'
  }
};

const treeItemStyle = _objectSpread({
  '& .MuiTreeItem-label': _objectSpread(_objectSpread({}, alignTailIcon), {}, {
    paddingLeft: '0px'
  })
}, removeBackgroundOnTabNav); // TODO remove repetitions


const styles = theme => ({
  truncatedTreeview: {
    color: theme.palette.mediumGray.main
  },
  singleTreeItem: _objectSpread(_objectSpread({}, treeItemStyle), {}, {
    color: theme.palette.gray.main
  }),
  truncatedTreeviewItem: _objectSpread(_objectSpread({}, treeItemStyle), {}, {
    color: theme.palette.mediumGray.main
  }),
  lastTreeItem: _objectSpread(_objectSpread({
    '& .MuiTreeItem-label': _objectSpread({}, alignTailIcon)
  }, removeBackgroundOnTabNav), {}, {
    color: theme.palette.gray.main
  })
});

const determineClassName = (items, nextItems, style) => {
  if (items.size === 1) return style.singleTreeItem;
  if (nextItems.size === 0) return style.lastTreeItem;
  return style.truncatedTreeviewItem;
};

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(styles);

const TruncatedTreeview = ({
  selectedItems,
  label,
  redirect
}) => {
  const style = useStyles();
  const mouseDownTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  const onLabelClick = id => e => {
    e.preventDefault();

    if (new Date() - mouseDownTime.current < 150) {
      redirect(id);
    }
  };

  const makeTreeItems = (items, initialItems) => {
    if (items.size === 0) return null;
    const nextItems = new Map(items); // first entry of the map in the form of an array: [key,value]

    const item = nextItems.entries().next().value;
    nextItems.delete(item[0]);
    const className = determineClassName(initialItems, nextItems, style);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__.TreeItem, {
      key: item[0].toString() + nextItems.size.toString(),
      className: className,
      onIconClick: e => e.preventDefault(),
      onLabelClick: onLabelClick(item[0]),
      collapseIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_6___default()), {
        style: {
          fontSize: 'large'
        }
      }),
      expandIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_ArrowRight__WEBPACK_IMPORTED_MODULE_5___default()), {
        style: {
          fontSize: 'large'
        }
      }),
      label: label(item[1]),
      nodeId: item[0],
      disabled: true
    }, items.size >= 1 ? makeTreeItems(nextItems, initialItems) : null);
  };

  const expanded = Array.from(selectedItems.keys()).map(item => item.toString()) ?? [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__.TreeView, {
    onMouseDown: () => {
      mouseDownTime.current = new Date();
    },
    disableSelection: true,
    expanded: expanded,
    className: style.truncatedTreeview
  }, makeTreeItems(selectedItems, selectedItems));
};

TruncatedTreeview.propTypes = {
  // in fact a nested map : {orgUnitId:{parentId:parentName}}
  selectedItems: prop_types__WEBPACK_IMPORTED_MODULE_2__.any,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2__.func.isRequired,
  redirect: prop_types__WEBPACK_IMPORTED_MODULE_2__.func
};
TruncatedTreeview.defaultProps = {
  selectedItems: null,
  redirect: () => null
};


/***/ }),

/***/ "./src/components/Treeview/messages.js":
/*!*********************************************!*\
  !*** ./src/components/Treeview/messages.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MESSAGES": () => (/* binding */ MESSAGES)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);

const MESSAGES = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  loading: {
    id: "blsq.treeview.loading",
    defaultMessage: "Loading"
  },
  confirm: {
    id: "blsq.treeview.search.confirm",
    defaultMessage: "Confirm"
  },
  cancel: {
    id: "blsq.treeview.search.cancel",
    defaultMessage: "Cancel"
  },
  selectSingle: {
    id: "blsq.treeview.label.selectSingle",
    defaultMessage: "Select an org unit"
  },
  selectMultiple: {
    id: "blsq.treeview.label.selectMultiple",
    defaultMessage: "Select org unit(s)"
  },
  display: {
    id: "blsq.treeview.search.results.label.display",
    defaultMessage: "Display"
  },
  resultsLower: {
    id: "blsq.treeview.search.results.label.resultsLower",
    defaultMessage: "result(s)"
  },
  noOptions: {
    id: "blsq.treeview.search.options.label.noOptions",
    defaultMessage: "No result found"
  },
  clear: {
    id: "blsq.treeview.search.options.label.clear",
    defaultMessage: "Clear"
  },
  search: {
    id: "blsq.treeview.search.inputLabelObject",
    defaultMessage: "Enter search term"
  }
});


/***/ }),

/***/ "./src/components/Treeview/requests.js":
/*!*********************************************!*\
  !*** ./src/components/Treeview/requests.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useChildrenData": () => (/* binding */ useChildrenData),
/* harmony export */   "useRootData": () => (/* binding */ useRootData),
/* harmony export */   "useTreeviewSearch": () => (/* binding */ useTreeviewSearch)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "react-query");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


const useChildrenData = ({
  request,
  id,
  options
}) => (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(['getChildrenData', request, id], async () => request(id), _objectSpread({
  retry: false
}, options));
const useRootData = (request, options = {}) => (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(['getRootData', request], async () => request(), _objectSpread(_objectSpread({
  retry: false
}, options), {}, {
  keepPreviousData: false
}));
const useTreeviewSearch = ({
  request,
  searchValue,
  resultsCount,
  options
}) => (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)(['TreeviewSearch', request, searchValue, resultsCount], async () => {
  const queryResult = await request(searchValue, resultsCount);
  return queryResult;
}, // keepPreviousData=true avoids flicker when changing resultsCount
_objectSpread(_objectSpread({
  initialData: [],
  retry: false
}, options), {}, {
  keepPreviousData: true
}));

/***/ }),

/***/ "./src/components/Treeview/utils.js":
/*!******************************************!*\
  !*** ./src/components/Treeview/utils.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "adaptMap": () => (/* binding */ adaptMap)
/* harmony export */ });
const adaptMap = value => {
  if (!value) return null;
  return Array.from(value.entries()) // original map in array form [[key1, entry1],[key2, entry2]]
  .map(entry => Array.from(entry[1].keys())) // 2D array containing the keys of each entry from comment above: [[entry1Key1, entry1Key2],[entry2Key1,entry2Key2]]
  .map(keys => keys.map(key => key.toString()) // [["entry1Key1"],["entry2Key1"]]. String conversion needed for Treeview
  .filter((key, _index, keyArray) => key !== keyArray[keyArray.length - 1]) // removing last entry in the array to avoid expanding it
  ).flat();
};

/***/ }),

/***/ "./src/components/buttons/AddButton/index.js":
/*!***************************************************!*\
  !*** ./src/components/buttons/AddButton/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddButton": () => (/* binding */ styledAddButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_iaso_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/iaso/common */ "./src/styles/iaso/common.js");
/* harmony import */ var _utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/useSafeIntl */ "./src/utils/useSafeIntl.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./src/components/buttons/AddButton/messages.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









const styles = theme => _objectSpread({}, (0,_styles_iaso_common__WEBPACK_IMPORTED_MODULE_5__.commonStyles)(theme));

function AddButtonComponent({
  classes,
  onClick,
  message,
  id,
  dataTestId
}) {
  const intl = (0,_utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_6__.useSafeIntl)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "contained",
    className: classes.button,
    color: "primary",
    onClick: onClick,
    id: id,
    "data-test": dataTestId
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: classes.buttonIcon
  }), intl.formatMessage(message));
}

AddButtonComponent.defaultProps = {
  message: _messages__WEBPACK_IMPORTED_MODULE_7__.MESSAGES.create,
  id: '',
  dataTestId: ''
};
AddButtonComponent.propTypes = {
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  message: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  // TODO: make a message prop type
  id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  dataTestId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
const styledAddButton = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.withStyles)(styles)(AddButtonComponent);


/***/ }),

/***/ "./src/components/buttons/AddButton/messages.js":
/*!******************************************************!*\
  !*** ./src/components/buttons/AddButton/messages.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MESSAGES": () => (/* binding */ MESSAGES)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);

const MESSAGES = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  create: {
    id: "blsq.button.label.create",
    defaultMessage: "Create"
  }
});


/***/ }),

/***/ "./src/components/buttons/ExportButton/index.js":
/*!******************************************************!*\
  !*** ./src/components/buttons/ExportButton/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExportButton": () => (/* binding */ styledExportButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_CallMade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/CallMade */ "@material-ui/icons/CallMade");
/* harmony import */ var _material_ui_icons_CallMade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CallMade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_iaso_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/iaso/common */ "./src/styles/iaso/common.js");
/* harmony import */ var _utils_injectIntl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/injectIntl */ "./src/utils/injectIntl.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./src/components/buttons/ExportButton/messages.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









const styles = theme => _objectSpread(_objectSpread({}, (0,_styles_iaso_common__WEBPACK_IMPORTED_MODULE_5__.commonStyles)(theme)), {}, {
  button: {
    marginLeft: theme.spacing(2),
    '& svg, & i': {
      marginRight: theme.spacing(1)
    }
  }
}); // TODO refactor to useSafeIntl instead?


function ExportButtonComponent({
  classes,
  intl,
  onClick,
  message,
  isDisabled,
  batchExport,
  id
}) {
  return batchExport ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "contained",
    className: classes.button,
    color: "primary",
    onClick: onClick,
    disabled: isDisabled,
    id: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_CallMade__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: classes.buttonIcon
  }), intl.formatMessage(message)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_CallMade__WEBPACK_IMPORTED_MODULE_3___default()), {
    onClick: onClick,
    disabled: isDisabled
  });
}

ExportButtonComponent.defaultProps = {
  message: _messages__WEBPACK_IMPORTED_MODULE_7__.MESSAGES["export"],
  isDisabled: false,
  id: ''
};
ExportButtonComponent.propTypes = {
  intl: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  isDisabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  batchExport: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired),
  message: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  // TODO: make a message prop type
  id: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
const styledExportButton = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.withStyles)(styles)((0,_utils_injectIntl__WEBPACK_IMPORTED_MODULE_6__.injectIntl)(ExportButtonComponent));


/***/ }),

/***/ "./src/components/buttons/ExportButton/messages.js":
/*!*********************************************************!*\
  !*** ./src/components/buttons/ExportButton/messages.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MESSAGES": () => (/* binding */ MESSAGES)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);

const MESSAGES = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  export: {
    id: "blsq.button.label.export",
    defaultMessage: "Export"
  }
});


/***/ }),

/***/ "./src/components/buttons/IconButton/index.js":
/*!****************************************************!*\
  !*** ./src/components/buttons/IconButton/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IconButton": () => (/* binding */ styledIconButton)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "@material-ui/icons/FilterList");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_CallMerge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/CallMerge */ "@material-ui/icons/CallMerge");
/* harmony import */ var _material_ui_icons_CallMerge__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CallMerge__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_RemoveRedEye__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/RemoveRedEye */ "@material-ui/icons/RemoveRedEye");
/* harmony import */ var _material_ui_icons_RemoveRedEye__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveRedEye__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/Edit */ "@material-ui/icons/Edit");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_History__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/History */ "@material-ui/icons/History");
/* harmony import */ var _material_ui_icons_History__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_History__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_Map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Map */ "@material-ui/icons/Map");
/* harmony import */ var _material_ui_icons_Map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Map__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_CachedRounded__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/CachedRounded */ "@material-ui/icons/CachedRounded");
/* harmony import */ var _material_ui_icons_CachedRounded__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CachedRounded__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_StopRounded__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/StopRounded */ "@material-ui/icons/StopRounded");
/* harmony import */ var _material_ui_icons_StopRounded__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_StopRounded__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/GetApp */ "@material-ui/icons/GetApp");
/* harmony import */ var _material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_RestoreFromTrash__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/RestoreFromTrash */ "@material-ui/icons/RestoreFromTrash");
/* harmony import */ var _material_ui_icons_RestoreFromTrash__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RestoreFromTrash__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_Public__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Public */ "@material-ui/icons/Public");
/* harmony import */ var _material_ui_icons_Public__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Public__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Clear */ "@material-ui/icons/Clear");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_ClearAll__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/ClearAll */ "@material-ui/icons/ClearAll");
/* harmony import */ var _material_ui_icons_ClearAll__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ClearAll__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _svg_XmlSvgComponent__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../svg/XmlSvgComponent */ "./src/svg/XmlSvgComponent.js");
/* harmony import */ var _svg_DHIS2SvgComponent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../svg/DHIS2SvgComponent */ "./src/svg/DHIS2SvgComponent.js");
/* harmony import */ var _svg_OrgUnitSvgComponent__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../svg/OrgUnitSvgComponent */ "./src/svg/OrgUnitSvgComponent.js");
/* harmony import */ var _svg_ExcellSvgComponent__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../svg/ExcellSvgComponent */ "./src/svg/ExcellSvgComponent.js");
/* harmony import */ var _styles_iaso_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../styles/iaso/common */ "./src/styles/iaso/common.js");
/* harmony import */ var _LinkProvider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../LinkProvider */ "./src/components/LinkProvider/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

























const ICON_VARIANTS = {
  delete: (_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default()),
  'filter-list': (_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_7___default()),
  'call-merge': (_material_ui_icons_CallMerge__WEBPACK_IMPORTED_MODULE_8___default()),
  'remove-red-eye': (_material_ui_icons_RemoveRedEye__WEBPACK_IMPORTED_MODULE_9___default()),
  'restore-from-trash': (_material_ui_icons_RestoreFromTrash__WEBPACK_IMPORTED_MODULE_16___default()),
  edit: (_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_10___default()),
  history: (_material_ui_icons_History__WEBPACK_IMPORTED_MODULE_11___default()),
  map: (_material_ui_icons_Map__WEBPACK_IMPORTED_MODULE_12___default()),
  xml: _svg_XmlSvgComponent__WEBPACK_IMPORTED_MODULE_20__.XmlSvg,
  dhis: _svg_DHIS2SvgComponent__WEBPACK_IMPORTED_MODULE_21__.DHIS2Svg,
  orgUnit: _svg_OrgUnitSvgComponent__WEBPACK_IMPORTED_MODULE_22__.OrgUnitSvg,
  refresh: (_material_ui_icons_CachedRounded__WEBPACK_IMPORTED_MODULE_13___default()),
  stop: (_material_ui_icons_StopRounded__WEBPACK_IMPORTED_MODULE_14___default()),
  xls: _svg_ExcellSvgComponent__WEBPACK_IMPORTED_MODULE_23__.ExcellSvg,
  download: (_material_ui_icons_GetApp__WEBPACK_IMPORTED_MODULE_15___default()),
  globe: (_material_ui_icons_Public__WEBPACK_IMPORTED_MODULE_17___default()),
  clear: (_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_18___default()),
  clearAll: (_material_ui_icons_ClearAll__WEBPACK_IMPORTED_MODULE_19___default())
};

const styles = theme => _objectSpread(_objectSpread({}, (0,_styles_iaso_common__WEBPACK_IMPORTED_MODULE_24__.commonStyles)(theme)), {}, {
  white: {
    color: 'white'
  },
  popperFixed: _objectSpread(_objectSpread({}, (0,_styles_iaso_common__WEBPACK_IMPORTED_MODULE_24__.commonStyles)(theme).popperFixed), {}, {
    marginTop: theme.spacing(1)
  })
});

const ButtonIcon = ({
  icon: Icon,
  color,
  onClick,
  disabled
}) => {
  if (Icon === undefined) {
    return 'wrong icon';
  }

  const iconProps = onClick !== null ? {
    onClick
  } : {}; // special override for white color, which is not a "theme" variant such as primary, secondary or action

  const iconStyles = {
    color: color === 'white' ? color : undefined,
    opacity: disabled ? 0.5 : 1
  }; // const iconStyles = color === 'white' ? { color: 'white' } : {};

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Icon, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, iconProps, {
    color: color === 'white' ? 'inherit' : color,
    style: iconStyles
  }));
};

ButtonIcon.defaultProps = {
  onClick: null,
  disabled: false
};
ButtonIcon.propTypes = {
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]).isRequired,
  color: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};

function IconButtonComponent({
  classes,
  disabled,
  onClick,
  url,
  icon: iconName,
  overrideIcon,
  tooltipMessage,
  color,
  size,
  id,
  dataTestId
}) {
  if (onClick === null === (url === null)) {
    console.error('IconButtonComponent needs either the onClick or the url property');
  }

  if (!iconName && !overrideIcon) {
    console.error('IconButtonComponent has to be provided with an icon');
  }

  const Link = (0,_LinkProvider__WEBPACK_IMPORTED_MODULE_25__.useLink)();
  const icon = overrideIcon ?? ICON_VARIANTS[iconName]; // The <span> is needed so the tooltip correctly display when the button is disabled

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.Tooltip, {
    classes: {
      popper: classes.popperFixed
    },
    disableFocusListener: disabled,
    disableHoverListener: disabled,
    disableTouchListener: disabled,
    placement: "bottom",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, tooltipMessage)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("span", {
    id: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.IconButton, {
    disabled: disabled,
    onClick: onClick,
    size: size,
    "data-test": dataTestId
  }, url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Link, {
    to: url,
    className: classes.linkButton
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ButtonIcon, {
    icon: icon,
    color: color
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(ButtonIcon, {
    icon: icon,
    color: color,
    disabled: disabled
  }))));
}

IconButtonComponent.defaultProps = {
  disabled: false,
  url: null,
  onClick: null,
  color: 'action',
  size: 'medium',
  overrideIcon: null,
  icon: null,
  id: '',
  dataTestId: ''
};
IconButtonComponent.propTypes = {
  size: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  url: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(Object.keys(ICON_VARIANTS)),
  color: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  overrideIcon: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any),
  tooltipMessage: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),
  // TODO: refactor IASO to pass the translation directly
  id: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  dataTestId: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
const styledIconButton = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.withStyles)(styles)(IconButtonComponent);


/***/ }),

/***/ "./src/components/comments/AddComment/index.js":
/*!*****************************************************!*\
  !*** ./src/components/comments/AddComment/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddComment": () => (/* binding */ AddComment)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/useSafeIntl */ "./src/utils/useSafeIntl.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/components/comments/AddComment/messages.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/components/comments/AddComment/styles.js");







const AddComment = ({
  placeholder,
  minRows,
  maxRows,
  onChange,
  className,
  buttonText,
  onConfirm,
  position,
  inline
}) => {
  const [comment, setComment] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_5__.useStyles)();
  const intl = (0,_utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_3__.useSafeIntl)();
  const handleConfirm = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {
    onConfirm(comment);
    setComment('');
  }, [comment]);

  const handleChange = e => {
    setComment(e.target.value);
    onChange(e.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Grid, {
    container: true,
    direction: inline ? 'row' : 'column',
    alignItems: "center",
    spacing: 2,
    className: position ? classes[position] : null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Grid, {
    item: true,
    className: classes.textAreaContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.TextareaAutosize, {
    className: className ?? classes.textArea,
    minRows: minRows,
    maxRows: maxRows,
    "aria-label": "write comment here",
    placeholder: placeholder ?? intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__.MESSAGES.textAreaPlaceholder),
    onChange: handleChange,
    value: comment,
    autoFocus: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Grid, {
    item: true,
    className: classes.commentConfirmButton
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.Button, {
    onClick: handleConfirm,
    variant: "contained",
    color: "primary"
  }, buttonText ?? intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__.MESSAGES.confirmComment))));
};

AddComment.propTypes = {
  placeholder: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  minRows: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  maxRows: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onConfirm: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  buttonText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  position: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  inline: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};
AddComment.defaultProps = {
  placeholder: null,
  minRows: 3,
  maxRows: 5,
  onChange: () => {},
  className: null,
  buttonText: null,
  onConfirm: () => {},
  position: '',
  inline: true
};


/***/ }),

/***/ "./src/components/comments/AddComment/messages.js":
/*!********************************************************!*\
  !*** ./src/components/comments/AddComment/messages.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MESSAGES": () => (/* binding */ MESSAGES)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);

const MESSAGES = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  textAreaPlaceholder: {
    id: "blsq.comment.textArea.placeholder",
    defaultMessage: "Leave a comment here"
  },
  confirmComment: {
    id: "blsq.comment.confirmComment",
    defaultMessage: "Confirm"
  }
});


/***/ }),

/***/ "./src/components/comments/AddComment/styles.js":
/*!******************************************************!*\
  !*** ./src/components/comments/AddComment/styles.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "useStyles": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_iaso_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/iaso/common */ "./src/styles/iaso/common.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const styles = theme => _objectSpread(_objectSpread({}, (0,_styles_iaso_common__WEBPACK_IMPORTED_MODULE_2__.commonStyles)(theme)), {}, {
  textAreaContainer: {
    width: '100%',
    marginTop: '20px'
  },
  textArea: {
    width: '100%',
    borderRadius: '6px',
    borderColor: '#A2A2A2',
    padding: '8px',
    resize: 'vertical'
  },
  left: {
    textAlign: 'left'
  },
  right: {
    textAlign: 'right'
  },
  center: {
    textAlign: 'center'
  },
  commentConfirmButton: {
    marginBottom: '20px',
    marginLeft: 'auto'
  },
  button: {
    color: '#fff',
    backgroundColor: '#3f51b5'
  }
});

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(styles);


/***/ }),

/***/ "./src/components/comments/Comment/index.js":
/*!**************************************************!*\
  !*** ./src/components/comments/Comment/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Comment": () => (/* binding */ Comment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/useSafeIntl */ "./src/utils/useSafeIntl.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages */ "./src/components/comments/Comment/messages.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles */ "./src/components/comments/styles.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");








const MAX_TEXT_LENGTH = 150;

const CommentText = ({
  text,
  hideOverflow,
  toggle,
  maxLength,
  textExpand,
  textCollapse
}) => {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_6__.useStyles)();
  const intl = (0,_utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_4__.useSafeIntl)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.commentText
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, hideOverflow && text.length > maxLength ? (0,_utils__WEBPACK_IMPORTED_MODULE_7__.truncateText)(text, MAX_TEXT_LENGTH) : text, ' '), hideOverflow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: toggle,
    className: classes.toggleCommentText,
    role: "button",
    tabIndex: 0
  }, textExpand ?? intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_5__.MESSAGES.textExpand)), !hideOverflow && text.length > maxLength && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    onClick: toggle,
    className: classes.toggleCommentText,
    role: "button",
    tabIndex: 0
  }, textCollapse ?? intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_5__.MESSAGES.textCollapse)));
};

CommentText.propTypes = {
  text: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  hideOverflow: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  toggle: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  maxLength: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  textExpand: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  textCollapse: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};
CommentText.defaultProps = {
  textExpand: null,
  textCollapse: null
}; // credit: https://codesandbox.io/s/comment-box-with-material-ui-10p3c?file=/src/index.js:2810-4030

const Comment = ({
  avatar,
  author,
  content,
  postingTime,
  classNames
}) => {
  const intl = (0,_utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_4__.useSafeIntl)();
  const defaultClasses = (0,_styles__WEBPACK_IMPORTED_MODULE_6__.useStyles)();
  const [hideTextOverflow, setHideTextOverflow] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(content.length > MAX_TEXT_LENGTH);
  const toggleOverflowDisplay = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => setHideTextOverflow(!hideTextOverflow), [hideTextOverflow]);
  const classes = classNames ?? defaultClasses;
  const formattedPostingTime = `${intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_5__.MESSAGES.postingTime)}  ${moment__WEBPACK_IMPORTED_MODULE_3___default()(postingTime).fromNow()}`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    container: true,
    wrap: "nowrap",
    spacing: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Avatar, {
    alt: author,
    src: avatar
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Grid, {
    className: classes.commentGrid,
    item: true,
    xs: true,
    zeroMinWidth: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h4", {
    className: classes.commentAuthor
  }, author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CommentText, {
    text: content,
    hideOverflow: hideTextOverflow,
    toggle: toggleOverflowDisplay,
    maxLength: MAX_TEXT_LENGTH
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
    variant: "body2",
    className: classes.commentPostingTime,
    component: "div"
  }, formattedPostingTime)));
};

Comment.propTypes = {
  avatar: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  author: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  content: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  postingTime: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  classNames: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string))
};
Comment.defaultProps = {
  avatar: null,
  postingTime: '',
  classNames: null
};


/***/ }),

/***/ "./src/components/comments/Comment/messages.js":
/*!*****************************************************!*\
  !*** ./src/components/comments/Comment/messages.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MESSAGES": () => (/* binding */ MESSAGES)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);

const MESSAGES = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  textExpand: {
    id: "blsq.comment.button.textExpand",
    defaultMessage: "See more"
  },
  textCollapse: {
    id: "blsq.comment.button.textCollapse",
    defaultMessage: "See less"
  },
  postingTime: {
    id: "blsq.comment.postingTime",
    defaultMessage: "Posted:"
  }
});


/***/ }),

/***/ "./src/components/comments/CommentWithThread/index.js":
/*!************************************************************!*\
  !*** ./src/components/comments/CommentWithThread/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommentWithThread": () => (/* binding */ CommentWithThread)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles */ "./src/components/comments/styles.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/components/comments/CommentWithThread/messages.js");
/* harmony import */ var _utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/useSafeIntl */ "./src/utils/useSafeIntl.js");
/* harmony import */ var _AddComment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../AddComment */ "./src/components/comments/AddComment/index.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Comment */ "./src/components/comments/Comment/index.js");
/* harmony import */ var _SingleComment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SingleComment */ "./src/components/comments/SingleComment/index.js");










const CommentWithThread = ({
  comments,
  actionText,
  onAddComment,
  parentId
}) => {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_3__.useStyles)();
  const intl = (0,_utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_5__.useSafeIntl)();
  const [addingComment, setAddingComment] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const toggleExpand = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    if (isExpanded) {
      setAddingComment(false);
    }

    setIsExpanded(!isExpanded);
  }, [isExpanded]);

  const toggleAddComment = () => {
    setAddingComment(true);
    setIsExpanded(true);
  };

  const handleConfirm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newComment => {
    setAddingComment(false);
    onAddComment(newComment, parentId);
  }, [onAddComment, parentId]);
  const handleSingleCommentConfirm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((newComment, id) => {
    setAddingComment(false);
    setIsExpanded(true);
    onAddComment(newComment, id);
  }, [onAddComment]);

  const makeComment = array => {
    if (array.length === 1) {// const { author, dateTime, id, comment } = array[0];
      // return (
      //     <SingleComment
      //         onAddComment={handleSingleCommentConfirm}
      //         author={author}
      //         content={comment}
      //         postingTime={dateTime}
      //         id={id}
      //     />
      // );
    }

    return array.map((comment, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: `Fragment${comment.author}${comment.dateTime}${comment.id}` ?? 0,
      className: index === 0 ? '' : classes.childComment
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comment__WEBPACK_IMPORTED_MODULE_7__.Comment, {
      avatar: comment.avatar,
      author: comment.author,
      postingTime: comment.dateTime,
      content: comment.comment
    }), index === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.expandThread
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: toggleExpand,
      className: classes.button,
      size: "small"
    }, intl.formatMessage(isExpanded ? _messages__WEBPACK_IMPORTED_MODULE_4__.MESSAGES.collapse : _messages__WEBPACK_IMPORTED_MODULE_4__.MESSAGES.expand))), !addingComment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: classes.replyToComment
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: classes.button,
      size: "small",
      onClick: toggleAddComment
    }, actionText ?? intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__.MESSAGES.addReply))), index === comments.length - 1 && addingComment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AddComment__WEBPACK_IMPORTED_MODULE_6__.AddComment, {
      onConfirm: handleConfirm
    }), index < comments.length - 1 && isExpanded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Divider, {
      variant: "fullWidth",
      style: {
        margin: '30px 0'
      },
      key: `divider${comment.author}${comment.dateTime}${comment.id}` ?? 0
    })));
  };

  if (comments.length === 1) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SingleComment__WEBPACK_IMPORTED_MODULE_8__.SingleComment, {
      onAddComment: handleSingleCommentConfirm,
      author: comments[0].author,
      content: comments[0].comment,
      postingTime: comments[0].dateTime,
      id: comments[0].id // onButtonClick={() => {
      //     setIsExpanded(true);
      // }}

    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Paper, {
    className: classes.commentRoot,
    variant: "outlined",
    elevation: 1
  }, isExpanded ? makeComment(comments) : makeComment([comments[0]]));
};

CommentWithThread.propTypes = {
  comments: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  actionText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onAddComment: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  parentId: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
CommentWithThread.defaultProps = {
  comments: [],
  actionText: null,
  onAddComment: () => {},
  parentId: null
};


/***/ }),

/***/ "./src/components/comments/CommentWithThread/messages.js":
/*!***************************************************************!*\
  !*** ./src/components/comments/CommentWithThread/messages.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MESSAGES": () => (/* binding */ MESSAGES)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);

const MESSAGES = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  collapse: {
    id: "blsq.comment.button.label.collapse",
    defaultMessage: "Hide thread"
  },
  expand: {
    id: "blsq.comment.button.label.expand",
    defaultMessage: "Show thread"
  },
  addReply: {
    id: "blsq.comment.button.label.addReply",
    defaultMessage: "Add reply"
  }
});


/***/ }),

/***/ "./src/components/comments/SingleComment/index.js":
/*!********************************************************!*\
  !*** ./src/components/comments/SingleComment/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleComment": () => (/* binding */ SingleComment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/useSafeIntl */ "./src/utils/useSafeIntl.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages */ "./src/components/comments/SingleComment/messages.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles */ "./src/components/comments/styles.js");
/* harmony import */ var _AddComment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../AddComment */ "./src/components/comments/AddComment/index.js");
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Comment */ "./src/components/comments/Comment/index.js");







 // credit: https://codesandbox.io/s/comment-box-with-material-ui-10p3c?file=/src/index.js:2810-4030

const SingleComment = ({
  avatar,
  author,
  content,
  postingTime,
  classNames,
  actionText,
  onAddComment,
  id
}) => {
  const intl = (0,_utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_3__.useSafeIntl)();
  const defaultClasses = (0,_styles__WEBPACK_IMPORTED_MODULE_5__.useStyles)();
  const [addingComment, setAddingComment] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const classes = classNames ?? defaultClasses;
  const handleConfirm = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(newComment => {
    setAddingComment(false);
    onAddComment(newComment, id);
  }, [id, onAddComment]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Paper, {
    variant: "outlined",
    className: classes.commentRoot
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Comment__WEBPACK_IMPORTED_MODULE_7__.Comment, {
    avatar: avatar,
    author: author,
    postingTime: postingTime,
    content: content
  }), !addingComment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.replyToComment
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: classes.button,
    size: "small",
    onClick: () => {
      setAddingComment(true);
    }
  }, actionText ?? intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_4__.MESSAGES.reply))), addingComment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_AddComment__WEBPACK_IMPORTED_MODULE_6__.AddComment, {
    position: "right",
    onConfirm: handleConfirm
  }));
};

SingleComment.propTypes = {
  avatar: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  author: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  content: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  postingTime: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  classNames: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  actionText: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onAddComment: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};
SingleComment.defaultProps = {
  avatar: null,
  postingTime: '',
  classNames: null,
  actionText: null,
  onAddComment: () => {},
  id: null
};


/***/ }),

/***/ "./src/components/comments/SingleComment/messages.js":
/*!***********************************************************!*\
  !*** ./src/components/comments/SingleComment/messages.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MESSAGES": () => (/* binding */ MESSAGES)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);

const MESSAGES = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  reply: {
    id: "blsq.comment.button.reply",
    defaultMessage: "Reply"
  }
});


/***/ }),

/***/ "./src/components/comments/styles.js":
/*!*******************************************!*\
  !*** ./src/components/comments/styles.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "useStyles": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_iaso_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/iaso/common */ "./src/styles/iaso/common.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const styles = theme => {
  var _theme$mediumGray;

  return _objectSpread(_objectSpread({}, (0,_styles_iaso_common__WEBPACK_IMPORTED_MODULE_2__.commonStyles)(theme)), {}, {
    commentRoot: {
      padding: '10px 20px',
      margin: '0px 5px 5px 5px'
    },
    commentAuthor: {
      margin: 0,
      textAlign: 'left'
    },
    commentPostingTime: {
      textAlign: 'end',
      color: ((_theme$mediumGray = theme.mediumGray) === null || _theme$mediumGray === void 0 ? void 0 : _theme$mediumGray.main) ?? '#A2A2A2'
    },
    commentGrid: {
      justifyContent: 'left',
      padding: '0px 10px'
    },
    replyToComment: {
      textAlign: 'end'
    },
    commentText: {
      textAlign: 'justify',
      marginTop: '10px'
    },
    toggleCommentText: {
      alignSelf: 'end',
      cursor: 'default',
      color: '#3f51b5',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    expandThread: {
      textAlign: 'end'
    },
    button: {
      backgroundColor: '#fff',
      color: '#3f51b5'
    },
    childComment: {
      paddingLeft: '20px'
    }
  });
};

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(styles);


/***/ }),

/***/ "./src/components/inputs/ArrayFieldInput/index.js":
/*!********************************************************!*\
  !*** ./src/components/inputs/ArrayFieldInput/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayFieldInput": () => (/* binding */ styledArrayFieldInput)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/OutlinedInput */ "@material-ui/core/OutlinedInput");
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_iaso_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../styles/iaso/common */ "./src/styles/iaso/common.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }












const styles = theme => _objectSpread(_objectSpread({}, (0,_styles_iaso_common__WEBPACK_IMPORTED_MODULE_9__.commonStyles)(theme)), {}, {
  label: {
    top: theme.spacing(2),
    position: 'relative',
    color: theme.textColor,
    fontSize: 16
  },
  list: {
    width: '100%',
    padding: '0'
  },
  listItem: {
    height: 55,
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    padding: '0',
    marginBottom: theme.spacing(1)
  },
  addListItem: {
    height: 55,
    width: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0',
    marginBottom: theme.spacing(2)
  },
  input: {
    width: '95%',
    marginLeft: '5%'
  },
  deleteIcon: {
    position: 'absolute',
    right: theme.spacing(1)
  }
});

class ArrayFieldInput extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldList: (0,_utils__WEBPACK_IMPORTED_MODULE_10__.addPositionIndex)(props.fieldList)
    };
  } // eslint-disable-next-line camelcase


  UNSAFE_componentWillReceiveProps(newProps) {
    this.setState({
      fieldList: (0,_utils__WEBPACK_IMPORTED_MODULE_10__.addPositionIndex)(newProps.fieldList)
    });
  }

  updateField(value, fieldIndex) {
    const newFieldList = this.state.fieldList.slice();
    newFieldList[fieldIndex].value = value;
    this.props.updateList((0,_utils__WEBPACK_IMPORTED_MODULE_10__.removePositionIndex)(newFieldList));
  }

  addField() {
    const newFieldList = this.state.fieldList.slice();
    newFieldList.push({
      value: '',
      position: this.state.fieldList.length
    });
    this.props.updateList((0,_utils__WEBPACK_IMPORTED_MODULE_10__.removePositionIndex)(newFieldList));
  }

  removeField(fieldIndex) {
    const newFieldList = this.state.fieldList.slice();
    newFieldList.splice(fieldIndex, 1);
    this.props.updateList((0,_utils__WEBPACK_IMPORTED_MODULE_10__.removePositionIndex)(newFieldList));
  }

  render() {
    const {
      baseId,
      label,
      classes
    } = this.props;
    const {
      fieldList
    } = this.state;
    const addFieldButtonDisabled = fieldList.length > 0 && fieldList[fieldList.length - 1].value === '';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      container: true,
      spacing: 0,
      className: classes.marginTop
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      item: true,
      xs: 1
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
      className: classes.label
    }, label, ":")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Grid, {
      item: true,
      xs: 11
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Box, {
      id: `array-input-field-list-${baseId}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.List, {
      className: classes.list
    }, fieldList.map((a, fieldIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default()), {
      key: a.position,
      className: classes.listItem
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_5___default()), {
      className: classes.input,
      id: `${baseId}-${a.position}`,
      value: a.value || '',
      onChange: event => this.updateField(event.currentTarget.value, fieldIndex)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
      className: classes.deleteIcon,
      color: "inherit",
      onClick: () => this.removeField(fieldIndex)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_7___default()), null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: classes.addListItem
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default()), {
      disabled: addFieldButtonDisabled,
      className: classes.Fab,
      size: "small",
      color: "primary",
      "aria-label": "add",
      onClick: () => this.addField()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8___default()), null)))))));
  }

}

ArrayFieldInput.defaultProps = {
  fieldList: [],
  label: ''
}; // TODO type/document classes prop

ArrayFieldInput.propTypes = {
  fieldList: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  baseId: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  updateList: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
const styledArrayFieldInput = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.withStyles)(styles)(ArrayFieldInput);


/***/ }),

/***/ "./src/components/inputs/Checkbox/index.js":
/*!*************************************************!*\
  !*** ./src/components/inputs/Checkbox/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Checkbox": () => (/* binding */ CheckboxComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);




const CheckboxComponent = ({
  value,
  disabled,
  label,
  onChange,
  keyValue
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.FormControlLabel, {
  disabled: disabled,
  control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Checkbox, {
    id: `check-box-${keyValue}`,
    color: "primary",
    checked: value === true,
    onChange: event => onChange(event.target.checked),
    value: "checked",
    disabled: disabled
  }),
  label: label
});

CheckboxComponent.defaultProps = {
  value: false,
  disabled: false,
  onChange: () => {},
  label: ''
};
CheckboxComponent.propTypes = {
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  keyValue: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};


/***/ }),

/***/ "./src/components/inputs/FormControl.js":
/*!**********************************************!*\
  !*** ./src/components/inputs/FormControl.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormControl": () => (/* binding */ styledComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__);






const styles = theme => ({
  formControl: {
    width: '100%',
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    '& fieldset': {
      borderWidth: '1px !important'
    },
    '&:hover fieldset': {
      borderColor: `${theme.palette.primary.main}`
    },
    '&:focused label': {
      color: `${theme.palette.primary.main}`
    },
    zIndex: 'auto'
  },
  formControlWithMarginTop: {
    marginTop: theme.spacing(2)
  },
  error: {
    color: theme.palette.error.main
  },
  marginTopZero: {
    marginTop: 0
  }
});

function FormControlComponent({
  classes,
  children,
  withMarginTop,
  errors,
  marginTopZero,
  id
}) {
  const classNames = [classes.formControl]; // FIXME the logic seems to inverted here, but changing it leads to lots of visual bugs in Iaso

  if (!withMarginTop) {
    classNames.push(classes.formControlWithMarginTop);
  } // placing marginTopZero here to make sure it overides whatever margin was given by withMarginTop


  if (marginTopZero) {
    classNames.push(classes.marginTopZero);
  }

  const extraProps = {};

  if (id) {
    extraProps.id = id;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4___default()), _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    className: classNames.join(' '),
    variant: "outlined"
  }, extraProps), children, errors.length > 0 && errors.map(error => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.Typography, {
    key: error,
    className: classes.error
  }, error)));
}

FormControlComponent.defaultProps = {
  withMarginTop: true,
  marginTopZero: false,
  errors: [],
  id: null
};
FormControlComponent.propTypes = {
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node.isRequired),
  withMarginTop: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  // FIXME: these 2 props are redundant, but changing withMarginTop breaks alignment in Iaso
  marginTopZero: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  errors: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)),
  id: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)])
};
const styledComponent = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.withStyles)(styles)(FormControlComponent);


/***/ }),

/***/ "./src/components/inputs/InputLabel.js":
/*!*********************************************!*\
  !*** ./src/components/inputs/InputLabel.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputLabel": () => (/* binding */ InputLabelComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "@material-ui/core/InputLabel");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/inputs/styles.js");




/** @deprecated use InputLabel from @material-ui/core instead to avoid text alignment issues */

function InputLabelComponent({
  htmlFor,
  label,
  required,
  shrink,
  error
}) {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_3__.useStyles)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_2___default()), {
    name: htmlFor.replace('input-text-', ''),
    htmlFor: htmlFor,
    classes: {
      shrink: classes.shrink
    },
    className: classes.inputLabel,
    shrink: shrink,
    error: error
  }, label, required && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("sup", null, " *"));
}

InputLabelComponent.defaultProps = {
  shrink: true,
  error: false,
  label: ''
};
InputLabelComponent.propTypes = {
  htmlFor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  shrink: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  error: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};


/***/ }),

/***/ "./src/components/inputs/NumberInput/index.js":
/*!****************************************************!*\
  !*** ./src/components/inputs/NumberInput/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberInput": () => (/* binding */ NumberInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormControl */ "./src/components/inputs/FormControl.js");
/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InputLabel */ "./src/components/inputs/InputLabel.js");






const formatValue = value => {
  if (typeof value === 'number') return value;
  if (value === undefined || value == null) return '';
  const valueAsArray = value.split('');
  const containsDots = valueAsArray.filter(char => char === '.'); // If there is only one dot, the dot should be the last char and the char before it should be a number
  // e.g: "123."

  if (containsDots.length === 1 && valueAsArray[valueAsArray.length - 1] === '.' && !Number.isNaN(parseInt(valueAsArray[valueAsArray.length - 2], 10))) {
    return value;
  } // "12.l" should return "12.""


  if (containsDots.length === 1 && valueAsArray[valueAsArray.length - 2] === '.' && Number.isNaN(parseInt(valueAsArray[valueAsArray.length - 1], 10))) {
    valueAsArray.pop();
    return valueAsArray.join('');
  }

  const parsedValue = parseFloat(value);

  if (Number.isNaN(parsedValue)) {
    return '';
  }

  return parsedValue;
};

const NumberInput = ({
  keyValue,
  label,
  withMarginTop,
  errors,
  required,
  value,
  disabled,
  onChange,
  multiline
}) => {
  const hasErrors = errors.length >= 1;
  const [formattedValue, setFormattedValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(formatValue(value));
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const formatted = formatValue(value);
    setFormattedValue(formatted);
  }, [value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormControl__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
    withMarginTop: withMarginTop,
    errors: errors
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputLabel__WEBPACK_IMPORTED_MODULE_4__.InputLabel, {
    htmlFor: `input-text-${keyValue}`,
    label: label,
    required: required,
    error: hasErrors,
    shrink: value !== ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.OutlinedInput, {
    size: "small",
    multiline: multiline,
    disabled: disabled,
    id: `input-text-${keyValue}`,
    value: formattedValue,
    type: "text",
    onChange: event => {
      const updatedValue = formatValue(event.target.value);
      setFormattedValue(updatedValue);
      onChange(updatedValue);
    },
    error: hasErrors
  }));
};

NumberInput.defaultProps = {
  value: '',
  errors: [],
  withMarginTop: true,
  multiline: false,
  disabled: false,
  required: false,
  onChange: () => {},
  label: ''
};
NumberInput.propTypes = {
  withMarginTop: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  keyValue: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  multiline: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)]),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};


/***/ }),

/***/ "./src/components/inputs/PasswordInput/index.js":
/*!******************************************************!*\
  !*** ./src/components/inputs/PasswordInput/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordInput": () => (/* binding */ styledPasswordInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Edit */ "@material-ui/icons/Edit");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FormControl */ "./src/components/inputs/FormControl.js");
/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InputLabel */ "./src/components/inputs/InputLabel.js");
/* harmony import */ var _utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/useSafeIntl */ "./src/utils/useSafeIntl.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./src/components/inputs/PasswordInput/messages.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles */ "./src/components/inputs/PasswordInput/styles.js");










const PasswordInput = ({
  keyValue,
  label,
  withMarginTop,
  errors,
  required,
  value,
  disabled,
  onChange,
  multiline,
  displayPassword,
  classes
}) => {
  const hasErrors = errors.length >= 1;
  const [showPassword, setShowPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(displayPassword);
  const intl = (0,_utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_6__.useSafeIntl)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormControl__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
    withMarginTop: withMarginTop,
    errors: errors
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputLabel__WEBPACK_IMPORTED_MODULE_5__.InputLabel, {
    htmlFor: `input-text-${keyValue}`,
    label: label,
    required: required,
    error: hasErrors,
    shrink: value !== ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.OutlinedInput, {
    size: "small",
    multiline: multiline,
    disabled: disabled,
    id: `input-text-${keyValue}`,
    value: value,
    type: showPassword ? 'text' : 'password',
    onChange: event => onChange(event.target.value),
    error: hasErrors,
    className: classes.passwordInput
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    className: classes.displayPassword,
    disableFocusListener: disabled,
    disableHoverListener: disabled,
    disableTouchListener: disabled,
    placement: "bottom",
    title: intl.formatMessage(_messages__WEBPACK_IMPORTED_MODULE_7__.MESSAGES.displayPassword)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
    color: showPassword ? 'primary' : 'inherit',
    onClick: () => {
      setShowPassword(isShowing => !isShowing);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_3___default()), null)))));
};

PasswordInput.defaultProps = {
  value: '',
  errors: [],
  withMarginTop: true,
  multiline: false,
  disabled: false,
  required: false,
  onChange: () => {},
  displayPassword: false,
  label: ''
};
PasswordInput.propTypes = {
  withMarginTop: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  keyValue: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  multiline: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  displayPassword: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  // tooltipMessage: PropTypes.string,
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};
const styledPasswordInput = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.withStyles)(_styles__WEBPACK_IMPORTED_MODULE_8__.styles)(PasswordInput);


/***/ }),

/***/ "./src/components/inputs/PasswordInput/messages.js":
/*!*********************************************************!*\
  !*** ./src/components/inputs/PasswordInput/messages.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MESSAGES": () => (/* binding */ MESSAGES)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);

const MESSAGES = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  displayPassword: {
    id: "blsq.button.label.displayPassword",
    defaultMessage: "Display the pasword"
  }
});


/***/ }),

/***/ "./src/components/inputs/PasswordInput/styles.js":
/*!*******************************************************!*\
  !*** ./src/components/inputs/PasswordInput/styles.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles)
/* harmony export */ });
const styles = theme => ({
  displayPassword: {
    position: 'absolute',
    top: 4,
    right: theme.spacing(2)
  },
  passwordInput: {
    paddingRight: theme.spacing(8)
  }
});



/***/ }),

/***/ "./src/components/inputs/Radio/index.js":
/*!**********************************************!*\
  !*** ./src/components/inputs/Radio/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Radio": () => (/* binding */ RadioComponent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);




const RadioComponent = ({
  options,
  name,
  onChange,
  value,
  className
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.RadioGroup, {
  className: className,
  name: name,
  value: value,
  onChange: event => {
    onChange(event.target.value);
  }
}, options.map(o => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.FormControlLabel, {
  key: o.value,
  value: o.value,
  control: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Radio, {
    color: "primary"
  }),
  label: o.label,
  disabled: o.disabled
})));

RadioComponent.defaultProps = {
  options: [],
  onChange: () => {},
  value: '',
  className: ''
};
RadioComponent.propTypes = {
  options: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  value: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};


/***/ }),

/***/ "./src/components/inputs/SearchInput/index.js":
/*!****************************************************!*\
  !*** ./src/components/inputs/SearchInput/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchInput": () => (/* binding */ styledSearchInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FormControl */ "./src/components/inputs/FormControl.js");
/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InputLabel */ "./src/components/inputs/InputLabel.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./src/components/inputs/SearchInput/styles.js");








const SearchInput = ({
  withMarginTop,
  label,
  required,
  keyValue,
  disabled,
  value,
  onEnterPressed,
  onChange,
  classes,
  uid,
  errors = []
}) => {
  const hasErrors = errors.length >= 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormControl__WEBPACK_IMPORTED_MODULE_4__.FormControl, {
    withMarginTop: withMarginTop,
    errors: errors
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputLabel__WEBPACK_IMPORTED_MODULE_5__.InputLabel, {
    htmlFor: `search-${keyValue}`,
    label: label,
    required: required,
    shrink: value !== undefined && value !== null && value !== '',
    error: hasErrors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.OutlinedInput, {
    disabled: disabled,
    error: hasErrors,
    id: uid ? `search-${uid}` : `search-${keyValue}`,
    value: value || '',
    placeholder: "",
    onKeyPress: event => {
      if (event.which === 13 || event.keyCode === 13 || event.key === 'Enter') {
        onEnterPressed();
      }
    },
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      tabIndex: 0,
      role: "button",
      onClick: () => onEnterPressed()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_3___default()), null)),
    inputProps: {
      'aria-label': 'search'
    },
    onChange: event => onChange(event.target.value)
  }));
};

SearchInput.defaultProps = {
  value: '',
  withMarginTop: true,
  disabled: false,
  required: false,
  onEnterPressed: () => {},
  onChange: () => {},
  uid: '',
  label: '',
  errors: []
};
SearchInput.propTypes = {
  withMarginTop: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  keyValue: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onEnterPressed: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  uid: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string))
};
const styledSearchInput = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.withStyles)(_styles__WEBPACK_IMPORTED_MODULE_6__.styles)(SearchInput);


/***/ }),

/***/ "./src/components/inputs/SearchInput/styles.js":
/*!*****************************************************!*\
  !*** ./src/components/inputs/SearchInput/styles.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles)
/* harmony export */ });
const styles = theme => ({
  // TODO confirm if can safely be deleted
  icon: {
    right: theme.spacing(2)
  },
  // TODO confirm if can safely be deleted
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    paddingRight: theme.spacing(7),
    width: '100%'
  }
});



/***/ }),

/***/ "./src/components/inputs/Select/TextInput.js":
/*!***************************************************!*\
  !*** ./src/components/inputs/Select/TextInput.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextInput": () => (/* binding */ TextInput)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles */ "./src/components/inputs/styles.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







const TextInput = ({
  params,
  renderOption,
  disabled,
  label,
  required,
  onBlur,
  errors,
  helperText,
  loading
}) => {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_6__.useStyles)();

  const paramsCopy = _objectSpread({}, params);

  let inputExtraProps = {};

  if (renderOption && params.inputProps.value) {
    inputExtraProps = {
      startAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
        className: classes.startAdornment
      }, renderOption({
        label: params.inputProps.value
      })),
      style: {
        color: 'transparent'
      }
    };
    paramsCopy.inputProps.value = '';
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4___default()), _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, paramsCopy, {
    variant: "outlined",
    disabled: disabled,
    label: `${label}${required ? '*' : ''}`,
    onBlur: onBlur,
    error: errors.length > 0,
    InputLabelProps: {
      classes: {
        shrink: classes.shrink
      },
      className: classes.inputLabel
    },
    helperText: helperText,
    InputProps: _objectSpread(_objectSpread({}, params.InputProps), {}, {
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.CircularProgress, {
        color: "inherit",
        size: 20
      }) : null, params.InputProps.endAdornment)
    }, inputExtraProps)
  }));
};

TextInput.defaultProps = {
  helperText: undefined,
  renderOption: null
};
TextInput.propTypes = {
  renderOption: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)]),
  params: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired),
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  errors: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array.isRequired),
  helperText: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_3___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)]),
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired)
};


/***/ }),

/***/ "./src/components/inputs/Select/index.js":
/*!***********************************************!*\
  !*** ./src/components/inputs/Select/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select": () => (/* binding */ SelectCustom),
/* harmony export */   "renderTags": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.defaultRenderTags)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _single__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single */ "./src/components/inputs/Select/single.js");
/* harmony import */ var _multi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multi */ "./src/components/inputs/Select/multi.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./src/components/inputs/Select/utils.js");






const SelectCustom = props => {
  if (props.multi) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_multi__WEBPACK_IMPORTED_MODULE_3__.MultiSelect, props);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_single__WEBPACK_IMPORTED_MODULE_2__.SingleSelect, props);
};

SelectCustom.defaultProps = {
  multi: false
};
SelectCustom.propTypes = {
  multi: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};


/***/ }),

/***/ "./src/components/inputs/Select/messages.js":
/*!**************************************************!*\
  !*** ./src/components/inputs/Select/messages.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MESSAGES": () => (/* binding */ MESSAGES)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);

const MESSAGES = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  noOptions: {
    id: "blsq.button.label.noOptions",
    defaultMessage: "No results found"
  }
});


/***/ }),

/***/ "./src/components/inputs/Select/multi.js":
/*!***********************************************!*\
  !*** ./src/components/inputs/Select/multi.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiSelect": () => (/* binding */ MultiSelect)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "@material-ui/lab/Autocomplete");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Clear */ "@material-ui/icons/Clear");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/useSafeIntl */ "./src/utils/useSafeIntl.js");
/* harmony import */ var _utils_useKeyPressListener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/useKeyPressListener */ "./src/utils/useKeyPressListener.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages */ "./src/components/inputs/Select/messages.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles */ "./src/components/inputs/styles.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./src/components/inputs/Select/utils.js");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./TextInput */ "./src/components/inputs/Select/TextInput.js");













const MultiSelect = ({
  value,
  keyValue,
  label,
  errors,
  onChange,
  options,
  onBlur,
  disabled,
  clearable,
  required,
  noOptionsText,
  getOptionLabel,
  getOptionSelected,
  loading,
  renderOption,
  renderTags,
  returnFullObject,
  helperText
}) => {
  const intl = (0,_utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_6__.useSafeIntl)();
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_9__.useStyles)();
  const shiftKeyIsDown = (0,_utils_useKeyPressListener__WEBPACK_IMPORTED_MODULE_7__.useKeyPressListener)('Shift');
  const fixedValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (value) {
      const valuesList = Array.isArray(value) ? value : value.split(',');

      if (returnFullObject) {
        return valuesList;
      }

      return valuesList.map(v => (0,_utils__WEBPACK_IMPORTED_MODULE_10__.getOption)(v, options)).filter(o => o);
    }

    return [];
  }, [value, options]);
  const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e, newValue) => {
    if (newValue.length === 0) {
      return onChange(null);
    }

    if (!returnFullObject) {
      return onChange(newValue.map(v => v === null || v === void 0 ? void 0 : v.value).join(','));
    }

    return onChange(newValue);
  }, [onChange, returnFullObject]);
  const extraProps = (0,_utils__WEBPACK_IMPORTED_MODULE_10__.getExtraProps)(getOptionLabel, getOptionSelected, renderOption);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
    mt: 1,
    mb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4___default()), _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    disabled: disabled,
    noOptionsText: intl.formatMessage(noOptionsText),
    multiple: true,
    disableCloseOnSelect: shiftKeyIsDown,
    id: keyValue,
    disableClearable: !clearable,
    options: options,
    value: fixedValue,
    onChange: handleChange,
    loading: loading,
    closeIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_5___default()), null),
    renderTags: renderTags,
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_TextInput__WEBPACK_IMPORTED_MODULE_11__.TextInput, {
      params: params,
      renderOption: renderOption,
      disabled: disabled,
      label: label,
      required: required,
      onBlur: onBlur,
      errors: errors,
      helperText: helperText,
      loading: loading
    }),
    classes: {
      popupIndicator: classes.popupIndicator,
      clearIndicator: classes.clearIndicator,
      hasClearIcon: classes.hasClearIcon
    }
  }, extraProps)));
};

MultiSelect.defaultProps = {
  value: undefined,
  errors: [],
  label: '',
  disabled: false,
  clearable: true,
  required: false,
  loading: false,
  options: [],
  onBlur: () => {},
  getOptionSelected: null,
  getOptionLabel: null,
  renderOption: null,
  noOptionsText: _messages__WEBPACK_IMPORTED_MODULE_8__.MESSAGES.noOptions,
  helperText: undefined,
  renderTags: (0,_utils__WEBPACK_IMPORTED_MODULE_10__.defaultRenderTags)(o => o !== null && o !== void 0 && o.label ? o.label : ''),
  returnFullObject: false // use this one if you pass array of objects as options and want an array of objects as sected items, not a string of id's

};
MultiSelect.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)),
  keyValue: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  clearable: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  noOptionsText: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  helperText: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  options: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  getOptionLabel: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)]),
  getOptionSelected: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)]),
  renderOption: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)]),
  renderTags: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  returnFullObject: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};


/***/ }),

/***/ "./src/components/inputs/Select/single.js":
/*!************************************************!*\
  !*** ./src/components/inputs/Select/single.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleSelect": () => (/* binding */ SingleSelect)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "@material-ui/lab/Autocomplete");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Clear */ "@material-ui/icons/Clear");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/useSafeIntl */ "./src/utils/useSafeIntl.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./src/components/inputs/Select/messages.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles */ "./src/components/inputs/styles.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/components/inputs/Select/utils.js");
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./TextInput */ "./src/components/inputs/Select/TextInput.js");












const SingleSelect = ({
  value,
  keyValue,
  label,
  errors,
  onChange,
  options,
  onBlur,
  disabled,
  clearable,
  required,
  noOptionsText,
  getOptionLabel,
  getOptionSelected,
  loading,
  renderOption,
  renderTags,
  returnFullObject,
  helperText
}) => {
  const intl = (0,_utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_6__.useSafeIntl)();
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_8__.useStyles)();
  const fixedValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => value ? (0,_utils__WEBPACK_IMPORTED_MODULE_9__.getOption)(value, options) ?? value : null, [value, options]);
  const handleChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e, newValue) => onChange((newValue === null || newValue === void 0 ? void 0 : newValue.value) ?? null), [onChange, returnFullObject]);
  const extraProps = (0,_utils__WEBPACK_IMPORTED_MODULE_9__.getExtraProps)(getOptionLabel, getOptionSelected, renderOption);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_3___default()), {
    mt: 1,
    mb: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4___default()), _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    disabled: disabled,
    noOptionsText: intl.formatMessage(noOptionsText),
    multiple: false,
    id: keyValue,
    disableClearable: !clearable,
    options: options,
    value: fixedValue,
    onChange: handleChange,
    loading: loading,
    closeIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_5___default()), null),
    renderTags: renderTags,
    renderInput: params => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_TextInput__WEBPACK_IMPORTED_MODULE_10__.TextInput, {
      params: params,
      renderOption: renderOption,
      disabled: disabled,
      label: label,
      required: required,
      onBlur: onBlur,
      errors: errors,
      helperText: helperText,
      loading: loading
    }),
    classes: {
      popupIndicator: classes.popupIndicator,
      clearIndicator: classes.clearIndicator,
      hasClearIcon: classes.hasClearIcon
    }
  }, extraProps)));
};

SingleSelect.defaultProps = {
  value: undefined,
  errors: [],
  label: '',
  disabled: false,
  clearable: true,
  required: false,
  loading: false,
  options: [],
  onBlur: () => {},
  getOptionSelected: null,
  getOptionLabel: null,
  renderOption: null,
  noOptionsText: _messages__WEBPACK_IMPORTED_MODULE_7__.MESSAGES.noOptions,
  helperText: undefined,
  renderTags: (0,_utils__WEBPACK_IMPORTED_MODULE_9__.defaultRenderTags)(o => o !== null && o !== void 0 && o.label ? o.label : ''),
  returnFullObject: false // use this one if you pass array of objects as options and want an array of objects as sected items, not a string of id's

};
SingleSelect.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)),
  keyValue: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  clearable: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().any),
  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  noOptionsText: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  helperText: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)]),
  options: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  getOptionLabel: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)]),
  getOptionSelected: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)]),
  renderOption: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)]),
  renderTags: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  returnFullObject: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};


/***/ }),

/***/ "./src/components/inputs/Select/utils.js":
/*!***********************************************!*\
  !*** ./src/components/inputs/Select/utils.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultRenderTags": () => (/* binding */ defaultRenderTags),
/* harmony export */   "getExtraProps": () => (/* binding */ getExtraProps),
/* harmony export */   "getOption": () => (/* binding */ getOption)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Chip */ "@material-ui/core/Chip");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_2__);



const defaultRenderTags = getLabel => (tagValue, getTagProps) => tagValue.map((option, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_2___default()), _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
  color: "secondary",
  style: {
    backgroundColor: option.color,
    color: 'white'
  },
  label: getLabel(option)
}, getTagProps({
  index
}))));
const getExtraProps = (getOptionLabel, getOptionSelected, renderOption) => {
  const extraProps = {
    getOptionLabel: getOptionLabel || (option => (option === null || option === void 0 ? void 0 : option.label) ?? option.toString()),
    getOptionSelected: getOptionSelected || ((option, val) => val && option.value === val.value)
  };

  if (renderOption) {
    extraProps.renderOption = renderOption;
  }

  return extraProps;
};
const getOption = (value, options) => options.find(o => `${o.value}` === `${value}`);

/***/ }),

/***/ "./src/components/inputs/TextInput/index.js":
/*!**************************************************!*\
  !*** ./src/components/inputs/TextInput/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextInput": () => (/* binding */ TextInput)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../FormControl */ "./src/components/inputs/FormControl.js");
/* harmony import */ var _InputLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InputLabel */ "./src/components/inputs/InputLabel.js");






const TextInput = ({
  keyValue,
  label,
  withMarginTop,
  errors,
  required,
  value,
  disabled,
  onChange,
  multiline
}) => {
  const hasErrors = errors.length >= 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FormControl__WEBPACK_IMPORTED_MODULE_3__.FormControl, {
    withMarginTop: withMarginTop,
    errors: errors
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_InputLabel__WEBPACK_IMPORTED_MODULE_4__.InputLabel, {
    htmlFor: `input-text-${keyValue}`,
    label: label,
    required: required,
    error: hasErrors,
    shrink: value !== ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.OutlinedInput, {
    size: "small",
    multiline: multiline,
    disabled: disabled,
    id: `input-text-${keyValue}`,
    value: value,
    type: "text",
    onChange: event => onChange(event.target.value),
    error: hasErrors
  }));
};

TextInput.defaultProps = {
  value: '',
  errors: [],
  withMarginTop: true,
  multiline: false,
  disabled: false,
  required: false,
  onChange: () => {},
  label: ''
};
TextInput.propTypes = {
  withMarginTop: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)),
  keyValue: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  label: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  required: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  multiline: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  value: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};


/***/ }),

/***/ "./src/components/inputs/styles.js":
/*!*****************************************!*\
  !*** ./src/components/inputs/styles.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles),
/* harmony export */   "useStyles": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);


const styles = theme => ({
  inputLabel: {
    color: 'rgba(0, 0, 0, 0.4)',
    paddingLeft: 3,
    paddingRight: 3,
    transition: theme.transitions.create(['all'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  shrink: {
    fontSize: 20,
    marginTop: -2,
    backgroundColor: 'white'
  },
  popupIndicator: {
    marginRight: '6px !important',
    marginLeft: '6px !important'
  },
  clearIndicator: {
    marginTop: -2
  },
  hasClearIcon: {
    '& .MuiAutocomplete-inputRoot': {
      paddingRight: '85px !important'
    }
  }
});

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(styles);


/***/ }),

/***/ "./src/components/nav/DynamicTabs/index.js":
/*!*************************************************!*\
  !*** ./src/components/nav/DynamicTabs/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicTabs": () => (/* binding */ styledDynamicTabs)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Clear */ "@material-ui/icons/Clear");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! color */ "color");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_iaso_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../styles/iaso/common */ "./src/styles/iaso/common.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









 // import MESSAGES from './messages';

const styles = theme => _objectSpread(_objectSpread({}, (0,_styles_iaso_common__WEBPACK_IMPORTED_MODULE_8__.commonStyles)(theme)), {}, {
  tabs: _objectSpread(_objectSpread({}, (0,_styles_iaso_common__WEBPACK_IMPORTED_MODULE_8__.commonStyles)(theme).tabs), {}, {
    paddingRight: 0
  }),
  mainContainer: {
    display: 'flex',
    position: 'relative'
  },
  tabsContainer: {
    position: 'relative'
  },
  iconButton: {
    color: 'white !important',
    height: 30,
    position: 'relative',
    top: 8
  },
  removeIconButton: {
    color: 'white !important',
    position: 'relative',
    top: 19,
    right: 15,
    height: 20,
    '& svg': {
      width: 14,
      height: 14
    }
  },
  removeContainer: {
    padding: 0,
    margin: 0,
    position: 'absolute',
    left: theme.spacing(4),
    top: -5,
    minHeight: 0,
    height: 1,
    width: `calc(100% - ${theme.spacing(4)}px)`,
    display: 'flex',
    listStyleType: 'none',
    zIndex: 100000
  },
  removeContainerItem: {
    display: 'inline-flex',
    justifyContent: 'flex-end',
    minWidth: 160,
    fontSize: 5
  },
  roundColor: {
    display: 'inline-block',
    width: 15,
    height: 15,
    borderRadius: 15,
    position: 'absolute',
    top: 16,
    left: theme.spacing(2)
  },
  tabContentAlone: {
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(4)
  },
  tabContent: {
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(6)
  }
});

class DynamicTabs extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabIndex: parseInt(props.params[props.tabParamKey], 10) || 0,
      tabsWidth: []
    };
  }

  handleAddTab() {
    const {
      params,
      defaultItem,
      paramKey,
      tabParamKey,
      onTabsUpdated
    } = this.props;

    const newState = _objectSpread({}, this.state);

    const newItems = JSON.parse(params[paramKey]);
    newState.tabIndex = newItems.length;
    newItems.push(defaultItem);

    const newParams = _objectSpread({}, params);

    newParams[tabParamKey] = newState.tabIndex.toString();
    newParams[paramKey] = JSON.stringify(newItems);
    this.setState(newState);
    onTabsUpdated(newParams);
  }

  handleDeleteTab(tabIndex) {
    const {
      params,
      paramKey,
      tabParamKey,
      onTabsDeleted
    } = this.props;
    const newItems = JSON.parse(params[paramKey]);
    newItems.splice(tabIndex, 1);

    const newParams = _objectSpread(_objectSpread({}, params), {}, {
      searchActive: false
    });

    newParams[paramKey] = JSON.stringify(newItems);

    if (this.state.tabIndex > newItems.length - 1) {
      newParams[tabParamKey] = (newItems.length - 1).toString();
      this.setState({
        tabIndex: newItems.length - 1
      });
    }

    onTabsDeleted(newParams);
  }

  handleTabChange(tabIndex) {
    const {
      params,
      paramKey,
      tabParamKey,
      onTabChange
    } = this.props;

    const newState = _objectSpread({}, this.state);

    const newItems = JSON.parse(params[paramKey]);
    newState.tabIndex = tabIndex;

    const newParams = _objectSpread({}, params);

    newParams[tabParamKey] = newState.tabIndex.toString();
    newParams[paramKey] = JSON.stringify(newItems);
    onTabChange(newParams);
    this.setState(newState);
  }

  setTabsElement(element, index) {
    const {
      tabsWidth
    } = this.state;
    const newWidth = element.getBoundingClientRect().width;

    if (newWidth !== tabsWidth[index]) {
      const newArray = [...tabsWidth];
      newArray[index] = newWidth;
      this.setState({
        tabsWidth: newArray
      });
    }
  }

  render() {
    const {
      classes,
      baseLabel,
      params,
      paramKey,
      maxItems,
      displayCounts,
      counts,
      addMessage,
      deleteMessage
    } = this.props;
    const {
      tabIndex,
      tabsWidth
    } = this.state;
    const itemsList = JSON.parse(params[paramKey]);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("section", {
      className: classes.mainContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
      className: classes.tabsContainer
    }, itemsList.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("ul", {
      className: classes.removeContainer
    }, itemsList.map((item, currentTabIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("li", {
      className: classes.removeContainerItem,
      key: currentTabIndex,
      style: {
        width: `${tabsWidth[currentTabIndex]}px`
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      size: "small",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, deleteMessage), ` ${baseLabel.toLowerCase()}`)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
      onClick: () => this.handleDeleteTab(currentTabIndex),
      className: classes.removeIconButton,
      size: "small"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_5___default()), null)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
      value: tabIndex,
      classes: {
        root: classes.tabs,
        indicator: classes.indicator
      },
      onChange: (event, newtab) => this.handleTabChange(newtab)
    }, itemsList.map((item, currentTabIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tab, {
      ref: ref => {
        if (ref) this.setTabsElement(ref, currentTabIndex);
      },
      key: currentTabIndex,
      value: currentTabIndex,
      label: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
        className: itemsList.length > 1 ? classes.tabContent : classes.tabContentAlone
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span", {
        style: item.color ? {
          backgroundColor: `#${item.color}`,
          border: `2px solid ${color__WEBPACK_IMPORTED_MODULE_6___default()(`#${item.color}`).darken(0.5)}`
        } : {},
        className: classes.roundColor
      }), baseLabel, displayCounts && counts[currentTabIndex] && ` (${(0,_utils__WEBPACK_IMPORTED_MODULE_9__.formatThousand)(counts[currentTabIndex].count)})`)
    })))), itemsList.length < maxItems && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
      size: "small",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, addMessage), ` ${baseLabel.toLowerCase()}`)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
      onClick: () => this.handleAddTab(),
      className: classes.iconButton,
      size: "small"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_4___default()), null))));
  }

}

DynamicTabs.defaultProps = {
  baseLabel: 'tab',
  maxItems: 5,
  onTabsUpdated: () => ({}),
  onTabsDeleted: () => ({}),
  onTabChange: () => ({}),
  displayCounts: false,
  counts: []
};
DynamicTabs.propTypes = {
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object.isRequired),
  baseLabel: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
  params: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object.isRequired),
  defaultItem: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object.isRequired),
  paramKey: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired),
  tabParamKey: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired),
  baseUrl: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired),
  redirectTo: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func.isRequired),
  maxItems: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),
  onTabsUpdated: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onTabsDeleted: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  onTabChange: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func),
  displayCounts: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),
  counts: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().array),
  deleteMessage: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object.isRequired),
  addMessage: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().object.isRequired)
};
const styledDynamicTabs = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.withStyles)(styles)(DynamicTabs);


/***/ }),

/***/ "./src/components/table/ColumnsSelectDrawer/index.js":
/*!***********************************************************!*\
  !*** ./src/components/table/ColumnsSelectDrawer/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColumnsSelectDrawer": () => (/* binding */ styledAndTranslated)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ArrowBack */ "@material-ui/icons/ArrowBack");
/* harmony import */ var _material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _buttons_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../buttons/IconButton */ "./src/components/buttons/IconButton/index.js");
/* harmony import */ var _BlockPlaceholder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../BlockPlaceholder */ "./src/components/BlockPlaceholder/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messages */ "./src/components/table/ColumnsSelectDrawer/messages.js");
/* harmony import */ var _utils_injectIntl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/injectIntl */ "./src/utils/injectIntl.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./styles */ "./src/components/table/ColumnsSelectDrawer/styles.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }













const filterResults = (searchString, options) => {
  let displayedOptions = [...options];
  displayedOptions = displayedOptions.map((o, i) => _objectSpread(_objectSpread({}, o), {}, {
    index: i
  }));

  if (searchString !== '') {
    const search = searchString.toLowerCase();
    displayedOptions = displayedOptions.filter(o => o.key && o.key.toLowerCase().includes(search) || o.label && o.label.toLowerCase().includes(search));
  }

  return displayedOptions;
};

const ColumnsSelectDrawer = ({
  classes,
  options,
  setOptions,
  minColumns,
  intl: {
    formatMessage
  }
}) => {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({
    open: false,
    searchString: ''
  });

  const toggleDrawer = open => () => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      open
    }));
  };

  const handleSearch = reset => event => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      searchString: reset ? '' : event.target.value
    }));
  };

  const handleChangeOptions = index => event => {
    const newOptions = [...options];
    newOptions[index] = _objectSpread(_objectSpread({}, newOptions[index]), {}, {
      active: event.target.checked
    });
    setOptions(newOptions);
  };

  const activeOptionsCount = options.filter(o => o.active).length;
  const displayedOptions = filterResults(state.searchString, options);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_buttons_IconButton__WEBPACK_IMPORTED_MODULE_7__.IconButton, {
    onClick: toggleDrawer(true),
    icon: "filter-list",
    color: "white",
    tooltipMessage: _messages__WEBPACK_IMPORTED_MODULE_9__.MESSAGES.columnSelectTooltip
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Drawer, {
    anchor: "right",
    open: state.open,
    onClose: toggleDrawer(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: classes.toolbar
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
    title: formatMessage(_messages__WEBPACK_IMPORTED_MODULE_9__.MESSAGES.close)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
    onClick: toggleDrawer(false)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_6___default()), null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: classes.search
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.InputBase, {
    value: state.searchString,
    onChange: handleSearch(),
    className: classes.input,
    placeholder: formatMessage(_messages__WEBPACK_IMPORTED_MODULE_9__.MESSAGES.search),
    inputProps: {
      'aria-label': formatMessage(_messages__WEBPACK_IMPORTED_MODULE_9__.MESSAGES.search),
      className: classes.input
    }
  })), state.searchString !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Tooltip, {
    title: formatMessage(_messages__WEBPACK_IMPORTED_MODULE_9__.MESSAGES.resetSearch)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
    onClick: handleSearch(true)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5___default()), null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Divider, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    className: classes.list
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.List, null, displayedOptions.map(o => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__.InView, {
    key: o.key
  }, ({
    inView,
    ref
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    ref: ref,
    id: o.key
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
    className: classes.listItem
  }, inView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Switch, {
    disabled: activeOptionsCount === minColumns && o.active,
    size: "small",
    checked: o.active,
    onChange: handleChangeOptions(o.index),
    color: "primary",
    inputProps: {
      'aria-label': o.label
    },
    className: classes.switch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {
    primary: o.label || o.key
  })), !inView && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_BlockPlaceholder__WEBPACK_IMPORTED_MODULE_8__.BlockPlaceholder, {
    width: "30px"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_BlockPlaceholder__WEBPACK_IMPORTED_MODULE_8__.BlockPlaceholder, null)))))))))));
};

ColumnsSelectDrawer.defaultProps = {
  minColumns: 2
};
ColumnsSelectDrawer.propTypes = {
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
  options: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array.isRequired),
  setOptions: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  minColumns: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  intl: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired)
};
const styledAndTranslated = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.withStyles)(_styles__WEBPACK_IMPORTED_MODULE_11__.styles)((0,_utils_injectIntl__WEBPACK_IMPORTED_MODULE_10__.injectIntl)(ColumnsSelectDrawer));


/***/ }),

/***/ "./src/components/table/ColumnsSelectDrawer/messages.js":
/*!**************************************************************!*\
  !*** ./src/components/table/ColumnsSelectDrawer/messages.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MESSAGES": () => (/* binding */ MESSAGES)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);

const MESSAGES = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  search: {
    id: "blsq.table.label.search",
    defaultMessage: "Search"
  },
  close: {
    id: "blsq.table.label.close",
    defaultMessage: "Close"
  },
  resetSearch: {
    id: "blsq.table.label.resetSearch",
    defaultMessage: "Empty search"
  },
  columnSelectTooltip: {
    id: "blsq.table.columnSelect.tooltip",
    defaultMessage: "Select visible columns"
  }
});


/***/ }),

/***/ "./src/components/table/ColumnsSelectDrawer/styles.js":
/*!************************************************************!*\
  !*** ./src/components/table/ColumnsSelectDrawer/styles.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

const styles = theme => ({
  root: {
    width: 400,
    overflow: 'hidden'
  },
  toolbar: _objectSpread(_objectSpread({}, theme.mixins.toolbar), {}, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    height: theme.spacing(8)
  }),
  search: {
    marginLeft: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%'
  },
  list: {
    height: `calc(100vh - ${theme.spacing(8)}px)`,
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  listItem: {
    height: theme.spacing(6)
  },
  switch: {
    marginRight: theme.spacing(1)
  },
  placeholder: {
    height: 15,
    backgroundColor: theme.palette.ligthGray.main,
    borderRadius: 5,
    marginRight: theme.spacing(1),
    width: '50%'
  },
  input: {
    width: '100%',
    padding: 0
  }
});



/***/ }),

/***/ "./src/components/table/HeaderRowIcon/index.js":
/*!*****************************************************!*\
  !*** ./src/components/table/HeaderRowIcon/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderRowIcon": () => (/* binding */ styled)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/table/HeaderRowIcon/styles.js");





function HeaderRowIcon({
  IconComponent,
  title,
  classes
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    title: title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(IconComponent, null)));
}

HeaderRowIcon.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  classes: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  IconComponent: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired)
};
const styled = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.withStyles)(_styles__WEBPACK_IMPORTED_MODULE_3__.styles)(HeaderRowIcon);


/***/ }),

/***/ "./src/components/table/HeaderRowIcon/styles.js":
/*!******************************************************!*\
  !*** ./src/components/table/HeaderRowIcon/styles.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "styles": () => (/* binding */ styles)
/* harmony export */ });
const styles = () => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
});



/***/ }),

/***/ "./src/components/table/InfoHeader/index.js":
/*!**************************************************!*\
  !*** ./src/components/table/InfoHeader/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoHeader": () => (/* binding */ InfoHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Info */ "@material-ui/icons/Info");
/* harmony import */ var _material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/components/table/InfoHeader/styles.js");






const InfoHeader = ({
  message,
  children
}) => {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_4__.useStyles)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
    className: classes.root,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
    display: "inline",
    mr: 1
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    classes: {
      popper: classes.popperFixed
    },
    placement: "bottom",
    title: message
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Info__WEBPACK_IMPORTED_MODULE_3___default()), {
    fontSize: "small",
    color: "primary",
    className: classes.icon
  })));
};

InfoHeader.propTypes = {
  message: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired),
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().node), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)]).isRequired
};


/***/ }),

/***/ "./src/components/table/InfoHeader/styles.js":
/*!***************************************************!*\
  !*** ./src/components/table/InfoHeader/styles.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStyles": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_iaso_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/iaso/common */ "./src/styles/iaso/common.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const styles = theme => _objectSpread(_objectSpread({}, (0,_styles_iaso_common__WEBPACK_IMPORTED_MODULE_2__.commonStyles)(theme)), {}, {
  root: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden'
  },
  icon: {
    cursor: 'pointer',
    position: 'relative',
    top: -1
  }
});

const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_1__.makeStyles)(styles);


/***/ }),

/***/ "./src/components/table/SelectionSpeedDials/index.js":
/*!***********************************************************!*\
  !*** ./src/components/table/SelectionSpeedDials/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectionSpeedDials": () => (/* binding */ SelectionSpeedDials)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab */ "@material-ui/lab");
/* harmony import */ var _material_ui_lab__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/CheckBox */ "@material-ui/icons/CheckBox");
/* harmony import */ var _material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/components/table/SelectionSpeedDials/styles.js");







const SelectionSpeedDials = ({
  hidden,
  actions,
  selection,
  reset,
  actionMessage
}) => {
  const classes = (0,_styles__WEBPACK_IMPORTED_MODULE_5__.useStyles)();
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const activeAction = actions.filter(a => !a.disabled);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.ClickAwayListener, {
    onClickAway: () => handleClose()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__.SpeedDial, {
    ariaLabel: actionMessage,
    className: classes.speedDial,
    hidden: hidden,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_CheckBox__WEBPACK_IMPORTED_MODULE_4___default()), null),
    onOpen: handleOpen,
    open: open,
    direction: "up"
  }, activeAction.map(action => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_lab__WEBPACK_IMPORTED_MODULE_3__.SpeedDialAction, {
    key: action.label,
    icon: typeof action.icon === 'function' ? action.icon(selection, reset) : action.icon,
    tooltipTitle: action.label,
    onClick: () => action.onClick ? action.onClick(selection) : () => null
  }))));
};

SelectionSpeedDials.defaultProps = {
  hidden: false,
  actions: [],
  reset: () => null
};
SelectionSpeedDials.propTypes = {
  hidden: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  actions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  selection: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object.isRequired),
  reset: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  actionMessage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired)
};


/***/ }),

/***/ "./src/components/table/SelectionSpeedDials/styles.js":
/*!************************************************************!*\
  !*** ./src/components/table/SelectionSpeedDials/styles.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useStyles": () => (/* binding */ useStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2)
    }
  }
}));


/***/ }),

/***/ "./src/components/table/Table/Body.js":
/*!********************************************!*\
  !*** ./src/components/table/Table/Body.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Body": () => (/* binding */ Body)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Row */ "./src/components/table/Table/Row.js");





const Body = ({
  page,
  getTableBodyProps,
  prepareRow,
  subComponent,
  sortBy
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_2___default()), getTableBodyProps, page.map(row => {
  prepareRow(row);
  const rowProps = row.getRowProps();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Row__WEBPACK_IMPORTED_MODULE_3__.Row, {
    row: row,
    rowProps: rowProps,
    key: rowProps.key,
    subComponent: subComponent,
    sortBy: sortBy
  });
}));

Body.defaultProps = {
  page: [],
  sortBy: [],
  rowsPerPage: 10,
  subComponent: undefined
};
Body.propTypes = {
  page: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  sortBy: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  getTableBodyProps: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  prepareRow: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  rowsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  subComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_1___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)])
};


/***/ }),

/***/ "./src/components/table/Table/Count.js":
/*!*********************************************!*\
  !*** ./src/components/table/Table/Count.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Count": () => (/* binding */ Count)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils */ "./src/utils/index.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages */ "./src/components/table/Table/messages.js");







const Count = ({
  count,
  selectCount
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
  py: 2,
  display: "flex",
  justifyContent: "flex-end",
  className: "pagination-count"
}, selectCount > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
  display: "inline-block",
  mr: 1
}, `${(0,_utils__WEBPACK_IMPORTED_MODULE_4__.formatThousand)(selectCount)} `, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, _messages__WEBPACK_IMPORTED_MODULE_5__.MESSAGES.selected)), "-"), count > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
  display: "inline-block",
  ml: 1
}, `${(0,_utils__WEBPACK_IMPORTED_MODULE_4__.formatThousand)(count)} `, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_3__.FormattedMessage, _messages__WEBPACK_IMPORTED_MODULE_5__.MESSAGES.results)));

Count.defaultProps = {
  count: 0,
  selectCount: 0
};
Count.propTypes = {
  count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  selectCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};


/***/ }),

/***/ "./src/components/table/Table/Expander.js":
/*!************************************************!*\
  !*** ./src/components/table/Table/Expander.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Expander": () => (/* binding */ Expander)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "@material-ui/icons/Visibility");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/VisibilityOff */ "@material-ui/icons/VisibilityOff");
/* harmony import */ var _material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/useSafeIntl */ "./src/utils/useSafeIntl.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages */ "./src/components/table/Table/messages.js");








const Expander = ({
  isExpanded,
  setIsExpanded
}) => {
  const {
    formatMessage
  } = (0,_utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_5__.useSafeIntl)();
  return isExpanded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
    onClick: () => setIsExpanded(!isExpanded)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_VisibilityOff__WEBPACK_IMPORTED_MODULE_4___default()), null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {
    title: formatMessage(_messages__WEBPACK_IMPORTED_MODULE_6__.MESSAGES.details)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.IconButton, {
    onClick: () => setIsExpanded(!isExpanded)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_3___default()), null)));
};

Expander.defaultProps = {
  isExpanded: false,
  setIsExpanded: () => null
};
Expander.propTypes = {
  isExpanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  setIsExpanded: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func)
};


/***/ }),

/***/ "./src/components/table/Table/Footer.js":
/*!**********************************************!*\
  !*** ./src/components/table/Table/Footer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableFooter */ "@material-ui/core/TableFooter");
/* harmony import */ var _material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);







const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.makeStyles)(theme => ({
  cell: {
    padding: theme.spacing(1, 2)
  }
}));

const Footer = ({
  footerGroups
}) => {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_3___default()), null, footerGroups.map(footerGroup => {
    const footerGroupProps = footerGroup.getFooterGroupProps();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_5___default()), _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, footerGroupProps, {
      key: footerGroupProps.key
    }), footerGroup.headers.map(column => {
      const columnsProps = column.getFooterProps();
      const align = column.align || 'center';

      if (column.Footer && !column.placeholderOf) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4___default()), _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, columnsProps, {
          className: classes.cell,
          key: columnsProps.key,
          align: align
        }), column.render('Footer'));
      }

      return null;
    }));
  }));
};

Footer.defaultProps = {
  footerGroups: []
};
Footer.propTypes = {
  footerGroups: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array)
};


/***/ }),

/***/ "./src/components/table/Table/Head.js":
/*!********************************************!*\
  !*** ./src/components/table/Table/Head.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _HeadCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeadCell */ "./src/components/table/Table/HeadCell.js");







const Head = ({
  headerGroups,
  setSortBy,
  multiSortEnabled,
  sortBy
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_3___default()), null, headerGroups.map(headerGroup => {
  const headerGroupProps = headerGroup.getHeaderGroupProps();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_4___default()), _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, headerGroupProps, {
    key: headerGroupProps.key
  }), headerGroup.headers.map((column, colIndex) => {
    const columnsProps = column.getHeaderProps();
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_HeadCell__WEBPACK_IMPORTED_MODULE_5__.HeadCell, {
      column: column,
      key: column.id,
      columnsProps: columnsProps,
      setSortBy: setSortBy,
      multiSortEnabled: multiSortEnabled,
      sortBy: sortBy,
      isLastCell: colIndex + 1 === headerGroup.headers.length
    });
  }));
}));

Head.defaultProps = {
  headerGroups: [],
  sortBy: [],
  setSortBy: () => null
};
Head.propTypes = {
  headerGroups: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  setSortBy: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  sortBy: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  multiSortEnabled: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired)
};


/***/ }),

/***/ "./src/components/table/Table/HeadCell.js":
/*!************************************************!*\
  !*** ./src/components/table/Table/HeadCell.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeadCell": () => (/* binding */ HeadCell)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableSortLabel */ "@material-ui/core/TableSortLabel");
/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/useSafeIntl */ "./src/utils/useSafeIntl.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messages */ "./src/components/table/Table/messages.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(theme => ({
  resizer: {
    display: 'inline-block',
    width: '15px',
    height: '100%',
    position: 'absolute',
    right: 0,
    top: 0,
    transform: 'translateX(50%)',
    zIndex: 1,
    touchAction: 'none',
    cursor: 'col-resize'
  },
  headerCell: {
    borderRight: `2px solid ${theme.palette.ligthGray.border}`,
    position: 'relative',
    overflow: 'hidden',
    textAlign: 'center',
    backgroundColor: 'white'
  },
  lastHeaderCell: {
    borderRight: 'none'
  },
  sortLabel: {
    display: 'inline-block',
    width: '80%'
  },
  icon: {
    color: `${theme.palette.primary.main}!important`,
    position: 'absolute',
    left: '100%',
    top: 3
  },
  cell: {
    cursor: 'default'
  }
}));

const HeadCell = ({
  column,
  columnsProps,
  setSortBy,
  multiSortEnabled,
  sortBy,
  isLastCell
}) => {
  const classes = useStyles();
  const {
    formatMessage
  } = (0,_utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_8__.useSafeIntl)();
  const isSortable = column.sortable !== false && !column.isResizing;
  let direction;
  let title = _messages__WEBPACK_IMPORTED_MODULE_9__.MESSAGES.sortAsc;

  if (column.isSorted) {
    if (column.isSortedDesc) {
      direction = 'desc';
    } else {
      direction = 'asc';
      title = _messages__WEBPACK_IMPORTED_MODULE_9__.MESSAGES.sortDesc;
    }
  }

  const cellStyle = {
    width: column.width ?? 'auto'
  };

  const sortProps = _objectSpread({}, column.getSortByToggleProps());

  sortProps.onClick = () => {
    let newSort = [];
    const currentSort = {
      desc: direction === 'asc',
      id: column.id
    };

    if (!multiSortEnabled) {
      newSort.push(currentSort);
    } else {
      newSort = [...sortBy.filter(sort => sort.id !== column.id), currentSort];
    }

    setSortBy(newSort);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_5___default()), _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, columnsProps, {
    style: cellStyle,
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(classes.headerCell, isLastCell && classes.lastHeaderCell),
    key: columnsProps.key
  }), isSortable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", sortProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_6___default()), {
    active: column.isSorted,
    direction: direction,
    title: formatMessage(title),
    classes: {
      root: classes.sortLabel,
      icon: classes.icon
    }
  }, column.render('Header'))), !isSortable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", {
    className: classes.cell
  }, column.render('Header')), column.resizable !== false && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, column.getResizerProps(), {
    className: classes.resizer
  })));
};

HeadCell.propTypes = {
  column: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),
  columnsProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object.isRequired),
  setSortBy: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired),
  multiSortEnabled: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired),
  sortBy: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array.isRequired),
  isLastCell: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool.isRequired)
};


/***/ }),

/***/ "./src/components/table/Table/NoResult.js":
/*!************************************************!*\
  !*** ./src/components/table/Table/NoResult.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoResult": () => (/* binding */ NoResult)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./messages */ "./src/components/table/Table/messages.js");






const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(theme => ({
  box: {
    width: '100%',
    height: theme.spacing(10),
    backgroundColor: theme.palette.gray.background
  }
}));

const NoResult = ({
  loading
}) => {
  const classes = useStyles();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
    className: classes.box,
    alignItems: "center",
    justifyContent: "center",
    display: "flex"
  }, !loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage, _messages__WEBPACK_IMPORTED_MODULE_5__.MESSAGES.noDataText));
};

NoResult.defaultProps = {
  loading: false
};
NoResult.propTypes = {
  loading: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)
};


/***/ }),

/***/ "./src/components/table/Table/PageRowSelect.js":
/*!*****************************************************!*\
  !*** ./src/components/table/Table/PageRowSelect.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageRowSelect": () => (/* binding */ PageRowSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Select */ "@material-ui/core/Select");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../utils/useSafeIntl */ "./src/utils/useSafeIntl.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./messages */ "./src/components/table/Table/messages.js");










const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(theme => ({
  select: {
    height: 40,
    marginLeft: theme.spacing(10)
  }
}));

const PageRowSelect = ({
  rowsPerPage,
  rowsPerPageOptions,
  selectRowsPerPage
}) => {
  const classes = useStyles();
  const {
    formatMessage
  } = (0,_utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_8__.useSafeIntl)();

  const handleChange = event => {
    selectRowsPerPage(event.target.value);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    mr: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6___default()), {
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5___default()), {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()(classes.select, 'pagination-row-select'),
    value: rowsPerPage,
    onChange: handleChange
  }, rowsPerPageOptions.map(o => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_3___default()), {
    key: o,
    value: o,
    className: `row-option-${o}`
  }, `${o} ${formatMessage(_messages__WEBPACK_IMPORTED_MODULE_9__.MESSAGES.rowsText)}`)))));
};

PageRowSelect.propTypes = {
  rowsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  rowsPerPageOptions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  selectRowsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};


/***/ }),

/***/ "./src/components/table/Table/PageSelect.js":
/*!**************************************************!*\
  !*** ./src/components/table/Table/PageSelect.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageSelect": () => (/* binding */ PageSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages */ "./src/components/table/Table/messages.js");








const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__.makeStyles)(() => ({
  input: {
    width: 80
  },
  mediumInput: {
    width: 90
  },
  largeInput: {
    width: 100
  },
  XLInput: {
    width: 110
  }
}));

const parseSelectedValue = value => {
  const parsedValue = parseInt(value, 10);
  if (Number.isNaN(parsedValue)) return '';
  return parsedValue;
};

const adaptInputSize = length => {
  if (length <= 999) return 'input';
  if (length <= 9999) return 'mediumInput';
  if (length <= 99999) return 'largeInput';
  return 'XLInput';
};

const PageSelect = ({
  pageIndex,
  pages,
  onPageChange
}) => {
  const classes = useStyles();
  const [selectedPage, setSelectedPage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(pageIndex);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    ml: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
    display: "inline-block",
    mr: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, _messages__WEBPACK_IMPORTED_MODULE_7__.MESSAGES.pageText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(classes[adaptInputSize(selectedPage)], 'pagination-page-select'),
    size: "small",
    label: "",
    type: "number",
    value: selectedPage // value={pageIndex}
    ,
    disabled: pages < 2,
    variant: "outlined",
    onChange: e => {
      setSelectedPage(parseSelectedValue(e.currentTarget.value));
    },
    onKeyPress: event => {
      if (event.key === 'Enter') {
        onPageChange(selectedPage);
      }
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
    display: "inline-block",
    ml: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedMessage, _messages__WEBPACK_IMPORTED_MODULE_7__.MESSAGES.ofText)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_2___default()), {
    display: "inline-block",
    ml: 1
  }, pages));
};

PageSelect.defaultProps = {
  pages: 0,
  pageIndex: 0
};
PageSelect.propTypes = {
  pages: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  pageIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  onPageChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};


/***/ }),

/***/ "./src/components/table/Table/Pagination.js":
/*!**************************************************!*\
  !*** ./src/components/table/Table/Pagination.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pagination": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "@material-ui/core/TablePagination");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./src/components/table/Table/constants.js");
/* harmony import */ var _TablePaginationActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TablePaginationActions */ "./src/components/table/Table/TablePaginationActions.js");






const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.makeStyles)(() => ({
  spacer: {
    display: 'none'
  },
  caption: {
    display: 'none'
  },
  input: {
    display: 'none'
  }
}));

const Pagination = ({
  count,
  rowsPerPage,
  pageIndex,
  onTableParamsChange,
  pages,
  countOnTop,
  selectCount
}) => {
  const classes = useStyles();
  const displayedPageIndex = pageIndex + 1 > pages ? pages - 1 : pageIndex;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_2___default()), {
    classes: {
      spacer: classes.spacer,
      caption: classes.caption,
      input: classes.input
    },
    rowsPerPageOptions: _constants__WEBPACK_IMPORTED_MODULE_4__.ROWS_PER_PAGE_OPTIONS,
    component: "div",
    count: count,
    rowsPerPage: rowsPerPage,
    page: displayedPageIndex,
    onPageChange: (event, newPage) => {
      onTableParamsChange('page', newPage + 1);
    },
    onRowsPerPageChange: event => {
      onTableParamsChange('pageSize', event.target.value);
    },
    ActionsComponent: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TablePaginationActions__WEBPACK_IMPORTED_MODULE_5__.TablePaginationActions, {
      rowsPerPageOptions: _constants__WEBPACK_IMPORTED_MODULE_4__.ROWS_PER_PAGE_OPTIONS,
      count: count,
      rowsPerPage: rowsPerPage,
      onPageChange: value => {
        onTableParamsChange('page', value);
      },
      selectRowsPerPage: value => onTableParamsChange('pageSize', value),
      pageIndex: displayedPageIndex,
      pages: pages,
      countOnTop: countOnTop,
      selectCount: selectCount
    }),
    labelDisplayedRows: () => null
  });
};

Pagination.defaultProps = {
  count: 0,
  rowsPerPage: 0,
  pageIndex: 0,
  pages: 0,
  selectCount: 0
};
Pagination.propTypes = {
  count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  rowsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  pageIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  pages: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  onTableParamsChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  countOnTop: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  selectCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number)
};


/***/ }),

/***/ "./src/components/table/Table/Row.js":
/*!*******************************************!*\
  !*** ./src/components/table/Table/Row.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Row": () => (/* binding */ Row)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);






const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(theme => ({
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.gray.background
    },
    '&:nth-of-type(even)': {
      backgroundColor: 'transparent'
    }
  },
  cell: {
    padding: theme.spacing(1, 2)
  }
}));

const Row = ({
  row,
  rowProps,
  subComponent,
  sortBy
}) => {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setIsExpanded(false);
  }, [sortBy]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_4___default()), _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rowProps, {
    className: classes.row,
    key: rowProps.key
  }), row.cells.map(cell => {
    const cellProps = cell.getCellProps();
    const align = cell.column.align || 'center';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default()), _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, cellProps, {
      key: cellProps.key,
      className: classes.cell,
      align: cell.column.id === 'actions' ? 'center' : align
    }), !cell.column.expander && cell.render('Cell'), cell.column.expander && cell.render('Expander', {
      isExpanded,
      setIsExpanded
    }));
  })), isExpanded && subComponent && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_4___default()), _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, rowProps, {
    key: `${rowProps.key}-expand`,
    className: classes.row
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_3___default()), {
    colSpan: row.cells.length
  }, subComponent(row.original))));
};

Row.defaultProps = {
  subComponent: undefined,
  sortBy: []
};
Row.propTypes = {
  sortBy: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  row: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
  rowProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired),
  subComponent: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_2___default().object), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)])
};


/***/ }),

/***/ "./src/components/table/Table/Select.js":
/*!**********************************************!*\
  !*** ./src/components/table/Table/Select.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Select": () => (/* binding */ Select),
/* harmony export */   "getSelectionCol": () => (/* binding */ getSelectionCol),
/* harmony export */   "isItemSelected": () => (/* binding */ isItemSelected),
/* harmony export */   "onSelect": () => (/* binding */ onSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SelectionSpeedDials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../SelectionSpeedDials */ "./src/components/table/SelectionSpeedDials/index.js");
/* harmony import */ var _utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/useSafeIntl */ "./src/utils/useSafeIntl.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./messages */ "./src/components/table/Table/messages.js");
/* harmony import */ var _utils_tableUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../utils/tableUtils */ "./src/utils/tableUtils.js");









const onSelect = ({
  isSelected,
  item,
  selection,
  setTableSelection,
  count
}) => {
  const selectedItems = [...selection.selectedItems];
  const unSelectedItems = [...selection.unSelectedItems];
  const {
    selectAll
  } = selection;

  if (selectAll) {
    if (!isSelected) {
      unSelectedItems.push(item);
    } else {
      const itemIndex = unSelectedItems.findIndex(el => lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(el, item));

      if (itemIndex !== -1) {
        unSelectedItems.splice(itemIndex, 1);
      }
    }

    setTableSelection('unselect', unSelectedItems, count);
  } else {
    if (isSelected) {
      selectedItems.push(item);
    } else {
      const itemIndex = selectedItems.findIndex(el => lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(el, item));
      selectedItems.splice(itemIndex, 1);
    }

    setTableSelection('select', selectedItems);
  }
};

const isItemSelected = (item, selection) => {
  const {
    selectedItems,
    unSelectedItems,
    selectAll
  } = selection;

  if (!selectAll) {
    return Boolean(selectedItems.find(el => lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(el, item)));
  }

  return !unSelectedItems.find(el => lodash_isEqual__WEBPACK_IMPORTED_MODULE_2___default()(el, item));
};

const getSelectionCol = (selection, setTableSelection, count, formatMessage) => ({
  Header: formatMessage(_messages__WEBPACK_IMPORTED_MODULE_6__.MESSAGES.selection),
  accessor: 'selected',
  width: 100,
  sortable: false,
  Cell: settings => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_3___default()), {
    color: "primary",
    checked: isItemSelected(settings.cell.row.original, selection),
    onChange: event => onSelect({
      isSelected: event.target.checked,
      item: settings.cell.row.original,
      selection,
      setTableSelection,
      count
    })
  })
});

const Select = ({
  count,
  multiSelect,
  selectionActions,
  setTableSelection,
  selection,
  selectionActionMessage
}) => {
  const {
    formatMessage
  } = (0,_utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_5__.useSafeIntl)();
  let actions = [...(0,_utils_tableUtils__WEBPACK_IMPORTED_MODULE_7__.defaultSelectionActions)(() => setTableSelection('selectAll', [], count), () => setTableSelection('reset'), formatMessage)];
  actions = actions.concat(selectionActions);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SelectionSpeedDials__WEBPACK_IMPORTED_MODULE_4__.SelectionSpeedDials, {
    selection: selection,
    hidden: !multiSelect,
    actions: actions,
    reset: () => setTableSelection('reset'),
    actionMessage: selectionActionMessage ?? formatMessage(_messages__WEBPACK_IMPORTED_MODULE_6__.MESSAGES.selectionAction)
  });
};

Select.defaultProps = {
  count: 0,
  multiSelect: false,
  selectionActions: [],
  selection: _utils_tableUtils__WEBPACK_IMPORTED_MODULE_7__.selectionInitialState,
  setTableSelection: () => null,
  selectionActionMessage: null
};
Select.propTypes = {
  count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number),
  multiSelect: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool),
  selectionActions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array),
  setTableSelection: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),
  selection: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),
  selectionActionMessage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)
};


/***/ }),

/***/ "./src/components/table/Table/TablePaginationActions.js":
/*!**************************************************************!*\
  !*** ./src/components/table/Table/TablePaginationActions.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablePaginationActions": () => (/* binding */ TablePaginationActions)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/FirstPage */ "@material-ui/icons/FirstPage");
/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowLeft */ "@material-ui/icons/KeyboardArrowLeft");
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "@material-ui/icons/KeyboardArrowRight");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/LastPage */ "@material-ui/icons/LastPage");
/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/useSafeIntl */ "./src/utils/useSafeIntl.js");
/* harmony import */ var _PageSelect__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PageSelect */ "./src/components/table/Table/PageSelect.js");
/* harmony import */ var _PageRowSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./PageRowSelect */ "./src/components/table/Table/PageRowSelect.js");
/* harmony import */ var _Count__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Count */ "./src/components/table/Table/Count.js");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./messages */ "./src/components/table/Table/messages.js");















const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({
  root: {
    width: '100%',
    position: 'relative'
  },
  withCount: {
    marginRight: '130px'
  },
  count: {
    position: 'absolute',
    right: theme.spacing(2)
  }
}));

const TablePaginationActions = ({
  count,
  pageIndex,
  rowsPerPage,
  onPageChange,
  pages,
  rowsPerPageOptions,
  selectRowsPerPage,
  countOnTop,
  selectCount
}) => {
  const classes = useStyles();
  const {
    formatMessage
  } = (0,_utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_10__.useSafeIntl)();

  const handleFirstPageButtonClick = () => {
    onPageChange(1);
  };

  const handleBackButtonClick = () => {
    onPageChange(pageIndex);
  };

  const handleNextButtonClick = () => {
    onPageChange(pageIndex + 2);
  };

  const handleLastPageButtonClick = () => {
    onPageChange(Math.max(0, Math.ceil(count / rowsPerPage)));
  };

  const firstDisabled = pageIndex === 0;
  const lastDisabled = pageIndex >= Math.ceil(count / rowsPerPage) - 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
    py: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: "pagination-first",
    variant: "outlined",
    onClick: handleFirstPageButtonClick,
    disabled: firstDisabled,
    "aria-label": formatMessage(_messages__WEBPACK_IMPORTED_MODULE_14__.MESSAGES.firstText)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_5___default()), {
    color: firstDisabled ? 'inherit' : 'primary'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: "pagination-previous",
    variant: "outlined",
    onClick: handleBackButtonClick,
    disabled: firstDisabled,
    "aria-label": formatMessage(_messages__WEBPACK_IMPORTED_MODULE_14__.MESSAGES.previousText)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_6___default()), {
    color: firstDisabled ? 'inherit' : 'primary'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageSelect__WEBPACK_IMPORTED_MODULE_11__.PageSelect, {
    pages: pages,
    pageIndex: pageIndex + 1,
    onPageChange: newPage => {
      onPageChange(newPage);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PageRowSelect__WEBPACK_IMPORTED_MODULE_12__.PageRowSelect, {
    rowsPerPage: rowsPerPage,
    rowsPerPageOptions: rowsPerPageOptions,
    selectRowsPerPage: selectRowsPerPage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
    className: "pagination-next",
    variant: "outlined",
    onClick: handleNextButtonClick,
    disabled: lastDisabled,
    "aria-label": formatMessage(_messages__WEBPACK_IMPORTED_MODULE_14__.MESSAGES.nextText)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_7___default()), {
    color: lastDisabled ? 'inherit' : 'primary'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_3___default()), {
    variant: "outlined",
    onClick: handleLastPageButtonClick,
    disabled: lastDisabled,
    "aria-label": formatMessage(_messages__WEBPACK_IMPORTED_MODULE_14__.MESSAGES.lastText),
    className: classnames__WEBPACK_IMPORTED_MODULE_9___default()(!countOnTop && classes.withCount, 'pagination-last')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_8___default()), {
    color: lastDisabled ? 'inherit' : 'primary'
  })), !countOnTop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: classes.count
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Count__WEBPACK_IMPORTED_MODULE_13__.Count, {
    count: count,
    selectCount: selectCount
  })));
};

TablePaginationActions.propTypes = {
  pages: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  onPageChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  pageIndex: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  rowsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  rowsPerPageOptions: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().array.isRequired),
  selectRowsPerPage: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  countOnTop: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired),
  selectCount: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)
};


/***/ }),

/***/ "./src/components/table/Table/constants.js":
/*!*************************************************!*\
  !*** ./src/components/table/Table/constants.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_ORDER": () => (/* binding */ DEFAULT_ORDER),
/* harmony export */   "DEFAULT_PAGE": () => (/* binding */ DEFAULT_PAGE),
/* harmony export */   "DEFAULT_PAGE_SIZE": () => (/* binding */ DEFAULT_PAGE_SIZE),
/* harmony export */   "ROWS_PER_PAGE_OPTIONS": () => (/* binding */ ROWS_PER_PAGE_OPTIONS)
/* harmony export */ });
const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_PAGE = 1;
const DEFAULT_ORDER = '-created_at';
const ROWS_PER_PAGE_OPTIONS = [5, 10, 20, 30, 40, 50];


/***/ }),

/***/ "./src/components/table/Table/index.js":
/*!*********************************************!*\
  !*** ./src/components/table/Table/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Table": () => (/* binding */ Table)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Box */ "@material-ui/core/Box");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "@material-ui/core/TableContainer");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/isEqual */ "lodash/isEqual");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-table */ "react-table");
/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../utils/useSafeIntl */ "./src/utils/useSafeIntl.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants */ "./src/components/table/Table/constants.js");
/* harmony import */ var _utils_tableUtils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../utils/tableUtils */ "./src/utils/tableUtils.js");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Head */ "./src/components/table/Table/Head.js");
/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Body */ "./src/components/table/Table/Body.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Footer */ "./src/components/table/Table/Footer.js");
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Select */ "./src/components/table/Table/Select.js");
/* harmony import */ var _NoResult__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./NoResult */ "./src/components/table/Table/NoResult.js");
/* harmony import */ var _Count__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Count */ "./src/components/table/Table/Count.js");
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Pagination */ "./src/components/table/Table/Pagination.js");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../LoadingSpinner */ "./src/components/LoadingSpinner/index.tsx");
/* harmony import */ var _LoadingSpinner__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _utils_useKeyPressListener__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../utils/useKeyPressListener */ "./src/utils/useKeyPressListener.js");
/* harmony import */ var _utils_useSkipEffectOnMount__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../utils/useSkipEffectOnMount */ "./src/utils/useSkipEffectOnMount.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }























/**
 * TableComponent component, no redux, no fetch, just displaying.
 * Multi selection is optionnal, if set to true you can add custom actions
 * Required props in order to work:
 * @param {Object} params
 * @param {Array} data
 * @param {Array} columns
 * @param {Number} pages
 * @param {Function} redirectTo
 *
 * Optionnal props:
 * @param {Number} count
 * @param {String} baseUrl
 * @param {Array} marginTop
 * @param {Array} countOnTop
 * @param {Array} showPagination
 * @param {Array} showFooter
 * @param {Object} extraProps
 * @param {String} paramPrefix
 *
 * Multi selection is optionnal
 * Selection props:
 * @param {Boolean} multiSelect
 * if set to true you can add custom actions, an array of object(s):
 *   @param {Array} selectionActions
 *       @param {Array} icon
 *       @param {String} label
 *       @param {Function} onClick
 *       @param {Boolean} disabled
 * You need aslo to maintain selection state in parent component
 * You can use selectionInitialState and setTableSelection from Iaso/utils/tableUtils.js
 *   @param {Object} selection
 *   @param {Function} setTableSelection
 */

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__.makeStyles)(() => ({
  tableContainer: {
    overflowY: 'hidden'
  },
  paper: {
    position: 'relative'
  }
}));

const TableComponent = props => {
  const {
    params,
    count,
    extraProps,
    paramsPrefix,
    redirectTo,
    baseUrl,
    pages,
    countOnTop,
    marginTop,
    multiSelect,
    selectionActions,
    setTableSelection,
    selection,
    selectionActionMessage,
    showPagination,
    showFooter,
    onTableParamsChange,
    defaultSorted,
    resetPageToOne,
    elevation
  } = props;
  const {
    formatMessage
  } = (0,_utils_useSafeIntl__WEBPACK_IMPORTED_MODULE_11__.useSafeIntl)();
  const classes = useStyles();
  const multiSortEnabled = (0,_utils_useKeyPressListener__WEBPACK_IMPORTED_MODULE_22__.useKeyPressListener)('Shift');
  const columns = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const temp = [...props.columns];

    if (multiSelect && !props.columns.find(c => c.accessor === 'selected')) {
      temp.push((0,_Select__WEBPACK_IMPORTED_MODULE_17__.getSelectionCol)(selection, setTableSelection, count, formatMessage));
    }

    return (0,_utils_tableUtils__WEBPACK_IMPORTED_MODULE_13__.getColumnsHeadersInfos)(temp);
  }, [props.columns, multiSelect, selection]);
  const data = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => props.data, [props.data]);
  const {
    loading
  } = extraProps;
  const initialState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(() => {
    const urlPageSize = parseInt(params[(0,_utils_tableUtils__WEBPACK_IMPORTED_MODULE_13__.getParamsKey)(paramsPrefix, 'pageSize')], 10);
    const urlSort = params[(0,_utils_tableUtils__WEBPACK_IMPORTED_MODULE_13__.getParamsKey)(paramsPrefix, 'order')] && (0,_utils_tableUtils__WEBPACK_IMPORTED_MODULE_13__.getOrderArray)(params[(0,_utils_tableUtils__WEBPACK_IMPORTED_MODULE_13__.getParamsKey)(paramsPrefix, 'order')]);
    return {
      pageIndex: params[(0,_utils_tableUtils__WEBPACK_IMPORTED_MODULE_13__.getParamsKey)(paramsPrefix, 'page')] ? parseInt(params[(0,_utils_tableUtils__WEBPACK_IMPORTED_MODULE_13__.getParamsKey)(paramsPrefix, 'page')], 10) - 1 : _constants__WEBPACK_IMPORTED_MODULE_12__.DEFAULT_PAGE - 1,
      pageSize: urlPageSize || (extraProps === null || extraProps === void 0 ? void 0 : extraProps.defaultPageSize) || _constants__WEBPACK_IMPORTED_MODULE_12__.DEFAULT_PAGE_SIZE,
      sortBy: urlSort || defaultSorted
    };
  }, []);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    prepareRow,
    gotoPage,
    setPageSize,
    setSortBy,
    page,
    state: {
      pageSize,
      pageIndex,
      sortBy
    }
  } = (0,react_table__WEBPACK_IMPORTED_MODULE_10__.useTable)({
    columns,
    data,
    initialState,
    disableMultiSort: true,
    manualPagination: true,
    manualSortBy: true,
    pageCount: pages,
    autoResetPage: false
  }, react_table__WEBPACK_IMPORTED_MODULE_10__.useSortBy, react_table__WEBPACK_IMPORTED_MODULE_10__.useResizeColumns, react_table__WEBPACK_IMPORTED_MODULE_10__.usePagination);

  const handleTableParamsChange = (key, value) => {
    const newParams = _objectSpread({}, params);

    if (key === 'order' && value.length > 0) {
      setSortBy(value);
      newParams[(0,_utils_tableUtils__WEBPACK_IMPORTED_MODULE_13__.getParamsKey)(paramsPrefix, 'order')] = (0,_utils_tableUtils__WEBPACK_IMPORTED_MODULE_13__.getSort)(value);
    } else if (key !== 'order') {
      newParams[(0,_utils_tableUtils__WEBPACK_IMPORTED_MODULE_13__.getParamsKey)(paramsPrefix, key)] = value;
    }

    if (key === 'pageSize') {
      newParams[(0,_utils_tableUtils__WEBPACK_IMPORTED_MODULE_13__.getParamsKey)(paramsPrefix, 'page')] = 1;
      setPageSize(value);
    }

    if (key === 'page') {
      gotoPage(value - 1);
    } // FIXME In time we should get rid of redirectTo


    redirectTo(baseUrl, newParams);
    onTableParamsChange(newParams);
  };

  const tableProps = _objectSpread(_objectSpread({}, getTableProps()), {}, {
    size: 'small'
  });

  (0,_utils_useSkipEffectOnMount__WEBPACK_IMPORTED_MODULE_23__.useSkipEffectOnMount)(() => {
    gotoPage(0);
  }, [resetPageToOne]);
  const rowsPerPage = parseInt(pageSize, 10);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_4___default()), {
    mt: marginTop ? 4 : 0,
    mb: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Select__WEBPACK_IMPORTED_MODULE_17__.Select, {
    count: count,
    multiSelect: multiSelect,
    selectionActions: selectionActions,
    selection: selection,
    setTableSelection: setTableSelection,
    selectionActionMessage: selectionActionMessage
  }), countOnTop && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Count__WEBPACK_IMPORTED_MODULE_19__.Count, {
    count: count,
    selectCount: selection.selectCount
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default()), {
    elevation: elevation,
    className: classes.paper
  }, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_LoadingSpinner__WEBPACK_IMPORTED_MODULE_21__.LoadingSpinner, {
    absolute: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7___default()), {
    className: classes.tableContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5___default()), _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, tableProps, {
    stickyHeader: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Head__WEBPACK_IMPORTED_MODULE_14__.Head, {
    headerGroups: headerGroups,
    setSortBy: newSort => handleTableParamsChange('order', newSort),
    multiSortEnabled: multiSortEnabled,
    sortBy: sortBy
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Body__WEBPACK_IMPORTED_MODULE_15__.Body, {
    page: page,
    getTableBodyProps: getTableBodyProps,
    prepareRow: prepareRow,
    subComponent: extraProps.SubComponent,
    sortBy: sortBy
  }), showFooter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Footer__WEBPACK_IMPORTED_MODULE_16__.Footer, {
    footerGroups: footerGroups
  }))), (page === null || page === void 0 ? void 0 : page.length) === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_NoResult__WEBPACK_IMPORTED_MODULE_18__.NoResult, {
    loading: loading
  }), (page === null || page === void 0 ? void 0 : page.length) > 0 && showPagination && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Pagination__WEBPACK_IMPORTED_MODULE_20__.Pagination, {
    count: count,
    rowsPerPage: rowsPerPage,
    pageIndex: pageIndex,
    onTableParamsChange: handleTableParamsChange,
    pages: pages,
    countOnTop: countOnTop,
    selectCount: selection.selectCount
  })));
};

TableComponent.defaultProps = {
  count: 0,
  pages: 0,
  baseUrl: '',
  countOnTop: true,
  marginTop: true,
  multiSelect: false,
  selectionActions: [],
  selection: _utils_tableUtils__WEBPACK_IMPORTED_MODULE_13__.selectionInitialState,
  setTableSelection: () => null,
  redirectTo: () => null,
  extraProps: {
    loading: false
  },
  paramsPrefix: '',
  params: {
    pageSize: 10,
    page: 1,
    order: '-created_at'
  },
  selectionActionMessage: null,
  showPagination: true,
  showFooter: false,
  onTableParamsChange: () => null,
  defaultSorted: (0,_utils_tableUtils__WEBPACK_IMPORTED_MODULE_13__.getOrderArray)(_constants__WEBPACK_IMPORTED_MODULE_12__.DEFAULT_ORDER),
  resetPageToOne: '',
  elevation: 3
};
TableComponent.propTypes = {
  params: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  count: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  pages: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
  data: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array.isRequired),
  columns: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array.isRequired),
  baseUrl: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  countOnTop: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  marginTop: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  multiSelect: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  selectionActions: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array),
  redirectTo: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  setTableSelection: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  selection: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  extraProps: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object),
  paramsPrefix: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  selectionActionMessage: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  showPagination: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  showFooter: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool),
  onTableParamsChange: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func),
  defaultSorted: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().array),
  resetPageToOne: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  elevation: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number)
};
const Table = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().memo(TableComponent, (props, prevProps) => {
  const newColumns = (0,_utils_tableUtils__WEBPACK_IMPORTED_MODULE_13__.getSimplifiedColumns)(props.columns);
  const oldColumns = (0,_utils_tableUtils__WEBPACK_IMPORTED_MODULE_13__.getSimplifiedColumns)(prevProps.columns);
  const shouldRender = !(!lodash_isEqual__WEBPACK_IMPORTED_MODULE_9___default()(props.data, prevProps.data) || !lodash_isEqual__WEBPACK_IMPORTED_MODULE_9___default()(newColumns, oldColumns) || !lodash_isEqual__WEBPACK_IMPORTED_MODULE_9___default()(props.selection.selectedItems, prevProps.selection.selectedItems) || !lodash_isEqual__WEBPACK_IMPORTED_MODULE_9___default()(props.selection.selectAll, prevProps.selection.selectAll) || !lodash_isEqual__WEBPACK_IMPORTED_MODULE_9___default()(props.selection.unSelectedItems, prevProps.selection.unSelectedItems) || !lodash_isEqual__WEBPACK_IMPORTED_MODULE_9___default()(props.extraProps, prevProps.extraProps));
  return shouldRender;
});


/***/ }),

/***/ "./src/components/table/Table/messages.js":
/*!************************************************!*\
  !*** ./src/components/table/Table/messages.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MESSAGES": () => (/* binding */ MESSAGES)
/* harmony export */ });
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_0__);

const MESSAGES = (0,react_intl__WEBPACK_IMPORTED_MODULE_0__.defineMessages)({
  previousText: {
    defaultMessage: "Previous",
    id: "blsq.table.previous"
  },
  nextText: {
    defaultMessage: "Next",
    id: "blsq.table.next"
  },
  lastText: {
    defaultMessage: "Last page",
    id: "blsq.table.last"
  },
  firstText: {
    defaultMessage: "First page",
    id: "blsq.table.first"
  },
  noDataText: {
    defaultMessage: "No result",
    id: "blsq.table.noResult"
  },
  pageText: {
    defaultMessage: "Page",
    id: "blsq.table.page"
  },
  ofText: {
    defaultMessage: "of",
    id: "blsq.table.of"
  },
  rowsText: {
    defaultMessage: "results",
    id: "blsq.table.results"
  },
  selectionAction: {
    defaultMessage: "With",
    id: "blsq.table.labels.selectionAction"
  },
  results: {
    id: "blsq.table.label.resultsLower",
    defaultMessage: "result(s)"
  },
  selection: {
    id: "blsq.table.label.selection",
    defaultMessage: "Selection"
  },
  selected: {
    id: "blsq.table.label.selected",
    defaultMessage: "selected"
  },
  loading: {
    id: "blsq.table.loading",
    defaultMessage: "Loading..."
  },
  details: {
    defaultMessage: "Details",
    id: "blsq.table.details"
  },
  sortAsc: {
    defaultMessage: "Sort ascending",
    id: "blsq.table.sortAsc"
  },
  sortDesc: {
    defaultMessage: "Sort descending",
    id: "blsq.table.sortDesc"
  },
  unSort: {
    defaultMessage: "Remove sort",
    id: "blsq.table.unSort"
  }
});


/***/ }),

/***/ "./src/constants/iaso/chipColors.js":
/*!******************************************!*\
  !*** ./src/constants/iaso/chipColors.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chipColors": () => (/* binding */ chipColors),
/* harmony export */   "getChipColors": () => (/* binding */ getChipColors),
/* harmony export */   "getOtChipColors": () => (/* binding */ getOtChipColors),
/* harmony export */   "otChipColors": () => (/* binding */ otChipColors)
/* harmony export */ });
const chipColors = ['#4dd0e1', '#01579b', '#607d8b', '#ff7043', '#e91e63', '#9c27b0', '#f44336', '#2196f3', '#009688'];
const getChipColors = (i, reverse = false) => {
  const colors = reverse ? chipColors.reverse() : chipColors;
  return colors[i % colors.length];
};
const otChipColors = ['#e91e63', '#795548', '#0277BD', '#4CAF50', '#607d8b', '#ff7043', '#01579b', '#9E9D24', '#9c27b0'];
const getOtChipColors = i => otChipColors[i % otChipColors.length];

/***/ }),

/***/ "./src/constants/iaso/snackBars.js":
/*!*****************************************!*\
  !*** ./src/constants/iaso/snackBars.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonReloadMessageKey": () => (/* binding */ buttonReloadMessageKey),
/* harmony export */   "error": () => (/* binding */ error),
/* harmony export */   "formErrorMessageKey": () => (/* binding */ formErrorMessageKey),
/* harmony export */   "formSuccessFullMessageKey": () => (/* binding */ formSuccessFullMessageKey),
/* harmony export */   "formWarningMessageKey": () => (/* binding */ formWarningMessageKey),
/* harmony export */   "reloadPage": () => (/* binding */ reloadPage),
/* harmony export */   "reloadPageMessageKey": () => (/* binding */ reloadPageMessageKey),
/* harmony export */   "success": () => (/* binding */ success),
/* harmony export */   "warning": () => (/* binding */ warning)
/* harmony export */ });
const formSuccessFullMessageKey = 'successful';
const formErrorMessageKey = 'error';
const formWarningMessageKey = 'warning';
const buttonReloadMessageKey = 'reload';
const reloadPageMessageKey = 'reloadPage';
const success = (messageKey = formSuccessFullMessageKey, messageObject) => ({
  messageKey,
  messageObject,
  options: {
    variant: 'success',
    persist: false
  }
});
const error = (messageKey = formErrorMessageKey, messageObject, errorLog) => ({
  messageKey,
  messageObject,
  options: {
    variant: 'error',
    persist: Boolean(errorLog)
  },
  errorLog,
  id: `${messageKey}-${Date.now()}`
});
const warning = (messageKey = formWarningMessageKey, messageObject, id) => ({
  messageKey,
  messageObject,
  options: {
    maxsnack: 1,
    // always display snackBar
    variant: 'warning',
    persist: true
  },
  id: id || messageKey
});
const reloadPage = (buttonMessageKey = buttonReloadMessageKey, messageKey = reloadPageMessageKey) => ({
  messageKey,
  type: 'reload',
  options: {
    maxsnack: 0,
    // always display snackBar
    variant: 'warning',
    persist: true
  },
  buttonMessageKey,
  buttonAction: () => window.location.reload(true)
});

/***/ }),

/***/ "./src/constants/iaso/uiConstants.js":
/*!*******************************************!*\
  !*** ./src/constants/iaso/uiConstants.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU_HEIGHT_WITHOUT_TABS": () => (/* binding */ MENU_HEIGHT_WITHOUT_TABS),
/* harmony export */   "MENU_HEIGHT_WITH_TABS": () => (/* binding */ MENU_HEIGHT_WITH_TABS),
/* harmony export */   "SIDEBAR_WIDTH": () => (/* binding */ SIDEBAR_WIDTH),
/* harmony export */   "textPlaceholder": () => (/* binding */ textPlaceholder)
/* harmony export */ });
const SIDEBAR_WIDTH = 350;
const MENU_HEIGHT_WITH_TABS = 112;
const MENU_HEIGHT_WITHOUT_TABS = 65;
const textPlaceholder = '--';

/***/ }),

/***/ "./src/locale/index.js":
/*!*****************************!*\
  !*** ./src/locale/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "english": () => (/* reexport default export from named module */ _en_json__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "french": () => (/* reexport default export from named module */ _fr_json__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _en_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en.json */ "./src/locale/en.json");
/* harmony import */ var _fr_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fr.json */ "./src/locale/fr.json");




/***/ }),

/***/ "./src/styles/iaso/common.js":
/*!***********************************!*\
  !*** ./src/styles/iaso/common.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "commonStyles": () => (/* binding */ commonStyles)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./src/styles/iaso/map.js");
/* harmony import */ var _constants_iaso_uiConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/iaso/uiConstants */ "./src/constants/iaso/uiConstants.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const commonStyles = theme => _objectSpread(_objectSpread({}, (0,_map__WEBPACK_IMPORTED_MODULE_1__.mapStyles)(theme)), {}, {
  containerFullHeight: {
    width: '100%',
    height: `calc(100vh - ${_constants_iaso_uiConstants__WEBPACK_IMPORTED_MODULE_2__.MENU_HEIGHT_WITH_TABS}px)`,
    margin: 0,
    overflow: 'auto',
    backgroundColor: 'white'
  },
  containerFullHeightPadded: {
    width: '100%',
    height: `calc(100vh - ${_constants_iaso_uiConstants__WEBPACK_IMPORTED_MODULE_2__.MENU_HEIGHT_WITH_TABS}px)`,
    padding: theme.spacing(4),
    margin: 0,
    backgroundColor: 'white',
    overflow: 'auto'
  },
  containerFullHeightNoTabPadded: {
    width: '100%',
    height: `calc(100vh - ${_constants_iaso_uiConstants__WEBPACK_IMPORTED_MODULE_2__.MENU_HEIGHT_WITHOUT_TABS}px)`,
    padding: theme.spacing(4),
    margin: 0,
    overflow: 'auto',
    backgroundColor: 'white'
  },
  indicator: {
    backgroundColor: 'white'
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
    width: 15,
    height: 15
  },
  smallButtonIcon: {
    marginRight: theme.spacing(1),
    width: 15,
    height: 15,
    position: 'relative',
    top: -1
  },
  listitem: {
    width: 'auto',
    paddingLeft: theme.spacing(1)
  },
  marginY: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  marginBottom: {
    marginBottom: theme.spacing(2)
  },
  marginBottomBig: {
    marginBottom: theme.spacing(4)
  },
  paddingBottomBig: {
    marginBottom: theme.spacing(4)
  },
  marginLeft: {
    marginLeft: theme.spacing(2)
  },
  marginRight: {
    marginRight: theme.spacing(2)
  },
  marginTop: {
    marginTop: theme.spacing(2)
  },
  marginTopBig: {
    marginTop: theme.spacing(4)
  },
  justifyFlexEnd: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  floatRight: {
    float: 'right'
  },
  tabs: {
    padding: theme.spacing(0, 4)
  },
  textAlignLeft: {
    textAlign: 'left'
  },
  textAlignRight: {
    textAlign: 'right'
  },
  dividerMarginNeg: {
    margin: theme.spacing(0, -4, 0, -4)
  },
  containerMarginNeg: {
    margin: theme.spacing(0, -4, -4, -4),
    width: `calc(100% + ${theme.spacing(8)})`
  },
  relativeContainer: {
    position: 'relative'
  },
  svgIcon: {
    width: 24,
    heigth: 24
  },
  svgChipIcon: {
    width: 20,
    heigth: 20,
    padding: 4
  },
  textError: {
    color: theme.palette.error.main,
    display: 'flex',
    alignItems: 'center'
  },
  popperFixed: {
    position: 'fixed !important'
  },
  linkButton: {
    color: 'inherit',
    textDecoration: 'none',
    display: 'flex'
  },
  capitalize: {
    display: 'inline-block',
    '&:first-letter': {
      textTransform: 'uppercase'
    }
  }
});



/***/ }),

/***/ "./src/styles/iaso/map.js":
/*!********************************!*\
  !*** ./src/styles/iaso/map.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapStyles": () => (/* binding */ mapStyles)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_0__);


const mapStyles = theme => ({
  mapContainer: {
    height: '62vh',
    marginBottom: theme.spacing(2),
    '& .leaflet-container .leaflet-popup-content a': {
      color: theme.palette.primary.main
    },
    '& .marker-cluster.color': {
      color: 'white'
    },
    '& .marker-cluster.color div': {
      marginLeft: 2,
      marginTop: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    '& .marker-cluster.color div .border': {
      position: 'absolute',
      display: 'block',
      height: '100%',
      width: '100%',
      top: -2,
      left: -2,
      borderRadius: '100%',
      zIndex: -1
    },
    '& .marker-cluster.primary': {
      backgroundColor: (0,_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.primary.main, 0.6)
    },
    '& .marker-cluster.primary > div': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    '& .marker-custom': {
      zIndex: '500 !important'
    },
    '& .marker-custom.primary span': {
      position: 'relative',
      display: 'block',
      height: '100%',
      width: '100%'
    },
    '& .marker-custom .marker_bg, & .marker-custom.primary .marker_bg': {
      position: 'absolute',
      display: 'block',
      height: '10px',
      width: '10px',
      borderRadius: '10px',
      backgroundColor: 'white',
      top: 8,
      left: 8
    },
    '& .marker-custom.color': {
      zIndex: '300 !important'
    },
    '& .marker-custom.color .svg-icon': {
      display: 'block',
      height: 'auto',
      width: 16,
      position: 'absolute',
      top: 6,
      left: 4,
      zIndex: 200,
      borderRadius: '5px'
    },
    '& .marker-custom.color .marker_shadow': {
      position: 'absolute',
      bottom: 2,
      left: -1,
      zIndex: -1,
      pointerEvents: 'none'
    },
    '& .marker-custom.color svg': {
      position: 'absolute',
      bottom: 0,
      left: -5,
      pointerEvents: 'none'
    },
    '& .marker-custom.primary svg': {
      fill: theme.palette.primary.main,
      position: 'absolute',
      bottom: 0,
      left: -5,
      pointerEvents: 'none'
    },
    '& path.primary': {
      fill: (0,_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.primary.main, 0.6),
      stroke: theme.palette.primary.main
    },
    '& path.secondary': {
      fill: (0,_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_0__.alpha)(theme.palette.secondary.main, 0.6),
      stroke: theme.palette.secondary.main
    },
    '& path.no-pointer-event': {
      pointerEvents: 'none !important'
    },
    '& .marker-custom.primary img': {
      position: 'absolute',
      bottom: 2,
      left: -1,
      zIndex: -1,
      pointerEvents: 'none',
      width: 'auto'
    },
    '& .leaflet-draw.leaflet-control': {
      display: 'none'
    }
  }
});



/***/ }),

/***/ "./src/styles/iaso/mapPopup.js":
/*!*************************************!*\
  !*** ./src/styles/iaso/mapPopup.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapPopupStyles": () => (/* binding */ mapPopupStyles)
/* harmony export */ });
const mapPopupStyles = theme => ({
  popup: {
    // margin: 0,
    '& .leaflet-popup-content-wrapper': {
      padding: 0
    },
    '& .leaflet-popup-content': {
      margin: 0,
      minHeight: 100,
      width: '360px !important',
      '& p.MuiTypography-root': {
        margin: 0,
        fontSize: 12
      },
      '& .MuiGrid-root > div': {
        top: 1
      }
    },
    '& a.leaflet-popup-close-button': {
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      padding: '1px 0 0 0',
      top: '8px',
      right: '8px',
      borderRadius: '20px',
      height: '18px'
    },
    '& a.leaflet-popup-close-button:hover': {
      color: theme.palette.primary.main,
      backgroundColor: 'white',
      border: `1px solid ${theme.palette.primary.main}`
    }
  },
  popupListItemLabel: {
    textAlign: 'right',
    fontWeight: 'bold',
    display: 'inline-block',
    paddingRight: theme.spacing(1) / 2
  },
  popuplistItem: {
    textAlign: 'left'
  },
  popupCard: {
    height: '100%',
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    boxShadow: 'none'
  },
  popupCardMedia: {
    height: 180
  },
  popupCardContent: {
    margin: theme.spacing(3, 2, 2, 2),
    overflow: 'hidden',
    wordBreak: 'break-all',
    padding: '0 !important'
  }
});



/***/ }),

/***/ "./src/styles/iaso/theme.js":
/*!**********************************!*\
  !*** ./src/styles/iaso/theme.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rawTheme": () => (/* binding */ rawTheme),
/* harmony export */   "theme": () => (/* binding */ theme)
/* harmony export */ });
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const rawTheme = {
  typography: {
    useNextVariants: true
  },
  textColor: '#333',
  palette: {
    primary: {
      main: '#006699',
      secondary: '#0066cc',
      background: '#F5F5F5'
    },
    gray: {
      main: '#666',
      border: 'rgba(0,0,0,0.02)',
      background: 'rgba(0,0,0,0.03)'
    },
    mediumGray: {
      main: '#A2A2A2'
    },
    ligthGray: {
      main: '#F7F7F7',
      border: 'rgba(0, 0, 0, 0.12)',
      background: 'rgba(0, 0, 0, 0.012)'
    },
    error: {
      main: 'rgb(215, 25, 28)',
      background: 'rgba(215, 25, 28, 0.2)',
      backgroundHard: 'rgba(215, 25, 28, 0.7)'
    },
    success: {
      main: '#4caf50',
      background: 'rgba(#4caf50, 0.2)'
    }
  }
};
const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)(rawTheme);


/***/ }),

/***/ "./src/svg/CsvSvgComponent.js":
/*!************************************!*\
  !*** ./src/svg/CsvSvgComponent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CsvSvg": () => (/* binding */ CsvSvg)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "@material-ui/core/SvgIcon");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




function CsvSvg(props) {
  const finalProps = _objectSpread(_objectSpread({}, props), {}, {
    viewBox: '-7 -3 40 40'
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default()), finalProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M11.184,0,3.021,8.619v22.9H28.498V0Zm-.721,3.624V7.443H6.847ZM26.528,29.55H4.991V9.413h7.443V1.97H26.528Z",
    transform: "translate(-3.021)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    // eslint-disable-next-line max-len
    d: "M15.00336,19.0177a1.22617,1.22617,0,0,1,.42463-.23654,1.59576,1.59576,0,0,1,.48321-.07382,1.848,1.848,0,0,1,1.435.63421l.96642-1.16047a2.7286,2.7286,0,0,0-1.04652-.69533A3.96626,3.96626,0,0,0,15.85349,17.25a3.50467,3.50467,0,0,0-1.06891.16828,2.76253,2.76253,0,0,0-.94488.51991,2.61976,2.61976,0,0,0-.67357.88345,2.92663,2.92663,0,0,0-.25667,1.27557,2.76842,2.76842,0,0,0,.168,1.01839,2.42228,2.42228,0,0,0,.45393.74216,2.97378,2.97378,0,0,0,.65892.5469,6.79238,6.79238,0,0,0,.79845.41831,5.06844,5.06844,0,0,1,1.11285.6747,1.21326,1.21326,0,0,1,.43928.98505,1.301,1.301,0,0,1-.36607.98505,1.27774,1.27774,0,0,1-.92249.35085,2.34342,2.34342,0,0,1-.97417-.2159A2.40505,2.40505,0,0,1,13.465,25.009l-.95178,1.18746a3.36245,3.36245,0,0,0,1.17142.78265,4.04267,4.04267,0,0,0,1.59605.31036,3.43456,3.43456,0,0,0,1.14213-.18892,2.68383,2.68383,0,0,0,.94488-.56039,2.73792,2.73792,0,0,0,.64428-.91044,3.01091,3.01091,0,0,0,.242-1.24144,2.49319,2.49319,0,0,0-.205-1.05252,2.66131,2.66131,0,0,0-.52713-.76915,3.45085,3.45085,0,0,0-.71749-.55325q-.39536-.2298-.77607-.40482a4.64417,4.64417,0,0,1-1.03963-.62786,1.15284,1.15284,0,0,1-.39535-.93743,1.51791,1.51791,0,0,1,.11025-.60722A1.11837,1.11837,0,0,1,15.00336,19.0177Z",
    transform: "translate(-3.021)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    // eslint-disable-next-line max-len
    d: "M7.90166,19.78685a2.21091,2.21091,0,0,1,.65892-.74931,1.57,1.57,0,0,1,.92249-.27622,1.85887,1.85887,0,0,1,1.55212.79613L12.04554,18.424a2.7775,2.7775,0,0,0-1.0982-.87075A3.78071,3.78071,0,0,0,9.38057,17.25a3.35465,3.35465,0,0,0-1.57452.37069,3.54422,3.54422,0,0,0-1.20845,1.039A4.98612,4.98612,0,0,0,5.82929,20.252a7.6351,7.6351,0,0,0,0,4.02832,5.06146,5.06146,0,0,0,.76142,1.58514,3.527,3.527,0,0,0,1.2007,1.04617,3.33459,3.33459,0,0,0,1.58916.37783,3.28915,3.28915,0,0,0,1.60294-.35084A3.14362,3.14362,0,0,0,12.03,26.021l-1.01034-1.093a2.286,2.286,0,0,1-.62189.59373,1.58619,1.58619,0,0,1-.88545.24289,1.6258,1.6258,0,0,1-.94488-.277,2.17538,2.17538,0,0,1-.66667-.74851,3.85061,3.85061,0,0,1-.39535-1.11364,6.71546,6.71546,0,0,1-.13179-1.35574,6.80205,6.80205,0,0,1,.13179-1.37A3.90579,3.90579,0,0,1,7.90166,19.78685Z",
    transform: "translate(-3.021)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("polygon", {
    points: "19.377 25.157 19.333 25.157 17.605 17.493 15.643 17.493 18.176 27.047 20.402 27.047 22.979 17.493 21.105 17.493 19.377 25.157"
  })));
}



/***/ }),

/***/ "./src/svg/DHIS2SvgComponent.js":
/*!**************************************!*\
  !*** ./src/svg/DHIS2SvgComponent.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DHIS2Svg": () => (/* binding */ DHIS2Svg)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "@material-ui/core/SvgIcon");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/* eslint-disable max-len */



function DHIS2Svg(props) {
  const finalProps = _objectSpread(_objectSpread({}, props), {}, {
    viewBox: '0 0 200 182'
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default()), finalProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M191.73,60,109,6.34a19.73,19.73,0,0,0-20.32,0L8.31,58.43a12,12,0,0,0-.25,20.63L88.6,134a19.37,19.37,0,0,0,20.37.25l82.76-53.65a11.88,11.88,0,0,0,0-20.59Zm-91,61.45a4.29,4.29,0,0,1-3.49-.05l-77-52.49L97,19.13a4.76,4.76,0,0,1,3.74,0L179.6,70.28Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M88.66,47.82,45.1,76.06l13.61,9.33L97,60.61a4.76,4.76,0,0,1,3.74,0l39.37,25.52,14-9.06L109,47.82A19.76,19.76,0,0,0,88.66,47.82Z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M191.73,101.46l-8.62-5.59-14.05,9.06,10.53,6.83-78.91,51.15a4.37,4.37,0,0,1-3.49,0l-77-52.5,10-6.47L16.55,94.57,8.31,99.91a12,12,0,0,0-.25,20.63L88.6,175.46a19.34,19.34,0,0,0,20.37.24l82.75-53.65a11.88,11.88,0,0,0,0-20.59Z"
  })));
}



/***/ }),

/***/ "./src/svg/ExcellSvgComponent.js":
/*!***************************************!*\
  !*** ./src/svg/ExcellSvgComponent.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcellSvg": () => (/* binding */ ExcellSvg)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "@material-ui/core/SvgIcon");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




function ExcellSvg(props) {
  const finalProps = _objectSpread(_objectSpread({}, props), {}, {
    viewBox: '-7 -3 40 40'
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default()), finalProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M11.15,0L3.011,8.592v22.834h25.403V0H11.15z M10.434,3.613v3.808H6.826L10.434,3.613z M26.449,29.462H4.977V9.385h7.421 V1.964h14.053v27.498H26.449z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M15.004,14.766h0.491v-1.768H9.444v1.768h0.737c0.202,0,0.402,0.055,0.617,0.168c0.203,0.107,0.396,0.306,0.572,0.585 l2.919,4.738l-2.939,4.21c-0.16,0.229-0.306,0.421-0.438,0.576c-0.113,0.133-0.228,0.242-0.337,0.321 c-0.098,0.07-0.198,0.119-0.307,0.148c-0.127,0.034-0.282,0.051-0.462,0.051H9.198v1.769h5.438v-1.276l-0.055-0.49H14.09 c-0.449,0-0.643-0.057-0.724-0.094c0-0.053,0.01-0.115,0.028-0.186c0.024-0.088,0.055-0.176,0.095-0.264 c0.043-0.097,0.087-0.188,0.138-0.279c0.046-0.084,0.091-0.159,0.139-0.229l1.65-2.44l1.769,2.843 c0.068,0.114,0.123,0.209,0.159,0.289c0.036,0.077,0.05,0.121,0.054,0.139l0.013,0.108c0,0-0.112,0.113-0.625,0.113h-0.592v1.768 h6.033v-1.768h-0.729c-0.144,0-0.3-0.052-0.464-0.151c-0.133-0.08-0.35-0.259-0.616-0.613l-3.272-5.259l2.529-3.646 c0.164-0.238,0.314-0.437,0.452-0.594c0.125-0.142,0.246-0.26,0.362-0.349c0.092-0.069,0.182-0.116,0.272-0.142 c0.104-0.03,0.226-0.045,0.361-0.045h0.655v-1.768h-5.074v1.277l0.055,0.491h0.491c0.125,0,0.237,0.006,0.341,0.02 c0.091,0.011,0.145,0.029,0.173,0.029h0.001c0,0.1-0.027,0.213-0.085,0.336c-0.075,0.168-0.176,0.346-0.301,0.535l-1.349,2.051 l-1.287-2.08c-0.095-0.15-0.17-0.276-0.222-0.375c-0.047-0.09-0.083-0.168-0.107-0.231c-0.017-0.046-0.029-0.087-0.033-0.113 c-0.006-0.039-0.009-0.08-0.031-0.089c0.002-0.001,0.042-0.025,0.162-0.049C14.628,14.776,14.775,14.766,15.004,14.766z"
  })));
}



/***/ }),

/***/ "./src/svg/OrgUnitSvgComponent.js":
/*!****************************************!*\
  !*** ./src/svg/OrgUnitSvgComponent.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrgUnitSvg": () => (/* binding */ OrgUnitSvg)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "@material-ui/core/SvgIcon");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/* eslint-disable max-len */



function OrgUnitSvg(props) {
  const finalProps = _objectSpread(_objectSpread({}, props), {}, {
    viewBox: '0 0 85 85'
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default()), finalProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M17.518403,78.3591 C16.2139001,78.3570957 15.0595734,77.5172438 14.660803,76.28 L0.1493927,31.77603 C-0.249658449,30.5438778 0.191427305,29.1958057 1.242723,28.43453 L39.235803,0.93513 C40.2882476,0.175265921 41.7117584,0.175265921 42.764203,0.93513 L80.757302,28.43453 C81.8085865,29.1958138 82.2496596,30.5438843 81.850602,31.77603 L67.339202,76.28 C66.9404317,77.5172435 65.7861055,78.3570953 64.481603,78.3591 L17.518403,78.3591 L17.518403,78.3591 Z M19.705003,72.3692 L62.295003,72.3692 L75.464602,31.99883 L41.000003,7.07363 L6.535413,31.99883 L19.705003,72.3692 Z"
  }));
}



/***/ }),

/***/ "./src/svg/PdfSvgComponent.js":
/*!************************************!*\
  !*** ./src/svg/PdfSvgComponent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PdfSvg": () => (/* binding */ PdfSvg)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "@material-ui/core/SvgIcon");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




function PdfSvg(props) {
  const finalProps = _objectSpread(_objectSpread({}, props), {}, {
    viewBox: '-4 -3 40 40'
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default()), finalProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M13.2,12.3c0.2,1.8,0.3,5.1-1.1,7.8c-0.1,0.2-0.2,0.4-0.3,0.6c-2.3,0.7-4.8,2.1-5.2,3.6c-0.2,0.6,0,1.2,0.4,1.6 c0.4,0.5,1,0.7,1.6,0.7c1.4,0,2.9-1.4,4.6-4.2c0.6-0.1,4-0.6,4.7-0.6c2,2,3.6,3,4.9,3c0.8,0,1.5-0.4,1.9-1.1 c0.3-0.5,0.3-1.1,0-1.6c-0.8-1.5-4-2.1-5.9-2.2c-0.2-0.2-0.3-0.4-0.5-0.6c-2-2.2-2.8-5.5-3-7.2c0-0.4-0.1-0.7-0.1-1 c-0.1-0.9-0.7-1-1-1c-0.3,0-0.6,0.1-0.7,0.3c-0.3,0.3-0.3,0.7-0.2,1C13.1,11.7,13.1,12,13.2,12.3z M8.6,24.6 c0.2-0.2,0.6-0.5,1.1-0.8C9.2,24.3,8.8,24.5,8.6,24.6z M22.5,22.9c-0.2,0-0.5-0.1-1-0.4C22,22.6,22.3,22.7,22.5,22.9z M14.9,17.9 c0.4,0.7,0.8,1.4,1.2,2c-0.2,0-1.8,0.2-1.9,0.2C14.5,19.5,14.7,18.7,14.9,17.9z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M11.1,0L3,8.5v22.7h25.3V0H11.1z M10.4,3.6v3.8H6.8L10.4,3.6z M26.3,29.3H4.9v-20h7.4V2h14L26.3,29.3L26.3,29.3z"
  })));
}



/***/ }),

/***/ "./src/svg/ShapeSvgComponent.js":
/*!**************************************!*\
  !*** ./src/svg/ShapeSvgComponent.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShapeSvg": () => (/* binding */ ShapeSvg)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "@material-ui/core/SvgIcon");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




function ShapeSvg(props) {
  const finalProps = _objectSpread(_objectSpread({}, props), {}, {
    viewBox: '-5 -5 55 55'
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default()), finalProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M46,14V2H34V6H14V2H2V14H6V34H2V46H14V42H34v4H46V34H42V14ZM6,6h4v4H6Zm4,36H6V38h4Zm24-4H14V34H10V14h4V10H34v4h4V34H34Zm8,4H38V38h4ZM38,10V6h4v4Z"
  }));
}



/***/ }),

/***/ "./src/svg/TextSvgComponent.js":
/*!*************************************!*\
  !*** ./src/svg/TextSvgComponent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextSvg": () => (/* binding */ TextSvg)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "@material-ui/core/SvgIcon");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




function TextSvg(props) {
  const finalProps = _objectSpread(_objectSpread({}, props), {}, {
    viewBox: '-4 -3 40 40'
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default()), finalProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M11.2,0L3,8.6v22.9h25.5V0H11.2z M10.5,3.6v3.8H6.8L10.5,3.6z M26.5,29.5H5V9.4h7.4V2h14.1V29.5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("polygon", {
    points: "19.1,18.6 21,18.6 21,26.8 22.6,26.8 22.6,18.6 24.4,18.6 24.4,17.2 19.1,17.2 "
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("polygon", {
    points: "7.1,18.6 9,18.6 9,26.8 10.6,26.8 10.6,18.6 12.4,18.6 12.4,17.2 7.1,17.2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("polygon", {
    points: "18.9,17.2 17.2,17.2 15.8,20.5 14.3,17.2 12.6,17.2 14.8,21.8 12.4,26.8 14.1,26.8 15.7,23.1 17.3,26.8 19.1,26.8 16.7,21.8"
  })));
}



/***/ }),

/***/ "./src/svg/WordSvgComponent.js":
/*!*************************************!*\
  !*** ./src/svg/WordSvgComponent.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordSvg": () => (/* binding */ WordSvg)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "@material-ui/core/SvgIcon");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




function WordSvg(props) {
  const finalProps = _objectSpread(_objectSpread({}, props), {}, {
    viewBox: '-7 -3 40 40'
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default()), finalProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M11.184,0,3.021,8.619v22.9H28.498V0Zm-.721,3.624V7.443H6.847ZM26.528,29.55H4.991V9.413h7.443V1.97H26.528Z",
    transform: "translate(-3.021)"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    // eslint-disable-next-line max-len
    d: "M13.5,15.211a1.02243,1.02243,0,0,1,.335.197,1.583,1.583,0,0,1,.278.351,4.63323,4.63323,0,0,1,.268.532l.62,1.764-1.68,4.828L11.214,16.88c-.135-.372-.235-.679-.296-.92a2.01149,2.01149,0,0,1-.085-.435.31193.31193,0,0,1,.127-.256.78111.78111,0,0,1,.506-.129h.59V14.061H6.701V15.14h.37a1.50644,1.50644,0,0,1,.688.125.85109.85109,0,0,1,.346.367c.039.072.158.363.502,1.32l3.794,10.6h.852l2.564-7.236,2.579,7.236h.891l3.564-10.303A10.633,10.633,0,0,1,23.4,15.78a1.97318,1.97318,0,0,1,.232-.336.927.927,0,0,1,.209-.179.81631.81631,0,0,1,.244-.095,1.82682,1.82682,0,0,1,.361-.032h.37V14.059H20.355v1.079h.368a2.06347,2.06347,0,0,1,.84.142.25379.25379,0,0,1,.169.271,5.512,5.512,0,0,1-.383,1.462l-2.028,5.868-2.035-5.779a5.26922,5.26922,0,0,1-.394-1.515.40192.40192,0,0,1,.115-.33c.046-.045.174-.117.508-.117h.7V14.061H12.62V15.14h.369A1.61981,1.61981,0,0,1,13.5,15.211Z",
    transform: "translate(-3.021)"
  })));
}



/***/ }),

/***/ "./src/svg/XmlSvgComponent.js":
/*!************************************!*\
  !*** ./src/svg/XmlSvgComponent.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XmlSvg": () => (/* binding */ XmlSvg)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "@material-ui/core/SvgIcon");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




function XmlSvg(props) {
  const finalProps = _objectSpread(_objectSpread({}, props), {}, {
    viewBox: '0 0 40 40'
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_2___default()), finalProps, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M15.2,3L7,11.6v22.9h25.5V3H15.2z M14.5,6.6v3.8h-3.7L14.5,6.6z M30.5,32.5H9V12.4h7.4V5h14.1V32.5z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M12.4,28.1L10.7,31H9.4l2.4-4l-2.2-3.9h1.3l1.6,2.7l1.6-2.7h1.3L13,27l2.5,4h-1.3L12.4,28.1z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M16.4,23.1h1.1l2.2,5.2l2.2-5.2h1.1V31h-1.2v-4.9h0l-1.6,3.8h-1l-1.6-3.8h0V31h-1.2V23.1z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("path", {
    d: "M25,23.1h1.2v6.8H30V31h-5V23.1z"
  }))));
}



/***/ }),

/***/ "./src/utils/fetchData.js":
/*!********************************!*\
  !*** ./src/utils/fetchData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUrl": () => (/* binding */ createUrl)
/* harmony export */ });
function createUrl(params, url = '/charts') {
  // Create a url from an params object
  // e.g.: `{foo: 11, bar: 22} => '/foo/11/bar/22'`
  Object.keys(params).forEach(key => {
    const value = params[key];

    if (value !== undefined && value !== null && value !== '') {
      url += `/${key}/${value}`; // eslint-disable-line
    }
  });
  return url;
}

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addPositionIndex": () => (/* binding */ addPositionIndex),
/* harmony export */   "capitalize": () => (/* binding */ capitalize),
/* harmony export */   "clone": () => (/* binding */ clone),
/* harmony export */   "deepEqual": () => (/* binding */ deepEqual),
/* harmony export */   "formatThousand": () => (/* binding */ formatThousand),
/* harmony export */   "removePositionIndex": () => (/* binding */ removePositionIndex),
/* harmony export */   "substituteVars": () => (/* binding */ substituteVars),
/* harmony export */   "truncateText": () => (/* binding */ truncateText)
/* harmony export */ });
function clone(x) {
  return JSON.parse(JSON.stringify(x));
}
function deepEqual(a, b, ignoreNull = false) {
  if (typeof a !== 'object') {
    return a === b;
  }

  let ka = Object.keys(a);
  let kb = Object.keys(b);
  let key;
  let i; // ignore null and undefined values

  if (ignoreNull) {
    ka = ka.filter(x => a[x] != null);
    kb = kb.filter(x => b[x] != null);
  } // having the same number of owned properties (keys incorporates
  // hasOwnProperty)


  if (ka.length !== kb.length) {
    return false;
  } // the same set of keys (although not necessarily the same order),


  ka.sort();
  kb.sort(); // cheap key test

  for (i = ka.length - 1; i >= 0; i -= 1) {
    if (ka[i] !== kb[i]) {
      return false;
    }
  } // equivalent values for every corresponding key, and
  // possibly expensive deep test


  for (i = ka.length - 1; i >= 0; i -= 1) {
    key = ka[i];

    if (!deepEqual(a[key], b[key], ignoreNull)) {
      return false;
    }
  }

  return true;
}
function substituteVars(obj, subs, transform = x => x) {
  // Replace every occurence of a placeholder in a value of every property of the object.
  // The syntax for the placeholder is `${<varname>}`
  // An optional transform function can pretransform the substitute
  // e.g. `{foo: "${bar}"} => {foo: "baz"}` if `subs = {bar: "baz"}`
  // We use json.stringify -> json.parse to clone the object and replace values.
  // See the test for a complete example.
  return JSON.parse(JSON.stringify(obj, (key, value) => {
    if (typeof value === 'string') {
      const match = value.match(/\$\{([a-zA-Z0-9_-]+)\}/);

      if (match) {
        const k = match[1];

        if (!subs.hasOwnProperty(k)) {
          console.warn('Cannot find match in substitudes for value:', value);
        } else {
          return transform(subs[k]);
        }
      }
    }

    return value;
  }));
}
const capitalize = (text, keepEndCase = false) => text.split(' ').map(word => word.slice(0, 1).toUpperCase() + (keepEndCase ? word.slice(1) : word.slice(1).toLowerCase())).join(' ');
const formatThousand = number => {
  if (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return '0';
};
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength - 4)}...   `;
  }

  return `${text}   `;
};
const addPositionIndex = array => {
  const tempArray = [];

  if (array) {
    array.forEach((e, index) => {
      tempArray.push({
        value: e,
        position: index
      });
    });
  }

  return tempArray;
};
const removePositionIndex = array => {
  const tempArray = [];

  if (array) {
    array.forEach(e => {
      tempArray.push(e.value);
    });
  }

  return tempArray;
};

/***/ }),

/***/ "./src/utils/injectIntl.js":
/*!*********************************!*\
  !*** ./src/utils/injectIntl.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "injectIntl": () => (/* binding */ injectIntl)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patchIntl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patchIntl */ "./src/utils/patchIntl.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }






const FakeComponent = props => {
  const propsCopy = _objectSpread({}, props);

  const Component = props.component;
  const intlCopy = (0,_patchIntl__WEBPACK_IMPORTED_MODULE_5__.patchIntl)((0,react_intl__WEBPACK_IMPORTED_MODULE_4__.useIntl)());
  delete propsCopy.component;
  delete propsCopy.ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(Component, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, propsCopy, {
    intl: intlCopy,
    forwardedRef: props.ref
  }));
};

FakeComponent.defaultProps = {
  ref: undefined
};
FakeComponent.propTypes = {
  component: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().any.isRequired),
  ref: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/**
 * same as newIjectIntl in iaso-root codebase
 * used to inject a patched version of react-intl
 *
 */

const injectIntl = Component => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().forwardRef((props, ref) => {
  const propsCopy = _objectSpread(_objectSpread({}, props), {}, {
    component: Component,
    ref
  });

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(FakeComponent, propsCopy);
});



/***/ }),

/***/ "./src/utils/intlUtils.js":
/*!********************************!*\
  !*** ./src/utils/intlUtils.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayDateFromTimestamp": () => (/* binding */ displayDateFromTimestamp),
/* harmony export */   "translateOptions": () => (/* binding */ translateOptions),
/* harmony export */   "useTranslatedOptions": () => (/* binding */ useTranslatedOptions)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useSafeIntl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSafeIntl */ "./src/utils/useSafeIntl.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



/**
 * Accept options either with a string label or an intl MessageDescriptor label
 * and translate if needed
 *
 * @param {Array} options
 * @param {function} formatMessage
 * @return {Array}
 */

const translateOptions = (options, formatMessage) => options.map(option => {
  if (typeof option.label === 'object' && 'id' in option.label) {
    return _objectSpread(_objectSpread({}, option), {}, {
      label: formatMessage(option.label)
    });
  }

  return option;
}); // options = [{id:'translation.key',defaultMessage:'What I want to display'}]

const useTranslatedOptions = options => {
  const {
    formatMessage
  } = (0,_useSafeIntl__WEBPACK_IMPORTED_MODULE_2__.useSafeIntl)();
  return translateOptions(options, formatMessage);
};
/**
 * Receive a timestamp and displays it as a human readable date
 *
 * @param {Number} timestamp
 */

const displayDateFromTimestamp = timestamp => moment__WEBPACK_IMPORTED_MODULE_1___default().unix(timestamp).format('LTS');

/***/ }),

/***/ "./src/utils/patchIntl.js":
/*!********************************!*\
  !*** ./src/utils/patchIntl.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "patchIntl": () => (/* binding */ patchIntl)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

const patchIntl = intl => _objectSpread(_objectSpread({}, intl), {}, {
  formatMessage: (message, value) => {
    if (message && message.id) {
      return intl.formatMessage(message, value);
    }

    console.warn('Warning: Message object is not defined properly!', message);
    return null;
  }
});



/***/ }),

/***/ "./src/utils/tableUtils.js":
/*!*********************************!*\
  !*** ./src/utils/tableUtils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultSelectionActions": () => (/* binding */ defaultSelectionActions),
/* harmony export */   "getColumnsHeadersInfos": () => (/* binding */ getColumnsHeadersInfos),
/* harmony export */   "getOrderArray": () => (/* binding */ getOrderArray),
/* harmony export */   "getParamsKey": () => (/* binding */ getParamsKey),
/* harmony export */   "getSimplifiedColumns": () => (/* binding */ getSimplifiedColumns),
/* harmony export */   "getSort": () => (/* binding */ getSort),
/* harmony export */   "getTableParams": () => (/* binding */ getTableParams),
/* harmony export */   "getTableUrl": () => (/* binding */ getTableUrl),
/* harmony export */   "selectionInitialState": () => (/* binding */ selectionInitialState),
/* harmony export */   "setTableSelection": () => (/* binding */ setTableSelection),
/* harmony export */   "tableInitialResult": () => (/* binding */ tableInitialResult)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Remove */ "@material-ui/icons/Remove");
/* harmony import */ var _material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./src/utils/index.js");
/* harmony import */ var _components_table_InfoHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/table/InfoHeader */ "./src/components/table/InfoHeader/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







const getTableUrl = (urlKey, params, toExport = false, exportType = 'csv', asLocation = false, asSmallDict = false) => {
  let url = `/api/${urlKey}/?`;

  const clonedParams = _objectSpread({}, params);

  if (toExport) {
    clonedParams[exportType] = true;
  }

  if (asLocation) {
    clonedParams.asLocation = true;
    clonedParams.limit = clonedParams.locationLimit;
    delete clonedParams.page;
  }

  if (asSmallDict) {
    clonedParams.limit = clonedParams.locationLimit;
    delete clonedParams.page;
  }

  delete clonedParams.locationLimit;
  const usedParams = [];
  Object.keys(clonedParams).forEach(key => {
    const value = clonedParams[key];

    if (value && !usedParams.includes(key)) {
      usedParams.push(key);
      url += `&${key}=${value}`;
    }
  });
  return url;
};



const getOrderValue = obj => !obj.desc ? obj.id : `-${obj.id}`;

const getSort = sortList => {
  let orderTemp;
  sortList.forEach((sort, index) => {
    orderTemp = `${orderTemp || ''}${index > 0 ? ',' : ''}${getOrderValue(sort)}`;
  });
  return orderTemp;
};
const getOrderArray = orders => orders.split(',').map(stringValue => ({
  id: stringValue.replace('-', ''),
  desc: stringValue.indexOf('-') !== -1
}));
const getSimplifiedColumns = columns => columns.map(c => {
  if (c.columns) {
    return {
      id: c.accessor,
      columns: getSimplifiedColumns(c.columns)
    };
  }

  return {
    id: c.accessor
  };
});
const defaultSelectionActions = (selectAll, unSelectAll, formatMessage) => [{
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_3___default()), null),
  label: formatMessage({
    id: "iaso.label.selectAll",
    defaultMessage: "Select all"
  }),
  onClick: () => selectAll()
}, {
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((_material_ui_icons_Remove__WEBPACK_IMPORTED_MODULE_2___default()), null),
  label: formatMessage({
    id: "iaso.label.unSelectAll",
    defaultMessage: "Unselect all"
  }),
  onClick: () => unSelectAll()
}];
const selectionInitialState = {
  selectedItems: [],
  unSelectedItems: [],
  selectAll: false,
  selectCount: 0
};
const setTableSelection = (selection, selectionType, items = [], totalCount = 0) => {
  switch (selectionType) {
    case 'select':
      return _objectSpread(_objectSpread({}, selection), {}, {
        selectedItems: items,
        selectCount: items.length
      });

    case 'unselect':
      return _objectSpread(_objectSpread({}, selection), {}, {
        unSelectedItems: items,
        selectCount: totalCount - items.length
      });

    case 'selectAll':
      return _objectSpread(_objectSpread({}, selection), {}, {
        selectAll: true,
        selectedItems: [],
        unSelectedItems: [],
        selectCount: totalCount
      });

    case 'reset':
      return selectionInitialState;

    default:
      return _objectSpread({}, selection);
  }
};
const getParamsKey = (paramsPrefix, key) => {
  if (paramsPrefix === '') {
    return key;
  }

  return `${paramsPrefix}${(0,_index__WEBPACK_IMPORTED_MODULE_4__.capitalize)(key, true)}`;
};
const getTableParams = (params, paramsPrefix, filters, apiParams, defaultSorted = [{
  id: 'name',
  desc: false
}], defaultPageSize = 10) => {
  const newParams = _objectSpread(_objectSpread({}, apiParams), {}, {
    limit: parseInt(params[getParamsKey(paramsPrefix, 'pageSize')], 10) || defaultPageSize,
    page: parseInt(params[getParamsKey(paramsPrefix, 'page')], 10) || 0,
    order: getSort(params[getParamsKey(paramsPrefix, 'order')] ? getOrderArray(params[getParamsKey(paramsPrefix, 'order')]) : defaultSorted)
  });

  filters.forEach(f => {
    newParams[f.apiUrlKey] = params[f.urlKey] ?? f.defaultValue;
  });
  return newParams;
};
const tableInitialResult = {
  data: [],
  pages: 0,
  count: 0
};
const getColumnsHeadersInfos = columns => {
  const newColumns = [...columns];
  columns.forEach((c, i) => {
    if (c.headerInfo) {
      newColumns[i] = _objectSpread(_objectSpread({}, newColumns[i]), {}, {
        Header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_components_table_InfoHeader__WEBPACK_IMPORTED_MODULE_5__.InfoHeader, {
          message: c.headerInfo
        }, newColumns[i].Header)
      });
    }
  });
  return newColumns;
};

/***/ }),

/***/ "./src/utils/useKeyPressListener.js":
/*!******************************************!*\
  !*** ./src/utils/useKeyPressListener.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useKeyPressListener": () => (/* binding */ useKeyPressListener)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useKeyPressListener = key => {
  const [isEnabled, setIsEnabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const enableListeners = (e, toggle) => {
      if (e.key === key) {
        setIsEnabled(toggle);
      }
    };

    const enable = e => {
      enableListeners(e, true);
    };

    const disable = e => {
      enableListeners(e, false);
    };

    document.addEventListener('keydown', enable);
    document.addEventListener('keyup', disable);
    document.addEventListener('blur', disable);
    return () => {
      document.removeEventListener('keydown', enable);
      document.removeEventListener('keyup', disable);
      document.removeEventListener('blur', disable);
    };
  }, [isEnabled]);
  return isEnabled;
};

/***/ }),

/***/ "./src/utils/useSafeIntl.js":
/*!**********************************!*\
  !*** ./src/utils/useSafeIntl.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSafeIntl": () => (/* binding */ useSafeIntl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patchIntl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patchIntl */ "./src/utils/patchIntl.js");



const useSafeIntl = () => {
  const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_1__.useIntl)(); // noinspection UnnecessaryLocalVariableJS

  const patchedIntl = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_patchIntl__WEBPACK_IMPORTED_MODULE_2__.patchIntl)(intl), [intl]);
  return patchedIntl;
};

/***/ }),

/***/ "./src/utils/useSkipEffectOnMount.js":
/*!*******************************************!*\
  !*** ./src/utils/useSkipEffectOnMount.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSkipEffectOnMount": () => (/* binding */ useSkipEffectOnMount)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useSkipEffectOnMount = (func, deps) => {
  const didMount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, deps);
};

/***/ }),

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const library = __importStar(__webpack_require__(/*! ./src/index */ "./src/index.ts"));
exports["default"] = library;


/***/ }),

/***/ "./src/components/LoadingSpinner/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/LoadingSpinner/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoadingSpinner = void 0;
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const CircularProgress_1 = __importDefault(__webpack_require__(/*! @material-ui/core/CircularProgress */ "@material-ui/core/CircularProgress"));
const core_1 = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
const prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));
const classnames_1 = __importDefault(__webpack_require__(/*! classnames */ "classnames"));
const baseRoot = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    top: 0,
    left: 0,
};
const styles = () => ({
    rootFixed: {
        ...baseRoot,
        position: 'fixed',
        zIndex: '1000',
    },
    rootAbsolute: {
        ...baseRoot,
        position: 'absolute',
        zIndex: '500',
    },
    root: {
        ...baseRoot,
        position: 'relative',
        zIndex: '1',
    },
    rootTransparent: {
        backgroundColor: 'transparent',
    },
});
const LoadingSpinner = props => {
    const { classes, size, transparent, fixed, absolute, padding } = props;
    return (react_1.default.createElement("div", { style: {
            padding,
        }, className: (0, classnames_1.default)(fixed && !absolute && classes.rootFixed, absolute && classes.rootAbsolute, !fixed && !absolute && classes.root, transparent && classes.rootTransparent) },
        react_1.default.createElement(CircularProgress_1.default, { size: size })));
};
LoadingSpinner.defaultProps = {
    size: 40,
    transparent: false,
    fixed: true,
    absolute: false,
    padding: 0,
};
LoadingSpinner.propTypes = {
    /**
     * Adjust the size of the spinner
     */
    size: prop_types_1.default.number,
    /**
     * I don't know what that does
     */
    transparent: prop_types_1.default.bool,
    fixed: prop_types_1.default.bool,
    absolute: prop_types_1.default.bool,
    /**
     * add padding
     */
    padding: prop_types_1.default.number,
    classes: prop_types_1.default.object.isRequired,
};
const styledSpinner = (0, core_1.withStyles)(styles)(LoadingSpinner);
exports.LoadingSpinner = styledSpinner;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.withLink = exports.LinkContext = exports.LinkProvider = exports.Table = exports.SelectionSpeedDials = exports.InfoHeader = exports.HeaderRowIcon = exports.ColumnsSelectDrawer = exports.BlockPlaceholder = exports.rawTheme = exports.theme = exports.Radio = exports.Checkbox = exports.SearchInput = exports.ArrayFieldInput = exports.NumberInput = exports.PasswordInput = exports.TextInput = exports.ErrorBoundary = exports.PageRowSelect = exports.renderTags = exports.Select = exports.DatePicker = exports.DynamicTabs = exports.IconButton = exports.ExportButton = exports.AddButton = exports.mapPopupStyles = exports.mapStyles = exports.commonStyles = exports.useSkipEffectOnMount = exports.useSafeIntl = exports.patchIntl = exports.injectIntl = exports.IasoUiConstants = exports.SnackBar = exports.IasoChipColors = exports.XmlSvg = exports.WordSvg = exports.TextSvg = exports.ShapeSvg = exports.PdfSvg = exports.OrgUnitSvg = exports.ExcellSvg = exports.DHIS2Svg = exports.CsvSvg = exports.LoadingSpinner = exports.testTS = exports.english = exports.french = void 0;
exports.DynamicSelect = exports.EnrichedTreeItem = exports.IasoTreeView = exports.TreeViewResultsCountSelect = exports.TreeViewWithSearch = exports.TruncatedTreeview = exports.useKeyPressListener = exports.FormControl = exports.Expander = exports.InputLabel = exports.AddComment = exports.CommentWithThread = exports.SingleComment = exports.useLink = void 0;
const index_1 = __webpack_require__(/*! ./components/LoadingSpinner/index */ "./src/components/LoadingSpinner/index.tsx");
Object.defineProperty(exports, "LoadingSpinner", ({ enumerable: true, get: function () { return index_1.LoadingSpinner; } }));
const CsvSvgComponent_1 = __webpack_require__(/*! ./svg/CsvSvgComponent */ "./src/svg/CsvSvgComponent.js");
Object.defineProperty(exports, "CsvSvg", ({ enumerable: true, get: function () { return CsvSvgComponent_1.CsvSvg; } }));
const DHIS2SvgComponent_1 = __webpack_require__(/*! ./svg/DHIS2SvgComponent */ "./src/svg/DHIS2SvgComponent.js");
Object.defineProperty(exports, "DHIS2Svg", ({ enumerable: true, get: function () { return DHIS2SvgComponent_1.DHIS2Svg; } }));
const ExcellSvgComponent_1 = __webpack_require__(/*! ./svg/ExcellSvgComponent */ "./src/svg/ExcellSvgComponent.js");
Object.defineProperty(exports, "ExcellSvg", ({ enumerable: true, get: function () { return ExcellSvgComponent_1.ExcellSvg; } }));
const OrgUnitSvgComponent_1 = __webpack_require__(/*! ./svg/OrgUnitSvgComponent */ "./src/svg/OrgUnitSvgComponent.js");
Object.defineProperty(exports, "OrgUnitSvg", ({ enumerable: true, get: function () { return OrgUnitSvgComponent_1.OrgUnitSvg; } }));
const PdfSvgComponent_1 = __webpack_require__(/*! ./svg/PdfSvgComponent */ "./src/svg/PdfSvgComponent.js");
Object.defineProperty(exports, "PdfSvg", ({ enumerable: true, get: function () { return PdfSvgComponent_1.PdfSvg; } }));
const ShapeSvgComponent_1 = __webpack_require__(/*! ./svg/ShapeSvgComponent */ "./src/svg/ShapeSvgComponent.js");
Object.defineProperty(exports, "ShapeSvg", ({ enumerable: true, get: function () { return ShapeSvgComponent_1.ShapeSvg; } }));
const TextSvgComponent_1 = __webpack_require__(/*! ./svg/TextSvgComponent */ "./src/svg/TextSvgComponent.js");
Object.defineProperty(exports, "TextSvg", ({ enumerable: true, get: function () { return TextSvgComponent_1.TextSvg; } }));
const WordSvgComponent_1 = __webpack_require__(/*! ./svg/WordSvgComponent */ "./src/svg/WordSvgComponent.js");
Object.defineProperty(exports, "WordSvg", ({ enumerable: true, get: function () { return WordSvgComponent_1.WordSvg; } }));
const XmlSvgComponent_1 = __webpack_require__(/*! ./svg/XmlSvgComponent */ "./src/svg/XmlSvgComponent.js");
Object.defineProperty(exports, "XmlSvg", ({ enumerable: true, get: function () { return XmlSvgComponent_1.XmlSvg; } }));
const IasoChipColors = __importStar(__webpack_require__(/*! ./constants/iaso/chipColors */ "./src/constants/iaso/chipColors.js"));
exports.IasoChipColors = IasoChipColors;
// TODO check if individual snackbars can still be imported
const SnackBar = __importStar(__webpack_require__(/*! ./constants/iaso/snackBars */ "./src/constants/iaso/snackBars.js"));
exports.SnackBar = SnackBar;
const IasoUiConstants = __importStar(__webpack_require__(/*! ./constants/iaso/uiConstants */ "./src/constants/iaso/uiConstants.js"));
exports.IasoUiConstants = IasoUiConstants;
const injectIntl_1 = __webpack_require__(/*! ./utils/injectIntl */ "./src/utils/injectIntl.js");
Object.defineProperty(exports, "injectIntl", ({ enumerable: true, get: function () { return injectIntl_1.injectIntl; } }));
const patchIntl_1 = __webpack_require__(/*! ./utils/patchIntl */ "./src/utils/patchIntl.js");
Object.defineProperty(exports, "patchIntl", ({ enumerable: true, get: function () { return patchIntl_1.patchIntl; } }));
const useSafeIntl_1 = __webpack_require__(/*! ./utils/useSafeIntl */ "./src/utils/useSafeIntl.js");
Object.defineProperty(exports, "useSafeIntl", ({ enumerable: true, get: function () { return useSafeIntl_1.useSafeIntl; } }));
const useSkipEffectOnMount_1 = __webpack_require__(/*! ./utils/useSkipEffectOnMount */ "./src/utils/useSkipEffectOnMount.js");
Object.defineProperty(exports, "useSkipEffectOnMount", ({ enumerable: true, get: function () { return useSkipEffectOnMount_1.useSkipEffectOnMount; } }));
const theme_1 = __webpack_require__(/*! ./styles/iaso/theme */ "./src/styles/iaso/theme.js");
Object.defineProperty(exports, "theme", ({ enumerable: true, get: function () { return theme_1.theme; } }));
Object.defineProperty(exports, "rawTheme", ({ enumerable: true, get: function () { return theme_1.rawTheme; } }));
const test_1 = __webpack_require__(/*! ./utils/test */ "./src/utils/test.ts");
Object.defineProperty(exports, "testTS", ({ enumerable: true, get: function () { return test_1.testTS; } }));
const common_1 = __webpack_require__(/*! ./styles/iaso/common */ "./src/styles/iaso/common.js");
Object.defineProperty(exports, "commonStyles", ({ enumerable: true, get: function () { return common_1.commonStyles; } }));
const map_1 = __webpack_require__(/*! ./styles/iaso/map */ "./src/styles/iaso/map.js");
Object.defineProperty(exports, "mapStyles", ({ enumerable: true, get: function () { return map_1.mapStyles; } }));
const mapPopup_1 = __webpack_require__(/*! ./styles/iaso/mapPopup */ "./src/styles/iaso/mapPopup.js");
Object.defineProperty(exports, "mapPopupStyles", ({ enumerable: true, get: function () { return mapPopup_1.mapPopupStyles; } }));
const AddButton_1 = __webpack_require__(/*! ./components/buttons/AddButton */ "./src/components/buttons/AddButton/index.js");
Object.defineProperty(exports, "AddButton", ({ enumerable: true, get: function () { return AddButton_1.AddButton; } }));
const ExportButton_1 = __webpack_require__(/*! ./components/buttons/ExportButton */ "./src/components/buttons/ExportButton/index.js");
Object.defineProperty(exports, "ExportButton", ({ enumerable: true, get: function () { return ExportButton_1.ExportButton; } }));
const IconButton_1 = __webpack_require__(/*! ./components/buttons/IconButton */ "./src/components/buttons/IconButton/index.js");
Object.defineProperty(exports, "IconButton", ({ enumerable: true, get: function () { return IconButton_1.IconButton; } }));
const DynamicTabs_1 = __webpack_require__(/*! ./components/nav/DynamicTabs */ "./src/components/nav/DynamicTabs/index.js");
Object.defineProperty(exports, "DynamicTabs", ({ enumerable: true, get: function () { return DynamicTabs_1.DynamicTabs; } }));
const DatePicker_1 = __webpack_require__(/*! ./components/DatePicker */ "./src/components/DatePicker/index.js");
Object.defineProperty(exports, "DatePicker", ({ enumerable: true, get: function () { return DatePicker_1.DatePicker; } }));
const ArrayFieldInput_1 = __webpack_require__(/*! ./components/inputs/ArrayFieldInput */ "./src/components/inputs/ArrayFieldInput/index.js");
Object.defineProperty(exports, "ArrayFieldInput", ({ enumerable: true, get: function () { return ArrayFieldInput_1.ArrayFieldInput; } }));
const Checkbox_1 = __webpack_require__(/*! ./components/inputs/Checkbox */ "./src/components/inputs/Checkbox/index.js");
Object.defineProperty(exports, "Checkbox", ({ enumerable: true, get: function () { return Checkbox_1.Checkbox; } }));
const NumberInput_1 = __webpack_require__(/*! ./components/inputs/NumberInput */ "./src/components/inputs/NumberInput/index.js");
Object.defineProperty(exports, "NumberInput", ({ enumerable: true, get: function () { return NumberInput_1.NumberInput; } }));
const PasswordInput_1 = __webpack_require__(/*! ./components/inputs/PasswordInput */ "./src/components/inputs/PasswordInput/index.js");
Object.defineProperty(exports, "PasswordInput", ({ enumerable: true, get: function () { return PasswordInput_1.PasswordInput; } }));
const Radio_1 = __webpack_require__(/*! ./components/inputs/Radio */ "./src/components/inputs/Radio/index.js");
Object.defineProperty(exports, "Radio", ({ enumerable: true, get: function () { return Radio_1.Radio; } }));
const SearchInput_1 = __webpack_require__(/*! ./components/inputs/SearchInput */ "./src/components/inputs/SearchInput/index.js");
Object.defineProperty(exports, "SearchInput", ({ enumerable: true, get: function () { return SearchInput_1.SearchInput; } }));
const Select_1 = __webpack_require__(/*! ./components/inputs/Select */ "./src/components/inputs/Select/index.js");
Object.defineProperty(exports, "Select", ({ enumerable: true, get: function () { return Select_1.Select; } }));
Object.defineProperty(exports, "renderTags", ({ enumerable: true, get: function () { return Select_1.renderTags; } }));
const TextInput_1 = __webpack_require__(/*! ./components/inputs/TextInput */ "./src/components/inputs/TextInput/index.js");
Object.defineProperty(exports, "TextInput", ({ enumerable: true, get: function () { return TextInput_1.TextInput; } }));
const FormControl_1 = __webpack_require__(/*! ./components/inputs/FormControl */ "./src/components/inputs/FormControl.js");
Object.defineProperty(exports, "FormControl", ({ enumerable: true, get: function () { return FormControl_1.FormControl; } }));
const ErrorBoundary_1 = __webpack_require__(/*! ./components/ErrorBoundary */ "./src/components/ErrorBoundary/index.js");
Object.defineProperty(exports, "ErrorBoundary", ({ enumerable: true, get: function () { return ErrorBoundary_1.ErrorBoundary; } }));
const BlockPlaceholder_1 = __webpack_require__(/*! ./components/BlockPlaceholder */ "./src/components/BlockPlaceholder/index.js");
Object.defineProperty(exports, "BlockPlaceholder", ({ enumerable: true, get: function () { return BlockPlaceholder_1.BlockPlaceholder; } }));
const ColumnsSelectDrawer_1 = __webpack_require__(/*! ./components/table/ColumnsSelectDrawer */ "./src/components/table/ColumnsSelectDrawer/index.js");
Object.defineProperty(exports, "ColumnsSelectDrawer", ({ enumerable: true, get: function () { return ColumnsSelectDrawer_1.ColumnsSelectDrawer; } }));
const HeaderRowIcon_1 = __webpack_require__(/*! ./components/table/HeaderRowIcon */ "./src/components/table/HeaderRowIcon/index.js");
Object.defineProperty(exports, "HeaderRowIcon", ({ enumerable: true, get: function () { return HeaderRowIcon_1.HeaderRowIcon; } }));
const InfoHeader_1 = __webpack_require__(/*! ./components/table/InfoHeader */ "./src/components/table/InfoHeader/index.js");
Object.defineProperty(exports, "InfoHeader", ({ enumerable: true, get: function () { return InfoHeader_1.InfoHeader; } }));
const SelectionSpeedDials_1 = __webpack_require__(/*! ./components/table/SelectionSpeedDials */ "./src/components/table/SelectionSpeedDials/index.js");
Object.defineProperty(exports, "SelectionSpeedDials", ({ enumerable: true, get: function () { return SelectionSpeedDials_1.SelectionSpeedDials; } }));
const Table_1 = __webpack_require__(/*! ./components/table/Table */ "./src/components/table/Table/index.js");
Object.defineProperty(exports, "Table", ({ enumerable: true, get: function () { return Table_1.Table; } }));
const PageRowSelect_1 = __webpack_require__(/*! ./components/table/Table/PageRowSelect */ "./src/components/table/Table/PageRowSelect.js");
Object.defineProperty(exports, "PageRowSelect", ({ enumerable: true, get: function () { return PageRowSelect_1.PageRowSelect; } }));
const Expander_1 = __webpack_require__(/*! ./components/table/Table/Expander */ "./src/components/table/Table/Expander.js");
Object.defineProperty(exports, "Expander", ({ enumerable: true, get: function () { return Expander_1.Expander; } }));
const LinkProvider_1 = __webpack_require__(/*! ./components/LinkProvider */ "./src/components/LinkProvider/index.js");
Object.defineProperty(exports, "LinkProvider", ({ enumerable: true, get: function () { return LinkProvider_1.LinkProvider; } }));
Object.defineProperty(exports, "LinkContext", ({ enumerable: true, get: function () { return LinkProvider_1.LinkContext; } }));
Object.defineProperty(exports, "withLink", ({ enumerable: true, get: function () { return LinkProvider_1.withLink; } }));
Object.defineProperty(exports, "useLink", ({ enumerable: true, get: function () { return LinkProvider_1.useLink; } }));
const SingleComment_1 = __webpack_require__(/*! ./components/comments/SingleComment */ "./src/components/comments/SingleComment/index.js");
Object.defineProperty(exports, "SingleComment", ({ enumerable: true, get: function () { return SingleComment_1.SingleComment; } }));
const CommentWithThread_1 = __webpack_require__(/*! ./components/comments/CommentWithThread */ "./src/components/comments/CommentWithThread/index.js");
Object.defineProperty(exports, "CommentWithThread", ({ enumerable: true, get: function () { return CommentWithThread_1.CommentWithThread; } }));
const AddComment_1 = __webpack_require__(/*! ./components/comments/AddComment */ "./src/components/comments/AddComment/index.js");
Object.defineProperty(exports, "AddComment", ({ enumerable: true, get: function () { return AddComment_1.AddComment; } }));
const InputLabel_1 = __webpack_require__(/*! ./components/inputs/InputLabel */ "./src/components/inputs/InputLabel.js");
Object.defineProperty(exports, "InputLabel", ({ enumerable: true, get: function () { return InputLabel_1.InputLabel; } }));
const useKeyPressListener_1 = __webpack_require__(/*! ./utils/useKeyPressListener */ "./src/utils/useKeyPressListener.js");
Object.defineProperty(exports, "useKeyPressListener", ({ enumerable: true, get: function () { return useKeyPressListener_1.useKeyPressListener; } }));
const DynamicSelect_1 = __webpack_require__(/*! ./components/Treeview/DynamicSelect */ "./src/components/Treeview/DynamicSelect.js");
Object.defineProperty(exports, "DynamicSelect", ({ enumerable: true, get: function () { return DynamicSelect_1.DynamicSelect; } }));
const EnrichedTreeItem_1 = __webpack_require__(/*! ./components/Treeview/EnrichedTreeItem */ "./src/components/Treeview/EnrichedTreeItem.js");
Object.defineProperty(exports, "EnrichedTreeItem", ({ enumerable: true, get: function () { return EnrichedTreeItem_1.EnrichedTreeItem; } }));
const IasoTreeView_1 = __webpack_require__(/*! ./components/Treeview/IasoTreeView */ "./src/components/Treeview/IasoTreeView.js");
Object.defineProperty(exports, "IasoTreeView", ({ enumerable: true, get: function () { return IasoTreeView_1.IasoTreeView; } }));
const TreeViewResultsCountSelect_1 = __webpack_require__(/*! ./components/Treeview/TreeViewResultsCountSelect */ "./src/components/Treeview/TreeViewResultsCountSelect.js");
Object.defineProperty(exports, "TreeViewResultsCountSelect", ({ enumerable: true, get: function () { return TreeViewResultsCountSelect_1.TreeViewResultsCountSelect; } }));
const TreeViewWithSearch_1 = __webpack_require__(/*! ./components/Treeview/TreeViewWithSearch */ "./src/components/Treeview/TreeViewWithSearch.js");
Object.defineProperty(exports, "TreeViewWithSearch", ({ enumerable: true, get: function () { return TreeViewWithSearch_1.TreeViewWithSearch; } }));
const TruncatedTreeview_1 = __webpack_require__(/*! ./components/Treeview/TruncatedTreeview */ "./src/components/Treeview/TruncatedTreeview.js");
Object.defineProperty(exports, "TruncatedTreeview", ({ enumerable: true, get: function () { return TruncatedTreeview_1.TruncatedTreeview; } }));
const locale_1 = __webpack_require__(/*! ./locale */ "./src/locale/index.js");
Object.defineProperty(exports, "french", ({ enumerable: true, get: function () { return locale_1.french; } }));
Object.defineProperty(exports, "english", ({ enumerable: true, get: function () { return locale_1.english; } }));
__exportStar(__webpack_require__(/*! ./utils */ "./src/utils/index.js"), exports);
__exportStar(__webpack_require__(/*! ./utils/intlUtils */ "./src/utils/intlUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./utils/tableUtils */ "./src/utils/tableUtils.js"), exports);
__exportStar(__webpack_require__(/*! ./utils/fetchData */ "./src/utils/fetchData.js"), exports);
__exportStar(__webpack_require__(/*! ./constants/iaso/uiConstants */ "./src/constants/iaso/uiConstants.js"), exports);


/***/ }),

/***/ "./src/utils/test.ts":
/*!***************************!*\
  !*** ./src/utils/test.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.testTS = void 0;
const testTS = (a, b) => `${b}-${a.toString()}`;
exports.testTS = testTS;


/***/ }),

/***/ "./src/locale/en.json":
/*!****************************!*\
  !*** ./src/locale/en.json ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "locale/en.json";

/***/ }),

/***/ "./src/locale/fr.json":
/*!****************************!*\
  !*** ./src/locale/fr.json ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "locale/fr.json";

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),

/***/ "@babel/runtime/helpers/objectWithoutProperties":
/*!*****************************************************************!*\
  !*** external "@babel/runtime/helpers/objectWithoutProperties" ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Box":
/*!****************************************!*\
  !*** external "@material-ui/core/Box" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Box");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/Chip":
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "@material-ui/core/CircularProgress":
/*!*****************************************************!*\
  !*** external "@material-ui/core/CircularProgress" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/CircularProgress");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/FormControl");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/InputLabel":
/*!***********************************************!*\
  !*** external "@material-ui/core/InputLabel" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/InputLabel");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/OutlinedInput":
/*!**************************************************!*\
  !*** external "@material-ui/core/OutlinedInput" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/OutlinedInput");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Select":
/*!*******************************************!*\
  !*** external "@material-ui/core/Select" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "@material-ui/core/SvgIcon":
/*!********************************************!*\
  !*** external "@material-ui/core/SvgIcon" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/SvgIcon");

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableContainer":
/*!***************************************************!*\
  !*** external "@material-ui/core/TableContainer" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/TableContainer");

/***/ }),

/***/ "@material-ui/core/TableFooter":
/*!************************************************!*\
  !*** external "@material-ui/core/TableFooter" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/TableFooter");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TablePagination":
/*!****************************************************!*\
  !*** external "@material-ui/core/TablePagination" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/TablePagination");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "@material-ui/core/TableSortLabel":
/*!***************************************************!*\
  !*** external "@material-ui/core/TableSortLabel" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/TableSortLabel");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/styles/colorManipulator":
/*!************************************************************!*\
  !*** external "@material-ui/core/styles/colorManipulator" ***!
  \************************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "@material-ui/icons/ArrowBack":
/*!***********************************************!*\
  !*** external "@material-ui/icons/ArrowBack" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/ArrowBack");

/***/ }),

/***/ "@material-ui/icons/ArrowDropDown":
/*!***************************************************!*\
  !*** external "@material-ui/icons/ArrowDropDown" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/ArrowDropDown");

/***/ }),

/***/ "@material-ui/icons/ArrowRight":
/*!************************************************!*\
  !*** external "@material-ui/icons/ArrowRight" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/ArrowRight");

/***/ }),

/***/ "@material-ui/icons/CachedRounded":
/*!***************************************************!*\
  !*** external "@material-ui/icons/CachedRounded" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/CachedRounded");

/***/ }),

/***/ "@material-ui/icons/CallMade":
/*!**********************************************!*\
  !*** external "@material-ui/icons/CallMade" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/CallMade");

/***/ }),

/***/ "@material-ui/icons/CallMerge":
/*!***********************************************!*\
  !*** external "@material-ui/icons/CallMerge" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/CallMerge");

/***/ }),

/***/ "@material-ui/icons/CheckBox":
/*!**********************************************!*\
  !*** external "@material-ui/icons/CheckBox" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/CheckBox");

/***/ }),

/***/ "@material-ui/icons/CheckBoxOutlineBlankOutlined":
/*!******************************************************************!*\
  !*** external "@material-ui/icons/CheckBoxOutlineBlankOutlined" ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/CheckBoxOutlineBlankOutlined");

/***/ }),

/***/ "@material-ui/icons/Clear":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Clear" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Clear");

/***/ }),

/***/ "@material-ui/icons/ClearAll":
/*!**********************************************!*\
  !*** external "@material-ui/icons/ClearAll" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/ClearAll");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Edit");

/***/ }),

/***/ "@material-ui/icons/Event":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Event" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Event");

/***/ }),

/***/ "@material-ui/icons/FilterList":
/*!************************************************!*\
  !*** external "@material-ui/icons/FilterList" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/FilterList");

/***/ }),

/***/ "@material-ui/icons/FirstPage":
/*!***********************************************!*\
  !*** external "@material-ui/icons/FirstPage" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/FirstPage");

/***/ }),

/***/ "@material-ui/icons/GetApp":
/*!********************************************!*\
  !*** external "@material-ui/icons/GetApp" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/GetApp");

/***/ }),

/***/ "@material-ui/icons/History":
/*!*********************************************!*\
  !*** external "@material-ui/icons/History" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/History");

/***/ }),

/***/ "@material-ui/icons/IndeterminateCheckBox":
/*!***********************************************************!*\
  !*** external "@material-ui/icons/IndeterminateCheckBox" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/IndeterminateCheckBox");

/***/ }),

/***/ "@material-ui/icons/Info":
/*!******************************************!*\
  !*** external "@material-ui/icons/Info" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Info");

/***/ }),

/***/ "@material-ui/icons/InfoOutlined":
/*!**************************************************!*\
  !*** external "@material-ui/icons/InfoOutlined" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/InfoOutlined");

/***/ }),

/***/ "@material-ui/icons/KeyboardArrowLeft":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/KeyboardArrowLeft" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/KeyboardArrowLeft");

/***/ }),

/***/ "@material-ui/icons/KeyboardArrowRight":
/*!********************************************************!*\
  !*** external "@material-ui/icons/KeyboardArrowRight" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/KeyboardArrowRight");

/***/ }),

/***/ "@material-ui/icons/LastPage":
/*!**********************************************!*\
  !*** external "@material-ui/icons/LastPage" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/LastPage");

/***/ }),

/***/ "@material-ui/icons/Map":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Map" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Map");

/***/ }),

/***/ "@material-ui/icons/Public":
/*!********************************************!*\
  !*** external "@material-ui/icons/Public" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Public");

/***/ }),

/***/ "@material-ui/icons/Remove":
/*!********************************************!*\
  !*** external "@material-ui/icons/Remove" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Remove");

/***/ }),

/***/ "@material-ui/icons/RemoveRedEye":
/*!**************************************************!*\
  !*** external "@material-ui/icons/RemoveRedEye" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/RemoveRedEye");

/***/ }),

/***/ "@material-ui/icons/RestoreFromTrash":
/*!******************************************************!*\
  !*** external "@material-ui/icons/RestoreFromTrash" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/RestoreFromTrash");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "@material-ui/icons/StopRounded":
/*!*************************************************!*\
  !*** external "@material-ui/icons/StopRounded" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/StopRounded");

/***/ }),

/***/ "@material-ui/icons/Visibility":
/*!************************************************!*\
  !*** external "@material-ui/icons/Visibility" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/Visibility");

/***/ }),

/***/ "@material-ui/icons/VisibilityOff":
/*!***************************************************!*\
  !*** external "@material-ui/icons/VisibilityOff" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/icons/VisibilityOff");

/***/ }),

/***/ "@material-ui/lab":
/*!***********************************!*\
  !*** external "@material-ui/lab" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@material-ui/lab");

/***/ }),

/***/ "@material-ui/lab/Autocomplete":
/*!************************************************!*\
  !*** external "@material-ui/lab/Autocomplete" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("@material-ui/lab/Autocomplete");

/***/ }),

/***/ "@material-ui/pickers":
/*!***************************************!*\
  !*** external "@material-ui/pickers" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@material-ui/pickers");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ "color":
/*!************************!*\
  !*** external "color" ***!
  \************************/
/***/ ((module) => {

module.exports = require("color");

/***/ }),

/***/ "lodash/isEqual":
/*!*********************************!*\
  !*** external "lodash/isEqual" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-intersection-observer":
/*!**********************************************!*\
  !*** external "react-intersection-observer" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("react-intl");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ "react-table":
/*!******************************!*\
  !*** external "react-table" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-table");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map