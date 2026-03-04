import { FC, FunctionComponent } from 'react';
import { SxProps, Theme } from '@mui/material';
import { RenderAsyncListItemProps } from './types';
type Props = {
    items: any[];
    listSx?: SxProps<Theme>;
    itemSx?: SxProps<Theme>;
    RenderItem: FunctionComponent<RenderAsyncListItemProps>;
    showOverlay?: boolean;
    onDragEnd?: (arg0: {
        resume: () => void;
        abort: () => void;
        items: any[];
    }) => void;
};
export declare const AsyncSortableList: FC<Props>;
export {};
