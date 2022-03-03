"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTreeviewSearch = exports.useRootData = exports.useChildrenData = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _reactQuery = require("react-query");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var useChildrenData = function useChildrenData(_ref) {
  var request = _ref.request,
      id = _ref.id,
      options = _ref.options;
  return (0, _reactQuery.useQuery)(['getChildrenData', request, id], /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", request(id));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), _objectSpread({
    retry: false
  }, options));
};

exports.useChildrenData = useChildrenData;

var useRootData = function useRootData(request) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _reactQuery.useQuery)(['getRootData', request], /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", request());

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), _objectSpread(_objectSpread({
    retry: false
  }, options), {}, {
    keepPreviousData: false
  }));
};

exports.useRootData = useRootData;

var useTreeviewSearch = function useTreeviewSearch(_ref4) {
  var request = _ref4.request,
      searchValue = _ref4.searchValue,
      resultsCount = _ref4.resultsCount,
      options = _ref4.options;
  return (0, _reactQuery.useQuery)(['TreeviewSearch', request, searchValue, resultsCount], /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
    var queryResult;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return request(searchValue, resultsCount);

          case 2:
            queryResult = _context3.sent;
            return _context3.abrupt("return", queryResult);

          case 4:
          case "end":
            return _context3.stop();
        }
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

exports.useTreeviewSearch = useTreeviewSearch;