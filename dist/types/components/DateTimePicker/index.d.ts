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
        let currentDate: null;
        let required: boolean;
        let errors: never[];
        let hideError: boolean;
        let disabled: boolean;
        let clearMessage: undefined;
        let clearable: boolean;
        let maxTime: undefined;
        let maxDateTime: undefined;
        let maxDate: undefined;
        let minTime: undefined;
        let minDateTime: undefined;
        let minDate: undefined;
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
        let maxTime_1: PropTypes.Requireable<any>;
        export { maxTime_1 as maxTime };
        let maxDateTime_1: PropTypes.Requireable<any>;
        export { maxDateTime_1 as maxDateTime };
        let maxDate_1: PropTypes.Requireable<any>;
        export { maxDate_1 as maxDate };
        let minTime_1: PropTypes.Requireable<any>;
        export { minTime_1 as minTime };
        let minDateTime_1: PropTypes.Requireable<any>;
        export { minDateTime_1 as minDateTime };
        let minDate_1: PropTypes.Requireable<any>;
        export { minDate_1 as minDate };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
