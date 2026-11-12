import { FunctionComponent, ReactElement } from 'react';
import { ChipColor } from '../chips/utils';
export type ChipListItem = {
    id: string | number;
    label: string;
    /** Overrides the list's `color` for this chip. */
    color?: ChipColor;
    /** Native tooltip of the chip, e.g. a code or more details. */
    title?: string;
    icon?: ReactElement;
};
type Props = {
    items: ChipListItem[];
    /** Number of chips shown before collapsing the rest behind "+N". Default: 3. */
    maxVisible?: number;
    /** Colour of every chip, unless an item sets its own. Default: grey. */
    color?: ChipColor;
};
export declare const ChipList: FunctionComponent<Props>;
export {};
