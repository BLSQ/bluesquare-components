import {
    cloneElement,
    isValidElement,
    type ElementType,
    type ReactElement,
    type ReactNode,
} from 'react';
import type { IntlFormatMessage, IntlMessage } from '../../../types/types';
import type { ActionLabel, CellAction } from './types';

export const withIconSize = (
    icon: ReactNode,
    iconSize?: 'small' | 'medium' | 'large' | 'inherit',
): ReactNode => {
    if (!iconSize || !isValidElement(icon)) {
        return icon;
    }
    const element = icon as ReactElement<{ fontSize?: string }>;
    return element.props.fontSize
        ? icon
        : cloneElement(element, { fontSize: iconSize });
};

export const linkProps = (action: CellAction, inAppLink: ElementType) => {
    if (!action.href) {
        return {};
    }
    if (action.download) {
        return { component: 'a', href: action.href, download: true };
    }
    return { component: inAppLink, to: action.href };
};

export const labelOf = (
    formatMessage: IntlFormatMessage,
    label?: ActionLabel,
): string => {
    if (!label) return '';
    return typeof label === 'string'
        ? label
        : formatMessage(label as IntlMessage);
};
