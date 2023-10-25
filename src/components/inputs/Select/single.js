import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import ClearIcon from '@mui/icons-material/Clear';

import { useSafeIntl } from '../../../utils/useSafeIntl';

import { MESSAGES } from './messages';

import { useStyles } from '../styles';

import { defaultRenderTags, getExtraProps, getOption } from './utils';
import { TextInput } from './TextInput';

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
}) => {
    const { formatMessage } = useSafeIntl();
    const classes = useStyles();

    const displayedErrors = useMemo(() => {
        const tempErrors = [...errors];
        const missingValueError = !getOption(value, options);
        if (value && !loading && missingValueError) {
            tempErrors.push(formatMessage(MESSAGES.valueNotFound));
        }
        return tempErrors;
    }, [value, options, errors, loading]);

    const fixedValue = useMemo(
        () => (value ? getOption(value, options) ?? value : null),
        [value, options],
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

    return (
        <Box>
            <Autocomplete
                disabled={disabled}
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
                        errors={displayedErrors}
                        helperText={helperText}
                        loading={loading}
                    />
                )}
                classes={{
                    popupIndicator: classes.popupIndicator,
                    clearIndicator: classes.clearIndicator,
                    hasClearIcon: classes.hasClearIcon,
                }}
                {...extraProps}
            />
        </Box>
    );
};

SingleSelect.defaultProps = {
    value: undefined,
    errors: [],
    label: '',
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
    renderTags: defaultRenderTags(o => (o?.label ? o.label : '')),
    returnFullObject: false, // use this one if you pass array of objects as options and want an array of objects as sected items, not a string of id's
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
};

export { SingleSelect };
