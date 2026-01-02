import React, { FunctionComponent, ReactNode } from 'react';

import { MESSAGES } from './messages';
import { MultiSelect } from './multi';
import { SingleSelect } from './single';
import {
    baseRenderTags,
    baseRenderTagsWithTooltip,
    defaultRenderTags,
    renderTagsWithTooltip,
} from './utils';
import { IntlMessage } from '../../../types/types';
import { AutocompleteRenderGetTagProps } from '@mui/material/Autocomplete';

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
type Props = {
    keyValue: string;
    onChange: (value: any) => void;
    errors?: string[];
    label?: string;
    value?: any;
    required?: boolean;
    disabled?: boolean;
    clearable?: boolean;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
    loadingText?: IntlMessage;
    noOptionsText?: IntlMessage;
    helperText?: ReactNode;
    options?: any[];
    loading?: boolean;
    getOptionLabel?: any;
    getOptionSelected?: any;
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
    renderOption?: (
        props: Record<string, any>,
        option: Record<string, any>,
    ) => React.ReactNode;
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
    renderTags?: (
        value: any[],
        getTagProps: AutocompleteRenderGetTagProps,
    ) => React.ReactNode;
    returnFullObject?: boolean;
    placeholder?: string;
    dataTestId?: string;
    freeSolo?: boolean;
    useBuiltInErrors?: boolean;
    multi?: boolean;
};

const SelectCustom: FunctionComponent<Props> = ({
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
    getOptionLabel,
    getOptionSelected,
    renderOption,
    renderTags = defaultRenderTags,
    returnFullObject = false,
    placeholder,
    freeSolo = false,
    dataTestId,
    useBuiltInErrors = true,
}) => {
    if (multi) {
        return (
            <MultiSelect
                errors={errors}
                keyValue={keyValue}
                label={label}
                required={required}
                disabled={disabled}
                clearable={clearable}
                value={value}
                onBlur={onBlur}
                loadingText={loadingText}
                noOptionsText={noOptionsText}
                helperText={helperText}
                options={options}
                loading={loading}
                onChange={onChange}
                getOptionLabel={getOptionLabel}
                getOptionSelected={getOptionSelected}
                renderOption={renderOption}
                renderTags={renderTags}
                returnFullObject={returnFullObject}
                placeholder={placeholder}
                dataTestId={dataTestId}
                useBuiltInErrors={useBuiltInErrors}
            />
        );
    }
    return (
        <SingleSelect
            errors={errors}
            keyValue={keyValue}
            label={label}
            required={required}
            disabled={disabled}
            clearable={clearable}
            value={value}
            onBlur={onBlur}
            loadingText={loadingText}
            noOptionsText={noOptionsText}
            helperText={helperText}
            options={options}
            loading={loading}
            onChange={onChange}
            getOptionLabel={getOptionLabel}
            getOptionSelected={getOptionSelected}
            renderOption={renderOption}
            renderTags={renderTags}
            returnFullObject={returnFullObject}
            placeholder={placeholder}
            freeSolo={freeSolo}
            dataTestId={dataTestId}
            useBuiltInErrors={useBuiltInErrors}
        />
    );
};

export {
    SelectCustom as Select,
    baseRenderTagsWithTooltip,
    baseRenderTags as renderTags,
    renderTagsWithTooltip,
};
