export function DatePicker({ label, onChange, currentDate, clearMessage, required, errors, hideError, disabled, clearable, minDate, maxDate }: {
    label: any;
    onChange: any;
    currentDate: any;
    clearMessage: any;
    required: any;
    errors: any;
    hideError: any;
    disabled: any;
    clearable: any;
    minDate: any;
    maxDate: any;
}): React.JSX.Element;
export namespace DatePicker {
    namespace defaultProps {
        let currentDate: null;
        let required: boolean;
        let errors: never[];
        let hideError: boolean;
        let disabled: boolean;
        let clearMessage: undefined;
        let clearable: boolean;
        let minDate: undefined;
        let maxDate: undefined;
    }
    namespace propTypes {
        export let label: PropTypes.Validator<string>;
        export let onChange: PropTypes.Validator<(...args: any[]) => any>;
        let currentDate_1: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        export { currentDate_1 as currentDate };
        let errors_1: PropTypes.Requireable<any[]>;
        export { errors_1 as errors };
        let clearMessage_1: PropTypes.Requireable<object>;
        export { clearMessage_1 as clearMessage };
        let required_1: PropTypes.Requireable<boolean>;
        export { required_1 as required };
        let hideError_1: PropTypes.Requireable<boolean>;
        export { hideError_1 as hideError };
        let disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
        let clearable_1: PropTypes.Requireable<boolean>;
        export { clearable_1 as clearable };
        let minDate_1: PropTypes.Requireable<any>;
        export { minDate_1 as minDate };
        let maxDate_1: PropTypes.Requireable<any>;
        export { maxDate_1 as maxDate };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
