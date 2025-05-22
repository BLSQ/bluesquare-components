import { FunctionComponent } from 'react';
type Props = {
    setValue: (newDate: string | {
        var: string;
    }) => void;
    value: string;
    withCurrentDate?: boolean;
    withTime?: boolean;
    currentDateString?: string;
};
export declare const QueryBuilderDatePicker: FunctionComponent<Props>;
export {};
