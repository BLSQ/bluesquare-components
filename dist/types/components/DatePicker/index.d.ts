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
        const currentDate: null;
        const required: boolean;
        const errors: never[];
        const hideError: boolean;
        const disabled: boolean;
        const clearMessage: undefined;
        const clearable: boolean;
        const minDate: undefined;
        const maxDate: undefined;
    }
    namespace propTypes {
        export const label: PropTypes.Validator<string>;
        export const onChange: PropTypes.Validator<(...args: any[]) => any>;
        const currentDate_1: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        export { currentDate_1 as currentDate };
        const errors_1: PropTypes.Requireable<any[]>;
        export { errors_1 as errors };
        const clearMessage_1: PropTypes.Requireable<object>;
        export { clearMessage_1 as clearMessage };
        const required_1: PropTypes.Requireable<boolean>;
        export { required_1 as required };
        const hideError_1: PropTypes.Requireable<boolean>;
        export { hideError_1 as hideError };
        const disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
        const clearable_1: PropTypes.Requireable<boolean>;
        export { clearable_1 as clearable };
        const minDate_1: PropTypes.Requireable<any>;
        export { minDate_1 as minDate };
        const maxDate_1: PropTypes.Requireable<any>;
        export { maxDate_1 as maxDate };
    }
}
import React from "react";
import PropTypes from "prop-types";
