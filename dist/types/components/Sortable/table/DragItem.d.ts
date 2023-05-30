import { FunctionComponent } from 'react';
import { Active } from '@dnd-kit/core';
import { ColumnWithAccessor } from './types';
import { Item } from '../types';
declare type Props = {
    items: Item[];
    columns: ColumnWithAccessor[];
    activeItem?: Active;
};
export declare const DragItem: FunctionComponent<Props>;
export {};
