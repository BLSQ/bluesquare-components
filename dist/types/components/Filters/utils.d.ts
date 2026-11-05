import type { ActiveFilter, FilterField, FilterFieldGroup, FilterSection, FilterValues } from './types.ts';
/**
 * Pure filter logic — no React, no MUI, no intl.
 * Labels are resolved by the caller (`resolveLabel`), so this file is
 * directly unit-testable with `node --test` (see utils.spec.mjs).
 */
export declare const isEmptyFilterValue: (value: any) => boolean;
export declare const getDateRangeBounds: (value: any) => {
    from: any;
    to: any;
};
/** Multi-selects in IASO are either arrays or comma-joined strings ("1,2"). */
export declare const toValueArray: (value: any) => any[];
export declare const isFilterFieldActive: (field: FilterField, value: any) => boolean;
export declare const formatFilterValue: (field: FilterField, value: any) => string;
export declare const isFieldVisible: (field: FilterField, values: FilterValues) => boolean;
/** Defensive normalisation: drops nameless fields and duplicate keys. */
export declare const sanitizeFilterFields: (fields: FilterField[] | undefined | null) => FilterField[];
export declare const validateFilterFields: (fields: FilterField[] | undefined | null) => string[];
export declare const getActiveFilters: (fields: FilterField[] | undefined | null, values: FilterValues | undefined | null, resolveLabel?: (field: FilterField) => string) => ActiveFilter[];
export declare const countActiveFilters: (fields: FilterField[] | undefined | null, values: FilterValues | undefined | null) => number;
export declare const getClearedFilterValues: (fields: FilterField[] | undefined | null, values?: FilterValues) => FilterValues;
export declare const removeFilterFromValues: (values: FilterValues, fieldOrKey: FilterField | string, fields?: FilterField[] | undefined | null) => FilterValues;
export declare const splitActiveFilters: <T>(active: T[] | undefined | null, maxVisible?: number) => {
    visible: T[];
    hidden: T[];
    hiddenCount: number;
};
export declare const areFilterValuesEqual: (a: FilterValues | undefined | null, b: FilterValues | undefined | null) => boolean;
export declare const groupFilterFieldsBySection: (fields: FilterField[] | undefined | null, values?: FilterValues, sections?: FilterSection[]) => FilterFieldGroup[];
