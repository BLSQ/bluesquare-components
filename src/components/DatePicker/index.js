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

/*
 * DatePicker Component
 *
 * The `currentDate` prop accepts the following types:
 *   - A JavaScript Date object
 *   - A moment.js object (recommended)
 *   - An ISO string in the format 'YYYY-MM-DD'
 *
 * For best compatibility with MUI DatePicker and to avoid parsing issues,
 * it is recommended to pass a moment.js object as the value for `currentDate`.
 *
 * The `format` prop controls how the date is displayed and parsed in the UI,
 * but the value you provide should be a Date, moment object, or ISO string.
 *
 * Example usage:
 *   <DatePicker currentDate={moment()} ... />
 *   <DatePicker currentDate={new Date()} ... />
 *   <DatePicker currentDate={'2024-06-01'} ... />
 */
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
    minDate,
    maxDate
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
                minDate={minDate}
                maxDate={maxDate}
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
    minDate: undefined,
    maxDate: undefined
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
    minDate: PropTypes.any,
    maxDate: PropTypes.any,
};

export { DatePicker };
