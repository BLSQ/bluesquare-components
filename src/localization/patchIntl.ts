import { IntlShape } from 'react-intl';
import { IntlMessage, PatchIntlShape } from '../types/types';

export const patchIntl = (intl: IntlShape): PatchIntlShape => ({
    ...intl,
    formatMessage: (message: IntlMessage | undefined, value: any): string => {
        if (message && message.id) {
            return intl.formatMessage(message, value);
        }
        console.warn(
            'Warning: Message object is not defined properly!',
            message,
        );

        return '';
    },
    separators: {
        decimal: intl.formatNumber(1.1).replace(/\d/g, '')[0] || '.',
        thousand: intl.formatNumber(1000).replace(/\d/g, '')[0] || ',',
    },
    formatNullishMessage: (
        key: string,
        messages: Record<string, IntlMessage>,
        value: any,
    ): string => {
        if (key in messages) return intl.formatMessage(messages[key], value);
        console.warn(`No message found for key ${key}`);

        return key;
    },
});
