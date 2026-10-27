import React from 'react';
import { AutocompleteRenderGetTagProps, Tooltip } from '@mui/material';
import { ColorChip } from '../../chips/ColorChip';
import { dropdownOption } from '.';

/** Minimal option shape needed to render colored chips. */
export type RenderTagOption = {
    color?: string;
};

export const defaultGetLabel = (o: dropdownOption) => (o?.label ? o.label : '');

export const baseRenderTags =
    <T extends RenderTagOption>(getLabel: (option: T) => string) =>
    (tagValue: T[], getTagProps: AutocompleteRenderGetTagProps) =>
        React.Children.toArray(
            tagValue
                .sort((a, b) =>
                    getLabel(a).localeCompare(getLabel(b), undefined, {
                        sensitivity: 'accent',
                    }),
                )
                .map((option, index) => {
                    const tagProps = getTagProps({ index });
                    return (
                        <ColorChip
                            label={getLabel(option)}
                            {...tagProps}
                            color={option.color}
                        />
                    );
                }),
        );

export const defaultRenderTags = baseRenderTags(defaultGetLabel);

export const baseRenderTagsWithTooltip =
    <T extends RenderTagOption>(getLabel: (option: T) => string) =>
    (getTooltipTitle: (option: T) => string) =>
    (tagValue: T[], getTagProps: AutocompleteRenderGetTagProps) =>
        React.Children.toArray(
            tagValue
                .sort((a, b) =>
                    getLabel(a).localeCompare(getLabel(b), undefined, {
                        sensitivity: 'accent',
                    }),
                )
                .map((option, index) => {
                    const tagProps = getTagProps({ index });
                    const title = getTooltipTitle(option);
                    return (
                        <Tooltip title={title}>
                            <ColorChip
                                label={getLabel(option)}
                                {...tagProps}
                                color={option.color}
                            />
                        </Tooltip>
                    );
                }),
        );

export const renderTagsWithTooltip = baseRenderTagsWithTooltip(defaultGetLabel);

export const getExtraProps = (
    getOptionLabel?: (option: any) => string,
    getOptionSelected?: (option: any, value: any) => boolean,
    renderOption?: (
        props: Record<string, any>,
        option: Record<string, any>,
    ) => React.ReactNode,
) => {
    const extraProps: Record<string, any> = {
        getOptionLabel:
            getOptionLabel ||
            ((option: dropdownOption) => option?.label ?? option.toString()),
        isOptionEqualToValue:
            getOptionSelected ||
            ((option: dropdownOption, val: any) => {
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

export const getOption = (value: any, options: dropdownOption[]) =>
    options.find(o => `${o.value}` === `${value}`);

export const getMultiOption = (
    value: any,
    options: dropdownOption[],
    getOptionSelected: (option: any, value: any) => boolean,
): dropdownOption | 0 | undefined =>
    options.find(option => getOptionSelected(option, value));

export const defaultRenderOption = (
    props: Record<string, any>,
    option: dropdownOption,
    getOptionLabel: (option: dropdownOption) => string,
) => (
    <li
        {...props}
        key={`${props.id || option.value || option.id}`}
        style={option.color ? { paddingTop: 4, paddingBottom: 4 } : {}}
    >
        {option.color ? (
            <ColorChip
                label={getOptionLabel(option)}
                color={option.color}
                size="small"
            />
        ) : (
            getOptionLabel(option)
        )}
    </li>
);
