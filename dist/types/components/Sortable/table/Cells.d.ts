import { FunctionComponent } from 'react';
import { ColumnWithAccessor } from './types';
import { Item } from '../types';
declare type Props = {
    columns: ColumnWithAccessor[];
    item: Item;
};
export declare const SortableCells: FunctionComponent<Props>;
export {};
