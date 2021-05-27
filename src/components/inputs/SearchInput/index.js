import React from 'react';
import PropTypes from 'prop-types';
import { OutlinedInput } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';

const SearchInput = ({
    withMarginTop,
    label,
    required,
    keyValue,
    disabled,
    value,
    // errors,
    onEnterPressed,
    onChange,
    classes,
    isFocused,
    uid,
}) => (
    <FormControl withMarginTop={withMarginTop}>
        <InputLabel
            htmlFor={`search-${keyValue}`}
            label={label}
            required={required}
            shrink={value !== undefined && value !== null && value !== ''}
            isFocused={isFocused}
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
            onChange={event => onChange(event.target.value)}
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

SearchInput.defaultProps = {
    value: '',
    withMarginTop: true,
    disabled: false,
    required: false,
    onEnterPressed: () => {},
    onChange: () => {},
    classes: {
        inputRoot: '',
        inputInput: '',
        searchIcon: '',
    },
    isFocused: false,
    uid: '',
};

SearchInput.propTypes = {
    withMarginTop: PropTypes.bool,
    keyValue: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    onEnterPressed: PropTypes.func,
    onChange: PropTypes.func,
    classes: PropTypes.object,
    isFocused: PropTypes.bool,
    uid: PropTypes.string,
};
export { SearchInput };
