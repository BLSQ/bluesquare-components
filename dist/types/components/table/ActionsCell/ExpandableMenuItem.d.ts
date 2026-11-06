import { FunctionComponent, ReactNode } from 'react';
import { CellAction } from './types';
export type ExpandableMenuItemProps = {
    entry: CellAction;
    color?: string;
    iconSize?: 'small' | 'medium' | 'large' | 'inherit';
    children?: ReactNode;
};
export declare const ExpandableMenuItem: FunctionComponent<ExpandableMenuItemProps>;
