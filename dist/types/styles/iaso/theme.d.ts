export const theme: import("@mui/material/styles").Theme;
export namespace rawTheme {
    namespace typography {
        const useNextVariants: boolean;
    }
    const textColor: string;
    namespace palette {
        export namespace primary {
            const main: string;
            const secondary: string;
            const background: string;
        }
        export namespace gray {
            const main_1: string;
            export { main_1 as main };
            export const border: string;
            const background_1: string;
            export { background_1 as background };
        }
        export namespace mediumGray {
            const main_2: string;
            export { main_2 as main };
            const border_1: string;
            export { border_1 as border };
        }
        export namespace ligthGray {
            const main_3: string;
            export { main_3 as main };
            const border_2: string;
            export { border_2 as border };
            const background_2: string;
            export { background_2 as background };
        }
        export namespace error {
            const main_4: string;
            export { main_4 as main };
            const background_3: string;
            export { background_3 as background };
            export const backgroundHard: string;
        }
        export namespace success {
            const main_5: string;
            export { main_5 as main };
            const background_4: string;
            export { background_4 as background };
        }
        export namespace border_3 {
            const main_6: string;
            export { main_6 as main };
            export const hover: string;
        }
        export { border_3 as border };
        export namespace yellow {
            const main_7: string;
            export { main_7 as main };
        }
    }
    namespace components {
        namespace MuiInputBase {
            namespace defaultProps {
                const variant: string;
            }
        }
        namespace MuiSelect {
            export namespace defaultProps_1 {
                const variant_1: string;
                export { variant_1 as variant };
            }
            export { defaultProps_1 as defaultProps };
        }
    }
}
