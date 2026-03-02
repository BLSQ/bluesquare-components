import { FunctionComponent } from 'react';
import { SxProps } from '@mui/material';
import { RenderProps } from './types';
type Props = {
    items: any[];
    onChange: (items: any[]) => void;
    RenderItem: FunctionComponent<RenderProps>;
    handle?: boolean;
    disabled?: boolean;
    listSx?: SxProps;
    listItemSx?: SxProps;
    dragDelay?: number;
};
export declare const SortableList: FunctionComponent<Props>;
export {};
