"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formsFilters = exports.linksFilters = exports.runsFilters = exports.onlyChildrenParams = exports.linksFiltersWithPrefix = exports.orgUnitFiltersWithPrefix = exports.filtersWithPrefix = exports.orgUnitFilters = exports.directChildren = exports.instanceDeleted = exports.instanceStatus = exports.periods = exports.group = exports.locationsLimit = exports.location = exports.shape = exports.score = exports.algoRun = exports.algo = exports.version = exports.profile = exports.validator = exports.deviceOwnership = exports.device = exports.subSource = exports.source = exports.orgUnitType = exports.orgUnitLevel = exports.hasInstances = exports.status = exports.search = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _messages = _interopRequireDefault(require("../domains/forms/messages"));

var _FullStarsSvgComponent = _interopRequireDefault(require("../components/stars/FullStarsSvgComponent"));

var _usersUtils = _interopRequireDefault(require("../utils/usersUtils"));

var _tableUtils = require("../utils/tableUtils");

var _models = require("../domains/periods/models");

var _utils = require("../domains/orgUnits/utils");

var _index = require("../utils/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var search = function search() {
  var urlKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'search';
  return {
    urlKey: urlKey,
    label: _messages["default"].textSearch,
    type: 'search'
  };
};

exports.search = search;

var status = function status(formatMessage) {
  var urlKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'validation_status';
  return {
    urlKey: urlKey,
    isMultiSelect: false,
    isClearable: false,
    options: [{
      label: formatMessage(_messages["default"].all),
      value: 'all',
      icon: /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
        title: formatMessage(_messages["default"].all)
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        style: {
          color: '#90caf9'
        },
        className: "fa fa-circle-o fa-lg"
      }))
    }, {
      label: formatMessage(_messages["default"]["new"]),
      value: 'NEW',
      icon: /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
        title: formatMessage(_messages["default"]["new"])
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        style: {
          color: '#ffb74d'
        },
        className: "fa fa-asterisk fa-lg"
      }))
    }, {
      label: formatMessage(_messages["default"].validated),
      value: 'VALID',
      icon: /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
        title: formatMessage(_messages["default"].validated)
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        style: {
          color: '#4caf50'
        },
        className: "fa fa-check fa-lg"
      }))
    }, {
      label: formatMessage(_messages["default"].rejected),
      value: 'REJECTED',
      icon: /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
        title: formatMessage(_messages["default"].rejected)
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        style: {
          color: '#d32f2f'
        },
        className: "fa fa-ban fa-lg"
      }))
    }],
    label: _messages["default"].status,
    type: 'select'
  };
};

exports.status = status;

var hasInstances = function hasInstances(formatMessage) {
  var urlKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'hasInstances';
  return {
    urlKey: urlKey,
    isMultiSelect: false,
    isClearable: true,
    options: [{
      label: formatMessage(_messages["default"]["with"]),
      value: 'true'
    }, {
      label: formatMessage(_messages["default"].without),
      value: 'false'
    }, {
      label: formatMessage(_messages["default"].duplicates),
      value: 'duplicates'
    }],
    label: _messages["default"].hasInstances,
    type: 'select'
  };
};

exports.hasInstances = hasInstances;

var orgUnitLevel = function orgUnitLevel(orgunitList, level, callback, value, formatMessage) {
  return {
    urlKey: 'levels',
    isMultiSelect: false,
    useKeyParam: false,
    isClearable: true,
    options: orgunitList.map(function (o) {
      return {
        label: (0, _utils.getOrgunitMessage)(o, true),
        value: o.id
      };
    }),
    labelString: "".concat(formatMessage(_messages["default"].level), " ").concat(level + 1),
    type: 'select',
    callback: callback,
    value: value
  };
};

exports.orgUnitLevel = orgUnitLevel;

var orgUnitType = function orgUnitType(orgunitTypesList) {
  var urlKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'orgUnitTypeId';
  var labelString = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var label = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _messages["default"].org_unit_type_id;
  return {
    urlKey: urlKey,
    isMultiSelect: true,
    isClearable: true,
    options: orgunitTypesList.map(function (t) {
      return {
        label: t.name,
        value: t.id
      };
    }),
    label: labelString !== '' ? null : label,
    type: 'select',
    labelString: labelString
  };
};

exports.orgUnitType = orgUnitType;

var renderColoredOption = function renderColoredOption(item) {
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      backgroundColor: item.color
    },
    className: "select-color"
  }), item.name);
};

var source = function source(sourceList) {
  var isMultiSelect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var displayColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var urlKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'source';
  var labelString = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var label = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : _messages["default"].source;
  return {
    urlKey: urlKey,
    isMultiSelect: isMultiSelect,
    displayColor: displayColor,
    isClearable: true,
    options: sourceList.map(function (s) {
      return {
        label: displayColor ? renderColoredOption(s) : s.name,
        value: s.id
      };
    }),
    label: labelString !== '' ? null : label,
    type: 'select',
    labelString: labelString
  };
};

