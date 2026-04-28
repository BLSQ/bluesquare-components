import React, { FunctionComponent, useState } from 'react';
import { DateTimePicker as MuiDateTimePicker } from '@mui/x-date-pickers';
import EventIcon from '@mui/icons-material/Event';
import { makeStyles } from '@mui/styles';
import { IconButton } from '../buttons/IconButton';
import { FormControl } from '../inputs/FormControl';
import { commonStyles } from '../../styles/iaso/common';
import { IntlMessage } from '../../types/types';
import { toMomentValue } from '../../utils/toMomentValue';

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
    currentDate?: string | Date | null;
    errors?: string[];
    clearMessage?: IntlMessage; //Displays when hovering over the clear icon
    required?: boolean;
    hideError?: boolean;
    disabled?: boolean;
    clearable?: boolean;
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
    const pickerValue = toMomentValue(currentDate);
    const pickerMinDate = toMomentValue(minDate);
    const pickerMinDateTime = toMomentValue(minDateTime);
    const pickerMinTime = toMomentValue(minTime);
    const pickerMaxDate = toMomentValue(maxDate);
    const pickerMaxDateTime = toMomentValue(maxDateTime);
    const pickerMaxTime = toMomentValue(maxTime);

    return (
        <FormControl errors={errors} hideError={hideError}>
            <MuiDateTimePicker
                disabled={disabled}
                slots={{
                    openPickerIcon: EventIcon,
                }}
                slotProps={{
                    openPickerButton: {
                        size: 'small',
                    },
                    textField: {
                        InputLabelProps: {
                            className: classes.label,
                            shrink: Boolean(currentDate),
                            error: isOnError,
                        },
                        required,
                        error: isOnError,
                        helperText: null,
                    },
                }}
                format="DD/MM/YYYY HH:mm" // This one need be set by user locale
                label={`${label}`}
                value={pickerValue}
                onChange={onChange}
                onError={error => setDateError(error)}
                minDate={pickerMinDate}
                minDateTime={pickerMinDateTime}
                minTime={pickerMinTime}
                maxDate={pickerMaxDate}
                maxDateTime={pickerMaxDateTime}
                maxTime={pickerMaxTime}
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
