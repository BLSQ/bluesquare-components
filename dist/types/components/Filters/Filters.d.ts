import { FunctionComponent, ReactNode } from 'react';
import type { FilterField, FilterLabel, FilterSection, FilterValues } from './types';
type Props = {
    fields: FilterField[];
    sections?: FilterSection[];
    /** Applied values (controlled — e.g. mirrored in the url by the app). */
    values: FilterValues;
    /** Called on APPLY, on chip removal and on CLEAR ALL. */
    onApply: (values: FilterValues) => void;
    onRemoveFilter?: (key: string, values: FilterValues) => void;
    onClearAll?: (values: FilterValues) => void;
    maxVisibleChips?: number;
    /** Paper elevation of the active-filters bar. Default: 1. */
    elevation?: number;
    drawerTitle?: FilterLabel;
    drawerChildren?: ReactNode;
};
/**
 * Wires {@link ActiveFiltersBar} to {@link FiltersDrawer}.
 * `values` / `onApply` are the applied state; the drawer keeps a draft until APPLY.
 * Chip removal and CLEAR ALL call `onRemoveFilter` / `onClearAll` when set, otherwise `onApply`.
 */
export declare const FiltersPanel: FunctionComponent<Props>;
export {};
