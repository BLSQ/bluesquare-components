import { ReactNode, FunctionComponent } from 'react';
import { SxProps, Theme } from '@mui/material';
import { HandleProps } from './types';
type Props = {
    id: string | number;
    children: (handleProps?: HandleProps) => ReactNode;
    handle?: boolean;
    sx?: SxProps<Theme> | undefined;
    isLast?: boolean;
};
export declare const SortableItem: FunctionComponent<Props>;
export {};
