import { FunctionComponent } from 'react';
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
type Props = {
    value?: boolean;
    disabled?: boolean;
    required?: boolean;
    label?: string;
    dataTestId?: string;
    onChange?: (checked: boolean) => void;
    keyValue: string;
};
declare const CheckboxComponent: FunctionComponent<Props>;
export { CheckboxComponent as Checkbox };
