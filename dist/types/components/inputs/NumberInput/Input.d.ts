import { ChangeEvent, FocusEventHandler, FunctionComponent } from 'react';
type Props = {
    keyValue: string;
    errors: string[];
    value: string | number;
    label?: string;
    required: boolean;
    disabled: boolean;
    multiline?: boolean;
    autoComplete?: string;
    min: number;
    max: number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    placeholder?: string;
};
export declare const CustomInput: FunctionComponent<Props>;
export {};
