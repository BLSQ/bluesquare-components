export function TextInput({ params, renderOption, renderTags, selectedOption, disabled, label, required, onBlur, errors, helperText, loading, autoComplete, placeholder, dataTestId, }: {
    params: any;
    renderOption: any;
    renderTags: any;
    selectedOption: any;
    disabled: any;
    label: any;
    required: any;
    onBlur: any;
    errors: any;
    helperText: any;
    loading: any;
    autoComplete: any;
    placeholder: any;
    dataTestId: any;
}): React.JSX.Element;
export namespace TextInput {
    namespace defaultProps {
        let helperText: null;
        let renderOption: null;
        let renderTags: null;
        let selectedOption: null;
        let autoComplete: string;
        let label: undefined;
        let dataTestId: undefined;
        let placeholder: string;
    }
    namespace propTypes {
        let renderOption_1: PropTypes.Requireable<object>;
        export { renderOption_1 as renderOption };
        let renderTags_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { renderTags_1 as renderTags };
        let selectedOption_1: PropTypes.Requireable<NonNullable<string | number | object | null | undefined>>;
        export { selectedOption_1 as selectedOption };
        export let params: PropTypes.Validator<object>;
        export let disabled: PropTypes.Validator<boolean>;
        let label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        export let required: PropTypes.Validator<boolean>;
        export let onBlur: PropTypes.Validator<(...args: any[]) => any>;
        export let errors: PropTypes.Validator<any[]>;
        let helperText_1: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        export { helperText_1 as helperText };
        export let loading: PropTypes.Validator<boolean>;
        let autoComplete_1: PropTypes.Requireable<string>;
        export { autoComplete_1 as autoComplete };
        let placeholder_1: PropTypes.Requireable<string>;
        export { placeholder_1 as placeholder };
        let dataTestId_1: PropTypes.Requireable<string>;
        export { dataTestId_1 as dataTestId };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
