const patchIntl = intl => ({
    ...intl,
    formatMessage: (message, value) => {
        if (message && message.id) {
            return intl.formatMessage(message, value);
        }
        console.warn(
            'Warning: Message object is not defined properly!',
            message,
        );

        return null;
    },
});

export { patchIntl };