exports.source = source;

var subSource = function subSource(formatMessage, sourceList) {
  return {
    urlKey: 'sourceId',
    isMultiSelect: false,
    isClearable: true,
    options: sourceList.map(function (t) {
      return {
        label: formatMessage(_messages["default"][t[0]]),
        value: t[0]
      };
    }),
    label: _messages["default"].subSource,
    type: 'select'
  };
};

exports.subSource = subSource;

var device = function device(deviceList) {
  return {
    urlKey: 'deviceId',
    isMultiSelect: false,
    isClearable: true,
    options: deviceList.map(function (d) {
      return {
        label: d.imei,
        value: d.id
      };
    }),
    label: _messages["default"].device,
    type: 'select'
  };
};

exports.device = device;

var deviceOwnership = function deviceOwnership(deviceOnershipList) {
  return {
    urlKey: 'deviceOwnershipId',
    isMultiSelect: false,
    isClearable: true,
    options: deviceOnershipList.map(function (o) {
      return {
        label: "".concat((0, _usersUtils["default"])(o.user), " - IMEI:").concat(o.device.imei),
        value: o.id
      };
    }),
    label: _messages["default"].deviceOwnership,
    type: 'select'
  };
};

exports.deviceOwnership = deviceOwnership;

var validator = function validator(profileList) {
  return {
    urlKey: 'validatorId',
    isMultiSelect: false,
    isClearable: true,
    options: profileList.map(function (u) {
      return {
        label: u.user_name,
        value: u.id
      };
    }),
    label: _messages["default"].validator,
    type: 'select'
  };
};

exports.validator = validator;

var profile = function profile(profileList) {
  var isMultiSelect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var urlKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'profile';
  var labelString = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var label = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _messages["default"].profile;
  return {
    urlKey: urlKey,
    isMultiSelect: isMultiSelect,
    isClearable: true,
    options: profileList.map(function (u) {
      return {
        label: u.user_name,
        value: u.id
      };
    }),
    label: labelString !== '' ? null : label,
    type: 'select',
    labelString: labelString
  };
};

exports.profile = profile;

var version = function version(formatMessage, versionsList) {
  var isDisabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isMultiSelect = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var urlKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'version';
  var labelString = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
  var label = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : _messages["default"].version;
  return {
    isDisabled: isDisabled,
    urlKey: urlKey,
    isMultiSelect: isMultiSelect,
    isClearable: true,
    options: versionsList.map(function (v) {
      return {
        label: "".concat(formatMessage(_messages["default"].version), " ").concat(v.number),
        value: v.number
      };
    }),
    label: labelString !== '' ? null : label,
    type: 'select',
    labelString: labelString
  };
};

exports.version = version;

var algo = function algo(algoList) {
  return {
    urlKey: 'algorithmId',
    isMultiSelect: false,
    isClearable: true,
    options: algoList.map(function (a) {
      return {
        label: a.description,
        value: a.id
      };
    }),
    label: _messages["default"].algo,
    type: 'select'
  };
};

exports.algo = algo;

var getRunDisplayName = function getRunDisplayName(runItem, formatMessage) {
  return "".concat(formatMessage(_messages["default"].from), " ").concat(runItem.source.data_source.name, " v").concat(runItem.source.number) + " ".concat(formatMessage(_messages["default"].to), " ").concat(runItem.destination.data_source.name, " v").concat(runItem.destination.number, " (") + "".concat(runItem.algorithm_name, ")");
};

var algoRun = function algoRun(algoRunList, formatMessage) {
  return {
    urlKey: 'algorithmRunId',
    isMultiSelect: false,
    isClearable: true,
    options: algoRunList.map(function (a) {
      return {
        label: getRunDisplayName(a, formatMessage),
        value: a.id
      };
    }),
    label: _messages["default"].algoRun,
    type: 'select'
  };
};

exports.algoRun = algoRun;

var score = function score() {
  return {
    urlKey: 'score',
    isMultiSelect: false,
    isClearable: true,
    options: [1, 2, 3, 4, 5].map(function (s) {
      return {
        label: /*#__PURE__*/_react["default"].createElement(_FullStarsSvgComponent["default"], {
          score: s
        }),
        value: "".concat((s - 1) * 20, ",").concat(s * 20)
      };
    }),
    label: _messages["default"].score,
    type: 'select',
    isSearchable: false
  };
};

exports.score = score;

var shape = function shape(formatMessage) {
  var urlKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'withShape';
  return {
    urlKey: urlKey,
    isMultiSelect: false,
    isClearable: true,
    options: [{
      label: formatMessage(_messages["default"]["with"]),
      value: 'true'
    }, {
      label: formatMessage(_messages["default"].without),
      value: 'false'
    }],
    label: _messages["default"].shape,
    type: 'select'
  };
};

