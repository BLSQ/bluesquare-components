import React, { FunctionComponent, ReactNode } from 'react';
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
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
};
/**
 * Composition of {@link ActiveFiltersBar} + {@link FiltersDrawer}:
 * the drop-in replacement for hand-rolled filter grids.
 * For full control, use the two atoms separately.
 */
export declare const FiltersPanel: FunctionComponent<Props>;
/** @deprecated Use {@link FiltersPanel}. */
export declare const Filters: React.FunctionComponent<Props>;
export {};
