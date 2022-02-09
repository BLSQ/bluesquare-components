"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    // TODO confirm if can safely be deleted
    icon: {
      right: theme.spacing(2)
    },
    // TODO confirm if can safely be deleted
    search: _defineProperty({
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