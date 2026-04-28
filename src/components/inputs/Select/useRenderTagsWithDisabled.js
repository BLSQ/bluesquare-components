import { useCallback } from 'react';

/**
 * @typedef {(value: any[], getTagProps: import('@mui/material/Autocomplete').AutocompleteRenderGetTagProps, ownerState?: unknown) => import('react').ReactNode} RenderTags
 */

/**
 * Wraps renderTags to inject the Select's disabled state into getTagProps,
 * so Chips receive disabled={true} when the whole Select is disabled.
 *
 * @param {RenderTags} renderTags - (tagValue, getTagProps) => ReactNode
 * @param {boolean} [disabled=false] - Whether the Select is disabled
 * @returns {RenderTags} Wrapped renderTags with disabled injected
 */
export const useRenderTagsWithDisabled = (renderTags, disabled = false) =>
    useCallback(
        (tagValue, getTagProps, ownerState) =>
            renderTags(tagValue, params => ({
                ...getTagProps(params),
                disabled,
            }), ownerState),
        [renderTags, disabled],
    );
