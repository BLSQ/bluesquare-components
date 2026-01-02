import React, { FunctionComponent, useState } from 'react';
import { DateTimePicker as MuiDateTimePicker } from '@mui/x-date-pickers';
import EventIcon from '@mui/icons-material/Event';
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';
import { IconButton } from '../buttons/IconButton';
import { FormControl } from '../inputs/FormControl';
import { commonStyles } from '../../styles/iaso/common';
import { IntlMessage } from '../../types/types';

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

type Props = {
    label: string;
    onChange: (value: any, context?: any) => void;
    currentDate?: string | Date;
    errors?: string[];
    clearMessage?: IntlMessage; //Displays when hovering over the clear icon
    required?: boolean;
    hideError?: boolean;
    disabled?: boolean;
    clearable?: boolean;
    /** Use moment to pass these props
     * https://github.com/mui/material-ui-pickers/issues/1506
     */
    maxTime?: any;
    maxDateTime?: any;
    maxDate?: any;
    minTime?: any;
    minDateTime?: any;
    minDate?: any;
};

export const DateTimePicker: FunctionComponent<Props> = ({
    label,
    onChange,
    currentDate = null,
    clearMessage,
    required = false,
    errors = [],
    hideError = false,
    disabled = false,
    clearable = true,
    maxTime,
    maxDateTime,
    maxDate,
    minTime,
    minDateTime,
    minDate,
}) => {
    const classes: Record<string, string> = useStyles();
    const [dateError, setDateError] = useState<any | null>(null);
    const isOnError = errors.length > 0 || Boolean(dateError);

    return (
        <FormControl errors={errors} hideError={hideError}>
            <MuiDateTimePicker
                // @ts-ignore
                autoOk
                renderInput={props => <TextField {...props} />}
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
                // @ts-ignore
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
                minDate={minDate}
                minDateTime={minDateTime}
                minTime={minTime}
                maxDate={maxDate}
                maxDateTime={maxDateTime}
                maxTime={maxTime}
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
