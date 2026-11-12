import React, { FunctionComponent } from 'react';

import { Box } from '@mui/material';

import { useSafeIntl } from '../../localization/useSafeIntl';
import { DatePicker } from '../DatePicker';
import { Checkbox } from '../inputs/Checkbox';
import { NumberInput } from '../inputs/NumberInput';
import { Radio } from '../inputs/Radio';
import { SearchInput } from '../inputs/SearchInput';
import { Select } from '../inputs/Select';
import { TextArea } from '../inputs/TextArea/TextArea';
import { TextInput } from '../inputs/TextInput';
import { useResolveLabel } from './label';
import { MESSAGES } from './messages';
import type { FilterField as FilterFieldType, FilterValues } from './types';
import { getDateRangeBounds } from './utils';

type Props = {
    field: FilterFieldType;
    value: any;
    values: FilterValues;
    onChange: (key: string, value: any) => void;
    onEnterPressed?: () => void;
    /** Optional DOM id for the rendered control (e.g. first drawer field). */
    inputId?: string;
};

/**
 * Renders one `field` with the matching input. Unknown types fall back to text;
 * `type: 'custom'` uses `field.renderCustom`.
 */
export const FilterField: FunctionComponent<Props> = ({
    field,
    value,
    values,
    onChange,
    onEnterPressed,
    inputId,
}) => {
    const { formatMessage } = useSafeIntl();
    const resolveLabel = useResolveLabel();
    const label = resolveLabel(field.label, field.key);
    const setValue = (newValue: any) => onChange(field.key, newValue);
    const type = field.type ?? 'text';
    const common = {
        disabled: field.disabled,
        required: field.required,
        dataTestId: field.dataTestId ?? `filter-${field.key}`,
        ...(inputId ? { id: inputId } : {}),
    };

    switch (type) {
        case 'select':
            return (
                <Select
                    {...common}
                    keyValue={field.key}
                    label={label}
                    multi={field.multi}
                    clearable={field.clearable ?? true}
                    loading={field.loading}
                    options={field.options ?? []}
                    value={value}
                    onChange={setValue}
                    errors={field.errors ?? []}
                    helperText={field.helperText}
                    placeholder={field.placeholder}
                    returnFullObject={field.returnFullObject}
                    getOptionLabel={field.getOptionLabel}
                    renderTags={field.renderTags}
                />
            );
        case 'checkbox':
            return (
                <Checkbox
                    {...common}
                    keyValue={field.key}
                    label={label}
                    value={value === true}
                    onChange={setValue}
                />
            );
        case 'radio':
            return (
                <Radio
                    {...common}
                    name={field.key}
                    label={label}
                    options={field.options ?? []}
                    value={value ?? ''}
                    errors={field.errors ?? []}
                    onChange={setValue}
                />
            );
        case 'number':
            return (
                <NumberInput
                    {...common}
                    keyValue={field.key}
                    label={label}
                    value={value ?? ''}
                    min={field.min}
                    max={field.max}
                    errors={field.errors ?? []}
                    placeholder={field.placeholder}
                    onChange={setValue}
                />
            );
        case 'textarea':
            return (
                <TextArea
                    {...common}
                    label={label}
                    value={value ?? ''}
                    errors={field.errors ?? []}
                    helperText={field.helperText}
                    onChange={setValue}
                />
            );
        case 'search':
            return (
                <SearchInput
                    {...common}
                    keyValue={field.key}
                    label={label}
                    value={value ?? ''}
                    errors={field.errors ?? []}
                    clearable
                    onChange={setValue}
                    onEnterPressed={onEnterPressed ?? (() => {})}
                />
            );
        case 'date':
            return (
                <DatePicker
                    {...(inputId ? { id: inputId } : {})}
                    label={label}
                    currentDate={value ?? null}
                    errors={field.errors ?? []}
                    required={field.required}
                    disabled={field.disabled}
                    minDate={field.minDate}
                    maxDate={field.maxDate}
                    onChange={setValue}
                />
            );
        case 'daterange': {
            const { from, to } = getDateRangeBounds(value ?? {});
            const setBound = (bound: 'from' | 'to') => (newValue: any) =>
                setValue({ from, to, [bound]: newValue });
            return (
                <Box display="flex" flexDirection="column" gap={2}>
                    <DatePicker
                        {...(inputId ? { id: inputId } : {})}
                        label={
                            field.fromLabel
                                ? resolveLabel(field.fromLabel)
                                : (formatMessage(MESSAGES.from, {
                                      label,
                                  }) as string)
                        }
                        currentDate={from ?? null}
                        errors={field.errors ?? []}
                        disabled={field.disabled}
                        minDate={field.minDate}
                        maxDate={field.maxDate}
                        onChange={setBound('from')}
                    />
                    <DatePicker
                        label={
                            field.toLabel
                                ? resolveLabel(field.toLabel)
                                : (formatMessage(MESSAGES.until, {
                                      label,
                                  }) as string)
                        }
                        currentDate={to ?? null}
                        errors={field.errors ?? []}
                        disabled={field.disabled}
                        minDate={field.minDate}
                        maxDate={field.maxDate}
                        onChange={setBound('to')}
                    />
                </Box>
            );
        }
        case 'custom':
            return (
                <>
                    {field.renderCustom?.({
                        field,
                        value,
                        values,
                        onChange: setValue,
                        inputId,
                    }) ?? null}
                </>
            );
        case 'email':
        case 'text':
        default:
            return (
                <TextInput
                    {...common}
                    keyValue={field.key}
                    label={label}
                    value={value ?? ''}
                    errors={field.errors ?? []}
                    placeholder={field.placeholder}
                    onChange={setValue}
                />
            );
    }
};
