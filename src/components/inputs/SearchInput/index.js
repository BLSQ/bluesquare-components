import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { OutlinedInput, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';
import { styles } from './styles';
import { useSkipEffectOnMount } from '../../../utils/useSkipEffectOnMount';

const SearchInput = ({
    label,
    required,
    keyValue,
    disabled,
    value,
    onEnterPressed,
    onChange,
    classes,
    uid,
    errors = [],
}) => {
    const hasErrors = errors.length >= 1;
    // use local state to avoid re render on value prop change, avoiding special chars combinaison like "ê", "î" => IA-1432
    const [localValue, setLocalValue] = useState(value || '');

    useSkipEffectOnMount(() => {
        onChange(localValue);
    }, [localValue]);

    useSkipEffectOnMount(() => {
        if (value !== localValue) {
            setLocalValue(value);
        }
    }, [value]);

    return (
        <FormControl errors={errors}>
            <InputLabel
                htmlFor={`search-${keyValue}`}
                label={label}
                required={required}
                shrink={value !== undefined && value !== null && value !== ''}
                error={hasErrors}
            />
            <OutlinedInput
                disabled={disabled}
                error={hasErrors}
                id={uid ? `search-${uid}` : `search-${keyValue}`}
                value={localValue}
                placeholder=""
                onKeyPress={event => {
                    if (
                        event.which === 13 ||
                        event.keyCode === 13 ||
                        event.key === 'Enter'
                    ) {
                        onEnterPressed();
                    }
                }}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                endAdornment={
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={() => onEnterPressed()}
                    >
                        <SearchIcon />
                    </div>
                }
                inputProps={{
                    'aria-label': 'search',
                }}
                onChange={event => setLocalValue(event.target.value)}
            />
        </FormControl>
    );
};

SearchInput.defaultProps = {
    value: '',
    disabled: false,
    required: false,
    onEnterPressed: () => {},
    onChange: () => {},
    uid: '',
    label: '',
    errors: [],
};

SearchInput.propTypes = {
    keyValue: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    onEnterPressed: PropTypes.func,
    onChange: PropTypes.func,
    uid: PropTypes.string,
    classes: PropTypes.object.isRequired,
    errors: PropTypes.arrayOf(PropTypes.string),
};

const styledSearchInput = withStyles(styles)(SearchInput);
export { styledSearchInput as SearchInput };
