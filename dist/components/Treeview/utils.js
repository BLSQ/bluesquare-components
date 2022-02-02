"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adaptMap = void 0;

var adaptMap = function adaptMap(value) {
  if (!value) return null;
  return Array.from(value.entries()) // original map in array form [[key1, entry1],[key2, entry2]]
  .map(function (entry) {
    return Array.from(entry[1].keys());
  }) // 2D array containing the keys of each entry from comment above: [[entry1Key1, entry1Key2],[entry2Key1,entry2Key2]]
  .map(function (keys) {
    return keys.map(function (key) {
      return key.toString();
    }) // [["entry1Key1"],["entry2Key1"]]. String conversion needed for Treeview
    .filter(function (key, _index, keyArray) {
      return key !== keyArray[keyArray.length - 1];
    });
  } // removing last entry in the array to avoid expanding it
  ).flat();
};

exports.adaptMap = adaptMap;