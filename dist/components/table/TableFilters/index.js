"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableFilters = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _Filters = require("../../filters/Filters");

var _styles = require("./styles");

var _messages = require("./messages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var TableFilters = function TableFilters(_ref) {
  var params = _ref.params,
      classes = _ref.classes,
      baseUrl = _ref.baseUrl,
      redirectTo = _ref.redirectTo,
      onSearch = _ref.onSearch,
      filters = _ref.filters,
      defaultFiltersUpdated = _ref.defaultFiltersUpdated,
      toggleActiveSearch = _ref.toggleActiveSearch,
      extraComponent = _ref.extraComponent;

  var _React$useState = _react["default"].useState(!defaultFiltersUpdated),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      filtersUpdated = _React$useState2[0],
      setFiltersUpdated = _React$useState2[1];

  var handleSearch = function handleSearch() {
    if (filtersUpdated) {
      setFiltersUpdated(false);

      var tempParams = _objectSpread({}, params);

      tempParams.page = 1;

      if (!tempParams.searchActive && toggleActiveSearch) {
        tempParams.searchActive = true;
      }

      redirectTo(baseUrl, tempParams);
    }

    onSearch();
  };

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_core.Grid, {
    container: true,
    spacing: 4
  }, Array(3).fill().map(function (x, i) {
    return i + 1;
  }).map(function (column) {
    return /*#__PURE__*/_react["default"].createElement(_core.Grid, {
      container: true,
      item: true,
      xs: 12,
      md: 4,
      className: classes.column,
      key: "column-".concat(column)
    }, /*#__PURE__*/_react["default"].createElement(_Filters.Filters, {
      params: params,
      baseUrl: baseUrl,
      onFilterChanged: function onFilterChanged() {
        return setFiltersUpdated(true);
      },
      filters: filters.filter(function (f) {
        return f.column === column;
      }),
      onEnterPressed: function onEnterPressed() {
        return handleSearch();
      }
    }));
  })), /*#__PURE__*/_react["default"].createElement(_core.Box, {
    mb: 2,
    mt: 2,
    display: "flex",
    justifyContent: "flex-end"
  }, extraComponent, /*#__PURE__*/_react["default"].createElement(_core.Button, {
    disabled: !filtersUpdated,
    variant: "contained",
    className: classes.button,
    color: "primary",
    onClick: function onClick() {
      return handleSearch();
    }
  }, /*#__PURE__*/_react["default"].createElement(_Search["default"], {
    className: classes.buttonIcon
  }), /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, _messages.MESSAGES.search))));
};

TableFilters.defaultProps = {
  baseUrl: '',
  filters: [],
  defaultFiltersUpdated: false,
  toggleActiveSearch: false,
  extraComponent: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null),
  redirectTo: function redirectTo() {}
};
TableFilters.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  params: _propTypes["default"].object.isRequired,
  baseUrl: _propTypes["default"].string,
  onSearch: _propTypes["default"].func.isRequired,
  redirectTo: _propTypes["default"].func,
  filters: _propTypes["default"].array,
  defaultFiltersUpdated: _propTypes["default"].bool,
  toggleActiveSearch: _propTypes["default"].bool,
  extraComponent: _propTypes["default"].node
};
var styled = (0, _core.withStyles)(_styles.styles)(TableFilters);
exports.TableFilters = styled;