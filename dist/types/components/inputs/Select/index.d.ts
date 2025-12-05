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
    namespace propTypes {
        let multi: PropTypes.Requireable<boolean>;
        let errors: PropTypes.Requireable<(string | null | undefined)[]>;
        let keyValue: PropTypes.Validator<string>;
        let label: PropTypes.Requireable<string>;
        let required: PropTypes.Requireable<boolean>;
        let disabled: PropTypes.Requireable<boolean>;
        let clearable: PropTypes.Requireable<boolean>;
        let value: PropTypes.Requireable<any>;
        let onBlur: PropTypes.Requireable<(...args: any[]) => any>;
        let loadingText: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        let noOptionsText: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        let helperText: PropTypes.Requireable<NonNullable<string | object | null | undefined>>;
        let options: PropTypes.Requireable<any[]>;
        let loading: PropTypes.Requireable<boolean>;
        let onChange: PropTypes.Validator<(...args: any[]) => any>;
        let getOptionLabel: PropTypes.Requireable<object>;
        let getOptionSelected: PropTypes.Requireable<object>;
        let renderOption: PropTypes.Requireable<object>;
        let renderTags: PropTypes.Requireable<(...args: any[]) => any>;
        let returnFullObject: PropTypes.Requireable<boolean>;
        let placeholder: PropTypes.Requireable<string>;
        let freeSolo: PropTypes.Requireable<boolean>;
        let dataTestId: PropTypes.Requireable<string>;
        let useBuiltInErrors: PropTypes.Requireable<boolean>;
    }
}
import { baseRenderTagsWithTooltip } from './utils';
import { baseRenderTags } from './utils';
import { renderTagsWithTooltip } from './utils';
import React from 'react';
import PropTypes from 'prop-types';
export { SelectCustom as Select, baseRenderTagsWithTooltip, baseRenderTags as renderTags, renderTagsWithTooltip };
