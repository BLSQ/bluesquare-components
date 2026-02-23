import { FunctionComponent } from 'react';
import { CheckBoxFilterArgs, DropdownOptions, FilterState } from '../../..';
type Props = Omit<CheckBoxFilterArgs, 'handleChange'> & {
    required?: boolean;
    disabled?: boolean;
    option: DropdownOptions<number | string>;
    filterState: FilterState;
    valueIsString?: boolean;
};
/** A checkbox meant to be used with CheckBoxSelectGroup to make a filter that uses checboxes to select a lsit of items
 * the same way a SelectInput would function.
 *  @component
 *  @param option {DropdownOptions<number>} - The label should come already translated
 *  @param keyValue {string} - the key used to retrieve the value in a FilterState.filters object
 *  @param initialValue {boolean}
 *  @param valueIsString {boolean} - set to true if the `value`of the options is not a number or can't be parsed with parseInt
 *  @param filterState {FilterState} - The parent filter's state. Typically generated using `useFilterState`
 *  @param required {boolean} - defaults to `false`
 *  @param disabled {boolean} - defaults to `false`
 */
export declare const CheckBoxFilterItem: FunctionComponent<Props>;
export {};
