import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const RadioComponent = ({ options, name, onChange, value, className }) => (
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
);

RadioComponent.defaultProps = {
    options: [],
    onChange: () => {},
    value: '',
    className: '',
};
RadioComponent.propTypes = {
    options: PropTypes.array,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: oneOfType([PropTypes.string, PropTypes.bool]),
    className: PropTypes.string,
};

export { RadioComponent as Radio };
