"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOption = exports.getExtraProps = exports.defaultRenderTags = void 0;

var _react = _interopRequireDefault(require("react"));

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultRenderTags = function defaultRenderTags(getLabel) {
  return function (tagValue, getTagProps) {
    return tagValue.map(function (option, index) {
      return /*#__PURE__*/_react["default"].createElement(_Chip["default"], _extends({
        color: "secondary",
        style: {
          backgroundColor: option.color,
          color: 'white'
        },
        label: getLabel(option)
      }, getTagProps({
        index: index
      })));
    });
  };
};

exports.defaultRenderTags = defaultRenderTags;

var getExtraProps = function getExtraProps(getOptionLabel, getOptionSelected, renderOption) {
  var extraProps = {
    getOptionLabel: getOptionLabel || function (option) {
      var _option$label;

      return (_option$label = option === null || option === void 0 ? void 0 : option.label) !== null && _option$label !== void 0 ? _option$label : option.toString();
    },
    getOptionSelected: getOptionSelected || function (option, val) {
      return val && option.value === val.value;
    }
  };

  if (renderOption) {
    extraProps.renderOption = renderOption;
  }

  return extraProps;
};

exports.getExtraProps = getExtraProps;

var getOption = function getOption(value, options) {
  return options.find(function (o) {
    return "".concat(o.value) === "".concat(value);
  });
};

exports.getOption = getOption;