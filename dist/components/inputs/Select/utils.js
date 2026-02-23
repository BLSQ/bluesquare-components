"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTagsWithTooltip = exports.getOption = exports.getMultiOption = exports.getExtraProps = exports.defaultRenderTags = exports.defaultRenderOption = exports.defaultGetLabel = exports.baseRenderTagsWithTooltip = exports.baseRenderTags = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _Chip = _interopRequireDefault(require("@mui/material/Chip"));
var _material = require("@mui/material");
var _color = _interopRequireDefault(require("color"));
var defaultGetLabel = exports.defaultGetLabel = function defaultGetLabel(o) {
  return o !== null && o !== void 0 && o.label ? o.label : '';
};
var baseRenderTags = exports.baseRenderTags = function baseRenderTags(getLabel) {
  return function (tagValue, getTagProps) {
    return tagValue.sort(function (a, b) {
      return getLabel(a).localeCompare(b.label, undefined, {
        sensitivity: 'accent'
      });
    }).map(function (option, index) {
      return /*#__PURE__*/_react["default"].createElement(_Chip["default"], (0, _extends2["default"])({
        color: "secondary",
        style: {
          backgroundColor: option.color,
          color: (0, _color["default"])(option.color).isDark() ? 'white' : 'black'
        },
        label: getLabel(option)
      }, getTagProps({
        index: index
      })));
    });
  };
};
var defaultRenderTags = exports.defaultRenderTags = baseRenderTags(defaultGetLabel);
var baseRenderTagsWithTooltip = exports.baseRenderTagsWithTooltip = function baseRenderTagsWithTooltip(getLabel) {
  return function (getTooltipTitle) {
    return function (tagValue, getTagProps) {
      return tagValue.sort(function (a, b) {
        return getLabel(a).localeCompare(getLabel(b), undefined, {
          sensitivity: 'accent'
        });
      }).map(function (option, index) {
        var title = getTooltipTitle(option);
        return /*#__PURE__*/_react["default"].createElement(_material.Tooltip, {
          title: title,
          key: "".concat(title, "-").concat(index)
        }, /*#__PURE__*/_react["default"].createElement(_Chip["default"], (0, _extends2["default"])({
          color: "secondary",
          style: {
            backgroundColor: option.color,
            color: (0, _color["default"])(option.color).isDark() ? 'white' : 'black'
          },
          label: getLabel(option)
        }, getTagProps({
          index: index
        }))));
      });
    };
  };
};
var renderTagsWithTooltip = exports.renderTagsWithTooltip = baseRenderTagsWithTooltip(defaultGetLabel);
var getExtraProps = exports.getExtraProps = function getExtraProps(getOptionLabel, getOptionSelected, renderOption) {
  var extraProps = {
    getOptionLabel: getOptionLabel || function (option) {
      var _option$label;
      return (_option$label = option === null || option === void 0 ? void 0 : option.label) !== null && _option$label !== void 0 ? _option$label : option.toString();
    },
    isOptionEqualToValue: getOptionSelected || function (option, val) {
      // Handle zero as value
      if (val !== null && val !== void 0 && val.value || (val === null || val === void 0 ? void 0 : val.value) === 0) {
        return "".concat(option.value) === "".concat(val.value);
      }
      // Handle zero as value
      if (val || val === 0) {
        return "".concat(option.value) === "".concat(val);
      }
      return false;
    }
  };
  if (renderOption) {
    extraProps.renderOption = renderOption;
  }
  return extraProps;
};
var getOption = exports.getOption = function getOption(value, options) {
  return options.find(function (o) {
    return "".concat(o.value) === "".concat(value);
  });
};
var getMultiOption = exports.getMultiOption = function getMultiOption(value, options, getOptionSelected) {
  return options.find(function (option) {
    return getOptionSelected(option, value);
  });
};
var defaultRenderOption = exports.defaultRenderOption = function defaultRenderOption(props, option, getOptionLabel) {
  return /*#__PURE__*/_react["default"].createElement("li", (0, _extends2["default"])({}, props, {
    key: "".concat(props.id || option.value || option.id),
    style: option.color ? {
      paddingTop: 4,
      paddingBottom: 4
    } : {}
  }), option.color ? /*#__PURE__*/_react["default"].createElement(_Chip["default"], {
    label: getOptionLabel(option),
    sx: {
      backgroundColor: option.color,
      color: (0, _color["default"])(option.color).isDark() ? 'white' : 'black',
      margin: 0
    },
    size: "small"
  }) : getOptionLabel(option));
};