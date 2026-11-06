import { FunctionComponent } from 'react';
export type ChipListItem = {
    id: string | number;
    label: string;
};
type Props = {
    items: ChipListItem[];
    /** Number of chips shown before collapsing the rest behind "+N". Default: 3. */
    maxVisible?: number;
    color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
};
export declare const ChipList: FunctionComponent<Props>;
export {};
