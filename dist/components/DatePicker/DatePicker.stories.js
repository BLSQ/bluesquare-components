"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Placeholder = exports.WithError = exports.Default = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _pickers = require("@material-ui/pickers");

var _moment = _interopRequireDefault(require("@date-io/moment"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'DatePicker',
  component: _index.DatePicker
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_pickers.MuiPickersUtilsProvider, {
    utils: _moment["default"]
  }, /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
    locale: "en",
    messages: {}
  }, /*#__PURE__*/_react["default"].createElement(_index.DatePicker, args)));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  placeholder: 'placeholder',
  onChange: function onChange(value) {
    // eslint-disable-next-line no-console
    console.log('Click', value);
  },
  currentDate: '05/04/2021',
  hasError: false,
  clearMessage: {
    id: 'clearMessage',
    defaultMessage: 'Clear'
  }
};
var WithError = Template.bind({});
exports.WithError = WithError;
WithError.args = {
  placeholder: 'placeholder',
  onChange: function onChange() {
    // eslint-disable-next-line no-console
    console.log('Click');
  },
  currentDate: '2021-05-04',
  hasError: true,
  clearMessage: {
    id: 'clearMessage',
    defaultMessage: 'Clear'
  }
};
var Placeholder = Template.bind({});
exports.Placeholder = Placeholder;
Placeholder.args = {
  placeholder: 'placeholder',
  onChange: function onChange(value) {
    // eslint-disable-next-line no-console
    console.log('Click', value);
  },
  currentDate: null,
  hasError: false,
  clearMessage: {
    id: 'clearMessage',
    defaultMessage: 'Clear'
  }
};