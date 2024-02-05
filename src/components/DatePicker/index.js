import React, { useState } from 'react';

import { DesktopDatePicker as MuiDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import EventIcon from '@mui/icons-material/Event';

import { TextField } from '@mui/material';
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

const DatePicker = ({
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
            <MuiDatePicker
                autoOk
                disableToolbar
                // with mui 5 InputLabelProps and InputProps can't be directly passed to the DatePicker
                renderInput={props => (
                    <TextField
                        {...props}
                        InputLabelProps={{
                            error: isOnError,
                            shrink: Boolean(currentDate),
                        }}
                        required={required}
                        error={isOnError}
                    />
                )}
                disabled={disabled}
                KeyboardButtonProps={{
                    size: 'small',
                }}
                keyboardIcon={<EventIcon size="small" />}
                helperText={null}
                format="DD/MM/YYYY" // This one need be set by user locale
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

DatePicker.defaultProps = {
    currentDate: null,
    required: false,
    errors: [],
    hideError: false,
    disabled: false,
    clearMessage: undefined,
    clearable: true,
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

export { DatePicker };
