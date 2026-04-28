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
    separators: {
        decimal: intl.formatNumber(1.1).replace(/\d/g, '')[0] || '.',
        thousand: intl.formatNumber(1000).replace(/\d/g, '')[0] || ',',
    },
});

export { patchIntl };
