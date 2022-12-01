import { FunctionComponent } from 'react';
import { Column, Item } from './types';
declare type Props = {
    items: Item[];
    disabled?: boolean;
    onChange: (items: Item[]) => void;
    getItemId?: (item: Item) => string;
    columns: Column[];
};
export declare const SortableTable: FunctionComponent<Props>;
export {};
