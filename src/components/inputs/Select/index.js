import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { withStyles } from '@material-ui/core';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { MESSAGES } from './messages';
import { styles } from './styles';

const SelectComponent = ({
    value,
    keyValue,
    label,
    errors,
    onChange,
    options,
    onBlur,
    onFocus,
    withMarginTop,
    multi,
    disabled,
    clearable,
    isFocused,
    searchable,
    required,
    classes,
    // noResultsText,
}) => {
    const [selectInputValue, setSelectInputValue] = useState('');
    const hasErrors = errors.length > 0;
    const classNames = hasErrors
        ? [classes.select, classes.selectError]
        : [classes.select];
    const intl = useSafeIntl();
    const [focus, setFocus] = useState(isFocused);

    return (
        <FormControl withMarginTop={withMarginTop} errors={errors}>
            <InputLabel
                htmlFor={`input-select-${keyValue}`}
                label={label}
                shrink={
                    (value !== undefined && value !== null) ||
                    selectInputValue !== ''
                }
                isFocused={focus}
                required={required}
                error={hasErrors}
            />
            <div className={classNames.join(' ')}>
                <Select
                    disabled={disabled}
                    searchable={searchable}
                    multi={multi}
                    clearable={clearable}
                    simpleValue
                    onInputChange={newValue => {
                        setSelectInputValue(newValue);
                    }}
                    name={keyValue}
                    value={value}
                    placeholder=""
                    onBlur={() => {
                        setFocus(false);
                        onBlur();
                    }}
                    onFocus={() => {
                        setFocus(true);
                        onFocus();
                    }}
                    options={options}
                    noResultsText={intl.formatMessage(MESSAGES.noOptions)}
                    onChange={newValue => {
                        onChange(newValue);
                    }}
                />
            </div>
        </FormControl>
    );
};

SelectComponent.defaultProps = {
    value: undefined,
    errors: [],
    withMarginTop: true,
    multi: false,
    disabled: false,
    clearable: true,
    isFocused: false,
    required: false,
    searchable: true,
    onChange: () => {},
    options: [],
    onBlur: () => {},
    onFocus: () => {},
    // TODO use library translations
    // noResultsText: '',
};

SelectComponent.propTypes = {
    withMarginTop: PropTypes.bool,
    errors: PropTypes.arrayOf(PropTypes.string),
    keyValue: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    searchable: PropTypes.bool,
    clearable: PropTypes.bool,
    isFocused: PropTypes.bool,
    multi: PropTypes.bool,
    value: PropTypes.any,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    // noResultsText: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
    classes: PropTypes.object.isRequired,
};

const styledSelectComponent = withStyles(styles)(SelectComponent);
export { styledSelectComponent as Select };
