import { FunctionComponent } from 'react';
type Props = {
    value?: string;
    label: string;
    onChange: (newValue: string) => void;
    errors?: string[];
    required?: boolean;
    debounceTime?: number;
    disabled?: boolean;
    helperText?: string;
    dataTestId?: string;
};
export declare const TextArea: FunctionComponent<Props>;
export {};
