"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColumnsHeadersInfos = exports.getTableParams = exports.getParamsKey = exports.setTableSelection = exports.selectionInitialState = exports.defaultSelectionActions = exports.getSimplifiedColumns = exports.getOrderArray = exports.getSort = exports.getTableUrl = void 0;

var _react = _interopRequireDefault(require("react"));

var _Remove = _interopRequireDefault(require("@material-ui/icons/Remove"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _InfoHeader = require("../InfoHeader");

var _index = require("../../../utils/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getTableUrl = function getTableUrl(urlKey, params) {
  var toExport = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var exportType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'csv';
  var asLocation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var asSmallDict = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var url = "/api/".concat(urlKey, "/?");

  var clonedParams = _objectSpread({}, params);

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
  var usedParams = [];
  Object.keys(clonedParams).forEach(function (key) {
    var value = clonedParams[key];

    if (value && !usedParams.includes(key)) {
      usedParams.push(key);
      url += "&".concat(key, "=").concat(value);
    }
  });
  return url;
};

exports.getTableUrl = getTableUrl;

var getOrderValue = function getOrderValue(obj) {
  return !obj.desc ? obj.id : "-".concat(obj.id);
};

var getSort = function getSort(sortList) {
  var orderTemp;
  sortList.forEach(function (sort, index) {
    orderTemp = "".concat(orderTemp || '').concat(index > 0 ? ',' : '').concat(getOrderValue(sort));
  });
  return orderTemp;
};

exports.getSort = getSort;

var getOrderArray = function getOrderArray(orders) {
  return orders.split(',').map(function (stringValue) {
    return {
      id: stringValue.replace('-', ''),
      desc: stringValue.indexOf('-') !== -1
    };
  });
};

exports.getOrderArray = getOrderArray;

var getSimplifiedColumns = function getSimplifiedColumns(columns) {
  return columns.map(function (c) {
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
};

exports.getSimplifiedColumns = getSimplifiedColumns;

var defaultSelectionActions = function defaultSelectionActions(selectAll, unSelectAll, formatMessage) {
  return [{
    icon: /*#__PURE__*/_react["default"].createElement(_Add["default"], null),
    label: formatMessage({
      id: 'iaso.label.selectAll',
      defaultMessage: 'Select all'
    }),
    onClick: function onClick() {
      return selectAll();
    }
  }, {
    icon: /*#__PURE__*/_react["default"].createElement(_Remove["default"], null),
    label: formatMessage({
      id: 'iaso.label.unSelectAll',
      defaultMessage: 'Unselect all'
    }),
    onClick: function onClick() {
      return unSelectAll();
    }
  }];
};

exports.defaultSelectionActions = defaultSelectionActions;
var selectionInitialState = {
  selectedItems: [],
  unSelectedItems: [],
  selectAll: false,
  selectCount: 0
};
exports.selectionInitialState = selectionInitialState;

var setTableSelection = function setTableSelection(selection, selectionType) {
  var items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var totalCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var newSelection;

  switch (selectionType) {
    case 'select':
      newSelection = _objectSpread(_objectSpread({}, selection), {}, {
        selectedItems: items,
        selectCount: items.length
      });
      break;

    case 'unselect':
      newSelection = _objectSpread(_objectSpread({}, selection), {}, {
        unSelectedItems: items,
        selectCount: totalCount - items.length
      });
      break;

    case 'selectAll':
      newSelection = _objectSpread(_objectSpread({}, selection), {}, {
        selectAll: true,
        selectedItems: [],
        unSelectedItems: [],
        selectCount: totalCount
      });
      break;

    case 'reset':
      newSelection = selectionInitialState;
      break;

    default:
      newSelection = _objectSpread({}, selection);
      break;
  }

  return newSelection;
};

exports.setTableSelection = setTableSelection;

var getParamsKey = function getParamsKey(paramsPrefix, key) {
  if (paramsPrefix === '') {
    return key;
  }

  return "".concat(paramsPrefix).concat((0, _index.capitalize)(key, true));
};

exports.getParamsKey = getParamsKey;

var getTableParams = function getTableParams(params, paramsPrefix, filters, apiParams) {
  var defaultSorted = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [{
    id: 'name',
    desc: false
  }];
  var defaultPageSize = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 10;

  var newParams = _objectSpread(_objectSpread({}, apiParams), {}, {
    limit: parseInt(params[getParamsKey(paramsPrefix, 'pageSize')], 10) || defaultPageSize,
    page: parseInt(params[getParamsKey(paramsPrefix, 'page')], 10) || 0,
    order: getSort(params[getParamsKey(paramsPrefix, 'order')] ? getOrderArray(params[getParamsKey(paramsPrefix, 'order')]) : defaultSorted)
  });

  filters.forEach(function (f) {
    newParams[f.apiUrlKey] = params[f.urlKey];
  });
  return newParams;
};

exports.getTableParams = getTableParams;

var getColumnsHeadersInfos = function getColumnsHeadersInfos(columns) {
  var newColumns = _toConsumableArray(columns);

  columns.forEach(function (c, i) {
    if (c.headerInfo) {
      newColumns[i] = _objectSpread(_objectSpread({}, newColumns[i]), {}, {
        Header: /*#__PURE__*/_react["default"].createElement(_InfoHeader.InfoHeader, {
          message: c.headerInfo
        }, newColumns[i].Header)
      });
    }
  });
  return newColumns;
};

exports.getColumnsHeadersInfos = getColumnsHeadersInfos;