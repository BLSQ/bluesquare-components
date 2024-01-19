import React, { FunctionComponent, useCallback } from 'react';
import { NumericFormat } from 'react-number-format';
import { defineMessages } from 'react-intl';
import { CustomInput } from './Input';
import { useSafeIntl } from '../../../utils/useSafeIntl';

const MESSAGES = defineMessages({
    max: {
        id: 'blsq.numberInput.error.max',
        defaultMessage: 'Input exceeds {value}',
    },
    min: {
        id: 'blsq.numberInput.error.min',
        defaultMessage: 'Input is less than {value}',
    },
    invalid: {
        id: 'blsq.numberInput.error.invalid',
        defaultMessage: 'Invalid number',
    },
});

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
    suffix?: string;
    decimalScale?: number;
    placeholder?: string;
    setFieldError?: (
        // eslint-disable-next-line no-unused-vars
        keyValue: string,
        // eslint-disable-next-line no-unused-vars
        message: string,
    ) => void;
    thousandsGroupStyle?: 'thousand' | 'lakh' | 'wan';
    thousandSeparator?: ',' | '.';
    decimalSeparator?: ',' | '.';
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
    suffix = '',
    decimalScale = 10,
    placeholder,
    setFieldError = () => null,
    thousandsGroupStyle = 'thousand',
    thousandSeparator = ',',
    decimalSeparator = '.',
}) => {
    const { formatMessage } = useSafeIntl();
    const handleChange = useCallback(
        values => {
            const newValueAsNumber = values.floatValue;
            if (newValueAsNumber <= max && newValueAsNumber >= min) {
                onChange(newValueAsNumber);
            } else if (newValueAsNumber > max) {
                setFieldError(
                    keyValue,
                    formatMessage(MESSAGES.max, { value: max }),
                );
            } else if (newValueAsNumber < min) {
                setFieldError(
                    keyValue,
                    formatMessage(MESSAGES.min, { value: min }),
                );
            } else if (Number.isNaN(newValueAsNumber) && required) {
                setFieldError(keyValue, formatMessage(MESSAGES.invalid));
            }
        },
        [max, min, required, onChange, setFieldError, keyValue, formatMessage],
    );
    return (
        <NumericFormat
            value={value}
            disabled={disabled}
            prefix={prefix}
            suffix={suffix}
            customInput={CustomInput}
            onChange={() => null}
            autoComplete={autoComplete}
            multiline={multiline}
            required={required}
            min={min}
            max={max}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
            onValueChange={(values, sourceInfo) => {
                handleChange(values);
            }}
            errors={errors}
            placeholder={placeholder}
            keyValue={keyValue}
            label={label}
            decimalScale={decimalScale}
            thousandsGroupStyle={thousandsGroupStyle}
            thousandSeparator={thousandSeparator}
            decimalSeparator={decimalSeparator}
        />
    );
};
