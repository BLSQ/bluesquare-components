import { ReactNode } from 'react';
import { AutocompleteRenderValueGetItemProps } from '@mui/material/Autocomplete';

type RenderValue = (
    value: any[],
    getItemProps: AutocompleteRenderValueGetItemProps<true>,
    ownerState?: unknown,
) => ReactNode;

export declare const useRenderTagsWithDisabled: (
    renderValue: RenderValue,
    disabled?: boolean,
) => RenderValue;
