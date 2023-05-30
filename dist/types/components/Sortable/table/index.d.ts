import { FunctionComponent } from 'react';
import { ColumnWithAccessor } from './types';
import { Item } from '../types';
declare type Props = {
    items: Item[];
    onChange: (items: Item[]) => void;
    columns: ColumnWithAccessor[];
    disabled?: boolean;
};
export declare const SortableTable: FunctionComponent<Props>;
export {};
