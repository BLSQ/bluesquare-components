import React, { useState, useMemo } from 'react';
import { defineMessages } from 'react-intl';
import PropTypes from 'prop-types';
import { OutlinedInput, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton as IconButtonComponent } from '../../buttons/IconButton';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';

import { styles } from './styles';
import { useSkipEffectOnMount } from '../../../utils/useSkipEffectOnMount';

const MESSAGES = defineMessages({
    clear: {
        id: 'blsq.treeview.search.options.label.clear',
        defaultMessage: 'clear',
    },
    search: {
        id: 'blsq.table.filter.search',
        defaultMessage: 'search',
    },
});

const SearchInput = ({
    label,
    required,
    keyValue,
    disabled,
    clearable,
    value,
    onEnterPressed,
    onChange,
    classes,
    uid,
    errors = [],
    autoComplete,
}) => {
    const hasErrors = errors.length >= 1;

    // use local state to avoid re render on value prop change, avoiding special chars combinaison like "ê", "î" => IA-1432
    const [localValue, setLocalValue] = useState(value || '');
    const hasClearIcon = useMemo(() => value !== '', [value]);
    const onClear = () => {
        setLocalValue('');
    };

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
                autoComplete={autoComplete}
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
                    <>
                        {clearable && hasClearIcon && (
                            <IconButtonComponent
                                size="small"
                                onClick={onClear}
                                icon="clear"
                                tooltipMessage={MESSAGES.clear}
                            />
                        )}

                        <div
                            className={classes.searchIconWrapper}
                            tabIndex={0}
                            role="button"
                            onClick={() => onEnterPressed()}
                        >
                            <SearchIcon />
                        </div>
                    </>
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
    clearable: true,
    required: false,
    onEnterPressed: () => {},
    onChange: () => {},
    uid: '',
    label: '',
    errors: [],
    autoComplete: 'off',
};

SearchInput.propTypes = {
    keyValue: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    clearable: PropTypes.bool,
    value: PropTypes.string,
    onEnterPressed: PropTypes.func,
    onChange: PropTypes.func,
    uid: PropTypes.string,
    classes: PropTypes.object.isRequired,
    errors: PropTypes.arrayOf(PropTypes.string),
    autoComplete: PropTypes.string,
};

const styledSearchInput = withStyles(styles)(SearchInput);
export { styledSearchInput as SearchInput };
