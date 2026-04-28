export function useRenderTagsWithDisabled(renderTags: RenderTags, disabled?: boolean): RenderTags;
export type RenderTags = (value: any[], getTagProps: import("@mui/material/Autocomplete").AutocompleteRenderGetTagProps, ownerState?: unknown) => import("react").ReactNode;
