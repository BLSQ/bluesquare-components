import type { MouseEvent, ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material';
import type { IntlMessage } from '../../../types/types';

export type ActionLabel = IntlMessage | string;

export type ActionItem = {
    key: string;
    label?: ActionLabel;
    icon?: ReactNode;
    tooltip?: ActionLabel;
    onClick?: (event: MouseEvent<HTMLElement>) => void;
    href?: string;
    download?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    color?: string;
    size?: 'small' | 'medium' | 'large';
    iconSize?: 'small' | 'medium' | 'large' | 'inherit';
    menu?: boolean;
    children?: TableAction[];
    sx?: SxProps<Theme>;
};

export type ActionDivider = {
    type: 'divider';
    hidden?: boolean;
};

export type ActionSection = {
    type: 'section';
    label: ActionLabel;
    hidden?: boolean;
};

export type TableAction =
    | ActionItem
    | ActionDivider
    | ActionSection
    | false
    | null
    | undefined;

export type CellAction = Omit<ActionItem, 'children'> & {
    type: 'action';
    children?: CellEntry[];
};
export type CellDivider = { type: 'divider'; key: string };
export type CellSection = ActionSection & { key: string };
export type CellEntry = CellAction | CellDivider | CellSection;
