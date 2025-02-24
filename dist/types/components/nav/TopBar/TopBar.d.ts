import { ComponentClass, FunctionComponent, ReactNode } from 'react';
export declare const styles: (theme: any) => {
    menuButton: {
        [x: number]: {
            marginRight: string;
            marginLeft: string;
        };
    };
    version: {
        fontSize: number;
        display: string;
        marginTop: number;
    };
    root: {
        '&.MuiToolbar-gutters': {
            paddingRight: string;
        };
    };
    logoutButton: {
        padding: any;
    };
};
export declare const useStyles: (props?: any) => import("@mui/styles").ClassNameMap<"version" | "root" | "menuButton" | "logoutButton">;
export type Props = {
    title?: string;
    appTitle?: string;
    children: ReactNode;
    rightEndComponent?: FunctionComponent | ComponentClass;
    displayBackButton?: boolean;
    goBack?: () => void;
    displayMenuButton?: boolean;
    disableShadow?: boolean;
};
export declare const TopBar: FunctionComponent<Props>;
