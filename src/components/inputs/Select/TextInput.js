import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { CircularProgress } from '@material-ui/core';

import { FormControl } from '../FormControl';
import { useStyles } from '../styles';

const TextInput = ({
    params,
    renderOption,
    disabled,
    label,
    required,
    onBlur,
    errors,
    helperText,
    loading,
}) => {
    const classes = useStyles();
    const paramsCopy = {
        ...params,
    };
    let inputExtraProps = {};
    if (renderOption && params.inputProps.value) {
        inputExtraProps = {
            startAdornment: (
                <div className={classes.startAdornment}>
                    {renderOption({
                        label: params.inputProps.value,
                    })}
                </div>
            ),
            style: { color: 'transparent' },
        };
        paramsCopy.inputProps.value = '';
    }
    return (
        <FormControl errors={errors}>
            <TextField
                {...paramsCopy}
                variant="outlined"
                disabled={disabled}
                label={`${label}${required ? '*' : ''}`}
                onBlur={onBlur}
                error={errors.length > 0}
                InputLabelProps={{
                    classes: {
                        shrink: classes.shrink,
                    },
                    className: classes.inputLabel,
                }}
                helperText={helperText}
                InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                        <>
                            {loading ? (
                                <CircularProgress color="inherit" size={20} />
                            ) : null}
                            {params.InputProps.endAdornment}
                        </>
                    ),
                    ...inputExtraProps,
                }}
            />
        </FormControl>
    );
};

TextInput.defaultProps = {
    helperText: null,
    renderOption: null,
};

TextInput.propTypes = {
    renderOption: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    params: PropTypes.object.isRequired,
    disabled: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool.isRequired,
    onBlur: PropTypes.func.isRequired,
    errors: PropTypes.array.isRequired,
    helperText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    loading: PropTypes.bool.isRequired,
};
export { TextInput };
