import React, { FunctionComponent, useEffect, useRef, useState } from 'react';

import { FormHelperText, InputLabel } from '@mui/material';
import { makeStyles } from '@mui/styles';
import classnames from 'classnames';
import { useDebounce } from 'use-debounce';
import { useSkipEffectOnMount } from '../../../utils/useSkipEffectOnMount';
import { FormControl } from '../FormControl';
import { commonStyles } from '../../../styles/iaso/common';


type Props = {
    value?: string;
    label: string;
    onChange: (newValue: string) => void;
    errors?: string[];
    required?: boolean;
    debounceTime?: number; // debounce time in ms
    disabled?: boolean;
    helperText?: string;
    dataTestId?:string
};

const useStyles = makeStyles(theme => ({
    inputLabelFocus: {
        color: theme.palette.primary.main,
    },
    inputLabel: {
        //@ts-ignore
        ...commonStyles.inputLabel,
        left: 4,
        backgroundColor: 'white',
    },
    inputLabelShrink: {
        transform: 'translate(14px, -5px) scale(0.75) !important',
    },
    textArea: {
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        minHeight: '100px',
        padding: theme.spacing(2),
        outline: 'none',
        borderRadius: 5,
        fontSize: 16,
        fontFamily: '"Roboto", "Arial", sans-serif',
        border: `1px solid rgba(0, 0, 0, 0.23)`,
        '&:hover': {
            border: `1px solid rgba(0, 0, 0, 0.87)`,
        },
        '&:focus': {
            border: `1px solid ${theme.palette.primary.main}`,
        },
    },
    errorArea: {
        border: `1px solid ${theme.palette.error.main}`,
        '&:focus': {
            border: `1px solid ${theme.palette.error.main}`,
        },
        '&:hover': {
            border: `1px solid ${theme.palette.error.main}`,
        },
    },
    errorText: { color: theme.palette.error.main },
    // @ts-ignore
    disabledLabel: { backgroundColor: theme.palette.ligthGray.background },
    disabledTextArea: {
        '&:hover': {
            // @ts-ignore
            border: `1px solid rgba(0, 0, 0, 0.23)`,
        },
        // @ts-ignore
        backgroundColor: theme.palette.ligthGray.background,
    },
}));

export const TextArea: FunctionComponent<Props> = ({
    value,
    onChange,
    label,
    dataTestId='textarea',
    errors = [],
    required = false,
    debounceTime = 0,
    disabled = false,
    helperText = undefined,
}) => {
    const classes: Record<string, string> = useStyles();
    const [focus, setFocus] = useState<boolean>(false);
    const hasErrors = errors.length > 0;
    const prevValue = useRef<string|undefined>('');
    const prevDebounced = useRef<string|undefined>('');
    const [textValue, setTextValue] = useState<string>(value ?? '');
    const [debouncedValue] = useDebounce(textValue, debounceTime);

    // Reset state when value changes to prevent wrongly persisting the state value
    useEffect(() => {
        if (value !== prevValue.current) {
            setTextValue(value ?? '');
            prevValue.current = value;
        }
    }, [value]);

    useSkipEffectOnMount(() => {
        if (debouncedValue !== prevDebounced.current) {
            // Only call onChange if debouncedValue has been updated to avoid unwanted overwrites
            prevDebounced.current = debouncedValue;
            onChange(debouncedValue);
        }
    }, [debouncedValue, onChange, prevValue.current]);

    return (
        <FormControl errors={errors}>
            <InputLabel
                shrink={Boolean(textValue) || focus}
                className={classnames(
                    classes.inputLabel,
                    focus && classes.inputLabelFocus,
                    Boolean(value) && classes.inputLabelShrink,
                    hasErrors && classes.errorText,
                    disabled && classes.disabledLabel,
                )}
                required={required}
            >
                {label}
            </InputLabel>
            <textarea
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                className={classnames(
                    classes.textArea,
                    hasErrors && classes.errorArea,
                    disabled && classes.disabledTextArea,
                )}
                onChange={e => {
                    setTextValue(e.target.value);
                }}
                value={textValue}
                disabled={disabled}
                data-test={dataTestId}
            />
            <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
    );
};
