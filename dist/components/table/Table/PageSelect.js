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

var _Box = _interopRequireDefault(require("@material-ui/core/Box"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _styles = require("@material-ui/core/styles");

var _reactIntl = require("react-intl");

var _classnames = _interopRequireDefault(require("classnames"));

var _messages = require("./messages");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var PageSelect = function PageSelect(_ref) {
  var pageIndex = _ref.pageIndex,
      pages = _ref.pages,
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
    value: selectedPage // value={pageIndex}
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

exports.PageSelect = PageSelect;
PageSelect.defaultProps = {
  pages: 0,
  pageIndex: 0
};
PageSelect.propTypes = {
  pages: _propTypes["default"].number,
  pageIndex: _propTypes["default"].number,
  onPageChange: _propTypes["default"].func.isRequired
};