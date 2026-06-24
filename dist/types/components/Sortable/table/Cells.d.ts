import { FunctionComponent } from 'react';
import { ColumnWithAccessor } from '../../table/Table/types';
import { Item } from '../types';
type Props = {
    columns: ColumnWithAccessor[];
    item: Item;
};
export declare const SortableCells: FunctionComponent<Props>;
export {};
