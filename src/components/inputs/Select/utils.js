import React from 'react';
import Chip from '@mui/material/Chip';

export const defaultRenderTags = getLabel => (tagValue, getTagProps) =>
    tagValue
        .sort((a, b) => getLabel(a).localeCompare(getLabel(b)))
        .map((option, index) => (
            <Chip
                color="secondary"
                style={{
                    backgroundColor: option.color,
                    color: 'white',
                }}
                label={getLabel(option)}
                {...getTagProps({ index })}
            />
        ));

export const getExtraProps = (
    getOptionLabel,
    getOptionSelected,
    renderOption,
) => {
    const extraProps = {
        getOptionLabel:
            getOptionLabel || (option => option?.label ?? option.toString()),
        isOptionEqualToValue:
            getOptionSelected ||
            ((option, val) => {
                if (val?.value) {
                    return `${option.value}` === `${val.value}`;
                }
                if (val) {
                    return `${option.value}` === `${val}`;
                }
                return false;
            }),
    };

    if (renderOption) {
        extraProps.renderOption = renderOption;
    }
    return extraProps;
};

export const getOption = (value, options) =>
    options.find(o => `${o.value}` === `${value}`);

export const getMultiOption = (value, options, getOptionSelected) =>
    options.find(option => getOptionSelected(option, value));
