"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reactTableStyles = void 0;

var reactTableStyles = function reactTableStyles(theme) {
  return {
    reactTable: {
      '& .ReactTable .rt-thead .rt-th.-sort-asc,.rt-thead .rt-td.-sort-asc': {
        boxShadow: "inset 0 3px 0 0 ".concat(theme.palette.primary.main)
      },
      '& .ReactTable .rt-thead .rt-th.-sort-desc,.rt-thead .rt-td.-sort-desc': {
        boxShadow: "inset 0 -3px 0 0 ".concat(theme.palette.primary.main)
      },
      '& .ReactTable .-pagination .-btn': {
        backgroundColor: "".concat(theme.palette.primary.main, " !important"),
        color: "".concat(theme.palette.primary.contrastText, " !important")
      }
    }
  };
};

exports.reactTableStyles = reactTableStyles;