import React, { useState, useEffect, FunctionComponent } from 'react';
import { OutlinedInput, Tooltip } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';
import { formatThousand, formatValue } from './utils';
import { useTooltipMessage } from './hooks';

type Props = {
    errors?: string[];
    keyValue: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    multiline?: boolean;
    value?: string | number;
    // eslint-disable-next-line no-unused-vars
    onChange?: (value: string | number) => void;
    autoComplete?: string;
    min?: number;
    max?: number;
    markThousands?: boolean;
    locale?: string;
};

export const NumberInput: FunctionComponent<Props> = ({
    keyValue,
    label = '',
    errors = [],
    required = false,
    value = '',
    disabled = false,
    onChange = () => null,
    multiline = false,
    autoComplete = 'off',
    min,
    max,
    markThousands = false,
    locale = 'EN',
}) => {
    const formatter = markThousands ? formatThousand : formatValue;
    const hasErrors = errors.length >= 1;
    const [formattedValue, setFormattedValue] = useState(
        formatter({ value, min, max, locale }),
    );
    console.log('rawValue', value);

    useEffect(() => {
        const formatted = formatter({
            value,
            min,
            max,
            previousValue: formattedValue,
            locale,
        });
        console.log('old value', formattedValue, 'new value', formatted);
        if (formatted !== formattedValue) {
            // the value is already checked against min and max by the formatted function
            setFormattedValue(formatted);
        }
    }, [value, formattedValue, locale, formatter, min, max, markThousands]);

    const tooltipMessage = useTooltipMessage(min, max);
    return (
        <FormControl errors={errors}>
            <InputLabel
                htmlFor={`input-text-${keyValue}`}
                label={label}
                required={required}
                error={hasErrors}
                shrink={value !== ''}
            />
            <OutlinedInput
                autoComplete={autoComplete}
                // The typing complains, but the prop can be passed
                // @ts-ignore
                size="small"
                multiline={multiline}
                disabled={disabled}
                id={`input-text-${keyValue}`}
                value={formattedValue}
                type="text"
                endAdornment={
                    tooltipMessage !== '' && (
                        <Tooltip title={tooltipMessage}>
                            <InfoIcon color="action" />
                        </Tooltip>
                    )
                }
                onChange={event => {
                    const updatedValue = formatter({
                        value: event.target.value,
                        min,
                        max,
                        previousValue: formattedValue,
                        locale,
                    });
                    if (updatedValue !== formattedValue) {
                        setFormattedValue(updatedValue);
                        onChange(updatedValue);
                    }
                }}
                error={hasErrors}
            />
        </FormControl>
    );
};
