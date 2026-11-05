import { FunctionComponent, ReactNode } from 'react';
import type { FilterField as FilterFieldType, FilterLabel, FilterSection, FilterValues } from './types';
type Props = {
    open: boolean;
    onClose: () => void;
    fields: FilterFieldType[];
    sections?: FilterSection[];
    /** Applied values. The drawer edits a draft and only commits on APPLY. */
    values: FilterValues;
    onApply: (values: FilterValues) => void;
    title?: FilterLabel;
    anchor?: 'left' | 'right';
    width?: number;
    /** Extra content under the fields, e.g. a query builder. */
    children?: ReactNode;
};
/**
 * Side panel for editing filters. `values` is the last applied set;
 * everything typed here is a draft. APPLY commits via `onApply`,
 * CLEAR empties the draft only, and closing the drawer throws the draft
 * away so the page filters stay as they were.
 */
export declare const FiltersDrawer: FunctionComponent<Props>;
export {};
