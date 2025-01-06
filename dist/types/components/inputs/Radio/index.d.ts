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
        let options: never[];
        function onChange(): void;
        let value: string;
        let label: string;
        let errors: never[];
        let className: string;
        let required: boolean;
        let dataTestId: undefined;
    }
    namespace propTypes {
        let options_1: PropTypes.Requireable<any[]>;
        export { options_1 as options };
        export let name: PropTypes.Validator<string>;
        let onChange_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onChange_1 as onChange };
        let value_1: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        export { value_1 as value };
        let label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        let errors_1: PropTypes.Requireable<(string | null | undefined)[]>;
        export { errors_1 as errors };
        let className_1: PropTypes.Requireable<string>;
        export { className_1 as className };
        let dataTestId_1: PropTypes.Requireable<string>;
        export { dataTestId_1 as dataTestId };
        let required_1: PropTypes.Requireable<boolean>;
        export { required_1 as required };
    }
}
import React from 'react';
import PropTypes from 'prop-types';
