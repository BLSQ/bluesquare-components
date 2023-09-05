import React, { FunctionComponent, ChangeEvent } from 'react';
import { OutlinedInput, Tooltip } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

import { useSafeIntl } from '../../../utils/useSafeIntl';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';

import { MESSAGES } from './messages';

const useTooltipMessage = (min: number, max: number): string => {
    const { formatMessage } = useSafeIntl();
    let msg = '';
    if ((min || min === 0) && min !== -Infinity) {
        msg = `${formatMessage(MESSAGES.min)}: ${min}`;
        if (max && max !== Infinity) {
            msg += ' - ';
        }
    }
    if ((max || max === 0) && max !== Infinity) {
        msg += `${formatMessage(MESSAGES.max)}: ${max}`;
    }
    return msg;
};

type Props = {
    keyValue: string;
    errors: string[];
    value: string | number;
    label: string;
    required: boolean;
    disabled: boolean;
    multiline?: boolean;
    autoComplete?: string;
    min: number;
    max: number;
    onChange: (
        // eslint-disable-next-line no-unused-vars
        event: ChangeEvent<HTMLInputElement>,
    ) => void;
};

export const CustomInput: FunctionComponent<Props> = ({
    keyValue,
    label,
    errors,
    required,
    value,
    disabled,
    onChange,
    multiline,
    autoComplete,
    min,
    max,
}) => {
    const hasErrors = errors.length >= 1;
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
                multiline={multiline}
                disabled={disabled}
                id={`input-text-${keyValue}`}
                value={value}
                type="text"
                endAdornment={
                    tooltipMessage !== '' && (
                        <Tooltip title={tooltipMessage}>
                            <InfoIcon color="action" />
                        </Tooltip>
                    )
                }
                onChange={onChange}
                error={hasErrors}
            />
        </FormControl>
    );
};
