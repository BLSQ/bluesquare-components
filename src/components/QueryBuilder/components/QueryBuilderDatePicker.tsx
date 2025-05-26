import React, { FunctionComponent } from 'react';

import { DateOrDateTime } from './DateOrDateTime';


type Props = {
    setValue: (newDate: string | { var: string }) => void;
    value: string;
    withTime?: boolean;
};

export const QueryBuilderDatePicker: FunctionComponent<Props> = ({
    setValue,
    value,
    withTime = false,
}) => {
    return (
        <DateOrDateTime
            setValue={setValue}
            dateValue={value || undefined}
            withTime={withTime}
        />
    );
};
