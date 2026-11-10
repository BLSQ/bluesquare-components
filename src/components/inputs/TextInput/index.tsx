import React, { FunctionComponent } from 'react';
import { OutlinedInput } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';

const styles = () => ({
    input: {
        minHeight: 56,
    },
});
const useStyles = makeStyles(styles);

type Props = {
    keyValue: string;
    errors?: string[];
    label?: string;
    required?: boolean;
    disabled?: boolean;
    multiline?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    autoComplete?: string;
    placeholder?: string;
    dataTestId?: string;
    id?: string;
};

export const TextInput: FunctionComponent<Props> = ({
    keyValue,
    label = undefined,
    errors = [],
    required = false,
    value = '',
    disabled = false,
    onChange = () => {},
    multiline = false,
    autoComplete = 'off',
    placeholder = undefined,
    dataTestId = undefined,
    id,
}) => {
    const hasErrors = errors.length >= 1;
    const classes = useStyles();
    const inputId = id ?? `input-text-${keyValue}`;
    return (
        <FormControl errors={errors}>
            {label && (
                <InputLabel
                    htmlFor={inputId}
                    label={label}
                    required={required}
                    error={hasErrors}
                    shrink={value !== ''}
                />
            )}
            <OutlinedInput
                size="small"
                className={classes.input}
                autoComplete={autoComplete}
                multiline={multiline}
                disabled={disabled}
                id={inputId}
                value={value}
                type="text"
                onChange={event => onChange(event.target.value)}
                error={hasErrors}
                placeholder={placeholder}
                data-test={dataTestId ?? ''}
            />
        </FormControl>
    );
};
