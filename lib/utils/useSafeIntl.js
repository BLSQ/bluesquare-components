"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSafeIntl = void 0;

var _reactIntl = require("react-intl");

var _patchIntl = require("./patchIntl");

var useSafeIntl = function useSafeIntl() {
  return (0, _patchIntl.patchIntl)((0, _reactIntl.useIntl)());
};

exports.useSafeIntl = useSafeIntl;