import { FunctionComponent, ReactNode } from 'react';
import { SxProps, Theme } from '@mui/material';
import { ActionLabel, TableAction } from './types';
export type ActionsCellProps = {
    actions: readonly TableAction[];
    maxInline?: number;
    size?: 'small' | 'medium' | 'large';
    iconSize?: 'small' | 'medium' | 'large' | 'inherit';
    color?: string;
    disabled?: boolean;
    menuIcon?: ReactNode;
    menuLabel?: ActionLabel;
    sx?: SxProps<Theme>;
};
/** Inline icons up to `maxInline`, the rest behind a ⋮ menu. */
export declare const ActionsCell: FunctionComponent<ActionsCellProps>;
