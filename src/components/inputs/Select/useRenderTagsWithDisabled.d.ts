import { ReactNode } from 'react';
import { AutocompleteRenderGetTagProps } from '@mui/material/Autocomplete';

type RenderTags = (
    value: any[],
    getTagProps: AutocompleteRenderGetTagProps,
    ownerState?: unknown,
) => ReactNode;

export declare const useRenderTagsWithDisabled: (
    renderTags: RenderTags,
    disabled?: boolean,
) => RenderTags;
