import { FC, ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material';
type Props = {
    id: number | string;
    index: number;
    sx?: SxProps<Theme>;
    children: ReactNode;
};
export declare const SortableListItem: FC<Props>;
export {};
