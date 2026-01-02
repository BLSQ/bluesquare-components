import React, { useState, FunctionComponent } from 'react';
import { OutlinedInput, Tooltip, IconButton } from '@mui/material';
import Edit from '@mui/icons-material/RemoveRedEye';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';
import { useSafeIntl } from '../../../localization/useSafeIntl';
import { MESSAGES } from './messages';
import { useStyles } from './styles';

type Props = {
    keyValue: string;
    errors?: string[];
    label?: string;
    required?: boolean;
    disabled?: boolean;
    multiline?: boolean;
    value?: string;
    onChange?: (value: string) => void;
    displayPassword?: boolean;
    autoComplete?: string;
    dataTestId?: string;
};

export const PasswordInput: FunctionComponent<Props> = ({
    keyValue,
    label = '',
    errors = [],
    required = false,
    value = '',
    disabled = false,
    onChange = () => {},
    multiline = false,
    displayPassword = false,
    autoComplete = 'new-password',
    dataTestId = undefined,
}) => {
    const hasErrors = errors.length >= 1;
    const [showPassword, setShowPassword] = useState(displayPassword);
    const { formatMessage } = useSafeIntl();
    const classes: Record<string, string> = useStyles();

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
                size="small"
                autoComplete={autoComplete}
                multiline={multiline}
                disabled={disabled}
                id={`input-text-${keyValue}`}
                value={value}
                type={showPassword ? 'text' : 'password'}
                onChange={event => onChange(event.target.value)}
                error={hasErrors}
                className={classes.passwordInput}
                date-test={dataTestId}
            />
            <Tooltip
                className={classes.displayPassword}
                disableFocusListener={disabled}
                disableHoverListener={disabled}
                disableTouchListener={disabled}
                placement="bottom"
                title={formatMessage(MESSAGES.displayPassword)}
            >
                <span>
                    <IconButton
                        color={showPassword ? 'primary' : 'inherit'}
                        onClick={() => {
                            setShowPassword(isShowing => !isShowing);
                        }}
                    >
                        <Edit />
                    </IconButton>
                </span>
            </Tooltip>
        </FormControl>
    );
};
