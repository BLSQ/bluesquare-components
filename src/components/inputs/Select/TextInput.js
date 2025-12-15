import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import { CircularProgress } from '@mui/material';

import { FormControl } from '../FormControl';
import { useStyles } from '../styles';

const TextInput = ({
    params,
    renderOption = null,
    renderTags = null,
    selectedOption = null,
    disabled,
    label = undefined,
    required,
    onBlur,
    errors,
    helperText = null,
    loading,
    autoComplete = 'off',
    placeholder = '',
    dataTestId = undefined,
}) => {
    const classes = useStyles();
    const paramsCopy = {
        ...params,
    };
    let inputExtraProps = {};

    if (selectedOption?.color) {
        const tags = renderTags([selectedOption], () => ({}));
        const chip = Array.isArray(tags) ? tags[0] : tags;
        inputExtraProps = {
            startAdornment: (
                <div className={classes.startAdornment}>{chip}</div>
            ),
            style: { color: 'transparent' },
        };
        paramsCopy.inputProps.value = '';
    } else if (renderOption && params.inputProps.value) {
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
                label={label ? `${label}${required ? '*' : ''}` : undefined}
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
                    autoComplete,
                    placeholder,
                    'data-test': dataTestId,
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
TextInput.propTypes = {
    renderOption: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    renderTags: PropTypes.func,
    selectedOption: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
        PropTypes.string,
    ]),
    params: PropTypes.object.isRequired,
    disabled: PropTypes.bool.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool.isRequired,
    onBlur: PropTypes.func.isRequired,
    errors: PropTypes.array.isRequired,
    helperText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    loading: PropTypes.bool.isRequired,
    autoComplete: PropTypes.string,
    placeholder: PropTypes.string,
    dataTestId: PropTypes.string,
};
export { TextInput };
