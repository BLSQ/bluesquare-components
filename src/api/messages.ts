import { defineMessages } from 'react-intl';

export const MESSAGES = defineMessages({
    permissionError: {
        id: 'iaso.snackBar.permissionError',
        defaultMessage:
            "You don't have permission to perform this action: {detail}",
    },
    defaultMutationApiError: {
        id: 'iaso.snackBar.error',
        defaultMessage: 'An error occurred while saving',
    },
    defaultMutationApiSuccess: {
        id: 'iaso.snackBar.successful',
        defaultMessage: 'Saved successfully',
    },
    defaultQueryApiSuccess: {
        defaultMessage: 'An error occurred while fetching data',
        id: 'iaso.snackBar.fetch.error',
    },
});
