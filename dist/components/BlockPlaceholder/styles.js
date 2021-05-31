"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var styles = function styles(theme) {
  return {
    placeholder: {
      height: 15,
      backgroundColor: theme.palette.ligthGray.main,
      borderRadius: 5,
      marginRight: theme.spacing(1),
      width: '50%'
    }
  };
};

exports.styles = styles;