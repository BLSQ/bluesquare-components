import React, { FunctionComponent } from 'react';
import { SxProps, Theme } from '@mui/material';
import { RenderAsyncListItemProps } from './types';
interface ItemType {
    id: number | string;
}
type Props<T extends ItemType> = {
    items: T[];
    listSx?: SxProps<Theme>;
    itemSx?: SxProps<Theme>;
    RenderItem: FunctionComponent<RenderAsyncListItemProps<T>>;
    showOverlay?: boolean;
    onDragEnd?: (arg0: {
        resume: () => void;
        abort: () => void;
        items: T[];
    }) => void;
};
export declare const AsyncSortableList: <T extends ItemType>({ items, listSx, itemSx, RenderItem, showOverlay, onDragEnd, }: Props<T>) => React.JSX.Element;
export {};
