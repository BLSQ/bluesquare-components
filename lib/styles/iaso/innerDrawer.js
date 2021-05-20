"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.innerDrawerStyles = exports.tabsHeight = exports.menuHeight = void 0;

var _grey = _interopRequireDefault(require("@material-ui/core/colors/grey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var menuHeight = 112;
exports.menuHeight = menuHeight;
var tabsHeight = 68;
exports.tabsHeight = tabsHeight;

var innerDrawer = function innerDrawer(theme) {
  return {
    innerDrawerToolContainer: {
      display: 'flex',
      flexDirection: 'column',
      flex: 'auto'
    },
    innerDrawerToolbar: _objectSpread(_objectSpread({}, theme.mixins.toolbar), {}, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      minHeight: '20px !important',
      padding: theme.spacing(1, 3)
    }),
    innerDrawerContentContainer: {
      width: '100%',
      overflow: 'auto',
      marginTop: theme.spacing(2),
      height: "calc(100vh - ".concat(menuHeight + tabsHeight, "px)") // ugly way to fix innerdrawer content height

    },
    innerDrawerContent: {
      width: '100%',
      padding: theme.spacing(1, 3),
      flex: 'auto'
    },
    innerDrawerFooterContent: {
      marginTop: 'auto',
      width: '100%',
      padding: theme.spacing(1, 3)
    },
    innerDrawerTabs: {
      minWidth: 100,
      borderBottom: "1px solid ".concat(_grey["default"]['300'])
    },
    innerDrawerTab: {
      minWidth: 100,
      paddingTop: theme.spacing(2)
    }
  };
};

exports.innerDrawerStyles = innerDrawer;