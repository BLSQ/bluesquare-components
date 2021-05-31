"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MESSAGES = exports.customTableTranslations = void 0;

var _reactIntl = require("react-intl");

var MESSAGES = (0, _reactIntl.defineMessages)({
  previousText: {
    defaultMessage: 'Previous',
    id: 'table.previous'
  },
  nextText: {
    defaultMessage: 'Next',
    id: 'table.next'
  },
  loadingText: {
    defaultMessage: 'Loading...',
    id: 'table.loading'
  },
  noDataText: {
    defaultMessage: 'No result',
    id: 'table.noResult'
  },
  pageText: {
    defaultMessage: 'Page',
    id: 'table.page'
  },
  ofText: {
    defaultMessage: 'of',
    id: 'table.of'
  },
  rowsText: {
    defaultMessage: 'results',
    id: 'table.results'
  },
  selectionAction: {
    defaultMessage: 'With',
    id: 'table.labels.selectionAction'
  },
  results: {
    id: 'iaso.label.resultsLower',
    defaultMessage: 'result(s)'
  },
  selection: {
    id: 'iaso.label.selection',
    defaultMessage: 'Selection'
  },
  selected: {
    id: 'iaso.label.selected',
    defaultMessage: 'selected'
  }
}); // TODO move thi sto a place that makes more sense

exports.MESSAGES = MESSAGES;

var customTableTranslations = function customTableTranslations(formatMessage) {
  return {
    previousText: formatMessage(MESSAGES.previousText),
    nextText: formatMessage(MESSAGES.nextText),
    loadingText: formatMessage(MESSAGES.loadingText),
    noDataText: formatMessage(MESSAGES.noDataText),
    pageText: formatMessage(MESSAGES.pageText),
    ofText: formatMessage(MESSAGES.ofText),
    rowsText: formatMessage(MESSAGES.rowsText)
  };
};

exports.customTableTranslations = customTableTranslations;