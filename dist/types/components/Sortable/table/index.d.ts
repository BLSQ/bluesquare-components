import { FunctionComponent } from 'react';
import { Item } from '../types';
import { ColumnWithAccessor } from '../../table/Table/types';
type Props = {
    items: Item[];
    onChange: (items: Item[]) => void;
    columns: ColumnWithAccessor[];
    disabled?: boolean;
};
export declare const SortableTable: FunctionComponent<Props>;
export {};
