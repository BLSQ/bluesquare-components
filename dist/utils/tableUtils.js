"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tableInitialResult = exports.setTableSelection = exports.selectionInitialState = exports.getTableUrl = exports.getTableParams = exports.getSort = exports.getSimplifiedColumns = exports.getParamsKey = exports.getOrderArray = exports.getColumnsHeadersInfos = exports.defaultSelectionActions = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _Remove = _interopRequireDefault(require("@mui/icons-material/Remove"));
var _Add = _interopRequireDefault(require("@mui/icons-material/Add"));
var _index = require("./index");
var _InfoHeader = require("../components/table/InfoHeader");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var getTableUrl = exports.getTableUrl = function getTableUrl(urlKey, params) {
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
var getOrderValue = function getOrderValue(obj) {
  return !obj.desc ? obj.id : "-".concat(obj.id);
};
var getSort = exports.getSort = function getSort(sortList) {
  var orderTemp;
  sortList.forEach(function (sort, index) {
    orderTemp = "".concat(orderTemp || '').concat(index > 0 ? ',' : '').concat(getOrderValue(sort));
  });
  return orderTemp;
};
var getOrderArray = exports.getOrderArray = function getOrderArray(orders) {
  return orders.split(',').map(function (stringValue) {
    return {
      id: stringValue.replace('-', ''),
      desc: stringValue.indexOf('-') !== -1
    };
  });
};
var _getSimplifiedColumns = exports.getSimplifiedColumns = function getSimplifiedColumns(columns) {
  return columns.map(function (c) {
    if (c.columns) {
      return {
        id: c.accessor,
        columns: _getSimplifiedColumns(c.columns)
      };
    }
    return {
      id: c.accessor
    };
  });
};
var defaultSelectionActions = exports.defaultSelectionActions = function defaultSelectionActions(selectAll, unSelectAll, formatMessage) {
  return [{
    icon: /*#__PURE__*/_react["default"].createElement(_Add["default"], null),
    label: formatMessage({
      id: "iaso.label.selectAll",
      defaultMessage: "Select all"
    }),
    onClick: function onClick() {
      return selectAll();
    }
  }, {
    icon: /*#__PURE__*/_react["default"].createElement(_Remove["default"], null),
    label: formatMessage({
      id: "iaso.label.unSelectAll",
      defaultMessage: "Unselect all"
    }),
    onClick: function onClick() {
      return unSelectAll();
    }
  }];
};
var selectionInitialState = exports.selectionInitialState = {
  selectedItems: [],
  unSelectedItems: [],
  selectAll: false,
  selectCount: 0
};
var setTableSelection = exports.setTableSelection = function setTableSelection(selection, selectionType) {
  var items = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var totalCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
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
var getParamsKey = exports.getParamsKey = function getParamsKey(paramsPrefix, key) {
  if (paramsPrefix === '') {
    return key;
  }
  return "".concat(paramsPrefix).concat((0, _index.capitalize)(key, true));
};
var getTableParams = exports.getTableParams = function getTableParams(params, paramsPrefix, filters, apiParams) {
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
    var _params$f$urlKey;
    newParams[f.apiUrlKey] = (_params$f$urlKey = params[f.urlKey]) !== null && _params$f$urlKey !== void 0 ? _params$f$urlKey : f.defaultValue;
  });
  return newParams;
};
var tableInitialResult = exports.tableInitialResult = {
  data: [],
  pages: 0,
  count: 0
};
var getColumnsHeadersInfos = exports.getColumnsHeadersInfos = function getColumnsHeadersInfos(columns) {
  var newColumns = (0, _toConsumableArray2["default"])(columns);
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