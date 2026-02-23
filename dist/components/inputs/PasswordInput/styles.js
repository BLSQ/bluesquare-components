"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;
var styles = exports.styles = function styles(theme) {
  return {
    displayPassword: {
      position: 'absolute',
      top: 6,
      right: theme.spacing(2)
    },
    passwordInput: {
      paddingRight: theme.spacing(8),
      minHeight: 56
    }
  };
};