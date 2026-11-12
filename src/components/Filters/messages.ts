import { defineMessages } from 'react-intl';

export const MESSAGES = defineMessages({
    filters: { id: 'blsq.filters.title', defaultMessage: 'Filters' },
    activeFilters: {
        id: 'blsq.filters.activeFilters',
        defaultMessage: 'Active filters',
    },
    noActiveFilter: {
        id: 'blsq.filters.noActiveFilter',
        defaultMessage: 'No active filter',
    },
    clearAll: { id: 'blsq.filters.clearAll', defaultMessage: 'CLEAR ALL' },
    clear: { id: 'blsq.filters.clear', defaultMessage: 'CLEAR' },
    apply: { id: 'blsq.filters.apply', defaultMessage: 'APPLY' },
    close: { id: 'blsq.filters.close', defaultMessage: 'Close filters' },
    more: { id: 'blsq.filters.more', defaultMessage: '+{count} MORE' },
    showLess: { id: 'blsq.filters.showLess', defaultMessage: 'SHOW LESS' },
    removeFilter: {
        id: 'blsq.filters.removeFilter',
        defaultMessage: 'Remove filter {label}',
    },
    from: { id: 'blsq.filters.from', defaultMessage: '{label} from' },
    until: { id: 'blsq.filters.until', defaultMessage: '{label} until' },
    addFilters: {
        id: 'blsq.filters.addFilters',
        defaultMessage: 'Add filters',
    },
});
