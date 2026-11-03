import { FunctionComponent } from 'react';
import type { FilterField as FilterFieldType, FilterValues } from './types';
type Props = {
    field: FilterFieldType;
    value: any;
    values: FilterValues;
    onChange: (key: string, value: any) => void;
    /** e.g. pressing Enter in a search field applies the drawer. */
    onEnterPressed?: () => void;
};
/**
 * Renders one filter field with the matching bluesquare input.
 * Atomic and stateless: unknown types fall back to a text input,
 * `custom` delegates to `field.renderCustom` (org-unit tree, async
 * select, query builder… in the consuming app).
 */
export declare const FilterField: FunctionComponent<Props>;
export {};
