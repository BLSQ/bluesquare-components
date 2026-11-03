import type { IntlMessage } from '../../types/types';
import type { FilterLabel } from './types';

/** Resolve a `FilterLabel` (IntlMessage | string) to display text. */
export const makeResolveLabel =
    (formatMessage: (message: IntlMessage) => string) =>
    (label: FilterLabel | undefined, fallback = ''): string => {
        if (!label) return fallback;
        if (typeof label === 'string') return label;
        try {
            return formatMessage(label) || label.defaultMessage || label.id;
        } catch {
            return label.defaultMessage || label.id;
        }
    };
