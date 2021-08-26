"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TableFooter = _interopRequireDefault(require("@material-ui/core/TableFooter"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _styles = require("@material-ui/core/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    cell: {
      padding: theme.spacing(1, 2)
    }
  };
});

var Footer = function Footer(_ref) {
  var footerGroups = _ref.footerGroups;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_TableFooter["default"], null, footerGroups.map(function (footerGroup) {
    var footerGroupProps = footerGroup.getFooterGroupProps();
    return /*#__PURE__*/_react["default"].createElement(_TableRow["default"], _extends({}, footerGroupProps, {
      key: footerGroupProps.key
    }), footerGroup.headers.map(function (column) {
      var columnsProps = column.getFooterProps();
      var align = column.align || 'center';

      if (column.Footer && !column.placeholderOf) {
        return /*#__PURE__*/_react["default"].createElement(_TableCell["default"], _extends({}, columnsProps, {
          className: classes.cell,
          key: columnsProps.key,
          align: align
        }), column.render('Footer'));
      }

      return null;
    }));
  }));
};

exports.Footer = Footer;
Footer.defaultProps = {
  footerGroups: []
};
Footer.propTypes = {
  footerGroups: _propTypes["default"].array
};