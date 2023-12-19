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
    decimalScale?: number;
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
    decimalScale = 10,
    setFieldError = () => null,
    thousandsGroupStyle = 'thousand',
    thousandSeparator = ',',
    decimalSeparator = '.',
}) => {
    const { formatMessage } = useSafeIntl();
    const handleChange = useCallback(
        event => {
            const newValueAsNumber = parseFloat(event.target.value);
            if (newValueAsNumber <= max && newValueAsNumber >= min) {
                onChange(
                    Number.isNaN(newValueAsNumber)
                        ? undefined
                        : newValueAsNumber,
                );
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
            decimalScale={decimalScale}
            thousandsGroupStyle={thousandsGroupStyle}
            thousandSeparator={thousandSeparator}
            decimalSeparator={decimalSeparator}
        />
    );
};
