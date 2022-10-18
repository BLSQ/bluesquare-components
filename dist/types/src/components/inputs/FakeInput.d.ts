import { FunctionComponent } from 'react';
declare type Props = {
    value: string;
    onClick: () => void;
    dataTestId?: string;
    errors?: string[];
    required?: boolean;
    label: string;
    onClear: () => void;
};
export declare const FakeInput: FunctionComponent<Props>;
export {};
