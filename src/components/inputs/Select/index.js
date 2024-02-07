import React from 'react';
import PropTypes from 'prop-types';

import { SingleSelect } from './single';
import { MultiSelect } from './multi';
import {
    baseRenderTags,
    defaultRenderTags,
    renderTagsWithTooltip,
    baseRenderTagsWithTooltip,
} from './utils';
import { MESSAGES } from './messages';

const SelectCustom = props => {
    if (props.multi) {
        return <MultiSelect {...props} />;
    }
    return <SingleSelect {...props} />;
};

SelectCustom.defaultProps = {
    multi: false,
    value: undefined,
    errors: [],
    label: undefined,
    disabled: false,
    clearable: true,
    required: false,
    loading: false,
    options: [],
    onBlur: () => {},
    getOptionSelected: null,
    getOptionLabel: null,
    renderOption: null,
    noOptionsText: MESSAGES.noOptions,
    loadingText: MESSAGES.loadingOptions,
    helperText: undefined,
    renderTags: defaultRenderTags,
    returnFullObject: false, // use this one if you pass array of objects as options and want an array of objects as sected items, not a string of id's
    placeholder: undefined,
};

SelectCustom.propTypes = {
    multi: PropTypes.bool,
    errors: PropTypes.arrayOf(PropTypes.string),
    keyValue: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    clearable: PropTypes.bool,
    value: PropTypes.any,
    onBlur: PropTypes.func,
    loadingText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    noOptionsText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    helperText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    options: PropTypes.array,
    loading: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    getOptionLabel: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    getOptionSelected: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    renderOption: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    renderTags: PropTypes.func,
    returnFullObject: PropTypes.bool,
    placeholder: PropTypes.string,
};

export {
    SelectCustom as Select,
    baseRenderTags as renderTags,
    renderTagsWithTooltip,
    baseRenderTagsWithTooltip,
};
