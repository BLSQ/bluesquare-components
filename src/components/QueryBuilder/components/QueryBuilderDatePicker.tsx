import React, { FunctionComponent, useState, ChangeEvent } from 'react';
import { RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';

import { DateOrDateTime } from './DateOrDateTime';
import { MESSAGES } from '../messages';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { useStyles } from '../styles';

type RadioValue = 'current' | 'default';

type Props = {
    // eslint-disable-next-line no-unused-vars
    setValue: (newDate: string | { var: string }) => void;
    setValueSrc?: (src: string) => void;
    value: string;
    valueSrc?: string;
    withCurrentDate?: boolean;
    withTime?: boolean;
    currentDateString?: string;
};

export const QueryBuilderDatePicker: FunctionComponent<Props> = ({
    setValue,
    setValueSrc,
    value,
    withCurrentDate = false,
    withTime = false,
    currentDateString,
}) => {
    const { formatMessage } = useSafeIntl();
    const classes: Record<string, string> = useStyles();
    const [radioValue, setRadioValue] = useState<RadioValue>(
        value === currentDateString ? 'current' : 'default',
    );
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = (event.target as HTMLInputElement).value;
        setRadioValue(newValue as RadioValue);
        console.log('currentDateString', currentDateString);
        console.log('newValue', newValue);
        if (newValue === 'current' && currentDateString) {
            if (typeof setValueSrc === 'function') setValueSrc('field');
            setValue(currentDateString);
        } else {
            if (typeof setValueSrc === 'function') setValueSrc('value');
            setValue('');
        }
    };
    if (!withCurrentDate)
        return (
            <DateOrDateTime
                setValue={setValue}
                dateValue={value || undefined}
                withTime={withTime}
            />
        );
    return (
        <Box position="relative" top={4}>
            <RadioGroup value={radioValue} onChange={handleChange}>
                <FormControlLabel
                    value="default"
                    control={<Radio className={classes.radio} />}
                    label={
                        <Box display="inline-block">
                            <DateOrDateTime
                                setValue={setValue}
                                dateValue={
                                    radioValue !== 'current' ? value : undefined
                                }
                                withTime={withTime}
                                disabled={radioValue !== 'default'}
                            />
                        </Box>
                    }
                />
                <FormControlLabel
                    value="current"
                    control={<Radio className={classes.radio} />}
                    label={
                        <Box position="relative" display="inline-block" top={5}>
                            {withTime
                                ? formatMessage(MESSAGES.currentDateTime)
                                : formatMessage(MESSAGES.currentDate)}
                        </Box>
                    }
                />
            </RadioGroup>
        </Box>
    );
};
