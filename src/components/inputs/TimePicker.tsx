import React, { FunctionComponent } from 'react';

import { TimePicker as MuiTimePicker } from '@mui/x-date-pickers';

import { TextField } from '@mui/material';
import { FormControl } from './FormControl';

type Props = {
    label?: string;
    value: any;
    required?: boolean;
    disabled?: boolean;
    // eslint-disable-next-line no-unused-vars
    onChange: (newValue: any) => void;
};

export const TimePicker: FunctionComponent<Props> = ({
    label,
    onChange,
    value,
    required = false,
    disabled = false,
}) => (
    <FormControl>
        <MuiTimePicker
            renderInput={props => (
                <TextField
                    {...props}
                    required={required}
                    variant="outlined"
                    InputLabelProps={{
                        // className: classes.label,
                        shrink: Boolean(value),
                    }}
                    helperText={null}
                />
            )}
            ampm={false}
            disabled={disabled}
            label={label}
            value={value}
            onChange={onChange}
        />
    </FormControl>
);
