import React from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core';
import classNames from 'classnames';
import { useStyles } from './styles';
import { useCenterMultilineLabel } from './useCenterMultilineLabel.ts';

const useCustomStyle = makeStyles({
    size: { width: `calc(100% - 52px)` },
});

/** @deprecated use InputLabel from @material-ui/core instead to avoid text alignment issues */
function InputLabelComponent({ htmlFor, label, required, shrink, error }) {
    const classes = useStyles();
    const customStyle = useCustomStyle();
    const labelRef = useCenterMultilineLabel();
    return (
        <InputLabel
            name={htmlFor.replace('input-text-', '')}
            htmlFor={htmlFor}
            classes={{
                shrink: classes.shrink,
            }}
            className={classNames(classes.inputLabel, customStyle.size)}
            shrink={shrink}
            error={error}
            ref={labelRef}
        >
            <span>{label}</span>
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
