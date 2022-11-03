import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { OutlinedInput, Tooltip } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

import { useSafeIntl } from '../../../utils/useSafeIntl';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';

import { MESSAGES } from './messages';

export const convertToNumber = (formattedValue, locale = 'EN') => {
    const decimalMarker = locale === 'EN' ? '.' : ',';
    const thousandMarker = locale === 'EN' ? ',' : '.';
    const [number, decimals] = formattedValue.split(decimalMarker);
    const rawNumber = parseInt(number.split(thousandMarker).join(''), 10);
    if (!decimals) return rawNumber;
    return parseFloat(`${rawNumber}.${decimals}`);
};

const formatValue = (value, min, max, previousValue = '') => {
    if (value === undefined || value == null) return '';
    if (typeof value !== 'number') {
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
    if ((typeof value === 'number' && value < 1000) || !value) return value;
    // const parsedValue = formatValue(value, min, max, previousValue);
    const decimalMarker = '.';
    const thousandMarker = ',';
    // Check if number has decimals, split and store value
    const valueAsArray = value.split('');
    const hasDecimals = valueAsArray.filter(char => char === decimalMarker);
    // if value has separators, remove them
    const [number, decimals] = value.toString().split(decimalMarker);
    const rawNumberAsString = number.split(thousandMarker).join('');
    const rawNumberAsArray = rawNumberAsString.split('');
    const rawNumber = parseInt(rawNumberAsString, 10);
    console.log('number', number, 'decimals', decimals);
    console.log('rawNumber', rawNumberAsString, rawNumberAsArray, rawNumber);
    // If there is only one dot, the dot should be the last char and the char before it should be a number
    // e.g: "123."
    if (
        hasDecimals.length === 1 &&
        valueAsArray[valueAsArray.length - 1] === decimalMarker &&
        !Number.isNaN(rawNumber)
    ) {
        return value;
    }
    // "12.l" should return "12.""
    if (
        hasDecimals.length === 1 &&
        valueAsArray[valueAsArray.length - 2] === decimalMarker &&
        Number.isNaN(decimals, 10)
    ) {
        valueAsArray.pop();
        return valueAsArray.join('');
    }
    // reconstruct float value, store it for comparison with min and max
    const rawNumberAsFloat = decimals
        ? parseFloat(`${rawNumberAsString}.${decimals}`)
        : rawNumber;
    if (Number.isNaN(rawNumberAsFloat)) {
        return '';
    }
    // if problem with min or max, return previous value
    if (min && rawNumberAsFloat < min) {
        return previousValue;
    }
    if (max && rawNumberAsFloat > max) {
        return previousValue;
    }
    // else if number <1000 return it
    if (rawNumber < 1000) {
        return rawNumberAsFloat;
    }
    // else add the separators at the right spots
    const mutableArray = [...rawNumberAsArray];
    // stop the loop before 0 to avoid turning the whole input into 0.xxxx
    for (let i = rawNumberAsArray.length - 3; i > 0; i -= 3) {
        mutableArray.splice(i, 0, thousandMarker);
    }
    // add the decimals to the string value
    if (decimals) {
        return `${mutableArray.join('')}${decimalMarker}${decimals}`;
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
    const formatter = markThousands ? formatThousand : formatValue;
    const hasErrors = errors.length >= 1;
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
