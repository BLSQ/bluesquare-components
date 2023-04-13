import { FunctionComponent } from 'react';
declare type Props = {
    setValue: (newDate: string) => void;
    value: string;
    withCurrentDate?: boolean;
    withTime?: boolean;
};
export declare const QueryBuilderDatePicker: FunctionComponent<Props>;
export {};
