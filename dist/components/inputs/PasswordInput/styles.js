"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  return {
    displayPassword: {
      position: 'absolute',
      top: 4,
      right: theme.spacing(2)
    },
    passwordInput: {
      paddingRight: theme.spacing(8)
    }
  };
};

exports.styles = styles;