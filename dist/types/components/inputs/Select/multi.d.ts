export function MultiSelect({ value, keyValue, label, errors, onChange, options, onBlur, disabled, clearable, required, noOptionsText, getOptionLabel, getOptionSelected, loading, renderOption, renderTags, returnFullObject, helperText, loadingText, dataTestId, placeholder }: {
    value: any;
    keyValue: any;
    label: any;
    errors: any;
    onChange: any;
    options: any;
    onBlur: any;
    disabled: any;
    clearable: any;
    required: any;
    noOptionsText: any;
    getOptionLabel: any;
    getOptionSelected: any;
    loading: any;
    renderOption: any;
    renderTags: any;
    returnFullObject: any;
    helperText: any;
    loadingText: any;
    dataTestId: any;
    placeholder: any;
}): React.JSX.Element;
export namespace MultiSelect {
    namespace defaultProps {
        export const value: undefined;
        export const errors: never[];
        export const label: string;
        export const disabled: boolean;
        export const clearable: boolean;
        export const required: boolean;
        export const loading: boolean;
        export const options: never[];
        export function onBlur(): void;
        export const getOptionSelected: null;
        export const getOptionLabel: null;
        export const renderOption: null;
        export const loadingText: {
            id: string;
            defaultMessage: string;
        };
        export const noOptionsText: {
            id: string;
            defaultMessage: string;
        };
        export const helperText: undefined;
        export { defaultRenderTags as renderTags };
        export const returnFullObject: boolean;
        export const dataTestId: undefined;
    }
    namespace propTypes {
        const errors_1: PropTypes.Requireable<(string | null | undefined)[]>;
        export { errors_1 as errors };
        export const keyValue: PropTypes.Validator<string>;
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        const required_1: PropTypes.Requireable<boolean>;
        export { required_1 as required };
        const disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
        const clearable_1: PropTypes.Requireable<boolean>;
        export { clearable_1 as clearable };
        const value_1: PropTypes.Requireable<any>;
        export { value_1 as value };
        const onBlur_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onBlur_1 as onBlur };
        const loadingText_1: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        export { loadingText_1 as loadingText };
        const noOptionsText_1: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        export { noOptionsText_1 as noOptionsText };
        const helperText_1: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        export { helperText_1 as helperText };
        const options_1: PropTypes.Requireable<any[]>;
        export { options_1 as options };
        const loading_1: PropTypes.Requireable<boolean>;
        export { loading_1 as loading };
        export const onChange: PropTypes.Validator<(...args: any[]) => any>;
        const getOptionLabel_1: PropTypes.Requireable<object>;
        export { getOptionLabel_1 as getOptionLabel };
        const getOptionSelected_1: PropTypes.Requireable<object>;
        export { getOptionSelected_1 as getOptionSelected };
        const renderOption_1: PropTypes.Requireable<object>;
        export { renderOption_1 as renderOption };
        export const renderTags: PropTypes.Requireable<(...args: any[]) => any>;
        const returnFullObject_1: PropTypes.Requireable<boolean>;
        export { returnFullObject_1 as returnFullObject };
        const dataTestId_1: PropTypes.Requireable<string>;
        export { dataTestId_1 as dataTestId };
    }
}
import React from "react";
import { defaultRenderTags } from "./utils";
import PropTypes from "prop-types";
