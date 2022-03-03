"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = exports.success = exports.reloadPageMessageKey = exports.reloadPage = exports.formWarningMessageKey = exports.formSuccessFullMessageKey = exports.formErrorMessageKey = exports.error = exports.buttonReloadMessageKey = void 0;
var formSuccessFullMessageKey = 'successful';
exports.formSuccessFullMessageKey = formSuccessFullMessageKey;
var formErrorMessageKey = 'error';
exports.formErrorMessageKey = formErrorMessageKey;
var formWarningMessageKey = 'warning';
exports.formWarningMessageKey = formWarningMessageKey;
var buttonReloadMessageKey = 'reload';
exports.buttonReloadMessageKey = buttonReloadMessageKey;
var reloadPageMessageKey = 'reloadPage';
exports.reloadPageMessageKey = reloadPageMessageKey;

var success = function success() {
  var messageKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : formSuccessFullMessageKey;
  var messageObject = arguments.length > 1 ? arguments[1] : undefined;
  return {
    messageKey: messageKey,
    messageObject: messageObject,
    options: {
      variant: 'success',
      persist: false
    }
  };
};

exports.success = success;

var error = function error() {
  var messageKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : formErrorMessageKey;
  var messageObject = arguments.length > 1 ? arguments[1] : undefined;
  var errorLog = arguments.length > 2 ? arguments[2] : undefined;
  return {
    messageKey: messageKey,
    messageObject: messageObject,
    options: {
      variant: 'error',
      persist: Boolean(errorLog)
    },
    errorLog: errorLog,
    id: "".concat(messageKey, "-").concat(Date.now())
  };
};

exports.error = error;

var warning = function warning() {
  var messageKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : formWarningMessageKey;
  var messageObject = arguments.length > 1 ? arguments[1] : undefined;
  var id = arguments.length > 2 ? arguments[2] : undefined;
  return {
    messageKey: messageKey,
    messageObject: messageObject,
    options: {
      maxsnack: 1,
      // always display snackBar
      variant: 'warning',
      persist: true
    },
    id: id || messageKey
  };
};

exports.warning = warning;

var reloadPage = function reloadPage() {
  var buttonMessageKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : buttonReloadMessageKey;
  var messageKey = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : reloadPageMessageKey;
  return {
    messageKey: messageKey,
    type: 'reload',
    options: {
      maxsnack: 0,
      // always display snackBar
      variant: 'warning',
      persist: true
    },
    buttonMessageKey: buttonMessageKey,
    buttonAction: function buttonAction() {
      return window.location.reload(true);
    }
  };
};

exports.reloadPage = reloadPage;