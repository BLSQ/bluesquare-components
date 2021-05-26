import React, { useState } from 'react';

import { KeyboardDatePicker } from '@material-ui/pickers';
import Clear from '@material-ui/icons/Clear';
import {
    FormControl,
    Tooltip,
    IconButton,
    makeStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';

import { commonStyles } from '../../styles/iaso/common';
import { useSafeIntl } from '../../utils/useSafeIntl';
// import MESSAGES from '../messages';

const useStyles = makeStyles(theme => ({
    ...commonStyles(theme),
    formControl: {
        width: '100%',
    },
    clearDateButton: {
        marginRight: theme.spacing(2),
        padding: 0,
        position: 'absolute',
        right: theme.spacing(6),
        top: 15,
    },
}));

const DatePicker = ({
    placeholder,
    onChange,
    currentDate,
    hasError,
    clearMessage,
}) => {
    const classes = useStyles();
    const intl = useSafeIntl();
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
                InputProps={{
                    error: hasError || Boolean(dateError),
                }}
                format="DD/MM/YYYY" // This one need be set by user locale
                label={placeholder}
                helperText=""
                value={currentDate}
                onChange={onChange}
                onError={error => setDateError(error)}
            />
            {currentDate && (
                <Tooltip arrow title={intl.formatMessage(clearMessage)}>
                    <IconButton
                        color="inherit"
                        onClick={() => onChange(null)}
                        className={classes.clearDateButton}
                    >
                        <Clear color="primary" />
                    </IconButton>
                </Tooltip>
            )}
        </FormControl>
    );
};

DatePicker.defaultProps = {
    currentDate: null,
};

DatePicker.propTypes = {
    /**
     * A placeholder. Required
     */
    placeholder: PropTypes.string.isRequired,
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
};

export { DatePicker };
