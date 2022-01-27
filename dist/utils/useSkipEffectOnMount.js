"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSkipEffectOnMount = void 0;

var _react = require("react");

var useSkipEffectOnMount = function useSkipEffectOnMount(func, deps) {
  var didMount = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, deps);
};

exports.useSkipEffectOnMount = useSkipEffectOnMount;