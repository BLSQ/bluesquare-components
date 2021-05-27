import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const CheckboxComponent = ({ value, disabled, label, onChange }) => (
    <FormControlLabel
        disabled={disabled}
        control={
            <Checkbox
                color="primary"
                checked={value === true}
                onChange={event => onChange(event.target.checked)}
                value="checked"
                disabled={disabled}
            />
        }
        label={label}
    />
);

CheckboxComponent.defaultProps = {
    value: false,
    disabled: false,
    onChange: () => {},
};

CheckboxComponent.propTypes = {
    value: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};
export { CheckboxComponent as Checkbox };
