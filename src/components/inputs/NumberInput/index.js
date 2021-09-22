import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { OutlinedInput } from '@material-ui/core';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';

const formatValue = (value, integersOnly) => {
    if (typeof value === 'number') return value;
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

    const parsedValue = integersOnly ? parseInt(value, 10) : parseFloat(value);
    if (Number.isNaN(parsedValue)) {
        return '';
    }
    return parsedValue;
};

const NumberInput = ({
    keyValue,
    label,
    withMarginTop,
    errors,
    required,
    value,
    disabled,
    onChange,
    multiline,
    integersOnly,
    onEnterPressed,
}) => {
    const hasErrors = errors.length > 1;
    const [formattedValue, setFormattedValue] = useState(formatValue(value));

    useEffect(() => {
        const formatted = formatValue(value, integersOnly);
        setFormattedValue(formatted);
    }, [value]);

    return (
        <FormControl withMarginTop={withMarginTop} errors={errors}>
            <InputLabel
                htmlFor={`input-text-${keyValue}`}
                label={label}
                required={required}
                error={hasErrors}
                shrink={value !== ''}
            />
            <OutlinedInput
                size="small"
                multiline={multiline}
                disabled={disabled}
                id={`input-text-${keyValue}`}
                value={formattedValue}
                type="text"
                onChange={event => {
                    const updatedValue = formatValue(event.target.value);
                    setFormattedValue(updatedValue);
                    onChange(updatedValue);
                }}
                onKeyPress={event => {
                    console.log('event', event.key, event.key === 'Enter');
                    if (event.key === 'Enter') {
                        onEnterPressed();
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
    withMarginTop: true,
    multiline: false,
    disabled: false,
    required: false,
    onChange: () => {},
    label: '',
    integersOnly: true,
    onEnterPressed: () => {
        console.log('default');
    },
};

NumberInput.propTypes = {
    withMarginTop: PropTypes.bool,
    errors: PropTypes.arrayOf(PropTypes.string),
    keyValue: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    multiline: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    integersOnly: PropTypes.bool,
    onEnterPressed: PropTypes.func,
};

export { NumberInput };
