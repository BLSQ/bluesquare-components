export function TextInput({ params, renderOption, disabled, label, required, onBlur, errors, helperText, loading, autoComplete, placeholder, }: {
    params: any;
    renderOption: any;
    disabled: any;
    label: any;
    required: any;
    onBlur: any;
    errors: any;
    helperText: any;
    loading: any;
    autoComplete: any;
    placeholder: any;
}): React.JSX.Element;
export namespace TextInput {
    namespace defaultProps {
        const helperText: null;
        const renderOption: null;
        const autoComplete: string;
        const label: undefined;
    }
    namespace propTypes {
        const renderOption_1: PropTypes.Requireable<object>;
        export { renderOption_1 as renderOption };
        export const params: PropTypes.Validator<object>;
        export const disabled: PropTypes.Validator<boolean>;
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        export const required: PropTypes.Validator<boolean>;
        export const onBlur: PropTypes.Validator<(...args: any[]) => any>;
        export const errors: PropTypes.Validator<any[]>;
        const helperText_1: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        export { helperText_1 as helperText };
        export const loading: PropTypes.Validator<boolean>;
        const autoComplete_1: PropTypes.Requireable<string>;
        export { autoComplete_1 as autoComplete };
    }
}
import React from "react";
import PropTypes from "prop-types";
