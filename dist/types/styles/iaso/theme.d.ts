export const theme: import("@mui/material/styles").Theme;
export namespace rawTheme {
    namespace typography {
        let useNextVariants: boolean;
    }
    let textColor: string;
    namespace palette {
        export namespace primary {
            let main: string;
            let secondary: string;
            let background: string;
        }
        export namespace gray {
            let main_1: string;
            export { main_1 as main };
            export let border: string;
            let background_1: string;
            export { background_1 as background };
        }
        export namespace mediumGray {
            let main_2: string;
            export { main_2 as main };
            const border_1: string;
            export { border_1 as border };
        }
        export namespace ligthGray {
            let main_3: string;
            export { main_3 as main };
<<<<<<< HEAD
            let border_1: string;
            export { border_1 as border };
            let background_2: string;
=======
            const border_2: string;
            export { border_2 as border };
            const background_2: string;
>>>>>>> IA-2850_react-router_update_dev
            export { background_2 as background };
        }
        export namespace error {
            let main_4: string;
            export { main_4 as main };
            let background_3: string;
            export { background_3 as background };
            export let backgroundHard: string;
        }
        export namespace success {
            let main_5: string;
            export { main_5 as main };
            let background_4: string;
            export { background_4 as background };
        }
<<<<<<< HEAD
        export namespace border_2 {
            let main_6: string;
=======
        export namespace border_3 {
            const main_6: string;
>>>>>>> IA-2850_react-router_update_dev
            export { main_6 as main };
            export let hover: string;
        }
        export { border_3 as border };
        export namespace yellow {
            let main_7: string;
            export { main_7 as main };
        }
    }
    namespace components {
        namespace MuiInputBase {
            namespace defaultProps {
                let variant: string;
            }
        }
        namespace MuiSelect {
            export namespace defaultProps_1 {
                let variant_1: string;
                export { variant_1 as variant };
            }
            export { defaultProps_1 as defaultProps };
        }
    }
}
