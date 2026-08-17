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
    interface DefaultTheme extends Theme {
    }
}
export declare const rawTheme: {
    readonly textColor: "#333";
    readonly palette: {
        readonly primary: {
            readonly main: "#006699";
            readonly secondary: "#0066cc";
            readonly background: "#F5F5F5";
        };
        readonly gray: {
            readonly main: "#666";
            readonly border: "rgba(0,0,0,0.02)";
            readonly background: "rgba(0,0,0,0.03)";
        };
        readonly mediumGray: {
            readonly main: "#A2A2A2";
            readonly border: "rgb(224, 224, 224)";
        };
        readonly lightGray: {
            readonly main: "#F7F7F7";
            readonly border: "rgba(0, 0, 0, 0.12)";
            readonly background: "rgba(0, 0, 0, 0.012)";
        };
        readonly error: {
            readonly main: "rgb(215, 25, 28)";
            readonly background: "rgba(215, 25, 28, 0.2)";
            readonly backgroundHard: "rgba(215, 25, 28, 0.7)";
        };
        readonly success: {
            readonly main: "#4caf50";
            readonly background: "rgba(76,175,80, 0.2)";
        };
        readonly border: {
            readonly main: "rgba(0,0,0,0.23)";
            readonly hover: "rgba(0,0,0,0.87)";
        };
        readonly yellow: {
            readonly main: "#FFD835";
        };
    };
    readonly components: {
        readonly MuiTextField: {
            readonly defaultProps: {
                readonly variant: "outlined";
            };
        };
        readonly MuiSelect: {
            readonly defaultProps: {
                readonly variant: "outlined";
            };
        };
    };
};
declare const theme: Theme;
export { theme };
