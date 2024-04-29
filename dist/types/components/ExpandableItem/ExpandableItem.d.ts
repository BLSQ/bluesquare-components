import { FunctionComponent, ReactChildren, ReactNode } from 'react';
type Props = {
    openOnMount?: boolean;
    children: ReactChildren | ReactNode;
    label: string;
    preventCollapse?: boolean;
    titleColor?: 'initial' | 'primary' | 'secondary' | 'inherit' | 'textPrimary' | 'textSecondary' | 'error' | undefined;
    titleVariant?: 'body1' | 'body2' | 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'inherit' | 'overline' | 'subtitle1' | 'subtitle2' | string;
    backgroundColor?: string;
};
export declare const ExpandableItem: FunctionComponent<Props>;
export {};
