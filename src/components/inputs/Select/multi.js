import ClearIcon from '@mui/icons-material/Clear';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import React, { useCallback, useMemo } from 'react';

import { useKeyPressListener } from '../../../utils/useKeyPressListener';
import { useSafeIntl } from '../../../localization/useSafeIntl';

import { MESSAGES } from './messages';

import { useStyles } from '../styles';

import { TextInput } from './TextInput';
import {
    defaultRenderTags,
    getExtraProps,
    getMultiOption,
    getOption,
    defaultRenderOption,
} from './utils';

const MultiSelect = ({
    value = undefined,
    keyValue,
    label = '',
    errors = [],
    onChange,
    options = [],
    onBlur = () => { },
    disabled = false,
    clearable = true,
    required = false,
    noOptionsText = MESSAGES.noOptions,
    getOptionLabel = null,
    getOptionSelected = null,
    loading = false,
    renderOption = null,
    renderTags = defaultRenderTags,
    returnFullObject = false, // use this one if you pass array of objects as options and want an array of objects as sected items, not a string of id's
    helperText = undefined,
    loadingText = MESSAGES.loadingOptions,
    dataTestId = undefined,
    placeholder,
    useBuiltInErrors = true,
}) => {
    const { formatMessage } = useSafeIntl();
    const classes = useStyles();
    const shiftKeyIsDown = useKeyPressListener('Shift');
    //  Handle numeric 0 as value
    const hasValue = Boolean(value) || value === 0;

    const valuesList = useMemo(() => {
        if (!hasValue) return [];
        return Array.isArray(value) ? value : value.split(',');
    }, [value, hasValue]);

    const extraProps = getExtraProps(
        getOptionLabel,
        getOptionSelected,
        renderOption,
    );
    const displayedErrors = useMemo(() => {
        const tempErrors = [...errors];
        if (hasValue && !loading && useBuiltInErrors) {
            valuesList.forEach(val => {
                const multiOption = getMultiOption(
                    val,
                    options,
                    extraProps.isOptionEqualToValue,
                );
                const missingValueError =
                    !Boolean(multiOption) && multiOption !== 0;
                if (missingValueError && useBuiltInErrors) {
                    tempErrors.push(
                        formatMessage(MESSAGES.oneValueNotFound, {
                            value: `${extraProps.getOptionLabel(val)}`,
                        }),
                    );
                }
            });
        }
        return tempErrors;
    }, [
        value,
        options,
        errors,
        loading,
        hasValue,
        valuesList,
        useBuiltInErrors,
    ]);

    const fixedValue = useMemo(() => {
        if (hasValue) {
            if (returnFullObject) {
                return valuesList;
            }
            return valuesList.map(v => getOption(v, options)).filter(o => o);
        }
        return [];
    }, [options, hasValue, valuesList]);

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
                renderOption={(props, option) =>
                    defaultRenderOption(
                        props,
                        option,
                        extraProps.getOptionLabel,
                    )
                }
                {...extraProps}
            />
        </Box>
    );
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
    useBuiltInErrors: PropTypes.bool,
};

export { MultiSelect };
