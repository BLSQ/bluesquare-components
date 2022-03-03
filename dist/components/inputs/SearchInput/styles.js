"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var styles = function styles(theme) {
  return {
    // TODO confirm if can safely be deleted
    icon: {
      right: theme.spacing(2)
    },
    // TODO confirm if can safely be deleted
    search: (0, _defineProperty2["default"])({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      marginLeft: 0,
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }),
    inputRoot: {
      color: 'inherit'
    },
    inputInput: {
      paddingRight: theme.spacing(7),
      width: '100%'
    }
  };
};

exports.styles = styles;