import { FunctionComponent } from 'react';
import { CellEntry } from './types';
export type MenuEntryProps = {
    entry: CellEntry;
    color?: string;
    iconSize?: 'small' | 'medium' | 'large' | 'inherit';
    closeMenu: () => void;
    inset?: boolean;
};
export declare const MenuEntry: FunctionComponent<MenuEntryProps>;
