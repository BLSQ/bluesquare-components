import { FunctionComponent } from 'react';
declare type Props = {
    setValue: (newDate: string) => void;
    value: string;
    withCurrentDate?: boolean;
    withTime?: boolean;
    currentDateString?: string;
};
export declare const QueryBuilderDatePicker: FunctionComponent<Props>;
export {};
