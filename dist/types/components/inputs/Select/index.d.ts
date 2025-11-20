/**
 * Select Component - A versatile dropdown selector with single and multi-select modes
 *
 * ## Key Customization Props
 *
 * ### renderOption vs renderTags - What's the difference?
 *
 * **renderOption**: Controls how options appear in the DROPDOWN LIST (when opened)
 * - Applies to: Both single and multi-select
 * - Use when: You want to customize how items look in the dropdown menu
 * - Example: Add icons, colors, or custom styling to dropdown items
 *
 * **renderTags**: Controls how SELECTED items appear as chips in the INPUT FIELD (multi-select only)
 * - Applies to: Multi-select only
 * - Use when: You want to customize the appearance of selected chips/tags
 * - Example: Change chip colors, add tooltips, or custom chip styling
 *
 * ## Visual Guide
 * ```
 * ┌─────────────────────────┐
 * │ [Tag1] [Tag2]      ▼    │ ← renderTags controls these chips
 * └─────────────────────────┘
 * ┌─────────────────────────┐
 * │ ✓ Option 1              │ ← renderOption controls these items
 * │   Option 2              │
 * │   Option 3              │
 * └─────────────────────────┘
 * ```
 *
 * @component
 * @example
 * // Single select
 * <Select
 *   keyValue="country"
 *   options={[{ value: 'fr', label: 'France' }, { value: 'us', label: 'USA' }]}
 *   value="fr"
 *   onChange={(value) => console.log(value)}
 * />
 *
 * @example
 * // Multi select with custom renderTags
 * <Select
 *   multi
 *   keyValue="tags"
 *   options={[{ value: 1, label: 'Tag 1', color: '#ff0000' }, { value: 2, label: 'Tag 2', color: '#00ff00' }]}
 *   value="1,2"
 *   onChange={(value) => console.log(value)}
 *   renderTags={(tagValue, getTagProps) =>
 *     tagValue.map((option, index) => (
 *       <Chip
 *         label={option.label}
 *         style={{ backgroundColor: option.color }}
 *         {...getTagProps({ index })}
 *       />
 *     ))
 *   }
 * />
 *
 * @example
 * // Custom renderOption for dropdown items
 * <Select
 *   keyValue="status"
 *   options={[{ value: 1, label: 'Active', icon: '✓' }, { value: 2, label: 'Inactive', icon: '✗' }]}
 *   value={1}
 *   onChange={(value) => console.log(value)}
 *   renderOption={(props, option) => (
 *     <li {...props}>
 *       <span>{option.icon} {option.label}</span>
 *     </li>
 *   )}
 * />
 */
declare function SelectCustom(props: any): React.JSX.Element;
declare namespace SelectCustom {
    namespace defaultProps {
        export let multi: boolean;
        export let value: undefined;
        export let errors: never[];
        export let label: undefined;
        export let disabled: boolean;
        export let clearable: boolean;
        export let required: boolean;
        export let loading: boolean;
        export let options: never[];
        export function onBlur(): void;
        export let getOptionSelected: null;
        export let getOptionLabel: null;
        export let renderOption: null;
        export let noOptionsText: {
            id: string;
            defaultMessage: string;
        };
        export let loadingText: {
            id: string;
            defaultMessage: string;
        };
        export let helperText: undefined;
        export { defaultRenderTags as renderTags };
        export let returnFullObject: boolean;
        export let placeholder: undefined;
        export let freeSolo: boolean;
        export let dataTestId: undefined;
        export let useBuiltInErrors: boolean;
    }
    namespace propTypes {
        let multi_1: PropTypes.Requireable<boolean>;
        export { multi_1 as multi };
        let errors_1: PropTypes.Requireable<(string | null | undefined)[]>;
        export { errors_1 as errors };
        export let keyValue: PropTypes.Validator<string>;
        let label_1: PropTypes.Requireable<string>;
        export { label_1 as label };
        let required_1: PropTypes.Requireable<boolean>;
        export { required_1 as required };
        let disabled_1: PropTypes.Requireable<boolean>;
        export { disabled_1 as disabled };
        let clearable_1: PropTypes.Requireable<boolean>;
        export { clearable_1 as clearable };
        let value_1: PropTypes.Requireable<any>;
        export { value_1 as value };
        let onBlur_1: PropTypes.Requireable<(...args: any[]) => any>;
        export { onBlur_1 as onBlur };
        let loadingText_1: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        export { loadingText_1 as loadingText };
        let noOptionsText_1: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        export { noOptionsText_1 as noOptionsText };
        let helperText_1: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        export { helperText_1 as helperText };
        let options_1: PropTypes.Requireable<any[]>;
        export { options_1 as options };
        let loading_1: PropTypes.Requireable<boolean>;
        export { loading_1 as loading };
        export let onChange: PropTypes.Validator<(...args: any[]) => any>;
        let getOptionLabel_1: PropTypes.Requireable<object>;
        export { getOptionLabel_1 as getOptionLabel };
        let getOptionSelected_1: PropTypes.Requireable<object>;
        export { getOptionSelected_1 as getOptionSelected };
        let renderOption_1: PropTypes.Requireable<object>;
        export { renderOption_1 as renderOption };
        export let renderTags: PropTypes.Requireable<(...args: any[]) => any>;
        let returnFullObject_1: PropTypes.Requireable<boolean>;
        export { returnFullObject_1 as returnFullObject };
        let placeholder_1: PropTypes.Requireable<string>;
        export { placeholder_1 as placeholder };
        let freeSolo_1: PropTypes.Requireable<boolean>;
        export { freeSolo_1 as freeSolo };
        let dataTestId_1: PropTypes.Requireable<string>;
        export { dataTestId_1 as dataTestId };
        let useBuiltInErrors_1: PropTypes.Requireable<boolean>;
        export { useBuiltInErrors_1 as useBuiltInErrors };
    }
}
import { baseRenderTagsWithTooltip } from './utils';
import { baseRenderTags } from './utils';
import { renderTagsWithTooltip } from './utils';
import React from 'react';
import { defaultRenderTags } from './utils';
import PropTypes from 'prop-types';
export { SelectCustom as Select, baseRenderTagsWithTooltip, baseRenderTags as renderTags, renderTagsWithTooltip };
