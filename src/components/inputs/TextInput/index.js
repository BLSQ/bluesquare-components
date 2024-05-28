import React from 'react';
import PropTypes from 'prop-types';
import { OutlinedInput } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';

const styles = () => ({
    input: {
        minHeight: 56,
    },
});
const useStyles = makeStyles(styles);

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
    placeholder,
    dataTestId,
}) => {
    const hasErrors = errors.length >= 1;
    const classes = useStyles();
    return (
        <FormControl errors={errors}>
            {label && (
                <InputLabel
                    htmlFor={`input-text-${keyValue}`}
                    label={label}
                    required={required}
                    error={hasErrors}
                    shrink={value !== ''}
                />
            )}
            <OutlinedInput
                size="small"
                className={classes.input}
                autoComplete={autoComplete}
                multiline={multiline}
                disabled={disabled}
                id={`input-text-${keyValue}`}
                value={value}
                type="text"
                onChange={event => onChange(event.target.value)}
                error={hasErrors}
                placeholder={placeholder}
                data-test={dataTestId ?? ''}
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
    label: undefined,
    autoComplete: 'off',
    placeholder: undefined,
    dataTestId: undefined,
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
    placeholder: PropTypes.string,
    dataTestId: PropTypes.string,
};

export { TextInput };
