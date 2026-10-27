import React from 'react';
import { AutocompleteRenderGetTagProps } from '@mui/material';
import { dropdownOption } from '.';
/** Minimal option shape needed to render colored chips. */
export type RenderTagOption = {
    color?: string;
};
export declare const defaultGetLabel: (o: dropdownOption) => string;
export declare const baseRenderTags: <T extends RenderTagOption>(getLabel: (option: T) => string) => (tagValue: T[], getTagProps: AutocompleteRenderGetTagProps) => (string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal)[];
export declare const defaultRenderTags: (tagValue: dropdownOption[], getTagProps: AutocompleteRenderGetTagProps) => (string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal)[];
export declare const baseRenderTagsWithTooltip: <T extends RenderTagOption>(getLabel: (option: T) => string) => (getTooltipTitle: (option: T) => string) => (tagValue: T[], getTagProps: AutocompleteRenderGetTagProps) => (string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal)[];
export declare const renderTagsWithTooltip: (getTooltipTitle: (option: dropdownOption) => string) => (tagValue: dropdownOption[], getTagProps: AutocompleteRenderGetTagProps) => (string | number | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal)[];
export declare const getExtraProps: (getOptionLabel?: (option: any) => string, getOptionSelected?: (option: any, value: any) => boolean, renderOption?: (props: Record<string, any>, option: Record<string, any>) => React.ReactNode) => Record<string, any>;
export declare const getOption: (value: any, options: dropdownOption[]) => dropdownOption | undefined;
export declare const getMultiOption: (value: any, options: dropdownOption[], getOptionSelected: (option: any, value: any) => boolean) => dropdownOption | 0 | undefined;
export declare const defaultRenderOption: (props: Record<string, any>, option: dropdownOption, getOptionLabel: (option: dropdownOption) => string) => React.JSX.Element;
