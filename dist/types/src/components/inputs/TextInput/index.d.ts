export function TextInput({ keyValue, label, errors, required, value, disabled, onChange, multiline, autoComplete, placeholder, }: {
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
}): React.JSX.Element;
export namespace TextInput {
    namespace defaultProps {
        const value: string;
        const errors: never[];
        const multiline: boolean;
        const disabled: boolean;
        const required: boolean;
        function onChange(): void;
        const label: undefined;
        const autoComplete: string;
        const placeholder: undefined;
    }
    namespace propTypes {
        const errors_1: PropTypes.Requireable<(string | null | undefined)[]>;
        export { errors_1 as errors };
        export const keyValue: PropTypes.Validator<string>;
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        const required_1: PropTypes.Requireable<boolean>;
        export { required_1 as required };
        const disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
        const multiline_1: PropTypes.Requireable<boolean>;
        export { multiline_1 as multiline };
        const value_1: PropTypes.Requireable<string>;
        export { value_1 as value };
        const onChange_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onChange_1 as onChange };
        const autoComplete_1: PropTypes.Requireable<string>;
        export { autoComplete_1 as autoComplete };
        const placeholder_1: PropTypes.Requireable<string>;
        export { placeholder_1 as placeholder };
    }
}
import React from "react";
import PropTypes from "prop-types";
