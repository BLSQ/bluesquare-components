import React from 'react';
import Chip from '@mui/material/Chip';
import { Tooltip } from '@mui/material';

export const defaultGetLabel = o => (o?.label ? o.label : '');

export const baseRenderTags = getLabel => (tagValue, getTagProps) =>
    tagValue
        .sort((a, b) =>
            getLabel(a).localeCompare(b.label, undefined, {
                sensitivity: 'accent',
            }),
        )
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

export const defaultRenderTags = baseRenderTags(defaultGetLabel);

export const baseRenderTagsWithTooltip =
    getLabel => getTooltipTitle => (tagValue, getTagProps) =>
        tagValue
            .sort((a, b) =>
                getLabel(a).localeCompare(getLabel(b), undefined, {
                    sensitivity: 'accent',
                }),
            )
            .map((option, index) => {
                const title = getTooltipTitle(option);
                return (
                    <Tooltip title={title} key={`${title}-${index}`}>
                        <Chip
                            color="secondary"
                            style={{
                                backgroundColor: option.color,
                                color: 'white',
                            }}
                            label={getLabel(option)}
                            {...getTagProps({ index })}
                        />
                    </Tooltip>
                );
            });

export const renderTagsWithTooltip = baseRenderTagsWithTooltip(defaultGetLabel);

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
                // Handle zero as value
                if (val?.value || val?.value === 0) {
                    return `${option.value}` === `${val.value}`;
                }
                // Handle zero as value
                if (val || val === 0) {
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

export const defaultRenderOption = (props, option, getOptionLabel) => (
    <li
        {...props}
        key={`${props.id || option.value || option.id}`}
        style={option.color ? { paddingTop: 4, paddingBottom: 4 } : {}}
    >
        {option.color ? (
            <Chip
                label={getOptionLabel(option)}
                sx={{
                    backgroundColor: option.color,
                    color: 'white',
                    margin: 0,
                }}
                size="small"
            />
        ) : (
            getOptionLabel(option)
        )}
    </li>
);
