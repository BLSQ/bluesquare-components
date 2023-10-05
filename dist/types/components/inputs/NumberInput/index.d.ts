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
    onChange: (newValue: number) => void;
    prefix?: string;
};
export declare const NumberInput: FunctionComponent<Props>;
export {};
