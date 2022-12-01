import { FunctionComponent } from 'react';
import { Active } from '@dnd-kit/core';
import { Column } from './types';
declare type Props = {
    ids: (string | number)[];
    activeItem?: Active;
    columns: Column[];
    itemsMap: Record<any, any>;
};
export declare const DragItem: FunctionComponent<Props>;
export {};
