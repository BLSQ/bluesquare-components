export { CheckboxComponent as Checkbox };
declare function CheckboxComponent({ value, disabled, label, onChange, keyValue, required, dataTestId, }: {
    value: any;
    disabled: any;
    label: any;
    onChange: any;
    keyValue: any;
    required: any;
    dataTestId: any;
}): React.JSX.Element;
declare namespace CheckboxComponent {
    namespace defaultProps {
        const value: boolean;
        const disabled: boolean;
        const required: boolean;
        function onChange(): void;
        const label: string;
        const dataTestId: undefined;
    }
    namespace propTypes {
        const value_1: PropTypes.Requireable<boolean>;
        export { value_1 as value };
        const disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
        const required_1: PropTypes.Requireable<boolean>;
        export { required_1 as required };
        const label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        const dataTestId_1: PropTypes.Requireable<string>;
        export { dataTestId_1 as dataTestId };
        const onChange_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onChange_1 as onChange };
        export const keyValue: PropTypes.Validator<string>;
    }
}
import React from "react";
import PropTypes from "prop-types";
