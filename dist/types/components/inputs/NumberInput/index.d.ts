import { FunctionComponent } from 'react';
declare type Props = {
    keyValue: string;
    errors?: string[];
    value?: string | number;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    multiline?: boolean;
    autoComplete?: string;
    min?: number;
    max?: number;
    onChange: (newValue: number | undefined) => void;
    prefix?: string;
    decimalScale?: number;
    setFieldError?: (keyValue: string, message: string) => void;
};
export declare const NumberInput: FunctionComponent<Props>;
export {};
