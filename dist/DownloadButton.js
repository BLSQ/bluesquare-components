"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DownloadButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _core = require("@material-ui/core");

var _SaveAlt = _interopRequireDefault(require("@material-ui/icons/SaveAlt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var styles = function styles(theme) {
  return {
    button: {
      marginLeft: theme.spacing(2),
      '& svg, & i': {
        marginRight: theme.spacing(1)
      }
    }
  };
};

function DownloadButtonsComponent(props) {
  var csvUrl = props.csvUrl,
      xlsxUrl = props.xlsxUrl,
      gpkgUrl = props.gpkgUrl,
      classes = props.classes;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    className: classes.button,
    color: "primary",
    onClick: function onClick() {
      window.location.href = csvUrl;
    }
  }, /*#__PURE__*/_react["default"].createElement(_SaveAlt["default"], null), "CSV"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    className: classes.button,
    color: "primary",
    onClick: function onClick() {
      window.location.href = xlsxUrl;
    }
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-file-excel-o"
  }), "XLSX"), gpkgUrl !== null && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    className: classes.button,
    color: "primary",
    onClick: function onClick() {
      window.location.href = gpkgUrl;
    }
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "fa fa-globe"
  }), "GPKG"));
}

DownloadButtonsComponent.defaultProps = {
  csvUrl: '',
  xlsxUrl: '',
  gpkgUrl: null
};
DownloadButtonsComponent.propTypes = {
  csvUrl: _propTypes["default"].string,
  xlsxUrl: _propTypes["default"].string,
  gpkgUrl: _propTypes["default"].string,
  classes: _propTypes["default"].object.isRequired
};
var styledButton = (0, _core.withStyles)(styles)(DownloadButtonsComponent);
exports.DownloadButton = styledButton;