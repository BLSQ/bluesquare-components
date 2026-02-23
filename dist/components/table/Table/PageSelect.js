"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PageSelect = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Box = _interopRequireDefault(require("@mui/material/Box"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _styles = require("@mui/styles");
var _reactIntl = require("react-intl");
var _classnames = _interopRequireDefault(require("classnames"));
var _messages = require("./messages");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
var useStyles = (0, _styles.makeStyles)(function () {
  return {
    input: {
      width: 80
    },
    mediumInput: {
      width: 90
    },
    largeInput: {
      width: 100
    },
    XLInput: {
      width: 110
    }
  };
});
var parseSelectedValue = function parseSelectedValue(value) {
  var parsedValue = parseInt(value, 10);
  if (Number.isNaN(parsedValue)) return '';
  return parsedValue;
};
var adaptInputSize = function adaptInputSize(length) {
  if (length <= 999) return 'input';
  if (length <= 9999) return 'mediumInput';
  if (length <= 99999) return 'largeInput';
  return 'XLInput';
};
var PageSelect = exports.PageSelect = function PageSelect(_ref) {
  var _ref$pageIndex = _ref.pageIndex,
    pageIndex = _ref$pageIndex === void 0 ? 0 : _ref$pageIndex,
    _ref$pages = _ref.pages,
    pages = _ref$pages === void 0 ? 0 : _ref$pages,
    onPageChange = _ref.onPageChange;
  var classes = useStyles();
  var _useState = (0, _react.useState)(pageIndex),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    selectedPage = _useState2[0],
    setSelectedPage = _useState2[1];
  return /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    ml: 8
  }, /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "inline-block",
    mr: 1
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, _messages.MESSAGES.pageText)), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    className: (0, _classnames["default"])(classes[adaptInputSize(selectedPage)], 'pagination-page-select'),
    size: "small",
    label: "",
    type: "number",
    value: selectedPage
    // value={pageIndex}
    ,
    disabled: pages < 2,
    variant: "outlined",
    onChange: function onChange(e) {
      setSelectedPage(parseSelectedValue(e.currentTarget.value));
    },
    onKeyPress: function onKeyPress(event) {
      if (event.key === 'Enter') {
        onPageChange(selectedPage);
      }
    }
  }), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "inline-block",
    ml: 1
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.FormattedMessage, _messages.MESSAGES.ofText)), /*#__PURE__*/_react["default"].createElement(_Box["default"], {
    display: "inline-block",
    ml: 1
  }, pages));
};
PageSelect.propTypes = {
  pages: _propTypes["default"].number,
  pageIndex: _propTypes["default"].number,
  onPageChange: _propTypes["default"].func.isRequired
};