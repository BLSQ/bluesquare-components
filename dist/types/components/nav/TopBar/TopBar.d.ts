import { ComponentClass, FunctionComponent, ReactNode } from 'react';
type Props = {
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
export {};
