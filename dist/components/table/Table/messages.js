"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MESSAGES = exports.customTableTranslations = void 0;

var _reactIntl = require("react-intl");

var MESSAGES = (0, _reactIntl.defineMessages)({
  previousText: {
    defaultMessage: 'Previous',
    id: 'blsq.table.previous'
  },
  nextText: {
    defaultMessage: 'Next',
    id: 'blsq.table.next'
  },
  loadingText: {
    defaultMessage: 'Loading...',
    id: 'blsq.table.loading'
  },
  noDataText: {
    defaultMessage: 'No result',
    id: 'blsq.table.noResult'
  },
  pageText: {
    defaultMessage: 'Page',
    id: 'blsq.table.page'
  },
  ofText: {
    defaultMessage: 'of',
    id: 'blsq.table.of'
  },
  rowsText: {
    defaultMessage: 'results',
    id: 'blsq.table.results'
  },
  selectionAction: {
    defaultMessage: 'With',
    id: 'blsq.table.labels.selectionAction'
  },
  results: {
    id: 'blsq.table.label.resultsLower',
    defaultMessage: 'result(s)'
  },
  selection: {
    id: 'blsq.table.label.selection',
    defaultMessage: 'Selection'
  },
  selected: {
    id: 'blsq.table.label.selected',
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