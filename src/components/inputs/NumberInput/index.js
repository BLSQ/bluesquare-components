import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { OutlinedInput, Tooltip } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

import { useSafeIntl } from '../../../utils/useSafeIntl';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';

import { MESSAGES } from './messages';

const formatValue = (value, min, max, previousValue = '') => {
    if (value === undefined || value == null) return '';
    if (typeof value === 'string') {
        const valueAsArray = value.split('');
        const containsDots = valueAsArray.filter(char => char === '.');
        // If there is only one dot, the dot should be the last char and the char before it should be a number
        // e.g: "123."
        if (
            containsDots.length === 1 &&
            valueAsArray[valueAsArray.length - 1] === '.' &&
            !Number.isNaN(parseInt(valueAsArray[valueAsArray.length - 2], 10))
        ) {
            return value;
        }
        // "12.l" should return "12.""
        if (
            containsDots.length === 1 &&
            valueAsArray[valueAsArray.length - 2] === '.' &&
            Number.isNaN(parseInt(valueAsArray[valueAsArray.length - 1], 10))
        ) {
            valueAsArray.pop();
            return valueAsArray.join('');
        }
    }
    const parsedValue = typeof value === 'number' ? value : parseFloat(value);
    if (Number.isNaN(parsedValue)) {
        return '';
    }
    if (min && parsedValue < min) {
        return previousValue;
    }
    if (max && parsedValue > max) {
        return previousValue;
    }
    return parsedValue;
};
const formatThousand = (value, min, max, previousValue = '') => {
    const parsedValue = formatValue(value, min, max, previousValue);
    if (parsedValue > 1000 || !parsedValue) return parsedValue;
    const [number, decimals] = parsedValue.toString().split('.');
    const numberAsArray = number.split('');
    const mutableArray = [...numberAsArray];
    for (let i = numberAsArray.length - 3; i >= 0; i -= 3) {
        mutableArray.splice(i, 0, '.');
    }
    if (decimals) {
        return `${mutableArray.join('')}.${decimals}`;
    }
    return mutableArray.join('');
};

const useTooltipMessage = (min, max) => {
    const { formatMessage } = useSafeIntl();
    let msg = '';
    if (min || min === 0) {
        msg = `${formatMessage(MESSAGES.min)}: ${min}`;
        if (max) {
            msg += ' - ';
        }
    }
    if (max || max === 0) {
        msg += `${formatMessage(MESSAGES.max)}: ${max}`;
    }
    return msg;
};

const NumberInput = ({
    keyValue,
    label,
    errors,
    required,
    value,
    disabled,
    onChange,
    multiline,
    autoComplete,
    min,
    max,
    markThousands,
}) => {
    const hasErrors = errors.length >= 1;
    const formatter = markThousands ? formatThousand : formatValue;
    const [formattedValue, setFormattedValue] = useState(
        formatter(value, min, max),
    );

    useEffect(() => {
        const formatted = formatter(value, min, max, formattedValue);
        if (
            formatted !== formattedValue &&
            formatted < min && // avoiding copy paste of wrong value
            formatted > max
        ) {
            setFormattedValue(formatted);
        }
    }, [value, formattedValue]);

    const tooltipMessage = useTooltipMessage(min, max);
    return (
        <FormControl errors={errors}>
            <InputLabel
                htmlFor={`input-text-${keyValue}`}
                label={label}
                required={required}
                error={hasErrors}
                shrink={value !== ''}
            />
            <OutlinedInput
                autoComplete={autoComplete}
                size="small"
                multiline={multiline}
                disabled={disabled}
                id={`input-text-${keyValue}`}
                value={formattedValue}
                type="text"
                endAdornment={
                    tooltipMessage !== '' && (
                        <Tooltip title={tooltipMessage}>
                            <InfoIcon color="action" />
                        </Tooltip>
                    )
                }
                onChange={event => {
                    const updatedValue = formatter(
                        event.target.value,
                        min,
                        max,
                        formattedValue,
                    );
                    if (updatedValue !== formattedValue) {
                        setFormattedValue(updatedValue);
                        onChange(updatedValue);
                    }
                }}
                error={hasErrors}
            />
        </FormControl>
    );
};

NumberInput.defaultProps = {
    value: '',
    errors: [],
    multiline: false,
    disabled: false,
    required: false,
    onChange: () => {},
    label: '',
    autoComplete: 'off',
    min: undefined,
    max: undefined,
    markThousands: false,
};

NumberInput.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string),
    keyValue: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    multiline: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    autoComplete: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    markThousands: PropTypes.bool,
};

export { NumberInput };
