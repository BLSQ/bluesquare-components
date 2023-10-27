import { FunctionComponent } from 'react';
import { Item } from '../types';
import { ColumnWithAccessor } from '../../table/Table/types';
type Props = {
    columns: ColumnWithAccessor[];
    item: Item;
};
export declare const SortableCells: FunctionComponent<Props>;
export {};
