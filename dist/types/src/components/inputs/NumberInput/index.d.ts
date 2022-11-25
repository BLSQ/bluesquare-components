import { FunctionComponent } from 'react';
declare type Props = {
    errors?: string[];
    keyValue: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    multiline?: boolean;
    value?: string | number;
    onChange?: (value: string | number) => void;
    autoComplete?: string;
    min?: number;
    max?: number;
    markThousands?: boolean;
    locale?: string;
};
export declare const NumberInput: FunctionComponent<Props>;
export {};
