import { defineMessages } from 'react-intl';

const MESSAGES = defineMessages({
    noOptions: {
        id: 'blsq.button.label.noOptions',
        defaultMessage: 'No results found',
    },
    valueNotFound: {
        id: 'blsq.button.label.valueNotFound',
        defaultMessage: 'Value not found in possible options',
    },
    oneValueNotFound: {
        id: 'blsq.button.label.oneValueNotFound',
        defaultMessage: 'Value "{value}" not found in possible options',
    },
    loadingOptions: {
        id: 'blsq.select.label.loadingText',
        defaultMessage: 'Loading...',
    },
});

export { MESSAGES };
