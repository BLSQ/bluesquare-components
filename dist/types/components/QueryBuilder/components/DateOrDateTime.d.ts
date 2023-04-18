import { FunctionComponent } from 'react';
declare type Props = {
    setValue: (newDate: string) => void;
    dateValue: string | undefined;
    withTime?: boolean;
    disabled?: boolean;
};
export declare const DateOrDateTime: FunctionComponent<Props>;
export {};
