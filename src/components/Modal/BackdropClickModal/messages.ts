import { defineMessages } from 'react-intl';

// TODO when moving to blsq-comp, change translation keys and add to custom translations
const MESSAGES = defineMessages({
    doYouWantToClose: {
        id: 'blsq.dialog.doYouWantToClose',
        defaultMessage: 'Do you want to close?',
    },
    unsavedDataWillBeLost: {
        id: 'blsq.dialog.unsavedDataWillBeLost',
        defaultMessage: 'Unsaved data will be lost',
    },
    proceed: {
        id: 'blsq.label.proceed',
        defaultMessage: 'proceed',
    },
    cancel: {
        defaultMessage: 'Cancel',
        id: 'blsq.label.cancel',
    },
});

export default MESSAGES;
