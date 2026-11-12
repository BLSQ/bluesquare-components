import React, { FunctionComponent } from 'react';
import {
    RadioGroup,
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
} from '@mui/material';

type Props = {
    options?: any[];
    name: string;
    onChange?: (value: string) => void;
    value?: string | boolean;
    label?: string;
    errors?: string[];
    className?: string;
    dataTestId?: string;
    required?: boolean;
    id?: string;
};

const RadioComponent: FunctionComponent<Props> = ({
    options = [],
    name,
    onChange = () => {},
    value = '',
    label = '',
    errors = [],
    className = '',
    required = false,
    dataTestId = undefined,
    id,
}) => (
    <FormControl
        component="fieldset"
        error={errors.length > 0}
        variant="outlined"
    >
        <FormLabel component="legend" style={{ fontSize: 12 }}>
            {`${label}${required ? '*' : ''}`}
        </FormLabel>

        <RadioGroup
            className={className}
            name={name}
            value={value}
            onChange={event => {
                onChange(event.target.value);
            }}
            data-test={dataTestId}
        >
            {options.map((o, index) => (
                <FormControlLabel
                    key={o.value}
                    value={o.value}
                    control={
                        <Radio
                            color="primary"
                            id={index === 0 ? id : undefined}
                        />
                    }
                    label={o.label}
                    disabled={o.disabled}
                />
            ))}
        </RadioGroup>
    </FormControl>
);

export { RadioComponent as Radio };
