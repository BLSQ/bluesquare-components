"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuItems = void 0;

var _react = _interopRequireDefault(require("react"));

var _ListAltTwoTone = _interopRequireDefault(require("@material-ui/icons/ListAltTwoTone"));

var _Link = _interopRequireDefault(require("@material-ui/icons/Link"));

var _FormatListBulleted = _interopRequireDefault(require("@material-ui/icons/FormatListBulleted"));

var _CompareArrows = _interopRequireDefault(require("@material-ui/icons/CompareArrows"));

var _SupervisorAccount = _interopRequireDefault(require("@material-ui/icons/SupervisorAccount"));

var _PhonelinkSetup = _interopRequireDefault(require("@material-ui/icons/PhonelinkSetup"));

var _DnsRounded = _interopRequireDefault(require("@material-ui/icons/DnsRounded"));

var _DoneAll = _interopRequireDefault(require("@material-ui/icons/DoneAll"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _Settings = _interopRequireDefault(require("@material-ui/icons/Settings"));

var _GroupWork = _interopRequireDefault(require("@material-ui/icons/GroupWork"));

var _Category = _interopRequireDefault(require("@material-ui/icons/Category"));

var _AssignmentRounded = _interopRequireDefault(require("@material-ui/icons/AssignmentRounded"));

var _ImportantDevicesRounded = _interopRequireDefault(require("@material-ui/icons/ImportantDevicesRounded"));

var _OrgUnitSvgComponent = _interopRequireDefault(require("../../svg/OrgUnitSvgComponent"));

var _DHIS2SvgComponent = _interopRequireDefault(require("../../svg/DHIS2SvgComponent"));

var paths = _interopRequireWildcard(require("./routes"));

var _messages = _interopRequireDefault(require("./messages"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// !! remove permission property if the menu has a subMenu !!
var menuItems = [{
  label: _messages["default"].formsTitle,
  key: 'forms',
  icon: function icon(props) {
    return /*#__PURE__*/_react["default"].createElement(_ListAltTwoTone["default"], props);
  },
  subMenu: [{
    label: _messages["default"].list,
    permission: paths.formsPath.permission,
    key: 'list',
    icon: function icon(props) {
      return /*#__PURE__*/_react["default"].createElement(_FormatListBulleted["default"], props);
    }
  }, {
    label: _messages["default"].dhis2Mappings,
    permission: paths.mappingsPath.permission,
    key: 'mappings',
    icon: function icon(props) {
      return /*#__PURE__*/_react["default"].createElement(_DHIS2SvgComponent["default"], props);
    }
  }, {
    label: _messages["default"].completeness,
    permission: paths.completenessPath.permission,
    key: 'completeness',
    icon: function icon(props) {
      return /*#__PURE__*/_react["default"].createElement(_DoneAll["default"], props);
    }
  }, {
    label: _messages["default"].archived,
    permission: paths.archivedPath.permission,
    key: 'archived',
    icon: function icon(props) {
      return /*#__PURE__*/_react["default"].createElement(_Delete["default"], props);
    }
  }]
}, {
  label: _messages["default"].orgUnitsTitle,
  key: 'orgunits',
  icon: function icon(props) {
    return /*#__PURE__*/_react["default"].createElement(_OrgUnitSvgComponent["default"], props);
  },
  subMenu: [{
    label: _messages["default"].list,
    permission: paths.orgUnitsPath.permission,
    key: 'list',
    icon: function icon(props) {
      return /*#__PURE__*/_react["default"].createElement(_FormatListBulleted["default"], props);
    }
  }, {
    label: _messages["default"].groups,
    permission: paths.groupsPath.permission,
    key: 'groups',
    icon: function icon(props) {
      return /*#__PURE__*/_react["default"].createElement(_GroupWork["default"], props);
    }
  }, {
    label: _messages["default"].orgUnitType,
    permission: paths.orgUnitTypesPath.permission,
    key: 'types',
    icon: function icon(props) {
      return /*#__PURE__*/_react["default"].createElement(_Category["default"], props);
    }
  }, {
    label: _messages["default"].dataSources,
    key: 'sources',
    icon: function icon(props) {
      return /*#__PURE__*/_react["default"].createElement(_DnsRounded["default"], props);
    },
    subMenu: [{
      label: _messages["default"].list,
      permission: paths.dataSourcesPath.permission,
      key: 'list',
      icon: function icon(props) {
        return /*#__PURE__*/_react["default"].createElement(_FormatListBulleted["default"], props);
      }
    }, {
      label: _messages["default"].matching,
      key: 'links',
      icon: function icon(props) {
        return /*#__PURE__*/_react["default"].createElement(_Link["default"], props);
      },
      subMenu: [{
        label: _messages["default"].list,
        permission: paths.linksPath.permission,
        key: 'list',
        icon: function icon(props) {
          return /*#__PURE__*/_react["default"].createElement(_FormatListBulleted["default"], props);
        }
      }, {
        label: _messages["default"].algorithmsRuns,
        permission: paths.algosPath.permission,
        key: 'runs',
        icon: function icon(props) {
          return /*#__PURE__*/_react["default"].createElement(_CompareArrows["default"], props);
        }
      }]
    }]
  }]
}, {
  label: _messages["default"].config,
  key: 'settings',
  icon: function icon(props) {
    return /*#__PURE__*/_react["default"].createElement(_Settings["default"], props);
  },
  subMenu: [{
    label: _messages["default"].tasks,
    key: 'tasks',
    permission: paths.tasksPath.permission,
    icon: function icon(props) {
      return /*#__PURE__*/_react["default"].createElement(_AssignmentRounded["default"], props);
    }
  }, {
    label: _messages["default"].monitoring,
    key: 'devices',
    permission: paths.devicesPath.permission,
    icon: function icon(props) {
      return /*#__PURE__*/_react["default"].createElement(_ImportantDevicesRounded["default"], props);
    }
  }, {
    label: _messages["default"].projects,
    key: 'projects',
    permission: paths.projectsPath.permission,
    icon: function icon(props) {
      return /*#__PURE__*/_react["default"].createElement(_PhonelinkSetup["default"], props);
    }
  }, {
    label: _messages["default"].users,
    key: 'users',
    permission: paths.usersPath.permission,
    icon: function icon(props) {
      return /*#__PURE__*/_react["default"].createElement(_SupervisorAccount["default"], props);
    }
  }]
}];
exports.menuItems = menuItems;