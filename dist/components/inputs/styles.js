"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useStyles = exports.styles = void 0;

var _styles = require("@material-ui/core/styles");

var styles = function styles(theme) {
  return {
    inputLabel: {
      color: 'rgba(0, 0, 0, 0.4)',
      paddingLeft: 3,
      paddingRight: 3,
      transition: theme.transitions.create(['all'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    shrink: {
      fontSize: 20,
      marginTop: -2,
      backgroundColor: 'white'
    }
  };
};

exports.styles = styles;
var useStyles = (0, _styles.makeStyles)(styles);
exports.useStyles = useStyles;