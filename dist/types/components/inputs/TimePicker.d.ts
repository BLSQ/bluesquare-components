import { FunctionComponent } from 'react';
type Props = {
    label?: string;
    value: any;
    required?: boolean;
    disabled?: boolean;
    onChange: (newValue: any) => void;
};
export declare const TimePicker: FunctionComponent<Props>;
export {};
