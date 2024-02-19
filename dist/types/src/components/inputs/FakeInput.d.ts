import { FunctionComponent } from 'react';
type Props = {
    value: string;
    onClick: () => void;
    dataTestId?: string;
    errors?: string[];
    required?: boolean;
    label: string;
    onClear: () => void;
    fixedHeight?: boolean;
};
export declare const FakeInput: FunctionComponent<Props>;
export {};
