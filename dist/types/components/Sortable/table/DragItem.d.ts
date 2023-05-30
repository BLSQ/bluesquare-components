import { FunctionComponent } from 'react';
import { Active } from '@dnd-kit/core';
import { Item } from '../types';
import { ColumnWithAccessor } from '../../table/Table/types';
declare type Props = {
    items: Item[];
    columns: ColumnWithAccessor[];
    activeItem?: Active;
};
export declare const DragItem: FunctionComponent<Props>;
export {};
