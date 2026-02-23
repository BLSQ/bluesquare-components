"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Radio = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireWildcard(require("prop-types"));
var _material = require("@mui/material");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var RadioComponent = exports.Radio = function RadioComponent(_ref) {
  var _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    name = _ref.name,
    _ref$onChange = _ref.onChange,
    _onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    _ref$errors = _ref.errors,
    errors = _ref$errors === void 0 ? [] : _ref$errors,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$dataTestId = _ref.dataTestId,
    dataTestId = _ref$dataTestId === void 0 ? undefined : _ref$dataTestId;
  return /*#__PURE__*/_react["default"].createElement(_material.FormControl, {
    component: "fieldset",
    error: errors.length > 0,
    variant: "outlined"
  }, /*#__PURE__*/_react["default"].createElement(_material.FormLabel, {
    component: "legend",
    style: {
      fontSize: 12
    }
  }, "".concat(label).concat(required ? '*' : '')), /*#__PURE__*/_react["default"].createElement(_material.RadioGroup, {
    className: className,
    name: name,
    value: value,
    onChange: function onChange(event) {
      _onChange(event.target.value);
    },
    "data-test": dataTestId
  }, options.map(function (o) {
    return /*#__PURE__*/_react["default"].createElement(_material.FormControlLabel, {
      key: o.value,
      value: o.value,
      control: /*#__PURE__*/_react["default"].createElement(_material.Radio, {
        color: "primary"
      }),
      label: o.label,
      disabled: o.disabled
    });
  })));
};
RadioComponent.propTypes = {
  options: _propTypes["default"].array,
  name: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func,
  value: (0, _propTypes.oneOfType)([_propTypes["default"].string, _propTypes["default"].bool]),
  label: _propTypes["default"].string,
  errors: _propTypes["default"].arrayOf(_propTypes["default"].string),
  className: _propTypes["default"].string,
  dataTestId: _propTypes["default"].string,
  required: _propTypes["default"].bool
};