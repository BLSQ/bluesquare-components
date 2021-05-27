"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Transparent = exports.Default = exports["default"] = void 0;

var _propTypes = require("prop-types");

var _react = _interopRequireDefault(require("react"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  title: 'LoadingSpinner',
  component: _index.LoadingSpinner,
  argTypes: {
    size: _propTypes.number,
    fixed: _propTypes.bool,
    padding: _propTypes.number,
    transparent: _propTypes.bool,
    classes: _propTypes.object
  }
};
exports["default"] = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react["default"].createElement(_index.LoadingSpinner, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  size: 40,
  transparent: false,
  fixed: true,
  padding: 0,
  classes: {}
};
var Transparent = Template.bind({});
exports.Transparent = Transparent;
Transparent.args = {
  size: 40,
  transparent: true,
  fixed: true,
  padding: 0,
  classes: {}
}; // TODO Figure out classes prop format