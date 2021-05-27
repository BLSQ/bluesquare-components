import React from 'react';
import PropTypes from 'prop-types';
import { OutlinedInput } from '@material-ui/core';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';

const TextInput = ({
    keyValue,
    label,
    withMarginTop,
    errors,
    required,
    value,
    disabled,
    onChange,
    multiline,
}) => {
    const hasErrors = errors.length > 1;
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
                // type={type === 'password' && displayPassword ? 'text' : type}
                type="text"
                onChange={event => onChange(keyValue, event.target.value)}
                error={hasErrors}
                // className={type === 'password' ? classes.passwordInput : ''}
            />
            {/* {type === 'password' && (
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
                        color={displayPassword ? 'primary' : 'inherit'}
                        onClick={() => this.toggleDisplayPassword()}
                    >
                        <Edit />
                    </IconButton>
                </span>
            </Tooltip>
        )} */}
        </FormControl>
    );
};

TextInput.defaultProps = {
    value: '',
    errors: [],
    withMarginTop: true,
    multiline: false,
    disabled: false,
    required: false,
    onChange: () => {},
};

TextInput.propTypes = {
    withMarginTop: PropTypes.bool,
    errors: PropTypes.arrayOf(PropTypes.string),
    keyValue: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    multiline: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export { TextInput };
