import { FunctionComponent } from 'react';
type Option = {
    label: string;
    value: string;
};
type Props = {
    options: Option[];
    label: string;
    value: Option[];
    onChange: (value: string[]) => void;
    disabled?: boolean;
    isRequired?: boolean;
    helperText?: string;
};
export declare const DndSelect: FunctionComponent<Props>;
export {};
