import PropTypes from 'prop-types';
import React from 'react';

import { MESSAGES } from './messages';
import { MultiSelect } from './multi';
import { SingleSelect } from './single';
import {
    baseRenderTags,
    baseRenderTagsWithTooltip,
    defaultRenderTags,
    renderTagsWithTooltip,
} from './utils';

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
const SelectCustom = ({
    multi = false,
    errors = [],
    keyValue,
    label,
    required = false,
    disabled = false,
    clearable = true,
    value,
    onBlur = () => {},
    loadingText = MESSAGES.loadingOptions,
    noOptionsText = MESSAGES.noOptions,
    helperText,
    options = [],
    loading = false,
    onChange,
    getOptionLabel = null,
    getOptionSelected = null,
    renderOption = null,
    renderTags = defaultRenderTags,
    returnFullObject = false,
    placeholder,
    freeSolo = false,
    dataTestId,
    useBuiltInErrors = true,
}) => {
    if (allProps.multi) {
        return <MultiSelect {...allProps} />;
    }
    return <SingleSelect {...allProps} />;
};

SelectCustom.propTypes = {
    multi: PropTypes.bool,
    errors: PropTypes.arrayOf(PropTypes.string),
    keyValue: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    clearable: PropTypes.bool,
    value: PropTypes.any,
    onBlur: PropTypes.func,
    loadingText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    noOptionsText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    helperText: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    options: PropTypes.array,
    loading: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    getOptionLabel: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    getOptionSelected: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    /**
     * Customizes how each option appears in the dropdown menu when opened.
     * This affects the list items that appear when you click to open the select.
     *
     * @param {object} props - The props to spread on the <li> element
     * @param {object} option - The option object from the options array
     * @param {function} getOptionLabel - Function to get the label from an option
     * @returns {React.ReactElement} The rendered option element
     *
     * @example
     * renderOption={(props, option) => (
     *   <li {...props}>
     *     <span style={{ color: option.color }}>{option.label}</span>
     *   </li>
     * )}
     */
    renderOption: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
    /**
     * Customizes how selected items are displayed as chips/tags (multi-select only).
     * This affects the visual representation of selected values in the input field.
     *
     * @param {Array} tagValue - Array of selected option objects
     * @param {function} getTagProps - Function that returns props for each tag (includes onClick for removal)
     * @returns {React.ReactElement[]} Array of rendered tag elements
     *
     * @example
     * renderTags={(tagValue, getTagProps) =>
     *   tagValue.map((option, index) => (
     *     <Chip
     *       label={option.label}
     *       style={{ backgroundColor: option.color }}
     *       {...getTagProps({ index })}
     *     />
     *   ))
     * }
     */
    renderTags: PropTypes.func,
    returnFullObject: PropTypes.bool,
    placeholder: PropTypes.string,
    freeSolo: PropTypes.bool,
    dataTestId: PropTypes.string,
    useBuiltInErrors: PropTypes.bool,
};

export {
    SelectCustom as Select,
    baseRenderTagsWithTooltip,
    baseRenderTags as renderTags,
    renderTagsWithTooltip,
};
