import { IntlShape } from 'react-intl';
import { PatchIntlShape } from '../types/types';

export const patchIntl = (intl: IntlShape): PatchIntlShape => ({
    ...intl,
    formatMessage: (message: { id: any }, value: any): string | null => {
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
