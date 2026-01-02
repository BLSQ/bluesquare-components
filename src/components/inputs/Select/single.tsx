import React, {
    FunctionComponent,
    ReactNode,
    useCallback,
    useMemo,
} from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import Autocomplete, {
    AutocompleteRenderGetTagProps,
} from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { useSafeIntl } from '../../../localization/useSafeIntl';
import { useStyles } from '../styles';
import { TextInput } from './TextInput';
import {
    defaultRenderTags,
    getExtraProps,
    getOption,
    defaultRenderOption,
} from './utils';
import { MESSAGES } from './messages';
import { IntlMessage } from '../../../types/types';

type Props = {
    keyValue: string;
    onChange: (value: any) => void;
    errors?: string[];
    label?: string;
    value?: any;
    required?: boolean;
    disabled?: boolean;
    clearable?: boolean;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    loadingText?: IntlMessage;
    noOptionsText?: IntlMessage;
    helperText?: ReactNode;
    options?: any[];
    loading?: boolean;
    getOptionLabel?: any;
    getOptionSelected?: any;
    renderOption?: (
        props: Record<string, any>,
        option: Record<string, any>,
    ) => React.ReactNode;
    renderTags?: (
        value: any[],
        getTagProps: AutocompleteRenderGetTagProps,
    ) => React.ReactNode;
    returnFullObject?: boolean;
    placeholder?: string;
    dataTestId?: string;
    freeSolo?: boolean;
    useBuiltInErrors?: boolean;
};

export const SingleSelect: FunctionComponent<Props> = ({
    keyValue,
    onChange,
    value,
    label,
    helperText,
    placeholder,
    dataTestId,
    getOptionLabel,
    getOptionSelected,
    renderOption,
    renderTags = defaultRenderTags,
    errors = [],
    options = [],
    onBlur = () => {},
    disabled = false,
    clearable = true,
    required = false,
    noOptionsText = MESSAGES.noOptions,
    loading = false,
    loadingText = MESSAGES.loadingOptions,
    returnFullObject = false, // use this one if you pass array of objects as options and want an array of objects as sected items, not a string of id's
    freeSolo = false,
    useBuiltInErrors = true,
}) => {
    const { formatMessage } = useSafeIntl();
    const classes = useStyles();
    //  Handle numeric 0 as value
    const hasValue = Boolean(value) || value === 0;

    const displayedErrors = useMemo(() => {
        const tempErrors: string[] = [...errors];
        if (!freeSolo) {
            const missingValueError = !getOption(value, options);
            if (hasValue && !loading && missingValueError && useBuiltInErrors) {
                tempErrors.push(
                    formatMessage(MESSAGES.valueNotFound) as string,
                );
            }
        }
        return tempErrors;
    }, [value, options, errors, loading, hasValue, useBuiltInErrors]);

    const fixedValue = useMemo(
        () => (hasValue ? (getOption(value, options) ?? value) : null),
        [value, options, hasValue],
    );

    const handleChange = useCallback(
        (_, newValue) => onChange(newValue?.value ?? null),
        [onChange, returnFullObject],
    );

    const extraProps = getExtraProps(
        getOptionLabel,
        getOptionSelected,
        renderOption,
    );
    const handleInputChange = useCallback(
        (_, newInputValue) => freeSolo && onChange(newInputValue),
        [onChange, returnFullObject],
    );

    return (
        <Box>
            <Autocomplete
                disabled={disabled}
                freeSolo={freeSolo}
                onInputChange={handleInputChange}
                noOptionsText={formatMessage(noOptionsText)}
                multiple={false}
                id={keyValue}
                disableClearable={!clearable}
                options={options}
                value={fixedValue}
                onChange={handleChange}
                loading={loading}
                loadingText={formatMessage(loadingText)}
                clearIcon={<ClearIcon />}
                renderTags={renderTags}
                renderInput={params => (
                    <TextInput
                        params={params}
                        renderOption={renderOption}
                        renderTags={renderTags}
                        selectedOption={fixedValue}
                        disabled={disabled}
                        label={label}
                        required={required}
                        onBlur={onBlur}
                        placeholder={placeholder}
                        errors={displayedErrors}
                        helperText={helperText}
                        loading={loading}
                        dataTestId={dataTestId}
                    />
                )}
                classes={{
                    popupIndicator: classes.popupIndicator,
                    clearIndicator: classes.clearIndicator,
                    hasClearIcon: classes.hasClearIcon,
                }}
                renderOption={(props, option) =>
                    defaultRenderOption(
                        props,
                        option,
                        extraProps.getOptionLabel,
                    )
                }
                {...extraProps}
            />
        </Box>
    );
};
