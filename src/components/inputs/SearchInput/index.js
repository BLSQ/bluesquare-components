import React from 'react';
import PropTypes from 'prop-types';
import { OutlinedInput, withStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { FormControl } from '../FormControl';
import { InputLabel } from '../InputLabel';
import { styles } from './styles';

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
    errors = [],
}) => {
    const hasErrors = errors.length >= 1;
    return (
        <FormControl withMarginTop={withMarginTop} errors={errors}>
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
                value={value || ''}
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
                        // className={classes.searchIcon}
                        onClick={() => onEnterPressed()}
                    >
                        <SearchIcon />
                    </div>
                }
                inputProps={{
                    'aria-label': 'search',
                }}
                onChange={event => onChange(event.target.value)}
            />
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
    errors: [],
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
    errors: PropTypes.arrayOf(PropTypes.string),
};

const styledSearchInput = withStyles(styles)(SearchInput);
export { styledSearchInput as SearchInput };
