import type { ReactNode } from 'react';
import type { IntlMessage } from '../../types/types';
/**
 * Generic filters — types.
 *
 * The field list is the single source of truth: the drawer renders it,
 * the {@link ActiveFiltersBar} summarises it. No field, no chip, no input.
 */
export type FilterLabel = IntlMessage | string;
export type FilterValues = Record<string, any>;
/** Mirrors IASO `InputComponentType`, plus `date`, `daterange` and `custom`. */
export type FilterFieldType = 'text' | 'email' | 'search' | 'textarea' | 'number' | 'select' | 'checkbox' | 'radio' | 'date' | 'daterange' | 'custom';
export type FilterOption = {
    label: string;
    value: string | number;
    disabled?: boolean;
    color?: string;
    [key: string]: any;
};
export type FilterFieldRenderContext = {
    field: FilterField;
    value: any;
    values: FilterValues;
    onChange: (value: any) => void;
    inputId?: string;
};
export type FilterField = {
    /** Unique key in `values`. Duplicates are dropped (first wins). */
    key: string;
    label: FilterLabel;
    type?: FilterFieldType;
    /** Group heading in the drawer, e.g. "Period" / "Scope". */
    section?: string;
    options?: FilterOption[];
    multi?: boolean;
    disabled?: boolean;
    required?: boolean;
    clearable?: boolean;
    loading?: boolean;
    placeholder?: string;
    helperText?: string;
    errors?: string[];
    min?: number;
    max?: number;
    /** `select`: keep the whole option object as value. */
    returnFullObject?: boolean;
    renderTags?: (...args: any[]) => ReactNode;
    getOptionLabel?: (option: FilterOption) => string;
    /** `daterange` bounds labels (default: `${label} from` / `${label} until`). */
    fromLabel?: FilterLabel;
    toLabel?: FilterLabel;
    minDate?: any;
    maxDate?: any;
    /** Value used when the filter is cleared. Default: `undefined`. */
    emptyValue?: any;
    /** Hide the field (and its chip) without removing it from the config. */
    visible?: boolean | ((values: FilterValues) => boolean);
    /** Override what "has a value" means for chips / badge count. */
    isActive?: (value: any, field: FilterField) => boolean;
    /** Override the chip text. Return several strings for one chip per item. */
    formatValue?: (value: any, field: FilterField) => string | string[] | undefined;
    /** Escape hatch for app-specific inputs (org-unit tree, async select…). */
    renderCustom?: (context: FilterFieldRenderContext) => ReactNode;
    dataTestId?: string;
};
export type FilterSection = {
    key: string;
    label?: FilterLabel;
};
export type ActiveFilter = {
    key: string;
    label: string;
    value: any;
    displayValue: string;
};
export type FilterFieldGroup = {
    key: string;
    label?: FilterLabel;
    fields: FilterField[];
};
