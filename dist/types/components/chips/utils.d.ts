import type { Palette, Theme } from '@mui/material/styles';
/** Palette keys that have a `.main` swatch (`primary`, `secondary`, plus any theme augmentation). */
export type PaletteMainKey = {
    [K in keyof Palette]: Palette[K] extends {
        main: string;
    } ? K : never;
}[keyof Palette];
/** A theme palette name, `'default'` (grey), or any CSS colour. */
export type ChipColor = PaletteMainKey | 'default' | (string & {});
/** Turn a palette name into `theme.palette[name].main`; leave CSS colours alone. */
export declare const resolveChipColor: (theme: Theme, color?: ChipColor) => string;
