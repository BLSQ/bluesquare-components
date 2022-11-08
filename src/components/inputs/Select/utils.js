import React from 'react';
import Chip from '@material-ui/core/Chip';

export const defaultRenderTags = getLabel => (tagValue, getTagProps) =>
    tagValue.map((option, index) => (
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
        getOptionSelected:
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
