import { FunctionComponent } from 'react';
import { Column, Item } from './types';
declare type Props = {
    items: Item[];
    onChange: (items: Item[]) => void;
    columns: Column[];
    disabled?: boolean;
};
export declare const SortableTable: FunctionComponent<Props>;
export {};
//# sourceMappingURL=index.d.ts.map