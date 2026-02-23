"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removePositionIndex = exports.formatThousand = exports.capitalize = exports.addPositionIndex = void 0;
exports.substituteVars = substituteVars;
exports.waitFor = exports.truncateText = void 0;
function substituteVars(obj, subs) {
  var transform = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (x) {
    return x;
  };
  // Replace every occurence of a placeholder in a value of every property of the object.
  // The syntax for the placeholder is `${<varname>}`
  // An optional transform function can pretransform the substitute
  // e.g. `{foo: "${bar}"} => {foo: "baz"}` if `subs = {bar: "baz"}`
  // We use json.stringify -> json.parse to clone the object and replace values.
  // See the test for a complete example.
  return JSON.parse(JSON.stringify(obj, function (key, value) {
    if (typeof value === 'string') {
      var match = value.match(/\$\{([a-zA-Z0-9_-]+)\}/);
      if (match) {
        var k = match[1];
        if (!subs.hasOwnProperty(k)) {
          console.warn('Cannot find match in substitudes for value:', value);
        } else {
          return transform(subs[k]);
        }
      }
    }
    return value;
  }));
}
var capitalize = exports.capitalize = function capitalize(text) {
  var keepEndCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return text.split(' ').map(function (word) {
    return word.slice(0, 1).toUpperCase() + (keepEndCase ? word.slice(1) : word.slice(1).toLowerCase());
  }).join(' ');
};
var formatThousand = exports.formatThousand = function formatThousand(number) {
  if (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }
  return '0';
};
var truncateText = exports.truncateText = function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return "".concat(text.substring(0, maxLength - 4), "...   ");
  }
  return "".concat(text, "   ");
};
var addPositionIndex = exports.addPositionIndex = function addPositionIndex(array) {
  var tempArray = [];
  if (array) {
    array.forEach(function (e, index) {
      tempArray.push({
        value: e,
        position: index
      });
    });
  }
  return tempArray;
};
var removePositionIndex = exports.removePositionIndex = function removePositionIndex(array) {
  var tempArray = [];
  if (array) {
    array.forEach(function (e) {
      tempArray.push(e.value);
    });
  }
  return tempArray;
};

// create timeout to simulate async call
// credit https://stackoverflow.com/questions/51200626/using-a-settimeout-in-a-async-function
var waitFor = exports.waitFor = function waitFor(delay) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, delay);
  });
};