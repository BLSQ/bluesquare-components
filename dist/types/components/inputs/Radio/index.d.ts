export { RadioComponent as Radio };
declare function RadioComponent({ options, name, onChange, value, label, errors, className, required, dataTestId, }: {
    options?: never[] | undefined;
    name: any;
    onChange?: (() => void) | undefined;
    value?: string | undefined;
    label?: string | undefined;
    errors?: never[] | undefined;
    className?: string | undefined;
    required?: boolean | undefined;
    dataTestId?: undefined;
}): React.JSX.Element;
declare namespace RadioComponent {
    namespace propTypes {
        let options: PropTypes.Requireable<any[]>;
        let name: PropTypes.Validator<string>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
        let value: PropTypes.Requireable<NonNullable<string | boolean | null | undefined>>;
        let label: PropTypes.Requireable<string>;
        let errors: PropTypes.Requireable<(string | null | undefined)[]>;
        let className: PropTypes.Requireable<string>;
        let dataTestId: PropTypes.Requireable<string>;
        let required: PropTypes.Requireable<boolean>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
