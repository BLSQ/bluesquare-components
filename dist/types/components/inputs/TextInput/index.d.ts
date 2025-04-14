export function TextInput({ keyValue, label, errors, required, value, disabled, onChange, multiline, autoComplete, placeholder, dataTestId, }: {
    keyValue: any;
    label: any;
    errors: any;
    required: any;
    value: any;
    disabled: any;
    onChange: any;
    multiline: any;
    autoComplete: any;
    placeholder: any;
    dataTestId: any;
}): React.JSX.Element;
export namespace TextInput {
    namespace defaultProps {
        let value: string;
        let errors: never[];
        let multiline: boolean;
        let disabled: boolean;
        let required: boolean;
        function onChange(): void;
        let label: undefined;
        let autoComplete: string;
        let placeholder: undefined;
        let dataTestId: undefined;
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
        let multiline_1: PropTypes.Requireable<boolean>;
        export { multiline_1 as multiline };
        let value_1: PropTypes.Requireable<string>;
        export { value_1 as value };
        let onChange_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onChange_1 as onChange };
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
