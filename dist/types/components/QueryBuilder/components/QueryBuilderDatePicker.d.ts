import { FunctionComponent } from 'react';
type Props = {
    setValue: (newDate: string | {
        var: string;
    }) => void;
    setValueSrc?: (src: string) => void;
    value: string;
    valueSrc?: string;
    withCurrentDate?: boolean;
    withTime?: boolean;
    currentDateString?: string;
};
export declare const QueryBuilderDatePicker: FunctionComponent<Props>;
export {};
