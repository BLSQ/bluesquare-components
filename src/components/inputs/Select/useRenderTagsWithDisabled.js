import { useCallback } from 'react';

/**
 * Wraps renderTags to inject the Select's disabled state into getTagProps,
 * so Chips receive disabled={true} when the whole Select is disabled.
 *
 * @param {Function} renderTags - (tagValue, getTagProps) => ReactNode
 * @param {boolean} [disabled=false] - Whether the Select is disabled
 * @returns {Function} Wrapped renderTags with disabled injected
 */
export const useRenderTagsWithDisabled = (renderTags, disabled = false) =>
    useCallback(
        (tagValue, getTagProps) =>
            renderTags(tagValue, params => ({
                ...getTagProps(params),
                disabled: disabled ,
            })),
        [renderTags, disabled],
    );