exports.shape = shape;

var location = function location(formatMessage) {
  var urlKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'withLocation';
  return {
    urlKey: urlKey,
    isMultiSelect: false,
    isClearable: true,
    options: [{
      label: formatMessage(_messages["default"]["with"]),
      value: 'true'
    }, {
      label: formatMessage(_messages["default"].without),
      value: 'false'
    }],
    label: _messages["default"].location,
    type: 'select'
  };
};

exports.location = location;

var locationsLimit = function locationsLimit() {
  return {
    urlKey: 'locationLimit',
    label: _messages["default"].locationLimit,
    type: 'number'
  };
};

exports.locationsLimit = locationsLimit;

var group = function group(groupList) {
  var urlKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'group';
  return {
    urlKey: urlKey,
    isMultiSelect: true,
    isClearable: true,
    options: groupList.map(function (a) {
      return {
        label: a.source_version ? "".concat(a.name, " - ").concat(a.source_version.data_source.name) : a.name,
        value: a.id
      };
    }),
    label: _messages["default"].group,
    type: 'select'
  };
};

exports.group = group;

var periods = function periods(periodsList) {
  return {
    urlKey: 'periods',
    isMultiSelect: true,
    isClearable: true,
    options: periodsList.map(function (p) {
      return {
        label: _models.Period.getPrettyPeriod(p),
        value: p
      };
    }),
    label: _messages["default"].periods,
    type: 'select'
  };
};

exports.periods = periods;

var instanceStatus = function instanceStatus(options) {
  return {
    urlKey: 'status',
    isMultiSelect: true,
    isClearable: true,
    options: options,
    label: _messages["default"].status,
    type: 'select'
  };
};

exports.instanceStatus = instanceStatus;

var instanceDeleted = function instanceDeleted() {
  return {
    urlKey: 'showDeleted',
    label: _messages["default"].showDeleted,
    type: 'checkbox'
  };
};

exports.instanceDeleted = instanceDeleted;

var directChildren = function directChildren() {
  return {
    urlKey: 'onlyDirectChildren',
    label: _messages["default"].onlyDirectChildren,
    type: 'checkbox',
    checkedIfNull: true
  };
};

exports.directChildren = directChildren;

var orgUnitFilters = function orgUnitFilters() {
  var formatMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
    return null;
  };
  var groups = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var orgUnitTypes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var withChildren = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var filters = [_objectSpread(_objectSpread({}, search()), {}, {
    column: 1
  }), _objectSpread(_objectSpread({}, orgUnitType(orgUnitTypes)), {}, {
    column: 1
  }), _objectSpread(_objectSpread({}, group(groups)), {}, {
    column: 3
  }), _objectSpread(_objectSpread({}, location(formatMessage)), {}, {
    column: 2
  }), _objectSpread(_objectSpread({}, shape(formatMessage)), {}, {
    column: 2
  }), _objectSpread(_objectSpread({}, hasInstances(formatMessage)), {}, {
    column: 3
  }), _objectSpread(_objectSpread({}, status(formatMessage)), {}, {
    defaultValue: 'all',
    column: 3
  })];

  if (withChildren) {
    filters.push(_objectSpread(_objectSpread({}, directChildren()), {}, {
      column: 1
    }));
  }

  return filters;
};

exports.orgUnitFilters = orgUnitFilters;

var filtersWithPrefix = function filtersWithPrefix(filters, paramsPrefix) {
  return filters.map(function (f) {
    return _objectSpread(_objectSpread({}, f), {}, {
      urlKey: "".concat(paramsPrefix).concat((0, _index.capitalize)(f.urlKey, true)),
      apiUrlKey: f.urlKey
    });
  });
};

exports.filtersWithPrefix = filtersWithPrefix;

var orgUnitFiltersWithPrefix = function orgUnitFiltersWithPrefix(paramsPrefix, withChildren, formatMessage, groups, orgUnitTypes) {
  return filtersWithPrefix(orgUnitFilters(formatMessage, groups, orgUnitTypes, withChildren), paramsPrefix);
};

exports.orgUnitFiltersWithPrefix = orgUnitFiltersWithPrefix;

