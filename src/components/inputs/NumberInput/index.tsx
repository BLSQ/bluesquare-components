import React, { FunctionComponent, useCallback } from 'react';
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
        newValue: number | undefined,
    ) => void;
    prefix?: string;
    decimalScale?: number;
    placeholder?: string;
};
export const NumberInput: FunctionComponent<Props> = ({
    keyValue,
    label,
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
    decimalScale = 10,
    placeholder,
}) => {
    const handleChange = useCallback(
        event => {
            const newValueAsNumber = parseFloat(event.target.value);
            if (value !== newValueAsNumber) {
                onChange(
                    Number.isNaN(newValueAsNumber)
                        ? undefined
                        : newValueAsNumber,
                );
            }
        },
        [onChange, value],
    );
    return (
        <NumericFormat
            value={value}
            disabled={disabled}
            prefix={prefix}
            thousandSeparator={false}
            customInput={CustomInput}
            onChange={handleChange}
            autoComplete={autoComplete}
            multiline={multiline}
            required={required}
            min={min}
            max={max}
            errors={errors}
            placeholder={placeholder}
            keyValue={keyValue}
            label={label}
            decimalScale={decimalScale}
            isAllowed={values => {
                const { floatValue } = values;
                return (
                    (floatValue && floatValue <= max && floatValue >= min) ||
                    !floatValue
                );
            }}
        />
    );
};
