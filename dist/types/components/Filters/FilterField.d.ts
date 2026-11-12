import { FunctionComponent } from 'react';
import type { FilterField as FilterFieldType, FilterValues } from './types';
type Props = {
    field: FilterFieldType;
    value: any;
    values: FilterValues;
    onChange: (key: string, value: any) => void;
    onEnterPressed?: () => void;
    /** Optional DOM id for the rendered control (e.g. first drawer field). */
    inputId?: string;
};
/**
 * Renders one `field` with the matching input. Unknown types fall back to text;
 * `type: 'custom'` uses `field.renderCustom`.
 */
export declare const FilterField: FunctionComponent<Props>;
export {};
