import { IntlShape } from 'react-intl';
import { IntlMessage, PatchIntlShape } from '../types/types';

export const patchIntl = (intl: IntlShape): PatchIntlShape => ({
    ...intl,
    formatMessage: (message: IntlMessage, value: any): string | undefined => {
        if (message && message.id) {
            return intl.formatMessage(message, value);
        }
        console.warn(
            'Warning: Message object is not defined properly!',
            message,
        );

        return undefined;
    },
    separators: {
        decimal: intl.formatNumber(1.1).replace(/\d/g, '')[0] || '.',
        thousand: intl.formatNumber(1000).replace(/\d/g, '')[0] || ',',
    },
});
