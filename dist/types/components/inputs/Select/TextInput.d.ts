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
