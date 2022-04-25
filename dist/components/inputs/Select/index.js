"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "renderTags", {
  enumerable: true,
  get: function get() {
    return _utils.defaultRenderTags;
  }
});
exports.Select = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _single = require("./single");

var _multi = require("./multi");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SelectCustom = function SelectCustom(props) {
  if (props.multi) {
    return /*#__PURE__*/_react["default"].createElement(_multi.MultiSelect, props);
  }

  return /*#__PURE__*/_react["default"].createElement(_single.SingleSelect, props);
};

exports.Select = SelectCustom;
SelectCustom.defaultProps = {
  multi: false
};
SelectCustom.propTypes = {
  multi: _propTypes["default"].bool
};