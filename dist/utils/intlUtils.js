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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/**
 * Accept options either with a string label or an intl MessageDescriptor label
 * and translate if needed
 *
 * @param {Array} options
 * @param {function} formatMessage
 * @return {Array}
 */
var translateOptions = function translateOptions(options, formatMessage) {
  return options.map(function (option) {
    if ((0, _typeof2["default"])(option.label) === 'object' && 'id' in option.label) {
      return _objectSpread(_objectSpread({}, option), {}, {
        label: formatMessage(option.label)
      });
    }

    return option;
  });
}; // options = [{id:'translation.key',defaultMessage:'What I want to display'}]


exports.translateOptions = translateOptions;

var useTranslatedOptions = function useTranslatedOptions(options) {
  var _useSafeIntl = (0, _useSafeIntl2.useSafeIntl)(),
      formatMessage = _useSafeIntl.formatMessage;

  return translateOptions(options, formatMessage);
};
/**
 * Receive a timestamp and displays it as a human readable date
 *
 * @param {Number} timestamp
 */


exports.useTranslatedOptions = useTranslatedOptions;

var displayDateFromTimestamp = function displayDateFromTimestamp(timestamp) {
  return _moment["default"].unix(timestamp).format('LTS');
};

exports.displayDateFromTimestamp = displayDateFromTimestamp;