"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSafeIntl = void 0;

var _react = require("react");

var _reactIntl = require("react-intl");

var _patchIntl = require("./patchIntl");

var useSafeIntl = function useSafeIntl() {
  var intl = (0, _reactIntl.useIntl)(); // noinspection UnnecessaryLocalVariableJS

  var patchedIntl = (0, _react.useMemo)(function () {
    return (0, _patchIntl.patchIntl)(intl);
  }, [intl]);
  return patchedIntl;
};

exports.useSafeIntl = useSafeIntl;