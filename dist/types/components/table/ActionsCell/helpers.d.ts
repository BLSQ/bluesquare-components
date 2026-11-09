import { type ElementType, type ReactNode } from 'react';
import type { IntlFormatMessage } from '../../../types/types';
import type { ActionLabel, CellAction } from './types';
export declare const withIconSize: (icon: ReactNode, iconSize?: "small" | "medium" | "large" | "inherit") => ReactNode;
export declare const linkProps: (action: CellAction, inAppLink: ElementType) => {
    component?: undefined;
    href?: undefined;
    download?: undefined;
    to?: undefined;
} | {
    component: string;
    href: string;
    download: boolean;
    to?: undefined;
} | {
    component: ElementType;
    to: string;
    href?: undefined;
    download?: undefined;
};
export declare const labelOf: (formatMessage: IntlFormatMessage, label?: ActionLabel) => string;
