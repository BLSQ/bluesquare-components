import { ReactNode, FunctionComponent } from 'react';
import { SxProps } from '@mui/material';
import { HandleProps } from './types';
type Props = {
    id: string;
    children: (handleProps?: HandleProps) => ReactNode;
    handle?: boolean;
    sx?: SxProps;
    isLast?: boolean;
};
export declare const SortableItem: FunctionComponent<Props>;
export {};
