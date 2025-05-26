import { FunctionComponent } from 'react';
type Props = {
    setValue: (newDate: string | {
        var: string;
    }) => void;
    value: string;
    withTime?: boolean;
};
export declare const QueryBuilderDatePicker: FunctionComponent<Props>;
export {};
