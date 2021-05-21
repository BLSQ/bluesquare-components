"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchIntl = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var patchIntl = function patchIntl(intl) {
  var intlCopy = _objectSpread({}, intl);

  var intlOriginal = _objectSpread({}, intl);

  var formatMessage = function formatMessage(message) {
    if (message && message.id && message.defaultMessage) {
      return intlOriginal.formatMessage(message);
    }

    console.warn('Warning: Message object is not defined properly!', message);
    return null;
  };

  intlCopy.formatMessage = formatMessage;
  return intlCopy;
};

exports.patchIntl = patchIntl;