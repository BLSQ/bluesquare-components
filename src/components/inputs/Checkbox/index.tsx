import React, { FunctionComponent } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

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

const CheckboxComponent: FunctionComponent<Props> = ({
    value = false,
    disabled = false,
    label = '',
    onChange = () => {},
    keyValue,
    required = false,
    dataTestId = undefined,
}) => (
    <FormControlLabel
        disabled={disabled}
        control={
            <Checkbox
                id={`check-box-${keyValue}`}
                data-test={dataTestId}
                color="primary"
                checked={value === true}
                onChange={event => onChange(event.target.checked)}
                value="checked"
                disabled={disabled}
            />
        }
        label={`${label}${required ? '*' : ''}`}
    />
);

export { CheckboxComponent as Checkbox };
