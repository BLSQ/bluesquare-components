import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ClearIcon from '@material-ui/icons/Clear';

import { useSafeIntl } from '../../../utils/useSafeIntl';
import { useKeyPressListener } from '../../../utils/useKeyPressListener';

import { MESSAGES } from './messages';

import { useStyles } from '../styles';

import { defaultRenderTags, getExtraProps, getOption } from './utils';
import { TextInput } from './TextInput';

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
}) => {
    const intl = useSafeIntl();
    const classes = useStyles();
    const shiftKeyIsDown = useKeyPressListener('Shift');

    const fixedValue = useMemo(() => {
        if (value) {
            const valuesList = Array.isArray(value) ? value : value.split(',');
            if (returnFullObject) {
                return valuesList;
            }
            return valuesList.map(v => getOption(v, options)).filter(o => o);
        }
        return [];
    }, [value, options]);

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

    const extraProps = getExtraProps(
        getOptionLabel,
        getOptionSelected,
        renderOption,
    );

    return (
        <Box>
            <Autocomplete
                disabled={disabled}
                noOptionsText={intl.formatMessage(noOptionsText)}
                multiple
                disableCloseOnSelect={shiftKeyIsDown}
                id={keyValue}
                disableClearable={!clearable}
                options={options}
                value={fixedValue}
                onChange={handleChange}
                loading={loading}
                closeIcon={<ClearIcon />}
                renderTags={renderTags}
                renderInput={params => (
                    <TextInput
                        params={params}
                        renderOption={renderOption}
                        disabled={disabled}
                        label={label}
                        required={required}
                        onBlur={onBlur}
                        errors={errors}
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
    noOptionsText: MESSAGES.noOptions,
    helperText: undefined,
    renderTags: defaultRenderTags(o => (o?.label ? o.label : '')),
    returnFullObject: false, // use this one if you pass array of objects as options and want an array of objects as sected items, not a string of id's
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

export { MultiSelect };
