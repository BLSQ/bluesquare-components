"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clone = clone;
exports.deepEqual = deepEqual;
exports.substituteVars = substituteVars;
exports.getIntegerArray = exports.isFixedStructure = exports.getAgeFromYear = exports.isSuperUser = exports.isMediumUser = exports.renderCountCell = exports.getPourcentage = exports.userHasPermission = exports.isCaseLocalised = exports.scrollToTop = exports.scrollTo = exports.removePositionIndex = exports.addPositionIndex = exports.getWorkZoneName = exports.getZsName = exports.getPercentage = exports.getBarChartMax = exports.NormalizeBarChartDatas = exports.getYears = exports.getPossibleYears = exports.arrayToObject = exports.formatThousand = exports.capitalize = void 0;

var _react = _interopRequireDefault(require("react"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function clone(x) {
  return JSON.parse(JSON.stringify(x));
}

function deepEqual(a, b) {
  var ignoreNull = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (_typeof(a) !== 'object') {
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

var arrayToObject = function arrayToObject(arrayElement) {
  var tempResult = {};
  arrayElement.map(function (element) {
    tempResult[Object.keys(element)[0]] = element[Object.keys(element)[0]];
    return true;
  });
  return tempResult;
};

exports.arrayToObject = arrayToObject;

var getPossibleYears = function getPossibleYears() {
  var firstYear = 2000;
  var currentYear = new Date().getFullYear();
  var possibleYears = [];

  for (var y = currentYear; y >= firstYear; y -= 1) {
    possibleYears.push("".concat(y));
  }

  return possibleYears;
};

exports.getPossibleYears = getPossibleYears;

var getYears = function getYears(yearsCount) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var reverse = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var currentYear = new Date().getFullYear() + offset;
  var years = Array(yearsCount).fill().map(function (y, i) {
    return currentYear - i;
  });

  if (reverse) {
    return years.reverse();
  }

  return years;
};

exports.getYears = getYears;

var NormalizeBarChartDatas = function NormalizeBarChartDatas(settings, d) {
  var newDatas = [];
  settings.map(function (setting, index) {
    if (!setting.datas) {
      newDatas.push({
        key: setting.key,
        value: d[setting.key] ? d[setting.key] : 0,
        label: setting.label,
        color: setting.color,
        index: index,
        original: d
      });
    } else {
      var previousValue = 0;
      setting.datas.map(function (subSetting) {
        var value = d[subSetting.key] ? d[subSetting.key] : 0;
        newDatas.push({
          key: subSetting.key,
          value: value,
          label: subSetting.label,
          color: subSetting.color,
          previousValue: previousValue,
          index: index,
          original: d
        });
        previousValue += value;
        return null;
      });
    }

    return null;
  });
  return newDatas;
};

exports.NormalizeBarChartDatas = NormalizeBarChartDatas;

var getBarChartMax = function getBarChartMax(settings, d) {
  var higherValue = 0;
  settings.map(function (setting) {
    if (setting.datas) {
      var subTotal = 0;
      setting.datas.map(function (subSetting) {
        subTotal += d[subSetting.key];
        return null;
      });

      if (subTotal > higherValue) {
        higherValue = subTotal;
      }
    } else if (d[setting.key] > higherValue) {
      higherValue = d[setting.key];
    }

    return null;
  });
  return higherValue;
};

exports.getBarChartMax = getBarChartMax;

var getPercentage = function getPercentage(totalCount, count) {
  return totalCount !== 0 ? (count * (100 / totalCount)).toFixed(2) : 0;
};

exports.getPercentage = getPercentage;

var getZsName = function getZsName(zoneId, zones) {
  if (zoneId && zones.length > 0) {
    var zoneObj = zones.filter(function (z) {
      return parseInt(z.properties.pk, 10) === zoneId;
    })[0];

    if (zoneObj) {
      return zoneObj.properties.name;
    }
  }

  return '';
};

exports.getZsName = getZsName;

var getWorkZoneName = function getWorkZoneName(workzoneId, workzones) {
  if (workzoneId && workzones.length > 0) {
    var workZoneObj = workzones.filter(function (w) {
      return w.id === workzoneId;
    })[0];

    if (workZoneObj) {
      return workZoneObj.name;
    }
  }

  return '';
};

exports.getWorkZoneName = getWorkZoneName;

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

var scrollTo = function scrollTo(selectorId) {
  var headerOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  setTimeout(function () {
    var toElement = document.getElementById(selectorId);

    if (toElement) {
      var elementPosition = toElement.getBoundingClientRect().top;
      var offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        behavior: 'smooth',
        top: offsetPosition
      });
    }
  }, 500);
};

exports.scrollTo = scrollTo;

var scrollToTop = function scrollToTop() {
  setTimeout(function () {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    });
  }, 500);
};

exports.scrollToTop = scrollToTop;

var isCaseLocalised = function isCaseLocalised(kase) {
  return kase.location.normalized && kase.location.normalized.as !== undefined && kase.location.normalized.village !== undefined;
};

exports.isCaseLocalised = isCaseLocalised;

var userHasPermission = function userHasPermission(permissions, currentUser, permissionKey) {
  var allowSuperUser = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  var hasPermission = false;

  if (currentUser && permissions && Object.getOwnPropertyNames(currentUser).length !== 0 && permissions.length > 0) {
    var currentPermission = permissions.find(function (p) {
      return p.codename === permissionKey;
    }); // TODO: the API is now filtering the user permissions list so the second .find below is unnecessary

    if (currentUser.is_superuser && allowSuperUser || currentPermission && currentUser.permissions.find(function (p) {
      return p === currentPermission.id;
    })) {
      hasPermission = true;
    }
  }

  return hasPermission;
};

exports.userHasPermission = userHasPermission;

var getPourcentage = function getPourcentage(total, value) {
  if (total === 0) return 0;
  return 100 / (total / value);
};

exports.getPourcentage = getPourcentage;

var renderCountCell = function renderCountCell(total, value, formatMessage) {
  var pourcentage = getPourcentage(total, value);
  return /*#__PURE__*/_react["default"].createElement("span", null, formatThousand(total), ' ', pourcentage !== 0 && total !== 0 && /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '85%'
    }
  }, "(", parseFloat(pourcentage).toFixed(2), "%", ' ', formatMessage({
    defaultMessage: 'positives',
    id: 'monitoring.label.positive'
  }), ")")), pourcentage === 0 && total !== 0 && /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      fontSize: '85%'
    }
  }, "(", formatMessage({
    defaultMessage: '0 positive',
    id: 'monitoring.label.no_positve'
  }), ")")));
};

exports.renderCountCell = renderCountCell;

var isMediumUser = function isMediumUser(userLevel) {
  return userLevel > 10 && userLevel <= 30;
};

exports.isMediumUser = isMediumUser;

var isSuperUser = function isSuperUser(userLevel) {
  return userLevel >= 40;
};

exports.isSuperUser = isSuperUser;

var getAgeFromYear = function getAgeFromYear(year) {
  return (0, _moment["default"])().format('YYYY') - parseInt(year, 10);
};

exports.getAgeFromYear = getAgeFromYear;

var isFixedStructure = function isFixedStructure(currentCase) {
  return currentCase.user_type !== null && (currentCase.user_type === 'CDTC' || currentCase.user_type === 'fixed_structure');
};

exports.isFixedStructure = isFixedStructure;

var getIntegerArray = function getIntegerArray(size) {
  return Array(size).fill().map(function (y, i) {
    return size - i;
  }).reverse();
};

exports.getIntegerArray = getIntegerArray;