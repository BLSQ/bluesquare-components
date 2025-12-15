export function DatePicker({ label, onChange, currentDate, clearMessage, required, errors, hideError, disabled, clearable, minDate, maxDate, }: {
    label: any;
    onChange: any;
    currentDate?: null | undefined;
    clearMessage: any;
    required?: boolean | undefined;
    errors?: never[] | undefined;
    hideError?: boolean | undefined;
    disabled?: boolean | undefined;
    clearable?: boolean | undefined;
    minDate?: undefined;
    maxDate?: undefined;
}): React.JSX.Element;
export namespace DatePicker {
    namespace propTypes {
        let label: PropTypes.Validator<string>;
        let onChange: PropTypes.Validator<(...args: any[]) => any>;
        let currentDate: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        let errors: PropTypes.Requireable<any[]>;
        let clearMessage: PropTypes.Requireable<object>;
        let required: PropTypes.Requireable<boolean>;
        let hideError: PropTypes.Requireable<boolean>;
        let disabled: PropTypes.Requireable<boolean>;
        let clearable: PropTypes.Requireable<boolean>;
        let minDate: PropTypes.Requireable<any>;
        let maxDate: PropTypes.Requireable<any>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
