import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import {
    RadioGroup,
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
} from '@material-ui/core';

const RadioComponent = ({
    options,
    name,
    onChange,
    value,
    label,
    errors,
    className,
}) => (
    <FormControl
        component="fieldset"
        error={errors.length > 0}
        variant="outlined"
    >
        <FormLabel component="legend" style={{ fontSize: 12 }}>
            {label}
        </FormLabel>

        <RadioGroup
            className={className}
            name={name}
            value={value}
            onChange={event => {
                onChange(event.target.value);
            }}
        >
            {options.map(o => (
                <FormControlLabel
                    key={o.value}
                    value={o.value}
                    control={<Radio color="primary" />}
                    label={o.label}
                    disabled={o.disabled}
                />
            ))}
        </RadioGroup>
    </FormControl>
);

RadioComponent.defaultProps = {
    options: [],
    onChange: () => {},
    value: '',
    label: '',
    errors: [],
    className: '',
};
RadioComponent.propTypes = {
    options: PropTypes.array,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: oneOfType([PropTypes.string, PropTypes.bool]),
    label: PropTypes.string,
    errors: PropTypes.arrayOf(PropTypes.string),
    className: PropTypes.string,
};

export { RadioComponent as Radio };
