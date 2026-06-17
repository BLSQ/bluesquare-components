import { useCallback } from 'react';

/**
 * @typedef {(value: any[], getItemProps: import('@mui/material/Autocomplete').AutocompleteRenderValueGetItemProps<true>, ownerState?: unknown) => import('react').ReactNode} RenderValue
 */

/**
 * Wraps renderTags/renderValue to inject the Select's disabled state into getItemProps,
 * so Chips receive disabled={true} when the whole Select is disabled.
 *
 * @param {Function} renderTags - (tagValue, getItemProps) => ReactNode
 * @param {boolean} [disabled=false] - Whether the Select is disabled
 * @returns {RenderValue} Wrapped renderValue with disabled injected
 */
export const useRenderTagsWithDisabled = (renderTags, disabled = false) =>
    useCallback(
        (tagValue, getItemProps, ownerState) =>
            renderTags(
                tagValue,
                params => ({
                    ...getItemProps(params),
                    disabled,
                }),
                ownerState,
            ),
        [renderTags, disabled],
    );
