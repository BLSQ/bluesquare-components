import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel } from '@mui/material';

const CheckboxComponent = ({
    value,
    disabled,
    label,
    onChange,
    keyValue,
    required,
}) => (
    <FormControlLabel
        disabled={disabled}
        control={
            <Checkbox
                id={`check-box-${keyValue}`}
                color="primary"
                checked={value === true}
                onChange={event => onChange(event.target.checked)}
                value="checked"
                disabled={disabled}
            />
        }
        label={`${label}${required ? '*' : ''}`}
    />
);

CheckboxComponent.defaultProps = {
    value: false,
    disabled: false,
    required: false,
    onChange: () => {},
    label: '',
};

CheckboxComponent.propTypes = {
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
    keyValue: PropTypes.string.isRequired,
};
export { CheckboxComponent as Checkbox };
