import { FunctionComponent } from 'react';
type Props = {
    keyValue: string;
    errors?: string[];
    label?: string;
    required?: boolean;
    disabled?: boolean;
    multiline?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    autoComplete?: string;
    placeholder?: string;
    dataTestId?: string;
};
export declare const TextInput: FunctionComponent<Props>;
export {};
