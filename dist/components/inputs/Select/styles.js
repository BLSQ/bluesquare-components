"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _grey = _interopRequireDefault(require("@material-ui/core/colors/grey"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
        fontSize: 14
      },
      '& .Select-menu': {
        borderRadius: '4px',
        marginRight: '1px'
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
    }
  };
};

exports.styles = styles;