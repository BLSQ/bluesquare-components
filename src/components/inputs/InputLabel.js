import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import { useStyles } from './styles';

/** @deprecated use InputLabel from @material-ui/core instead to avoid text alignment issues */
function InputLabelComponent({ htmlFor, label, required, shrink, error }) {
    const classes = useStyles();
    return (
        <InputLabel
            name={htmlFor.replace('input-text-', '')}
            htmlFor={htmlFor}
            classes={{
                shrink: classes.shrink,
            }}
            className={classes.inputLabel}
            shrink={shrink}
            error={error}
        >
            {label}
            {required && <sup> *</sup>}
        </InputLabel>
    );
}
InputLabelComponent.defaultProps = {
    shrink: true,
    error: false,
    label: '',
};
InputLabelComponent.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool.isRequired,
    shrink: PropTypes.bool,
    error: PropTypes.bool,
};

export { InputLabelComponent as InputLabel };
