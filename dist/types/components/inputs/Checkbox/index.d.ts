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
        let value: boolean;
        let disabled: boolean;
        let required: boolean;
        function onChange(): void;
        let label: string;
        let dataTestId: undefined;
    }
    namespace propTypes {
        let value_1: PropTypes.Requireable<boolean>;
        export { value_1 as value };
        let disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
        let required_1: PropTypes.Requireable<boolean>;
        export { required_1 as required };
        let label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        let dataTestId_1: PropTypes.Requireable<string>;
        export { dataTestId_1 as dataTestId };
        let onChange_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onChange_1 as onChange };
        export let keyValue: PropTypes.Validator<string>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
