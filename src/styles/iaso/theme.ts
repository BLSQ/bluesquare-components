import { createTheme, ThemeOptions } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';

/** Shared shape for gray / lightGray palette entries. */
export type GrayScalePalette = {
    main: string;
    border: string;
    background: string;
};

export type MediumGrayPalette = {
    main: string;
    border: string;
};

export type BorderPalette = {
    main: string;
    hover: string;
};

export type YellowPalette = {
    main: string;
};

declare module '@mui/material/styles' {
    interface Palette {
        gray: GrayScalePalette;
        mediumGray: MediumGrayPalette;
        lightGray: GrayScalePalette;
        border: BorderPalette;
        yellow: YellowPalette;
    }

    interface PaletteOptions {
        gray?: GrayScalePalette;
        mediumGray?: MediumGrayPalette;
        lightGray?: GrayScalePalette;
        border?: BorderPalette;
        yellow?: YellowPalette;
    }

    /** Extra fields used on primary / error / success in IASO themes. */
    interface PaletteColor {
        secondary?: string;
        background?: string;
        backgroundHard?: string;
    }

    interface SimplePaletteColorOptions {
        secondary?: string;
        background?: string;
        backgroundHard?: string;
    }

    interface Theme {
        textColor: string;
    }

    interface ThemeOptions {
        textColor?: string;
    }
}

declare module '@mui/private-theming' {
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface DefaultTheme extends Theme {}
}

export const rawTheme = {
    textColor: '#333',
    palette: {
        primary: {
            main: '#006699',
            secondary: '#0066cc',
            background: '#F5F5F5',
        },
        gray: {
            main: '#666',
            border: 'rgba(0,0,0,0.02)',
            background: 'rgba(0,0,0,0.03)',
        },
        mediumGray: {
            main: '#A2A2A2',
            border: 'rgb(224, 224, 224)',
        },
        lightGray: {
            main: '#F7F7F7',
            border: 'rgba(0, 0, 0, 0.12)',
            background: 'rgba(0, 0, 0, 0.012)',
        },
        error: {
            main: 'rgb(215, 25, 28)',
            background: 'rgba(215, 25, 28, 0.2)',
            backgroundHard: 'rgba(215, 25, 28, 0.7)',
        },
        success: {
            main: '#4caf50',
            background: 'rgba(76,175,80, 0.2)',
        },
        border: {
            main: 'rgba(0,0,0,0.23)',
            hover: 'rgba(0,0,0,0.87)',
        },
        yellow: {
            main: '#FFD835',
        },
    },
    components: {
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
            },
        },
        MuiSelect: {
            defaultProps: {
                variant: 'outlined',
            },
        },
    },
} as const satisfies ThemeOptions;

const theme = createTheme(rawTheme);

export { theme };
