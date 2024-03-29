import { defineMessages } from 'react-intl';

const MESSAGES = defineMessages({
    previousText: {
        defaultMessage: 'Previous',
        id: 'blsq.table.previous',
    },
    nextText: {
        defaultMessage: 'Next',
        id: 'blsq.table.next',
    },
    lastText: {
        defaultMessage: 'Last page',
        id: 'blsq.table.last',
    },
    firstText: {
        defaultMessage: 'First page',
        id: 'blsq.table.first',
    },
    noDataText: {
        defaultMessage: 'No result',
        id: 'blsq.table.noResult',
    },
    pageText: {
        defaultMessage: 'Page',
        id: 'blsq.table.page',
    },
    ofText: {
        defaultMessage: 'of',
        id: 'blsq.table.of',
    },
    rowsText: {
        defaultMessage: 'results',
        id: 'blsq.table.results',
    },
    selectionAction: {
        defaultMessage: 'With',
        id: 'blsq.table.labels.selectionAction',
    },
    results: {
        id: 'blsq.table.label.resultsLower',
        defaultMessage: 'result(s)',
    },
    selection: {
        id: 'blsq.table.label.selection',
        defaultMessage: 'Selection',
    },
    selected: {
        id: 'blsq.table.label.selected',
        defaultMessage: 'selected',
    },
    loading: {
        id: 'blsq.table.loading',
        defaultMessage: 'Loading...',
    },
    details: {
        defaultMessage: 'Details',
        id: 'blsq.table.details',
    },
    sortAsc: {
        defaultMessage: 'Sort ascending',
        id: 'blsq.table.sortAsc',
    },
    sortDesc: {
        defaultMessage: 'Sort descending',
        id: 'blsq.table.sortDesc',
    },
    unSort: {
        defaultMessage: 'Remove sort',
        id: 'blsq.table.unSort',
    },
    renderError: {
        id: 'blsq.table.label.renderError',
        defaultMessage: 'Error rendering value',
    },
});

export { MESSAGES };
