import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroup, FormControlLabel } from '@material-ui/core';

const Radio = ({ options, name, onChange, value }) => (
    <RadioGroup
        name={name}
        value={value}
        onChange={event => onChange(event.target.value)}
    >
        {options.map(o => (
            <FormControlLabel
                key={o.value}
                value={o.value}
                control={<Radio color="primary" />}
                label={o.label}
            />
        ))}
    </RadioGroup>
);

Radio.defaultProps = {
    options: [],
    onChange: () => {},
    value: null,
};
Radio.propTypes = {
    options: PropTypes.array,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.any,
};

export { Radio };
