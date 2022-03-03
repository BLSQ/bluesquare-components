"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = exports.addPositionIndex = void 0;
exports.clone = clone;
exports.deepEqual = deepEqual;
exports.removePositionIndex = exports.formatThousand = void 0;
exports.substituteVars = substituteVars;
exports.truncateText = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

function clone(x) {
  return JSON.parse(JSON.stringify(x));
}

function deepEqual(a, b) {
  var ignoreNull = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, _typeof2["default"])(a) !== 'object') {
    return a === b;
  }

  var ka = Object.keys(a);
  var kb = Object.keys(b);
  var key;
  var i; // ignore null and undefined values

  if (ignoreNull) {
    ka = ka.filter(function (x) {
      return a[x] != null;
    });
    kb = kb.filter(function (x) {
      return b[x] != null;
    });
  } // having the same number of owned properties (keys incorporates
  // hasOwnProperty)


  if (ka.length !== kb.length) {
    return false;
  } // the same set of keys (although not necessarily the same order),


  ka.sort();
  kb.sort(); // cheap key test

  for (i = ka.length - 1; i >= 0; i -= 1) {
    if (ka[i] !== kb[i]) {
      return false;
    }
  } // equivalent values for every corresponding key, and
  // possibly expensive deep test


  for (i = ka.length - 1; i >= 0; i -= 1) {
    key = ka[i];

    if (!deepEqual(a[key], b[key], ignoreNull)) {
      return false;
    }
  }

  return true;
}

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

var capitalize = function capitalize(text) {
  var keepEndCase = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return text.split(' ').map(function (word) {
    return word.slice(0, 1).toUpperCase() + (keepEndCase ? word.slice(1) : word.slice(1).toLowerCase());
  }).join(' ');
};

exports.capitalize = capitalize;

var formatThousand = function formatThousand(number) {
  if (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  return '0';
};

exports.formatThousand = formatThousand;

var truncateText = function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return "".concat(text.substring(0, maxLength - 4), "...   ");
  }

  return "".concat(text, "   ");
};

exports.truncateText = truncateText;

var addPositionIndex = function addPositionIndex(array) {
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

exports.addPositionIndex = addPositionIndex;

var removePositionIndex = function removePositionIndex(array) {
  var tempArray = [];

  if (array) {
    array.forEach(function (e) {
      tempArray.push(e.value);
    });
  }

  return tempArray;
};

exports.removePositionIndex = removePositionIndex;