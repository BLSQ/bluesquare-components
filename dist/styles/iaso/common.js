"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.commonStyles = void 0;

var _map = require("./map");

var _innerDrawer = require("./innerDrawer");

var _uiConstants = require("../../constants/iaso/uiConstants");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var commonStyles = function commonStyles(theme) {
  return _objectSpread(_objectSpread(_objectSpread({}, (0, _map.mapStyles)(theme)), (0, _innerDrawer.innerDrawerStyles)(theme)), {}, {
    containerFullHeight: {
      width: '100%',
      height: "calc(100vh - ".concat(_uiConstants.MENU_HEIGHT_WITH_TABS, "px)"),
      margin: 0,
      overflow: 'auto',
      backgroundColor: 'white'
    },
    containerFullHeightPadded: {
      width: '100%',
      height: "calc(100vh - ".concat(_uiConstants.MENU_HEIGHT_WITH_TABS, "px)"),
      padding: theme.spacing(4),
      margin: 0,
      backgroundColor: 'white',
      overflow: 'auto'
    },
    containerFullHeightNoTabPadded: {
      width: '100%',
      height: "calc(100vh - ".concat(_uiConstants.MENU_HEIGHT_WITHOUT_TABS, "px)"),
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
      "float": 'right'
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
      width: "calc(100% + ".concat(theme.spacing(8), ")")
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
};

exports.commonStyles = commonStyles;