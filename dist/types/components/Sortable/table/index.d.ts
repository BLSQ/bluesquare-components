import { FunctionComponent } from 'react';
import { ColumnWithAccessor } from '../../table/Table/types';
import { Item } from '../types';
type Props = {
    items: Item[];
    onChange: (items: Item[]) => void;
    columns: ColumnWithAccessor[];
    disabled?: boolean;
};
export declare const SortableTable: FunctionComponent<Props>;
export {};
