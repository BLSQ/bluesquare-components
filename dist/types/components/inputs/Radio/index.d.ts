export { RadioComponent as Radio };
declare function RadioComponent({ options, name, onChange, value, label, errors, className, required, dataTestId, }: {
    options: any;
    name: any;
    onChange: any;
    value: any;
    label: any;
    errors: any;
    className: any;
    required: any;
    dataTestId: any;
}): React.JSX.Element;
declare namespace RadioComponent {
    namespace defaultProps {
        const options: never[];
        function onChange(): void;
        const value: string;
        const label: string;
        const errors: never[];
        const className: string;
        const required: boolean;
        const dataTestId: undefined;
    }
    namespace propTypes {
        const options_1: PropTypes.Requireable<any[]>;
        export { options_1 as options };
        export const name: PropTypes.Validator<string>;
        const onChange_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onChange_1 as onChange };
        const value_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { value_1 as value };
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        const errors_1: PropTypes.Requireable<(string | null | undefined)[]>;
        export { errors_1 as errors };
        const className_1: PropTypes.Requireable<string>;
        export { className_1 as className };
        const dataTestId_1: PropTypes.Requireable<string>;
        export { dataTestId_1 as dataTestId };
        const required_1: PropTypes.Requireable<boolean>;
        export { required_1 as required };
    }
}
import React from "react";
import PropTypes from "prop-types";
