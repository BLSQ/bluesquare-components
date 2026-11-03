import type {
    ActiveFilter,
    FilterField,
    FilterFieldGroup,
    FilterSection,
    FilterValues,
} from './types.ts';

/**
 * Pure filter logic — no React, no MUI, no intl.
 * Labels are resolved by the caller (`resolveLabel`), so this file is
 * directly unit-testable with `node --test` (see utils.spec.mjs).
 */

export const isEmptyFilterValue = (value: any): boolean => {
    if (value === undefined || value === null) return true;
    if (typeof value === 'string') return value.trim() === '';
    if (Array.isArray(value)) return value.length === 0;
    if (
        typeof value === 'object' &&
        !(value instanceof Date) &&
        typeof value.format !== 'function'
    )
        return Object.values(value).every(isEmptyFilterValue);
    return false;
};

const isDateRangeLike = (value: any): boolean =>
    Boolean(
        value &&
        typeof value === 'object' &&
        !Array.isArray(value) &&
        ('from' in value ||
            'to' in value ||
            'start' in value ||
            'end' in value ||
            'dateFrom' in value ||
            'dateTo' in value),
    );

export const getDateRangeBounds = (value: any): { from: any; to: any } => ({
    from: value?.from ?? value?.start ?? value?.dateFrom,
    to: value?.to ?? value?.end ?? value?.dateTo,
});

/** Multi-selects in IASO are either arrays or comma-joined strings ("1,2"). */
export const toValueArray = (value: any): any[] => {
    if (Array.isArray(value)) return value;
    if (typeof value === 'string')
        return value === '' ? [] : value.split(',').filter(v => v !== '');
    if (value === undefined || value === null) return [];
    return [value];
};

export const isFilterFieldActive = (
    field: FilterField,
    value: any,
): boolean => {
    if (!field || !field.key) return false;
    if (field.isActive) {
        try {
            return Boolean(field.isActive(value, field));
        } catch {
            return false;
        }
    }
    if (field.type === 'checkbox') return value === true;
    if (field.type === 'daterange' || isDateRangeLike(value)) {
        if (isDateRangeLike(value)) {
            const { from, to } = getDateRangeBounds(value);
            return !isEmptyFilterValue(from) || !isEmptyFilterValue(to);
        }
    }
    // 0 and false (non-checkbox) are real values, not "empty".
    if (value === false) return true;
    return !isEmptyFilterValue(value);
};

const sameValue = (a: any, b: any): boolean =>
    a === b || String(a) === String(b);

const optionLabel = (field: FilterField, value: any): string => {
    const options = Array.isArray(field.options) ? field.options : [];
    const match = options.find(
        o => o && sameValue(o.value, value?.value ?? value),
    );
    if (match) {
        return field.getOptionLabel
            ? field.getOptionLabel(match)
            : (match.label ?? String(match.value));
    }
    if (value && typeof value === 'object' && value.label)
        return String(value.label);
    return value === undefined || value === null ? '' : String(value);
};

const formatSingleValue = (field: FilterField, value: any): string => {
    if (
        field.type === 'select' ||
        field.type === 'radio' ||
        (Array.isArray(field.options) && field.options.length > 0)
    ) {
        return optionLabel(field, value);
    }
    if (field.type === 'checkbox') return 'Yes';
    if (field.type === 'daterange' || isDateRangeLike(value)) {
        const { from, to } = getDateRangeBounds(value ?? {});
        const parts = [from, to]
            .filter(v => !isEmptyFilterValue(v))
            .map(v => formatSingleValue({ ...field, type: 'date' }, v));
        return parts.join(' – ');
    }
    if (value && typeof value === 'object') {
        if (typeof value.format === 'function') {
            try {
                return value.format('DD/MM/YYYY');
            } catch {
                /* fall through */
            }
        }
        if (value instanceof Date) return value.toISOString().slice(0, 10);
        if (value.label) return String(value.label);
        return '';
    }
    return value === undefined || value === null ? '' : String(value);
};

export const formatFilterValue = (field: FilterField, value: any): string => {
    if (field.formatValue) {
        try {
            const formatted = field.formatValue(value, field);
            if (Array.isArray(formatted))
                return formatted.filter(Boolean).join(', ');
            if (formatted) return formatted;
        } catch {
            /* fall through to default formatting */
        }
    }
    if (field.multi || Array.isArray(value)) {
        return toValueArray(value)
            .map(v => formatSingleValue(field, v))
            .filter(Boolean)
            .join(', ');
    }
    return formatSingleValue(field, value);
};

export const isFieldVisible = (
    field: FilterField,
    values: FilterValues,
): boolean => {
    if (field.visible === undefined) return true;
    if (typeof field.visible === 'function') {
        try {
            return Boolean(field.visible(values ?? {}));
        } catch {
            return true;
        }
    }
    return Boolean(field.visible);
};

