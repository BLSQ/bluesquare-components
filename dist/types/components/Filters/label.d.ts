import type { IntlMessage } from '../../types/types';
import type { FilterLabel } from './types';
/** Resolve a `FilterLabel` (IntlMessage | string) to display text. */
export declare const makeResolveLabel: (formatMessage: (message: IntlMessage) => string) => (label: FilterLabel | undefined, fallback?: string) => string;
