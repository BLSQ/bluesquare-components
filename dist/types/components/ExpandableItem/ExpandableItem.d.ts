import { FunctionComponent, ReactChildren, ReactNode } from 'react';
declare type Props = {
    openOnMount?: boolean;
    children: ReactChildren | ReactNode;
    label: string;
    preventCollapse?: boolean;
    titleColor?: 'initial' | 'primary' | 'secondary' | 'inherit' | 'textPrimary' | 'textSecondary' | 'error' | undefined;
    titleVariant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'srOnly' | 'inherit';
    backgroundColor?: string;
};
export declare const ExpandableItem: FunctionComponent<Props>;
export {};
