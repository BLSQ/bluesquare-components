import { useCallback } from 'react';
import { useSafeIntl } from '../../localization/useSafeIntl';
import type { FilterLabel } from './types';

/** Resolve a `FilterLabel` (IntlMessage | string) to display text. */
export const useResolveLabel = () => {
    const { formatMessage } = useSafeIntl();
    return useCallback(
        (label: FilterLabel | undefined, fallback = ''): string => {
            if (!label) return fallback;
            if (typeof label === 'string') return label;
            return formatMessage(label) || label.defaultMessage || label.id;
        },
        [formatMessage],
    );
};
