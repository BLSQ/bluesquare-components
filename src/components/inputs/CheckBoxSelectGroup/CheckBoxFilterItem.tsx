import React, { FunctionComponent, useCallback } from 'react';
import {
    Checkbox,
    CheckBoxFilterArgs,
    DropdownOptions,
    FilterState,
    useCheckBoxFilter,
} from '../../..';

type Props = Omit<CheckBoxFilterArgs, 'handleChange'> & {
    required?: boolean;
    disabled?: boolean;
    option: DropdownOptions<number>;
    filterState: FilterState;
};

/** A checkbox meant to be used with CheckBoxSelectGroup to make a filter that uses checboxes to select a lsit of items
 * the same way a SelectInput would function.
 *  @component
 *  @param option {DropdownOptions<number>} - The label should come already translated
 *  @param keyValue {string} - the key used to retrieve the value in a FilterState.filters object
 *  @param initialValue {boolean}
 *  @param filterState {FilterState} - The parent filter's state. Typically generated using `useFilterState`
 *  @param required {boolean} - defaults to `false`
 *  @param disabled {boolean} - defaults to `false`
 */

export const CheckBoxFilterItem: FunctionComponent<Props> = ({
    keyValue,
    initialValue,
    option,
    filterState,
    required = false,
    disabled = false,
}) => {
    const handleChange = useCallback(
        (_, value) => {
            if (value) {
                const newValue = filterState.filters[keyValue]
                    ? `${filterState.filters[keyValue]},${option.value}`
                    : `${option.value}`;

                filterState.handleChange(keyValue, newValue);
            } else {
                const newValue = filterState.filters[keyValue]
                    ?.split(',')
                    .map(id => id.trim())
                    .filter(id => parseInt(id, 10) !== option.value)
                    .join(',');

                filterState.handleChange(
                    keyValue,
                    newValue ? newValue : undefined,
                );
            }
        },
        [
            option,
            filterState.handleChange,
            filterState.filters[keyValue],
            keyValue,
        ],
    );

    const { checkBoxValue, handleCheckboxChange } = useCheckBoxFilter({
        initialValue,
        handleChange,
        keyValue,
    });
    return (
        <Checkbox
            keyValue={keyValue}
            disabled={disabled}
            onChange={newValue => handleCheckboxChange(keyValue, newValue)}
            value={checkBoxValue}
            label={option.label ?? ''}
            required={required}
        />
    );
};
