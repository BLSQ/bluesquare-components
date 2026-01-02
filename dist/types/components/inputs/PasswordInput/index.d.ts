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
    displayPassword?: boolean;
    autoComplete?: string;
    dataTestId?: string;
};
export declare const PasswordInput: FunctionComponent<Props>;
export {};
