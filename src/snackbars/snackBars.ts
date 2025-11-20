export const formSuccessFullMessageKey = 'successful';
export const formErrorMessageKey = 'error';
export const formWarningMessageKey = 'warning';
export const buttonReloadMessageKey = 'reload';
export const reloadPageMessageKey = 'reloadPage';

export const succesfullSnackBar = (messageKey, messageObject) => ({
    messageKey: messageKey ?? formSuccessFullMessageKey,
    messageObject,
    options: {
        variant: 'success',
        persist: false,
    },
});

export const errorSnackBar = (messageKey, messageObject, errorLog) => ({
    messageKey: messageKey ?? formErrorMessageKey,
    messageObject,
    options: {
        variant: 'error',
        persist: Boolean(errorLog),
    },
    errorLog,
    id: `${messageKey}-${Date.now()}`,
});

export const warningSnackBar = (messageKey, messageObject, id) => ({
    messageKey: messageKey ?? formWarningMessageKey,
    messageObject,
    options: {
        maxsnack: 1, // always display snackBar
        variant: 'warning',
        persist: true,
    },
    id: id || messageKey,
});

export const reloadPageSnackBar = (
    buttonMessageKey = buttonReloadMessageKey,
    messageKey = reloadPageMessageKey,
) => ({
    messageKey,
    type: 'reload',
    options: {
        maxsnack: 0, // always display snackBar
        variant: 'warning',
        persist: true,
    },
    buttonMessageKey,
    //@ts-ignore
    buttonAction: () => window.location.reload(true),
});
