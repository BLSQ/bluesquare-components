<<<<<<< HEAD
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
=======
export function TextInput({ params, renderOption, renderTags, selectedOption, disabled, label, required, onBlur, errors, helperText, loading, autoComplete, placeholder, dataTestId, }: {
    params: any;
    renderOption?: null | undefined;
    renderTags?: null | undefined;
    selectedOption?: null | undefined;
    disabled: any;
    label?: undefined;
    required: any;
    onBlur: any;
    errors: any;
    helperText?: null | undefined;
    loading: any;
    autoComplete?: string | undefined;
    placeholder?: string | undefined;
    dataTestId?: undefined;
}): React.JSX.Element;
export namespace TextInput {
    namespace propTypes {
        let renderOption: PropTypes.Requireable<object>;
        let renderTags: PropTypes.Requireable<(...args: any[]) => any>;
        let selectedOption: PropTypes.Requireable<NonNullable<string | number | object | null | undefined>>;
        let params: PropTypes.Validator<object>;
        let disabled: PropTypes.Validator<boolean>;
        let label: PropTypes.Requireable<string>;
        let required: PropTypes.Validator<boolean>;
        let onBlur: PropTypes.Validator<(...args: any[]) => any>;
        let errors: PropTypes.Validator<any[]>;
        let helperText: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        let loading: PropTypes.Validator<boolean>;
        let autoComplete: PropTypes.Requireable<string>;
        let placeholder: PropTypes.Requireable<string>;
        let dataTestId: PropTypes.Requireable<string>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
>>>>>>> main
