import ClearIcon from '@mui/icons-material/Clear';
import Autocomplete, {
    AutocompleteRenderGetTagProps,
} from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import React, {
    FunctionComponent,
    ReactNode,
    useCallback,
    useMemo,
} from 'react';
import { useKeyPressListener } from '../../../utils/useKeyPressListener';
import { useSafeIntl } from '../../../localization/useSafeIntl';
import { MESSAGES } from './messages';
import { useStyles } from '../styles';
import { TextInput } from './TextInput';
import {
    defaultRenderTags,
    getExtraProps,
    getMultiOption,
    getOption,
    defaultRenderOption,
} from './utils';
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
    useBuiltInErrors?: boolean;
    freeSolo?: boolean;
};

export const MultiSelect: FunctionComponent<Props> = ({
    value,
    keyValue,
    label = '',
    errors = [],
    onChange,
    options = [],
    onBlur = () => {},
    disabled = false,
    clearable = true,
    required = false,
    noOptionsText = MESSAGES.noOptions,
    getOptionLabel,
    getOptionSelected,
    loading = false,
    renderOption,
    renderTags = defaultRenderTags,
    returnFullObject = false, // use this one if you pass array of objects as options and want an array of objects as sected items, not a string of id's
    helperText,
    loadingText = MESSAGES.loadingOptions,
    dataTestId,
    placeholder,
    useBuiltInErrors = true,
}) => {
    const { formatMessage } = useSafeIntl();
    const classes = useStyles();
    const shiftKeyIsDown = useKeyPressListener('Shift');
    //  Handle numeric 0 as value
    const hasValue = Boolean(value) || value === 0;

    const valuesList = useMemo(() => {
        if (!hasValue) return [];
        return Array.isArray(value) ? value : value.split(',');
    }, [value, hasValue]);

    const extraProps = getExtraProps(
        getOptionLabel,
        getOptionSelected,
        renderOption,
    );
    const displayedErrors = useMemo(() => {
        const tempErrors: string[] = [...errors];
        if (hasValue && !loading && useBuiltInErrors) {
            valuesList.forEach(val => {
                const multiOption = getMultiOption(
                    val,
                    options,
                    extraProps.isOptionEqualToValue,
                );
                const missingValueError =
                    !Boolean(multiOption) && multiOption !== 0;
                if (missingValueError && useBuiltInErrors) {
                    tempErrors.push(
                        formatMessage(MESSAGES.oneValueNotFound, {
                            value: `${extraProps.getOptionLabel(val)}`,
                        }) as string,
                    );
                }
            });
        }
        return tempErrors;
    }, [
        value,
        options,
        errors,
        loading,
        hasValue,
        valuesList,
        useBuiltInErrors,
    ]);

    const fixedValue = useMemo(() => {
        if (hasValue) {
            if (returnFullObject) {
                return valuesList;
            }
            return valuesList.map(v => getOption(v, options)).filter(o => o);
        }
        return [];
    }, [options, hasValue, valuesList]);

    const handleChange = useCallback(
        (e, newValue) => {
            if (newValue.length === 0) {
                return onChange(null);
            }
            if (!returnFullObject) {
                return onChange(newValue.map(v => v?.value).join(','));
            }
            return onChange(newValue);
        },
        [onChange, returnFullObject],
    );
    return (
        <Box>
            <Autocomplete
                disabled={disabled}
                noOptionsText={formatMessage(noOptionsText)}
                multiple
                disableCloseOnSelect={shiftKeyIsDown}
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
                        disabled={disabled}
                        label={label}
                        required={required}
                        onBlur={onBlur}
                        errors={displayedErrors}
                        helperText={helperText}
                        loading={loading}
                        dataTestId={dataTestId}
                        placeholder={placeholder}
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
