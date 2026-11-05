import type { FilterLabel } from './types';
/** Resolve a `FilterLabel` (IntlMessage | string) to display text. */
export declare const useResolveLabel: () => (label: FilterLabel | undefined, fallback?: string) => string;
