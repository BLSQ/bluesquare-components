import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CircularProgress } from '@material-ui/core';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { MESSAGES } from './messages';
import { useStyles } from '../styles';
import { useKeyPressListener } from '../../../utils/useKeyPressListener';

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
                return valuesList.map(v => getOption(v)).filter(o => o);
            }
            return getOption(value);
        }
        return multi ? [] : null;
    }, [value, options, multi]);

    const handleChange = useCallback(
        (e, newValue) => {
            if ((!multi && !newValue) || (multi && newValue.length === 0)) {
                return onChange(null);
            }
            if (multi) {
                return onChange(newValue.map(v => v && v.value).join(','));
            }
            return onChange(newValue.value);
        },
        [multi, onChange],
    );

    const extraProps = {
        getOptionLabel: getOptionLabel || (option => option && option.label),
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
                error={errors.length > 0 && touched}
                InputLabelProps={{
                    classes: {
                        shrink: classes.shrink,
                    },
                    className: classes.inputLabel,
                }}
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
                renderTags={(tagValue, getTagProps) =>
                    tagValue
                        .filter(option => option)
                        .map((option, index) => (
                            <Chip
                                classes={{
                                    label: classes.chipLabel,
                                }}
                                color="secondary"
                                label={option.label}
                                {...getTagProps({ index })}
                            />
                        ))
                }
                renderInput={params => renderInput(params)}
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
    touched: false,
    loading: false,
    options: [],
    onBlur: () => {},
    getOptionSelected: null,
    getOptionLabel: null,
    renderOption: null,
    noOptionsText: MESSAGES.noOptions,
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
    options: PropTypes.array,
    touched: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
    loading: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    getOptionLabel: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    getOptionSelected: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    renderOption: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export { SelectCustom as Select };
