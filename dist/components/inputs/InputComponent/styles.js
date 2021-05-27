"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _grey = _interopRequireDefault(require("@material-ui/core/colors/grey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    select: {
      '& .is-disabled  .Select-control': {
        borderColor: "".concat(_grey["default"]['300'], " !important"),
        cursor: 'not-allowed'
      },
      '&:hover .is-disabled  .Select-control': {
        borderColor: "".concat(_grey["default"]['300'], " !important")
      },
      '& .is-pseudo-focused .Select-control': {
        borderColor: "".concat(theme.palette.primary.main, "  !important")
      },
      '& .is-focused .Select-control': {
        borderColor: "".concat(theme.palette.primary.main, "  !important")
      },
      '& .is-open .Select-control': {
        borderColor: "".concat(theme.palette.primary.main, "  !important"),
        overfow: 'hidden'
      },
      '& .is-open .Select-menu-outer': {
        borderLeftColor: theme.palette.primary.main,
        borderBottomColor: theme.palette.primary.main,
        borderRightColor: theme.palette.primary.main,
        left: '1px'
      },
      '&:hover .Select-control': {
        borderColor: "".concat(theme.palette.primary.main, "  !important")
      },
      '& .Select-control': {
        boxShadow: 'none  !important'
      },
      '& .Select--multi .Select-value': {
        height: theme.spacing(4),
        display: 'inline-block !important',
        padding: '0 !important',
        color: theme.palette.secondary.main,
        borderColor: theme.palette.secondary.main,
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.secondary.main, 0.08)
      },
      '& .Select--multi .Select-value .Select-value-icon': {
        borderColor: (0, _colorManipulator.fade)(theme.palette.secondary.main, 0.24),
        width: '21px',
        height: '100%',
        paddingTop: '3px'
      },
      '& .Select--multi .Select-value .select-color': {
        display: 'inline-block',
        width: theme.spacing(2),
        height: theme.spacing(2),
        borderRadius: theme.spacing(2),
        marginRight: theme.spacing(1),
        position: 'relative',
        top: 3
      },
      '& .Select--multi .Select-multi-value-wrapper': {
        width: '97%',
        position: 'relative',
        top: 5
      },
      '& .Select--multi .Select-input': {
        position: 'relative',
        top: -5,
        paddingLeft: "".concat(theme.spacing(1), "px !important")
      },
      '& .Select--multi .Select-value-label': {
        height: '27px',
        width: 'auto',
        maxWidth: '92%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
      }
    },
    selectError: {
      '& .Select-control': {
        borderColor: "".concat(theme.palette.error.main, " !important")
      }
    },
    icon: {
      right: theme.spacing(2)
    },
    search: _defineProperty({
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      marginLeft: 0,
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }),
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      right: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      outline: 'none',
      boxShadow: 'none'
    },
    inputRoot: {
      color: 'inherit'
    },
    inputInput: {
      paddingRight: theme.spacing(7),
      width: '100%'
    },
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