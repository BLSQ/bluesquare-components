"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchIntl = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var patchIntl = exports.patchIntl = function patchIntl(intl) {
  return _objectSpread(_objectSpread({}, intl), {}, {
    formatMessage: function formatMessage(message, value) {
      if (message && message.id) {
        return intl.formatMessage(message, value);
      }
      console.warn('Warning: Message object is not defined properly!', message);
      return null;
    },
    separators: {
      decimal: intl.formatNumber(1.1).replace(/\d/g, '')[0] || '.',
      thousand: intl.formatNumber(1000).replace(/\d/g, '')[0] || ','
    }
  });
};