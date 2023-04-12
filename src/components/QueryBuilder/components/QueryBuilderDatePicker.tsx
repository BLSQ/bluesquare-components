import React, { FunctionComponent, useCallback } from 'react';
import { RadioGroup, FormControlLabel, Radio, Box } from '@material-ui/core';
import moment from 'moment';

import { DatePicker } from '../../DatePicker';
import { MESSAGES } from '../messages';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { apiDateFormat } from '../constants';
import { useStyles } from '../styles';

type Props = {
    // eslint-disable-next-line no-unused-vars
    setValue: (newDate: string) => void;
    value: string;
    withCurrentDate?: boolean;
};

export const QueryBuilderDatePicker: FunctionComponent<Props> = ({
    setValue,
    value,
    withCurrentDate = false,
}) => {
    const { formatMessage } = useSafeIntl();
    const classes: Record<string, string> = useStyles();
    const [radioValue, setRadioValue] = React.useState(
        value === 'current_time' ? 'currentDate' : 'default',
    );
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = (event.target as HTMLInputElement).value;
        setRadioValue(newValue);
        setValue(newValue === 'currentDate' ? 'current_time' : '');
    };
    const renderDatePicker = useCallback(
        (disabled = false) => (
            <DatePicker
                onChange={newValue => {
                    setValue(moment(newValue).format(apiDateFormat));
                }}
                label=""
                currentDate={radioValue !== 'currentDate' ? value : undefined}
                clearMessage={MESSAGES.clear}
                clearable={false}
                disabled={disabled}
            />
        ),
        [radioValue, setValue, value],
    );
    if (!withCurrentDate) return renderDatePicker();
    return (
        <Box position="relative" top={4}>
            <RadioGroup value={radioValue} onChange={handleChange}>
                <FormControlLabel
                    value="default"
                    control={<Radio className={classes.radio} />}
                    label={
                        <Box display="inline-block">
                            {renderDatePicker(radioValue !== 'default')}
                        </Box>
                    }
                />
                <FormControlLabel
                    value="currentDate"
                    control={<Radio className={classes.radio} />}
                    label={
                        <Box position="relative" display="inline-block" top={5}>
                            {formatMessage(MESSAGES.currentDate)}
                        </Box>
                    }
                />
            </RadioGroup>
        </Box>
    );
};