/** Defensive normalisation: drops nameless fields and duplicate keys. */
export const sanitizeFilterFields = (
    fields: FilterField[] | undefined | null,
): FilterField[] => {
    if (!Array.isArray(fields)) return [];
    const seen = new Set<string>();
    return fields.filter(field => {
        if (!field || typeof field.key !== 'string' || field.key === '')
            return false;
        if (seen.has(field.key)) return false;
        seen.add(field.key);
        return true;
    });
};

export const validateFilterFields = (
    fields: FilterField[] | undefined | null,
): string[] => {
    if (!Array.isArray(fields)) return ['fields is not an array'];
    const issues: string[] = [];
    const seen = new Set<string>();
    fields.forEach((field, index) => {
        if (!field?.key) issues.push(`field at index ${index} has no key`);
        else if (seen.has(field.key))
            issues.push(`duplicate filter key "${field.key}"`);
        else seen.add(field.key);
        if (field && !field.label && field.type !== 'custom')
            issues.push(`filter "${field.key ?? index}" has no label`);
        if (
            field &&
            (field.type === 'select' || field.type === 'radio') &&
            !field.renderCustom &&
            !Array.isArray(field.options)
        )
            issues.push(
                `filter "${field.key}" is a ${field.type} without options`,
            );
    });
    return issues;
};

export const getActiveFilters = (
    fields: FilterField[] | undefined | null,
    values: FilterValues | undefined | null,
    resolveLabel: (field: FilterField) => string = field =>
        typeof field.label === 'string' ? field.label : field.key,
): ActiveFilter[] => {
    const safeValues = values ?? {};
    return sanitizeFilterFields(fields)
        .filter(field => isFieldVisible(field, safeValues))
        .filter(field => isFilterFieldActive(field, safeValues[field.key]))
        .map(field => ({
            key: field.key,
            label: resolveLabel(field),
            value: safeValues[field.key],
            displayValue: formatFilterValue(field, safeValues[field.key]),
        }));
};

export const countActiveFilters = (
    fields: FilterField[] | undefined | null,
    values: FilterValues | undefined | null,
): number => getActiveFilters(fields, values).length;

export const getClearedFilterValues = (
    fields: FilterField[] | undefined | null,
    values: FilterValues = {},
): FilterValues => {
    const cleared: FilterValues = { ...(values ?? {}) };
    sanitizeFilterFields(fields).forEach(field => {
        cleared[field.key] = field.emptyValue;
    });
    return cleared;
};

export const removeFilterFromValues = (
    values: FilterValues,
    fieldOrKey: FilterField | string,
    fields: FilterField[] | undefined | null = [],
): FilterValues => {
    const key = typeof fieldOrKey === 'string' ? fieldOrKey : fieldOrKey?.key;
    if (!key) return { ...(values ?? {}) };
    const field = sanitizeFilterFields(fields).find(f => f.key === key);
    return {
        ...(values ?? {}),
        [key]: field ? field.emptyValue : undefined,
    };
};

export const splitActiveFilters = <T>(
    active: T[] | undefined | null,
    maxVisible = 3,
): { visible: T[]; hidden: T[]; hiddenCount: number } => {
    const list = Array.isArray(active) ? active : [];
    const limit =
        Number.isFinite(maxVisible) && maxVisible > 0
            ? Math.floor(maxVisible)
            : 3;
    if (list.length <= limit)
        return { visible: list, hidden: [], hiddenCount: 0 };
    return {
        visible: list.slice(0, limit),
        hidden: list.slice(limit),
        hiddenCount: list.length - limit,
    };
};

const stableValue = (value: any): any => {
    if (Array.isArray(value)) return value.map(stableValue);
    if (value && typeof value === 'object' && !(value instanceof Date)) {
        return Object.keys(value)
            .sort()
            .reduce(
                (acc: FilterValues, k) => ({
                    ...acc,
                    [k]: stableValue(value[k]),
                }),
                {},
            );
    }
    return value;
};

export const areFilterValuesEqual = (
    a: FilterValues | undefined | null,
    b: FilterValues | undefined | null,
): boolean =>
    JSON.stringify(stableValue(a ?? {})) ===
    JSON.stringify(stableValue(b ?? {}));

export const groupFilterFieldsBySection = (
    fields: FilterField[] | undefined | null,
    values: FilterValues = {},
    sections: FilterSection[] = [],
): FilterFieldGroup[] => {
    const visible = sanitizeFilterFields(fields).filter(f =>
        isFieldVisible(f, values ?? {}),
    );
    const groups: FilterFieldGroup[] = [];
    const byKey = new Map<string, FilterFieldGroup>();
    const push = (
        key: string,
        label: FilterField['label'] | undefined,
        field: FilterField,
    ) => {
        if (!byKey.has(key)) {
            const group: FilterFieldGroup = { key, label, fields: [] };
            byKey.set(key, group);
            groups.push(group);
        }
        byKey.get(key)?.fields.push(field);
    };
    visible.forEach(field => {
        const section = field.section;
        if (!section) push('', undefined, field);
        else {
            const declared = (sections ?? []).find(s => s.key === section);
            push(section, declared?.label ?? section, field);
        }
    });
    return groups.filter(g => g.fields.length > 0);
};
