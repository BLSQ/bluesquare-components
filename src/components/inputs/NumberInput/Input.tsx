import React, {
    ChangeEvent,
    FocusEventHandler,
    FunctionComponent,
} from 'react';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {
    IconButton,
    InputAdornment,
    OutlinedInput,
    Stack,
    Tooltip,
} from '@mui/material';

import { useSafeIntl } from '../../../localization/useSafeIntl';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';

import { MESSAGES } from './messages';

const styles = {
    arrowButton: {
        p: 0,
        borderRadius: 0.5,
    },
    arrowIcon: {
        fontSize: 16,
    },
};

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
    label?: string;
    required: boolean;
    disabled: boolean;
    multiline?: boolean;
    autoComplete?: string;
    min: number;
    max: number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onFocus?:
        | FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>
        | undefined;
    placeholder?: string;
    size?: 'small' | 'medium';
    showArrows?: boolean;
    showInfo?: boolean;
    onIncrement?: () => void;
    onDecrement?: () => void;
};

type ArrowsProps = {
    disabled: boolean;
    onIncrement?: () => void;
    onDecrement?: () => void;
};

const Arrows: FunctionComponent<ArrowsProps> = ({
    disabled,
    onIncrement,
    onDecrement,
}) => {
    const { formatMessage } = useSafeIntl();
    return (
        <Stack>
            <IconButton
                aria-label={formatMessage(MESSAGES.increment)}
                disabled={disabled}
                onClick={onIncrement}
                size="small"
                sx={styles.arrowButton}
                tabIndex={-1}
            >
                <KeyboardArrowUpIcon sx={styles.arrowIcon} />
            </IconButton>
            <IconButton
                aria-label={formatMessage(MESSAGES.decrement)}
                disabled={disabled}
                onClick={onDecrement}
                size="small"
                sx={styles.arrowButton}
                tabIndex={-1}
            >
                <KeyboardArrowDownIcon sx={styles.arrowIcon} />
            </IconButton>
        </Stack>
    );
};

export const CustomInput: FunctionComponent<Props> = ({
    keyValue,
    label,
    errors,
    required,
    value,
    disabled,
    onChange,
    onBlur,
    onFocus,
    multiline,
    autoComplete,
    min,
    max,
    placeholder,
    size = 'medium',
    showArrows = false,
    showInfo = true,
    onIncrement,
    onDecrement,
}) => {
    const hasErrors = errors.length >= 1;
    const tooltipMessage = useTooltipMessage(min, max);
    const hasTooltip = showInfo && tooltipMessage !== '';
    return (
        <FormControl errors={errors} size={size}>
            {label && (
                <InputLabel
                    htmlFor={`input-text-${keyValue}`}
                    label={label}
                    required={required}
                    error={hasErrors}
                    shrink={value !== '' || Boolean(placeholder)}
                />
            )}
            <OutlinedInput
                autoComplete={autoComplete}
                multiline={multiline}
                disabled={disabled}
                id={`input-text-${keyValue}`}
                value={value}
                type="text"
                size={size}
                endAdornment={
                    (hasTooltip || showArrows) && (
                        <InputAdornment position="end">
                            {hasTooltip && (
                                <Tooltip title={tooltipMessage}>
                                    <InfoIcon color="action" />
                                </Tooltip>
                            )}
                            {showArrows && (
                                <Arrows
                                    disabled={disabled}
                                    onIncrement={onIncrement}
                                    onDecrement={onDecrement}
                                />
                            )}
                        </InputAdornment>
                    )
                }
                onChange={onChange}
                error={hasErrors}
                placeholder={placeholder}
                onBlur={onBlur}
                onFocus={onFocus}
            />
        </FormControl>
    );
};
