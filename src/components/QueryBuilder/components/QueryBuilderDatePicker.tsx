import React, {
    FunctionComponent,
    useCallback,
    Dispatch,
    SetStateAction,
} from 'react';
import { RadioGroup, FormControlLabel, Radio, Box } from '@material-ui/core';
import moment from 'moment';
import { Fields } from 'react-awesome-query-builder';

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
    setCurrentFields?: Dispatch<SetStateAction<Fields>>;
    fields: Fields;
    field: string;
};

export const QueryBuilderDatePicker: FunctionComponent<Props> = ({
    setValue,
    value,
    withCurrentDate = true,
    setCurrentFields = () => null,
    fields,
    field,
}) => {
    const { formatMessage } = useSafeIntl();
    const classes: Record<string, string> = useStyles();
    const [radioValue, setRadioValue] = React.useState(
        value === 'current_date' ? 'currentDate' : 'default',
    );
    console.log('setCurrentFields', setCurrentFields);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = (event.target as HTMLInputElement).value;
        if (newValue === 'currentDate') {
            setValue('current_date');
        }
        if (value !== newValue) {
            setCurrentFields({
                ...fields,
                [field]: {
                    ...fields[field],
                    type: newValue === 'currentDate' ? 'text' : 'date',
                },
            });
        }
        setRadioValue(newValue);
    };
    const renderDatePicker = useCallback(
        (disabled = false) => (
            <DatePicker
                onChange={newValue => {
                    setValue(moment(newValue).format(apiDateFormat));
                }}
                label=""
                currentDate={value}
                clearMessage={MESSAGES.clear}
                clearable={false}
                disabled={disabled}
            />
        ),
        [setValue, value],
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
