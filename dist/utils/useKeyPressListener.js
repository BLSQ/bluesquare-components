"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useKeyPressListener = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
// Shared ref to track active key listeners across all hook instances
var activeKeys = new Set();
var useKeyPressListener = exports.useKeyPressListener = function useKeyPressListener(key) {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isEnabled = _useState2[0],
    setIsEnabled = _useState2[1];
  (0, _react.useEffect)(function () {
    var enableListeners = function enableListeners(e, toggle) {
      if (e.key === key) {
        setIsEnabled(toggle);
      }
    };
    var enable = function enable(e) {
      enableListeners(e, true);
    };
    var disable = function disable(e) {
      enableListeners(e, false);
    };

    // Only add listeners if this is the first instance for this key
    if (!activeKeys.has(key)) {
      activeKeys.add(key);
      document.addEventListener('keydown', enable);
      document.addEventListener('keyup', disable);
      document.addEventListener('blur', disable);
    }
    return function () {
      // Only remove listeners if this is the last instance for this key
      if (activeKeys.has(key)) {
        activeKeys["delete"](key);
        document.removeEventListener('keydown', enable);
        document.removeEventListener('keyup', disable);
        document.removeEventListener('blur', disable);
      }
    };
  }, [key, activeKeys, isEnabled]);
  return isEnabled;
};