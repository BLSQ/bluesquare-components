import React, { useState } from 'react';

import { KeyboardDateTimePicker } from '@material-ui/pickers';
import EventIcon from '@material-ui/icons/Event';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import { IconButton } from '../buttons/IconButton';
import { FormControl } from '../inputs/FormControl';

import { commonStyles } from '../../styles/iaso/common.ts';

const useStyles = makeStyles(theme => ({
    ...commonStyles(theme),
    clearDateButton: {
        marginRight: theme.spacing(2),
        padding: 0,
        position: 'absolute',
        right: theme.spacing(4),
        top: 13,
    },
    helperTextError: {
        color: theme.palette.error.main,
    },
}));

const DateTimePicker = ({
    label,
    onChange,
    currentDate,
    clearMessage,
    required,
    errors,
    hideError,
    disabled,
    clearable,
}) => {
    const classes = useStyles();
    const [dateError, setDateError] = useState(null);

    const isOnError = errors.length > 0 || Boolean(dateError);

    return (
        <FormControl errors={errors} hideError={hideError}>
            <KeyboardDateTimePicker
                autoOk
                disableToolbar
                inputVariant="outlined"
                required={required}
                disabled={disabled}
                InputLabelProps={{
                    className: classes.label,
                    shrink: Boolean(currentDate),
                    error: isOnError,
                }}
                KeyboardButtonProps={{
                    size: 'small',
                }}
                keyboardIcon={<EventIcon size="small" />}
                InputProps={{
                    error: isOnError,
                }}
                helperText={null}
                format="DD/MM/YYYY HH:mm" // This one need be set by user locale
                label={`${label}`}
                value={currentDate}
                onChange={onChange}
                onError={error => setDateError(error)}
            />
            {clearable && clearMessage && currentDate && (
                <span className={classes.clearDateButton}>
                    <IconButton
                        disabled={disabled}
                        size="small"
                        icon="clear"
                        tooltipMessage={clearMessage}
                        onClick={() => onChange(null)}
                    />
                </span>
            )}
        </FormControl>
    );
};

DateTimePicker.defaultProps = {
    currentDate: null,
    required: false,
    errors: [],
    hideError: false,
    disabled: false,
    clearMessage: undefined,
    clearable: true,
};

DateTimePicker.propTypes = {
    /**
     * A label. Required
     */
    label: PropTypes.string.isRequired,
    /**
    /**
     * OnChange function. Required
     */
    onChange: PropTypes.func.isRequired,
    /**
     * The date to initialize the DateTimePicker with
     */
    currentDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /**
     * List of errors strings
     */
    errors: PropTypes.array,
    /**
     * A message object to use with react-intl. Displays when hovering over the clear icon
     */
    clearMessage: PropTypes.object,
    /**
     * display a star in the label if required
     */
    required: PropTypes.bool,
    /**
     * hidde error message
     */
    hideError: PropTypes.bool,
    disabled: PropTypes.bool,
    clearable: PropTypes.bool,
};

export { DateTimePicker };
