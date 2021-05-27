import React from 'react';
import PropTypes from 'prop-types';
import { RadioGroup, FormControlLabel } from '@material-ui/core';

const Radio = ({ options, keyValue, onChange, value }) => (
    <RadioGroup
        name={keyValue}
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
    keyValue: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.any,
};

export { Radio };
