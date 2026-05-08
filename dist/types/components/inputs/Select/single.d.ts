<<<<<<< HEAD
import React, { FunctionComponent, ReactNode } from 'react';
import { AutocompleteRenderGetTagProps } from '@mui/material/Autocomplete';
import { IntlMessage } from '../../../types/types';
type Props = {
    keyValue: string;
    onChange: (value: any) => void;
    errors?: string[];
    label?: string;
    value?: any;
    required?: boolean;
    disabled?: boolean;
    clearable?: boolean;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    loadingText?: IntlMessage;
    noOptionsText?: IntlMessage;
    helperText?: ReactNode;
    options?: any[];
    loading?: boolean;
    getOptionLabel?: any;
    getOptionSelected?: any;
    renderOption?: (props: Record<string, any>, option: Record<string, any>) => React.ReactNode;
    renderTags?: (value: any[], getTagProps: AutocompleteRenderGetTagProps, ownerState?: unknown) => React.ReactNode;
    returnFullObject?: boolean;
    placeholder?: string;
    dataTestId?: string;
    freeSolo?: boolean;
    useBuiltInErrors?: boolean;
};
export declare const SingleSelect: FunctionComponent<Props>;
export {};
=======
export function SingleSelect({ value, keyValue, label, errors, onChange, options, onBlur, disabled, clearable, required, noOptionsText, getOptionLabel, getOptionSelected, loading, loadingText, renderOption, renderTags, returnFullObject, helperText, placeholder, freeSolo, dataTestId, useBuiltInErrors, }: {
    value?: undefined;
    keyValue: any;
    label?: undefined;
    errors?: never[] | undefined;
    onChange: any;
    options?: never[] | undefined;
    onBlur?: (() => void) | undefined;
    disabled?: boolean | undefined;
    clearable?: boolean | undefined;
    required?: boolean | undefined;
    noOptionsText?: {
        id: string;
        defaultMessage: string;
    } | undefined;
    getOptionLabel?: null | undefined;
    getOptionSelected?: null | undefined;
    loading?: boolean | undefined;
    loadingText?: {
        id: string;
        defaultMessage: string;
    } | undefined;
    renderOption?: null | undefined;
    renderTags?: ((tagValue: any, getTagProps: any) => any) | undefined;
    returnFullObject?: boolean | undefined;
    helperText?: undefined;
    placeholder?: undefined;
    freeSolo?: boolean | undefined;
    dataTestId?: undefined;
    useBuiltInErrors?: boolean | undefined;
}): React.JSX.Element;
export namespace SingleSelect {
    namespace propTypes {
        let errors: PropTypes.Requireable<(string | null | undefined)[]>;
        let keyValue: PropTypes.Validator<string>;
        let label: PropTypes.Requireable<string>;
        let required: PropTypes.Requireable<boolean>;
        let disabled: PropTypes.Requireable<boolean>;
        let clearable: PropTypes.Requireable<boolean>;
        let value: PropTypes.Requireable<any>;
        let onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        let loadingText: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        let noOptionsText: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        let helperText: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        let options: PropTypes.Requireable<any[]>;
        let loading: PropTypes.Requireable<boolean>;
        let onChange: PropTypes.Validator<(...args: any[]) => any>;
        let getOptionLabel: PropTypes.Requireable<object>;
        let getOptionSelected: PropTypes.Requireable<object>;
        let renderOption: PropTypes.Requireable<object>;
        let renderTags: PropTypes.Requireable<(...args: any[]) => any>;
        let returnFullObject: PropTypes.Requireable<boolean>;
        let placeholder: PropTypes.Requireable<string>;
        let dataTestId: PropTypes.Requireable<string>;
        let freeSolo: PropTypes.Requireable<boolean>;
        let useBuiltInErrors: PropTypes.Requireable<boolean>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
>>>>>>> main
