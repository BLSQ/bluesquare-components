import React, { useState } from 'react';

import { KeyboardDatePicker } from '@material-ui/pickers';
import EventIcon from '@material-ui/icons/Event';
import { FormControl, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import { IconButton } from '../buttons/IconButton';

import { commonStyles } from '../../styles/iaso/common';

const useStyles = makeStyles(theme => ({
    ...commonStyles(theme),
    formControl: {
        width: '100%',
    },
    clearDateButton: {
        marginRight: theme.spacing(2),
        padding: 0,
        position: 'absolute',
        right: theme.spacing(4),
        top: 13,
    },
}));

const DatePicker = ({
    label,
    onChange,
    currentDate,
    hasError,
    clearMessage,
    helperText,
}) => {
    const classes = useStyles();
    const [dateError, setDateError] = useState(null);
    return (
        <FormControl className={classes.formControl}>
            <KeyboardDatePicker
                autoOk
                disableToolbar
                inputVariant="outlined"
                InputLabelProps={{
                    className: classes.label,
                    shrink: Boolean(currentDate),
                    error: hasError || Boolean(dateError),
                }}
                KeyboardButtonProps={{
                    size: 'small',
                }}
                keyboardIcon={<EventIcon size="small" />}
                InputProps={{
                    error: hasError || Boolean(dateError),
                }}
                format="DD/MM/YYYY" // This one need be set by user locale
                label={label}
                helperText={helperText}
                value={currentDate}
                onChange={onChange}
                onError={error => setDateError(error)}
            />
            {currentDate && (
                <span className={classes.clearDateButton}>
                    <IconButton
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

DatePicker.defaultProps = {
    currentDate: null,
    helperText: '',
};

DatePicker.propTypes = {
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
     * The date to initialize the DatePicker with
     */
    currentDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    /**
     * Toggles the CSS for error state
     */
    hasError: PropTypes.bool.isRequired,
    /**
     * A message object to use with react-intl. Displays when hovering over the clear icon
     */
    clearMessage: PropTypes.object.isRequired,
    /**
     * A message object to use with react-intl. Displays when hovering over the clear icon
     */
    helperText: PropTypes.string,
};

export { DatePicker };
