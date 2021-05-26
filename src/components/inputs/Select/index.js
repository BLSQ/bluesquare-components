import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';

const SelectComponent = ({
    value,
    keyValue,
    label,
    errors,
    onChange,
    options,
    onBlur,
    onFocus,
    classNames,
    withMarginTop,
    multi,
    disabled,
    clearable,
    isFocused,
    searchable,
    required,
    noResultsText,
}) => {
    const [selectInputValue, setSelectInputValue] = useState('');
    const hasErrors = errors.length > 0;

    return (
        <FormControl withMarginTop={withMarginTop} errors={errors}>
            <InputLabel
                htmlFor={`input-select-${keyValue}`}
                label={label}
                shrink={
                    (value !== undefined && value !== null) ||
                    selectInputValue !== ''
                }
                isFocused={isFocused}
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
                    onBlur={onBlur}
                    onFocus={onFocus}
                    options={options}
                    noResultsText={noResultsText}
                    onChange={newValue => {
                        console.log(
                            'SELECT Component',
                            keyValue,
                            'new value',
                            newValue,
                        );
                        onChange(keyValue, newValue);
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
    classNames: [],
    searchable: true,
    onChange: () => {},
    options: [],
    onBlur: () => {},
    onFocus: () => {},
    // TODO use library translations
    noResultsText: '',
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
    noResultsText: PropTypes.string,
    options: PropTypes.array,
    classNames: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
};

export { SelectComponent as Select };
