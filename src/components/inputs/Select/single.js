import ClearIcon from '@mui/icons-material/Clear';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import React, { useCallback, useMemo } from 'react';

import { useSafeIntl } from '../../../utils/useSafeIntl';

import { MESSAGES } from './messages';

import { useStyles } from '../styles';

import { TextInput } from './TextInput';
import { defaultRenderTags, getExtraProps, getOption } from './utils';

const SingleSelect = ({
    value,
    keyValue,
    label,
    errors,
    onChange,
    options,
    onBlur,
    disabled,
    clearable,
    required,
    noOptionsText,
    getOptionLabel,
    getOptionSelected,
    loading,
    loadingText,
    renderOption,
    renderTags,
    returnFullObject,
    helperText,
    placeholder,
    freeSolo,
    dataTestId,
}) => {
    const { formatMessage } = useSafeIntl();
    const classes = useStyles();
    //  Handle numeric 0 as value
    const hasValue = Boolean(value) || value === 0

    const displayedErrors = useMemo(() => {
        const tempErrors = [...errors];
        if(!freeSolo){
            const missingValueError = !getOption(value, options);
            if (hasValue && !loading && missingValueError) {
                tempErrors.push(formatMessage(MESSAGES.valueNotFound));
            }
        }
        return tempErrors;
    }, [value, options, errors, loading, hasValue]);

    const fixedValue = useMemo(
        () => (hasValue ? getOption(value, options) ?? value : null),
        [value, options, hasValue],
    );

    const handleChange = useCallback(
        (e, newValue) => onChange(newValue?.value ?? null),
        [onChange, returnFullObject],
    );

    const extraProps = getExtraProps(
        getOptionLabel,
        getOptionSelected,
        renderOption,
    );
    const handleInputChange = useCallback(
        (_, newInputValue) => freeSolo && onChange(newInputValue),
        [onChange, returnFullObject],
    );

    return (
        <Box>
            <Autocomplete
                disabled={disabled}
                freeSolo={freeSolo}
                onInputChange={handleInputChange}
                noOptionsText={formatMessage(noOptionsText)}
                multiple={false}
                id={keyValue}
                disableClearable={!clearable}
                options={options}
                value={fixedValue}
                onChange={handleChange}
                loading={loading}
                loadingText={formatMessage(loadingText)}
                clearIcon={<ClearIcon />}
                renderTags={renderTags}
                renderInput={params => (
                    <TextInput
                        params={params}
                        renderOption={renderOption}
                        disabled={disabled}
                        label={label}
                        required={required}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        errors={ displayedErrors }
                        helperText={helperText}
                        loading={loading}
                        dataTestId={dataTestId}
                    />
                )}
                classes={{
                    popupIndicator: classes.popupIndicator,
                    clearIndicator: classes.clearIndicator,
                    hasClearIcon: classes.hasClearIcon,
                }}
                renderOption={(props, option) => (
                    <li {...props} key={`${props.id || option.value || option.id}`}>
                        {extraProps.getOptionLabel(option)}
                    </li>
                )}
                {...extraProps}
            />
        </Box>
    );
};

SingleSelect.defaultProps = {
    value: undefined,
    errors: [],
    label: undefined,
    disabled: false,
    clearable: true,
    required: false,
    loading: false,
    options: [],
    onBlur: () => {},
    getOptionSelected: null,
    getOptionLabel: null,
    renderOption: null,
    noOptionsText: MESSAGES.noOptions,
    loadingText: MESSAGES.loadingOptions,
    helperText: undefined,
    renderTags: defaultRenderTags,
    returnFullObject: false, // use this one if you pass array of objects as options and want an array of objects as sected items, not a string of id's
    placeholder: undefined,
    dataTestId: undefined,
    freeSolo: false,
};

SingleSelect.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string),
    keyValue: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    clearable: PropTypes.bool,
    value: PropTypes.any,
    onBlur: PropTypes.func,
    loadingText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    noOptionsText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    helperText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    options: PropTypes.array,
    loading: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    getOptionLabel: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    getOptionSelected: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    renderOption: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    renderTags: PropTypes.func,
    returnFullObject: PropTypes.bool,
    placeholder: PropTypes.string,
    dataTestId: PropTypes.string,
    freeSolo: PropTypes.bool,
};

export { SingleSelect };
