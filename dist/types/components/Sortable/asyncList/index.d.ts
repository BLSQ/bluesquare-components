import React, { FC } from 'react';
import { SxProps, Theme } from '@mui/material';
import { RenderAsyncListItemProps } from './types';
interface ItemType {
    id: number | string;
}
type Props<T extends ItemType> = {
    items: T[];
    listSx?: SxProps<Theme>;
    itemSx?: SxProps<Theme>;
    RenderItem: FC<RenderAsyncListItemProps<T>>;
    disabled?: boolean;
    onDragEnd?: (arg0: {
        resume: () => void;
        abort: () => void;
        items: T[];
    }) => void;
};
export declare const AsyncSortableList: <T extends ItemType>(props: Props<T>) => React.ReactElement<Props<T>>;
export {};
