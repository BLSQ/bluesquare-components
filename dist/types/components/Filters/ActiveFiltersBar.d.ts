import { FunctionComponent } from 'react';
import type { SxProps } from '@mui/material';
import type { FilterField, FilterValues } from './types';
type Props = {
    fields: FilterField[];
    values: FilterValues;
    /** Remove one applied filter. Omit to render read-only chips. */
    onRemoveFilter?: (key: string) => void;
    onClearAll?: () => void;
    /** Clicking the filter icon opens the drawer (wired by `Filters`). */
    onOpenFilters?: () => void;
    maxVisibleChips?: number;
    /** Paper elevation of the bar. Default: 1. */
    elevation?: number;
    sx?: SxProps;
};
/**
 * Short version of the filters for the main page (screenshots 1/2/4):
 * badge count, `Label: value` chips, `+N MORE`, CLEAR ALL.
 */
export declare const ActiveFiltersBar: FunctionComponent<Props>;
export {};
