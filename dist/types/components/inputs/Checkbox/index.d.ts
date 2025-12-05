export { CheckboxComponent as Checkbox };
/**
 * We use JSDoc here to define the types for TypeScript,
 * specifically to ensure onChange is known to accept a boolean argument.
 * * @param {Object} props
 * @param {boolean} [props.value]
 * @param {boolean} [props.disabled]
 * @param {string} [props.label]
 * @param {(checked: boolean) => void} [props.onChange]
 * @param {string} props.keyValue
 * @param {boolean} [props.required]
 * @param {string} [props.dataTestId]
 */
declare function CheckboxComponent({ value, disabled, label, onChange, keyValue, required, dataTestId, }: {
    value?: boolean | undefined;
    disabled?: boolean | undefined;
    label?: string | undefined;
    onChange?: ((checked: boolean) => void) | undefined;
    keyValue: string;
    required?: boolean | undefined;
    dataTestId?: string | undefined;
}): React.JSX.Element;
declare namespace CheckboxComponent {
    namespace propTypes {
        let value: PropTypes.Requireable<boolean>;
        let disabled: PropTypes.Requireable<boolean>;
        let required: PropTypes.Requireable<boolean>;
        let label: PropTypes.Requireable<string>;
        let dataTestId: PropTypes.Requireable<string>;
        let onChange: PropTypes.Requireable<(...args: any[]) => any>;
        let keyValue: PropTypes.Validator<string>;
    }
}
import React from 'react';
import PropTypes from 'prop-types';
