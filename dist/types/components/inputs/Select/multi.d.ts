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
        export let value: undefined;
        export let errors: never[];
        export let label: string;
        export let disabled: boolean;
        export let clearable: boolean;
        export let required: boolean;
        export let loading: boolean;
        export let options: never[];
        export function onBlur(): void;
        export let getOptionSelected: null;
        export let getOptionLabel: null;
        export let renderOption: null;
        export let loadingText: {
            id: string;
            defaultMessage: string;
        };
        export let noOptionsText: {
            id: string;
            defaultMessage: string;
        };
        export let helperText: undefined;
        export { defaultRenderTags as renderTags };
        export let returnFullObject: boolean;
        export let dataTestId: undefined;
    }
    namespace propTypes {
        let errors_1: PropTypes.Requireable<(string | null | undefined)[]>;
        export { errors_1 as errors };
        export let keyValue: PropTypes.Validator<string>;
        let label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        let required_1: PropTypes.Requireable<boolean>;
        export { required_1 as required };
        let disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
        let clearable_1: PropTypes.Requireable<boolean>;
        export { clearable_1 as clearable };
        let value_1: PropTypes.Requireable<any>;
        export { value_1 as value };
        let onBlur_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onBlur_1 as onBlur };
        let loadingText_1: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        export { loadingText_1 as loadingText };
        let noOptionsText_1: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        export { noOptionsText_1 as noOptionsText };
        let helperText_1: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        export { helperText_1 as helperText };
        let options_1: PropTypes.Requireable<any[]>;
        export { options_1 as options };
        let loading_1: PropTypes.Requireable<boolean>;
        export { loading_1 as loading };
        export let onChange: PropTypes.Validator<(...args: any[]) => any>;
        let getOptionLabel_1: PropTypes.Requireable<object>;
        export { getOptionLabel_1 as getOptionLabel };
        let getOptionSelected_1: PropTypes.Requireable<object>;
        export { getOptionSelected_1 as getOptionSelected };
        let renderOption_1: PropTypes.Requireable<object>;
        export { renderOption_1 as renderOption };
        export let renderTags: PropTypes.Requireable<(...args: any[]) => any>;
        let returnFullObject_1: PropTypes.Requireable<boolean>;
        export { returnFullObject_1 as returnFullObject };
        let dataTestId_1: PropTypes.Requireable<string>;
        export { dataTestId_1 as dataTestId };
    }
}
import React from 'react';
import { defaultRenderTags } from './utils';
import PropTypes from 'prop-types';
