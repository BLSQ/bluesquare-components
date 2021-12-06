import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    OutlinedInput,
    Tooltip,
    IconButton,
    withStyles,
} from '@material-ui/core';
import Edit from '@material-ui/icons/Edit';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { MESSAGES } from './messages';
import { styles } from './styles';

const PasswordInput = ({
    keyValue,
    label,
    withMarginTop,
    errors,
    required,
    value,
    disabled,
    onChange,
    multiline,
    displayPassword,
    classes,
}) => {
    const hasErrors = errors.length >= 1;
    const [showPassword, setShowPassword] = useState(displayPassword);
    const intl = useSafeIntl();

    return (
        <FormControl withMarginTop={withMarginTop} errors={errors}>
            <InputLabel
                htmlFor={`input-text-${keyValue}`}
                label={label}
                required={required}
                error={hasErrors}
                shrink={value !== ''}
            />
            <OutlinedInput
                size="small"
                multiline={multiline}
                disabled={disabled}
                id={`input-text-${keyValue}`}
                value={value}
                type={showPassword ? 'text' : 'password'}
                onChange={event => onChange(event.target.value)}
                error={hasErrors}
                className={classes.passwordInput}
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

PasswordInput.defaultProps = {
    value: '',
    errors: [],
    withMarginTop: true,
    multiline: false,
    disabled: false,
    required: false,
    onChange: () => {},
    displayPassword: false,
    label: '',
};

PasswordInput.propTypes = {
    withMarginTop: PropTypes.bool,
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
};

const styledPasswordInput = withStyles(styles)(PasswordInput);

export { styledPasswordInput as PasswordInput };
