export function useRenderTagsWithDisabled(renderTags: Function, disabled?: boolean): RenderValue;
export type RenderValue = (value: any[], getItemProps: import("@mui/material/Autocomplete").AutocompleteRenderValueGetItemProps<true>, ownerState?: unknown) => import("react").ReactNode;
