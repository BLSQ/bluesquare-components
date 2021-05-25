"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Message = function Message(id, defaultMessage) {
  _classCallCheck(this, Message);

  this.id = id;
  this.defaultMessage = defaultMessage;
  return this;
};

exports.Message = Message;