import React from 'react';
import PropTypes from 'prop-types';
import { OutlinedInput } from '@mui/material';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';

const TextInput = ({
    keyValue,
    label,
    errors,
    required,
    value,
    disabled,
    onChange,
    multiline,
    autoComplete,
}) => {
    const hasErrors = errors.length >= 1;
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
                size="small"
                autoComplete={autoComplete}
                multiline={multiline}
                disabled={disabled}
                id={`input-text-${keyValue}`}
                value={value}
                type="text"
                onChange={event => onChange(event.target.value)}
                error={hasErrors}
            />
        </FormControl>
    );
};

TextInput.defaultProps = {
    value: '',
    errors: [],
    multiline: false,
    disabled: false,
    required: false,
    onChange: () => {},
    label: '',
    autoComplete: 'off',
};

TextInput.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string),
    keyValue: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    multiline: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    autoComplete: PropTypes.string,
};

export { TextInput };
