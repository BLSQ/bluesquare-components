"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOtChipColors = exports.otChipColors = exports.getChipColors = exports.chipColors = void 0;
var chipColors = ['#4dd0e1', '#01579b', '#607d8b', '#ff7043', '#e91e63', '#9c27b0', '#f44336', '#2196f3', '#009688'];
exports.chipColors = chipColors;

var getChipColors = function getChipColors(i) {
  var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var colors = reverse ? chipColors.reverse() : chipColors;
  return colors[i % colors.length];
};

exports.getChipColors = getChipColors;
var otChipColors = ['#e91e63', '#795548', '#0277BD', '#4CAF50', '#607d8b', '#ff7043', '#01579b', '#9E9D24', '#9c27b0'];
exports.otChipColors = otChipColors;

var getOtChipColors = function getOtChipColors(i) {
  return otChipColors[i % otChipColors.length];
};

exports.getOtChipColors = getOtChipColors;