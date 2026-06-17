import React, { FunctionComponent, ReactNode } from 'react';
import { CircularProgress } from '@mui/material';
import TextField from '@mui/material/TextField';
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
    label = undefined,
    required,
    onBlur,
    errors,
    helperText = null,
    loading,
    dataTestId,
    autoComplete = 'off',
    placeholder = '',
}) => {
    const classes: Record<string, string> = useStyles();
    const htmlInputProps = {
        ...params.slotProps?.htmlInput,
    };
    let inputSlotProps = {
        ...params.slotProps?.input,
    };
    //@ts-ignore
    if (selectedOption?.color) {
        const tags = renderTags([selectedOption], () => {});
        const chip = Array.isArray(tags) ? tags[0] : tags;
        inputSlotProps = {
            ...inputSlotProps,
            startAdornment: (
                <div className={classes.startAdornment}>{chip}</div>
            ),
            style: { color: 'transparent' },
        };
        htmlInputProps.value = '';
    } else if (renderOption && htmlInputProps.value) {
        inputSlotProps = {
            ...inputSlotProps,
            startAdornment: (
                <div className={classes.startAdornment}>
                    {renderOption(
                        {
                            label: htmlInputProps.value,
                        },
                        {},
                    )}
                </div>
            ),
            style: { color: 'transparent' },
        };
        htmlInputProps.value = '';
    }
    return (
        <FormControl errors={errors}>
            <TextField
                id={params.id}
                disabled={disabled || params.disabled}
                fullWidth={params.fullWidth}
                size={params.size}
                variant="outlined"
                label={label ? `${label}${required ? '*' : ''}` : undefined}
                onBlur={onBlur}
                error={errors.length > 0}
                helperText={helperText}
                slotProps={{
                    inputLabel: {
                        classes: {
                            shrink: classes.shrink,
                        },
                        className: classes.inputLabel,
                    },
                    input: {
                        ...inputSlotProps,
                        autoComplete,
                        placeholder,
                        endAdornment: (
                            <>
                                {loading ? (
                                    <CircularProgress
                                        color="inherit"
                                        size={20}
                                    />
                                ) : null}
                                {params.slotProps?.input?.endAdornment}
                            </>
                        ),
                    },
                    htmlInput: {
                        ...htmlInputProps,
                        'data-test': dataTestId,
                    },
                }}
            />
        </FormControl>
    );
};
