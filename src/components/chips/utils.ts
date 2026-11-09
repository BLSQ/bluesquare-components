import type { Palette, Theme } from '@mui/material/styles';

/** Palette keys that have a `.main` swatch (`primary`, `secondary`, plus any theme augmentation). */
export type PaletteMainKey = {
    [K in keyof Palette]: Palette[K] extends { main: string } ? K : never;
}[keyof Palette];

/** A theme palette name, `'default'` (grey), or any CSS colour. */
export type ChipColor = PaletteMainKey | 'default' | (string & {});

const hasMain = (value: unknown): value is { main: string } =>
    value !== null &&
    typeof value === 'object' &&
    'main' in value &&
    typeof (value as { main: unknown }).main === 'string';

/** Turn a palette name into `theme.palette[name].main`; leave CSS colours alone. */
export const resolveChipColor = (theme: Theme, color?: ChipColor): string => {
    if (!color) {
        return theme.palette.secondary.main;
    }
    if (color === 'default') {
        return theme.palette.grey[500];
    }
    const fromPalette = theme.palette[color as keyof Palette];
    if (hasMain(fromPalette)) {
        return fromPalette.main;
    }
    return color;
};
