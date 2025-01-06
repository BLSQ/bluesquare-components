export function DateTimePicker({ label, onChange, currentDate, clearMessage, required, errors, hideError, disabled, clearable, maxTime, maxDateTime, maxDate, minTime, minDateTime, minDate, }: {
    label: any;
    onChange: any;
    currentDate: any;
    clearMessage: any;
    required: any;
    errors: any;
    hideError: any;
    disabled: any;
    clearable: any;
    maxTime: any;
    maxDateTime: any;
    maxDate: any;
    minTime: any;
    minDateTime: any;
    minDate: any;
}): React.JSX.Element;
export namespace DateTimePicker {
    namespace defaultProps {
        const currentDate: null;
        const required: boolean;
        const errors: never[];
        const hideError: boolean;
        const disabled: boolean;
        const clearMessage: undefined;
        const clearable: boolean;
        const maxTime: undefined;
        const maxDateTime: undefined;
        const maxDate: undefined;
        const minTime: undefined;
        const minDateTime: undefined;
        const minDate: undefined;
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
        const maxTime_1: PropTypes.Requireable<any>;
        export { maxTime_1 as maxTime };
        const maxDateTime_1: PropTypes.Requireable<any>;
        export { maxDateTime_1 as maxDateTime };
        const maxDate_1: PropTypes.Requireable<any>;
        export { maxDate_1 as maxDate };
        const minTime_1: PropTypes.Requireable<any>;
        export { minTime_1 as minTime };
        const minDateTime_1: PropTypes.Requireable<any>;
        export { minDateTime_1 as minDateTime };
        const minDate_1: PropTypes.Requireable<any>;
        export { minDate_1 as minDate };
    }
}
import React from "react";
import PropTypes from "prop-types";
