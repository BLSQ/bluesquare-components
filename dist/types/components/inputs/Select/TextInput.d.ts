import React, { FunctionComponent, ReactNode } from 'react';
type Props = {
    renderOption?: (props: Record<string, any>, option: Record<string, any>) => React.ReactNode;
    renderTags?: (value: any[], getTagProps: any) => React.ReactNode;
    selectedOption?: Record<string, any> | number | string;
    params: Record<string, any>;
    disabled: boolean;
    label?: string;
    required: boolean;
    onBlur: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    errors: string[];
    helperText?: string | ReactNode;
    loading: boolean;
    autoComplete?: 'on' | 'off';
    placeholder?: string;
    dataTestId?: string;
};
export declare const TextInput: FunctionComponent<Props>;
export {};
