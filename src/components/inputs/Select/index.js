import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CircularProgress } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

import { useSafeIntl } from '../../../utils/useSafeIntl';
import { MESSAGES } from './messages';
import { useStyles } from '../styles';
import { useKeyPressListener } from '../../../utils/useKeyPressListener';

const defaultRenderTags = getLabel => (tagValue, getTagProps) =>
    tagValue.map((option, index) => (
        <Chip
            color="secondary"
            style={{
                backgroundColor: option.color,
                color: 'white',
            }}
            label={getLabel(option)}
            {...getTagProps({ index })}
        />
    ));

const SelectCustom = ({
    value,
    keyValue,
    label,
    errors,
    onChange,
    options,
    touched,
    onBlur,
    multi,
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

    const getOption = optionValue =>
        options.find(o => `${o.value}` === `${optionValue}`);

    const fixedValue = useMemo(() => {
        if (value) {
            if (multi) {
                const valuesList = Array.isArray(value)
                    ? value
                    : value.split(',');
                if (returnFullObject) {
                    return valuesList;
                }
                return valuesList.map(v => getOption(v)).filter(o => o);
            }
            return getOption(value) ?? value;
        }
        return multi ? [] : null;
    }, [value, options, multi]);
    const handleChange = useCallback(
        (e, newValue) => {
            if ((!multi && !newValue) || (multi && newValue.length === 0)) {
                return onChange(null);
            }
            if (multi) {
                if (!returnFullObject) {
                    return onChange(newValue.map(v => v?.value).join(','));
                }
                return onChange(newValue);
            }
            return onChange(newValue.value);
        },
        [multi, onChange, returnFullObject],
    );
    const extraProps = {
        getOptionLabel:
            getOptionLabel || (option => option?.label ?? option.toString()),
        getOptionSelected:
            getOptionSelected ||
            ((option, val) => val && option.value === val.value),
    };
    if (renderOption) {
        extraProps.renderOption = renderOption;
    }

    const renderInput = params => {
        const paramsCopy = {
            ...params,
        };
        let inputExtraProps = {};
        if (extraProps.renderOption && params.inputProps.value) {
            inputExtraProps = {
                startAdornment: (
                    <div className={classes.startAdornment}>
                        {extraProps.renderOption({
                            label: params.inputProps.value,
                        })}
                    </div>
                ),
                style: { color: 'transparent' },
            };
            paramsCopy.inputProps.value = '';
        }
        return (
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
        );
    };
    return (
        <Box mt={1} mb={2}>
            <Autocomplete
                disabled={disabled}
                noOptionsText={intl.formatMessage(noOptionsText)}
                multiple={multi}
                disableCloseOnSelect={multi && shiftKeyIsDown}
                id={keyValue}
                disableClearable={!clearable}
                options={options}
                value={fixedValue}
                onChange={handleChange}
                loading={loading}
                closeIcon={<ClearIcon />}
                renderTags={renderTags}
                renderInput={params => renderInput(params)}
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

SelectCustom.defaultProps = {
    value: undefined,
    errors: [],
    label: '',
    multi: false,
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

SelectCustom.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string),
    keyValue: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    clearable: PropTypes.bool,
    multi: PropTypes.bool,
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

export { SelectCustom as Select, defaultRenderTags as renderTags };
