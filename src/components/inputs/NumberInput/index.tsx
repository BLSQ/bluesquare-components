import React, { useState, FunctionComponent, useCallback } from 'react';
import { NumericFormat } from 'react-number-format';
import { CustomInput } from './Input';

type Props = {
    keyValue: string;
    errors?: string[];
    value?: string | number;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    multiline?: boolean;
    autoComplete?: string;
    min?: number;
    max?: number;
    onChange: (
        // eslint-disable-next-line no-unused-vars
        newValue: number,
    ) => void;
    prefix?: string;
};
export const NumberInput: FunctionComponent<Props> = ({
    keyValue,
    label = '',
    errors = [],
    required = false,
    value = '',
    disabled = false,
    onChange,
    multiline = false,
    autoComplete = 'off',
    min = -Infinity,
    max = Infinity,
    prefix = '',
}) => {
    const [formattedValue, setFormattedValue] = useState(value);
    const handleChange = useCallback(
        event => {
            const newValue = event.target.value;
            setFormattedValue(newValue);
            const newValueAsNumber = parseFloat(newValue);
            if (value !== newValueAsNumber) {
                onChange(newValueAsNumber);
            }
        },
        [onChange, value],
    );

    return (
        <NumericFormat
            value={formattedValue}
            disabled={disabled}
            prefix={prefix}
            thousandSeparator
            customInput={CustomInput}
            onChange={handleChange}
            autoComplete={autoComplete}
            multiline={multiline}
            required={required}
            min={min}
            max={max}
            errors={errors}
            keyValue={keyValue}
            label={label}
            isAllowed={values => {
                const { floatValue } = values;
                if (values.value === '-' || values.value === '') return true;
                if (!floatValue) return false;
                return floatValue >= min && floatValue <= max;
            }}
        />
    );
};
