import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { OutlinedInput, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';
import { styles } from './styles';
import { useDebounce } from '../../../utils/useDebounce';

const SearchInput = ({
    withMarginTop,
    label,
    required,
    keyValue,
    disabled,
    value,
    onEnterPressed,
    onChange,
    classes,
    uid,
    debounce,
}) => {
    const [inputValue, setInputValue] = useState(value);
    const debouncedValue = useDebounce(inputValue, debounce);

    useEffect(() => {
        console.log('new debounce', debouncedValue, debounce);
        onChange(debouncedValue);
    }, [debouncedValue, debounce]);

    return (
        <FormControl withMarginTop={withMarginTop}>
            <InputLabel
                htmlFor={`search-${keyValue}`}
                label={label}
                required={required}
                shrink={value !== undefined && value !== null && value !== ''}
            />
            <OutlinedInput
                disabled={disabled}
                id={uid ? `search-${uid}` : `search-${keyValue}`}
                value={value || ''}
                placeholder=""
                onKeyPress={event => {
                    if (event.which === 13 || event.keyCode === 13) {
                        onEnterPressed();
                    }
                }}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={event => {
                    setInputValue(event.target.value);
                }}
            />
            <div
                tabIndex={0}
                role="button"
                className={classes.searchIcon}
                onClick={() => onEnterPressed()}
            >
                <SearchIcon />
            </div>
        </FormControl>
    );
};

SearchInput.defaultProps = {
    value: '',
    withMarginTop: true,
    disabled: false,
    required: false,
    onEnterPressed: () => {},
    onChange: () => {},
    uid: '',
    label: '',
    debounce: 0,
};

SearchInput.propTypes = {
    withMarginTop: PropTypes.bool,
    keyValue: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    onEnterPressed: PropTypes.func,
    onChange: PropTypes.func,
    uid: PropTypes.string,
    classes: PropTypes.object.isRequired,
    debounce: PropTypes.number,
};

const styledSearchInput = withStyles(styles)(SearchInput);
export { styledSearchInput as SearchInput };
