import { FunctionComponent } from 'react';
declare const PALETTE_COLORS: readonly ["primary", "secondary", "error", "info", "success", "warning"];
type PaletteColor = (typeof PALETTE_COLORS)[number];
/** A theme colour name, `'default'` (grey), or any CSS colour (`#4dd0e1`, `red`...). */
export type ChipListColor = 'default' | PaletteColor | (string & {});
export type ChipListItem = {
    id: string | number;
    label: string;
    /** Overrides the list's `color` for this chip. */
    color?: ChipListColor;
};
type Props = {
    items: ChipListItem[];
    /** Number of chips shown before collapsing the rest behind "+N". Default: 3. */
    maxVisible?: number;
    /** Colour of every chip, unless an item sets its own. Default: grey. */
    color?: ChipListColor;
};
export declare const ChipList: FunctionComponent<Props>;
export {};
