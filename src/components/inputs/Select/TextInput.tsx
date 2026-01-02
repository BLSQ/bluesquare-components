import React, { FunctionComponent, ReactNode } from 'react';
import TextField from '@mui/material/TextField';
import { CircularProgress } from '@mui/material';
import { FormControl } from '../FormControl';
import { useStyles } from '../styles';

type Props = {
    renderOption?: (
        props: Record<string, any>,
        option: Record<string, any>,
    ) => React.ReactNode;
    renderTags?: (value: any[], getTagProps: any) => React.ReactNode;
    selectedOption?: Record<string, any> | number | string;
    params: Record<string, any>;
    disabled: boolean;
    label?: string;
    required: boolean;
    onBlur: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    errors: string[];
    helperText?: string | ReactNode;
    loading: boolean;
    autoComplete?: 'on' | 'off';
    placeholder?: string;
    dataTestId?: string;
};

export const TextInput: FunctionComponent<Props> = ({
    params,
    renderOption,
    renderTags = () => {},
    selectedOption,
    disabled,
    label,
    required,
    onBlur,
    errors,
    helperText,
    loading,
    dataTestId,
    autoComplete = 'off',
    placeholder = '',
}) => {
    const classes: Record<string, string> = useStyles();
    const paramsCopy = {
        ...params,
    };
    let inputExtraProps = {};
    //@ts-ignore
    if (selectedOption?.color) {
        const tags = renderTags([selectedOption], () => {});
        const chip = Array.isArray(tags) ? tags[0] : tags;
        inputExtraProps = {
            startAdornment: (
                <div className={classes.startAdornment}>{chip}</div>
            ),
            style: { color: 'transparent' },
        };
        paramsCopy.inputProps.value = '';
    } else if (renderOption && params.inputProps.value) {
        inputExtraProps = {
            startAdornment: (
                <div className={classes.startAdornment}>
                    {renderOption(
                        {
                            label: params.inputProps.value,
                        },
                        {},
                    )}
                </div>
            ),
            style: { color: 'transparent' },
        };
        paramsCopy.inputProps.value = '';
    }
    return (
        <FormControl errors={errors}>
            <TextField
                {...paramsCopy}
                variant="outlined"
                disabled={disabled}
                label={label ? `${label}${required ? '*' : ''}` : undefined}
                onBlur={onBlur}
                error={errors.length > 0}
                InputLabelProps={{
                    classes: {
                        shrink: classes.shrink,
                    },
                    className: classes.inputLabel,
                }}
                helperText={helperText}
                InputProps={{
                    ...params.InputProps,
                    autoComplete,
                    placeholder,
                    'data-test': dataTestId,
                    endAdornment: (
                        <>
                            {loading ? (
                                <CircularProgress color="inherit" size={20} />
                            ) : null}
                            {params.InputProps.endAdornment}
                        </>
                    ),
                    ...inputExtraProps,
                }}
            />
        </FormControl>
    );
};
