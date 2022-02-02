"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTreeviewSearch = exports.useRootData = exports.useChildrenData = void 0;

var _reactQuery = require("react-query");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var useChildrenData = function useChildrenData(_ref) {
  var request = _ref.request,
      id = _ref.id,
      options = _ref.options;
  return (0, _reactQuery.useQuery)(['getChildrenData', request, id], /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
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
  })), _objectSpread({}, options));
};

exports.useChildrenData = useChildrenData;

var useRootData = function useRootData(request) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _reactQuery.useQuery)(['getRootData', request], /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
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
  })), _objectSpread(_objectSpread({}, options), {}, {
    keepPreviousData: false
  }));
};

exports.useRootData = useRootData;

var useTreeviewSearch = function useTreeviewSearch(_ref4) {
  var request = _ref4.request,
      searchValue = _ref4.searchValue,
      resultsCount = _ref4.resultsCount,
      options = _ref4.options;
  return (0, _reactQuery.useQuery)(['TreeviewSearch', request, searchValue, resultsCount], /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var queryResult;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
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
    initialData: []
  }, options), {}, {
    keepPreviousData: true
  }));
};

exports.useTreeviewSearch = useTreeviewSearch;