import React, { FunctionComponent } from 'react';
import moment from 'moment';

import { DatePicker } from '../../DatePicker';
import { DateTimePicker } from '../../DateTimePicker';
import { MESSAGES } from '../messages';
import { apiDateFormat, apiDateTimeFormat } from '../constants';

type Props = {
    // eslint-disable-next-line no-unused-vars
    setValue: (newDate: string) => void;
    dateValue: string | undefined;
    withTime?: boolean;
    disabled?: boolean;
};

export const DateOrDateTime: FunctionComponent<Props> = ({
    setValue,
    dateValue,
    withTime = false,
    disabled = false,
}) => (
    <>
        {withTime && (
            <DateTimePicker
                onChange={newValue => {
                    setValue(moment(newValue).format(apiDateTimeFormat));
                }}
                label=""
                currentDate={dateValue}
                clearMessage={MESSAGES.clear}
                clearable={false}
                disabled={disabled}
            />
        )}
        {!withTime && (
            <DatePicker
                onChange={newValue => {
                    setValue(moment(newValue).format(apiDateFormat));
                }}
                label=""
                currentDate={dateValue}
                clearMessage={MESSAGES.clear}
                clearable={false}
                disabled={disabled}
            />
        )}
    </>
);
