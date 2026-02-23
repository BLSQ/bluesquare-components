"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTreeviewSearch = exports.useRootData = exports.useChildrenData = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _reactQuery = require("react-query");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useChildrenData = exports.useChildrenData = function useChildrenData(_ref) {
  var request = _ref.request,
    id = _ref.id,
    options = _ref.options,
    dependency = _ref.dependency;
  return (0, _reactQuery.useQuery)(['getChildrenData', request, id].concat((0, _toConsumableArray2["default"])(dependency ? [dependency] : [])), /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", request(id));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })), _objectSpread({
    retry: false,
    keepPreviousData: false
  }, options));
};
var useRootData = exports.useRootData = function useRootData(request) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var dependency = arguments.length > 2 ? arguments[2] : undefined;
  return (0, _reactQuery.useQuery)(['getRootData', request].concat((0, _toConsumableArray2["default"])(dependency ? [dependency] : [])), /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function (_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", request());
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })), _objectSpread({
    retry: false,
    keepPreviousData: false
  }, options));
};
var useTreeviewSearch = exports.useTreeviewSearch = function useTreeviewSearch(_ref4) {
  var request = _ref4.request,
    searchValue = _ref4.searchValue,
    resultsCount = _ref4.resultsCount,
    options = _ref4.options,
    dependency = _ref4.dependency;
  return (0, _reactQuery.useQuery)(['TreeviewSearch', request, searchValue, resultsCount].concat((0, _toConsumableArray2["default"])(dependency ? [dependency] : [])), /*#__PURE__*/(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var queryResult;
    return _regenerator["default"].wrap(function (_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 1;
          return request(searchValue, resultsCount);
        case 1:
          queryResult = _context3.sent;
          return _context3.abrupt("return", queryResult);
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })), // keepPreviousData=true avoids flicker when changing resultsCount
  _objectSpread(_objectSpread({
    initialData: [],
    retry: false
  }, options), {}, {
    keepPreviousData: true
  }));
};