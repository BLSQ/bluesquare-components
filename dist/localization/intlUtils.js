"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslatedOptions = exports.translateOptions = exports.displayDateFromTimestamp = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _moment = _interopRequireDefault(require("moment"));
var _useSafeIntl2 = require("./useSafeIntl");
var _uiConstants = require("../constants/iaso/uiConstants");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/**
 * Accept options either with a string label or an intl MessageDescriptor label
 * and translate if needed
 *
 * @param {Array} options
 * @param {function} formatMessage
 * @return {Array}
 */

var translateOptions = exports.translateOptions = function translateOptions(options, formatMessage) {
  return options.map(function (option) {
    if ((0, _typeof2["default"])(option.label) === 'object' && 'id' in option.label) {
      return _objectSpread(_objectSpread({}, option), {}, {
        label: formatMessage(option.label)
      });
    }
    return option;
  });
};

// options = [{id:'translation.key',defaultMessage:'What I want to display'}]
var useTranslatedOptions = exports.useTranslatedOptions = function useTranslatedOptions(options) {
  var _useSafeIntl = (0, _useSafeIntl2.useSafeIntl)(),
    formatMessage = _useSafeIntl.formatMessage;
  return translateOptions(options, formatMessage);
};

/**
 * Receive a timestamp and displays it as a human readable date
 *
 * @param {Number} timestamp
 */

var displayDateFromTimestamp = exports.displayDateFromTimestamp = function displayDateFromTimestamp(timestamp) {
  return timestamp ? _moment["default"].unix(timestamp).format('LTS') : _uiConstants.textPlaceholder;
};