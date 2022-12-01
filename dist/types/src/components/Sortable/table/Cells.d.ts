import { FunctionComponent } from 'react';
import { Column } from './types';
declare type Props = {
    columns: Column[];
    id: number | string;
    itemsMap: Record<any, any>;
};
export declare const SortableCells: FunctionComponent<Props>;
export {};
