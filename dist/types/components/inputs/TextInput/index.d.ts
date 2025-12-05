export function TextInput({ keyValue, label, errors, required, value, disabled, onChange, multiline, autoComplete, placeholder, dataTestId, }: {
    keyValue: any;
    label?: undefined;
    errors?: never[] | undefined;
    required?: boolean | undefined;
    value?: string | undefined;
    disabled?: boolean | undefined;
    onChange?: (() => void) | undefined;
    multiline?: boolean | undefined;
    autoComplete?: string | undefined;
    placeholder?: undefined;
    dataTestId?: undefined;
}): React.JSX.Element;
export namespace TextInput {
    namespace propTypes {
        let errors: PropTypes.Requireable<(string | null | undefined)[]>;
        let keyValue: PropTypes.Validator<string>;
        let label: PropTypes.Requireable<string>;
        let required: PropTypes.Requireable<boolean>;
        let disabled: PropTypes.Requireable<boolean>;
        let multiline: PropTypes.Requireable<boolean>;
        let value: PropTypes.Requireable<string>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
        let autoComplete: PropTypes.Requireable<string>;
        let placeholder: PropTypes.Requireable<string>;
        let dataTestId: PropTypes.Requireable<string>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
