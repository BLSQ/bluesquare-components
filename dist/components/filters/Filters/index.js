"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Filters = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Select = require("../../inputs/Select");

var _NumberInput = require("../../inputs/NumberInput");

var _SearchInput = require("../../inputs/SearchInput");

var _Checkbox = require("../../inputs/Checkbox");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Filters = /*#__PURE__*/function (_React$Component) {
  _inherits(Filters, _React$Component);

  var _super = _createSuper(Filters);

  function Filters() {
    _classCallCheck(this, Filters);

    return _super.apply(this, arguments);
  }

  _createClass(Filters, [{
    key: "onChange",
    value: function onChange(urlKey, value, callback) {
      if (callback) {
        callback(value, urlKey);
      } else {
        var _this$props = this.props,
            params = _this$props.params,
            redirectTo = _this$props.redirectTo,
            baseUrl = _this$props.baseUrl;

        var newParams = _objectSpread({}, params);

        newParams[urlKey] = value;
        this.props.onFilterChanged(value);
        redirectTo(baseUrl, newParams);
      }
    }
  }, {
    key: "onSearchChange",
    value: function onSearchChange(urlKey, value) {
      var launchSearch = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      if (callback) {
        callback(value, urlKey);
      } else {
        var newState = _objectSpread(_objectSpread({}, this.state), {}, _defineProperty({}, urlKey, value));

        this.setState(newState);

        if (launchSearch) {
          this.onSearch(newState);
        }
      }
    }
  }, {
    key: "onSearch",
    value: function onSearch() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state;
      var _this$props2 = this.props,
          params = _this$props2.params,
          redirectTo = _this$props2.redirectTo,
          baseUrl = _this$props2.baseUrl;

      var newParams = _objectSpread({}, params);

      Object.keys(state).map(function (objectKey) {
        var value = state[objectKey];
        newParams[objectKey] = value;
        return null;
      });
      this.props.onFilterChanged();
      redirectTo(baseUrl, newParams);
    }
  }, {
    key: "toggleCheckbox",
    value: function toggleCheckbox(checked, urlKey, filter) {
      var _this$props3 = this.props,
          params = _this$props3.params,
          redirectTo = _this$props3.redirectTo,
          baseUrl = _this$props3.baseUrl;

      var newParams = _objectSpread({}, params);

      if (checked) {
        newParams[urlKey] = 'true';
      } else if (filter.checkedIfNull) {
        newParams[urlKey] = 'false';
      } else if (newParams[urlKey]) {
        delete newParams[urlKey];
      }

      this.props.onFilterChanged();
      redirectTo(baseUrl, newParams);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props4 = this.props,
          filters = _this$props4.filters,
          params = _this$props4.params,
          onEnterPressed = _this$props4.onEnterPressed;

      if (!filters) {
        return null;
      }

      return /*#__PURE__*/_react["default"].createElement("section", null, filters.map(function (filter) {
        var filterValue = filter.value || params[filter.urlKey];

        if (filter.useKeyParam === false) {
          filterValue = filter.value;
        }

        if (!filterValue && filter.defaultValue) {
          filterValue = filter.defaultValue;
        }

        if (!filter.hideEmpty || filter.hideEmpty && filter.options.length !== 0) {
          return /*#__PURE__*/_react["default"].createElement(_react.Fragment, {
            key: filter.uid ? filter.uid : filter.urlKey
          }, filter.type === 'number' && /*#__PURE__*/_react["default"].createElement(_NumberInput.NumberInput, {
            keyValue: filter.urlKey,
            onChange: function onChange(key, value) {
              return _this.onChange(filter.urlKey, value, filter.callback);
            },
            value: filterValue,
            type: "number",
            label: filter.label
          }), filter.type === 'select' && /*#__PURE__*/_react["default"].createElement(_Select.Select, {
            multi: filter.isMultiSelect,
            clearable: filter.isClearable,
            disabled: filter.isDisabled || false,
            keyValue: filter.urlKey,
            onChange: function onChange(key, value) {
              return _this.onChange(filter.urlKey, value, filter.callback);
            },
            value: filterValue,
            type: "select",
            options: filter.options,
            label: filter.label,
            labelString: filter.labelString,
            isSearchable: filter.isSearchable
          }), filter.type === 'search' && /*#__PURE__*/_react["default"].createElement(_SearchInput.SearchInput, {
            disabled: filter.isDisabled || false,
            keyValue: filter.urlKey,
            uid: filter.uid,
            onChange: function onChange(key, value) {
              return _this.onSearchChange(key, value, true, filter.callback);
            },
            value: filterValue,
            type: "search",
            label: filter.label,
            onEnterPressed: onEnterPressed
          }), filter.type === 'checkbox' &&
          /*#__PURE__*/
          // TODO: check with team
          _react["default"].createElement(_Checkbox.Checkbox, {
            disabled: filter.isDisabled || false,
            keyValue: filter.urlKey,
            onChange: function onChange(key, checked) {
              return _this.toggleCheckbox(checked, filter.urlKey, filter);
            },
            value: _this.props.params[filter.urlKey] === 'true' || _this.props.params[filter.urlKey] === undefined && filter.checkedIfNull,
            type: "checkbox",
            label: filter.label
          }));
        }

        return null;
      }));
    }
  }]);

  return Filters;
}(_react["default"].Component);

exports.Filters = Filters;
Filters.defaultProps = {
  baseUrl: '',
  onEnterPressed: function onEnterPressed() {
    return null;
  },
  onFilterChanged: function onFilterChanged() {
    return null;
  },
  redirectTo: function redirectTo() {}
};
Filters.propTypes = {
  // Used to come from redux
  filters: _propTypes["default"].array.isRequired,
  // Used to come from redux
  params: _propTypes["default"].object.isRequired,
  redirectTo: _propTypes["default"].func,
  baseUrl: _propTypes["default"].string,
  onEnterPressed: _propTypes["default"].func,
  onFilterChanged: _propTypes["default"].func
};