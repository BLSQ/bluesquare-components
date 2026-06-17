import { FunctionComponent } from 'react';
import { Active } from '@dnd-kit/core';
import { ColumnWithAccessor } from '../../table/Table/types';
import { Item } from '../types';
type Props = {
    items: Item[];
    columns: ColumnWithAccessor[];
    activeItem?: Active;
};
export declare const DragItem: FunctionComponent<Props>;
export {};
