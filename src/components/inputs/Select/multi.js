import ClearIcon from '@mui/icons-material/Clear';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import React, { useCallback, useMemo } from 'react';

import { useKeyPressListener } from '../../../utils/useKeyPressListener';
import { useSafeIntl } from '../../../utils/useSafeIntl';

import { MESSAGES } from './messages';

import { useStyles } from '../styles';

import { TextInput } from './TextInput';
import {
    defaultRenderTags,
    getExtraProps,
    getMultiOption,
    getOption,
} from './utils';

const MultiSelect = ({
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
    renderOption,
    renderTags,
    returnFullObject,
    helperText,
    loadingText,
    dataTestId,
    placeholder
}) => {
    const { formatMessage } = useSafeIntl();
    const classes = useStyles();
    const shiftKeyIsDown = useKeyPressListener('Shift');
    //  Handle numeric 0 as value
    const hasValue = Boolean(value)|| value === 0

    const valuesList = useMemo(() => {
        if (!hasValue) return [];
        return Array.isArray(value) ? value : value.split(',');
    }, [value,hasValue]);

    const extraProps = getExtraProps(
        getOptionLabel,
        getOptionSelected,
        renderOption,
    );
    const displayedErrors = useMemo(() => {
        const tempErrors = [...errors];
        if (hasValue && !loading) {
            valuesList.forEach(val => {
                const multiOption = getMultiOption(
                    val,
                    options,
                    extraProps.isOptionEqualToValue,
                );
                const missingValueError = Boolean(multiOption) && multiOption !== 0
                if (missingValueError) {
                    tempErrors.push(
                        formatMessage(MESSAGES.oneValueNotFound, {
                            value: `${extraProps.getOptionLabel(val)}`,
                        }),
                    );
                }
            });
        }
        return tempErrors;
    }, [value, options, errors, loading, hasValue, valuesList]);

    const fixedValue = useMemo(() => {
        if (hasValue) {
            if (returnFullObject) {
                return valuesList;
            }
            return valuesList.map(v => getOption(v, options)).filter(o => o);
        }
        return [];
    }, [options, hasValue,valuesList]);

    const handleChange = useCallback(
        (e, newValue) => {
            if (newValue.length === 0) {
                return onChange(null);
            }
            if (!returnFullObject) {
                return onChange(newValue.map(v => v?.value).join(','));
            }
            return onChange(newValue);
        },
        [onChange, returnFullObject],
    );
    return (
        <Box>
            <Autocomplete
                disabled={disabled}
                noOptionsText={formatMessage(noOptionsText)}
                multiple
                disableCloseOnSelect={shiftKeyIsDown}
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
                        dataTestId={dataTestId}
                        placeholder={placeholder}
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

MultiSelect.defaultProps = {
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
    loadingText: MESSAGES.loadingOptions,
    noOptionsText: MESSAGES.noOptions,
    helperText: undefined,
    renderTags: defaultRenderTags,
    returnFullObject: false, // use this one if you pass array of objects as options and want an array of objects as sected items, not a string of id's
    dataTestId: undefined,
};

MultiSelect.propTypes = {
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
    dataTestId: PropTypes.string,
};

export { MultiSelect };
