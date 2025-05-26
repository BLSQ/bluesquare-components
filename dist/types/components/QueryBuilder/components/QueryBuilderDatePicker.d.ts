import { FunctionComponent } from 'react';
type Props = {
    setValue: (newDate: string | {
        var: string;
    } | {
        type: 'field';
        field: string;
        valueSrc: 'field';
    }) => void;
    value: string;
    withCurrentDate?: boolean;
    withTime?: boolean;
    currentDateString?: string;
};
export declare const QueryBuilderDatePicker: FunctionComponent<Props>;
export {};
