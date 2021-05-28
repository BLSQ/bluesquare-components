import React from 'react';
import PropTypes from 'prop-types';
import { OutlinedInput, Tooltip, IconButton } from '@material-ui/core';
import Edit from '@material-ui/icons/Edit';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';
import { useSafeIntl } from '../../../utils/useSafeIntl';
import { MESSAGES } from './messages';

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
    onClick,
    displayPassword,
    // tooltipMessage,
    classNames,
}) => {
    const hasErrors = errors.length > 1;
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
                type={displayPassword ? 'text' : 'password'}
                onChange={event => onChange(event.target.value)}
                error={hasErrors}
                className={classNames.passwordInput}
            />
            <Tooltip
                className={classNames.displayPassword}
                disableFocusListener={disabled}
                disableHoverListener={disabled}
                disableTouchListener={disabled}
                placement="bottom"
                title={intl.formatMessage(MESSAGES.displayPassword)}
            >
                <span>
                    <IconButton
                        color={displayPassword ? 'primary' : 'inherit'}
                        onClick={onClick}
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
    onClick: () => {},
    displayPassword: false,
    // tooltipMessage: 'Display password',
    classNames: {
        passwordInput: '',
        displayPassword: '',
    },
};

PasswordInput.propTypes = {
    withMarginTop: PropTypes.bool,
    errors: PropTypes.arrayOf(PropTypes.string),
    keyValue: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    multiline: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    displayPassword: PropTypes.bool,
    // tooltipMessage: PropTypes.string,
    classNames: PropTypes.object,
};

export { PasswordInput };
