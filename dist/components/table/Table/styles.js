"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _common = require("../../../styles/iaso/common");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return _objectSpread(_objectSpread({}, (0, _common.commonStyles)(theme)), {}, {
    count: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: theme.spacing(2)
    },
    reactTable: _objectSpread(_objectSpread({}, (0, _common.commonStyles)(theme).reactTable), {}, {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      minHeight: 100,
      position: 'relative'
    }),
    reactTableNoMarginTop: {
      marginTop: 0
    },
    reactTableNoPaginationCountBottom: {
      marginBottom: theme.spacing(8)
    },
    countBottom: {
      position: 'absolute',
      bottom: -4,
      right: theme.spacing(4)
    },
    countBottomNoPagination: {
      bottom: 'auto',
      right: theme.spacing(2),
      top: 'calc(100% + 19px)'
    }
  });
};

exports.styles = styles;