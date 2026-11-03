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
 * Right drawer from screenshot 3: grouped inputs, CLEAR / APPLY footer.
 * CLEAR only resets the draft; closing without APPLY discards it.
 */
export declare const FiltersDrawer: FunctionComponent<Props>;
export {};