var linksFiltersWithPrefix = function linksFiltersWithPrefix(paramsPrefix) {
  var algorithmRuns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var formatMessage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
    return null;
  };
  var profiles = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var algorithms = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var sources = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
  return filtersWithPrefix([_objectSpread(_objectSpread({}, search()), {}, {
    column: 1
  }), _objectSpread(_objectSpread({}, algoRun(algorithmRuns, formatMessage)), {}, {
    column: 1
  }), _objectSpread(_objectSpread({}, status(formatMessage)), {}, {
    column: 3
  }), _objectSpread(_objectSpread({}, validator(profiles)), {}, {
    column: 2
  }), _objectSpread(_objectSpread({}, algo(algorithms)), {}, {
    column: 2
  }), _objectSpread(_objectSpread({}, score(formatMessage)), {}, {
    column: 1
  }), _objectSpread(_objectSpread({}, source(sources || [], false, false, 'origin', formatMessage(_messages["default"].sourceorigin))), {}, {
    column: 3
  })], paramsPrefix);
};

exports.linksFiltersWithPrefix = linksFiltersWithPrefix;

var onlyChildrenParams = function onlyChildrenParams(paramsPrefix, params, parent) {
  if (!parent) return null;
  var onlyDirectChildren = params[(0, _tableUtils.getParamsKey)(paramsPrefix, 'onlyDirectChildren')];
  return onlyDirectChildren === 'true' || onlyDirectChildren === undefined ? {
    parent_id: parent.id
  } : {
    orgUnitParentId: parent.id
  };
};

exports.onlyChildrenParams = onlyChildrenParams;

var runsFilters = function runsFilters() {
  var formatMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
    return null;
  };
  var algorithms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var profiles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var sources = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var currentOrigin = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var currentDestination = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
  var filters = [_objectSpread(_objectSpread({}, algo(algorithms)), {}, {
    column: 1
  }), _objectSpread(_objectSpread({}, profile(profiles, false, 'launcher', formatMessage(_messages["default"].launcher))), {}, {
    column: 1
  }), _objectSpread(_objectSpread({}, source(sources || [], false, false, 'origin', formatMessage(_messages["default"].sourceorigin))), {}, {
    column: 2
  }), _objectSpread(_objectSpread({}, version(formatMessage, currentOrigin ? currentOrigin.versions : [], Boolean(!currentOrigin || currentOrigin && currentOrigin.versions.length === 0), false, 'originVersion', formatMessage(_messages["default"].sourceoriginversion))), {}, {
    column: 2
  }), _objectSpread(_objectSpread({}, source(sources || [], false, false, 'destination', formatMessage(_messages["default"].sourcedestination))), {}, {
    column: 3
  }), _objectSpread(_objectSpread({}, version(formatMessage, currentDestination ? currentDestination.versions : [], Boolean(!currentDestination || currentDestination && currentDestination.versions.length === 0), false, 'destinationVersion', formatMessage(_messages["default"].sourcedestinationversion))), {}, {
    column: 3
  })];
  return filters;
};

exports.runsFilters = runsFilters;

var linksFilters = function linksFilters() {
  var formatMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
    return null;
  };
  var algorithmRuns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var orgUnitTypes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var profiles = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var algorithms = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  var sources = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : [];
  var currentOrigin = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : null;
  var currentDestination = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
  var filters = [_objectSpread(_objectSpread({}, search()), {}, {
    column: 1
  }), _objectSpread(_objectSpread({}, algoRun(algorithmRuns, formatMessage)), {}, {
    column: 1
  }), _objectSpread(_objectSpread({}, orgUnitType(orgUnitTypes)), {}, {
    column: 1
  }), _objectSpread(_objectSpread({}, status(formatMessage)), {}, {
    column: 1
  }), _objectSpread(_objectSpread({}, validator(profiles)), {}, {
    column: 2
  }), _objectSpread(_objectSpread({}, algo(algorithms)), {}, {
    column: 2
  }), _objectSpread(_objectSpread({}, score()), {}, {
    column: 2
  }), _objectSpread(_objectSpread({}, source(sources || [], false, false, 'origin', formatMessage(_messages["default"].sourceorigin))), {}, {
    column: 3
  }), _objectSpread(_objectSpread({}, version(formatMessage, currentOrigin ? currentOrigin.versions : [], Boolean(!currentOrigin || currentOrigin && currentOrigin.versions.length === 0), false, 'originVersion', formatMessage(_messages["default"].sourceoriginversion))), {}, {
    column: 3
  }), _objectSpread(_objectSpread({}, source(sources || [], false, false, 'destination', formatMessage(_messages["default"].sourcedestination))), {}, {
    column: 3
  }), _objectSpread(_objectSpread({}, version(formatMessage, currentDestination ? currentDestination.versions : [], Boolean(!currentDestination || currentDestination && currentDestination.versions.length === 0), false, 'destinationVersion', formatMessage(_messages["default"].sourcedestinationversion))), {}, {
    column: 3
  })];
  return filters;
};

exports.linksFilters = linksFilters;

var formsFilters = function formsFilters() {
  var filters = [_objectSpread(_objectSpread({}, search()), {}, {
    column: 1
  })];
  return filters;
};

exports.formsFilters = formsFilters;