import { FunctionComponent } from 'react';
import { DropdownOptions, FilterState } from '../../..';
type Props = {
    options?: DropdownOptions<number>[];
    isLoading?: boolean;
    keyValue: string;
    filterState: FilterState;
    defaultItemCount?: number;
    title?: string;
};
/** A group of checkboxes that constitute a filter akin to a SelectInput. State and options are received from the parent. Each CheckBoxSelectGroup constitues one filter,
 * i.e one entry in a `FilterState.filters` object.
 * @component
 * @param title {string} - Title to be displayed above the group of checkboxes. Typically the filter name
 * @param keyValue {string} - the key used to retrieve the value in a FilterState.filters object
 * @param filterState {FilterState} - The parent filter's state. Typically generated using `useFilterState`
 * @param options {DropdownOptions<number>[]} - The list of possible values for the filter. Each element in the list corresponds to a checkbox
 * @param isLoading {boolean} - Can be used when options are fetched asynchronously to indicate data is being loaded
 * @param defaultItemCount (number) - The amount of items to show when `options`has many elements. If options.length > defaultItemCount, a "show more" button will be displayed. Defaults to 5
 */
export declare const CheckBoxSelectGroup: FunctionComponent<Props>;
export {};
