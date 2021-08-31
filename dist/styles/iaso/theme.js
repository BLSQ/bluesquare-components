"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rawTheme = exports.theme = void 0;

var _styles = require("@material-ui/core/styles");

var rawTheme = {
  typography: {
    useNextVariants: true
  },
  textColor: '#333',
  palette: {
    gray: {
      main: '#666',
      border: 'rgba(0,0,0,0.02)',
      background: 'rgba(0,0,0,0.03)'
    },
    mediumGray: {
      main: '#A2A2A2'
    },
    ligthGray: {
      main: '#F7F7F7',
      border: 'rgba(0, 0, 0, 0.12)',
      background: 'rgba(0, 0, 0, 0.012)'
    },
    error: {
      main: 'rgb(215, 25, 28)',
      background: 'rgba(215, 25, 28, 0.2)',
      backgroundHard: 'rgba(215, 25, 28, 0.7)'
    },
    success: {
      main: '#4caf50',
      background: 'rgba(#4caf50, 0.2)'
    }
  }
};
exports.rawTheme = rawTheme;
var theme = (0, _styles.createTheme)(rawTheme);
exports.theme = theme;