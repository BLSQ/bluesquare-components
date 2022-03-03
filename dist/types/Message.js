"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Message = function Message(id, defaultMessage) {
  (0, _classCallCheck2["default"])(this, Message);
  this.id = id;
  this.defaultMessage = defaultMessage;
};

exports.Message = Message;