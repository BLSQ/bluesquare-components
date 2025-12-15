import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { OutlinedInput, Tooltip, IconButton } from '@mui/material';
import { withStyles } from '@mui/styles';
import Edit from '@mui/icons-material/RemoveRedEye';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';
import { useSafeIntl } from '../../../localization/useSafeIntl';
import { MESSAGES } from './messages';
import { styles } from './styles';

const PasswordInput = ({
    keyValue,
    label = '',
    errors = [],
    required = false,
    value = '',
    disabled = false,
    onChange = () => { },
    multiline = false,
    displayPassword = false,
    classes,
    autoComplete = 'new-password',
    dataTestId = undefined,
}) => {
    const hasErrors = errors.length >= 1;
    const [showPassword, setShowPassword] = useState(displayPassword);
    const intl = useSafeIntl();

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
                title={intl.formatMessage(MESSAGES.displayPassword)}
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

PasswordInput.propTypes = {
    errors: PropTypes.arrayOf(PropTypes.string),
    keyValue: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    multiline: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    displayPassword: PropTypes.bool,
    // tooltipMessage: PropTypes.string,
    classes: PropTypes.object.isRequired,
    autoComplete: PropTypes.string,
    dataTestId: PropTypes.string,
};

const styledPasswordInput = withStyles(styles)(PasswordInput);

export { styledPasswordInput as PasswordInput };
